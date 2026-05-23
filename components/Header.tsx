"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Guides",   href: "/category/guide" },
  { label: "Builds",   href: "/category/build" },
  { label: "Survival", href: "/category/survival" },
  { label: "Seeds",    href: "/category/seeds" },
  { label: "Tools",    href: "/articles" },
  { label: "About",    href: "/about" },
];

function HomeIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z" />
      <path d="M9 21V13h6v8" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        background: "rgba(7,12,10,0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.22)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="py-2">
            <Image src="/LOGO_HORIZONTAL.png" alt="The Little Raccoon" width={200} height={60} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {/* HOME â€” active item */}
            <Link
              href="/"
              className="px-4 py-1 flex flex-col items-center gap-0.5"
              style={{ color: "#D6C7A1" }}
            >
              <HomeIcon />
              <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.12em" }}>
                HOME
              </span>
              <span style={{ display: "block", height: 2, width: "100%", backgroundColor: "#D6C7A1", borderRadius: 1 }} />
            </Link>

            {navLinks.map((link) => (
              <Fragment key={link.href}>
                <span
                  style={{ width: 1, height: 16, backgroundColor: "#2F5D3A", display: "block", flexShrink: 0 }}
                />
                <Link
                  href={link.href}
                  className="nav-link px-4 py-2 text-[11px] font-semibold uppercase"
                  style={{ color: "#8A8268", letterSpacing: "0.12em" }}
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-2"
              style={{ color: "#4A4440" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D6C7A1")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#4A4440")}
            >
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <Link
              href="/newsletter"
              className="subscribe-btn px-4 py-2 text-[11px] font-bold uppercase"
              style={{
                background: "linear-gradient(180deg, rgba(61,126,79,0.95), rgba(38,91,55,0.95))",
                color: "#EDE6D6",
                letterSpacing: "0.14em",
                border: "1px solid rgba(245,238,220,0.12)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
                borderRadius: "8px",
              }}
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: "#D6C7A1" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(7,12,10,0.92)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            <Link
              href="/"
              className="px-3 py-2.5 text-sm font-semibold uppercase flex items-center gap-2"
              style={{ color: "#D6C7A1", letterSpacing: "0.1em", borderBottom: "2px solid #D6C7A1" }}
              onClick={() => setMenuOpen(false)}
            >
              <HomeIcon />
              HOME
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-semibold uppercase"
                style={{ color: "#8A8268", letterSpacing: "0.1em" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

