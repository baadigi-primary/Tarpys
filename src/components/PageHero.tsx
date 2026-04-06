import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  bgAlt?: string;
}

export default function PageHero({ title, subtitle, bgImage, bgAlt = "" }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        height: "360px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "106px",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          fill
          priority
          src={bgImage}
          alt={bgAlt}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div
        style={{
          background: "rgba(0, 0, 0, 0.35)",
          padding: "30px 50px",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          position: "relative",
          zIndex: 10,
        }}
      >
        {subtitle && (
          <h2
            style={{
              fontFamily: "var(--font-amatic), cursive",
              fontSize: 60,
              fontWeight: 700,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 10,
              lineHeight: 1.1,
              margin: 0,
              textAlign: "center",
            }}
          >
            {subtitle}
          </h2>
        )}

        {subtitle && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "white", margin: "4px 0" }}>
            <div style={{ width: 60, height: 1, background: "white", opacity: 0.6 }} />
            <span style={{ fontSize: 14, opacity: 0.8 }}>✻</span>
            <div style={{ width: 60, height: 1, background: "white", opacity: 0.6 }} />
          </div>
        )}

        <h1
          style={{
            fontFamily: "var(--font-amatic), cursive",
            fontSize: 48,
            fontWeight: 700,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 8,
            lineHeight: 1.1,
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
