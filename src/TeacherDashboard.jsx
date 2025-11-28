import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInTeacher = JSON.parse(sessionStorage.getItem("loggedInTeacher"));
    if (loggedInTeacher) {
      setTeacher(loggedInTeacher);
    } else {
      navigate("/teacher-login");
    }
  }, [navigate]);

  const handleStudentManagement = () => navigate("/student-management");
  const handleAttendance = () => navigate("/mark-attendance");
  const handleUpdateTask = () => navigate("/update-task");
  const handleTodaysTopics = () => navigate("/todays-topics");
  const handleReviewStudents = () => navigate("/review-students");

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInTeacher");
    navigate("/teacher-login");
  };

  const buttons = [
    { label: "📚 Get All Students", color: "#FFB703", action: handleStudentManagement },
    { label: "🗓 Today's Topics", color: "#8ECAE6", action: handleTodaysTopics },
    { label: "✅ Mark Today's Attendance", color: "#90EE90", action: handleAttendance },
    { label: "📝 Update My Task", color: "#FBBF24", action: handleUpdateTask },
    { label: "🔍 Review Each Student", color: "#F87171", action: handleReviewStudents },
  ];

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
        position: "relative",
      }}
    >
      {/* ✅ Logout top-right */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 22px",
          borderRadius: "10px",
          background: "linear-gradient(135deg,#FF6B6B,#D00000)",
          border: "none",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "0.95rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "0.2s",
        }}
      >
        🚪 Logout
      </button>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.18)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Welcome, {teacher.name || "Teacher"} 👩‍🏫
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
          Email: {teacher.email || "Not Available"}
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              style={{
                padding: "20px",
                borderRadius: "15px",
                background: `linear-gradient(135deg, ${btn.color}, rgba(255,255,255,0.25))`,
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.3s",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
              onClick={btn.action}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
