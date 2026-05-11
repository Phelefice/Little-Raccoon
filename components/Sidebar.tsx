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
  { label: "YouTube", href: "#", hoverColor: "#CC4444" },
  { label: "Discord", href: "#", hoverColor: "#6070C8" },
  { label: "Instagram", href: "#", hoverColor: "#C06080" },
  { label: "Pinterest", href: "#", hoverColor: "#C04040" },
  { label: "X", href: "#", hoverColor: "#C0B89A" },
];

const widgetStyle: React.CSSProperties = {
  background: "rgba(13,24,17,0.92)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.04)",
  overflow: "hidden",
};

const headerStyle: React.CSSProperties = {
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
                  padding: "12px 18px", textDecoration: "none",
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
                }}>{guide.title}</span>
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
                  onClick={() => { if (email) setSubscribed(true); }}
                  style={{
                    width: "100%", padding: "10px", fontSize: "10px",
                    fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
                    background: "linear-gradient(135deg, rgba(40,90,55,0.90), rgba(28,65,40,0.90))",
                    color: "#D6C7A1",
                    border: "1px solid rgba(60,120,75,0.40)",
                    borderRadius: "6px", cursor: "pointer",
                  }}
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
                fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em",
              }}
              onMouseEnter={() => setHoveredSocial(s.label)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
}
