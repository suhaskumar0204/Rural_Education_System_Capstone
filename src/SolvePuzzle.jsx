import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SolvePuzzle() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // 🧱 Shared Button & Layout Styles
  const btnStyle = (bg) => ({
    marginTop: "15px",
    marginRight: "10px",
    padding: "10px 20px",
    background: bg,
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, background 0.2s",
  });

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #74ABE2, #5563DE)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.9)",
    borderRadius: "20px",
    padding: "40px 50px",
    maxWidth: "650px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
  };

  // --- 1️⃣ Sudoku ---
  const initialBoard = [
    [0, 2, 0, 4],
    [4, 0, 2, 0],
    [0, 3, 0, 1],
    [1, 0, 3, 0],
  ];
  const solutionBoard = [
    [3, 2, 1, 4],
    [4, 1, 2, 3],
    [2, 3, 4, 1],
    [1, 4, 3, 2],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [sudokuFeedback, setSudokuFeedback] = useState("");
  const isInitialCell = (r, c) => initialBoard[r][c] !== 0;

  const handleSudokuClick = (r, c, num) => {
    if (isInitialCell(r, c)) return;
    const newBoard = board.map((row, i) =>
      row.map((cell, j) => (i === r && j === c ? num : cell))
    );
    setBoard(newBoard);
  };

  const checkSudoku = () => {
    setSudokuFeedback(
      JSON.stringify(board) === JSON.stringify(solutionBoard)
        ? "🎉 Correct! You solved it!"
        : "❌ Try again!"
    );
  };

  // --- 2️⃣ Math Challenge ---
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathFeedback, setMathFeedback] = useState("");
  const [mathSolved, setMathSolved] = useState(false);
  const handleMathSubmit = (e) => {
    e.preventDefault();
    if (mathAnswer.trim() === "42") {
      setMathFeedback("✅ Correct! 6 × 7 = 42.");
      setMathSolved(true);
    } else setMathFeedback("❌ Wrong answer!");
  };

  // --- 3️⃣–1️⃣2️⃣ Riddles ---
  const riddles = [
    { q: "What has keys but can’t open locks?", a: "keyboard" },
    { q: "What has hands but can’t clap?", a: "clock" },
    { q: "What has a face and two hands but no arms or legs?", a: "clock" },
    { q: "What can travel around the world while staying in one corner?", a: "stamp" },
    { q: "What has to be broken before you can use it?", a: "egg" },
    { q: "I’m tall when I’m young, and short when I’m old. What am I?", a: "candle" },
    { q: "The more of this there is, the less you see. What is it?", a: "darkness" },
    { q: "What begins with T, ends with T, and has T in it?", a: "teapot" },
    { q: "I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?", a: "breath" },
    { q: "What has words but never speaks?", a: "book" },
  ];

  const [answers, setAnswers] = useState(Array(riddles.length).fill(""));
  const [feedback, setFeedback] = useState(Array(riddles.length).fill(""));

  const handleRiddleSubmit = (e, index) => {
    e.preventDefault();
    const correct = riddles[index].a.toLowerCase().trim();
    const user = answers[index].toLowerCase().trim();
    const updated = [...feedback];
    updated[index] = user === correct ? "✅ Correct!" : "❌ Try again!";
    setFeedback(updated);
  };

  const handleChange = (e, index) => {
    const updated = [...answers];
    updated[index] = e.target.value;
    setAnswers(updated);
  };

  // 🧭 Step Navigation
  const goNext = () => setStep((s) => s + 1);
  const goBack = () => setStep((s) => s - 1);

  // ✅ End screen after all puzzles
  if (step === riddles.length + 3) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "2rem", color: "#2E3A59" }}>🎉 Congratulations!</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            You completed all puzzles! Here are the correct answers:
          </p>
          <div
            style={{
              textAlign: "left",
              background: "#F9FAFB",
              padding: "20px",
              borderRadius: "10px",
              maxHeight: "300px",
              overflowY: "auto",
            }}
          >
            {riddles.map((r, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "12px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "8px",
                }}
              >
                <p style={{ fontWeight: "600" }}>🧩 {i + 1}. {r.q}</p>
                <p style={{ color: "green", marginTop: "4px" }}>✅ {r.a.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            style={btnStyle("#F87171")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // ✅ Step 1: Sudoku
  if (step === 1) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "2rem", color: "#2E3A59" }}>🧩 Puzzle 1: Mini Sudoku (4×4)</h2>
          <p style={{ color: "#444" }}>
            Fill numbers 1–4 so each row, column, and 2×2 block has all numbers.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 70px)",
              gap: "3px",
              justifyContent: "center",
              margin: "25px auto",
              border: "3px solid #333",
              backgroundColor: "#fff",
              padding: "3px",
            }}
          >
            {board.map((row, i) =>
              row.map((cell, j) => (
                <div
                  key={`${i}-${j}`}
                  onClick={() => {
                    if (!isInitialCell(i, j)) {
                      const val = Number(prompt("Enter 1–4"));
                      if (val >= 1 && val <= 4) handleSudokuClick(i, j, val);
                    }
                  }}
                  style={{
                    width: "70px",
                    height: "70px",
                    lineHeight: "70px",
                    border: "1px solid #888",
                    backgroundColor: isInitialCell(i, j)
                      ? "#E0E7FF"
                      : "#F9FAFB",
                    cursor: isInitialCell(i, j) ? "default" : "pointer",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    color: isInitialCell(i, j) ? "#111" : "#3B82F6",
                  }}
                >
                  {cell || ""}
                </div>
              ))
            )}
          </div>
          <button onClick={checkSudoku} style={btnStyle("#3B82F6")}>
            Check Solution
          </button>
          <p
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              color: sudokuFeedback.startsWith("🎉") ? "green" : "red",
            }}
          >
            {sudokuFeedback}
          </p>
          <button onClick={goNext} style={btnStyle("#16A34A")}>Next ➡</button>
        </div>
      </div>
    );
  }

  // ✅ Step 2: Math Puzzle
  if (step === 2) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: "2rem", color: "#2E3A59" }}>➗ Puzzle 2: Math Challenge</h2>
          <p style={{ color: "#444" }}>Solve: 6 × 7 = ?</p>
          <form onSubmit={handleMathSubmit}>
            <input
              type="text"
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              placeholder="Your answer"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                width: "150px",
                textAlign: "center",
                fontSize: "1.1rem",
                marginRight: "10px",
              }}
              disabled={mathSolved}
            />
            <button type="submit" style={btnStyle("#3B82F6")}>
              Submit
            </button>
          </form>
          <p style={{ fontWeight: "bold", color: "#444" }}>{mathFeedback}</p>
          <div>
            <button onClick={goBack} style={btnStyle("#888")}>⬅ Back</button>
            <button onClick={goNext} style={btnStyle("#16A34A")}>Next ➡</button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Steps 3–12: Riddles
  const index = step - 3;
  const current = riddles[index];
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: "2rem", color: "#2E3A59" }}>
          🧠 Riddle {index + 1} of {riddles.length}
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#444" }}>
          {current.q}
        </p>
        <form onSubmit={(e) => handleRiddleSubmit(e, index)}>
          <input
            value={answers[index]}
            onChange={(e) => handleChange(e, index)}
            placeholder="Enter your answer"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "250px",
              textAlign: "center",
              fontSize: "1.1rem",
              marginRight: "10px",
            }}
          />
          <button type="submit" style={btnStyle("#3B82F6")}>Submit</button>
        </form>
        <p
          style={{
            fontWeight: "bold",
            color: feedback[index].startsWith("✅") ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {feedback[index]}
        </p>
        <div style={{ marginTop: "20px" }}>
          {step > 1 && (
            <button onClick={goBack} style={btnStyle("#888")}>
              ⬅ Back
            </button>
          )}
          <button onClick={goNext} style={btnStyle("#16A34A")}>
            {step === riddles.length + 2 ? "Finish 🎉" : "Next ➡"}
          </button>
        </div>
      </div>
    </div>
  );
}
