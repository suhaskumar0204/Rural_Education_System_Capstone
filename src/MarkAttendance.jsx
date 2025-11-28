import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MarkAttendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  const navigate = useNavigate();
  const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

  // 🧠 Fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("Fetched Students:", response.data);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
        alert("⚠️ Could not load students. Please check your server connection.");
      }
    };
    fetchStudents();

    // Load saved attendance from localStorage
    const saved = JSON.parse(localStorage.getItem("attendanceData"));
    if (saved) setAttendance(saved);
  }, []);

  // 🧮 Update counts when attendance changes
  useEffect(() => {
    const values = Object.values(attendance);
    setPresentCount(values.filter((v) => v === "present").length);
    setAbsentCount(values.filter((v) => v === "absent").length);
  }, [attendance]);

  // ✅ Update attendance for a student
  const handleChange = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  // 💾 Save attendance to local storage
  const handleSubmit = () => {
    localStorage.setItem("attendanceData", JSON.stringify(attendance));
    alert("✅ Attendance saved successfully!");
  };

  // 🧹 Clear all attendance data
  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all attendance data?")) {
      setAttendance({});
      localStorage.removeItem("attendanceData");
      setPresentCount(0);
      setAbsentCount(0);
      alert("🧹 Attendance cleared!");
    }
  };

  // ⬅ Navigate back to dashboard
  const handleBack = () => {
    navigate("/teacher-dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* 🔙 Back Button */}
        <button
          onClick={handleBack}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            marginBottom: "25px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
            transition: "background 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ⬅ Back to Dashboard
        </button>

        <h1
          style={{
            textAlign: "center",
            fontSize: "2.2rem",
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          🧾 Mark Today's Attendance
        </h1>

        {/* Attendance List Container */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            padding: "25px",
            maxWidth: "700px",
            margin: "0 auto",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {students.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              Loading students...
            </p>
          ) : (
            students.map((student) => (
              <div
                key={student.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "background 0.3s",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  {student.name || student.firstName || "Unnamed Student"}
                </span>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <label
                    style={{
                      marginRight: "15px",
                      color: "#E3F2FD",
                      fontSize: "0.95rem",
                    }}
                  >
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      checked={attendance[student.id] === "present"}
                      onChange={() => handleChange(student.id, "present")}
                      style={{ marginRight: "6px", cursor: "pointer" }}
                    />
                    Present
                  </label>

                  <label
                    style={{
                      color: "#FFCDD2",
                      fontSize: "0.95rem",
                    }}
                  >
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      checked={attendance[student.id] === "absent"}
                      onChange={() => handleChange(student.id, "absent")}
                      style={{ marginRight: "6px", cursor: "pointer" }}
                    />
                    Absent
                  </label>
                </div>
              </div>
            ))
          )}

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              ✅ Present:{" "}
              <span style={{ color: "#C8E6C9" }}>{presentCount}</span> | ❌ Absent:{" "}
              <span style={{ color: "#FFCDD2" }}>{absentCount}</span>
            </p>

            {/* ✅ Save Button */}
            <button
              onClick={handleSubmit}
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                background: "#43A047",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background 0.3s, transform 0.2s",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2E7D32")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#43A047")}
            >
              💾 Submit Attendance
            </button>

            {/* 🧹 Clear Button */}
            <button
              onClick={handleClear}
              style={{
                marginTop: "15px",
                marginLeft: "15px",
                padding: "12px 30px",
                background: "#E53935",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background 0.3s, transform 0.2s",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#C62828")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53935")}
            >
              🧹 Clear Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
