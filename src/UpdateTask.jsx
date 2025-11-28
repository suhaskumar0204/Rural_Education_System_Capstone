import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateTask() {
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [module, setModule] = useState("");
  const [details, setDetails] = useState("");
  const [surpriseTest, setSurpriseTest] = useState(false);

  const subjects = ["Maths", "Science", "Social Science", "English", "Hindi"];
  const modules = Array.from({ length: 10 }, (_, i) => `Module ${i + 1}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Task Updated:\nSubject: ${subject}\n${module}\nSurprise Test: ${
        surpriseTest ? "Yes" : "No"
      }\nDetails: ${details}`
    );
    setSubject("");
    setModule("");
    setDetails("");
    setSurpriseTest(false);
  };

  const handleBack = () => navigate("/teacher-dashboard");

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
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "40px",
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
          }}
        >
          ⬅ Back to Dashboard
        </button>

        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          📝 Update My Task
        </h1>

        <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
          {/* Subject Dropdown */}
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}>
            Select Subject:
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem",
              marginBottom: "20px",
            }}
          >
            <option value="">-- Choose Subject --</option>
            {subjects.map((sub, idx) => (
              <option key={idx} value={sub}>
                {sub}
              </option>
            ))}
          </select>

          {/* Module Dropdown */}
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}>
            Select Module:
          </label>
          <select
            value={module}
            onChange={(e) => setModule(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem",
              marginBottom: "20px",
            }}
          >
            <option value="">-- Choose Module --</option>
            {modules.map((mod, idx) => (
              <option key={idx} value={mod}>
                {mod}
              </option>
            ))}
          </select>

          {/* Surprise Test */}
          {(module === "Module 2" ||
            module === "Module 4" ||
            module === "Module 6" ||
            module === "Module 8" ||
            module === "Module 10") && (
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontWeight: "500" }}>
                <input
                  type="checkbox"
                  checked={surpriseTest}
                  onChange={(e) => setSurpriseTest(e.target.checked)}
                  style={{ marginRight: "8px" }}
                />
                Conducted Surprise Test?
              </label>
            </div>
          )}

          {/* Text Area */}
          <label style={{ display: "block", marginBottom: "10px", fontWeight: "500" }}>
            What did you cover today?
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
            rows="5"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontSize: "1rem",
              marginBottom: "25px",
              resize: "none",
            }}
            placeholder="Describe the topics or activities covered..."
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#43A047",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2E7D32")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#43A047")}
          >
            ✅ Submit Task
          </button>
        </form>
      </div>
    </div>
  );
}
