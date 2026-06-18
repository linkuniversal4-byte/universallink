"use client";
import { useState, useRef, useEffect } from "react";
import { courseData } from "./courseData";

type Message = {
  role: "user" | "bot";
  text: string;
};

const pricingPlans = [
  { label: "5 Classes / Week", sub: "22 classes/mo", prices: "£30 • A$60 • $40 • C$55" },
  { label: "4 Classes / Week", sub: "16 classes/mo", prices: "£25 • A$50 • $35 • C$45" },
  { label: "3 Classes / Week", sub: "12 classes/mo", prices: "£25 • A$50 • $35 • C$45" },
  { label: "2 Classes / Week", sub: "8 classes/mo",  prices: "£20 • A$40 • $25 • C$35" },
  { label: "Weekend Classes",  sub: "Sat & Sun",     prices: "£25 • A$50 • $35 • C$45" },
];

const allCourses = Object.values(courseData).flatMap((subs) =>
  Object.values(subs).map((c) => ({
    name: c.title.toLowerCase(),
    title: c.title,
    category: c.category,
    emoji: c.emoji,
    tagline: c.tagline,
    duration: c.overview.duration,
    level: c.overview.level,
    teacher: c.teacher.name,
    rating: c.rating,
  }))
);

const quickReplies = ["Quran Courses", "English Courses", "Pricing", "Contact & Enrollment"];

function findCourse(query: string) {
  const q = query.toLowerCase().trim();
  for (const c of allCourses) {
    if (c.name.includes(q) || q.includes(c.name)) return c;
  }
  const words = q.split(/\s+/);
  for (const c of allCourses) {
    for (const w of words) {
      if (w.length > 2 && c.name.includes(w)) return c;
    }
  }
  return null;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

const initialBot = `Hello! ${getGreeting()}! I'm Universal Link's AI assistant 🤖

I can help you with:
• Course information (Quran, English, Science, GCSE, NAPLAN)
• Pricing & plans
• Enrollment & contact details

Just type a course name or question!`;

function getReply(query: string): string {
  const q = query.toLowerCase().trim();

  if (/^(hi|hello|hey|salam|assalam)/.test(q)) {
    return `Wa Alaikum Assalam! ${getGreeting()}! 😊 How can I help you? You can ask me about our courses like Quran, English, Science, GCSE, or NAPLAN.`;
  }

  if (/^(thanks|thank you|shukran)/.test(q)) {
    return "You're welcome! 🤗 If you have more questions, feel free to ask. I'm here to help!";
  }

  if (/^(enroll|enrollment|register|signup|contact|phone|whatsapp|email|call|admission)/.test(q)) {
    return (
      `📞 **Contact & Enrollment**\n\n` +
      `WhatsApp / Phone: +92 333-3993355\n` +
      `Email: universallink.co@gmail.com\n\n` +
      `You can also fill out the enrollment form on our website to get started!`
    );
  }

  if (/^(price|fee|cost|pricing|how much|payment|plan|package)/.test(q)) {
    const plans = pricingPlans.map((p) => `• **${p.label}** (${p.sub}): ${p.prices}`).join("\n");
    return (
      `💰 **Our Pricing Plans**\n\n` +
      `We offer flexible class packages for students worldwide:\n\n${plans}\n\n` +
      `All plans include:\n` +
      `• Live Interactive Classes\n` +
      `• Progress Tracking\n` +
      `• Study Materials\n` +
      `• Teacher Support\n` +
      `• Certificate of Completion\n\n` +
      `We accept Western Union, MoneyGram, Bank Transfer, Ria & Wise.\n\n` +
      `Visit our Pricing page or type a course name for details!`
    );
  }

  if (/^(quran|english|science|gcse|naplan)/.test(q) && q.length < 20) {
    const cat = q;
    const subs = allCourses.filter((c) => c.category.toLowerCase().includes(cat) || c.name.includes(cat));
    if (subs.length) {
      const list = subs.map((s) => `• ${s.emoji} ${s.title}`).join("\n");
      return `Here are our **${cat.toUpperCase()}** courses:\n\n${list}\n\nType a course name to learn more!`;
    }
  }

  if (/help|what can you/.test(q)) {
    return initialBot;
  }

  const course = findCourse(q);
  if (course) {
    return (
      `${course.emoji} **${course.title}**\n` +
      `📂 ${course.category}\n` +
      `⭐ Rating: ${course.rating}/5\n` +
      `📝 ${course.tagline}\n` +
      `⏱ Duration: ${course.duration}\n` +
      `🎯 Level: ${course.level}\n` +
      `👨‍🏫 Teacher: ${course.teacher}\n\n` +
      `💡 Ask about pricing or visit our enrollment page!`
    );
  }

  return (
    `I'm not sure I understand. 🤔 Try asking about a specific course like:\n\n` +
    `• Noorani Qaida\n• Tajweed\n• Hifz\n• English Grammar\n• English Speaking\n• Physics\n• Chemistry\n• Biology\n• Mathematics\n• GCSE\n• NAPLAN`
  );
}

function formatMessage(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: initialBot }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  function handleSend(text?: string) {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);
    setTimeout(() => {
      const reply = getReply(msg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setLoading(false);
    }, 400);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function closeChat() {
    setOpen(false);
    setMessages([{ role: "bot", text: initialBot }]);
  }

  return (
    <>
      <button
        onClick={() => { if (open) closeChat(); else setOpen(true); }}
        style={{
          position: "fixed",
          bottom: 90,
          right: 20,
          zIndex: 10000,
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #1a2e6e 0%, #2a3f8f 100%)",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(26,46,110,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,46,110,0.6)"; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,46,110,0.5)"; }}
        aria-label="Chat with us"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 9h8" /><path d="M8 13h6" />
          </svg>
        )}
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#22c55e",
            border: "2px solid white",
            animation: "pulseOnline 2s ease-in-out infinite",
          }}
        />
        <style>{`@keyframes pulseOnline { 0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } }`}</style>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 160,
            right: 20,
            zIndex: 10000,
            width: 380,
            maxWidth: "calc(100vw - 40px)",
            height: 540,
            maxHeight: "calc(100vh - 200px)",
            background: "white",
            borderRadius: 20,
            boxShadow: "0 20px 80px rgba(26,46,110,0.25), 0 4px 24px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: '"DM Sans", sans-serif',
            animation: "chatIn 0.25s ease",
          }}
        >
          <style>{`
            @keyframes chatIn {
              from { opacity: 0; transform: translateY(16px) scale(0.96); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .chat-scroll::-webkit-scrollbar { width: 4px; }
            .chat-scroll::-webkit-scrollbar-track { background: transparent; }
            .chat-scroll::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
          `}</style>

          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
              color: "white",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                backdropFilter: "blur(4px)",
              }}
            >
              🤖
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>AI Assistant</div>
              <div style={{ fontSize: 12, opacity: 0.65 }}>Universal Link Education System</div>
            </div>
            <button
              onClick={closeChat}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: 16,
                width: 30,
                height: 30,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="chat-scroll"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 16px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "88%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user"
                    ? "18px 18px 4px 18px"
                    : "18px 18px 18px 4px",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #1a2e6e, #2a3f8f)"
                    : "white",
                  color: msg.role === "user" ? "white" : "#1e293b",
                  fontSize: 14,
                  lineHeight: 1.65,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  boxShadow: msg.role === "user"
                    ? "0 4px 14px rgba(26,46,110,0.25)"
                    : "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                {msg.role === "bot" ? formatMessage(msg.text) : msg.text}
              </div>
            ))}

            {/* Quick replies on first message */}
            {messages.length === 1 && !loading && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                {quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => handleSend(qr)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 20,
                      border: "1px solid #d1d5db",
                      background: "white",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#475569",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = "#eef2ff"; e.currentTarget.style.borderColor = "#1a2e6e"; e.currentTarget.style.color = "#1a2e6e"; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "#d1d5db"; e.currentTarget.style.color = "#475569"; }}
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  gap: 4,
                  padding: "14px 18px",
                  borderRadius: "18px 18px 18px 4px",
                  background: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#94a3b8",
                      animation: `bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
                <style>{`@keyframes bounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }`}</style>
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid #e2e8f0",
              display: "flex",
              gap: 8,
              background: "white",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a course name..."
              style={{
                flex: 1,
                padding: "11px 16px",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                fontSize: 16,
                fontFamily: "inherit",
                outline: "none",
                background: "#f8fafc",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#1a2e6e"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,46,110,0.08)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                border: "none",
                background: !input.trim()
                  ? "linear-gradient(135deg, #e2e8f0, #f1f5f9)"
                  : "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
                color: !input.trim() ? "#94a3b8" : "white",
                cursor: !input.trim() ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s ease",
                boxShadow: !input.trim() ? "none" : "0 4px 12px rgba(26,46,110,0.3)",
              }}
              onMouseOver={(e) => { if (input.trim()) { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(26,46,110,0.4)"; } }}
              onMouseOut={(e) => { if (input.trim()) { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,46,110,0.3)"; } }}
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polyline points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
