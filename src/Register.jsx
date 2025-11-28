import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("✅ Registered successfully, please login");
      navigate("/login");
    } else {
      alert(data.error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg,#74ABE2,#5563DE)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.18)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>
          Create Account
        </h2>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              marginBottom: "15px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#F4A261,rgba(255,255,255,0.4))",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "15px",
              transition: ".2s",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Register
          </button>
        </form>

        {/* ✅ Back to Login */}
        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.25)",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "10px",
            transition: ".2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          🔙 Back to Login
        </button>

        {/* ✅ Back to Role Selection */}
        <button
          onClick={() => navigate("/role-selection")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.25)",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: ".2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ⬅ Back to Role Selection
        </button>
      </div>
    </div>
  );
}
