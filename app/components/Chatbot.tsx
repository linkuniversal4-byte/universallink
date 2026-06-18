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
    classesPerWeek: c.overview.classesPerWeek,
    level: c.overview.level,
    teacher: c.teacher.name,
    rating: c.rating,
  }))
);

const courseKeywords: [string, string[]][] = [
  ["quran", ["quran", "noorani", "qaida", "nazara", "tajweed", "tafseer", "hifz", "memorization", "islamic"]],
  ["english", ["english", "grammar", "speaking", "reading", "writing"]],
  ["science", ["science", "physics", "chemistry", "biology", "mathematics", "math", "maths"]],
  ["gcse", ["gcse", "exam", "igcse"]],
  ["naplan", ["naplan", "numeracy", "literacy"]],
];

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

const initialBot = `Hello! ${getGreeting()}! 👋 I'm here to help you with course information.\n\nTry asking me about any course like:\n• Quran Education (Noorani Qaida, Tajweed, Hifz, etc.)\n• English Language (Grammar, Speaking, Writing)\n• Sciences & Maths (Physics, Chemistry, Biology, Math)\n• GCSE or NAPLAN\n\nOr just type a course name!`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: initialBot }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setLoading(false);
    }, 400);
  }

  function getReply(query: string): string {
    const q = query.toLowerCase().trim();

    if (/^(hi|hello|hey|salam|assalam)/.test(q)) {
      return `Wa Alaikum Assalam! ${getGreeting()}! 😊 How can I help you? You can ask me about our courses like Quran, English, Science, GCSE, or NAPLAN.`;
    }

    if (/^(thanks|thank you|shukran)/.test(q)) {
      return "You're welcome! 🤗 If you have more questions, feel free to ask. I'm here to help!";
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

    if (/help|what can you|course|courses/.test(q) && q.length < 30) {
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

    const catMatch = courseKeywords.find(([, kw]) => kw.some((k) => q.includes(k)));
    if (catMatch) {
      const [cat] = catMatch;
      const subs = allCourses.filter((c) => c.category.toLowerCase().includes(cat) || c.name.includes(cat));
      const list = subs.map((s) => `• ${s.emoji} ${s.title}`).join("\n");
      return `Here are our **${cat.toUpperCase()}** courses:\n\n${list}\n\nType a course name to learn more!`;
    }

    return (
      `I'm not sure I understand. 🤔 Try asking about a specific course like:\n\n` +
      `• Noorani Qaida\n• Tajweed\n• Hifz\n• English Grammar\n• English Speaking\n• Physics\n• Chemistry\n• Biology\n• Mathematics\n• GCSE\n• NAPLAN`
    );
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 90,
          right: 20,
          zIndex: 9999,
          width: 54,
          height: 54,
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 6px 24px rgba(26,46,110,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
          fontSize: 24,
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Chat with us"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 155,
            right: 20,
            zIndex: 9999,
            width: 360,
            maxWidth: "calc(100vw - 40px)",
            height: 500,
            maxHeight: "calc(100vh - 200px)",
            background: "white",
            borderRadius: 18,
            boxShadow: "0 16px 60px rgba(26,46,110,0.2), 0 4px 20px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
              color: "white",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              💬
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Course Assistant</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Ask me about any course</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: 18,
                padding: 4,
              }}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div
            ref={listRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "#f8fafc",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: msg.role === "user" ? "#1a2e6e" : "white",
                  color: msg.role === "user" ? "white" : "#1e293b",
                  fontSize: 14,
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  boxShadow: msg.role === "user" ? "0 4px 12px rgba(26,46,110,0.2)" : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 16px 4px",
                  background: "white",
                  color: "#94a3b8",
                  fontSize: 14,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                Typing...
              </div>
            )}
          </div>

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
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a course name..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid #e2e8f0",
                fontSize: 14,
                fontFamily: "inherit",
                outline: "none",
                background: "#f8fafc",
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: "none",
                background: !input.trim() ? "#e2e8f0" : "#1a2e6e",
                color: "white",
                cursor: !input.trim() ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
