import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ViewReviews() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState({});
  const [students, setStudents] = useState([]);

  const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studentReviews"));
    if (saved) setReviews(saved);

    // ✅ Fetch students to map ID → Name
    const fetchStudents = async () => {
      try {
        const res = await axios.get(API_URL);
        setStudents(res.data || []);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // ✅ Find student name by ID
  const getStudentName = (id) => {
    const st = students.find((s) => s.id == id);
    return st
      ? (st.name || st.firstName || st.first_name || "Unnamed Student")
      : `Student ${id}`;
  };

  // ✅ Delete review
  const handleDelete = (key) => {
    if (!window.confirm("Delete this review?")) return;

    const updated = { ...reviews };
    delete updated[key];
    localStorage.setItem("studentReviews", JSON.stringify(updated));
    setReviews(updated);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Poppins",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.15)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>📖 Saved Reviews</h2>

        <button
          onClick={() => navigate("/review-students")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "15px",
            background: "linear-gradient(135deg, #FFD93D, rgba(255,255,255,0.2))",
            border: "none",
            color: "#000",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "25px",
            transition: "transform .2s, box-shadow .2s",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ⬅️ Back to Review Students
        </button>

        {Object.keys(reviews).length === 0 && (
          <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>No reviews saved yet...</p>
        )}

        <div style={{ marginTop: "30px" }}>
          {Object.entries(reviews).map(([key, value], idx) => {
            const [studentId, month] = key.split("_");

            return (
              <div
                key={idx}
                style={{
                  background: "linear-gradient(135deg, #8ECAE6, rgba(255,255,255,0.2))",
                  padding: "20px",
                  borderRadius: "15px",
                  marginBottom: "20px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                  textAlign: "left",
                }}
              >
                <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>
                  👤 <b>{getStudentName(studentId)}</b> | 📅 <b>{month}</b>
                </h3>

                <p style={{ marginBottom: "15px", fontSize: "1.05rem" }}>
                  ✍️ {value}
                </p>

                <button
                  onClick={() => handleDelete(key)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "linear-gradient(135deg, #FF4D4D, rgba(255,255,255,0.2))",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: "600",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "1.05rem",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E63946")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#FF4D4D")}
                >
                  🗑 Delete Review
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
