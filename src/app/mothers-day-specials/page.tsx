import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mother's Day Specials | Tarpy's Monterey CA",
};

export default function MothersDaySpecialsPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Mother's Day Specials"
        subtitle="Celebrate Mother's Day in Style with Coastal Roots"
        bgImage="/images/hero-mothers-day.jpg"
      />

      {/* Intro Section */}
      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="headline-secondary" style={{ margin: 0 }}>
            Make Mom Feel Extraordinary on May 11, 2025
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              marginTop: "20px",
            }}
          >
            <strong>
              With exclusive promotions, luxurious dining, and a heartfelt
              celebration across our three Coastal Roots restaurants on the
              Monterey Peninsula.
            </strong>
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              marginTop: "16px",
            }}
          >
            Every mother dining with us on Mother&apos;s Day receives:
          </p>

          <ul
            style={{
              listStyle: "disc",
              display: "inline-block",
              textAlign: "left",
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: 2,
              marginTop: "8px",
            }}
          >
            <li>A FREE GIFT, hand-selected with love</li>
            <li>Our signature &ldquo;Mom&rdquo;osa Specialty Drink</li>
          </ul>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <a href="tel:8316552999" className="btn-cta">
              Call 831.655.2999
            </a>
            <a href="mailto:banquet@tarpys.com" className="btn-cta">
              Email
            </a>
            <Link href="/onsite-party-inquiry" className="btn-cta">
              Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Early Reservation Raffle */}
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
              src="/images/mothers-day-raffle.jpg"
              alt="Early Reservation Raffle"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h2 className="headline-primary" style={{ margin: "0 0 16px" }}>
              Early Reservation Raffle
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Make your reservation by end of day May 7, 2025 and you could be
              one of two lucky winners to have your entire Mother&apos;s Day
              celebration PAID FOR by Coastal Roots! Up to $300 in credit toward
              food and non-alcoholic beverages.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/reservations" className="btn-cta">
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Contest */}
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
          <div>
            <h2 className="headline-primary" style={{ margin: "0 0 16px" }}>
              Social Media Tag Us and Win
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              Follow us and share the love! Tag 3 friends on our Mother&apos;s
              Day ad. Winners get Brunch or Dinner for 4 on May 11.
            </p>
          </div>
          <div>
            <Image
              src="/images/mothers-day-social.jpg"
              alt="Social Media Contest"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Double Points */}
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
              src="/images/mothers-day-points.jpg"
              alt="Double Points"
              width={600}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <h2 className="headline-primary" style={{ margin: "0 0 16px" }}>
              Loyalty Members Get More — Double Points!
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              All Coastal Roots Loyalty Members will earn 2X the points when
              they dine on Mother&apos;s Day.
            </p>
            <div style={{ marginTop: "24px" }}>
              <a
                href="https://www.toasttab.com/coastalrootshospitality/rewardsSignup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Sign Up for Rewards
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
