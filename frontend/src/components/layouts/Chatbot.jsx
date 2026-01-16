import React, { useState } from "react";
import { X, Paperclip, Plus, Send } from "lucide-react";
import "../../styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! I'm TomaBot, your TomatoGuard AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        text: message,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          text: "Thank you for your message. I'm here to help with your tomato farming questions!",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Interface */}
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <h3>Talk with TomatoGuard AI -- TomaBot!</h3>
          <button className="close-btn" onClick={toggleChat}>
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.type}`}>
              <div className="message-bubble">
                <p>{msg.text}</p>
                <span className="message-time">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="chatbot-input-area">
          <div className="input-actions">
            <button type="button" className="action-btn" title="Attach file">
              <Paperclip size={20} />
            </button>
            <button type="button" className="action-btn" title="More options">
              <Plus size={20} />
            </button>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="message-input"
          />
          <button 
            type="button" 
            className="send-btn" 
            onClick={handleSendMessage}
            title="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Chat Head Button */}
      <button
        className={`chatbot-head ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
        title="Chat with TomaBot"
      >
        <img
          src="/tomabot.png"
          alt="TomaBot"
          className="chatbot-avatar"
        />
        <div className="chatbot-pulse"></div>
      </button>
    </>
  );
};

export default Chatbot;