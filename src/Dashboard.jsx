import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModuleDetail from "./ModuleDetail";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import { modules } from "./modules";

const getTodayDate = () => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Date().toLocaleDateString(undefined, options);
};

export default function InteractiveDashboard({ user }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  if (selectedModule) {
    return (
      <ModuleDetail module={selectedModule} goBack={() => setSelectedModule(null)} />
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>

      <div style={styles.contentWrapper}>

        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Welcome, {user.name}!</h1>
          <div style={styles.headerInfo}>
            <p style={styles.dateText}>{getTodayDate()}</p>
            <button style={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Action Buttons */}
        <section style={styles.actionButtons}>

          {/* Take Exam */}
          <Link
            to="/dashboard/take-exam"
            style={styles.actionLink}
            onMouseEnter={() => setHoveredCard("exam")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              style={{
                ...styles.card,
                backgroundColor: "#f39c12",
                ...getCardHoverStyle("exam"),
              }}
            >
              <h3>Take Exam</h3>
            </div>
          </Link>

          {/* Solve Puzzle */}
          <Link
            to="/solve-puzzle"
            style={styles.actionLink}
            onMouseEnter={() => setHoveredCard("puzzle")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              style={{
                ...styles.card,
                backgroundColor: "#3498db",
                ...getCardHoverStyle("puzzle"),
              }}
            >
              <h3>Solve Puzzle</h3>
            </div>
          </Link>

          {/* Today's Topics */}
          <Link
            to="/dashboard/student-topics"
            style={styles.actionLink}
            onMouseEnter={() => setHoveredCard("topics")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              style={{
                ...styles.card,
                background: "linear-gradient(135deg, #2dd4bf, #0ea5e9)",
                ...getCardHoverStyle("topics"),
              }}
            >
              <h3>Today's Topics</h3>
            </div>
          </Link>

        </section>

        {/* Modules */}
        <section style={styles.modulesSection}>
          <h2 style={styles.sectionTitle}>Explore Subjects</h2>
          <div style={styles.moduleGrid}>
            {modules.map((mod) => (
              <div
                key={mod.id}
                style={{ ...styles.moduleCard, ...getCardHoverStyle(mod.id) }}
                onClick={() => setSelectedModule(mod)}
                onMouseEnter={() => setHoveredCard(mod.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {mod.subject}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );

  function getCardHoverStyle(cardId) {
    if (hoveredCard === cardId) {
      return {
        transform: "translateY(-5px) scale(1.03)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
      };
    }
    return {};
  }
}

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
    zIndex: 1,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  headerTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  dateText: {
    padding: "10px 15px",
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  logoutBtn: {
    padding: "10px 25px",
    backgroundColor: "#e74c3c",
    borderRadius: "25px",
    color: "#fff",
    cursor: "pointer",
  },
  actionButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  card: {
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    transition: "0.3s",
    color: "#fff",
  },
  actionLink: {
    textDecoration: "none",
  },
  modulesSection: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
  },
  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  moduleCard: {
    background: "rgba(255,255,255,0.9)",
    padding: "30px 20px",
    borderRadius: "15px",
    textAlign: "center",
    color: "#2c3e50",
    cursor: "pointer",
  },
};
