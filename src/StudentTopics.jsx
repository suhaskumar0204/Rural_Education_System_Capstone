import { useNavigate } from "react-router-dom";

const modules = [
  {
    subject: "Math",
    chapters: [
      "Chapter 1: Real Numbers",
      "Chapter 2: Polynomials",
      "Chapter 3: Pair of Linear Equations",
    ],
  },
  {
    subject: "Science",
    chapters: [
      "Chapter 1: Chemical Reactions",
      "Chapter 2: Acids, Bases & Salts",
      "Chapter 3: Metals & Non-Metals",
    ],
  },
  {
    subject: "English",
    chapters: [
      "Chapter 1: Grammar",
      "Chapter 2: Literature",
    ],
  },
];

// ⭐ Set your start date here
const startDate = new Date("2025-01-01");

export default function StudentTopics() {
  const navigate = useNavigate();
  const today = new Date();

  // Find difference in days from start date
  const dayDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  // Get today’s chapter index
  const chapterIndex = dayDiff % 3; // max chapters = 3

  return (
    <>
      <style>{`
        .st-wrapper { width:100vw; min-height:100vh; background:linear-gradient(135deg,#3b82f6,#9333ea); padding:3rem 0; display:flex; justify-content:center; font-family:'Poppins'; }
        .st-box { width:90%; max-width:1100px; background:rgba(255,255,255,0.18); padding:35px; border-radius:20px; color:white; backdrop-filter:blur(10px); }
        .back-btn { background:rgba(255,255,255,0.25); padding:12px 18px; border:none; border-radius:10px; font-weight:600; cursor:pointer; color:white; margin-bottom:20px; }
        .subject-card { background:rgba(255,255,255,0.18); padding:20px; border-radius:16px; margin-bottom:22px; }
      `}</style>

      <div className="st-wrapper">
        <div className="st-box">

          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            ← Back to Dashboard
          </button>

          <h2 style={{ textAlign:"center", fontSize:"2rem" }}>📚 Today’s Topics</h2>

          <p style={{ textAlign:"center", marginBottom:"20px" }}>
            📅 {today.toLocaleDateString()}
          </p>

          {modules.map((mod, index) => {
            const chapter = mod.chapters[chapterIndex] || "No topic today";
            return (
              <div key={index} className="subject-card">
                <h3>{mod.subject}</h3>
                <ul>
                  <li>{chapter}</li>
                </ul>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}
