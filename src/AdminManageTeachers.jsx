import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminManageTeachers() {
  const navigate = useNavigate();

  // Default teacher list
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Madhavi", email: "madhavi@school.com" },
    { id: 2, name: "Ramesh", email: "ramesh@school.com" },
    { id: 3, name: "Divya", email: "divya@school.com" },
    { id: 4, name: "Suhas", email: "suhas@school.com" },
  ]);

  // Form State
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Teacher
  const handleAdd = () => {
    if (!form.name || !form.email) return alert("Enter all details!");

    const newTeacher = {
      id: Date.now(),
      name: form.name,
      email: form.email,
    };

    setTeachers([...teachers, newTeacher]);
    setForm({ id: null, name: "", email: "" });
  };

  // Edit Teacher
  const handleEdit = (teacher) => {
    setIsEditing(true);
    setForm(teacher);
  };

  // Save Edited Teacher
  const handleSave = () => {
    if (!form.name || !form.email) return alert("Enter all details!");

    const updated = teachers.map((t) =>
      t.id === form.id ? form : t
    );
    setTeachers(updated);

    // Reset form
    setForm({ id: null, name: "", email: "" });
    setIsEditing(false);
  };

  // Cancel Editing
  const handleCancel = () => {
    setIsEditing(false);
    setForm({ id: null, name: "", email: "" });
  };

  // Delete Teacher
  const handleDelete = (id) => {
    const filtered = teachers.filter((t) => t.id !== id);
    setTeachers(filtered);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg,#6a11cb,#2575fc)",
        color: "white",
        padding: "2rem",
        fontFamily: "Poppins",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/admin-dashboard")}
        style={{
          padding: "10px 20px",
          background: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "600",
        }}
      >
        ← Back
      </button>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🛠️ Manage Teachers
      </h1>

      {/* TEACHER FORM */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 30px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>
          {isEditing ? "✏ Modify Teacher" : "➕ Add New Teacher"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        {isEditing ? (
          <>
            <button style={{ ...btnStyle, background: "#4ade80" }} onClick={handleSave}>
              💾 Modify Teacher
            </button>

            <button
              style={{ ...btnStyle, background: "#ff6b6b", marginTop: "10px" }}
              onClick={handleCancel}
            >
              ❌ Cancel
            </button>
          </>
        ) : (
          <button style={btnStyle} onClick={handleAdd}>
            ➕ Add Teacher
          </button>
        )}
      </div>

      {/* TEACHER LIST */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "18px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>📘 All Teachers</h2>

        {teachers.map((t) => (
          <div
            key={t.id}
            style={{
              background: "rgba(255,255,255,0.25)",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ fontSize: "1.2rem" }}>{t.name}</strong>
              <p style={{ opacity: 0.8 }}>{t.email}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => handleEdit(t)}
                style={{ ...smallBtn, background: "#4ade80" }}
              >
                ✏ Modify
              </button>

              <button
                onClick={() => handleDelete(t.id)}
                style={{ ...smallBtn, background: "#ff6b6b" }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* STYLES */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#00b894",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  color: "white",
  cursor: "pointer",
  marginTop: "10px",
};

const smallBtn = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer",
  fontWeight: "600",
};
