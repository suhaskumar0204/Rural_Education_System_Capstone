import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const teachers = JSON.parse(sessionStorage.getItem("teachers")) || [];
    const teacher = teachers.find(
      (t) => t.email === email && t.password === password
    );

    if (!teacher) {
      alert("Invalid credentials or not registered!");
      return;
    }

    sessionStorage.setItem("loggedInTeacher", JSON.stringify(teacher));
    navigate("/teacher-dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.18)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>👨‍🏫 Teacher Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg,#2ECC71,#27AE60)",
              borderRadius: "12px",
              border: "none",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "5px",
              transition: ".2s",
            }}
          >
            Login ✅
          </button>
        </form>

        <button
          onClick={() => navigate("/teacher-register")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            background: "rgba(255,255,255,0.3)",
            borderRadius: "10px",
            border: "none",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ✨ New Teacher? Register Here
        </button>

        {/* ✅ Back Button to Role Selection */}
        <button
          onClick={() => navigate("/role-selection")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            border: "none",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          🔙 Back to Role Selection
        </button>
      </div>
    </div>
  );
}
