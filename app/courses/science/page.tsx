"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";

const courses = [
  {
    title: "Physics",
    sub: "physics",
    emoji: "⚛️",
    desc: "Understand the laws of motion, energy, waves, and modern physics.",
    color: "#6c5ce7",
    bg: "linear-gradient(135deg, #4a30c0, #6c5ce7)",
    image: "/image19.png",
  },
  {
    title: "Chemistry",
    sub: "chemistry",
    emoji: "🧪",
    desc: "Master atomic structure, bonding, reactions, and organic chemistry.",
    color: "#6c5ce7",
    bg: "linear-gradient(135deg, #5a3fd4, #a29bfe)",
    image: "/image20.png",
  },
  {
    title: "Biology",
    sub: "biology",
    emoji: "🧬",
    desc: "Explore cells, genetics, human physiology, and ecosystems.",
    color: "#6c5ce7",
    bg: "linear-gradient(135deg, #4a30c0, #6c5ce7)",
    image: "/image21.png",
  },
  {
    title: "Mathematics",
    sub: "mathematics",
    emoji: "📐",
    desc: "Build skills in algebra, geometry, calculus, and problem solving.",
    color: "#6c5ce7",
    bg: "linear-gradient(135deg, #5a3fd4, #a29bfe)",
    image: "/image22.png",
  },
];

export default function SciencePage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setDirection(index > current ? 1 : -1);
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    const nextIndex = (current + 1) % courses.length;
    setDirection(1);
    setIsTransitioning(true);
    setCurrent(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    const prevIndex = (current - 1 + courses.length) % courses.length;
    setDirection(-1);
    setIsTransitioning(true);
    setCurrent(prevIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const course = courses[current];

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
          <span style={{ color: "#6c5ce7", fontWeight: 600 }}>Sciences &amp; Maths</span>
        </div>

        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #4a30c0 0%, #6c5ce7 50%, #a29bfe 100%)",
            padding: "clamp(40px, 5vw, 64px) 24px",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "url('/image5.png') center/cover no-repeat", opacity: 0.06 }} />
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(0,0,0,0.04)" }} />
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 8 }}>🔬</span>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, marginBottom: 10, lineHeight: 1.15 }}>
              Sciences &amp; Maths
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>
              Expert tutoring in Physics, Chemistry, Biology &amp; Mathematics
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Live online classes for all grade levels — from primary to GCSE, IGCSE &amp; A Levels.
            </p>
          </div>
        </section>

        {/* Slider Section */}
        <section
          style={{
            padding: "60px 24px 80px",
            background: "linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ display: "inline-block", background: "rgba(108,92,231,0.1)", color: "#6c5ce7", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 50, marginBottom: 12 }}>
                Select Your Course
              </span>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#4a30c0", lineHeight: 1.2 }}>
                Choose Your Science &amp; Maths Path
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "10px auto 0", lineHeight: 1.7 }}>
                Swipe or use the arrows to browse our subject modules
              </p>
            </div>

            {/* Carousel Container */}
            <div
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}
            >
              {/* Card */}
              <div
                className="carousel-card"
                style={{
                  position: "relative",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(108,92,231,0.25), 0 10px 30px rgba(108,92,231,0.1)",
                  transition: "box-shadow 0.5s ease",
                  aspectRatio: "16 / 10",
                  minHeight: 400,
                }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 40px 100px rgba(108,92,231,0.35), 0 15px 40px rgba(108,92,231,0.15)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "0 30px 80px rgba(108,92,231,0.25), 0 10px 30px rgba(108,92,231,0.1)"; }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 8s ease",
                    transform: "scale(1)",
                  }}
                  className="slide-bg"
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, rgba(60,30,140,0.85) 0%, rgba(108,92,231,0.65) 50%, rgba(60,30,140,0.85) 100%)`,
                  }}
                />

                {/* Accent glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background: `radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Card Content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "clamp(24px, 4vw, 48px)",
                  }}
                >
                  {/* Emoji Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "clamp(20px, 3vw, 36px)",
                      right: "clamp(20px, 3vw, 36px)",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {course.emoji}
                  </div>

                  {/* Index indicator */}
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {courses.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{
                          width: i === current ? 32 : 8,
                          height: 8,
                          borderRadius: 4,
                          border: "none",
                          background: i === current ? "#a29bfe" : "rgba(255,255,255,0.3)",
                          cursor: "pointer",
                          transition: "all 0.4s ease",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>

                  {/* Glassmorphism content box */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 20,
                      padding: "clamp(16px, 2.5vw, 28px) clamp(20px, 3vw, 32px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(20px, 2.8vw, 32px)",
                        fontWeight: 800,
                        color: "white",
                        marginBottom: 8,
                        lineHeight: 1.2,
                        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      }}
                    >
                      {course.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "clamp(14px, 1.5vw, 17px)",
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.7,
                        marginBottom: 20,
                        maxWidth: 600,
                      }}
                    >
                      {course.desc}
                    </p>
                    <Link
                      href={`/courses/science/${course.sub}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
                        color: "white",
                        padding: "14px 32px",
                        borderRadius: 12,
                        fontSize: 15,
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "0 8px 28px rgba(108,92,231,0.4)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 36px rgba(108,92,231,0.55)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(108,92,231,0.4)";
                      }}
                    >
                      Read More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Left Arrow */}
              <button
                onClick={prev}
                className="carousel-arrow carousel-arrow-left"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: -20,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "none",
                  background: "white",
                  boxShadow: "0 8px 24px rgba(108,92,231,0.2)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "all 0.3s ease",
                  color: "#6c5ce7",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#6c5ce7"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#6c5ce7"; e.currentTarget.style.transform = "translateY(-50%)"; }}
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={next}
                className="carousel-arrow carousel-arrow-right"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: -20,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "none",
                  background: "white",
                  boxShadow: "0 8px 24px rgba(108,92,231,0.2)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "all 0.3s ease",
                  color: "#6c5ce7",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#6c5ce7"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#6c5ce7"; e.currentTarget.style.transform = "translateY(-50%)"; }}
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Thumbnail dots below */}
            <div className="thumbnail-strip" style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28 }}>
              {courses.map((c, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 80 : 50,
                    height: 40,
                    borderRadius: 10,
                    border: i === current ? "2px solid #a29bfe" : "2px solid transparent",
                    cursor: "pointer",
                    overflow: "hidden",
                    padding: 0,
                    opacity: i === current ? 1 : 0.5,
                    transition: "all 0.4s ease",
                    boxShadow: i === current ? "0 4px 16px rgba(108,92,231,0.3)" : "none",
                  }}
                >
                  <img
                    src={c.image}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{ padding: "0 24px 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                border: "1px solid #ddd6fe",
              }}
            >
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#4a30c0", marginBottom: 20, textAlign: "center" }}>
                Why Learn Sciences &amp; Maths With Us?
              </h3>
              <div
                className="benefits-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 16,
                }}
              >
                {[
                  { icon: "👨‍🔬", title: "Expert Tutors", desc: "Qualified subject specialists with years of experience" },
                  { icon: "📊", title: "Exam Focused", desc: "Past papers, mock tests & exam strategies included" },
                  { icon: "⏰", title: "Flexible Learning", desc: "Schedule classes around your availability" },
                  { icon: "🎯", title: "Personalized Support", desc: "One-to-one attention tailored to your level" },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "20px 18px",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(108,92,231,0.06)",
                      border: "1px solid #ddd6fe",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(108,92,231,0.12)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(108,92,231,0.06)"; }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{benefit.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#4a30c0", marginBottom: 6 }}>{benefit.title}</h4>
                    <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: 0 }}>{benefit.desc}</p>
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

        <style>{`
          .slide-bg:hover {
            transform: scale(1.05) !important;
          }
          @media (max-width: 900px) {
            .carousel-card {
              border-radius: 20px !important;
              min-height: 350px !important;
            }
            .carousel-arrow {
              width: 40px !important;
              height: 40px !important;
            }
            .carousel-arrow-left {
              left: 8px !important;
            }
            .carousel-arrow-right {
              right: 8px !important;
            }
          }
          @media (max-width: 600px) {
            .carousel-card {
              border-radius: 16px !important;
              min-height: 320px !important;
              aspect-ratio: auto !important;
            }
            .carousel-arrow {
              width: 36px !important;
              height: 36px !important;
            }
            .carousel-arrow-left {
              left: 4px !important;
            }
            .carousel-arrow-right {
              right: 4px !important;
            }
          }
          @media (max-width: 480px) {
            .carousel-card {
              min-height: 300px !important;
              border-radius: 14px !important;
            }
            .carousel-card h3 {
              font-size: clamp(18px, 5vw, 22px) !important;
            }
            .carousel-card p {
              font-size: 13px !important;
              margin-bottom: 14px !important;
            }
            .carousel-card a {
              width: 100% !important;
              justify-content: center !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
            }
          }
          @media (max-width: 768px) {
            .benefits-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 500px) {
            .benefits-grid {
              grid-template-columns: 1fr !important;
            }
            .thumbnail-strip {
              gap: 8px !important;
              overflow-x: auto !important;
              justify-content: flex-start !important;
              padding: 0 8px !important;
              -webkit-overflow-scrolling: touch !important;
            }
            .thumbnail-strip button {
              flex-shrink: 0 !important;
              min-width: 50px !important;
              height: 36px !important;
            }
          }
        `}</style>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
