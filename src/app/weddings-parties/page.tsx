import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Weddings | Tarpy's Monterey CA",
};

export default function WeddingsPartiesPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Weddings"
        subtitle="It's Your Story — Let Us Help You Tell It!"
        bgImage="/images/hero-weddings.jpg"
      />

      {/* Intro Section */}
      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Tarpy&apos;s is a creative American restaurant and wedding venue
            housed in a 1917 California stone ranch house. With picturesque
            patios and gardens, it&apos;s got all the makings for a special
            ceremony full of character.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              marginTop: "16px",
            }}
          >
            <a
              href="mailto:banquet@tarpys.com"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              banquet@tarpys.com
            </a>{" "}
            |{" "}
            <a
              href="tel:8316552999"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              831.655.2999
            </a>
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginTop: "24px",
              lineHeight: 2,
            }}
          >
            WEDDINGS &bull; ENGAGEMENT PARTIES &bull; BRIDAL SHOWERS &bull;
            REHEARSAL DINNERS &bull; FAMILY BRUNCH &bull; MORE
          </p>

          <div style={{ marginTop: "28px" }}>
            <a
              href="https://www.tarpys.com/wp-content/uploads/2019/01/tarpysbridalf2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Download Bridal Brochure
            </a>
          </div>
        </div>
      </section>

      {/* The Courtyard */}
      <section style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src="/images/wedding-courtyard.jpg"
              alt="The Courtyard"
              width={585}
              height={397}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 className="headline-secondary" style={{ margin: 0 }}>
              Hopeless Romantic
            </h3>
            <h2 className="headline-primary" style={{ margin: "8px 0 16px" }}>
              The Courtyard
            </h2>
            <Image
              src="/images/divider-icon.png"
              alt=""
              width={60}
              height={60}
              style={{ margin: "0 auto" }}
            />
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                marginTop: "16px",
              }}
            >
              The top choice for wedding ceremonies. Lush gardens surround this
              beautiful space with a distinctly European feel. The Courtyard is
              available for morning ceremonies between 9:30 and 10:30 a.m. and
              evenings between 4 and 5 p.m.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                marginTop: "12px",
              }}
            >
              <strong>Seats 80 | Standing reception/cocktails 100</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Library */}
      <section className="bg-parchment" style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3 className="headline-secondary" style={{ margin: 0 }}>
              You Won&apos;t Be Shushed!
            </h3>
            <h2 className="headline-primary" style={{ margin: "8px 0 16px" }}>
              The Library
            </h2>
            <Image
              src="/images/divider-icon.png"
              alt=""
              width={60}
              height={60}
              style={{ margin: "0 auto" }}
            />
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
                marginTop: "16px",
              }}
            >
              The Library provides a cozy, warm feel with fireplace, inspired
              art and a private garden patio; essentially everything you need to
              make your event a hit.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                marginTop: "12px",
              }}
            >
              <strong>Seats 80 | Standing reception/cocktails 120</strong>
            </p>
          </div>
          <div>
            <Image
              src="/images/wedding-library.jpg"
              alt="The Library"
              width={586}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-cabin), sans-serif",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Check out all our smaller gathering spaces.
        </p>
        <Link href="/private-parties" className="btn-cta">
          View All Rooms
        </Link>
      </section>

      {/* Floor Plan */}
      <section style={{ padding: "0 20px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 1024, margin: "0 auto" }}>
          <Image
            src="/images/wedding-floorplan.png"
            alt="Wedding floor plan"
            width={1024}
            height={733}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
