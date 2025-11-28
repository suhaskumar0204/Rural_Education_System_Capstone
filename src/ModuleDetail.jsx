import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import confetti from "canvas-confetti";

export default function ModuleDetail({ module, goBack }) {
  const [watched, setWatched] = useState({});
  const [progress, setProgress] = useState(0);
  const [allWatched, setAllWatched] = useState(false);

  // ✅ Calculate progress dynamically
  useEffect(() => {
    const total = module.chapters.length;
    const watchedCount = Object.values(watched).filter(Boolean).length;
    const percent = Math.round((watchedCount / total) * 100);
    setProgress(percent);
    setAllWatched(percent === 100);
  }, [watched, module.chapters.length]);

  // 🎥 Mark as watched toggle
  const toggleWatched = (idx) => {
    setWatched((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // 🎓 Professional Certificate Design (Auto User Fetch)
  const handleDownloadCertificate = () => {
    // 🧠 Try fetching user name from sessionStorage or localStorage
    let userName = "Learner";
    try {
      const fromSession = sessionStorage.getItem("loggedInTeacher");
      const fromLocal = localStorage.getItem("user");

      if (fromSession) {
        const parsed = JSON.parse(fromSession);
        if (parsed.name) userName = parsed.name;
      } else if (fromLocal) {
        const parsed = JSON.parse(fromLocal);
        if (parsed.name) userName = parsed.name;
      }
    } catch (e) {
      console.warn("Could not read user info:", e);
    }

    // ✅ Create the certificate
    const doc = new jsPDF("landscape", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // 🖼 Background
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // ✨ Elegant Gold Border
    doc.setDrawColor(218, 165, 32);
    doc.setLineWidth(8);
    doc.rect(25, 25, pageWidth - 50, pageHeight - 50);

    // 🏫 Header Title
    doc.setFont("times", "bold");
    doc.setFontSize(36);
    doc.setTextColor(40, 40, 40);
    doc.text("Certificate of Completion", pageWidth / 2, 130, { align: "center" });

    // 🪶 Subtitle
    doc.setFontSize(18);
    doc.setTextColor(90, 90, 90);
    doc.text("This certificate is proudly presented to", pageWidth / 2, 180, { align: "center" });

    // 👤 Recipient Name (Large & Centered)
    doc.setFont("times", "bolditalic");
    doc.setFontSize(34);
    doc.setTextColor(20, 40, 120);
    doc.text(userName, pageWidth / 2, 240, { align: "center" });

    // 📘 Description
    doc.setFont("times", "normal");
    doc.setFontSize(18);
    doc.setTextColor(55, 65, 81);
    const message = `for successfully completing the module "${module.subject}" with dedication and excellence.`;
    const textWidth = doc.getTextWidth(message);
    doc.text(message, (pageWidth - textWidth) / 2, 290);

    // 📅 Date & ✍ Signature
    doc.setFontSize(14);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 100, pageHeight - 100);
    doc.text("Instructor Signature", pageWidth - 200, pageHeight - 100);
    doc.setDrawColor(80, 80, 80);
    doc.setLineWidth(1);
    doc.line(pageWidth - 300, pageHeight - 110, pageWidth - 80, pageHeight - 110);

    // 🪄 Footer (Branding)
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Issued by Smart Learning Portal", pageWidth / 2, pageHeight - 50, {
      align: "center",
    });

    // 💾 Save file
    doc.save(`${userName}-Certificate.pdf`);
  };

  // 🎉 Confetti celebration
  useEffect(() => {
    if (allWatched) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [allWatched]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "3rem 0",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* 🔙 Back Button */}
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 22px",
          borderRadius: "10px",
          background: "linear-gradient(135deg,#FFB703,#F79E1B)",
          border: "none",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "0.95rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        ⬅ Back
      </button>

      {/* 📘 Main Card */}
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.18)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#fff" }}>
          {module.subject} 📚
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
          Complete all topics to earn your official certificate 🎓
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "14px",
            background: "rgba(255,255,255,0.3)",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #90EE90, #32CD32)",
              borderRadius: "10px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <p style={{ marginTop: "10px", fontWeight: "600" }}>
          {progress}% Completed
        </p>

        {/* Chapter List */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {module.chapters.map((ch, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "10px" }}>{ch.title}</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={ch.pdfLink}
                  download
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: "#3B82F6",
                    border: "none",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "600",
                    textDecoration: "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  📘 PDF
                </a>
                <a
                  href={ch.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: "#EF4444",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "600",
                    textDecoration: "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  ▶ Watch
                </a>
                <button
                  onClick={() => toggleWatched(idx)}
                  style={{
                    flex: 1,
                    padding: "10px",
                    border: "none",
                    borderRadius: "10px",
                    background: watched[idx]
                      ? "linear-gradient(135deg,#22C55E,#16A34A)"
                      : "rgba(255,255,255,0.3)",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {watched[idx] ? "✅ Watched" : "Mark Watched"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🎓 Certificate Button */}
        {allWatched && (
          <div style={{ marginTop: "50px" }}>
            <button
              onClick={handleDownloadCertificate}
              style={{
                padding: "14px 30px",
                borderRadius: "12px",
                background: "linear-gradient(135deg,#FFD700,#FFA500)",
                border: "none",
                color: "#000",
                fontWeight: "700",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🏆 Download Your Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
