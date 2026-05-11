"use client";

import { useState } from "react";
import Link from "next/link";

const quickGuides = [
  { icon: "⚡", title: "How to Make a Lantern", slug: "/guides/lantern" },
  { icon: "🧪", title: "Brewing Guide", slug: "/guides/brewing" },
  { icon: "✨", title: "Enchanting Explained", slug: "/guides/enchanting" },
  { icon: "🍖", title: "Food Guide", slug: "/guides/food" },
  { icon: "🐄", title: "Mob Farming 101", slug: "/guides/mob-farming" },
];

const socials = [
  {
    label: "YouTube",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" /></svg>,
    href: "#", hoverColor: "#CC4444",
  },
  {
    label: "Discord",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4a15.5 15.5 0 0 0-3.8-1.2.1.1 0 0 0-.1 0 10.8 10.8 0 0 0-.5 1 14.3 14.3 0 0 0-4.3 0 11 11 0 0 0-.5-1 .1.1 0 0 0-.1 0A15.4 15.4 0 0 0 3.7 4a.1.1 0 0 0-.1 0C.5 8.7-.3 13.4.1 18a.1.1 0 0 0 0 .1 15.6 15.6 0 0 0 4.7 2.4.1.1 0 0 0 .1 0 11.2 11.2 0 0 0 1-1.6.1.1 0 0 0-.1-.1 10.3 10.3 0 0 1-1.5-.7.1.1 0 0 1 0-.1l.3-.2a.1.1 0 0 1 .1 0c3.2 1.5 6.6 1.5 9.7 0a.1.1 0 0 1 .1 0l.3.2a.1.1 0 0 1 0 .2 9.6 9.6 0 0 1-1.5.7.1.1 0 0 0-.1.1 11.5 11.5 0 0 0 1 1.6.1.1 0 0 0 .1 0 15.5 15.5 0 0 0 4.7-2.4.1.1 0 0 0 0-.1c.5-5.2-.8-9.8-3.5-13.9a.1.1 0 0 0-.1 0zM8 15.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z" /></svg>,
    href: "#", hoverColor: "#6070C8",
  },
  {
    label: "Instagram",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>,
    href: "#", hoverColor: "#C06080",
  },
  {
    label: "Pinterest",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>,
    href: "#", hoverColor: "#C04040",
  },
  {
    label: "X",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 1h3.5l-7.6 8.7 8.9 11.8H16l-5.5-7.2-6.3 7.2H.7l8.2-9.3L.4 1h7.4l5 6.6L18.3 1zm-1.2 18.4h1.9L7 2.9H4.9l12.2 16.5z" /></svg>,
    href: "#", hoverColor: "#C0B89A",
  },
];

const widgetStyle = {
  background: "rgba(13,24,17,0.80)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  backdropFilter: "blur(6px)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.04)",
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "14px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  background: "rgba(8,16,11,0.60)",
};

export default function Sidebar() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredGuide, setHoveredGuide] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

      {/* Quick Guides */}
      <div style={widgetStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: "13px" }}>⚡</span>
          <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D6C7A1", margin: 0 }}>
            Quick Guides
          </h3>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {quickGuides.map((guide, i) => (
            <li key={i} style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <Link
                href={guide.slug}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "12px 18px",
                  textDecoration: "none",
                  background: hoveredGuide === i ? "rgba(255,255,255,0.03)" : "transparent",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={() => setHoveredGuide(i)}
                onMouseLeave={() => setHoveredGuide(null)}
              >
                <span style={{ fontSize: "14px", flexShrink: 0 }}>{guide.icon}</span>
                <span style={{
                  fontSize: "12px", fontWeight: 500, lineHeight: 1.4, flex: 1,
                  color: hoveredGuide === i ? "#D6C7A1" : "#7a7060",
                  transition: "color 0.25s ease",
                }}>
                  {guide.title}
                </span>
                <span style={{
                  fontSize: "11px", flexShrink: 0,
                  color: hoveredGuide === i ? "rgba(212,146,74,0.70)" : "rgba(255,255,255,0.10)",
                  transition: "color 0.25s ease",
                }}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div style={widgetStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: "13px" }}>✉️</span>
          <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D6C7A1", margin: 0 }}>
            Stay Updated
          </h3>
        </div>
        <div style={{ padding: "20px 18px" }}>
          {subscribed ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>🎉</div>
              <p style={{ fontWeight: 700, fontSize: "13px", color: "#D6C7A1", margin: "0 0 4px 0" }}>You&apos;re subscribed!</p>
              <p style={{ fontSize: "11px", color: "#4A4440", margin: 0 }}>Check your inbox for a welcome gift.</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "12px", color: "#6a6050", lineHeight: 1.65, margin: "0 0 16px 0" }}>
                Get new tutorials and cozy updates straight to your inbox.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  style={{
                    width: "100%", padding: "10px 12px", fontSize: "12px",
                    background: "rgba(4,10,6,0.60)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px", color: "#EDE6D6", outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    width: "100%", padding: "10px", fontSize: "10px",
                    fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
                    background: "linear-gradient(135deg, rgba(40,90,55,0.90), rgba(28,65,40,0.90))",
                    color: "#D6C7A1",
                    border: "1px solid rgba(60,120,75,0.40)",
                    borderRadius: "6px", cursor: "pointer",
                    transition: "opacity 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Subscribe →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Follow Us */}
      <div style={widgetStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: "13px" }}>🌐</span>
          <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D6C7A1", margin: 0 }}>
            Follow the Raccoon
          </h3>
        </div>
        <div style={{ padding: "16px 18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {socials.map((s) => (
            
              key={s.label}
              href={s.href}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 12px",
                background: hoveredSocial === s.label ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", textDecoration: "none",
                color: hoveredSocial === s.label ? s.hoverColor : "#6a6050",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={() => setHoveredSocial(s.label)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <span style={{ color: hoveredSocial === s.label ? s.hoverColor : "#4a4440", transition: "color 0.25s ease" }}>
                {s.icon}
              </span>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em" }}>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
}
