import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const months = [
  "June","July","August","September","October",
  "November","December","January","February","March"
];

export default function ReviewStudents() {
  const navigate = useNavigate();
  const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [month, setMonth] = useState("");
  const [search, setSearch] = useState("");
  const [reviews, setReviews] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [comment, setComment] = useState("");

  // ✅ Load saved reviews
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studentReviews"));
    if (saved) setReviews(saved);
  }, []);

  // ✅ Fetch students from DB
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log("Students for Review:", res.data);
        setStudents(res.data || []);
      } catch (err) {
        console.error("Error fetching students:", err);
        alert("⚠️ Could not load students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // ✅ Save review
  const saveReview = () => {
    const key = `${selectedStudent.id}_${month}`;
    const updated = { ...reviews, [key]: comment };

    localStorage.setItem("studentReviews", JSON.stringify(updated));
    setReviews(updated);

    alert("✅ Review saved!");
    setComment("");
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter((s) =>
    (
      s.name ||
      s.firstName ||
      s.first_name ||
      ""
    ).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        padding: "3rem 0",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "90%",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          color: "white",
        }}
      >
        {/* ✅ Navigation Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button
            onClick={() => navigate("/teacher-dashboard")}
            style={{
              background: "rgba(255,255,255,0.7)",
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              color: "#000",
            }}
          >
            ⬅ Dashboard
          </button>

          {/* ✅ NEW BUTTON TO VIEW REVIEWS */}
          <button
            onClick={() => navigate("/view-reviews")}
            style={{
              background: "#FFD93D",
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              color: "#000",
            }}
          >
            📖 View Reviews
          </button>
        </div>

        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          📊 Review Students
        </h2>

        {/* Month Selector */}
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "10px",
          }}
        >
          <option value="">📅 Select Month</option>
          {months.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        {/* Search */}
        <input
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "10px",
            border: "none",
          }}
        />

        {/* ✅ Review Box at TOP */}
        {selectedStudent && month && (
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>
              ✍ Review —{" "}
              {selectedStudent.name ||
                selectedStudent.firstName ||
                selectedStudent.first_name}{" "}
              ({month})
            </h3>

            <textarea
              rows="4"
              placeholder="Write feedback..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                marginTop: "10px",
              }}
            />

            <button
              onClick={saveReview}
              style={{
                width: "100%",
                padding: "12px",
                background: "#FFD93D",
                borderRadius: "10px",
                marginTop: "10px",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✅ Save Review
            </button>
          </div>
        )}

        {/* Student List */}
        {loading && <p>Loading students...</p>}
        {!loading && filteredStudents.length === 0 && <p>No students found</p>}

        {!loading &&
          filteredStudents.map((student) => (
            <div
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              style={{
                padding: "12px",
                marginTop: "10px",
                borderRadius: "10px",
                cursor: "pointer",
                background:
                  selectedStudent?.id === student.id
                    ? "rgba(255,255,255,0.35)"
                    : "rgba(255,255,255,0.2)",
                transition: "0.2s",
              }}
            >
              {student.name ||
                student.firstName ||
                student.first_name ||
                "Unnamed Student"}{" "}
              ➜
            </div>
          ))}
      </div>
    </div>
  );
}
