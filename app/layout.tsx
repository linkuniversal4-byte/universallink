import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  return {
    title: "Universal Link Online Academy — Learn Anytime, Anywhere",
    description:
      "Live online classes with expert teachers for Quran, English, Math, Science, GCSE & NAPLAN. 500+ happy students worldwide.",
    keywords: "online education, Quran classes, English tuition, GCSE, NAPLAN, live classes",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-icon.png", sizes: "180x180" },
      ],
    },
  };
}

const sharedHead = (
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Playfair+Display:wght@700;800&display=swap"
      rel="stylesheet"
    />
  </head>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {sharedHead}
      <body>{children}</body>
    </html>
  );
}
