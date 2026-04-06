"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  fontFamily: "var(--font-cabin), sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontWeight: 700,
  textTransform: "uppercase",
  color: "#055a6f",
  letterSpacing: "2px",
  fontSize: "14px",
  margin: "28px 0 16px",
};

export default function CateringInquiryPage() {
  return (
    <>
      <SiteHeader />

      <PageHero
        title="Catering Inquiry"
        bgImage="/images/hero-catering-inquiry.jpg"
      />

      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="headline-secondary" style={{ margin: 0 }}>
            Catering Inquiry
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              marginTop: "20px",
            }}
          >
            <strong>
              Please tell us about your event, we&apos;ll get back to you
              within 24 business hours.
            </strong>
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            maxWidth: 700,
            margin: "40px auto 0",
            background: "#f5e6c8",
            padding: "40px",
            textAlign: "left",
          }}
        >
          <h3 style={sectionHeadingStyle}>Your Contact Information</h3>

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            First Name *
          </label>
          <input type="text" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Last Name *
          </label>
          <input type="text" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Email *
          </label>
          <input type="email" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Phone Number *
          </label>
          <input type="tel" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Company *
          </label>
          <input type="text" required style={inputStyle} />

          <h3 style={sectionHeadingStyle}>Event Style</h3>

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Event Style
          </label>
          <select style={inputStyle}>
            <option value="">Select...</option>
            <option value="on-premise">On-Premise Event</option>
            <option value="drop-off">Drop-Off Catering</option>
            <option value="pick-up">Pick-Up Catering</option>
            <option value="full-service">Full-Service Catering</option>
          </select>

          <h3 style={sectionHeadingStyle}>Your Event Details</h3>

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Nature of Event
          </label>
          <input type="text" style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Event Date *
          </label>
          <input type="date" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Start Time
          </label>
          <input type="time" style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            End Time
          </label>
          <input type="time" style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Number of People *
          </label>
          <input type="number" required style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            Additional Information
          </label>
          <textarea rows={5} style={inputStyle} />

          <label style={{ display: "block", marginBottom: "4px", fontSize: "14px" }}>
            How did you hear about us?
          </label>
          <select style={inputStyle}>
            <option value="">Select...</option>
            <option value="google">Google Search</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="yelp">Yelp</option>
            <option value="email">Email</option>
            <option value="crh-employee">CRH Employee</option>
            <option value="other">Other</option>
          </select>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button type="submit" className="btn-cta">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>

      <SiteFooter />
    </>
  );
}
