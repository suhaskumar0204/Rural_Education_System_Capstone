import { useNavigate } from "react-router-dom";

export default function AdminTeachers() {
  const navigate = useNavigate();

  // Static list of teachers
  const teachers = [
    { id: 1, name: "Madhavi", email: "madhavi@school.com" },
    { id: 2, name: "Ramesh", email: "ramesh@school.com" },
    { id: 3, name: "Divya", email: "divya@school.com" },
    { id: 4, name: "Suhas", email: "suhas@school.com" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg,#2193b0,#6dd5ed)",
        fontFamily: "Poppins",
        color: "white",
        padding: "2rem",
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/admin-dashboard")}
        style={{
          padding: "10px 20px",
          background: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
          marginBottom: "20px",
          backdropFilter: "blur(5px)",
        }}
      >
        ← Back
      </button>

      <h1 style={{ textAlign: "center", marginBottom: "25px", fontSize: "2rem" }}>
        👩‍🏫 Teacher List
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "18px",
          backdropFilter: "blur(10px)",
        }}
      >
        {teachers.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/admin-teacher-progress/${t.id}`)}
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "18px",
              borderRadius: "14px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.3s ease",
              backdropFilter: "blur(6px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            }}
          >
            <div>
              <strong style={{ fontSize: "1.2rem" }}>{t.name}</strong>
              <p style={{ opacity: 0.85, marginTop: "5px" }}>{t.email}</p>
            </div>

            <span
              style={{
                fontSize: "1.4rem",
                opacity: 0.85,
                marginRight: "5px",
              }}
            >
              ➤
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
