"use client";
import { Clock, Users, Star, ArrowRight, CheckCircle, BookOpen, Video, BarChart3, ChevronDown } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    emoji: "📖",
    image: "/nazara.png",
    color: "#1a2e6e",
    bgColor: "#eef2ff",
    badge: "Most Popular",
    title: "Quran Education",
    category: "Islamic Studies",
    desc: "Learn Quran recitation, Tajweed rules, Hifz, and Islamic studies with certified Hafiz teachers.",
    subjects: ["Quran Nazara Course", "Quran Tajweed Course", "Quran Memorization (Hifz-ul-Quran)", "Islamic Studies"],
    outcomes: ["Correct pronunciation", "Tajweed confidence", "Regular revision plan"],
    levels: "Beginner to advanced",
    duration: "Flexible",
    students: "200+",
    rating: 5.0,
  },
  {
    emoji: "🗣️",
    image: "",
    color: "#00b894",
    bgColor: "#e8fdf5",
    badge: "New",
    title: "English Language",
    category: "Languages",
    desc: "Improve speaking, reading, writing, and grammar with native-level experienced English teachers.",
    subjects: ["Speaking", "Grammar", "Writing", "Reading"],
    outcomes: ["Fluent conversation", "Grammar accuracy", "Confident writing"],
    levels: "Kids, teens, adults",
    duration: "60 min/class",
    students: "150+",
    rating: 4.9,
  },
  {
    emoji: "🔬",
    image: "",
    color: "#6c5ce7",
    bgColor: "#f0eeff",
    badge: "",
    title: "Sciences & Maths",
    category: "Academic",
    desc: "Expert tutoring for Physics, Chemistry, Biology, and Mathematics for all grade levels.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    outcomes: ["Concept clarity", "Homework support", "Exam-focused practice"],
    levels: "Primary to high school",
    duration: "60 min/class",
    students: "100+",
    rating: 4.8,
  },
  {
    emoji: "🎓",
    image: "",
    color: "#e67e22",
    bgColor: "#fff7ee",
    badge: "Exam Prep",
    title: "GCSE & NAPLAN",
    category: "Exam Prep",
    desc: "Comprehensive GCSE and NAPLAN exam preparation with past papers, mock tests, and expert guidance.",
    subjects: ["Exam Strategies", "Past Papers", "Mock Tests", "All Subjects"],
    outcomes: ["Past paper practice", "Mock test review", "Score improvement plan"],
    levels: "GCSE and NAPLAN",
    duration: "90 min/class",
    students: "80+",
    rating: 4.9,
  },
];

const categories = ["All", ...new Set(courses.map(c => c.category))];

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const filteredCourses = filter === "All" ? courses : courses.filter(c => c.category === filter);

  return (
    <section id="courses" style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-badge">Our Courses</span>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#1a2e6e",
            marginBottom: 16,
          }}>
            Expert-Led Quran & Academic Courses
          </h2>
          <p style={{ fontSize: 17, color: "#64748b", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            From Quran education to GCSE prep, our certified teachers deliver live, interactive classes tailored to every student.
          </p>
        </div>

        {/* Featured Quran Hero Card */}
        <div style={{
          background: "linear-gradient(135deg, #1a2e6e 0%, #2d4a9e 50%, #1a2e6e 100%)",
          borderRadius: 24,
          padding: "clamp(28px, 3vw, 48px)",
          marginBottom: 48,
          position: "relative",
          overflow: "hidden",
          color: "white",
        }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ position: "absolute", bottom: -50, left: -50, width: 250, height: 250, borderRadius: "50%", background: "rgba(245,166,35,0.07)" }} />

          <div className="featured-quran-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center", position: "relative", zIndex: 1 }}>
            <div>
              <span style={{ background: "#f5a623", color: "#1a2e6e", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.05em", display: "inline-block", marginBottom: 14 }}>
                ✦ MOST POPULAR
              </span>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
                Learn Quran Online
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 24 }}>
                Join our live online Quran classes with qualified teachers. Learn recitation, Tajweed, and Hifz from the comfort of your home.
              </p>
              <a href="/#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#f5a623", color: "#1a2e6e",
                padding: "14px 32px 14px 20px", borderRadius: 12,
                fontSize: 16, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
                transition: "all 0.3s ease",
              }}>
                <img src="/child.png" alt="" style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }} />
                Start Learning Quran
              </a>
            </div>
            <div style={{
              width: 140, height: 140, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)",
            }}>
              <img src="/child.png" alt="" style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(255,255,255,0.3)" }} />
            </div>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ position: "relative" }}>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{
                appearance: "none",
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                padding: "10px 40px 10px 18px",
                fontSize: 14,
                fontWeight: 600,
                color: "#1a2e6e",
                cursor: "pointer",
                outline: "none",
                minWidth: 180,
                fontFamily: "inherit",
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown size={16} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#1a2e6e", pointerEvents: "none" }} />
          </div>
        </div>

        {/* Course Cards */}
        <div className="courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 28 }}>
          {filteredCourses.map((course, i) => (
            <div
              key={i}
              className={`card-hover${course.title === "Quran Education" ? " card-quran-highlight" : ""}`}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: course.title === "Quran Education" ? "0 4px 24px rgba(245,166,35,0.2)" : "0 4px 20px rgba(26,46,110,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div style={{
                height: 180,
                background: course.bgColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                {course.badge && (
                  <span style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    background: course.color,
                    color: "white",
                    fontSize: 11, fontWeight: 700,
                    padding: "4px 10px", borderRadius: 20,
                    letterSpacing: "0.05em",
                  }}>{course.badge}</span>
                )}
                <div style={{
                  width: 96, height: 96, borderRadius: "50%",
                  background: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}>
                  {course.image ? (
                    <img src={course.image} alt={course.title} style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: 40 }}>{course.emoji}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 14 }}>{course.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {course.subjects.map((sub, j) => (
                    <span key={j} style={{
                      background: "#f1f5f9",
                      color: "#475569",
                      fontSize: 11, fontWeight: 500,
                      padding: "3px 8px", borderRadius: 16,
                    }}>{sub}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 14, fontSize: 12, color: "#64748b", flexWrap: "wrap", marginBottom: 16 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <BookOpen size={12} /> {course.levels}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Users size={12} /> {course.students}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#f5a623" }}>
                    <Star size={12} fill="#f5a623" /> {course.rating}
                  </span>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                  <a href="/enroll" style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    padding: "10px", background: course.color, color: "white",
                    borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
                  }}>
                    Enroll Now <ArrowRight size={14} />
                  </a>
                  <a href="/#contact" style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "10px", background: "transparent", color: course.color,
                    borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none",
                    border: `2px solid ${course.color}`,
                  }}>
                    Free Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ color: "#64748b", fontSize: 15, marginBottom: 20 }}>
            Not sure which course is right for you?
          </p>
          <a href="/#contact" className="btn-primary">
            Book a Free Consultation
          </a>
        </div>

        <div className="course-detail-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 64 }}>
          {[
            {
              icon: <Video size={22} />,
              title: "Live Online Classes",
              desc: "Every class is interactive with direct teacher attention, question time, and revision support.",
              color: "#1a2e6e",
            },
            {
              icon: <BarChart3 size={22} />,
              title: "Progress Tracking",
              desc: "Parents receive clear updates so they know what was covered and where the student is improving.",
              color: "#00b894",
            },
            {
              icon: <Clock size={22} />,
              title: "Flexible Timings",
              desc: "Classes can be arranged for students in Pakistan, UK, USA, Australia, Middle East, and beyond.",
              color: "#e67e22",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: `${item.color}14`, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                {item.icon}
              </div>
              <h3 style={{ color: "#1a2e6e", fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

        <style>{`
        .card-quran-highlight {
          border: 2px solid #f5a623 !important;
          box-shadow: 0 4px 24px rgba(245,166,35,0.2) !important;
          position: relative;
        }
        .card-quran-highlight::before {
          content: "★ Featured";
          position: absolute;
          top: -1px;
          left: 24px;
          background: #f5a623;
          color: #1a2e6e;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 0 0 8px 8px;
          z-index: 5;
          letter-spacing: 0.05em;
        }
        @media (max-width: 900px) {
          .course-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .featured-quran-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .featured-quran-grid > div:last-child {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .courses-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #courses {
            padding: 64px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
