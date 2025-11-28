import { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import { offlineData } from "./offlineData"; // ✅ Offline dataset

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "👋 Hi! I'm EduWeb Bot. How can I help you today?" },
  ]);
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current)
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Detect if input is a math expression
  const isMathExpression = (text) => {
    if (!text) return false;
    const cleaned = text.replace(/\s+/g, "");
    return /\d/.test(cleaned) && /[+\-*/^x×÷%]/i.test(cleaned);
  };

  // ✅ Calculate string similarity (Levenshtein distance)
  const similarity = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const m = s1.length,
      n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // deletion
          dp[i][j - 1] + 1, // insertion
          dp[i - 1][j - 1] + cost // substitution
        );
      }
    }

    const distance = dp[m][n];
    const maxLen = Math.max(m, n);
    return 1 - distance / maxLen;
  };

  // ✅ Offline Q&A search with fuzzy match
  const getOfflineAnswer = (query) => {
    const lower = query.toLowerCase();

    // Exact or partial match
    let found = offlineData.find((item) =>
      lower.includes(item.question.toLowerCase())
    );

    // Fuzzy match (handle typos)
    if (!found) {
      let bestMatch = null;
      let bestScore = 0;

      for (const item of offlineData) {
        const score = similarity(lower, item.question.toLowerCase());
        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      }

      if (bestScore > 0.7) {
        found = bestMatch;
      }
    }

    if (found) return found.answer;

    if (["hi", "hii", "hello", "hey"].includes(lower))
      return "👋 Hey there! How’s your learning going today?";
    return null;
  };

  // ✅ Handle sending messages
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");

    // 🧮 Math expressions
    if (isMathExpression(userMessage)) {
      let expr = userMessage
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/x/g, "*")
        .replace(/\^/g, "**")
        .replace(/\s+/g, "");
      try {
        // eslint-disable-next-line no-new-func
        const result = new Function("return " + expr)();
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `🧮 Result: ${result}` },
        ]);
        return;
      } catch {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "⚠️ Sorry, I couldn’t calculate that." },
        ]);
        return;
      }
    }

    // 🧠 Offline response
    const reply = getOfflineAnswer(userMessage);
    if (reply) {
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "🤔 Hmm... I don’t know that yet, but I’m learning new things every day! Try asking something else 😊",
        },
      ]);
    }
  };

  // ✅ Render Chatbot UI
  return (
    <>
      {!open && (
        <div
          style={styles.iconContainer}
          onClick={() => setOpen(true)}
          title="Open Chat"
        >
          <FaComments color="#fff" size={25} />
        </div>
      )}

      {open && (
        <div style={styles.container}>
          <div style={styles.header}>
            <h3>EduWeb Chat</h3>
            <button style={styles.closeBtn} onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div style={styles.chatWindow}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={msg.type === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.input}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} style={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ✅ Styles
const styles = {
  iconContainer: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#4caf50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  container: {
    width: "340px",
    height: "450px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif",
    zIndex: 1000,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 14px",
    background: "#4caf50",
    color: "#fff",
    fontWeight: "600",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  chatWindow: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    background: "#f5f7fa",
  },
  userMsg: {
    background: "#2196f3",
    color: "#fff",
    padding: "8px 10px",
    borderRadius: "10px",
    margin: "6px 0",
    alignSelf: "flex-end",
    maxWidth: "75%",
  },
  botMsg: {
    background: "#e0e0e0",
    color: "#000",
    padding: "8px 10px",
    borderRadius: "10px",
    margin: "6px 0",
    alignSelf: "flex-start",
    maxWidth: "75%",
  },
  inputContainer: {
    display: "flex",
    borderTop: "1px solid #ccc",
    padding: "8px",
    background: "#fff",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none",
    fontSize: "0.9rem",
  },
  sendBtn: {
    marginLeft: "8px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
