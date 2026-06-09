"use client";
import { ArrowRight, Globe2, Users, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>,
    title: "Certified Hafiz Teachers",
    desc: "Learn Quran from qualified Hafiz instructors with years of experience in Tajweed, Hifz, and Islamic studies.",
    color: "#1a2e6e",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Global Quran Community",
    desc: "Join students from 10+ countries learning Quran online with flexible scheduling across all time zones.",
    color: "#00b894",
  },
  {
    icon: <Users size={22} />,
    title: "Personalized Quran Journey",
    desc: "Each student follows a custom learning plan tailored to their current level, pace, and Quran memorization goals.",
    color: "#6c5ce7",
  },
  {
    icon: <Target size={22} />,
    title: "Clear Quran Progress",
    desc: "Track improvement in recitation, Tajweed accuracy, Hifz progress, and regular teacher feedback for parents.",
    color: "#e67e22",
  },
];

const steps = [
  {
    num: "01",
    title: "Book Free Trial",
    desc: "Sign up for a free Quran trial class — no commitment required.",
    color: "#1a2e6e",
  },
  {
    num: "02",
    title: "Meet Your Hafiz Teacher",
    desc: "Get matched with a certified Hafiz Quran teacher suited to your level.",
    color: "#00b894",
  },
  {
    num: "03",
    title: "Start Quran Classes",
    desc: "Attend live interactive Quran classes and begin your learning journey.",
    color: "#6c5ce7",
  },
  {
    num: "04",
    title: "Track Quran Progress",
    desc: "Receive regular updates on recitation, Tajweed, and Hifz progress.",
    color: "#f5a623",
  },
];

type AboutProps = {
  showHowItWorks?: boolean;
};

export default function About({ showHowItWorks = true }: AboutProps) {
  return (
    <>
      {/* About Section */}
      <section id="about" style={{ padding: "72px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

            {/* Left */}
            <div>
              <span className="section-badge">About Us</span>
              <h2 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#1a2e6e",
                marginBottom: 20,
                lineHeight: 1.2,
              }}>
                Your Trusted Platform for Online Quran & Academic Learning
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 16 }}>
                Universal Link Online Education System is a trusted online learning platform dedicated to providing high-quality Quran education and academic courses to students around the world. Our mission is to make learning the Quran accessible, engaging, and effective by connecting students with experienced and qualified Hafiz teachers through personalized online classes.
              </p>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 16 }}>
                We believe that every student deserves the opportunity to connect with the Quran while achieving academic excellence and personal growth. Whether you are looking to learn Quran recitation with Tajweed, memorize the Quran through Hifz, strengthen your understanding of Islamic studies, or improve your school performance, our comprehensive courses are designed to support your educational journey.
              </p>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 32 }}>
                At Universal Link Online Education System, we combine modern teaching methods, interactive learning tools, and individualized attention to create a productive and inspiring learning environment for students of all ages — rooted in strong moral values and a passion for knowledge.
              </p>

              <a href="/#contact" className="btn-primary">
                Get Started Today <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — Vision & Mission */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="mission-card" style={{
                background: "linear-gradient(135deg, #1a2e6e, #2a3f8f)",
                borderRadius: 24,
                padding: 32,
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.1)",
                }} />
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  width: 100, height: 100, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.08)",
                }} />

                <div style={{ fontSize: 36, marginBottom: 16 }}>📖</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Our Vision</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: 14 }}>
                  To become a leading global online platform for Quran and academic education that empowers students with knowledge, strong character, and a lifelong connection to the Quran.
                </p>
              </div>

              <div style={{
                background: "white",
                borderRadius: 24,
                padding: 28,
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(26,46,110,0.07)",
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>🎯</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a2e6e", marginBottom: 14 }}>Our Mission</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "To make Quran and academic education accessible worldwide.",
                    "To help students recite Quran with correct Tajweed and memorization.",
                    "To deliver personalized Quran classes through qualified Hafiz teachers.",
                    "To nurture a love for the Quran alongside academic excellence.",
                    "To provide affordable, high-quality online learning for every family.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#475569", lineHeight: 1.6 }}>
                      <CheckCircle size={16} color="#1a2e6e" style={{ flexShrink: 0, marginTop: 3 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-badge">Why Families Choose Us</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, color: "#1a2e6e", marginBottom: 12 }}>
              Quran Learning Built Around Every Student
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
              Universal Link is designed for families who want reliable Quran classes and students who need patient, clear, consistent guidance from expert teachers.
            </p>
          </div>

          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {values.map((value) => (
              <div key={value.title} className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 22 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${value.color}14`, color: value.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a2e6e", marginBottom: 8 }}>{value.title}</h3>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showHowItWorks && (
      <>
      {/* How It Works */}
      <section id="how-it-works" style={{ padding: "72px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-badge">How It Works</span>
            <h2 style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              fontWeight: 800,
              color: "#1a2e6e",
              marginBottom: 14,
            }}>
              Start Learning Quran in 4 Simple Steps
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
              Getting started with Quran classes is easy. Book your free trial and begin your learning journey today.
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

      {/* CTA Banner */}
      <section style={{
        background: "linear-gradient(135deg, #1a2e6e 0%, #2a3f8f 100%)",
        padding: "64px 16px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 44, marginBottom: 16 }}>🚀</div>
          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "white",
            marginBottom: 14,
          }}>
            Ready to Start Your Quran Journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Join 500+ students already learning Quran with Universal Link. Book your free trial class today — no commitment required.
          </p>
          <a href="/#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#f5a623", color: "#1a2e6e",
            padding: "14px 32px", borderRadius: 10,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
          }}>
            Start Learning Quran <ArrowRight size={18} />
          </a>
        </div>
      </section>
      </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .values-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .features-check-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 560px) {
          .mission-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 480px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
