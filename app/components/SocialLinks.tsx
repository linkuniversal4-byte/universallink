"use client";
import { useState } from "react";

type Social = {
  name: string;
  icon: "whatsapp" | "youtube" | "tiktok" | "snapchat" | "facebook" | "teams";
  color: string;
  href: string;
  iconUrl: string;
};

export const socialLinks: Social[] = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    color: "#25d366",
    href: "https://whatsapp.com/channel/0029VbCjjwmCMY09BY3ABO1T",
    iconUrl: "https://cdn.simpleicons.org/whatsapp/25D366",
  },
  {
    name: "YouTube",
    icon: "youtube",
    color: "#ff0000",
    href: "https://youtube.com/@universallinkonlineeducation",
    iconUrl: "https://cdn.simpleicons.org/youtube/FF0000",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    color: "#010101",
    href: "https://www.tiktok.com/@universal.link3",
    iconUrl: "https://cdn.simpleicons.org/tiktok/010101",
  },
  {
    name: "Snapchat",
    icon: "snapchat",
    color: "#fffc00",
    href: "https://www.snapchat.com/add/universallink26",
    iconUrl: "https://cdn.simpleicons.org/snapchat/111111",
  },
  {
    name: "Facebook",
    icon: "facebook",
    color: "#1877f2",
    href: "https://www.facebook.com/share/1LTRJtsD5C/",
    iconUrl: "https://cdn.simpleicons.org/facebook/1877F2",
  },
  {
    name: "MS Teams",
    icon: "teams",
    color: "#6264a7",
    href: "https://www.microsoft.com/en-us/microsoft-teams/download-app",
    iconUrl: "https://cdn.simpleicons.org/microsoftteams/6264A7",
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
  const [failed, setFailed] = useState(false);
  const social = socialLinks.find((item) => item.icon === name);

  if (!social) {
    return null;
  }

  if (name === "teams" || failed) {
    return <FallbackBrandIcon name={name} color={color} size={size} />;
  }

  return (
    <img
      src={social.iconUrl}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{
        display: "block",
        width: size,
        height: size,
        objectFit: "contain",
      }}
    />
  );
}

function FallbackBrandIcon({
  name,
  color,
  size,
}: {
  name: Social["icon"];
  color: string;
  size: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    style: { display: "block" },
  };

  switch (name) {
    case "teams":
      return (
        <svg {...common}>
          <path fill="#7B83EB" d="M29 7h7a5 5 0 0 1 5 5v7H29V7Z" />
          <path fill="#5059C9" d="M29 18h10a5 5 0 0 1 5 5v8a7 7 0 0 1-14 0V18Z" />
          <path fill="#6264A7" d="M7 14h23a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z" />
          <path fill="#fff" d="M25 22.2h-5.2V35h-4.1V22.2h-5.1V18.8H25v3.4Z" />
          <circle cx="34.5" cy="13" r="5" fill="#7B83EB" />
          <circle cx="39" cy="26" r="4" fill="#5059C9" />
        </svg>
      );
    case "snapchat":
      return (
        <svg {...common}>
          <path fill="#FFFC00" stroke="#111" strokeWidth="1.8" d="M24 8.5c5.05 0 8.25 3.55 8.25 8.9 0 1.65-.2 3.1-.25 4.25.95.65 2.1.98 3.4 1.05-.95 1.65-2.3 2.65-4.05 2.95.9 2.8 3 5 6.35 6.65-2.75.35-4.65.98-5.7 1.95-1.25 1.15-2.75-.25-4.7.18-1.15.25-2 1-3.3 1s-2.15-.75-3.3-1c-1.95-.43-3.45.97-4.7-.18-1.05-.97-2.95-1.6-5.7-1.95 3.35-1.65 5.45-3.85 6.35-6.65-1.75-.3-3.1-1.3-4.05-2.95 1.3-.07 2.45-.4 3.4-1.05-.05-1.15-.25-2.6-.25-4.25 0-5.35 3.2-8.9 8.25-8.9Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill={color} viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.607ZM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232Z" />
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
