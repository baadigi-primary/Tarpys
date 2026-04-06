"use client";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Reservations", href: "/reservations" },
  { label: "Menus", href: "/menus" },
  { label: "Private Parties", href: "/private-parties" },
  { label: "Catering", href: "/catering" },
  { label: "News & Events", href: "/news-events" },
  { label: "Rewards & Gift Cards", href: "/rewards-gift-cards" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const navLinkStyle: React.CSSProperties = {
  fontSize: "12px",
  fontFamily: "var(--font-cabin), Cabin, sans-serif",
  fontWeight: 400,
  color: "white",
  textTransform: "uppercase",
  letterSpacing: "1px",
  padding: "12px",
  display: "inline-block",
  textDecoration: "none",
};

const activeNavLinkStyle: React.CSSProperties = {
  ...navLinkStyle,
  textDecoration: "underline",
};

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "106px",
        backgroundColor: "#055a6f",
        zIndex: 110,
        transition: "background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1)",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Mobile: hamburger (left) */}
        <button
          className="flex md:hidden items-center justify-center"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect y="4" width="24" height="2.5" rx="1" fill="white" />
            <rect y="11" width="24" height="2.5" rx="1" fill="white" />
            <rect y="18" width="24" height="2.5" rx="1" fill="white" />
          </svg>
        </button>

        {/* Logo */}
        <a href="/" style={{ lineHeight: 0 }}>
          <Image
            src="/images/tarpys-logo.png"
            alt="Tarpy's"
            width={180}
            height={80}
            style={{ height: "65px", width: "auto", objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={navLinkStyle}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Spacer for mobile balance */}
        <div className="flex md:hidden" style={{ width: "40px" }} aria-hidden="true" />
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "106px",
            left: 0,
            right: 0,
            backgroundColor: "#055a6f",
            zIndex: 120,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                ...navLinkStyle,
                fontSize: "14px",
                padding: "12px 24px",
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
