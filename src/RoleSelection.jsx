import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.18)",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: "2.3rem", marginBottom: "10px" }}>
          Welcome 👋
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: 0.9 }}>
          Please select your role to continue
        </p>

        {/* Student Button */}
        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#F4A261,rgba(255,255,255,0.3))",
            border: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "15px",
            transition: "0.2s",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          onClick={() => navigate("/login")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          👩‍🎓 Student
        </button>

        {/* Teacher Button */}
        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#2ECC71,rgba(255,255,255,0.3))",
            border: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.2s",
          }}
          onClick={() => navigate("/teacher-login")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          👨‍🏫 Teacher
        </button>

        {/* Administrator Button */}
        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#8e44ad,rgba(255,255,255,0.3))",
            border: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.2s",
          }}
          onClick={() => navigate("/admin-login")}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🛡️ Administrator
        </button>

      </div>
    </div>
  );
}
