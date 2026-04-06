import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Special Holiday Menu | Tarpy's Monterey CA",
};

export default function SpecialHolidayMenuPage() {
  return (
    <>
      <SiteHeader />

      <PageHero title="Special Holiday Menu" bgImage="/images/hero-holiday-menu.jpg" />

      <section
        className="bg-parchment"
        style={{
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          className="headline-primary"
          style={{
            fontFamily: "var(--font-amatic), cursive",
            fontSize: 52,
            fontWeight: 700,
            color: "#055a6f",
            textTransform: "uppercase",
            letterSpacing: 6,
            textAlign: "center",
            margin: "0 0 40px",
          }}
        >
          Special Holiday Menu
        </h1>

        <p
          style={{
            fontFamily: "var(--font-cabin), sans-serif",
            fontSize: 15,
            color: "#555",
            textAlign: "center",
            maxWidth: 600,
            marginBottom: 24,
          }}
        >
          Holiday menus are updated seasonally. Please check back closer to the
          holiday or call us at (831) 647-1444 for current specials.
        </p>

        <div style={{ width: "100%", maxWidth: 960 }}>
          <iframe
            src="//places.singleplatform.com/tarpys-roadhouse/menu?ref=google"
            width="100%"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            title="Tarpy's Special Holiday Menu"
          />
        </div>

        <p
          style={{
            fontFamily: "var(--font-cabin), sans-serif",
            fontSize: 13,
            color: "#888",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Menu powered by SinglePlatform
        </p>

        <a
          href="https://www.tarpys.com/special-holiday-menu/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
          style={{ marginTop: 24 }}
        >
          View on tarpys.com
        </a>
      </section>

      <SiteFooter />
    </>
  );
}
