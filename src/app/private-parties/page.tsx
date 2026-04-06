import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Private Events | Tarpy's Monterey CA",
};

const rooms = [
  {
    subtitle: "The Great Outdoors",
    name: "Front Porch",
    description:
      "Our vine-covered front porch is perfect for an intimate dinner party.",
    capacity: "Seats 22 | Standing reception 20",
  },
  {
    subtitle: "Small is Beautiful",
    name: "The Tack Room",
    description:
      "Warm and cozy, this room is perfect for a business lunch or small dinner party.",
    capacity: "Seats 12",
  },
  {
    subtitle: "Family + Friends",
    name: "The Shell Room",
    description:
      "Lined with vintage photos and a fireplace, this room is great for celebrations.",
    capacity: "Seats 22 | Standing/Cocktails 15",
  },
  {
    subtitle: "Room with a View",
    name: "Vintners Room",
    description:
      "Our wine barrel themed room with garden views is perfect for wine dinners.",
    capacity: "Seats 32 | Standing/Cocktails 20",
  },
  {
    subtitle: "Power Lunch",
    name: "Sarah's Room",
    description:
      "A bright, airy room perfect for corporate meetings and luncheons.",
    capacity: "Seats 26",
  },
  {
    subtitle: "Not Just for Bookworms",
    name: "The Library",
    description:
      "Our largest indoor space, ideal for rehearsal dinners and holiday parties.",
    capacity: "Seats 80 | Standing/Cocktails 120",
  },
  {
    subtitle: "Alfresco",
    name: "The Courtyard",
    description:
      "Our beautiful outdoor courtyard under the oaks, perfect for receptions.",
    capacity: "Standing/Cocktails 100",
  },
];

export default function PrivatePartiesPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Private Events"
        subtitle="Parties Are Us"
        bgImage="/images/hero-parties.jpg"
      />

      {/* Intro Section */}
      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="headline-secondary" style={{ margin: 0 }}>
            The Party&apos;s at Tarpy&apos;s
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
            Tarpy&apos;s offers intimate patios, private, semi-private dining
            rooms and courtyards along with an events team specializing in YOU.
            Custom menus, creative cocktails and wine pairings are all part of
            what we do!
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#333",
              marginBottom: 32,
            }}
          >
            Contact our events team today for assistance with your plans. Choose
            a date and let&apos;s get started!
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="tel:+18316552999" className="btn-cta">
              Call 831.655.2999
            </a>
            <a href="mailto:banquet@tarpys.com" className="btn-cta">
              Email
            </a>
            <a
              href="https://www.tarpys.com/onsite-party-inquiry/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Room Listings */}
      <section className="bg-parchment" style={{ padding: "0 20px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {rooms.map((room, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={room.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                  alignItems: "center",
                  marginBottom: 60,
                }}
                className="room-card"
              >
                {/* Image placeholder */}
                <div
                  style={{
                    background: "#055a6f",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 300,
                    fontFamily: "var(--font-amatic), cursive",
                    fontSize: 32,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 3,
                    order: imageLeft ? 0 : 1,
                  }}
                >
                  {room.name}
                </div>

                {/* Text */}
                <div
                  style={{
                    order: imageLeft ? 1 : 0,
                  }}
                >
                  <h3
                    className="headline-secondary"
                    style={{ fontSize: 42, margin: "0 0 4px" }}
                  >
                    {room.subtitle}
                  </h3>
                  <h4
                    className="headline-primary"
                    style={{ fontSize: 28, margin: "0 0 16px" }}
                  >
                    {room.name}
                  </h4>

                  <Image
                    src="/images/divider-icon.png"
                    alt=""
                    width={30}
                    height={30}
                    style={{ marginBottom: 16 }}
                  />

                  <p
                    style={{
                      fontFamily: "var(--font-cabin), sans-serif",
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "#333",
                      marginBottom: 12,
                    }}
                  >
                    {room.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-cabin), sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#055a6f",
                    }}
                  >
                    {room.capacity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .room-card {
              grid-template-columns: 1fr !important;
            }
            .room-card > div {
              order: unset !important;
            }
          }
        `}</style>
      </section>

      <SiteFooter />
    </>
  );
}
