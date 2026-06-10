"use client";

import { useState, useRef, useEffect } from "react";
import { BookOpen, CheckCircle2, ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";

const contactInfo = [
  { icon: <Phone size={18} />, label: "Phone / WhatsApp", value: "+92 333-3993355", href: "tel:+923333993355", color: "#25d366" },
  { icon: <Mail size={18} />, label: "Email", value: "universallink.co@gmail.com", href: "mailto:universallink.co@gmail.com", color: "#1a2e6e" },
  { icon: <Clock size={18} />, label: "Working Hours", value: "Mon-Fri: Regular\nSat-Sun: Special\n24/7 Support", href: null, color: "#6c5ce7" },
  { icon: <MapPin size={18} />, label: "Location", value: "Online - Worldwide", href: null, color: "#e67e22" },
];

const courseGroups = [
  { label: "QURAN", options: [
    { value: "Noorani Qaida Course", label: "Noorani Qaida" },
    { value: "Quran Nazara Course", label: "Nazara" },
    { value: "Quran Tajweed Course", label: "Tajweed" },
    { value: "Tafseer-ul-Quran", label: "Tafseer" },
    { value: "Quran Memorization (Hifz-ul-Quran)", label: "Hifz (Memorization)" },
  ]},
  { label: "ENGLISH", options: [
    { value: "English Grammar", label: "Grammar" },
    { value: "English Speaking", label: "Speaking" },
    { value: "English Reading", label: "Reading" },
    { value: "English Writing", label: "Writing" },
  ]},
  { label: "SCIENCES & MATHS", options: [
    { value: "Physics", label: "Physics" }, { value: "Chemistry", label: "Chemistry" },
    { value: "Biology", label: "Biology" }, { value: "Mathematics", label: "Mathematics" },
  ]},
];

const inputStyle = {
  width: "100%",
  padding: "10px 14px 10px 40px",
  fontSize: 14,
  border: "1px solid #e2e8f0",
  borderRadius: 10,
  background: "#fff",
  color: "#1a1a2e",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box" as const,
};

function initFormData(course?: string) {
  return { name: "", email: "", phone: "", course: course || "", message: "" };
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1a2e6e", marginBottom: 6 }}>{label}</label>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", pointerEvents: "none", display: "flex" }}>{icon}</span>
        {children}
      </div>
    </div>
  );
}

export default function Contact({ defaultCourse }: { defaultCourse?: string }) {
  const [formData, setFormData] = useState(initFormData(defaultCourse));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(initFormData(defaultCourse));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "84px 0", background: "linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-badge">Contact Us</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, color: "#1a2e6e", marginBottom: 12, lineHeight: 1.2 }}>
            Book Your Free Trial Class
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Share a few details and our team will help you choose the right class and schedule.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28, alignItems: "start" }}>

          {/* Form Card */}
          <div style={{
            background: "white", borderRadius: 20, padding: "32px 28px",
            border: "1px solid #e2e8f0", boxShadow: "0 20px 50px rgba(26,46,110,0.08)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#1a2e6e", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 2 }}>Start Learning</h3>
                <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>We reply within 24 hours.</p>
              </div>
            </div>

            {submitted && (
              <div style={{
                background: "#e8fdf5", color: "#087f5b", padding: "12px 14px", borderRadius: 10, marginBottom: 18,
                display: "flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 13,
                animation: "fadeSlideIn 0.3s ease",
              }}>
                <CheckCircle2 size={18} /> Thank you! We will get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Full Name" icon={<User size={16} />}>
                  <input name="name" required value={formData.name} placeholder="Student or parent name" onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "#1a2e6e"; e.target.style.boxShadow = "0 0 0 3px rgba(26,46,110,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <Field label="Email" icon={<Mail size={16} />}>
                  <input name="email" type="email" required value={formData.email} placeholder="name@example.com" onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "#1a2e6e"; e.target.style.boxShadow = "0 0 0 3px rgba(26,46,110,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                </Field>
              </div>

              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Field label="Phone / WhatsApp" icon={<Phone size={16} />}>
                  <input name="phone" type="tel" required value={formData.phone} placeholder="+92 300 0000000" onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "#1a2e6e"; e.target.style.boxShadow = "0 0 0 3px rgba(26,46,110,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
                </Field>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1a2e6e", marginBottom: 6 }}>Course</label>
                  <CourseDropdown
                    value={formData.course}
                    onChange={(val) => setFormData({ ...formData, course: val })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1a2e6e", marginBottom: 6 }}>Message</label>
                <textarea name="message" value={formData.message}
                  placeholder="Tell us the student's age, preferred time, or learning goal."
                  onChange={handleChange}
                  style={{ ...inputStyle, padding: "10px 14px", minHeight: 100, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={e => { e.target.style.borderColor = "#1a2e6e"; e.target.style.boxShadow = "0 0 0 3px rgba(26,46,110,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }} />
              </div>

              <button type="submit" style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "13px 24px", background: "linear-gradient(135deg, #1a2e6e, #2d4a9e)", color: "white",
                border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
                fontFamily: "inherit", transition: "opacity 0.2s, transform 0.15s",
                boxShadow: "0 6px 20px rgba(26,46,110,0.25)",
              }}
                onMouseOver={e => { e.currentTarget.style.opacity = "0.92"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Right Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {contactInfo.map((info) => (
                <div key={info.label} style={{
                  background: "white", borderRadius: 14, padding: "18px 16px",
                  border: "1px solid #e2e8f0", transition: "box-shadow 0.2s, transform 0.2s",
                }}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,46,110,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${info.color}12`, display: "flex", alignItems: "center", justifyContent: "center", color: info.color, marginBottom: 10 }}>
                    {info.icon}
                  </div>
                  <div style={{ fontSize: 10, color: "#64748b", marginBottom: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{info.label}</div>
                  {info.href ? (
                    <a href={info.href} style={{ fontWeight: 700, color: "#1a2e6e", fontSize: 13, textDecoration: "none", lineHeight: 1.4, display: "block" }}>{info.value}</a>
                  ) : (
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#1a2e6e", whiteSpace: "pre-line", lineHeight: 1.5 }}>{info.value}</div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #1a2e6e, #2d4a9e)", borderRadius: 16, padding: "22px 20px", color: "white", boxShadow: "0 12px 36px rgba(26,46,110,0.2)" }}>
              <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 6, margin: 0 }}>Need a Faster Reply?</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", margin: "8px 0 16px", lineHeight: 1.6 }}>
                Message us directly on WhatsApp and our support team will guide you.
              </p>
              <a href="https://wa.me/923333993355" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#25d366", padding: "11px 20px", borderRadius: 8,
                color: "white", textDecoration: "none", fontWeight: 700, fontSize: 14,
                transition: "opacity 0.2s",
              }}
                onMouseOver={e => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseOut={e => { e.currentTarget.style.opacity = "1"; }}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cdrop-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; font-size: 14px;
          border: 1px solid #e2e8f0; border-radius: 10px;
          background: white; cursor: pointer; font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .cdrop-btn:hover { border-color: #cbd5e1; }
        .cdrop-btn:focus { outline: none; border-color: #1a2e6e; box-shadow: 0 0 0 3px rgba(26,46,110,0.08); }
        .cdrop-menu {
          position: absolute; top: calc(100% + 4px); left: 0; right: 0;
          background: white; border: 1px solid #e2e8f0; border-radius: 12px;
          box-shadow: 0 12px 36px rgba(26,46,110,0.12);
          z-index: 50; max-height: 280px; overflow-y: auto;
          animation: cdropIn 0.15s ease-out;
        }
        @keyframes cdropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cdrop-menu::-webkit-scrollbar { width: 4px; }
        .cdrop-menu::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }
        .cdrop-group:not(:first-child) { border-top: 1px solid #f1f5f9; margin-top: 4px; padding-top: 4px; }
        .cdrop-cat { padding: 6px 14px 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; pointer-events: none; }
        .cdrop-item { padding: 8px 16px; font-size: 14px; color: #1a2e6e; cursor: pointer; transition: background 0.12s, padding-left 0.12s; }
        .cdrop-item:hover { background: #f0f4ff; padding-left: 20px; }
        .cdrop-item.selected { background: #eef2ff; font-weight: 600; }
        @media (max-width: 1024px) {
          .info-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .info-grid, .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Course Dropdown ---------- */
function CourseDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = courseGroups.flatMap(g => g.options).find(o => o.value === value);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <input type="hidden" name="course" value={value} required />
      <button type="button" className="cdrop-btn" onClick={() => setOpen(!open)} style={{ color: selected ? "#1a2e6e" : "#94a3b8" }}>
        <span>{selected ? selected.label : "Select Course"}</span>
        <ChevronDown size={15} style={{ color: "#94a3b8", transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none", flexShrink: 0 }} />
      </button>
      {open && (
        <div className="cdrop-menu">
          {courseGroups.map((group, gi) => (
            <div key={group.label} className={gi > 0 ? "cdrop-group" : ""}>
              <div className="cdrop-cat">{group.label}</div>
              {group.options.map(opt => (
                <div key={opt.value} className={`cdrop-item${opt.value === value ? " selected" : ""}`} onClick={() => { onChange(opt.value); setOpen(false); }}>
                  {opt.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


