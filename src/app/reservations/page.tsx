import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Reservations | Tarpy's Monterey CA",
};

const OPENTABLE_URL =
  "https://www.opentable.com/restaurant/profile/44596/reserve?rid=44596&restref=44596";

export default function ReservationsPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Reservations"
        subtitle="Alfresco or Indoors?"
        bgImage="/images/hero-reservations.jpg"
      />

      <section
        className="bg-parchment"
        style={{
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: 700,
            width: "100%",
            textAlign: "center",
            fontFamily: "var(--font-cabin), sans-serif",
          }}
        >
          <h2 className="headline-secondary">Book Online</h2>

          <h3 className="headline-primary">It&rsquo;s Easy</h3>

          <Image
            src="/images/divider-icon.png"
            alt=""
            width={40}
            height={40}
            style={{ margin: "20px auto", display: "block" }}
          />

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", margin: "20px 0" }}>
            Reserve your table online on OpenTable or give us a call at{" "}
            <a
              href="tel:8316471444"
              style={{ color: "#cf723d", textDecoration: "none" }}
            >
              (831) 647-1444
            </a>
            .
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", margin: "0 0 36px" }}>
            As one of Monterey&rsquo;s top dining destinations, Tarpy&rsquo;s will always do
            our best to accommodate you.
          </p>

          <a
            href={OPENTABLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            Find a Table on OpenTable
          </a>

          <div style={{ margin: "40px 0 36px" }}>
            <a
              href={OPENTABLE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/opentable-dc-2025.png"
                alt="OpenTable Diners' Choice 2025"
                width={180}
                height={180}
                style={{ margin: "0 auto", display: "block" }}
              />
            </a>
          </div>

          <p
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              fontSize: 14,
              color: "#333",
              margin: "0 0 8px",
            }}
          >
            Reserve by Phone
          </p>

          <a
            href="tel:8316471444"
            style={{
              color: "#cf723d",
              fontSize: 20,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            (831) 647-1444
          </a>

          <p style={{ fontSize: 15, color: "#555", marginTop: 16 }}>
            Open Daily from 11:30am
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
