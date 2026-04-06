"use client";

import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer>
      {/* Main footer area */}
      <aside
        style={{
          backgroundImage: "url('/images/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          paddingTop: "66px",
          paddingBottom: "60px",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {/* Address / hours / sister restaurants */}
          <div
            style={{
              textAlign: "center",
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "white",
              marginBottom: "40px",
            }}
          >
            <p>
              TARPY&apos;S |{" "}
              <a href="tel:+18316471444" style={{ color: "white", textDecoration: "none" }}>
                831.647.1444
              </a>{" "}
              | 2999 Monterey Salinas Hwy, Monterey, CA 93940
            </p>
            <p>Monday – Thursday: 11:30 am – 8:00 pm</p>
            <p>Friday &amp; Saturday: 11:30 am – 9:00 pm</p>
            <p>Sunday: 11:30 am – 8:00 pm</p>
            <p>Tarpy&apos;s is proud to be part of the Coastal Roots Hospitality family.</p>
            <p>
              Be sure to explore our other restaurants:{" "}
              <a href="https://www.riogrill.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                Rio Grill
              </a>{" "}
              |{" "}
              <a href="https://www.montrio.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                Montrio
              </a>
            </p>
          </div>

          {/* Two-column grid: Follow Along | Newsletter */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {/* Follow Along column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "white",
                  margin: "0 0 12px 0",
                }}
              >
                Follow Along
              </p>
              <div style={{ display: "flex", gap: "12px", marginBottom: "20px", justifyContent: "center" }}>
                <a href="https://www.facebook.com/tarpysmonterey" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/social-facebook.png" alt="Facebook" width={36} height={36} />
                </a>
                <a href="http://instagram.com/tarpysroadhouse" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/social-instagram.png" alt="Instagram" width={36} height={36} />
                </a>
              </div>
              <a
                href="https://www.opentable.com/restaurant/profile/44596/reserve?rid=44596&restref=44596"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: "8px" }}
              >
                <Image
                  src="/images/opentable-badge.png"
                  alt="Reserve on OpenTable"
                  width={180}
                  height={180}
                  style={{ display: "block", margin: "0 auto" }}
                />
              </a>
            </div>

            {/* Newsletter column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "white",
                  margin: "0 0 12px 0",
                }}
              >
                Newsletter
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    background: "white",
                    border: "none",
                    padding: "8px 12px",
                    width: "220px",
                    display: "block",
                    marginBottom: "8px",
                    color: "#333",
                    fontSize: "14px",
                    fontFamily: "Cabin, sans-serif",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#cf723d",
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontSize: "14px",
                    padding: "8px 0",
                    border: "none",
                    cursor: "pointer",
                    width: "220px",
                    display: "block",
                    fontFamily: "Cabin, sans-serif",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#b5622f"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#cf723d"; }}
                >
                  Signup
                </button>
              </form>
              <Image
                src="/images/ofr-logo.png"
                alt="Ocean Friendly Restaurants"
                width={200}
                height={60}
                style={{ maxWidth: "200px", height: "auto", marginTop: "15px", display: "block" }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Copyright bar */}
      <div
        style={{
          backgroundColor: "#055a6f",
          paddingTop: "20px",
          paddingBottom: "48px",
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.57)",
          fontSize: "12px",
          fontFamily: "Cabin, sans-serif",
          position: "relative",
        }}
      >
        <svg
          width="160"
          height="62"
          viewBox="0 0 160.7 61.5"
          fill="#055a6f"
          style={{ display: "block", margin: "-1px auto 12px" }}
        >
          <path d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z" />
        </svg>
        <p style={{ margin: 0 }}>© TARPYS 2026</p>
      </div>
    </footer>
  );
}
