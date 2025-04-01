import { useState, useEffect } from "react";

export function OttoChat({ formData }) {
  const [messages, setMessages] = useState([]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const firstMessage = formData.message.trim()
      ? `Hey ${formData.firstName}! 👋 I’m Otto 🦦 — your go-to otter for EF travel tips and tour planning charm. I saw you're based in ${formData.province} and looking into this: "${formData.message}". Let's dive in!`
      : `Hey ${formData.firstName}! 👋 I’m Otto 🦦 — your go-to otter for EF travel tips and tour planning charm. So tell me — how can I help you today?`;

    setMessages([{ from: "otto", text: firstMessage }]);
  }, []);

  const handleReply = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      const reply = e.target.value.trim();
      e.target.value = "";
      setMessages(prev => [...prev, { from: "user", text: reply }]);

      let response = "";
      const lower = reply.toLowerCase();

      if (lower.includes("costa rica")) {
        response = "Costa Rica? Excellent choice — jungles, volcanoes, and ziplining through the rainforest 🌴🔥

Are you thinking March Break? Here’s a tour teachers love: https://www.eftours.ca/educational-tour/costa-rica-tropics";
      } else {
        response = "That’s a great question — let me point you in the right direction or connect you to a Tour Consultant if it's something I can’t answer!";
      }

      setTimeout(() => {
        setMessages(prev => [...prev, { from: "otto", text: response }]);
      }, 600);
    }
  };

  return (
    <div className="chat">
      {messages.map((msg, idx) => (
        <div key={idx} style={{ backgroundColor: msg.from === "otto" ? "#49C0B6" : "#FFCB05" }}>
          <p>{msg.text}</p>
        </div>
      ))}
      <input placeholder="Type your reply..." onKeyDown={handleReply} />
    </div>
  );
}
