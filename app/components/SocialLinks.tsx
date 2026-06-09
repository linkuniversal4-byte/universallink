"use client";
import { useState } from "react";

type Social = {
  name: string;
  icon: "whatsapp" | "youtube" | "tiktok" | "snapchat" | "facebook" | "telegram";
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
    name: "Telegram",
    icon: "telegram",
    color: "#0088cc",
    href: "https://t.me/universallink",
    iconUrl: "https://cdn.simpleicons.org/telegram/0088CC",
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

  if (name === "telegram" || failed) {
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
    case "telegram":
      return (
        <svg {...common}>
          <path fill="#0088cc" d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4Zm9.04 14.04-3.12 14.72c-.24 1.04-.84 1.28-1.68.8l-4.64-3.44-2.24 2.16c-.24.24-.44.44-.92.44l.32-4.68 8.52-7.68c.36-.32-.08-.52-.56-.2l-10.52 6.64-4.56-1.44c-1-.32-1.02-1 .2-1.48l17.8-6.88c.84-.28 1.56.2 1.28 1.28Z" />
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
