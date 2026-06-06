"use client";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Book Free Trial",
    desc: "Fill out our contact form and schedule your free trial class.",
    color: "#1a2e6e",
  },
  {
    num: "02",
    title: "Meet Your Teacher",
    desc: "Get matched with a certified teacher suited to your needs.",
    color: "#00b894",
  },
  {
    num: "03",
    title: "Start Learning",
    desc: "Attend live classes and begin your learning journey.",
    color: "#6c5ce7",
  },
  {
    num: "04",
    title: "Track Progress",
    desc: "Receive regular updates and improve step by step.",
    color: "#f5a623",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" style={{ padding: "96px 0 72px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-badge">How It Works</span>
            <h2 style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: 800,
              color: "#1a2e6e",
              marginBottom: 14,
            }}>
              Start Learning in 4 Simple Steps
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
              Getting started is easy. Book your free trial and begin your learning journey today.
            </p>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 28,
                  boxShadow: "0 4px 20px rgba(26,46,110,0.07)",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: `${step.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  border: `2px solid ${step.color}30`,
                }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: step.color }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        background: "linear-gradient(135deg, #1a2e6e 0%, #2a3f8f 100%)",
        padding: "64px 16px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>Start</div>
          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "white",
            marginBottom: 14,
          }}>
            Ready to Start Your Learning Journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Join 500+ students already learning with Universal Link. Book your free trial class today.
          </p>
          <a href="/#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#f5a623", color: "white",
            padding: "14px 32px", borderRadius: 10,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
          }}>
            Book Free Trial Now <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
