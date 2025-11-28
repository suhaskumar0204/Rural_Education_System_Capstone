import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (email === "suhas@gmail.com" && pass === "suhas@gmail.com" || email === "suhas1@gmail.com" && pass === "suhas1@gmail.com") {
      navigate("/admin-dashboard");
    } else {
      alert("❌ Access Denied! Only Suhas (Admin) can login.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg,#8e44ad,#6c5ce7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Poppins",
        padding: "20px",
      }}
    >
      {/* Login Box */}
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.18)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px", fontSize: "2rem" }}>
          🛡️ Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={inputStyle}
        />

        <button style={btnStyle("#6c5ce7")} onClick={handleLogin}>
          Login
        </button>

        <button
          style={btnStyle("#333")}
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
};

function btnStyle(color) {
  return {
    width: "100%",
    padding: "12px",
    background: color,
    border: "none",
    color: "white",
    fontWeight: "600",
    borderRadius: "10px",
    fontSize: "1.1rem",
    cursor: "pointer",
    marginBottom: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  };
}
