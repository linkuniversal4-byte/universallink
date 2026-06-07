"use client";
import { Clock, Users, Star, ArrowRight, CheckCircle, BookOpen, Video, BarChart3 } from "lucide-react";

const courses = [
  {
    emoji: "📖",
    color: "#1a2e6e",
    bgColor: "#eef2ff",
    badge: "Most Popular",
    title: "Quran Education",
    desc: "Learn Quran recitation, Tajweed rules, Hifz, and Islamic studies with certified Hafiz teachers.",
    subjects: ["Nazra Quran", "Tajweed", "Hifz", "Islamic Studies"],
    outcomes: ["Correct pronunciation", "Tajweed confidence", "Regular revision plan"],
    levels: "Beginner to advanced",
    duration: "Flexible",
    students: "200+",
    rating: 5.0,
  },
  {
    emoji: "🗣️",
    color: "#00b894",
    bgColor: "#e8fdf5",
    badge: "New",
    title: "English Language",
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
    color: "#6c5ce7",
    bgColor: "#f0eeff",
    badge: "",
    title: "Sciences & Maths",
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
    color: "#e67e22",
    bgColor: "#fff7ee",
    badge: "Exam Prep",
    title: "GCSE & NAPLAN",
    desc: "Comprehensive GCSE and NAPLAN exam preparation with past papers, mock tests, and expert guidance.",
    subjects: ["Exam Strategies", "Past Papers", "Mock Tests", "All Subjects"],
    outcomes: ["Past paper practice", "Mock test review", "Score improvement plan"],
    levels: "GCSE and NAPLAN",
    duration: "90 min/class",
    students: "80+",
    rating: 4.9,
  },
];

export default function Courses() {
  return (
    <section id="courses" style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Our Courses</span>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#1a2e6e",
            marginBottom: 16,
          }}>
            Expert-Led Online Courses
          </h2>
          <p style={{ fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            From Quran education to GCSE prep, our certified teachers deliver live, interactive classes tailored to every student.
          </p>
        </div>

        {/* Course Cards */}
        <div className="courses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 28 }}>
          {courses.map((course, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(26,46,110,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card top */}
              <div style={{
                background: course.bgColor,
                padding: "28px 24px 20px",
                position: "relative",
              }}>
                {course.badge && (
                  <span style={{
                    position: "absolute", top: 16, right: 16,
                    background: course.color,
                    color: "white",
                    fontSize: 11, fontWeight: 700,
                    padding: "4px 10px", borderRadius: 20,
                    letterSpacing: "0.05em",
                  }}>{course.badge}</span>
                )}
                <div style={{ fontSize: 48, marginBottom: 16 }}>{course.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{course.desc}</p>
              </div>

              {/* Subjects */}
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {course.subjects.map((sub, j) => (
                    <span key={j} style={{
                      background: "#f1f5f9",
                      color: "#475569",
                      fontSize: 12, fontWeight: 500,
                      padding: "4px 10px", borderRadius: 20,
                    }}>{sub}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: "18px 24px", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: course.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  What students gain
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {course.outcomes.map((item, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#475569", lineHeight: 1.5 }}>
                      <CheckCircle size={14} color={course.color} style={{ flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 14, fontSize: 13, color: "#64748b", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={13} /> {course.duration}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <BookOpen size={13} /> {course.levels}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Users size={13} /> {course.students}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#f5a623" }}>
                    <Star size={13} fill="#f5a623" /> {course.rating}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: "0 24px 24px", marginTop: "auto" }}>
                <a
                  href="/#contact"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", padding: "12px",
                    background: course.color,
                    color: "white", borderRadius: 10,
                    fontSize: 14, fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxSizing: "border-box",
                  }}
                >
                  Enroll Now <ArrowRight size={15} />
                </a>
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
        @media (max-width: 900px) {
          .course-detail-grid {
            grid-template-columns: 1fr !important;
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
