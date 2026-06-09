"use client";

type Social = {
  name: string;
  icon: "whatsapp" | "youtube" | "tiktok" | "snapchat" | "facebook" | "telegram";
  color: string;
  href: string;
};

export const socialLinks: Social[] = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    color: "#25d366",
    href: "https://whatsapp.com/channel/0029VbCjjwmCMY09BY3ABO1T",
  },
  {
    name: "YouTube",
    icon: "youtube",
    color: "#ff0000",
    href: "https://youtube.com/@universallinkonlineeducation",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    color: "#010101",
    href: "https://www.tiktok.com/@universal.link3",
  },
  {
    name: "Snapchat",
    icon: "snapchat",
    color: "#fffc00",
    href: "https://www.snapchat.com/add/universallink26",
  },
  {
    name: "Facebook",
    icon: "facebook",
    color: "#1877f2",
    href: "https://www.facebook.com/share/1LTRJtsD5C/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    color: "#0088cc",
    href: "https://t.me/universallink",
  },
];

export function BrandIcon({
  name,
  color,
  size = 18,
}: {
  name: Social["icon"];
  color: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    style: { display: "block" },
  };

  switch (name) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path fill="#25D366" d="M24 4C12.96 4 4 12.96 4 24c0 4.08 1.28 7.86 3.46 10.96L5.4 42.6l7.84-2.04A19.9 19.9 0 0 0 24 44c11.04 0 20-8.96 20-20S35.04 4 24 4Zm9.2 28.6c-.36 1.04-2.1 2-3.44 2.24-.88.16-2.04.24-3.32-.2-1.28-.44-7.04-3.24-9.92-8.72-2.88-5.48-1.68-9.12-.84-10.48.84-1.36 1.84-1.48 2.4-1.48.56 0 1.12.04 1.6.08.52.04 1.2-.2 1.88 1.44.68 1.64 2.32 5.64 2.52 6.04.2.4.32.88.08 1.4-.24.52-.36.76-.72 1.16-.36.4-.76.88-1.08 1.2-.36.32-.72.68-.32 1.32.4.64 1.8 3 3.88 4.88 2.68 2.4 4.6 2.96 5.36 3.2.76.24 1.2.2 1.64-.12.44-.32 2.04-2 2.6-2.68.56-.68 1.12-.56 1.88-.32.76.24 4.8 2.36 5.64 2.8.84.44 1.4.64 1.6 1 .2.36.2 2.08-.16 3.12Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path fill="#FF0000" d="M43.2 14.4c-.48-1.8-1.92-3.24-3.72-3.72C36.04 10 24 10 24 10s-12.04 0-15.48.68c-1.8.48-3.24 1.92-3.72 3.72C4 17.84 4 24 4 24s0 6.16.8 9.6c.48 1.8 1.92 3.24 3.72 3.72C11.96 38 24 38 24 38s12.04 0 15.48-.68c1.8-.48 3.24-1.92 3.72-3.72.8-3.44.8-9.6.8-9.6s0-6.16-.8-9.6ZM19.6 30.4V17.6l10.4 6.4-10.4 6.4Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path fill="#010101" d="M34.2 12.8a8.86 8.86 0 0 1-2.8-6.8h-4.4v24.4c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.4 0 .8 0 1.2.2v-4.6c-.4-.04-.8-.08-1.2-.08-5.2 0-9.4 4.2-9.4 9.4s4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4V19.2c2 1.4 4.4 2.4 7.2 2.4v-4.4c-1.6 0-3.2-.6-4.4-1.6Z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg {...common}>
          <path fill="#FFFC00" stroke="#111" strokeWidth="1.8" d="M24 8.5c5.05 0 8.25 3.55 8.25 8.9 0 1.65-.2 3.1-.25 4.25.95.65 2.1.98 3.4 1.05-.95 1.65-2.3 2.65-4.05 2.95.9 2.8 3 5 6.35 6.65-2.75.35-4.65.98-5.7 1.95-1.25 1.15-2.75-.25-4.7.18-1.15.25-2 1-3.3 1s-2.15-.75-3.3-1c-1.95-.43-3.45.97-4.7-.18-1.05-.97-2.95-1.6-5.7-1.95 3.35-1.65 5.45-3.85 6.35-6.65-1.75-.3-3.1-1.3-4.05-2.95 1.3-.07 2.45-.4 3.4-1.05-.05-1.15-.25-2.6-.25-4.25 0-5.35 3.2-8.9 8.25-8.9Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path fill="#1877F2" d="M24 4C12.96 4 4 12.96 4 24c0 9.92 7.28 18.16 16.8 19.64V29.8h-5.04V24h5.04v-4.36c0-5 2.96-7.72 7.48-7.72 2.16 0 4.44.4 4.44.4v4.88h-2.5c-2.48 0-3.24 1.52-3.24 3.08V24h5.52l-.88 5.8h-4.64v13.84C36.72 42.16 44 33.92 44 24c0-11.04-8.96-20-20-20Z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path fill="#0088cc" d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm9.04 14.04-3.12 14.72c-.24 1.04-.84 1.28-1.68.8l-4.64-3.44-2.24 2.16c-.24.24-.44.44-.92.44l.32-4.68 8.52-7.68c.36-.32-.08-.52-.56-.2l-10.52 6.64-4.56-1.44c-1-.32-1.02-1 .2-1.48l17.8-6.88c.84-.28 1.56.2 1.28 1.28Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" fill={color} />
        </svg>
      );
  }
}
