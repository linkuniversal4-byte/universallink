"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { BrandIcon, socialLinks } from "./SocialLinks";

const courseCategories = [
  {
    label: "Quran",
    icon: "📖",
    sub: [
      { key: "nazara", label: "Nazara" },
      { key: "tajweed", label: "Tajweed" },
      { key: "tafseer", label: "Tafseer" },
      { key: "hifz", label: "Quran Memorization (Hifz-ul-Quran)" },
    ],
  },
  {
    label: "English",
    icon: "🇬🇧",
    sub: [
      { key: "grammar", label: "Grammar" },
      { key: "speaking", label: "Speaking" },
      { key: "reading", label: "Reading" },
      { key: "writing", label: "Writing" },
    ],
  },
  {
    label: "Science",
    icon: "🔬",
    sub: [
      { key: "physics", label: "Physics" },
      { key: "chemistry", label: "Chemistry" },
      { key: "biology", label: "Biology" },
      { key: "mathematics", label: "Mathematics" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const coursesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!coursesOpen) setActiveSub(null);
  }, [coursesOpen]);

  const handleMouseEnter = () => {
    if (coursesTimer.current) clearTimeout(coursesTimer.current);
    setCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    coursesTimer.current = setTimeout(() => {
      setCoursesOpen(false);
    }, 150);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: "white",
      boxShadow: scrolled ? "0 2px 20px rgba(26,46,110,0.12)" : "0 1px 0 #e2e8f0",
      width: "100%",
      transition: "box-shadow 0.3s ease",
    }}>
      <div className="nav-inner" style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        <a className="brand-link" href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <img className="brand-logo" src="/logo.png" alt="Universal Link Online Academy" style={{ height: 42 }} />
          <div className="brand-copy" style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: "#1a2e6e", letterSpacing: "0.05em" }}>UNIVERSAL LINK</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#f5a623", letterSpacing: "0.12em" }}>ONLINE ACADEMY</div>
          </div>
        </a>

        <div className="desktop-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  style={{
                    padding: "8px 12px",
                    fontSize: 13,
                    fontWeight: activeLink === link.label ? 600 : 500,
                    color: activeLink === link.label ? "#1a2e6e" : "#475569",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    borderRadius: 8,
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => { if (activeLink !== link.label) e.currentTarget.style.background = "#f1f5f9"; }}
                  onMouseOut={(e) => { if (activeLink !== link.label) e.currentTarget.style.background = "transparent"; }}
                >
                  {link.label} <ChevronDown size={12} style={{ transition: "transform 0.25s ease", transform: coursesOpen ? "rotate(180deg)" : "none" }} />
                </span>
                <div
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "white",
                    borderRadius: 14,
                    boxShadow: "0 16px 48px rgba(26,46,110,0.18)",
                    border: "1px solid #e2e8f0",
                    padding: "6px",
                    minWidth: 240,
                    zIndex: 1001,
                    opacity: coursesOpen ? 1 : 0,
                    pointerEvents: coursesOpen ? "auto" : "none",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    transformOrigin: "top center",
                  }}
                >
                  {courseCategories.map((cat) => (
                    <div
                      key={cat.label}
                      onMouseEnter={() => setActiveSub(cat.label)}
                      onMouseLeave={() => setActiveSub(null)}
                      style={{
                        borderRadius: 10,
                        overflow: "hidden",
                        marginBottom: 2,
                      }}
                    >
                      <div
                        onClick={() => setActiveSub(activeSub === cat.label ? null : cat.label)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 14px",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1a2e6e",
                          cursor: "pointer",
                          background: activeSub === cat.label ? "#f1f5f9" : "transparent",
                          borderRadius: 10,
                          transition: "background 0.15s ease",
                        }}
                        onMouseOver={(e) => { if (activeSub !== cat.label) e.currentTarget.style.background = "#f8fafc"; }}
                        onMouseOut={(e) => { if (activeSub !== cat.label) e.currentTarget.style.background = "transparent"; }}
                      >
                        <span style={{ fontSize: 16, flexShrink: 0 }}>{cat.icon}</span>
                        <span style={{ flex: 1 }}>{cat.label}</span>
                        <ChevronDown size={12} style={{
                          color: "#94a3b8",
                          transition: "transform 0.25s ease",
                          transform: activeSub === cat.label ? "rotate(180deg)" : "none",
                        }} />
                      </div>
                      <div style={{
                        display: "grid",
                        gridTemplateRows: activeSub === cat.label ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.3s ease",
                      }}>
                        <div style={{ overflow: "hidden" }}>
                          <div style={{
                            padding: activeSub === cat.label ? "0 14px 10px 40px" : "0 14px 0 40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                          }}>
                            {cat.sub.map((sub) => (
                              <a
                                key={sub.key}
                                href={`/courses?subject=${cat.label.toLowerCase()}&sub=${sub.key}`}
                                onClick={() => { setActiveLink("Courses"); setCoursesOpen(false); setActiveSub(null); }}
                                style={{
                                  display: "block",
                                  padding: "6px 10px",
                                  fontSize: 13,
                                  color: "#475569",
                                  textDecoration: "none",
                                  borderRadius: 6,
                                  transition: "all 0.15s ease",
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.background = "#eef2ff"; e.currentTarget.style.color = "#1a2e6e"; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#475569"; }}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} onClick={() => setActiveLink(link.label)} style={{
                padding: "8px 12px",
                fontSize: 13,
                fontWeight: activeLink === link.label ? 600 : 500,
                color: activeLink === link.label ? "#1a2e6e" : "#475569",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderRadius: 8,
                transition: "all 0.2s ease",
              }}
                onMouseOver={(e) => { if (activeLink !== link.label) e.currentTarget.style.background = "#f1f5f9"; }}
                onMouseOut={(e) => { if (activeLink !== link.label) e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="desktop-socials" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "#f1f5f9"; e.currentTarget.style.borderColor = "#cbd5e1"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
              >
                <BrandIcon name={social.icon} color={social.color} size={17} />
              </a>
            ))}
          </div>

          <div className="mobile-socials" style={{ display: "none", alignItems: "center", gap: 3 }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                }}
              >
                <BrandIcon name={social.icon} color={social.color} size={15} />
              </a>
            ))}
          </div>

          <a href="/#contact" className="desktop-cta" style={{
            padding: "9px 14px",
            background: "#1a2e6e", color: "white",
            borderRadius: 8, textDecoration: "none",
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
            transition: "all 0.2s ease",
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#2a3f8f"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#1a2e6e"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <Calendar size={13} />
            Book Trial
          </a>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: "none",
            background: "none", border: "none",
            cursor: "pointer", padding: 4, color: "#1a2e6e",
          }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu" style={{
          padding: "8px 16px 20px",
          borderTop: "1px solid #eee",
          background: "white",
          maxHeight: "calc(100vh - 64px)",
          overflowY: "auto",
        }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <div
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    textDecoration: "none",
                    color: "#1a2e6e",
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {link.label}
                  <ChevronDown size={16} style={{
                    transition: "transform 0.3s ease",
                    transform: coursesOpen ? "rotate(180deg)" : "none",
                    color: "#94a3b8",
                  }} />
                </div>
                <div className="mobile-courses-inner" style={{
                  display: "grid",
                  gridTemplateRows: coursesOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s ease",
                }}>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{
                      paddingBottom: coursesOpen ? "12px" : "0",
                    }}>
                      {courseCategories.map((cat) => (
                        <div key={cat.label} style={{ marginBottom: 2 }}>
                          <div
                            onClick={() => setActiveSub(activeSub === cat.label ? null : cat.label)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "10px 12px",
                              fontSize: 14,
                              fontWeight: 600,
                              color: "#1a2e6e",
                              cursor: "pointer",
                              borderRadius: 8,
                              background: activeSub === cat.label ? "#f1f5f9" : "transparent",
                              userSelect: "none",
                            }}
                          >
                            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontSize: 16 }}>{cat.icon}</span>
                              {cat.label}
                            </span>
                            <ChevronDown size={14} style={{
                              transition: "transform 0.3s ease",
                              transform: activeSub === cat.label ? "rotate(180deg)" : "none",
                              color: "#94a3b8",
                            }} />
                          </div>
                          <div style={{
                            display: "grid",
                            gridTemplateRows: activeSub === cat.label ? "1fr" : "0fr",
                            transition: "grid-template-rows 0.3s ease",
                          }}>
                            <div style={{ overflow: "hidden" }}>
                              <div style={{
                                paddingLeft: 36,
                                paddingTop: activeSub === cat.label ? "4px" : "0",
                                paddingBottom: activeSub === cat.label ? "6px" : "0",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                              }}>
                                {cat.sub.map((sub) => (
                                  <a
                                    key={sub.key}
                                    href={`/courses?subject=${cat.label.toLowerCase()}&sub=${sub.key}`}
                                    onClick={() => { setMenuOpen(false); setActiveLink("Courses"); setCoursesOpen(false); setActiveSub(null); }}
                                    style={{
                                      display: "block",
                                      padding: "9px 12px",
                                      fontSize: 14,
                                      color: "#475569",
                                      textDecoration: "none",
                                      borderRadius: 6,
                                    }}
                                  >
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.label} href={link.href} onClick={() => { setMenuOpen(false); setActiveLink(link.label); }} style={{
                display: "block",
                padding: "14px 0",
                textDecoration: "none",
                color: "#1a2e6e",
                fontWeight: 500,
                fontSize: 15,
                borderBottom: "1px solid #f1f5f9",
              }}>
                {link.label}
              </a>
            )
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0 4px", flexWrap: "wrap" }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "1px solid #e2e8f0",
                }}
              >
                <BrandIcon name={social.icon} color={social.color} size={18} />
              </a>
            ))}
          </div>

          <a href="/#contact" onClick={() => setMenuOpen(false)} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 12,
            padding: "12px 16px",
            background: "#1a2e6e", color: "white",
            borderRadius: 8, textDecoration: "none",
            fontWeight: 600, fontSize: 14,
          }}>
            <Calendar size={15} /> Book Free Trial
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1040px) {
          .desktop-socials { display: none !important; }
        }
        @media (max-width: 900px) {
          .nav-inner {
            height: 54px !important;
            padding: 0 8px !important;
          }
          .brand-link {
            gap: 4px !important;
          }
          .brand-logo {
            height: 34px !important;
          }
          .nav-actions {
            gap: 2px !important;
          }
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-socials { display: flex !important; }
          .mobile-menu-btn {
            display: block !important;
            padding: 2px !important;
          }
        }
        @media (max-width: 420px) {
          .mobile-socials a {
            width: 22px !important;
            height: 22px !important;
          }
          .mobile-socials svg {
            width: 13px !important;
            height: 13px !important;
          }
          .brand-copy {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
