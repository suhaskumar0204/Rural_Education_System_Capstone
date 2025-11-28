import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const sheet = styleEl.sheet;

    // 🔹 Link underline animation
    sheet.insertRule(
      `
      footer a::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #3b82f6;
        transition: width 0.3s;
        margin: 0 auto;
      }
    `,
      sheet.cssRules.length
    );

    sheet.insertRule(
      `
      footer a:hover::after {
        width: 100%;
      }
    `,
      sheet.cssRules.length
    );

    // 🔹 Hover glow effect
    sheet.insertRule(
      `
      footer a:hover {
        color: #60a5fa;
        transform: scale(1.07);
      }
    `,
      sheet.cssRules.length
    );

    // 🔹 Logo animation
    sheet.insertRule(
      `
      @keyframes shine {
        0% { background-position: -200px; }
        100% { background-position: 200px; }
      }
    `,
      sheet.cssRules.length
    );

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        {/* Branding */}
        <h2 style={styles.logo}>Edu<span style={{ color: "#3b82f6" }}>Web</span></h2>
        <p style={styles.tagline}>Empowering Education Everywhere 🌍</p>

        {/* Links */}
        <div style={styles.links}>
          <Link to="/dashboard" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <a href="mailto:yourmail@gmail.com" style={styles.link} target="_blank" rel="noopener noreferrer">Gmail</a>
          <a href="https://instagram.com/yourprofile" style={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/yourprofile" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} EduWeb — Designed with 💙 for Learners
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: "relative",
    width: "100%",
    padding: "50px 20px 30px",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
    marginTop: "80px",
  },
  overlay: {
    content: "''",
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top right, rgba(59,130,246,0.25), transparent 70%)",
    zIndex: 1,
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1300px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "2.2rem",
    fontWeight: "800",
    marginBottom: "10px",
    background:
      "linear-gradient(90deg, #60a5fa, #93c5fd, #3b82f6, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200px 100%",
    animation: "shine 4s linear infinite",
  },
  tagline: {
    fontSize: "1rem",
    color: "#d1d5db",
    marginBottom: "20px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    position: "relative",
    transition: "all 0.3s ease",
  },
  copyright: {
    fontSize: "0.85rem",
    color: "#9ca3af",
    marginTop: "20px",
  },
};
