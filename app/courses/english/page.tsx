import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";

const courses = [
  {
    title: "Speaking",
    sub: "speaking",
    emoji: "🗣️",
    desc: "Improve communication and fluency.",
    color: "#00b894",
    image: "/image3.png",
  },
  {
    title: "Grammar",
    sub: "grammar",
    emoji: "📝",
    desc: "Learn English grammar from basic to advanced.",
    color: "#00b894",
    image: "/image3.png",
  },
  {
    title: "Writing",
    sub: "writing",
    emoji: "✍️",
    desc: "Improve essay, email, and academic writing.",
    color: "#00b894",
    image: "/image3.png",
  },
  {
    title: "Reading",
    sub: "reading",
    emoji: "📖",
    desc: "Develop reading comprehension skills.",
    color: "#00b894",
    image: "/image3.png",
  },
  {
    title: "Vocabulary",
    sub: "",
    emoji: "📚",
    desc: "Expand vocabulary and daily usage.",
    color: "#00b894",
    image: "/image3.png",
  },
];

export default function EnglishPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(135deg, #00897b 0%, #00b894 50%, #00cec9 100%)",
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
            <span style={{ fontSize: 64, display: "block", marginBottom: 12 }}>🗣️</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
              English Language
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 8, lineHeight: 1.6 }}>
              Master English with expert teachers
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Speaking, Grammar, Writing, Reading &amp; Vocabulary — live online classes for all levels.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0", fontSize: 13, color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Link href="/courses" style={{ color: "#64748b", textDecoration: "none" }}>Courses</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#00b894", fontWeight: 600 }}>English Language</span>
        </div>

        {/* Course Cards Grid */}
        <section style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className="english-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 28,
              }}
            >
              {courses.map((course, i) => (
                <div key={i} style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    className="english-card"
                    style={{
                      background: "white",
                      borderRadius: 20,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,184,148,0.08)",
                      border: "1px solid #e0f5ef",
                      transition: "transform 0.35s ease, box-shadow 0.35s ease",
                      cursor: course.sub ? "pointer" : "default",
                    }}
                  >
                    <div
                      style={{
                        height: 160,
                        background: "linear-gradient(135deg, #e8fdf5, #c8f7e8)",
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
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#006d5b", marginBottom: 10 }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>
                        {course.desc}
                      </p>
                      {course.sub ? (
                        <Link
                          href={`/courses/english/${course.sub}`}
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
                            textDecoration: "none",
                            transition: "opacity 0.2s ease",
                          }}
                        >
                          Read More →
                        </Link>
                      ) : (
                        <Link
                          href="/#contact"
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
                            textDecoration: "none",
                            opacity: 0.7,
                          }}
                        >
                          Coming Soon
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .english-card:hover {
            transform: translateY(-6px) !important;
            box-shadow: 0 20px 40px rgba(0,184,148,0.15) !important;
          }
          @media (max-width: 700px) {
            .english-grid {
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
