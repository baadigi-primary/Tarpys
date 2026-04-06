"use client";

import Image from "next/image";
import Link from "next/link";

interface CTA {
  text: string;
  href: string;
}

interface ContentSectionProps {
  headlineSecondary: string;
  headlinePrimary: string;
  icon: string;
  body: string;
  ctas: CTA[];
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}

export default function ContentSection({
  headlineSecondary,
  headlinePrimary,
  icon,
  body,
  ctas,
  image,
  imageAlt,
  imageLeft,
}: ContentSectionProps) {
  const imageCol = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={600}
        height={500}
        style={{ width: "100%", height: "auto", maxWidth: "100%" }}
      />
    </div>
  );

  const textCol = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          marginBottom: 12,
        }}
      >
        <h2
          className="headline-secondary"
          style={{ textAlign: "center", margin: 0 }}
        >
          {headlineSecondary}
        </h2>
        <h3
          className="headline-primary"
          style={{ textAlign: "center", margin: 0 }}
        >
          {headlinePrimary}
        </h3>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        style={{ display: "block", margin: "8px auto", maxHeight: 60, width: "auto" }}
      />

      <p
        style={{
          fontFamily: "var(--font-cabin), sans-serif",
          fontSize: 16,
          color: "#000",
          lineHeight: "27px",
          textAlign: "center",
          maxWidth: 500,
          margin: "12px auto",
        }}
      >
        {body}
      </p>

      {ctas.length === 1 ? (
        <div style={{ marginTop: 4 }}>
          <Link href={ctas[0].href} className="btn-cta">
            {ctas[0].text}
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          {ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className="btn-cta">
              {cta.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section
      style={{
        backgroundImage: "url('/images/tint.jpg')",
        backgroundRepeat: "repeat",
        backgroundColor: "#f5e6c8",
        paddingTop: 78,
        paddingBottom: 78,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: 40,
          alignItems: "center",
        }}
      >
        {imageLeft ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
    </section>
  );
}
