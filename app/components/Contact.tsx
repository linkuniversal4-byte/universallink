"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Phone / WhatsApp",
    value: "+92 333-3993355",
    href: "tel:+923333993355",
    color: "#25d366",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "universallink.co@gmail.com",
    href: "mailto:universallink.co@gmail.com",
    color: "#1a2e6e",
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "Mon-Fri: Regular\nSat-Sun: Special\n24/7 Support",
    href: null,
    color: "#6c5ce7",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Online - Worldwide",
    href: null,
    color: "#e67e22",
  },
];

const courses = ["Quran", "English", "Math", "Science", "GCSE", "NAPLAN"];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1a2e6e", marginBottom: 7 }}>
      {children}
    </label>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(initialFormData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "84px 0", background: "linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-badge">Contact Us</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, color: "#1a2e6e", marginBottom: 12 }}>
            Book Your Free Trial Class
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Share a few details and our team will help you choose the right class and schedule.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 28, alignItems: "start" }}>
          <div style={{
            background: "white",
            borderRadius: 18,
            padding: "30px 26px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 18px 48px rgba(26,46,110,0.10)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
              <div style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "#1a2e6e",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <BookOpen size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 3 }}>Start Learning</h3>
                <p style={{ color: "#64748b", fontSize: 13 }}>We reply within 24 hours.</p>
              </div>
            </div>

            {submitted && (
              <div style={{
                background: "#e8fdf5",
                color: "#087f5b",
                padding: "12px 14px",
                borderRadius: 10,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontWeight: 700,
                fontSize: 13,
              }}>
                <CheckCircle2 size={18} /> Thank you! We will get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <FieldLabel>Full Name</FieldLabel>
                  <div className="input-shell">
                    <User size={17} />
                    <input
                      name="name"
                      required
                      value={formData.name}
                      placeholder="Student or parent name"
                      onChange={handleChange}
                      className="form-input contact-input"
                    />
                  </div>
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <div className="input-shell">
                    <Mail size={17} />
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      placeholder="name@example.com"
                      onChange={handleChange}
                      className="form-input contact-input"
                    />
                  </div>
                </div>
              </div>

              <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <FieldLabel>Phone / WhatsApp</FieldLabel>
                  <div className="input-shell">
                    <Phone size={17} />
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      placeholder="+92 300 0000000"
                      onChange={handleChange}
                      className="form-input contact-input"
                    />
                  </div>
                </div>
                <div>
                  <FieldLabel>Course</FieldLabel>
                  <select name="course" required value={formData.course} onChange={handleChange} className="form-input">
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <FieldLabel>Message</FieldLabel>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Tell us the student's age, preferred time, or learning goal."
                  onChange={handleChange}
                  className="form-input"
                  style={{ minHeight: 112, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 2, minHeight: 48 }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {contactInfo.map((info) => (
                <div key={info.label} className="card-hover" style={{
                  background: "white",
                  borderRadius: 14,
                  padding: 16,
                  border: "1px solid #e2e8f0",
                  minHeight: 138,
                }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    background: `${info.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginBottom: 12,
                    color: info.color,
                  }}>
                    {info.icon}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {info.label}
                  </div>
                  {info.href ? (
                    <a href={info.href} style={{ fontWeight: 700, color: "#1a2e6e", fontSize: 13, textDecoration: "none", wordBreak: "break-word", lineHeight: 1.5 }}>
                      {info.value}
                    </a>
                  ) : (
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#1a2e6e", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                      {info.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{
              background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
              borderRadius: 16,
              padding: "24px 20px",
              color: "white",
              boxShadow: "0 18px 44px rgba(26,46,110,0.22)",
            }}>
              <h3 style={{ fontWeight: 800, fontSize: 19, marginBottom: 8 }}>Need a Faster Reply?</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", marginBottom: 16, lineHeight: 1.6 }}>
                Message us directly on WhatsApp and our support team will guide you.
              </p>
              <a href="https://wa.me/923333993355" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25d366",
                padding: "11px 18px",
                borderRadius: 8,
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
              }}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-shell {
          position: relative;
        }
        .input-shell svg {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }
        .contact-input {
          padding-left: 40px !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .contact-info-grid,
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 420px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
