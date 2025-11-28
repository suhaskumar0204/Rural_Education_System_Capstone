  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";

  export default function StudentManagement() {
    const navigate = useNavigate();
    const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchStudents();
    }, []);

    const fetchStudents = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log("Fetched students:", res.data);

        // ✅ Normalize to always have name
        const normalized = res.data.map((s) => ({
          id: s.id,
          name: `${s.firstName || ""} ${s.lastName || ""}`.trim() || s.name || "Unknown",
          email: s.email || "No email",
        }));

        setStudents(normalized);
      } catch (err) {
        console.error("Error fetching students:", err);
        alert("Failed to load students. Please check your API.");
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (editingId) {
          await axios.put(`${API_URL}/${editingId}`, formData);
          alert("✅ Student updated successfully!");
        } else {
          await axios.post(API_URL, formData);
          alert("✅ Student added successfully!");
        }
        setFormData({ firstName: "", lastName: "", email: "" });
        setEditingId(null);
        fetchStudents();
      } catch (err) {
        console.error("Error saving student:", err);
        alert("Something went wrong while saving the student.");
      }
    };

    const handleEdit = (student) => {
      // You can split name back into firstName and lastName if needed
      const [firstName, lastName] = student.name.split(" ");
      setFormData({ firstName, lastName, email: student.email });
      setEditingId(student.id);
    };

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this student?")) return;
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert("🗑️ Student deleted successfully!");
        fetchStudents();
      } catch (err) {
        console.error("Error deleting student:", err);
        alert("Failed to delete student.");
      }
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
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            padding: "40px",
          }}
        >
          <h1
            style={{
              color: "#5563DE",
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "2.2rem",
            }}
          >
            🎓 Student Management
          </h1>

          {/* 🔙 Back Button */}
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <button
              onClick={() => navigate("/teacher-dashboard")}
              style={{
                padding: "10px 25px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#FFB703",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              ⬅️ Back to Dashboard
            </button>
          </div>

          {/* 🧾 Form Section */}
          <div
            style={{
              backgroundColor: "#F8F9FF",
              borderRadius: "12px",
              padding: "25px",
              marginBottom: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  width: "200px",
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  width: "200px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Student Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  width: "220px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: editingId ? "#007bff" : "#28A745",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                {editingId ? "✏️ Update Student" : "➕ Add Student"}
              </button>
            </form>
          </div>

          {/* 📋 Table Section */}
          <div
            style={{
              overflowX: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            {loading ? (
              <p style={{ textAlign: "center", padding: "20px" }}>Loading students...</p>
            ) : students.length === 0 ? (
              <p style={{ textAlign: "center", padding: "20px" }}>No students found.</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#5563DE",
                      color: "white",
                    }}
                  >
                    <th style={{ padding: "12px" }}>ID</th>
                    <th style={{ padding: "12px" }}>Name</th>
                    <th style={{ padding: "12px" }}>Email</th>
                    <th style={{ padding: "12px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      style={{
                        borderBottom: "1px solid #ddd",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <td style={{ padding: "10px" }}>{student.id}</td>
                      <td style={{ padding: "10px" }}>{student.name}</td>
                      <td style={{ padding: "10px" }}>{student.email}</td>
                      <td style={{ padding: "10px" }}>
                        <button
                          onClick={() => handleEdit(student)}
                          style={{
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          style={{
                            backgroundColor: "#E63946",
                            color: "white",
                            border: "none",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
