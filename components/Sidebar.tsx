"use client";

import { useState } from "react";
import Link from "next/link";

const quickGuides = [
  { icon: "🛏️", title: "How to survive your first night",     slug: "/guides/first-night" },
  { icon: "⚗️",  title: "Best enchantments for beginners",    slug: "/guides/enchantments-beginners" },
  { icon: "🏔️", title: "Finding diamonds: Y-level guide",    slug: "/guides/finding-diamonds" },
  { icon: "🐄",  title: "Easy starter food farm setup",       slug: "/guides/starter-food-farm" },
  { icon: "🔱",  title: "How to enter the End safely",        slug: "/guides/enter-the-end" },
];

const socials = [
  {
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
    href: "#",
    hoverColor: "#CC4444",
  },
  {
    label: "Discord",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.3 4a15.5 15.5 0 0 0-3.8-1.2.1.1 0 0 0-.1 0 10.8 10.8 0 0 0-.5 1 14.3 14.3 0 0 0-4.3 0 11 11 0 0 0-.5-1 .1.1 0 0 0-.1 0A15.4 15.4 0 0 0 3.7 4a.1.1 0 0 0-.1 0C.5 8.7-.3 13.4.1 18a.1.1 0 0 0 0 .1 15.6 15.6 0 0 0 4.7 2.4.1.1 0 0 0 .1 0 11.2 11.2 0 0 0 1-1.6.1.1 0 0 0-.1-.1 10.3 10.3 0 0 1-1.5-.7.1.1 0 0 1 0-.1l.3-.2a.1.1 0 0 1 .1 0c3.2 1.5 6.6 1.5 9.7 0a.1.1 0 0 1 .1 0l.3.2a.1.1 0 0 1 0 .2 9.6 9.6 0 0 1-1.5.7.1.1 0 0 0-.1.1 11.5 11.5 0 0 0 1 1.6.1.1 0 0 0 .1 0 15.5 15.5 0 0 0 4.7-2.4.1.1 0 0 0 0-.1c.5-5.2-.8-9.8-3.5-13.9a.1.1 0 0 0-.1 0zM8 15.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z" />
      </svg>
    ),
    href: "#",
    hoverColor: "#6070C8",
  },
  {
    label: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.3 1h3.5l-7.6 8.7 8.9 11.8H16l-5.5-7.2-6.3 7.2H.7l8.2-9.3L.4 1h7.4l5 6.6L18.3 1zm-1.2 18.4h1.9L7 2.9H4.9l12.2 16.5z" />
      </svg>
    ),
    href: "#",
    hoverColor: "#C0B89A",
  },
  {
    label: "Reddit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.9 7.9a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zm-5.9.5c2.1 0 4.7.8 4.7 2.4a8.5 8.5 0 0 1 1.3-.1A2.2 2.2 0 0 1 20 13c0 2.8-3.6 5-8 5s-8-2.2-8-5a2.2 2.2 0 0 1 2.1-2.2 8.5 8.5 0 0 1 1.3.1c0-1.6 2.6-2.5 4.6-2.5zM9.4 12a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 9.4 12zm5.2 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm-5.7 4.1c.8.5 1.9.8 3.1.8s2.3-.3 3.1-.8a.3.3 0 0 1 .4.5 6.3 6.3 0 0 1-3.5 1 6.3 6.3 0 0 1-3.5-1 .3.3 0 0 1 .4-.5z" />
      </svg>
    ),
    href: "#",
    hoverColor: "#C06040",
  },
];

function WidgetShell({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #1E3028",
        backgroundColor: "#132018",
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="px-5 py-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid #1E3028", backgroundColor: "#0F1F19" }}
      >
        <span style={{ color: "#D6C7A1", fontSize: "13px" }}>{icon}</span>
        <h3
          className="text-[11px] font-bold uppercase"
          style={{ color: "#D6C7A1", letterSpacing: "0.18em", fontFamily: "var(--font-oswald)" }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function Sidebar() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <aside className="flex flex-col gap-5">
      {/* Quick Guides */}
      <WidgetShell icon="⚡" title="Quick Guides">
        <ul>
          {quickGuides.map((guide, i) => (
            <li
              key={i}
              style={{ borderTop: i > 0 ? "1px solid #1E3028" : "none" }}
            >
              <Link
                href={guide.slug}
                className="flex items-center gap-3 px-5 py-3.5 group"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#19291F")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
              >
                <span className="text-base flex-shrink-0">{guide.icon}</span>
                <span
                  className="text-xs font-medium leading-snug group-hover:opacity-100 flex-1"
                  style={{ color: "#8A8268" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D6C7A1")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8A8268")}
                >
                  {guide.title}
                </span>
                <span className="ml-auto text-xs flex-shrink-0" style={{ color: "#1E3028" }}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </WidgetShell>

      {/* Newsletter */}
      <WidgetShell icon="📜" title="Newsletter">
        <div className="p-5">
          {subscribed ? (
            <div className="text-center py-5">
              <div className="text-3xl mb-3">🎉</div>
              <p className="font-bold text-sm mb-1" style={{ color: "#D6C7A1" }}>
                You&apos;re subscribed!
              </p>
              <p className="text-xs" style={{ color: "#4A4440" }}>
                Check your inbox for a welcome gift.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm mb-5" style={{ color: "#8A8268", lineHeight: "1.65" }}>
                Get weekly guides, the best seeds, and Redstone tricks delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2.5 text-sm"
                  style={{
                    backgroundColor: "#0B1411",
                    border: "1px solid #1E3028",
                    color: "#EDE6D6",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="w-full py-3 text-[11px] font-bold uppercase"
                  style={{
                    backgroundColor: "#D6C7A1",
                    color: "#0B1411",
                    letterSpacing: "0.14em",
                    fontFamily: "var(--font-oswald)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#EDE6D6")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#D6C7A1")}
                >
                  Subscribe Free →
                </button>
              </form>
              <p className="text-[11px] mt-3 text-center" style={{ color: "#4A4440" }}>
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </WidgetShell>

      {/* Social links */}
      <WidgetShell icon="🌐" title="Follow Us">
        <div className="p-4 grid grid-cols-2 gap-2">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="flex items-center gap-2 px-3 py-2.5"
              style={{
                backgroundColor: "#0F1F19",
                border: "1px solid #1E3028",
                color: "#4A4440",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = s.hoverColor;
                el.style.borderColor = "#243A2E";
                el.style.backgroundColor = "#132018";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#4A4440";
                el.style.borderColor = "#1E3028";
                el.style.backgroundColor = "#0F1F19";
              }}
            >
              {s.icon}
              <span className="text-[11px] font-semibold" style={{ letterSpacing: "0.06em" }}>
                {s.label}
              </span>
            </Link>
          ))}
        </div>
      </WidgetShell>
    </aside>
  );
}
