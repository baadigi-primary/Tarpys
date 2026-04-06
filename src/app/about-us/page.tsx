import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | Tarpy's Monterey CA",
};

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />

      {/* History section */}
      <section
        className="bg-parchment"
        style={{ paddingTop: 106, paddingBottom: 80, paddingLeft: 20, paddingRight: 20 }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "430px 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="about-history-grid"
        >
          {/* Left — Image */}
          <div>
            <Image
              src="/images/about-ranch.png"
              alt="Saucito Ranch"
              width={430}
              height={450}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>

          {/* Right — Text */}
          <div>
            <h1
              className="headline-secondary"
              style={{ margin: "0 0 24px" }}
            >
              Storied Past. Tasty Present.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              The name Tarpy comes from Matt Tarpy, an Irish settler who once
              lived near present-day Watsonville. Known locally as a respected
              horseman and enforcer of frontier justice. Tarpy&apos;s reputation
              took a dark turn following a dispute over land boundaries with
              neighbors Sarah and Murdock Nicholson. His version of
              &apos;accidental&apos; justice resulted in Sarah being shot, nine
              times. After being found guilty, a furious local mob took matters
              into their own hands. Tarpy was publicly hanged in the area now
              known as Tarpy Flats. The stunning stone building that now houses
              Tarpy&apos;s sits on 3.5 acres once part of the historic Ryan
              Ranch homestead. Construction started in the late 1800&apos;s and
              completed around 1917 by Charles and Alice Ryan, the home stood on
              454 acres of rolling hills and meadows once known as Saucito Ranch.
              Over the years, the property passed through various hands until it
              was transformed into Tarpy&apos;s in 1992, blending rich history
              with rustic elegance and award-winning cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team section */}
      <section
        className="bg-parchment"
        style={{ paddingBottom: 80, paddingLeft: 20, paddingRight: 20 }}
      >
        <h2
          className="headline-secondary"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          Meet the Team
        </h2>

        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
          className="about-team-grid"
        >
          {/* Patrick Fisher */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/team-patrick.png"
              alt="Patrick Fisher"
              width={130}
              height={130}
              style={{ borderRadius: "50%", marginBottom: 16 }}
            />
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#333",
                marginBottom: 4,
              }}
            >
              Patrick Fisher
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#055a6f",
                marginBottom: 16,
              }}
            >
              General Manager
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              Patrick has been part of the Coastal Roots Hospitality family since
              2019. New to the Monterey Peninsula at the time, he found a home
              with the restaurant group. Patrick started his restaurant career at
              the young age of 13, and has experience in the kitchen, all areas
              of service, behind the bar, and of course management.
            </p>
          </div>

          {/* Andreas Diaz */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/team-andreas.png"
              alt="Andreas Diaz"
              width={130}
              height={130}
              style={{ borderRadius: "50%", marginBottom: 16 }}
            />
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#333",
                marginBottom: 4,
              }}
            >
              Andreas Diaz
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#055a6f",
                marginBottom: 16,
              }}
            >
              Sous Chef
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              Chef Diaz has spent the majority of his career in the Tarpy&apos;s
              kitchen. Beginning in 1993 he has dedicated his career to sourcing
              local ingredients and crafting exceptional food. His talents shine
              through on desserts, where his artistry is on full display.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-history-grid {
            grid-template-columns: 1fr !important;
          }
          .about-team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  );
}
