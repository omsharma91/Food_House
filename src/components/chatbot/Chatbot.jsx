import React, { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "you", text: input };
    setMessage((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botReply = await getBotReply(input);
      const botMessage = { sender: "bot", text: botReply };
      setMessage((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessage((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getBotReply = async (input) => {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  };

  return (
    <div className="container">
      <div
        className="rounded shadow-sm p-3 bg-white mx-auto"
        style={{
          maxWidth: "100%",
          width: "100%",
          minWidth: "280px",
          maxHeight: "500px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 className="text-center text-primary mb-3">Ask your query here</h5>

        <div
          className="border rounded p-2 mb-3"
          style={{
            flex: 1,
            overflowY: "auto",
            background: "#f9f9f9",
          }}
        >
          {messages.map((m, i) => (
            <div key={i} className={`text-${m.sender === "you" ? "end" : "start"} mb-2`}>
              <p className="mb-1">
                <strong>{m.sender}:</strong> {m.text}
              </p>
            </div>
          ))}
          {loading && <p className="text-muted"><em>Bot is typing...</em></p>}
        </div>

        <div className="d-flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="form-control me-2"
            placeholder="Type a message..."
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
