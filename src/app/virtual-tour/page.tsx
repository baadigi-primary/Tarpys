import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Virtual Tour | Tarpy's Monterey CA",
};

export default function VirtualTourPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Virtual Tour"
        bgImage="/images/hero-virtual-tour.jpg"
      />

      <section
        className="bg-parchment"
        style={{ padding: "80px 20px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#333",
              textAlign: "center",
              marginBottom: 48,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Step inside and experience the charm of Tarpy&apos;s Roadhouse from
            wherever you are. Our virtual tour invites you to explore the rustic
            elegance of our stone patios, lush gardens, and warm dining
            spaces—setting the perfect scene for unforgettable meals and
            memories. Take a look around and imagine your next visit with us.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
            className="tour-grid"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1485879156104!6m8!1m7!1swx0ka8D_Ec0AAAQZCi8wGw!2m2!1d36.58250209066589!2d-121.8300426953137!3f124.9!4f-15.530000000000001!5f0.7820865974627469"
              height={425}
              style={{ width: "100%", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1485879413132!6m8!1m7!1sVUiOuLZl0wcAAAQZCqTDNg!2m2!1d36.58242324509105!2d-121.830171727595!3f44.94!4f-9.620000000000005!5f0.7820865974627469"
              height={425}
              style={{ width: "100%", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .tour-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  );
}
