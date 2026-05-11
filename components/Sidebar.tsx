"use client";

import { useState } from "react";
import Link from "next/link";

const quickGuides = [
  { icon: "🏮", title: "How to Make a Lantern", slug: "/guides/lantern" },
  { icon: "🧪", title: "Brewing Guide", slug: "/guides/brewing" },
  { icon: "✨", title: "Enchanting Explained", slug: "/guides/enchanting" },
  { icon: "🍖", title: "Food Guide", slug: "/guides/food" },
  { icon: "🐄", title: "Mob Farming 101", slug: "/guides/mob-farming" },
];

const socials = [
  { label: "YouTube", emoji: "▶", href: "#", hoverColor: "#CC4444" },
  { label: "Discord", emoji: "💬", href: "#", hoverColor: "#6070C8" },
  { label: "Instagram", emoji: "📷", href: "#", hoverColor: "#C06080" },
  { label: "Pinterest", emoji: "📌", href: "#", hoverColor: "#C04040" },
  { label: "X", emoji: "✕", href: "#", hoverColor: "#C0B89A" },
];

const container: React.CSSProperties = {
  background: "rgba(13,24,17,0.92)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.40)",
  overflow: "hidden",
  position: "relative",
};

const header: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "13px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  background: "rgba(6,12,8,0.70)",
};

const titleStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#D6C7A1",
  margin: 0,
};

export default function Sidebar() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredGuide, setHoveredGuide] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

      {/* QUICK GUIDES */}
      <div style={container}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.30), transparent)", zIndex: 1 }} />
        <div style={header}>
          <span style={{ fontSize: "11px", color: "#D4924A" }}>⚡</span>
          <h3 style={titleStyle}>Quick Guides</h3>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", position: "relative", zIndex: 1 }}>
          {quickGuides.map((guide, i) => (
            <li key={i} style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <Link
                href={guide.slug}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "11px 18px", textDecoration: "none",
                  background: hoveredGuide === i ? "linear-gradient(90deg, rgba(212,146,74,0.06), transparent)" : "transparent",
                  transition: "background 0.30s ease",
                }}
                onMouseEnter={() => setHoveredGuide(i)}
                onMouseLeave={() => setHoveredGuide(null)}
              >
                <span style={{
                  fontSize: "14px", flexShrink: 0, width: "28px", height: "28px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: hoveredGuide === i ? "rgba(212,146,74,0.10)" : "rgba(255,255,255,0.03)",
                  borderRadius: "6px",
                  border: hoveredGuide === i ? "1px solid rgba(212,146,74,0.25)" : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.30s ease",
                }}>{guide.icon}</span>
                <span style={{
                  fontSize: "11px", fontWeight: 500, lineHeight: 1.4, flex: 1,
                  color: hoveredGuide === i ? "#C8B898" : "#6a6050",
                  transition: "color 0.30s ease",
                }}>{guide.title}</span>
                <span style={{
                  fontSize: "10px", flexShrink: 0,
                  color: hoveredGuide === i ? "rgba(212,146,74,0.60)" : "rgba(255,255,255,0.08)",
                  transition: "all 0.30s ease",
                }}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div style={{ ...container, background: "rgba(11,20,14,0.95)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.25), transparent)", zIndex: 1 }} />
        <div style={header}>
          <span style={{ fontSize: "11px", color: "#D4924A" }}>✉</span>
          <h3 style={titleStyle}>Stay Updated</h3>
        </div>
        <div style={{ padding: "20px 18px", position: "relative", zIndex: 1 }}>
          {subscribed ? (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>🎉</div>
              <p style={{ fontWeight: 700, fontSize: "12px", color: "#D6C7A1", margin: "0 0 4px 0" }}>You&apos;re in!</p>
              <p style={{ fontSize: "10px", color: "#4A4440", margin: 0 }}>Check your inbox.</p>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: "11px", color: "#5a5040", lineHeight: 1.70, margin: "0 0 16px 0" }}>
                Get new tutorials and cozy updates straight to your inbox.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  style={{
                    width: "100%", padding: "9px 12px", fontSize: "11px",
                    background: "rgba(4,8,5,0.80)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "6px", color: "#EDE6D6", outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  style={{
                    width: "100%", padding: "10px", fontSize: "9px",
                    fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase",
                    background: "linear-gradient(135deg, rgba(45,95,58,0.95), rgba(30,68,42,0.95))",
                    color: "#C8B898",
                    border: "1px solid rgba(60,120,75,0.35)",
                    borderRadius: "6px", cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.80")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Subscribe →
                </button>
              </div>
              <p style={{ fontSize: "9px", marginTop: "10px", textAlign: "center", color: "#3a3428" }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FOLLOW US */}
      <div style={container}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,146,74,0.20), transparent)", zIndex: 1 }} />
        <div style={header}>
          <span style={{ fontSize: "11px", color: "#D4924A" }}>🌿</span>
          <h3 style={titleStyle}>Follow the Raccoon</h3>
        </div>
        <div style={{ padding: "14px 18px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", position: "relative", zIndex: 1 }}>
          {socials.map((s) => (
            
              key={s.label}
              href={s.href}
              style={{
                display: "flex", alignItems: "center", gap: "7px",
                padding: "9px 11px",
                background: hoveredSocial === s.label ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                border: hoveredSocial === s.label ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(255,255,255,0.05)",
                borderRadius: "8px", textDecoration: "none",
                color: hoveredSocial === s.label ? s.hoverColor : "#5a5040",
                transition: "all 0.28s ease",
                fontSize: "11px", fontWeight: 600,
              }}
              onMouseEnter={() => setHoveredSocial(s.label)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <span style={{ fontSize: "12px" }}>{s.emoji}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
}