import { useParams, useNavigate } from "react-router-dom";

export default function AdminTeacherProgress() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teachers = [
    { id: 1, name: "Madhavi", email: "madhavi@school.com" },
    { id: 2, name: "Ramesh", email: "ramesh@school.com" },
    { id: 3, name: "Divya", email: "divya@school.com" },
    { id: 4, name: "Suhas", email: "suhas@school.com" },
  ];

  const teacher = teachers.find((t) => t.id === Number(id));

  // Full syllabus
  const syllabus = [
    "Real Numbers",
    "Polynomials",
    "Linear Equations",
    "Chemical Reactions",
    "Acids & Bases",
    "Grammar",
    "Literature",
  ];

  // Dummy completed topics
  const completed = ["Real Numbers", "Grammar", "Chemical Reactions"];

  const remaining = syllabus.filter((s) => !completed.includes(s));

  const percent = Math.round((completed.length / syllabus.length) * 100);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg,#141E30,#243B55)",
        color: "white",
        padding: "2rem",
        fontFamily: "Poppins",
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/admin-teachers")}
        style={{
          padding: "10px 20px",
          background: "rgba(255,255,255,0.2)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
          marginBottom: "20px",
          backdropFilter: "blur(5px)",
        }}
      >
        ← Back
      </button>

      {/* HEADER */}
      <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize: "2rem" }}>
        📊 Progress Report: {teacher?.name}
      </h1>
      <p style={{ textAlign: "center", opacity: 0.8 }}>{teacher?.email}</p>

      {/* PROGRESS CARD */}
      <div
        style={{
          maxWidth: "700px",
          margin: "25px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "18px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>📌 Overall Completion</h3>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "14px",
              width: `${percent}%`,
              background: "#4ade80",
              borderRadius: "10px",
              transition: "0.3s",
            }}
          ></div>
        </div>

        <p style={{ marginTop: "10px", fontSize: "1.2rem", textAlign: "center" }}>
          {percent}% Syllabus Completed
        </p>
      </div>

      {/* COMPLETED TOPICS */}
      <div
        style={{
          maxWidth: "700px",
          margin: "25px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "18px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2>✅ Completed Topics</h2>
        <ul>
          {completed.map((c) => (
            <li key={c} style={{ margin: "6px 0", color: "#4ade80", fontWeight: "500" }}>
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* REMAINING TOPICS */}
      <div
        style={{
          maxWidth: "700px",
          margin: "25px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "18px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2>❌ Topics Left</h2>
        <ul>
          {remaining.map((r) => (
            <li key={r} style={{ margin: "6px 0", color: "#ff6b6b", fontWeight: "500" }}>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
