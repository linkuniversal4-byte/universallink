"use client";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function PhysicsPage() {
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
          <Link href="/courses/science" style={{ color: "#64748b", textDecoration: "none" }}>Sciences &amp; Maths</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#6c5ce7", fontWeight: 600 }}>Physics</span>
        </div>

        {/* Back Link */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0" }}>
          <Link href="/courses/science" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "#64748b", fontSize: 14, fontWeight: 500,
            textDecoration: "none",
          }}>
            <ArrowLeft size={16} /> Back to Sciences &amp; Maths
          </Link>
        </div>

        {/* Hero Card with Image */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px" }}>
          <div style={{
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(108,92,231,0.25)",
            position: "relative",
          }}>
            <div style={{
              position: "relative",
              height: "clamp(300px, 40vw, 450px)",
              backgroundImage: "url('/image19.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(74,48,192,0.9) 0%, rgba(108,92,231,0.7) 50%, rgba(60,30,140,0.85) 100%)",
              }} />
              <div style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "clamp(32px, 5vw, 56px)",
              }}>
                <span style={{ fontSize: 48, marginBottom: 12 }}>⚛️</span>
                <h1 style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}>
                  Physics Online Education
                </h1>
                <p style={{
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: 700,
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  Our Physics Online Education program is designed to help students understand the fundamental laws of nature through interactive and engaging online classes. The course covers key topics such as motion, force, energy, electricity, magnetism, waves, and modern physics. Experienced teachers provide clear explanations, problem-solving techniques, and regular assessments to strengthen concepts and improve academic performance. With flexible scheduling and personalized learning support, students can build confidence and excel in physics from the comfort of their homes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <section style={{ padding: "0 24px 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              background: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
              borderRadius: 24,
              padding: "clamp(32px, 4vw, 48px)",
              border: "1px solid #ddd6fe",
            }}>
              <h2 style={{
                fontSize: "clamp(22px, 2.8vw, 30px)",
                fontWeight: 800,
                color: "#4a30c0",
                textAlign: "center",
                marginBottom: 8,
              }}>
                Course Highlights
              </h2>
              <p style={{
                fontSize: 15,
                color: "#64748b",
                textAlign: "center",
                marginBottom: 28,
                maxWidth: 500,
                margin: "0 auto 28px",
              }}>
                What makes our Physics program stand out
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
              }}>
                {[
                  { title: "Comprehensive Curriculum", desc: "Motion, force, energy, electricity, magnetism, waves, and modern physics" },
                  { title: "Expert Teachers", desc: "Clear explanations and proven problem-solving techniques" },
                  { title: "Regular Assessments", desc: "Continuous evaluation to strengthen concepts and track progress" },
                  { title: "Flexible Scheduling", desc: "Learn at your own pace with classes that fit your routine" },
                  { title: "Personalized Support", desc: "One-to-one attention tailored to each student's learning needs" },
                  { title: "Build Confidence", desc: "Develop problem-solving skills and excel in physics from home" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    background: "white",
                    borderRadius: 16,
                    padding: "18px 20px",
                    border: "1px solid #ddd6fe",
                    boxShadow: "0 4px 12px rgba(108,92,231,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(108,92,231,0.12)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(108,92,231,0.06)"; }}
                  >
                    <div style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "rgba(108,92,231,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}>
                      <CheckCircle size={16} color="#6c5ce7" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#4a30c0", marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                    </div>
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
                    background: "#6c5ce7",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(108,92,231,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#5a3fd4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#6c5ce7"; e.currentTarget.style.transform = "translateY(0)"; }}
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
