// AdminDashboard.jsx
import { useNavigate } from "react-router-dom";

function buttonStyle(color) {
  return {
    padding: "20px",
    borderRadius: "15px",
    background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.25))`,
    border: "none",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "3rem 0",
        position: "relative",
      }}
    >
      {/* Logout Button */}
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
        }}
      >
        🚪 Logout
      </button>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.18)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          🛡️ Admin Dashboard
        </h1>

        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Welcome Administrator <strong>Suhas</strong>!
        </p>

        <p style={{ marginTop: "10px", fontSize: "1rem", opacity: 0.8 }}>
          Monitor teachers & academic progress from here.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          <button
            style={buttonStyle("#48CAE4")}
            onClick={() => navigate("/admin-teachers")}
          >
            📘 View Teachers
          </button>

          <button
            style={buttonStyle("#F4A261")}
            onClick={() => navigate("/admin-manage-teachers")}
          >
            🛠️ Manage Teachers
          </button>

          {/* ✅ Manage Students for Admin */}
          <button
            style={buttonStyle("#06D6A0")}
            onClick={() => navigate("/admin-students")}
          >
            🎓 Manage Students
          </button>
        </div>
      </div>
    </div>
  );
}
