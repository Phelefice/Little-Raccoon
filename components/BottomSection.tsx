"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_GUIDES = [
  { icon: "🌾", label: "Best Starter Farms",    href: "/guides/starter-farms"    },
  { icon: "🏡", label: "Cozy Survival Bases",   href: "/guides/survival-bases"   },
  { icon: "⚡", label: "XP Farm Guide",          href: "/guides/xp-farm"          },
  { icon: "🗺️", label: "Early Game Tips",        href: "/guides/early-game"       },
  { icon: "💎", label: "How to Find Diamonds",   href: "/guides/diamonds"         },
];

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M20.3 4A18.2 18.2 0 0 0 16 2.8a12.5 12.5 0 0 0-.6 1.2 16.8 16.8 0 0 0-5 0A12.5 12.5 0 0 0 9.7 2.8 18.2 18.2 0 0 0 5.4 4C2.2 8.6 1.3 13 1.8 17.4a18.4 18.4 0 0 0 5.6 2.8 13.4 13.4 0 0 0 1.2-1.9 11.9 11.9 0 0 1-1.8-.9l.4-.3a13.1 13.1 0 0 0 11.2 0l.5.3a11.9 11.9 0 0 1-1.9.9 13.4 13.4 0 0 0 1.2 1.9 18.3 18.3 0 0 0 5.6-2.8c.5-5.2-.9-9.6-3.5-13.4zM8.7 14.7c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2zm6.6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7C24 15.7 24 15.3 24 12c0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.1 9.4 7.6 11.2-.1-.9-.2-2.4 0-3.4.2-.9 1.4-5.8 1.4-5.8s-.3-.7-.3-1.8c0-1.7.9-2.9 2.1-2.9 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-.9 3.8-.3 1.1.5 2 1.5 2 1.8 0 3.1-1.9 3.1-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.1-4.6 4.4 0 .9.3 1.8.7 2.3.1.1.1.2.1.3-.1.3-.2 1-.3 1.1-.1.1-.2.1-.3.1-1.3-.6-2.1-2.4-2.1-3.9 0-3.1 2.3-6 6.6-6 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.7 2.4c-.2.9-.9 2.1-1.4 2.8.7.2 1.5.3 2.2.3 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M18.9 1.2h3.5L14.8 10l8.9 11.8h-7.2l-5.4-7-6.2 7H1.4l8.1-9.2L1 1.2h7.4l4.9 6.5 5.6-6.5zM17.7 20h1.9L6.4 3.1H4.4L17.7 20z"/>
      </svg>
    ),
  },
];

// ─── Quick Guides Panel ────────────────────────────────────────────────────────

function QuickGuidesPanel() {
  return (
    <div
      style={{
        background: "rgba(20,19,10,0.85)",
        border: "1px solid rgba(200,168,75,0.15)",
        borderRadius: "24px",
        padding: "28px 24px",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#c8a84b",
          marginBottom: "4px",
        }}>
          ⚡ Quick Guides
        </p>
        <h3 style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#e8d9a0",
          fontFamily: "Georgia, serif",
          lineHeight: 1.2,
        }}>
          Jump Into a Guide
        </h3>
      </div>

      {/* Guide list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
        {QUICK_GUIDES.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              borderRadius: "12px",
              border: "1px solid transparent",
              transition: "all 0.2s ease",
              textDecoration: "none",
              color: "#a89660",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(200,168,75,0.07)";
              el.style.borderColor = "rgba(200,168,75,0.2)";
              el.style.color = "#e8d9a0";
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.borderColor = "transparent";
              el.style.color = "#a89660";
              el.style.transform = "translateX(0)";
            }}
          >
            <span style={{ fontSize: "15px", flexShrink: 0 }}>{g.icon}</span>
            <span style={{ fontSize: "13px", fontWeight: 500, flex: 1, lineHeight: 1.3 }}>
              {g.label}
            </span>
            <span style={{ fontSize: "11px", opacity: 0.5, flexShrink: 0 }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Newsletter Panel ──────────────────────────────────────────────────────────

function NewsletterPanel() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    if (email.trim()) {
      setSent(true);
      setEmail("");
    }
  }

  return (
    <div
      style={{
        borderRadius: "24px",
        padding: "28px 24px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(200,168,75,0.2)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(200,168,75,0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "rgba(20,19,10,0.9)",
      }}
    >
      {/* Warm glow */}
      <div style={{
        position: "absolute",
        top: "-40px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "200px",
        height: "120px",
        background: "radial-gradient(ellipse, rgba(200,168,75,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Icon + title */}
        <div>
          <div style={{ fontSize: "28px", marginBottom: "10px" }}>🦝</div>
          <p style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c8a84b",
            marginBottom: "6px",
          }}>
            Stay Updated
          </p>
          <h3 style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#e8d9a0",
            fontFamily: "Georgia, serif",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}>
            Cozy Updates,<br />Every Week
          </h3>
          <p style={{
            fontSize: "13px",
            color: "#7a6e44",
            lineHeight: 1.6,
          }}>
            New guides, seed picks and survival tips straight to your inbox. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* Form */}
        {sent ? (
          <div style={{
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(200,168,75,0.1)",
            border: "1px solid rgba(200,168,75,0.3)",
            color: "#c8a84b",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: "center",
          }}>
            ✓ You're in! Welcome to the den.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={{
                width: "100%",
                padding: "13px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(200,168,75,0.2)",
                background: "rgba(255,255,255,0.04)",
                color: "#e8d9a0",
                fontSize: "13px",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.5)"; }}
              onBlur={(e) => { e.target.style.borderColor = "rgba(200,168,75,0.2)"; }}
            />
            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "13px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(200,168,75,0.4)",
                background: "rgba(200,168,75,0.12)",
                color: "#c8a84b",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(200,168,75,0.22)";
                el.style.borderColor = "rgba(200,168,75,0.7)";
                el.style.color = "#e8d9a0";
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 4px 20px rgba(200,168,75,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(200,168,75,0.12)";
                el.style.borderColor = "rgba(200,168,75,0.4)";
                el.style.color = "#c8a84b";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              Subscribe →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Follow Us Panel ───────────────────────────────────────────────────────────

function FollowPanel() {
  return (
    <div
      style={{
        background: "rgba(20,19,10,0.85)",
        border: "1px solid rgba(200,168,75,0.15)",
        borderRadius: "24px",
        padding: "28px 24px",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#c8a84b",
          marginBottom: "4px",
        }}>
          🦝 Follow the Raccoon
        </p>
        <h3 style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#e8d9a0",
          fontFamily: "Georgia, serif",
          lineHeight: 1.2,
        }}>
          Join the Adventure
        </h3>
      </div>

      {/* Social pills */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        flex: 1,
        alignContent: "start",
      }}>
        {SOCIALS.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(200,168,75,0.15)",
              background: "rgba(255,255,255,0.03)",
              color: "#8a7d52",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(200,168,75,0.09)";
              el.style.borderColor = "rgba(200,168,75,0.35)";
              el.style.color = "#e8d9a0";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.03)";
              el.style.borderColor = "rgba(200,168,75,0.15)";
              el.style.color = "#8a7d52";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {s.icon}
            <span>{s.label}</span>
          </Link>
        ))}
      </div>

      {/* Tagline */}
      <p style={{
        marginTop: "20px",
        fontSize: "11px",
        color: "#4a4228",
        textAlign: "center",
        letterSpacing: "0.05em",
      }}>
        Made with ♥ for Minecraft explorers everywhere.
      </p>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export default function BottomSection() {
  return (
    <section style={{ padding: "60px 0 20px" }}>
      {/* Subtle divider */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.2), transparent)",
        marginBottom: "52px",
      }} />

      {/* 3-column grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        alignItems: "stretch",
      }}>
        <QuickGuidesPanel />
        <NewsletterPanel />
        <FollowPanel />
      </div>
    </section>
  );
}
