import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Star, Shield, Users, CreditCard } from "lucide-react";

const plans = [
  {
    title: "5 Classes / Week",
    subtitle: "22 Classes Per Month",
    badge: "Most Popular",
    featured: true,
    prices: [
      { flag: "🇬🇧", currency: "£", label: "UK", amount: "30" },
      { flag: "🇦🇺", currency: "A$", label: "Australia", amount: "60" },
      { flag: "🇺🇸", currency: "$", label: "USA", amount: "40" },
      { flag: "🇨🇦", currency: "C$", label: "Canada", amount: "55" },
    ],
    features: [
      "Live Interactive Classes",
      "Weekly Progress Reports",
      "Study Materials",
      "Teacher Support",
      "Certificate of Completion",
    ],
  },
  {
    title: "4 Classes / Week",
    subtitle: "16 Classes Per Month",
    featured: false,
    prices: [
      { flag: "🇬🇧", currency: "£", label: "UK", amount: "25" },
      { flag: "🇦🇺", currency: "A$", label: "Australia", amount: "50" },
      { flag: "🇺🇸", currency: "$", label: "USA", amount: "35" },
      { flag: "🇨🇦", currency: "C$", label: "Canada", amount: "45" },
    ],
    features: [
      "Live Classes",
      "Progress Tracking",
      "Study Materials",
      "Teacher Support",
    ],
  },
  {
    title: "3 Classes / Week",
    subtitle: "12 Classes Per Month",
    featured: false,
    prices: [
      { flag: "🇬🇧", currency: "£", label: "UK", amount: "25" },
      { flag: "🇦🇺", currency: "A$", label: "Australia", amount: "50" },
      { flag: "🇺🇸", currency: "$", label: "USA", amount: "35" },
      { flag: "🇨🇦", currency: "C$", label: "Canada", amount: "45" },
    ],
    features: [
      "Live Classes",
      "Study Resources",
      "Teacher Guidance",
      "Monthly Assessment",
    ],
  },
  {
    title: "2 Classes / Week",
    subtitle: "8 Classes Per Month",
    featured: false,
    prices: [
      { flag: "🇬🇧", currency: "£", label: "UK", amount: "20" },
      { flag: "🇦🇺", currency: "A$", label: "Australia", amount: "40" },
      { flag: "🇺🇸", currency: "$", label: "USA", amount: "25" },
      { flag: "🇨🇦", currency: "C$", label: "Canada", amount: "35" },
    ],
    features: [
      "Live Classes",
      "Study Material",
      "Teacher Assistance",
    ],
  },
];

const weekendPlan = {
  title: "Special Weekend Classes",
  subtitle: "Available Every Saturday & Sunday",
  prices: [
    { flag: "🇬🇧", currency: "£", label: "UK", amount: "25" },
    { flag: "🇦🇺", currency: "A$", label: "Australia", amount: "50" },
    { flag: "🇺🇸", currency: "$", label: "USA", amount: "35" },
    { flag: "🇨🇦", currency: "C$", label: "Canada", amount: "45" },
  ],
  features: [
    "Weekend Availability",
    "Small Group Sessions",
    "Interactive Learning",
    "Expert Teachers",
  ],
};

const trustItems = [
  { icon: <Shield size={16} />, text: "Money-Back Guarantee" },
  { icon: <Users size={16} />, text: "500+ Active Students" },
  { icon: <CreditCard size={16} />, text: "Secure Payments" },
];

// ─── Payment Method Icons using real image files ───────────────────────────

const WesternUnionIcon = () => (
  <img
    src="/image31.png"
    alt="Western Union"
    width={40}
    height={40}
    style={{ borderRadius: "9px", objectFit: "contain" }}
  />
);

const MoneyGramIcon = () => (
  <img
    src="/image32.png"
    alt="MoneyGram"
    width={40}
    height={40}
    style={{ borderRadius: "9px", objectFit: "contain" }}
  />
);

const BankTransferIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="9" fill="#1B3A6B" />
    <path d="M6 17 L20 7 L34 17 Z" fill="white" />
    <rect x="9"  y="18" width="3" height="11" rx="1" fill="white" />
    <rect x="15" y="18" width="3" height="11" rx="1" fill="white" />
    <rect x="21" y="18" width="3" height="11" rx="1" fill="white" />
    <rect x="27" y="18" width="3" height="11" rx="1" fill="white" />
    <rect x="6"  y="29" width="28" height="3" rx="1.5" fill="white" />
  </svg>
);

const RiaIcon = () => (
  <img
    src="/image33.png"
    alt="Ria"
    width={40}
    height={40}
    style={{ borderRadius: "9px", objectFit: "contain" }}
  />
);

const WiseIcon = () => (
  <img
    src="/image34.png"
    alt="Wise"
    width={40}
    height={40}
    style={{ borderRadius: "9px", objectFit: "contain" }}
  />
);

// ──────────────────────────────────────────────────────────────────────────────

function PricingCard({ plan }: { plan: (typeof plans)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1rem",
        border: plan.featured ? "1px solid rgba(245,166,35,0.4)" : "1px solid #f3f4f6",
        background: plan.featured
          ? "linear-gradient(160deg, #ffffff 0%, #fffcf0 40%, #fff7e0 100%)"
          : "#ffffff",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.15)"
          : plan.featured
          ? "0 10px 30px rgba(245,166,35,0.2)"
          : "0 4px 12px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease",
        zIndex: plan.featured ? 10 : 1,
      }}
    >
      {plan.featured && (
        <div style={{
          position: "absolute",
          inset: "-1px",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #f5a623 0%, rgba(245,166,35,0.1) 50%, #f5a623 100%)",
          filter: "blur(6px)",
          opacity: 0.7,
          zIndex: 0,
        }} />
      )}

      {plan.badge && (
        <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            background: "linear-gradient(to right, #f59e0b, #fbbf24)",
            color: "white",
            fontSize: "0.75rem",
            fontWeight: "bold",
            padding: "6px 16px",
            borderRadius: "9999px",
            boxShadow: "0 4px 12px rgba(245,158,11,0.3)",
          }}>
            <Sparkles size={12} />
            {plan.badge}
          </span>
        </div>
      )}

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "4px", color: plan.featured ? "#b45309" : "#1a2e6e" }}>
            {plan.title}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#9ca3af", fontWeight: 500 }}>{plan.subtitle}</p>
        </div>

        <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
          {plan.prices.map((p, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 12px",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
              background: plan.featured ? "#fffbeb" : "#f9fafb",
              border: plan.featured ? "1px solid rgba(245,166,35,0.3)" : "1px solid #f3f4f6",
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "1rem" }}>{p.flag}</span>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>{p.label}</span>
              </span>
              <span style={{ fontWeight: 800, color: "#1a2e6e" }}>
                {p.currency}{p.amount}
                <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "0.75rem" }}>/mo</span>
              </span>
            </div>
          ))}
        </div>

        <div style={{
          height: "1px",
          width: "100%",
          marginBottom: "1.25rem",
          background: plan.featured
            ? "linear-gradient(to right, transparent, rgba(245,166,35,0.4), transparent)"
            : "#f3f4f6",
        }} />

        <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "1.75rem", flex: 1, listStyle: "none", padding: 0 }}>
          {plan.features.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem" }}>
              <span style={{
                flexShrink: 0,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2px",
                background: plan.featured
                  ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
                  : "rgba(26,46,110,0.1)",
                color: plan.featured ? "white" : "#1a2e6e",
              }}>
                <Check size={11} strokeWidth={3} />
              </span>
              <span style={{ color: "#4b5563" }}>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/#enroll"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "0.75rem",
            fontWeight: "bold",
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            border: "none",
            cursor: "pointer",
            background: plan.featured
              ? "linear-gradient(to right, #f59e0b, #fbbf24)"
              : "#1a2e6e",
            color: "white",
            boxShadow: plan.featured
              ? "0 8px 20px rgba(245,158,11,0.3)"
              : "0 4px 12px rgba(26,46,110,0.2)",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Choose Plan
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

function WeekendCard({ plan }: { plan: typeof weekendPlan }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      background: "linear-gradient(160deg, #0f1d4a 0%, #1a2e6e 50%, #2a3f8f 100%)",
    }}>
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "4px",
        background: "linear-gradient(to right, transparent, #fbbf24, transparent)",
      }} />

      <div style={{ position: "relative", zIndex: 10, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
              <span style={{ fontSize: "1.5rem" }}>🌟</span>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>{plan.title}</h3>
            </div>
            <p style={{ color: "#fbbf24", fontWeight: 600, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
              {plan.subtitle}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {plan.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: "#d1d5db" }}>
                  <span style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "rgba(251,191,36,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Star size={11} color="#fbbf24" />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flexShrink: 0, minWidth: "220px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "1rem" }}>
              {plan.prices.map((p, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  padding: "10px 16px",
                  textAlign: "center",
                }}>
                  <span style={{ fontSize: "1rem" }}>{p.flag}</span>
                  <div style={{ color: "white", fontWeight: 800, fontSize: "1rem", marginTop: "2px" }}>
                    {p.currency}{p.amount}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/#enroll"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "0.75rem",
                fontWeight: "bold",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(to right, #f59e0b, #fbbf24)",
                color: "white",
                boxShadow: "0 8px 20px rgba(245,158,11,0.3)",
                transition: "opacity 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Join Weekend Classes
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const paymentMethods = [
    { name: "Western Union", icon: <WesternUnionIcon /> },
    { name: "MoneyGram",     icon: <MoneyGramIcon /> },
    { name: "Bank Transfer", icon: <BankTransferIcon /> },
    { name: "Ria",           icon: <RiaIcon /> },
    { name: "Wise",          icon: <WiseIcon /> },
  ];

  return (
    <section id="pricing" style={{
      position: "relative",
      padding: "5rem 1rem",
      background: "white",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "600px",
        background: "linear-gradient(to bottom, rgba(219,234,254,0.8), rgba(219,234,254,0.3), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block",
            background: "#fef3c7",
            color: "#b45309",
            fontSize: "0.75rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: "9999px",
            marginBottom: "1.25rem",
            border: "1px solid rgba(245,158,11,0.3)",
          }}>
            Pricing
          </span>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#1a2e6e",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}>
            Choose Your Learning Plan
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
            Flexible class packages designed for students worldwide.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "1.5rem" }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid #f3f4f6",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                fontSize: "0.875rem",
                color: "#6b7280",
              }}>
                <span style={{ color: "rgba(26,46,110,0.5)" }}>{item.icon}</span>
                <span style={{ fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
          marginBottom: "3rem",
          alignItems: "stretch",
        }}>
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>

        {/* Weekend Special */}
        <WeekendCard plan={weekendPlan} />

        {/* Subjects Fees */}
        <div style={{
          marginTop: "3rem",
          padding: "2rem",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #f8faff, #eef2ff)",
          border: "1px solid #e2e8f0",
        }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(26,46,110,0.08)",
              color: "#1a2e6e",
              fontSize: "0.75rem",
              fontWeight: "bold",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 20px",
              borderRadius: "9999px",
              marginBottom: "0.75rem",
            }}>
              Subjects Fees
            </span>
            <h3 style={{
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              fontWeight: 800,
              color: "#1a2e6e",
              marginBottom: "0.5rem",
            }}>
              Subject Pricing Per Month
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Choose your preferred schedule and region
            </p>
          </div>

          <div style={{
            maxWidth: 700,
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "0.75rem",
            border: "1px solid #e2e8f0",
            background: "white",
            boxShadow: "0 4px 16px rgba(26,46,110,0.06)",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{
                  background: "#1a2e6e",
                  color: "white",
                }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em" }}>Region</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em" }}>5 Days / Week</th>
                  <th style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em" }}>3 Days / Week</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { flag: "🇦🇺", label: "Australia", code: "A$", five: "120", three: "80" },
                  { flag: "🇬🇧", label: "United Kingdom", code: "£", five: "65", three: "45" },
                  { flag: "🇨🇦", label: "Canada", code: "C$", five: "120", three: "80" },
                  { flag: "🇺🇸", label: "United States", code: "$", five: "85", three: "55" },
                ].map((row, i) => (
                  <tr key={i} style={{
                    borderBottom: i < 3 ? "1px solid #f1f5f9" : "none",
                    background: i % 2 === 0 ? "white" : "#f8fafc",
                  }}>
                    <td style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", fontWeight: 600, color: "#1a2e6e" }}>
                      <span style={{ fontSize: "1.2rem" }}>{row.flag}</span>
                      {row.label}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.95rem", fontWeight: 700, color: "#1a2e6e" }}>
                      {row.code}{row.five}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", fontSize: "0.95rem", fontWeight: 600, color: "#475569" }}>
                      {row.code}{row.three}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={{
          marginTop: "3rem",
          textAlign: "center",
          padding: "2rem",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
          border: "1px solid #e2e8f0",
        }}>
          <span style={{
            display: "inline-block",
            background: "#e2e8f0",
            color: "#475569",
            fontSize: "0.7rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: "9999px",
            marginBottom: "1rem",
          }}>
            Payment Methods
          </span>
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
            We accept payments via the following methods
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}>
            {paymentMethods.map((method, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 20px",
                  borderRadius: "0.75rem",
                  background: "white",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#1a2e6e",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                }}
              >
                <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                  {method.icon}
                </span>
                {method.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}