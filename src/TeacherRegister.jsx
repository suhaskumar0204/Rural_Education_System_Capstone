import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const teachers = JSON.parse(sessionStorage.getItem("teachers")) || [];
    const exists = teachers.find((t) => t.email === email);
    if (exists) {
      alert("Teacher already exists!");
      return;
    }

    teachers.push({ name, email, password });
    sessionStorage.setItem("teachers", JSON.stringify(teachers));

    alert("✅ Registered successfully!");
    navigate("/teacher-login");
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
        position: "relative",
      }}
    >
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 22px",
          background: "linear-gradient(135deg,#FFB703,#F79E1B)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "0.95rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "0.2s",
        }}
      >
        ⬅ Back
      </button>

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
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>👨‍🏫 Teacher Registration</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Create Password"
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
              background: "linear-gradient(135deg,#31C48D,#059669)",
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
            Register ✅
          </button>
        </form>

        <button
          onClick={() => navigate("/teacher-login")}
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
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
