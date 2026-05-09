"use client";

import { Fragment, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Guides",   href: "/guides" },
  { label: "Builds",   href: "/builds" },
  { label: "Survival", href: "/survival" },
  { label: "Seeds",    href: "/seeds" },
  { label: "Tools",    href: "/tools" },
  { label: "About",    href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#0B1411", borderBottom: "1px solid #1E3028" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <img src="/LOGO_HORIZONTAL.png" alt="The Little Raccoon" width={200} height={60} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 && (
                  <span
                    style={{ width: 1, height: 16, backgroundColor: "#2F5D3A", display: "block", flexShrink: 0 }}
                  />
                )}
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[11px] font-semibold uppercase"
                  style={{ color: "#8A8268", letterSpacing: "0.12em" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#D6C7A1";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#8A8268";
                  }}
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
              className="px-4 py-2 text-[11px] font-bold uppercase"
              style={{ backgroundColor: "#2F5D3A", color: "#EDE6D6", letterSpacing: "0.14em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#3A7048")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2F5D3A")}
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
        <div style={{ backgroundColor: "#0B1411", borderTop: "1px solid #1E3028" }}>
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
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
