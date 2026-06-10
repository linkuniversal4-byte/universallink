import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";

const courses = [
  {
    title: "Physics",
    sub: "physics",
    emoji: "⚛️",
    desc: "Understand the laws of motion, energy, waves, and modern physics.",
    color: "#6c5ce7",
    image: "/image5.png",
  },
  {
    title: "Chemistry",
    sub: "chemistry",
    emoji: "🧪",
    desc: "Master atomic structure, bonding, reactions, and organic chemistry.",
    color: "#6c5ce7",
    image: "/image5.png",
  },
  {
    title: "Biology",
    sub: "biology",
    emoji: "🧬",
    desc: "Explore cells, genetics, human physiology, and ecosystems.",
    color: "#6c5ce7",
    image: "/image5.png",
  },
  {
    title: "Mathematics",
    sub: "mathematics",
    emoji: "📐",
    desc: "Build skills in algebra, geometry, calculus, and problem solving.",
    color: "#6c5ce7",
    image: "/image5.png",
  },
];

export default function SciencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #5a3fd4 0%, #6c5ce7 50%, #a29bfe 100%)",
            padding: "clamp(48px, 6vw, 80px) 24px",
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(0,0,0,0.05)" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 64, display: "block", marginBottom: 12 }}>🔬</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
              Sciences &amp; Maths
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 8, lineHeight: 1.6 }}>
              Expert tutoring in Physics, Chemistry, Biology &amp; Mathematics
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Live online classes for all grade levels — from primary to GCSE, IGCSE &amp; A Levels.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0", fontSize: 13, color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/courses" style={{ color: "#64748b", textDecoration: "none" }}>Courses</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#6c5ce7", fontWeight: 600 }}>Sciences &amp; Maths</span>
        </div>

        {/* Course Cards Grid */}
        <section style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className="science-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                gap: 28,
              }}
            >
              {courses.map((course, i) => (
                <Link
                  key={i}
                  href={`/courses/science/${course.sub}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="science-card"
                    style={{
                      background: "white",
                      borderRadius: 20,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(108,92,231,0.08)",
                      border: "1px solid #ede9fe",
                      transition: "transform 0.35s ease, box-shadow 0.35s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        height: 160,
                        background: "linear-gradient(135deg, #f0eeff, #e0d8ff)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: 0.25,
                        }}
                      />
                      <span style={{ position: "absolute", fontSize: 52 }}>{course.emoji}</span>
                    </div>
                    <div style={{ padding: "20px 22px 22px" }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#4a30c0", marginBottom: 10 }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>
                        {course.desc}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: course.color,
                          color: "white",
                          padding: "10px 24px",
                          borderRadius: 10,
                          fontSize: 13,
                          fontWeight: 600,
                          transition: "opacity 0.2s ease",
                        }}
                      >
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .science-card:hover {
            transform: translateY(-6px) !important;
            box-shadow: 0 20px 40px rgba(108,92,231,0.15) !important;
          }
          @media (max-width: 700px) {
            .science-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
