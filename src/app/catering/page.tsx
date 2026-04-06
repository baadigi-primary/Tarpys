import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Offsite Catering | Tarpy's Monterey CA",
};

const eventTypes = [
  "Corporate/Business",
  "Cocktail Parties/Mixer/Wine Tasting",
  "Outdoor Gatherings",
  "Weddings & Engagements",
  "Holiday Events",
  "Fundraisers/Philanthropy",
  "Family Reunions/Graduation/Birthdays",
];

const eventServices = [
  "Custom Menus",
  "Bar/Beverage Service",
  "Tableware and Specialty Linens",
  "Professional Staffing",
  "China/Silver/Glassware Rentals",
  "Partner Venues",
];

export default function CateringPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Custom Events • Celebrations • Entertaining"
        subtitle="Offsite Catering"
        bgImage="/images/hero-catering.jpg"
      />

      {/* Intro Section */}
      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="headline-secondary" style={{ margin: 0 }}>
            Let&apos;s Get the Party Started!
          </h2>

          <div style={{ margin: "24px auto" }}>
            <Image
              src="/images/divider-icon.png"
              alt=""
              width={40}
              height={40}
              style={{ margin: "0 auto" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <a
              href="https://www.tarpys.com/catering-faq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              FAQs
            </a>
            <a
              href="https://www.tarpys.com/cateringinquiry/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Inquiry
            </a>
            <a
              href="https://www.tarpys.com/catering-photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Photos
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#333",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Tarpy&apos;s in Monterey brings your celebration to life. From
            elegant corporate affairs to small casual gatherings, our Catering
            &amp; Event Specialists make entertaining easy and straightforward.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#333",
            }}
          >
            Contact us:{" "}
            <a
              href="mailto:events@coastalrootshospitality.com"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              events@coastalrootshospitality.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+18316552999"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              831.655.2999
            </a>
          </p>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="bg-parchment" style={{ padding: "0 20px 80px" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
          className="catering-columns"
        >
          {/* Types of Events */}
          <div>
            <h3
              className="headline-primary"
              style={{ fontSize: 26, marginBottom: 20 }}
            >
              Types of Events
            </h3>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: 24,
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 2,
                color: "#333",
              }}
            >
              {eventTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Event Services */}
          <div>
            <h3
              className="headline-primary"
              style={{ fontSize: 26, marginBottom: 20 }}
            >
              Event Services
            </h3>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: 24,
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 2,
                color: "#333",
              }}
            >
              {eventServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .catering-columns {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Bottom Banner */}
      <section
        style={{
          position: "relative",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            fill
            src="/images/hero-catering.jpg"
            alt=""
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-amatic), cursive",
              fontSize: 48,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Make Your Next Event Memorable — Invite Tarpy&apos;s Roadhouse to
            the Party!
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            Since 1999, Tarpy&apos;s catering team has been creating memorable
            events throughout Monterey County.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            All your favorite dishes are available for your next catered event.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
