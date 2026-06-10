"use client";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Star, ChevronRight, CheckCircle } from "lucide-react";
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

      {/* 2. Highlights */}
      <HighlightsSection title={data.title} />

      {/* 3. Syllabus */}
      <SyllabusSection data={data} openModule={openModule} setOpenModule={setOpenModule} />

      {/* 4. Reviews */}
      <ReviewsSection data={data} />

      {/* 5. FAQ */}
      <FaqSection data={data} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- 1. Hero Banner ---------- */
function HeroBanner({ data }: { data: SubCourse }) {
  const courseImages: Record<string, string> = {
    "Noorani Qaida Course": "/image1.png",
    "Quran Nazara Course": "/nazara.png",
    "Quran Tajweed Course": "/image1.png",
    "Tafseer-ul-Quran": "/image1.png",
    "Quran Memorization (Hifz-ul-Quran)": "/hafz.png",
    "English Grammar": "/image3.png",
    "English Speaking": "/image3.png",
    "English Reading": "/image3.png",
    "English Writing": "/image3.png",
    Physics: "/image19.png",
    Chemistry: "/image20.png",
    Biology: "/image21.png",
    Mathematics: "/image22.png",
  };

  const courseEmojis: Record<string, string> = {
    "Noorani Qaida Course": "📖",
    "Quran Nazara Course": "📖",
    "Quran Tajweed Course": "📖",
    "Tafseer-ul-Quran": "📖",
    "Quran Memorization (Hifz-ul-Quran)": "📖",
    "English Grammar": "📝",
    "English Speaking": "🗣️",
    "English Reading": "📚",
    "English Writing": "✍️",
    Physics: "⚛️",
    Chemistry: "🧪",
    Biology: "🧬",
    Mathematics: "📐",
  };

  const courseOverviews: Record<string, string> = {
    "Noorani Qaida Course": "Build a strong foundation in Quran reading with our Noorani Qaida course. Learn Arabic alphabet recognition, vowel sounds, letter joining, and basic Tajweed principles through step-by-step lessons. Perfect for beginners, kids, and adults who want to start their Quran learning journey with confidence.",
    "Quran Nazara Course": "Learn to read the Holy Quran fluently, correctly, and confidently while looking directly at the Quranic text. Our program focuses on proper pronunciation, word recognition, and smooth recitation with personalized guidance from qualified teachers.",
    "Quran Tajweed Course": "Master the art of Quran recitation with proper Tajweed rules. Learn correct pronunciation (Makharij), characteristics of letters (Sifaat), and all essential Tajweed rules including Noon Sakinah, Meem Sakinah, Madd, and Waqf. Recite the Quran beautifully and accurately.",
    "Tafseer-ul-Quran": "Understand the deeper meaning and message of the Holy Quran through comprehensive Tafseer classes. Study the context of revelation, linguistic analysis, and contemporary application of Quranic teachings. Connect with the Quran like never before.",
    "Quran Memorization (Hifz-ul-Quran)": "Memorize the Holy Quran with expert guidance, proper Tajweed, and a structured learning plan. Our Hifz program includes daily new lessons (Sabaq), revision (Sabqi), and comprehensive review (Manzil) to ensure strong long-term retention.",
    "English Grammar": "Build a strong foundation in English grammar with clear explanations and practical exercises. Master parts of speech, tenses, sentence structure, active and passive voice, and advanced grammar concepts. Improve your writing and communication skills effectively.",
    "English Speaking": "Speak English fluently and confidently in real-life situations. Our speaking course focuses on conversation practice, vocabulary building, correct pronunciation, and reducing mother tongue influence. Gain the confidence to express yourself in any situation.",
    "English Reading": "Develop strong reading comprehension and analytical skills. Learn to understand main ideas, make inferences, analyze author's purpose, and think critically about texts. Perfect for academic success and personal growth.",
    "English Writing": "Express yourself clearly and effectively through writing. Master essay writing, formal letters, creative writing, and academic composition. Receive personalized feedback to improve your style, grammar, and structure.",
    Physics: "Understand the laws of motion, energy, waves, electricity, magnetism, and modern physics through interactive online classes. Our program helps students grasp fundamental concepts with clear explanations, problem-solving techniques, and regular assessments to build confidence and excel in physics.",
    Chemistry: "Master atomic structure, chemical bonding, reactions, organic chemistry, and analytical techniques. Our engaging online classes make complex chemical concepts easy to understand with lab demonstrations, equation practice, and exam-focused preparation.",
    Biology: "Explore cells, genetics, human physiology, ecosystems, and evolution through detailed visual lessons. Our biology program brings the living world to life with clear diagrams, lab videos, and comprehensive coverage of all major topics.",
    Mathematics: "Build strong skills in algebra, geometry, trigonometry, calculus, and problem solving. Our step-by-step approach helps students develop mathematical thinking with plenty of practice and personalized support.",
  };

  const courseGradients: Record<string, string> = {
    quran: "linear-gradient(135deg, #1a2e6e 0%, #2d4a9e 50%, #1a2e6e 100%)",
    english: "linear-gradient(135deg, #00b894 0%, #00cec9 50%, #00b894 100%)",
  };

  const isQuran = data.category === "Quran Education";
  const isEnglish = data.category === "Languages";

  const bgImage = courseImages[data.title] || null;
  const emoji = courseEmojis[data.title] || data.emoji;
  const overview = courseOverviews[data.title];
  const gradient = isQuran ? courseGradients.quran : isEnglish ? courseGradients.english : `linear-gradient(135deg, ${data.color} 0%, #2d4a9e 50%, ${data.color} 100%)`;

  return (
    <div style={{
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: bgImage ? "0 30px 80px rgba(0,0,0,0.2)" : "0 8px 32px rgba(26,46,110,0.15)",
      marginBottom: 40,
      position: "relative",
      minHeight: bgImage ? "clamp(380px, 48vw, 500px)" : "auto",
      background: bgImage
        ? `url('${bgImage}') center/cover no-repeat`
        : gradient,
    }}>
      {bgImage && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: isQuran
            ? "linear-gradient(135deg, rgba(26,46,110,0.88) 0%, rgba(45,74,158,0.65) 50%, rgba(26,46,110,0.88) 100%)"
            : isEnglish
            ? "linear-gradient(135deg, rgba(0,184,148,0.88) 0%, rgba(0,206,201,0.65) 50%, rgba(0,184,148,0.88) 100%)"
            : "linear-gradient(135deg, rgba(74,48,192,0.88) 0%, rgba(108,92,231,0.65) 50%, rgba(60,30,140,0.88) 100%)",
        }} />
      )}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        minHeight: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "clamp(32px, 4vw, 56px)",
        textAlign: bgImage ? "left" : "center",
      }}>
        <span style={{ fontSize: 48, display: "block", marginBottom: 12, textAlign: bgImage ? "left" : "center" }}>{emoji}</span>
        <h1 style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          color: "white",
          marginBottom: 16,
          lineHeight: 1.2,
        }}>
          {data.title}
        </h1>
        <p style={{
          fontSize: "clamp(15px, 1.8vw, 18px)",
          color: "rgba(255,255,255,0.9)",
          maxWidth: 700,
          lineHeight: 1.8,
          margin: "0 0 24px",
        }}>
          {overview || data.tagline}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} fill={star <= Math.round(data.rating) ? "#f5a623" : "none"} stroke={star <= Math.round(data.rating) ? "#f5a623" : "rgba(255,255,255,0.3)"} />
          ))}
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginLeft: 4 }}>{data.rating}</span>
        </div>
        <a href={`/enroll?course=${encodeURIComponent(data.title)}`} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#f5a623", color: "#1a2e6e",
          padding: "14px 32px", borderRadius: 12,
          fontSize: 16, fontWeight: 700, textDecoration: "none",
          boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
          alignSelf: "flex-start",
        }}>
          Enroll Now <ChevronRight size={18} />
        </a>
      </div>
    </div>
  );
}

/* ---------- 2. Highlights ---------- */
function HighlightsSection({ title }: { title: string }) {
  const highlights: Record<string, { title: string; desc: string }[]> = {
    "Noorani Qaida Course": [
      { title: "Step-by-Step Learning", desc: "Systematic progression from letters to full words and sentences" },
      { title: "Qualified Teachers", desc: "Male and female Hafiz teachers with years of experience" },
      { title: "Strong Foundation", desc: "Build essential Quran reading skills before advancing to Nazara" },
      { title: "Flexible Timing", desc: "Choose class schedules that work best for your family" },
      { title: "Regular Practice", desc: "Consistent reading exercises to build fluency and confidence" },
      { title: "Personal Attention", desc: "One-to-one classes tailored to each student's learning pace" },
    ],
    "Quran Nazara Course": [
      { title: "Fluent Quran Reading", desc: "Learn to read the Quran smoothly while looking at the text" },
      { title: "Expert Guidance", desc: "Teachers correct pronunciation and improve reading flow" },
      { title: "Structured Plan", desc: "Progressive curriculum from short surahs to complete Quran" },
      { title: "Flexible Classes", desc: "Schedule classes at your convenience with 3-6 sessions per week" },
      { title: "Regular Assessments", desc: "Weekly progress checks to ensure steady improvement" },
      { title: "Build Confidence", desc: "Gain the ability to read any Quranic verse independently" },
    ],
    "Quran Tajweed Course": [
      { title: "Comprehensive Rules", desc: "Master all Tajweed rules including Noon Sakinah, Meem Sakinah, Madd, and Waqf" },
      { title: "Makharij Training", desc: "Learn correct points of articulation for every Arabic letter" },
      { title: "Expert Teachers", desc: "Certified Huffaz with specialized Tajweed qualifications" },
      { title: "Practical Application", desc: "Apply Tajweed rules while reciting Quran passages" },
      { title: "Regular Feedback", desc: "Detailed error correction and improvement suggestions" },
      { title: "Beautiful Recitation", desc: "Develop a melodious and accurate Quran recitation style" },
    ],
    "Tafseer-ul-Quran": [
      { title: "Deep Understanding", desc: "Learn the context, meaning, and wisdom behind each verse" },
      { title: "Expert Scholar", desc: "PhD-level instructor with extensive Islamic studies background" },
      { title: "Contemporary Relevance", desc: "Apply Quranic teachings to modern-day challenges" },
      { title: "Comprehensive Study", desc: "Cover selected surahs from Juz Amma and other key chapters" },
      { title: "Interactive Sessions", desc: "Engage in discussions and Q&A to deepen your understanding" },
      { title: "Reference Materials", desc: "Study from authentic Tafseer books and receive detailed notes" },
    ],
    "Quran Memorization (Hifz-ul-Quran)": [
      { title: "Structured Hifz Plan", desc: "Daily Sabaq (new lesson), Sabqi (revision), and Manzil (review)" },
      { title: "Expert Huffaz", desc: "Qualified teachers who have completed Hifz themselves" },
      { title: "Strong Retention", desc: "Systematic revision system for long-term memorization" },
      { title: "Tajweed Integration", desc: "Memorize with proper pronunciation and Tajweed from day one" },
      { title: "Progress Tracking", desc: "Regular assessments and detailed progress reports for parents" },
      { title: "Flexible Schedule", desc: "Classes designed to fit around school and daily routines" },
    ],
    "English Grammar": [
      { title: "Complete Coverage", desc: "Parts of speech, tenses, sentence structure, and advanced grammar" },
      { title: "Practical Exercises", desc: "Worksheets, quizzes, and real-world writing practice" },
      { title: "Expert Teacher", desc: "Qualified English language instructor with years of experience" },
      { title: "Build Confidence", desc: "Write and speak with correct grammar in everyday situations" },
      { title: "Exam Preparation", desc: "Targeted practice for school exams and proficiency tests" },
      { title: "Personalized Feedback", desc: "Detailed corrections and suggestions to improve your skills" },
    ],
    "English Speaking": [
      { title: "Real Conversation Practice", desc: "Speak English in real-life scenarios and everyday situations" },
      { title: "Fluency Focus", desc: "Build confidence to express thoughts clearly and naturally" },
      { title: "Pronunciation Training", desc: "Improve accent, intonation, and reduce mother tongue influence" },
      { title: "Vocabulary Building", desc: "Expand your word bank for effective communication" },
      { title: "Supportive Environment", desc: "Practice without fear in a encouraging learning atmosphere" },
      { title: "Practical Results", desc: "Noticeable improvement in speaking within 4-6 weeks" },
    ],
    "English Reading": [
      { title: "Comprehension Skills", desc: "Master main idea, inferences, cause-effect, and critical analysis" },
      { title: "Vocabulary Growth", desc: "Learn new words in context and expand your reading ability" },
      { title: "Guided Practice", desc: "Read diverse texts with teacher guidance and discussion" },
      { title: "Academic Focus", desc: "Prepare for exam reading sections with targeted exercises" },
      { title: "Engaging Materials", desc: "Stories, articles, and graded readers matched to your level" },
      { title: "Progress Tracking", desc: "Regular comprehension assessments to measure improvement" },
    ],
    "English Writing": [
      { title: "Essay Mastery", desc: "Learn structure, thesis development, and persuasive writing" },
      { title: "Creative Expression", desc: "Develop your unique voice through stories and descriptive pieces" },
      { title: "Formal Writing", desc: "Master letters, emails, reports, and academic composition" },
      { title: "Personalized Feedback", desc: "Detailed corrections on every piece you write" },
      { title: "Grammar & Style", desc: "Improve sentence structure, vocabulary choice, and writing flow" },
      { title: "Portfolio Building", desc: "Create a collection of your best work to showcase progress" },
    ],
    Physics: [
      { title: "Comprehensive Curriculum", desc: "Motion, force, energy, electricity, magnetism, waves, and modern physics" },
      { title: "Expert Teachers", desc: "Clear explanations and proven problem-solving techniques" },
      { title: "Regular Assessments", desc: "Continuous evaluation to strengthen concepts and track progress" },
      { title: "Flexible Scheduling", desc: "Learn at your own pace with classes that fit your routine" },
      { title: "Personalized Support", desc: "One-to-one attention tailored to each student's learning needs" },
      { title: "Build Confidence", desc: "Develop problem-solving skills and excel in physics from home" },
    ],
    Chemistry: [
      { title: "Comprehensive Curriculum", desc: "Atomic structure, bonding, reactions, organic chemistry, and analytical techniques" },
      { title: "Expert Teachers", desc: "Clear explanations with real-world examples and lab demonstrations" },
      { title: "Regular Assessments", desc: "Equation practice, mock tests, and continuous progress tracking" },
      { title: "Flexible Scheduling", desc: "Book classes around your availability with convenient timings" },
      { title: "Personalized Support", desc: "Individual attention and customized learning plans for every student" },
      { title: "Exam Preparation", desc: "Past paper practice and exam strategies for all major boards" },
    ],
    Biology: [
      { title: "Comprehensive Curriculum", desc: "Cell biology, human physiology, genetics, ecology, and evolution" },
      { title: "Expert Teachers", desc: "Qualified instructors with years of experience in biological sciences" },
      { title: "Regular Assessments", desc: "Topic tests, revision quizzes, and progress tracking reports" },
      { title: "Flexible Scheduling", desc: "Choose class times that work best for your daily routine" },
      { title: "Personalized Support", desc: "One-to-one guidance to master complex biological processes" },
      { title: "Visual Learning", desc: "Detailed diagrams, animations, and lab videos for better understanding" },
    ],
    Mathematics: [
      { title: "Comprehensive Curriculum", desc: "Algebra, geometry, trigonometry, calculus, and problem solving" },
      { title: "Expert Teachers", desc: "Skilled mathematicians who make complex concepts easy to grasp" },
      { title: "Regular Assessments", desc: "Weekly quizzes, practice problems, and performance evaluations" },
      { title: "Flexible Scheduling", desc: "Learn mathematics at your own pace with adaptable timings" },
      { title: "Personalized Support", desc: "Targeted help with challenging topics and individual attention" },
      { title: "Build Confidence", desc: "Develop strong problem-solving skills and mathematical thinking" },
    ],
  };

  const items = highlights[title] || [];

  if (items.length === 0) return null;

  return (
    <section style={{ padding: "0 0 64px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
          borderRadius: 24,
          padding: "clamp(28px, 4vw, 48px)",
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
            What makes our {title} program stand out
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {items.map((item, i) => (
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
            <a href={`/enroll?course=${encodeURIComponent(title)}`} style={{
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Syllabus ---------- */
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

/* ---------- 4. Reviews ---------- */
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

/* ---------- 5. FAQ ---------- */
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
