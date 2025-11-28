import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setUser(data.user);
        navigate("/dashboard");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Network error, please try again.");
    }
  };

  const handleBack = () => {
    navigate("/role-selection");
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
        padding: "20px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={handleBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "rgba(255,255,255,0.25)",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
          backdropFilter: "blur(10px)",
        }}
      >
        ⬅ Back
      </button>

      {/* Login Card */}
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          background: "rgba(255,255,255,0.15)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "2rem" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
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
            placeholder="Password"
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
              background: "linear-gradient(135deg,#2ECC71,rgba(255,255,255,0.4))",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "10px",
              transition: "0.2s",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "10px", fontSize: "0.95rem" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#fff", fontWeight: "600" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
