"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

const faqItems = [
  {
    question: "How Do I Book?",
    answer:
      "A signed contract and deposit equal to 50% of the total event bill will be due no later than one week prior to the event or no later than 48 hours prior to the event if booking is within one week of the event. Events will be confirmed on the calendar only when signed contract and deposit have been received. Once the event is confirmed, there is a $100 non-refundable cancellation fee.",
  },
  {
    question: "Are All Items on the Menu Always Available?",
    answer:
      "Please note, items on the menu marked with an asterisk (*) need to be specially ordered. We need to have a minimum of 4 days notice and a minimum of 20 guests to have these items available.",
  },
  {
    question: "Is It Possible to Sample Food Before Ordering?",
    answer:
      "Tastings are typically held at 11:30am or between 2-4pm. A menu tasting can be arranged through our Catering Department catering@tarpys.com or 831.655.2999. Fees vary depending on the items chosen.",
  },
  {
    question: "Is There a Minimum Order Required?",
    answer:
      "We require a minimum food and beverage expenditure of $1,000 for full service events; $250 for deliveries. At least 72 hour advanced notice is required.",
  },
  {
    question: "What If We Only Need Food to Be Dropped Off?",
    answer:
      "We do also offer delivery service where our caterer will deliver your food in high-quality disposable containers. 1-20 guests: $50, 21-40 guests: $75, 41-60 guests: $100, 61-100 guests: $150.",
  },
  {
    question: "What About Rentals?",
    answer:
      "Our coordinator can arrange rentals of china, flatware, glassware, tables, chairs, linens and much more. Rentals are based on individual party requirements.",
  },
  {
    question: "Do You Provide Staffing?",
    answer:
      "Our professional chefs and wait staff are what makes Tarpy's catering so wonderful. Generally, we use 1 server for every 15 guests and 1 Chef for every 25 guests. Chefs and Servers are charged at $30 per hour for full service events.",
  },
  {
    question: "Do You Provide Full Bar and Beverage Service?",
    answer:
      "Tarpy's can provide full bar services. Bar packages available: Basic Bar Setup ($3/guest), Bar Mixer Package ($6/guest), House Selection ($24/person first 2 hours), Premium Selection ($29/person first 2 hours), Ultra-Premium Selection ($34/person first 2 hours).",
  },
];

export default function CateringFaqPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  function toggleIndex(index: number) {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <>
      <SiteHeader />

      <PageHero title="FAQ" bgImage="/images/hero-catering.jpg" />

      {/* Intro Section */}
      <section
        className="bg-parchment"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="headline-secondary" style={{ margin: 0 }}>
            Tarpy&apos;s Catering
          </h2>

          <h3
            className="headline-primary"
            style={{ marginTop: 12, marginBottom: 24 }}
          >
            Makes It Memorable
          </h3>

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
            From venues to menus our Catering &amp; Event Specialists make
            entertaining easy and straightforward. We specialize in spectacular
            cuisine served by a courteous and professional staff, at an excellent
            value.
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#333",
              marginBottom: 16,
            }}
          >
            Choose a date and let&apos;s get started!
          </p>

          <p
            style={{
              fontFamily: "var(--font-cabin), sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#333",
            }}
          >
            <a
              href="mailto:catering@tarpys.com"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              catering@tarpys.com
            </a>{" "}
            |{" "}
            <a
              href="tel:+18316552999"
              style={{ color: "#055a6f", textDecoration: "underline" }}
            >
              831.655.2999
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        className="bg-parchment"
        style={{ padding: "0 20px 80px" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleIndex(index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: 16,
                  background: "#055a6f",
                  color: "white",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-cabin), sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: 1,
                  border: "none",
                  borderBottom: "1px solid white",
                  cursor: "pointer",
                }}
              >
                {item.question}
              </button>
              {openIndices.includes(index) && (
                <div
                  style={{
                    padding: "20px 16px",
                    background: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "var(--font-cabin), sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#333",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
