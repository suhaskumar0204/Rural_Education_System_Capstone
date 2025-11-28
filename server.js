// ----------------- IMPORTS -----------------
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

// ----------------- CONFIG -----------------
dotenv.config();

// ----------------- EXPRESS APP -----------------
const app = express();
app.use(cors());
app.use(express.json());

// ----------------- MySQL Connection -----------------
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "tiger",
  database: process.env.DB_NAME || "react_edu",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ----------------- Offline Data -----------------
const offlineData = [
  { question: "hello", answer: "Hi! How can I help you today?" },
  { question: "attendance", answer: "You can mark your attendance from the dashboard." },
  { question: "exam", answer: "Go to 'Take Exam' to start your test." },
  { question: "pdf", answer: "All PDFs are available in the Subjects section." },
  { question: "solve puzzle", answer: "You can solve puzzles in the Puzzle section." },
  { question: "bye", answer: "Goodbye! Have a great day!" },
  { question: "thanks", answer: "You're welcome! 😊" },
];

// ----------------- Helper Function (Offline Chat) -----------------
function getOfflineAnswer(query) {
  query = query.toLowerCase();
  const item = offlineData.find((d) => query.includes(d.question));
  return item ? item.answer : "⚠️ Sorry, I don't know the answer (offline mode).";
}

// ----------------- GPT CHAT -----------------
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
      }
    );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error("🔥 GPT error, switching to offline mode:", err.message);
    const reply = getOfflineAnswer(message);
    res.json({ reply });
  }
});

// ----------------- STUDENT AUTH -----------------
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields required" });

    const [existing] = await db.execute("SELECT * FROM users WHERE email=?", [email]);
    if (existing.length > 0)
      return res.status(400).json({ error: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashed,
    ]);

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    console.error("🔥 Register error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.execute("SELECT * FROM users WHERE email=?", [email]);
    if (rows.length === 0) return res.status(400).json({ error: "Invalid credentials" });

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "2h" }
    );

    res.json({ token, user: { id: user.id, name: user.name } });
  } catch (err) {
    console.error("🔥 Login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------- STUDENT DASHBOARD -----------------
app.get("/api/student/dashboard", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "defaultsecret");
    res.json({
      user: decoded,
      content: ["Lesson 1: Math", "Lesson 2: Science", "Lesson 3: English"],
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// ----------------- EXAM -----------------
app.get("/api/exam/questions", async (req, res) => {
  try {
    const [results] = await db.execute(
      "SELECT id, question, option1, option2, option3, option4 FROM exam_questions"
    );
    res.json({ questions: results });
  } catch (err) {
    console.error("🔥 Exam fetch error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/exam/submit", async (req, res) => {
  try {
    const { userId, answers } = req.body; // answers = [{questionId, answer}]
    const values = answers.map((a) => [userId, a.questionId, a.answer]);
    const query = "INSERT INTO exam_answers (user_id, question_id, answer) VALUES ?";
    await db.query(query, [values]);
    res.json({ success: true });
  } catch (err) {
    console.error("🔥 Exam submit error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ----------------- ATTENDANCE -----------------
app.post("/api/attendance/mark", async (req, res) => {
  const { student_id } = req.body;
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  try {
    await db.query(
      `INSERT INTO attendance (student_id, date, status) VALUES (?, ?, 'present') 
       ON DUPLICATE KEY UPDATE status='present'`,
      [student_id, today]
    );
    res.json({ message: "Attendance marked for today" });
  } catch (err) {
    console.error("🔥 Attendance error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/attendance/:student_id", async (req, res) => {
  const { student_id } = req.params;
  try {
    const [rows] = await db.query(
      `SELECT COUNT(*) as total, SUM(status='present') as attended 
       FROM attendance WHERE student_id = ?`,
      [student_id]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error("🔥 Attendance fetch error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ----------------- TEACHER AUTH -----------------

// ✅ TEACHER REGISTER
app.post("/api/teacher/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required" });

    const [existing] = await db.execute("SELECT * FROM teachers WHERE email=?", [email]);
    if (existing.length > 0)
      return res.status(400).json({ error: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    await db.execute("INSERT INTO teachers (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashed,
    ]);

    res.status(201).json({ message: "Teacher registered successfully" });
  } catch (err) {
    console.error("🔥 Teacher Register Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ TEACHER LOGIN
app.post("/api/teacher/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.execute("SELECT * FROM teachers WHERE email=?", [email]);
    if (rows.length === 0)
      return res.status(400).json({ error: "Invalid credentials" });

    const teacher = rows[0];
    const valid = await bcrypt.compare(password, teacher.password);
    if (!valid)
      return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: teacher.id, name: teacher.name },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "2h" }
    );

    res.json({ token, teacher: { id: teacher.id, name: teacher.name } });
  } catch (err) {
    console.error("🔥 Teacher login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------- TEACHER DASHBOARD -----------------
app.get("/api/teacher/students", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, email FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- START SERVER -----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ EXPRESS server running on port ${PORT}`));
