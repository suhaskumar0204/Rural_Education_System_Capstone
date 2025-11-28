import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function TakeExam({ user }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // ✅ Technical Questions
  const demoQuestions = [
    { id: 1, question: "Which HTML tag is used to include JavaScript code?", option1: "<link>", option2: "<script>", option3: "<js>", option4: "<code>" },
    { id: 2, question: "Which method converts JSON string to JS object?", option1: "JSON.stringify()", option2: "JSON.parse()", option3: "JSON.convert()", option4: "JSON.toObject()" },
    { id: 3, question: "Which HTTP status means 'Not Found'?", option1: "200", option2: "301", option3: "404", option4: "500" },
    { id: 4, question: "React hook for API calls & side effects?", option1: "useEffect", option2: "useState", option3: "useRef", option4: "useReducer" },
    { id: 5, question: "Time complexity of Binary Search?", option1: "O(n)", option2: "O(log n)", option3: "O(n^2)", option4: "O(1)" },
    { id: 6, question: "Which one is a NoSQL DB?", option1: "MySQL", option2: "MongoDB", option3: "PostgreSQL", option4: "Oracle" },
    { id: 7, question: "Protocol for secure web communication?", option1: "HTTP", option2: "FTP", option3: "SSH", option4: "HTTPS" },
    { id: 8, question: "Command to initialize a Git repo?", option1: "git init", option2: "git start", option3: "git create", option4: "git new" },
    { id: 9, question: "Node.js backend framework?", option1: "React", option2: "Express", option3: "Angular", option4: "Vue" },
    { id: 10, question: "Which ensures only authorized access?", option1: "Integrity", option2: "Confidentiality", option3: "Availability", option4: "Authentication" }
  ];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        if (API) {
          const res = await fetch(`${API}/api/exam/questions`);
          const data = await res.json();
          setQuestions(data.questions?.length ? data.questions : demoQuestions);
        } else setQuestions(demoQuestions);
      } catch (e) {
        setQuestions(demoQuestions);
      }
    };
    fetchQuestions();
  }, []);

  const handleChange = (qId, value) =>
    setAnswers((prev) => ({ ...prev, [qId]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = Object.keys(answers).map((qId) => ({ questionId: +qId, answer: answers[qId] }));
    fetch(`${API}/api/exam/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id || 1, answers: payload }),
    })
      .then(() => setSubmitted(true))
      .catch(console.error);
  };

  // ✅ After Submit Screen
  if (submitted)
    return (
      <div style={page}>
        <div style={glassCard}>
          <h2 style={{ color: "#2ecc71", fontSize: "2rem" }}>✅ Exam Submitted Successfully!</h2>
          <p style={{ fontSize: "1.1rem", color: "#444" }}>Your answers have been saved. Well done!</p>
          <button style={btnBack} onClick={() => navigate("/dashboard")}>⬅ Back to Dashboard</button>
        </div>
      </div>
    );

  return (
    <div style={page}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px 20px" }}>
        <div style={glassCard}>
          <h1 style={heading}>💻 Technical Exam</h1>
          <form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div key={q.id} style={cardQ}>
                <p style={qText}><strong>Q{q.id}.</strong> {q.question}</p>
                {[q.option1, q.option2, q.option3, q.option4].map((opt, i) => (
                  <label key={i} style={optionBox}>
                    <input type="radio" name={`q${q.id}`} value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                    /> {opt}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit" style={btnSubmit}>🚀 Submit Exam</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ✅ Shared Teacher Dashboard Style
const page = {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #74ABE2, #5563DE)",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 15px",
};

const glassCard = {
  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(10px)",
  padding: "40px",
  borderRadius: "20px",
  width: "100%",
  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const heading = {
  fontSize: "2.2rem",
  marginBottom: "25px",
  color: "#fff",
  fontWeight: "700",
};

const cardQ = {
  background: "rgba(255,255,255,0.95)",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  color: "#2c3e50",
};

const qText = { fontSize: "1.2rem", fontWeight: "600" };

const optionBox = {
  display: "block",
  background: "#eef5ff",
  padding: "10px",
  borderRadius: "8px",
  margin: "8px 0",
  cursor: "pointer",
};

const btnSubmit = {
  padding: "12px 35px",
  background: "linear-gradient(135deg,#00b894,#0984e3)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontSize: "1.1rem",
  fontWeight: "700",
  cursor: "pointer",
  marginTop: "20px",
};

const btnBack = {
  padding: "12px 35px",
  background: "linear-gradient(135deg,#6c63ff,#3b82f6)",
  border: "none",
  color: "#fff",
  borderRadius: "30px",
  cursor: "pointer",
  marginTop: "20px",
  fontWeight: "700",
};
