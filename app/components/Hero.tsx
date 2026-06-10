"use client";
import { useState, useEffect } from "react";

const sliderImages = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      {/* Slider images */}
      {sliderImages.map((img, i) => (
        <div
          key={img}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === activeIndex ? 1 : 0,
            transition: "opacity 1.5s ease",
            zIndex: i === activeIndex ? 1 : 0,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(/${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: i === activeIndex ? "kenBurns 5.5s ease-in-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(135deg, rgba(10,20,50,0.65) 0%, rgba(10,20,50,0.4) 100%)",
        }}
      />

      {/* Content overlay */}
      <div
        className="hero-content"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px 24px 40px",
          color: "white",
        }}
      >
        <div className="hero-text-inner" style={{ maxWidth: 800 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(245,166,35,0.2)",
              border: "1px solid rgba(245,166,35,0.4)",
              color: "#f5a623",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 50,
              marginBottom: 20,
            }}
          >
            Welcome to
          </span>

          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Universal Link <br />
            <span style={{ color: "#f5a623" }}>Education System</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto 32px",
              textShadow: "0 1px 10px rgba(0,0,0,0.2)",
            }}
          >
            Empowering students worldwide with expert-led Quran, English, Science,
            Math &amp; GCSE courses through live interactive online classes.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/enroll"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#f5a623",
                color: "#1a2e6e",
                padding: "16px 36px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(245,166,35,0.45)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(245,166,35,0.55)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,166,35,0.45)";
              }}
            >
              Enroll Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/courses"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(6px)",
                color: "white",
                padding: "16px 36px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              }}
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: 10,
        }}
      >
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? 28 : 10,
              height: 10,
              borderRadius: 5,
              border: "none",
              background: i === activeIndex ? "#f5a623" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @media (max-width: 900px) {
          .hero-content {
            padding-top: 80px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-text-inner {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
