"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";

const courses = [
  {
    title: "Noorani Qaida",
    sub: "noorani",
    emoji: "📖",
    desc: "Learn Arabic letters, pronunciation, joining letters, and reading basics.",
    color: "#1a2e6e",
    bg: "linear-gradient(135deg, #0f1d4a, #1a2e6e)",
    image: "/image1.png",
  },
  {
    title: "Tajweed",
    sub: "tajweed",
    emoji: "📚",
    desc: "Learn Quran recitation rules and proper pronunciation.",
    color: "#b8860b",
    bg: "linear-gradient(135deg, #1a2e6e, #2d4a9e)",
    image: "/image2.png",
  },
  {
    title: "Nazara",
    sub: "nazara",
    emoji: "🕌",
    desc: "Read the Quran fluently with correct pronunciation and confidence.",
    color: "#c9a84c",
    bg: "linear-gradient(135deg, #0a1628, #1a2e6e)",
    image: "/image3.png",
  },
  {
    title: "Tafseer",
    sub: "tafseer",
    emoji: "✨",
    desc: "Understand the meanings and explanations of Quranic verses.",
    color: "#f5a623",
    bg: "linear-gradient(135deg, #1a2e6e, #3a5a9e)",
    image: "/image4.png",
  },
  {
    title: "Quran Memorization (Hifz-ul-Quran)",
    sub: "hifz",
    emoji: "🌟",
    desc: "Memorize the Quran under expert Hafiz teachers.",
    color: "#d4a843",
    bg: "linear-gradient(135deg, #0f1d4a, #2d4a9e)",
    image: "/hafz.png",
  },
];

export default function QuranPage() {
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
          <span style={{ color: "#1a2e6e", fontWeight: 600 }}>Quran Education</span>
        </div>

        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #0a1628 0%, #1a2e6e 50%, #2d4a9e 100%)",
            padding: "clamp(40px, 5vw, 64px) 24px",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "url('/image1.png') center/cover no-repeat", opacity: 0.08 }} />
          <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(245,166,35,0.06)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 8 }}>📖</span>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, marginBottom: 10, lineHeight: 1.15 }}>
              Quran Education
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>
              Learn Quran with certified teachers
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Recitation, Tajweed, Hifz &amp; Tafseer — live online classes for all ages and levels.
            </p>
          </div>
        </section>

        {/* Slider Section */}
        <section
          style={{
            padding: "60px 24px 80px",
            background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ display: "inline-block", background: "rgba(26,46,110,0.08)", color: "#1a2e6e", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 50, marginBottom: 12 }}>
                Select Your Course
              </span>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "#1a2e6e", lineHeight: 1.2 }}>
                Choose Your Quran Learning Path
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", maxWidth: 500, margin: "10px auto 0", lineHeight: 1.7 }}>
                Swipe or use the arrows to browse our Quran course modules
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
                style={{
                  position: "relative",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(26,46,110,0.25), 0 10px 30px rgba(26,46,110,0.1)",
                  transition: "box-shadow 0.5s ease",
                  aspectRatio: "16 / 10",
                  minHeight: 400,
                }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 40px 100px rgba(26,46,110,0.35), 0 15px 40px rgba(26,46,110,0.15)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "0 30px 80px rgba(26,46,110,0.25), 0 10px 30px rgba(26,46,110,0.1)"; }}
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
                    background: `linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(26,46,110,0.65) 50%, rgba(10,22,40,0.85) 100%)`,
                  }}
                />

                {/* Gold accent glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background: `radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%)`,
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
                          background: i === current ? "#f5a623" : "rgba(255,255,255,0.3)",
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
                      href={`/courses/quran/${course.sub}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "linear-gradient(135deg, #f5a623, #d4941e)",
                        color: "#1a2e6e",
                        padding: "14px 32px",
                        borderRadius: 12,
                        fontSize: 15,
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "0 8px 28px rgba(245,166,35,0.4)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 36px rgba(245,166,35,0.55)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,166,35,0.4)";
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
                  boxShadow: "0 8px 24px rgba(26,46,110,0.2)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "all 0.3s ease",
                  color: "#1a2e6e",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#f5a623"; e.currentTarget.style.color = "#1a2e6e"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#1a2e6e"; e.currentTarget.style.transform = "translateY(-50%)"; }}
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={next}
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
                  boxShadow: "0 8px 24px rgba(26,46,110,0.2)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  transition: "all 0.3s ease",
                  color: "#1a2e6e",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#f5a623"; e.currentTarget.style.color = "#1a2e6e"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#1a2e6e"; e.currentTarget.style.transform = "translateY(-50%)"; }}
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Thumbnail dots below */}
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28 }}>
              {courses.map((c, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 80 : 50,
                    height: 40,
                    borderRadius: 10,
                    border: i === current ? "2px solid #f5a623" : "2px solid transparent",
                    cursor: "pointer",
                    overflow: "hidden",
                    padding: 0,
                    opacity: i === current ? 1 : 0.5,
                    transition: "all 0.4s ease",
                    boxShadow: i === current ? "0 4px 16px rgba(245,166,35,0.3)" : "none",
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

        {/* Course Details Preview (below slider) */}
        <section style={{ padding: "0 24px 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #f8faff, #eef2ff)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#1a2e6e", marginBottom: 20, textAlign: "center" }}>
                Why Learn Quran With Us?
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
                  { icon: "👨‍🏫", title: "Certified Hafiz Teachers", desc: "Learn from qualified Huffaz with Ijazah" },
                  { icon: "🕋", title: "Tajweed Focused", desc: "Correct pronunciation and recitation rules" },
                  { icon: "⏰", title: "Flexible Timings", desc: "Schedule classes at your convenience" },
                  { icon: "🌍", title: "Learn Anywhere", desc: "One-to-one live sessions from home" },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 16,
                      padding: "20px 18px",
                      textAlign: "center",
                      boxShadow: "0 4px 12px rgba(26,46,110,0.06)",
                      border: "1px solid #e2e8f0",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(26,46,110,0.12)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,46,110,0.06)"; }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{benefit.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1a2e6e", marginBottom: 6 }}>{benefit.title}</h4>
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
                    background: "#1a2e6e",
                    color: "white",
                    padding: "16px 40px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(26,46,110,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#2a3f8f"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#1a2e6e"; e.currentTarget.style.transform = "translateY(0)"; }}
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
