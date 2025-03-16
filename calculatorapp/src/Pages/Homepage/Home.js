import { useState } from "react";
import { evaluate } from "mathjs";

export default function Home() {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState("dark");

  const handleButtonClick = (value) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const clearInput = () => {
    setInput("0");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const clearSingleHistory = (index) => {
    setHistory(history.filter((_, i) => i !== index));
  };

  const calculateResult = () => {
    try {
      const result = evaluate(input).toString();
      setHistory([...history, `${input} = ${result}`]);
      setInput(result);
    } catch {
      setInput("Error");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: theme === "dark" ? "#121212" : "#f0f0f0", color: theme === "dark" ? "#ffffff" : "#000000", padding: "10px" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px", backgroundColor: theme === "dark" ? "#1E1E1E" : "#FFFFFF", color: theme === "dark" ? "#ffffff" : "#000000", borderRadius: "12px", boxShadow: "0px 6px 12px rgba(0,0,0,0.4)", textAlign: "center" }}>
        <button onClick={toggleTheme} style={{ marginBottom: "15px", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", backgroundColor: theme === "dark" ? "#03DAC6" : "#6200EE", color: "#fff" }}>Toggle Theme</button>
        <div style={{ textAlign: "right", fontSize: "30px", padding: "10px", backgroundColor: theme === "dark" ? "#333333" : "#dddddd", borderRadius: "5px", marginBottom: "15px", overflowX: "auto" }}>{input}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              style={{
                fontSize: "20px",
                padding: "15px",
                backgroundColor:
                  char === "=" ? "#4CAF50" :
                  ["+", "-", "*", "/"].includes(char) ? "#2196F3" :
                  theme === "dark" ? "#424242" : "#E0E0E0",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: theme === "dark" ? "#fff" : "#000"
              }}
              onClick={() => (char === "=" ? calculateResult() : handleButtonClick(char))}
            >
              {char}
            </button>
          ))}
          <button style={{ gridColumn: "span 4", backgroundColor: "#FF0000", color: "white", padding: "15px", borderRadius: "8px", border: "none", cursor: "pointer" }} onClick={clearInput}>
            Clear
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>History:</h3>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "14px", maxHeight: "150px", overflowY: "auto" }}>
            {history.map((entry, index) => (
              <li key={index} style={{ backgroundColor: theme === "dark" ? "#616161" : "#BDBDBD", padding: "5px", borderRadius: "5px", marginBottom: "5px", color: theme === "dark" ? "#fff" : "#000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {entry}
                <button onClick={() => clearSingleHistory(index)} style={{ marginLeft: "10px", padding: "5px 10px", borderRadius: "5px", border: "none", cursor: "pointer", backgroundColor: "#FF5722", color: "white" }}>X</button>
              </li>
            ))}
          </ul>
          <button onClick={clearHistory} style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", backgroundColor: "#FF5722", color: "white" }}>
            Clear All History
          </button>
        </div>
      </div>
    </div>
  );
}
