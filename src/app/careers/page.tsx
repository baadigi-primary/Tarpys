import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Careers | Tarpy's Monterey CA",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />

      {/* Main content */}
      <section
        className="bg-parchment"
        style={{ paddingTop: 146, paddingBottom: 80, paddingLeft: 20, paddingRight: 20 }}
      >
        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 60,
          }}
        >
          <div
            style={{ flex: 1, maxWidth: 200, height: 1, background: "#ccc" }}
          />
          <Image
            src="/images/divider-icon.png"
            alt=""
            width={30}
            height={30}
          />
          <div
            style={{ flex: 1, maxWidth: 200, height: 1, background: "#ccc" }}
          />
        </div>

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="careers-grid"
        >
          {/* Left column — Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#055a6f",
                marginBottom: 8,
              }}
            >
              Great Place to Work
            </p>

            <h1
              className="headline-secondary"
              style={{ margin: "0 0 24px" }}
            >
              ...wish you were here!
            </h1>

            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 16,
              }}
            >
              Tarpy&apos;s is not only a Monterey County icon, it&apos;s a great
              place to work!
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 16,
              }}
            >
              We offer competitive wages, flexible schedules, and a fun,
              supportive team environment. Many of our employees have been with
              us for over 25 years.
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 24,
              }}
            >
              We are always looking for talented, motivated people to join our
              team. If you&apos;re passionate about great food and hospitality,
              we want to hear from you!
            </p>

            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#333",
                marginBottom: 8,
              }}
            >
              OPEN POSITIONS
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 16,
              }}
            >
              Please{" "}
              <a
                href="https://www.tarpys.com/wp-content/uploads/2017/10/20employeeapplicationtrb.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cf723d", textDecoration: "underline" }}
              >
                download an application
              </a>
            </p>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              <a
                href="mailto:HR@coastalrootshospitality.com"
                style={{ color: "#cf723d", textDecoration: "none" }}
              >
                HR@coastalrootshospitality.com
              </a>
            </p>
          </div>

          {/* Right column — Visual placeholder */}
          <div
            style={{
              background: "#e8dcc8",
              borderRadius: 12,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              padding: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-amatic), cursive",
                fontSize: 36,
                fontWeight: 700,
                color: "#055a6f",
                textTransform: "uppercase",
                letterSpacing: 3,
                textAlign: "center",
                margin: 0,
              }}
            >
              Team Photos
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .careers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  );
}
