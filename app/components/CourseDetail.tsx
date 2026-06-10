"use client";
import { useState } from "react";
import { ArrowLeft, Clock, Calendar, BookOpen, Users, ChevronDown, Star, ChevronRight } from "lucide-react";
import { courseData, type SubCourse } from "./courseData";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: "clamp(22px, 2.5vw, 32px)",
      fontWeight: 800,
      color: "#1a2e6e",
      marginBottom: 28,
      textAlign: "center",
    }}>
      {children}
    </h2>
  );
}

export default function CourseDetail({ subject, sub }: { subject: string; sub: string }) {
  const data = courseData[subject]?.[sub];
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ color: "#1a2e6e", marginBottom: 12 }}>Course not found</h2>
        <p style={{ color: "#64748b", marginBottom: 24 }}>The course you are looking for does not exist.</p>
        <a href="/courses" style={{ color: "#f5a623", fontWeight: 600, textDecoration: "none" }}>← Back to Courses</a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
      {/* Back Link */}
      <a href="/courses" style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        color: "#64748b", fontSize: 14, fontWeight: 500,
        textDecoration: "none", marginBottom: 24, marginTop: 24,
      }}>
        <ArrowLeft size={16} /> Back to Courses
      </a>

      {/* 1. Hero Banner */}
      <HeroBanner data={data} />

      {/* 2. Overview Cards */}
      <OverviewCards data={data} />

      {/* 3. Teacher */}
      <TeacherSection data={data} />

      {/* 4. Syllabus */}
      <SyllabusSection data={data} openModule={openModule} setOpenModule={setOpenModule} />

      {/* 5. Reviews */}
      <ReviewsSection data={data} />

      {/* 6. FAQ */}
      <FaqSection data={data} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <style>{`
        @media (max-width: 768px) {
          .overview-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- 1. Hero Banner ---------- */
function HeroBanner({ data }: { data: SubCourse }) {
  const isHifz = data.title === "Quran Memorization (Hifz-ul-Quran)";
  const isNazara = data.title === "Quran Nazara Course";
  const bgImage = isHifz ? "/hafz.png" : isNazara ? "/nazara.png" : null;
  return (
    <div style={{
      background: bgImage
        ? `linear-gradient(rgba(26,46,110,0.85), rgba(45,74,158,0.85)), url('${bgImage}') center/cover no-repeat`
        : `linear-gradient(135deg, ${data.color} 0%, #2d4a9e 50%, ${data.color} 100%)`,
      borderRadius: 24,
      padding: "clamp(32px, 4vw, 56px)",
      color: "white",
      position: "relative",
      overflow: "hidden",
      marginBottom: 40,
    }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      <div style={{ position: "absolute", bottom: -50, left: -50, width: 250, height: 250, borderRadius: "50%", background: "rgba(245,166,35,0.07)" }} />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <span style={{ fontSize: 48, display: "block", marginBottom: 12 }}>{data.emoji}</span>
        <h1 style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          marginBottom: 8,
          lineHeight: 1.2,
        }}>
          {data.title}
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", maxWidth: 600, margin: "0 auto 16px", lineHeight: 1.6 }}>
          {data.tagline}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} fill={star <= Math.round(data.rating) ? "#f5a623" : "none"} stroke={star <= Math.round(data.rating) ? "#f5a623" : "rgba(255,255,255,0.3)"} />
          ))}
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginLeft: 4 }}>{data.rating}</span>
        </div>
        <a href="/enroll" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#f5a623", color: "#1a2e6e",
          padding: "14px 32px", borderRadius: 12,
          fontSize: 16, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
        }}>
          Enroll Now <ChevronRight size={18} />
        </a>
      </div>
    </div>
  );
}

/* ---------- 2. Overview Cards ---------- */
function OverviewCards({ data }: { data: SubCourse }) {
  const cards = [
    { icon: <Clock size={22} />, label: "Duration", value: data.overview.duration },
    { icon: <Calendar size={22} />, label: "Classes/Week", value: data.overview.classesPerWeek },
    { icon: <BookOpen size={22} />, label: "Level", value: data.overview.level },
    { icon: <Users size={22} />, label: "Medium", value: data.overview.medium },
  ];
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionHeading>Course Overview</SectionHeading>
      <div className="overview-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
      }}>
        {cards.map((card) => (
          <div key={card.label} style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: "24px 16px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(26,46,110,0.06)",
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: `${data.color}14`,
              color: data.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 12px",
            }}>
              {card.icon}
            </div>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 4 }}>{card.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#1a2e6e" }}>{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 3. Teacher ---------- */
function TeacherSection({ data }: { data: SubCourse }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionHeading>Your Teacher</SectionHeading>
      <div style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 20,
        padding: "clamp(24px, 3vw, 36px)",
        display: "flex",
        alignItems: "center",
        gap: "clamp(20px, 3vw, 36px)",
        maxWidth: 650,
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(26,46,110,0.06)",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: `${data.color}14`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, flexShrink: 0,
        }}>
          {data.teacher.avatar}
        </div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#1a2e6e", marginBottom: 4 }}>{data.teacher.name}</div>
          <div style={{ fontSize: 13, color: data.color, fontWeight: 600, marginBottom: 10 }}>{data.teacher.qualification}</div>
          <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7 }}>{data.teacher.bio}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- 4. Syllabus ---------- */
function SyllabusSection({ data, openModule, setOpenModule }: { data: SubCourse; openModule: number | null; setOpenModule: (i: number | null) => void }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionHeading>Syllabus &amp; Curriculum</SectionHeading>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {data.syllabus.map((mod, i) => (
          <div key={i} style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            marginBottom: 10,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(26,46,110,0.04)",
          }}>
            <button
              onClick={() => setOpenModule(openModule === i ? null : i)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", background: openModule === i ? `${data.color}08` : "white",
                border: "none", cursor: "pointer", textAlign: "left", fontSize: 15, fontWeight: 600, color: "#1a2e6e",
                fontFamily: "inherit",
              }}
            >
              {mod.module}
              <ChevronDown size={18} style={{
                color: data.color,
                transition: "transform 0.3s ease",
                transform: openModule === i ? "rotate(180deg)" : "none",
              }} />
            </button>
            <div style={{
              display: "grid",
              gridTemplateRows: openModule === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}>
              <div style={{ overflow: "hidden" }}>
                <div style={{
                  padding: openModule === i ? "0 20px 16px" : "0 20px",
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  {mod.topics.map((topic, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: data.color, flexShrink: 0 }} />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 5. Reviews ---------- */
function ReviewsSection({ data }: { data: SubCourse }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionHeading>Student Reviews</SectionHeading>
      <div className="reviews-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {data.reviews.map((review, i) => (
          <div key={i} style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 4px 12px rgba(26,46,110,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontWeight: 600, fontSize: 15, color: "#1a2e6e" }}>{review.name}</span>
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill={star <= review.rating ? "#f5a623" : "#e2e8f0"} stroke="none" />
                ))}
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>&ldquo;{review.comment}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 6. FAQ ---------- */
function FaqSection({ data, openFaq, setOpenFaq }: { data: SubCourse; openFaq: number | null; setOpenFaq: (i: number | null) => void }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {data.faq.map((faq, i) => (
          <div key={i} style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            marginBottom: 10,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(26,46,110,0.04)",
          }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", background: "white",
                border: "none", cursor: "pointer", textAlign: "left", fontSize: 14, fontWeight: 600, color: "#1a2e6e",
                fontFamily: "inherit",
              }}
            >
              {faq.question}
              <ChevronDown size={16} style={{
                color: "#94a3b8",
                transition: "transform 0.3s ease",
                transform: openFaq === i ? "rotate(180deg)" : "none",
              }} />
            </button>
            <div style={{
              display: "grid",
              gridTemplateRows: openFaq === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}>
              <div style={{ overflow: "hidden" }}>
                <p style={{
                  margin: 0, padding: openFaq === i ? "0 20px 16px" : "0 20px",
                  fontSize: 14, color: "#64748b", lineHeight: 1.7,
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
