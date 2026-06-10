"use client";
import { ArrowRight, Star } from "lucide-react";

const courses = [
  {
    image: "/image1.png",
    color: "#1a2e6e",
    bgColor: "#eef2ff",
    badge: "Most Popular",
    title: "Quran Education",
    desc: "Learn Quran recitation, Tajweed rules, Hifz, and Islamic studies with certified Hafiz teachers.",
    subjects: ["Noorani Qaida", "Tajweed", "Hifz"],
    students: "200+",
    rating: 5.0,
    subject: "quran",
    sub: "",
  },
  {
    image: "/image3.png",
    color: "#00b894",
    bgColor: "#e8fdf5",
    badge: "New",
    title: "English Language",
    desc: "Improve speaking, reading, writing, and grammar with native-level experienced English teachers.",
    subjects: ["Speaking", "Grammar", "Writing"],
    students: "150+",
    rating: 4.9,
    subject: "english",
    sub: "",
  },
  {
    image: "/image5.png",
    color: "#6c5ce7",
    bgColor: "#f0eeff",
    badge: "",
    title: "Sciences & Maths",
    desc: "Expert tutoring for Physics, Chemistry, Biology, and Mathematics for all grade levels.",
    subjects: ["Physics", "Chemistry", "Biology", "Math"],
    students: "100+",
    rating: 4.8,
    subject: "science",
    sub: "",
  },
  {
    image: "/image23.png",
    color: "#e67e22",
    bgColor: "#fff7ee",
    badge: "Exam Prep",
    title: "GCSE",
    desc: "Comprehensive GCSE exam preparation with past papers, mock tests, and expert guidance across all core subjects.",
    subjects: ["Mathematics", "English", "Biology", "Physics"],
    students: "50+",
    rating: 4.9,
    subject: "gcse",
    sub: "",
  },
  {
    image: "/image7.png",
    color: "#8e44ad",
    bgColor: "#f5eeff",
    badge: "Exam Prep",
    title: "NAPLAN",
    desc: "Targeted NAPLAN preparation covering numeracy, reading, writing, and language conventions for Years 3, 5, 7 & 9.",
    subjects: ["Numeracy", "Reading", "Writing", "Language"],
    students: "60+",
    rating: 4.8,
    subject: "naplan",
    sub: "",
  },
];

export default function HomeCourses() {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(26, 46, 110, 0.08)",
              color: "#1a2e6e",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 50,
              marginBottom: 16,
            }}
          >
            Our Courses
          </span>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 800,
              color: "#1a2e6e",
              marginBottom: 14,
            }}
          >
            Expert-Led Online Programs
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Choose from our range of live, interactive courses taught by certified teachers.
          </p>
        </div>

        {/* Course cards */}
        <div
          className="home-courses-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {courses.map((course, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(26,46,110,0.08)",
                border: "1px solid #eef2f6",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(26,46,110,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,46,110,0.08)";
              }}
            >
              {/* Top image */}
              <div
                style={{
                  height: 150,
                  background: course.bgColor,
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
                    objectPosition: "center",
                  }}
                />
                {course.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: course.color,
                      color: "white",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 20,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {course.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 8,
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: 12,
                  }}
                >
                  {course.desc}
                </p>

                {/* Subject tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {course.subjects.map((sub, j) => (
                    <span
                      key={j}
                      style={{
                        background: "#f1f5f9",
                        color: "#475569",
                        fontSize: 11,
                        fontWeight: 500,
                        padding: "3px 8px",
                        borderRadius: 16,
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Rating + Students */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "#64748b",
                    marginTop: "auto",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Star size={13} fill="#f5a623" color="#f5a623" />
                    {course.rating}
                  </span>
                  <span>{course.students} students</span>
                </div>

                {/* CTA */}
                <a
                  href={course.sub ? `/courses/${course.subject}/${course.sub}` : `/courses/${course.subject}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "10px",
                    background: course.color,
                    color: "white",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                  onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  View Course <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .home-courses-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
