export default function Welcome() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0f9ff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(26,46,110,0.08)",
            color: "#1a2e6e",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: 50,
            marginBottom: 20,
          }}
        >
          Welcome to
        </span>

        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 800,
            color: "#1a2e6e",
            lineHeight: 1.25,
            marginBottom: 28,
          }}
        >
          Universal Link Online Education System
        </h2>

        <div
          style={{
            width: 60,
            height: 3,
            background: "#f5a623",
            borderRadius: 2,
            margin: "0 auto 32px",
          }}
        />

        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#475569",
            lineHeight: 1.9,
            marginBottom: 20,
          }}
        >
          At Universal Link Online Education System, we are dedicated to
          providing high-quality online learning opportunities for students
          around the world. Our experienced teachers deliver engaging one-to-one
          classes designed to help learners achieve academic excellence and
          personal growth.
        </p>

        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#475569",
            lineHeight: 1.9,
            marginBottom: 20,
          }}
        >
          We believe that education should be accessible, flexible, and
          effective for students of all ages. We offer a wide range of courses,
          including Online Quran (Nazra, Tajweed, and Hifz), English,
          Mathematics, Biology, Physics, and Chemistry. We also provide
          specialized preparation for NAPLAN (Australia) and GCSE (United
          Kingdom) examinations. Our interactive online classes are designed to
          build confidence, improve understanding, and support students in
          reaching their educational goals from the comfort of their homes.
        </p>

        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#475569",
            lineHeight: 1.9,
          }}
        >
          Join Universal Link Online Education System today and take the next
          step toward a brighter future with expert teachers, flexible
          schedules, and a supportive learning environment. Your success is our
          priority, and we are committed to helping you excel in every stage of
          your educational journey.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .welcome-section {
            padding: 48px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
