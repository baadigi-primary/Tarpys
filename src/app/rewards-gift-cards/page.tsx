import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Rewards & Gift Cards | Tarpy's Monterey CA",
};

export default function RewardsGiftCardsPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Rewards & Gift Cards"
        subtitle="Watch This Space"
        bgImage="/images/hero-rewards.jpg"
      />

      {/* Loyalty Section */}
      <section
        className="bg-parchment"
        style={{
          padding: "80px 20px",
          fontFamily: "var(--font-cabin), sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <h2 className="headline-secondary">Loyalty Pays</h2>
            <h3 className="headline-primary">Partner Program</h3>

            <Image
              src="/images/icon-fork-2.png"
              alt=""
              width={40}
              height={40}
              style={{ margin: "20px 0", display: "block" }}
            />

            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", margin: "20px 0" }}>
              The Coastal Roots Hospitality Rewards Card earns you points at
              Tarpy&rsquo;s, Rio Grill, and Montrio. Enjoy exclusive rewards,
              referral bonuses, and special perks.
            </p>

            <p
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                fontSize: 14,
                color: "#333",
                margin: "24px 0",
              }}
            >
              Rewards &bull; Referral &bull; Trade &bull; Training
            </p>

            <a
              href="https://www.toasttab.com/tarpys-coastalrootshospitality/rewardsSignup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Register Here
            </a>
          </div>

          <div>
            <Image
              src="/images/rewards-card.jpg"
              alt="Reward Dollars Card"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto", borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      {/* Transition Notice */}
      <section
        className="bg-parchment"
        style={{
          padding: "0 20px 60px",
          fontFamily: "var(--font-cabin), sans-serif",
        }}
      >
        <p
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            fontSize: 14,
            lineHeight: 1.8,
            color: "#666",
          }}
        >
          We have recently switched to Toast for our gift cards and loyalty
          program. For questions, contact{" "}
          <a
            href="mailto:CRHOffice@CoastalRootsHospitality.com"
            style={{ color: "#cf723d", textDecoration: "none" }}
          >
            CRHOffice@CoastalRootsHospitality.com
          </a>
        </p>
      </section>

      {/* Gift Cards Section */}
      <section
        className="bg-parchment"
        style={{
          padding: "60px 20px 80px",
          fontFamily: "var(--font-cabin), sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src="/images/rewards-card.jpg"
              alt="Reward Dollars Card"
              width={500}
              height={350}
              style={{ width: "100%", height: "auto", borderRadius: 4 }}
            />
          </div>

          <div>
            <h2 className="headline-secondary">Edible Perks</h2>
            <h3 className="headline-primary">Gift Cards</h3>

            <Image
              src="/images/icon-fork-1.png"
              alt=""
              width={40}
              height={40}
              style={{ margin: "20px 0", display: "block" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "24px 0" }}>
              <a
                href="https://www.toasttab.com/coastalrootshospitality/giftcards"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ textAlign: "center" }}
              >
                Purchase eGift Card
              </a>
              <a
                href="https://www.toasttab.com/coastalrootshospitality/findcard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ textAlign: "center" }}
              >
                Check Gift Card Balance
              </a>
            </div>

            <p
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                fontSize: 14,
                color: "#333",
                margin: "30px 0 8px",
              }}
            >
              Purchase a Physical Gift Card
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", margin: "0 0 16px" }}>
              Physical gift cards are available at any of our restaurants, or
              order by email or phone.
            </p>

            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
              <a
                href="mailto:CRHOffice@CoastalRootsHospitality.com"
                style={{ color: "#cf723d", textDecoration: "none" }}
              >
                CRHOffice@CoastalRootsHospitality.com
              </a>
              <br />
              <a
                href="tel:8316471085"
                style={{ color: "#cf723d", textDecoration: "none" }}
              >
                (831) 647-1085
              </a>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
