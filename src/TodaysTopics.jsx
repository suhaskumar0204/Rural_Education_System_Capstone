import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

const modules = [
  {
    id: 1,
    subject: "Math",
    chapters: [
      { title: "Chapter 1: Real Numbers" },
      { title: "Chapter 2: Polynomials" },
      { title: "Chapter 3: Pair of Linear Equations" },
    ],
  },
  {
    id: 2,
    subject: "Science",
    chapters: [
      { title: "Chapter 1: Chemical Reactions" },
      { title: "Chapter 2: Acids, Bases & Salts" },
      { title: "Chapter 3: Metals & Non-Metals" },
    ],
  },
  {
    id: 3,
    subject: "English",
    chapters: [
      { title: "Chapter 1: Grammar" },
      { title: "Chapter 2: Literature" },
    ],
  },
];

export default function TodaysTopics() {
  const today = new Date().toISOString().split("T")[0];
  const [completed, setCompleted] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ HOOK

  const toggleComplete = (subject, chapter) => {
    const key = `${today}_${subject}_${chapter}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    try {
      const completedTopics = Object.keys(completed)
        .filter(k => completed[k])
        .map(k => {
          const [, subject, chapter] = k.split("_");
          return { date: today, subject, chapter };
        });

      await axios.post(`${import.meta.env.VITE_API_URL}/api/topics/save`, {
        topics: completedTopics,
      });

      setMessage("✅ Progress Saved!");
    } catch (error) {
      setMessage("❌ Failed!");
      console.log(error);
    }
  };

  return (
    <>
      <style>{`
        .tt-wrapper {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #74ABE2, #5563DE);
          display: flex;
          justify-content: center;
          padding: 3rem 0;
          font-family: 'Poppins', sans-serif;
        }
        .tt-box {
          width: 90%;
          max-width: 1200px;
          background: rgba(255, 255, 255, 0.18);
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
          backdrop-filter: blur(10px);
          color: white;
          animation: fadeIn .5s ease;
        }
        .tt-title {
          font-size: 2.4rem;
          font-weight: 700;
          text-align: center;
        }
        .tt-date {
          text-align: center;
          margin-bottom: 1.8rem;
          font-size: 1.1rem;
        }
        .back-btn {
          background: rgba(255,255,255,0.25);
          color: white;
          padding: 12px 18px;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: .25s;
        }
        .back-btn:hover{
          transform: scale(1.05);
          background: rgba(255,255,255,0.35);
        }
        .tt-card {
          background: rgba(255,255,255,0.2);
          padding: 20px;
          margin-bottom: 25px;
          border-radius: 16px;
          transition: .25s;
        }
        .tt-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        .tt-card h3 {
          margin: 0 0 8px;
        }
        .tt-progress {
          height: 8px;
          border-radius: 10px;
          background: rgba(255,255,255,0.3);
          margin: 6px 0 10px;
          overflow: hidden;
        }
        .tt-bar {
          height: 100%;
          background: #4ade80;
          transition: width .4s;
        }
        .tt-chapter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.15);
          margin: 7px 0;
        }
        .tt-chapter.done {
          background: rgba(0,255,100,0.35);
        }
        .tt-btn {
          padding: 7px 14px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: .25s;
        }
        .tt-btn:hover {
          transform: scale(1.05);
        }
        .tt-done {
          background: #16a34a;
          color: white;
        }
        .tt-mark {
          background: #fff;
          color: #222;
        }
        .tt-save {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: #FFD93D;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 20px;
          transition: .25s;
          color: #222;
        }
        .tt-save:hover {
          background: #ffca2b;
          transform: scale(1.03);
        }
        .tt-msg {
          text-align: center;
          font-weight: bold;
          margin-top: 12px;
        }
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(15px);}
          to {opacity: 1; transform: translateY(0);}
        }
      `}</style>

      <div className="tt-wrapper">
        <div className="tt-box">

          {/* ✅ Back button */}
          <button className="back-btn" onClick={() => navigate("/teacher-dashboard")}>
            ← Back to Dashboard
          </button>

          <h2 className="tt-title">📚 Today's Teaching</h2>
          <p className="tt-date">📅 {new Date().toLocaleDateString()}</p>

          {modules.map(mod => {
            const done = mod.chapters.filter(
              c => completed[`${today}_${mod.subject}_${c.title}`]
            ).length;
            const total = mod.chapters.length;
            const percent = Math.round((done / total) * 100);

            return (
              <div className="tt-card" key={mod.id}>
                <h3>{mod.subject}</h3>
                <div className="tt-progress">
                  <div className="tt-bar" style={{ width: `${percent}%` }} />
                </div>
                <small>{percent}% completed</small>

                {mod.chapters.map(c => {
                  const key = `${today}_${mod.subject}_${c.title}`;
                  const isDone = completed[key];
                  return (
                    <div className={`tt-chapter ${isDone ? "done" : ""}`} key={c.title}>
                      <span>{c.title}</span>
                      <button
                        className={`tt-btn ${isDone ? "tt-done" : "tt-mark"}`}
                        onClick={() => toggleComplete(mod.subject, c.title)}
                      >
                        {isDone ? "✅ Done" : "Mark"}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}

          <button className="tt-save" onClick={handleSave}>
            💾 Save Progress
          </button>
          {message && <p className="tt-msg">{message}</p>}
        </div>
      </div>
    </>
  );
}
