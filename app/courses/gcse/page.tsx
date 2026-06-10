"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";
import { CheckCircle, Clock, Award, UserCheck } from "lucide-react";

const benefits = [
  { icon: <UserCheck size={24} />, title: "Expert Teachers", desc: "Qualified subject specialists with years of GCSE experience" },
  { icon: <Clock size={24} />, title: "Flexible Scheduling", desc: "Book classes around your availability" },
  { icon: <Award size={24} />, title: "Exam Focused", desc: "Past papers, mock tests & exam strategies included" },
  { icon: <CheckCircle size={24} />, title: "Personalized Support", desc: "One-to-one attention tailored to your level" },
];

const subjects = [
  { name: "Mathematics", icon: "📐", desc: "Algebra, geometry, trigonometry & calculus" },
  { name: "English", icon: "📖", desc: "Language, literature, writing & analysis" },
  { name: "Biology", icon: "🧬", desc: "Cells, genetics, human physiology & ecosystems" },
  { name: "Chemistry", icon: "🧪", desc: "Atomic structure, bonding, reactions & organic" },
  { name: "Physics", icon: "⚛️", desc: "Motion, energy, waves & modern physics" },
];

export default function GCSEPage() {
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
          <span style={{ color: "#e67e22", fontWeight: 600 }}>GCSE</span>
        </div>

        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #d35400 0%, #e67e22 50%, #f39c12 100%)",
            padding: "clamp(48px, 6vw, 80px) 24px",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "url('/image23.png') center/cover no-repeat", opacity: 0.08 }} />
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(0,0,0,0.04)" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.15 }}>
              GCSE Online Education
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.9)", maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>
              Our GCSE Online Education program is designed to help students achieve academic success through high-quality online learning and expert guidance. The course covers core subjects including Mathematics, English, Biology, Chemistry, Physics, and other GCSE-related subjects. Experienced teachers provide personalized instruction, exam preparation, practice tests, and regular assessments to strengthen understanding and improve grades. With flexible scheduling, interactive lessons, and one-to-one support, students can confidently prepare for their GCSE examinations from anywhere in the world.
            </p>
          </div>
        </section>

        {/* Subjects */}
        <section style={{ padding: "clamp(40px, 5vw, 64px) 24px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#d35400", marginBottom: 10 }}>
                Subjects We Cover
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
                Comprehensive coverage of all core GCSE subjects
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {subjects.map((sub, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px 22px",
                    border: "1px solid #f1f5f9",
                    boxShadow: "0 4px 16px rgba(230,126,34,0.06)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(230,126,34,0.15)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(230,126,34,0.06)"; }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{sub.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#d35400", marginBottom: 6 }}>{sub.name}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: "0 24px 80px", background: "#fef9f4" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #fff7ee, #feefdf)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                border: "1px solid #fde4c8",
              }}
            >
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#d35400", marginBottom: 24, textAlign: "center" }}>
                Why Choose Our GCSE Program?
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
                      boxShadow: "0 4px 12px rgba(230,126,34,0.06)",
                      border: "1px solid #fde4c8",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(230,126,34,0.12)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(230,126,34,0.06)"; }}
                  >
                    <div style={{ color: "#e67e22", marginBottom: 10 }}>{b.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#d35400", marginBottom: 6 }}>{b.title}</h4>
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
                    background: "#e67e22",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(230,126,34,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#d35400"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#e67e22"; e.currentTarget.style.transform = "translateY(0)"; }}
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
