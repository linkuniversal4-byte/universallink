"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";
import { CheckCircle, Clock, Award, UserCheck } from "lucide-react";

const benefits = [
  { icon: <UserCheck size={24} />, title: "Expert Teachers", desc: "Qualified educators with NAPLAN assessment experience" },
  { icon: <Clock size={24} />, title: "Flexible Scheduling", desc: "Classes that fit around your family's routine" },
  { icon: <Award size={24} />, title: "Exam Strategies", desc: "Targeted practice tests & proven techniques" },
  { icon: <CheckCircle size={24} />, title: "Progress Tracking", desc: "Regular assessments & detailed feedback reports" },
];

const sections = [
  { name: "Numeracy", icon: "🔢", desc: "Number, algebra, measurement, space & statistics" },
  { name: "Reading", icon: "📖", desc: "Comprehension, interpretation & critical analysis" },
  { name: "Writing", icon: "✏️", desc: "Narrative, persuasive & informative text types" },
  { name: "Language Conventions", icon: "📝", desc: "Spelling, grammar, punctuation & vocabulary" },
];

export default function NAPLANPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64, overflow: "hidden" }}>
        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0", fontSize: 13, color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/courses" style={{ color: "#64748b", textDecoration: "none" }}>Courses</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#8e44ad", fontWeight: 600 }}>NAPLAN</span>
        </div>

        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #6c3483 0%, #8e44ad 50%, #af7ac5 100%)",
            padding: "clamp(48px, 6vw, 80px) 24px",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "url('/image7.png') center/cover no-repeat", opacity: 0.08 }} />
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(0,0,0,0.04)" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.15 }}>
              NAPLAN Online Education
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.9)", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>
              Our NAPLAN Australia Online Education program is designed to help students prepare confidently for NAPLAN assessments through structured and interactive online learning. The course focuses on Reading, Writing, Language Conventions (Spelling, Grammar, and Punctuation), and Numeracy. Experienced teachers provide targeted practice, exam strategies, and personalized feedback to improve performance and build confidence. With flexible scheduling, engaging lessons, and regular progress assessments, students receive the support they need to achieve their best results in NAPLAN exams.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section style={{ padding: "clamp(40px, 5vw, 64px) 24px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#6c3483", marginBottom: 10 }}>
                NAPLAN Focus Areas
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
                Comprehensive coverage of all NAPLAN test domains
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {sections.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px 22px",
                    border: "1px solid #f1f5f9",
                    boxShadow: "0 4px 16px rgba(142,68,173,0.06)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(142,68,173,0.15)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(142,68,173,0.06)"; }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#6c3483", marginBottom: 6 }}>{s.name}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: "0 24px 80px", background: "#f9f5fb" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #f5eeff, #ede0f5)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                border: "1px solid #dcc8e8",
              }}
            >
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#6c3483", marginBottom: 24, textAlign: "center" }}>
                Why Choose Our NAPLAN Program?
              </h3>
              <div
                className="benefits-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 16,
                }}
              >
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "20px 18px",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(142,68,173,0.06)",
                      border: "1px solid #dcc8e8",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(142,68,173,0.12)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(142,68,173,0.06)"; }}
                  >
                    <div style={{ color: "#8e44ad", marginBottom: 10 }}>{b.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#6c3483", marginBottom: 6 }}>{b.title}</h4>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: "center", marginTop: 32 }}>
                <Link
                  href="/enroll"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#8e44ad",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(142,68,173,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#6c3483"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#8e44ad"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Enroll Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .benefits-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 500px) {
            .benefits-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
