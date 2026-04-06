import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Catering Photos | Tarpy's Monterey CA",
};

const captions: Record<number, string> = {
  2: "Private Party",
  5: "Twisted Roots Winery",
  12: "Make a Wish Foundation",
  14: "Carmel Wedding",
  19: "Carmel Wedding",
  20: "Private Birthday",
  21: "Private Party",
  24: "Twisted Roots Winery",
};

const photos = Array.from({ length: 24 }, (_, i) => i + 1);

export default function CateringPhotosPage() {
  return (
    <>
      <SiteHeader />

      <PageHero title="Catering Photos" bgImage="/images/hero-catering.jpg" />

      <section
        className="bg-parchment"
        style={{ padding: "80px 20px" }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 8,
          }}
        >
          {photos.map((num) => (
            <div key={num}>
              <Image
                src={`/images/catering-photo-${num}.jpg`}
                alt={captions[num] || `Catering photo ${num}`}
                width={426}
                height={240}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {captions[num] && (
                <p
                  style={{
                    fontFamily: "var(--font-cabin), sans-serif",
                    fontSize: 13,
                    color: "#555",
                    margin: "4px 0 12px",
                    textAlign: "center",
                  }}
                >
                  {captions[num]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
