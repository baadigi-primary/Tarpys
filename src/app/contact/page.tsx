"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Contact Us"
        subtitle="Keep in Touch"
        bgImage="/images/hero-contact.jpg"
      />

      {/* Two-column content */}
      <section className="bg-parchment" style={{ padding: "80px 20px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
          className="contact-grid"
        >
          {/* Left column — Info */}
          <div>
            <h3
              className="headline-primary"
              style={{ fontSize: 24, margin: "0 0 12px" }}
            >
              Tarpy&apos;s Roadhouse Hours
            </h3>
            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 20,
              }}
            >
              Don&apos;t be a stranger!
            </p>

            <div
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 15,
                lineHeight: 2,
                color: "#333",
                marginBottom: 24,
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>Monday – Thursday:</strong> 11:30 am – 8:00 pm
              </p>
              <p style={{ margin: 0 }}>
                <strong>Friday &amp; Saturday:</strong> 11:30 am – 9:00 pm
              </p>
              <p style={{ margin: 0 }}>
                <strong>Sunday:</strong> 11:30 am – 8:00 pm
              </p>
            </div>

            <p
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#333",
                marginBottom: 20,
              }}
            >
              We are located along Highway 68, near the intersection with the
              Canyon Del Rey stoplight.
            </p>

            <p style={{ marginBottom: 20 }}>
              <a
                href="tel:+18316471444"
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#cf723d",
                  textDecoration: "none",
                }}
              >
                831.647.1444
              </a>
            </p>

            <div
              style={{
                fontFamily: "var(--font-cabin), sans-serif",
                fontSize: 15,
                color: "#333",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span>Follow us</span>
              <a
                href="https://www.facebook.com/tarpysroadhouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "#055a6f" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tarpysroadhouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#055a6f" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — Contact Form */}
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <input
                type="text"
                placeholder="First Name"
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 15,
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  outline: "none",
                  background: "white",
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 15,
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  outline: "none",
                  background: "white",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 15,
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  outline: "none",
                  background: "white",
                }}
              />
              <textarea
                placeholder="Message"
                rows={5}
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 15,
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  outline: "none",
                  resize: "vertical",
                  background: "white",
                }}
              />
              <label
                style={{
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 14,
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" />
                Add me to your email newsletter subscription list.
              </label>
              <button
                type="submit"
                className="btn-cta"
                style={{ alignSelf: "flex-start" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section style={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.8!2d-121.8!3d36.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de45270b5fb7d%3A0x3a4f5e5c2c3c3b0!2sTarpy&#39;s!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tarpy's location on Google Maps"
        />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <SiteFooter />
    </>
  );
}
