"use client";

const socials = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    color: "#25d366",
    shadow: "rgba(37,211,102,0.35)",
    href: "https://whatsapp.com/channel/0029VbCjjwmCMY09BY3ABO1T",
    desc: "Join our channel",
    cta: "Join Channel",
  },
  {
    name: "YouTube",
    icon: "youtube",
    color: "#ff0000",
    shadow: "rgba(255,0,0,0.3)",
    href: "https://youtube.com/@universallinkonlineeducation",
    desc: "Free edu videos",
    cta: "Subscribe",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    color: "#010101",
    shadow: "rgba(0,0,0,0.25)",
    href: "https://www.tiktok.com/@universal.link3",
    desc: "Short tips & clips",
    cta: "Follow",
  },
  {
    name: "Snapchat",
    icon: "snapchat",
    color: "#f7c600",
    shadow: "rgba(247,198,0,0.4)",
    href: "https://www.snapchat.com/add/universallink26",
    desc: "Add us on Snap",
    cta: "Add Friend",
  },
  {
    name: "Facebook",
    icon: "facebook",
    color: "#1877f2",
    shadow: "rgba(24,119,242,0.35)",
    href: "https://www.facebook.com/share/1LTRJtsD5C/",
    desc: "Like our page",
    cta: "Follow Page",
  },
  {
    name: "MS Teams",
    icon: "teams",
    color: "#5b5ea6",
    shadow: "rgba(91,94,166,0.35)",
    href: "https://www.microsoft.com/en-us/microsoft-teams/download-app",
    desc: "Join our classes",
    cta: "Download",
  },
];

function BrandIcon({ name, color }: { name: string; color: string }) {
  const common = {
    width: 38,
    height: 38,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path
            fill={color}
            d="M24 5.5c-10.18 0-18.45 8.02-18.45 17.9 0 3.2.89 6.33 2.58 9.05L5.5 42.5l10.35-2.56A18.9 18.9 0 0 0 24 41.3c10.18 0 18.45-8.02 18.45-17.9S34.18 5.5 24 5.5Z"
          />
          <path
            fill="white"
            d="M33.43 28.55c-.52-.25-3.08-1.48-3.56-1.65-.48-.17-.83-.25-1.18.25-.35.5-1.35 1.65-1.66 1.99-.31.33-.61.37-1.13.12-.52-.25-2.19-.79-4.17-2.5-1.54-1.34-2.58-2.99-2.88-3.49-.31-.5-.03-.77.23-1.02.24-.23.52-.6.78-.89.26-.29.35-.5.52-.83.17-.33.09-.62-.04-.87-.13-.25-1.18-2.76-1.61-3.78-.42-.99-.85-.86-1.18-.87h-1c-.35 0-.91.12-1.39.62-.48.5-1.83 1.74-1.83 4.24s1.87 4.91 2.13 5.25c.26.33 3.68 5.46 8.92 7.65 1.25.52 2.22.83 2.98 1.06 1.25.39 2.39.33 3.29.2 1-.15 3.08-1.22 3.51-2.4.43-1.18.43-2.19.3-2.4-.13-.21-.48-.33-1-.58Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect width="42" height="30" x="3" y="9" fill={color} rx="8" />
          <path fill="white" d="M20 17v14l12-7-12-7Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path
            fill={color}
            d="M28.4 6.5c.55 4.25 3 7.05 7.14 7.32v6.2a13.9 13.9 0 0 1-7.05-2.12v10.98c0 7.72-8.38 12.47-15.04 8.55-6.65-3.91-6.36-13.61.52-17.2a12.03 12.03 0 0 1 5.2-1.33v6.44a5.66 5.66 0 0 0-4.74 3.03 5.29 5.29 0 0 0 1.25 6.14c1.72 1.49 4.2 1.75 6.06.61a5.27 5.27 0 0 0 2.54-4.57V6.5h4.12Z"
          />
          <path
            fill="#25f4ee"
            opacity=".9"
            d="M28.4 6.5c.18 1.36.55 2.6 1.1 3.7h-5.22V30.55a5.27 5.27 0 0 1-2.54 4.57 5.8 5.8 0 0 1-5.5.16c1.59 2.15 4.6 2.81 6.95 1.38a5.27 5.27 0 0 0 2.54-4.57V12.06h4.84a10.55 10.55 0 0 1-2.17-5.56Z"
          />
          <path fill="#fe2c55" d="M35.54 13.82v3.66a13.9 13.9 0 0 1-7.05-2.12v2.54a13.9 13.9 0 0 0 7.05 2.12v-6.2Z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg {...common}>
          <rect width="48" height="48" fill={color} rx="12" />
          <path
            fill="white"
            stroke="#111"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M24 9.5c5.1 0 8.55 3.73 8.55 9.25 0 1.73-.21 3.2-.26 4.3.6.32 1.55.65 2.87.83 1.17.16 1.42 1.73.38 2.26-1 .51-2.13.84-3.02 1.02.74 1.95 2.47 3.9 5.2 5.8.79.55.45 1.8-.5 1.93-1.5.22-2.78.5-3.87.87-.95.31-1.12 1.62-2.06 1.75-.88.12-1.96-.5-3.42-.5-1.22 0-2.44.97-3.87.97s-2.65-.97-3.87-.97c-1.46 0-2.54.62-3.42.5-.94-.13-1.1-1.44-2.06-1.75a19.7 19.7 0 0 0-3.87-.87c-.95-.14-1.29-1.38-.5-1.93 2.73-1.9 4.46-3.85 5.2-5.8-.9-.18-2.02-.51-3.02-1.02-1.04-.53-.79-2.1.38-2.26 1.32-.18 2.27-.51 2.87-.84-.05-1.1-.26-2.56-.26-4.29C15.45 13.23 18.9 9.5 24 9.5Z"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="22" fill={color} />
          <path
            fill="white"
            d="M27.8 25.4h5.1l.8-6h-5.9v-3.83c0-1.73.48-2.91 2.98-2.91h3.18V7.35A42.7 42.7 0 0 0 29.32 7c-4.6 0-7.75 2.8-7.75 7.94v4.46h-5.2v6h5.2V41h6.23V25.4Z"
          />
        </svg>
      );
    case "teams":
      return (
        <svg {...common}>
          <rect width="25" height="25" x="6" y="13" fill="#6264A7" rx="3.5" />
          <rect width="16" height="16" x="25" y="9" fill="#7B83EB" rx="8" />
          <rect width="13" height="13" x="31" y="23" fill="#5059C9" rx="6.5" />
          <path fill="white" d="M24 19.1h-5.3V33h-3.4V19.1H10v-3h14v3Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialConnect() {
  return (
    <section id="social" style={{ padding: "88px 0", background: "white", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-badge">Stay Connected</span>
          <h2 style={{
            fontSize: "clamp(24px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#1a2e6e",
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Follow Us on Social Media
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Stay updated with our latest classes, tips, and announcements.
          </p>
        </div>

        <div className="social-row" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 20,
          flexWrap: "wrap",
        }}>
          {socials.map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label={`${s.name}: ${s.cta}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                width: 160,
                padding: "28px 12px 24px",
                borderRadius: 24,
                background: "#f8faff",
                border: "1.5px solid #e8edf8",
                transition: "transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease",
                animationDelay: `${i * 0.07}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-10px) scale(1.04)";
                el.style.boxShadow = `0 20px 48px ${s.shadow}`;
                el.style.borderColor = s.color + "60";
                el.style.background = "white";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0) scale(1)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#e8edf8";
                el.style.background = "#f8faff";
              }}
            >
              <div style={{
                width: 76,
                height: 76,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${s.color}22, ${s.color}44)`,
                border: `3px solid ${s.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                boxShadow: `0 8px 24px ${s.shadow}`,
                position: "relative",
              }}>
                <BrandIcon name={s.icon} color={s.color} />
                <div style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  border: `2px dashed ${s.color}30`,
                  pointerEvents: "none",
                }} />
              </div>

              <div style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#1a2e6e",
                marginBottom: 4,
                textAlign: "center",
              }}>
                {s.name}
              </div>

              <div style={{
                fontSize: 12,
                color: "#94a3b8",
                marginBottom: 14,
                textAlign: "center",
                lineHeight: 1.4,
              }}>
                {s.desc}
              </div>

              <span style={{
                background: s.color === "#f7c600" ? "#1a2e6e" : s.color === "#010101" ? "#333" : s.color,
                color: "white",
                padding: "6px 16px",
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}>
                {s.cta}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .social-card {
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .social-row {
            gap: 12px !important;
          }
          .social-card {
            width: calc(50% - 8px) !important;
            padding: 20px 8px 18px !important;
          }
        }
        @media (max-width: 360px) {
          .social-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
