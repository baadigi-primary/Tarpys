import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Happy Hour & Bar Menu | Tarpy's Monterey CA",
};

export default function HappyHourBarPage() {
  return (
    <>
      <SiteHeader />

      <PageHero title="Happy Hour & Bar Menu" bgImage="/images/hero-happy-hour.jpg" />

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
          Happy Hour &amp; Bar
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
          The menu below is provided by SinglePlatform. If it does not load,
          please use the link below to view our full menu on tarpys.com.
        </p>

        <div style={{ width: "100%", maxWidth: 960 }}>
          <iframe
            src="//places.singleplatform.com/tarpys-roadhouse/menu?ref=google"
            width="100%"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            title="Tarpy's Happy Hour & Bar Menu"
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
          href="https://www.tarpys.com/happy-hour-bar/"
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
