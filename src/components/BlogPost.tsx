import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

interface BlogPostProps {
  title: string;
  image: string;
  content: string; // HTML-safe markdown-like content with \n\n for paragraphs, ### for headings, **text** for bold
}

export default function BlogPost({ title, image, content }: BlogPostProps) {
  const sections = content.split("\n\n").filter((s) => s.trim().length > 0);

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: 400,
          overflow: "hidden",
          marginTop: 106,
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-amatic), cursive",
              fontSize: 52,
              fontWeight: 700,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 6,
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      {/* Article */}
      <main
        className="bg-parchment"
        style={{
          paddingTop: 60,
          paddingBottom: 80,
          fontFamily: "var(--font-cabin), sans-serif",
        }}
      >
        <article style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          {sections.map((section, i) => {
            const trimmed = section.trim();

            if (trimmed.startsWith("### ")) {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "var(--font-amatic), cursive",
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#cf723d",
                    marginTop: 40,
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  {trimmed.replace("### ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
              return (
                <p
                  key={i}
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#055a6f",
                    marginBottom: 8,
                    marginTop: 20,
                  }}
                >
                  {trimmed.replace(/\*\*/g, "")}
                </p>
              );
            }

            return (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#444",
                  marginBottom: 16,
                }}
              >
                {trimmed}
              </p>
            );
          })}

          <div
            style={{
              marginTop: 50,
              paddingTop: 30,
              borderTop: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <Link
              href="/news-events"
              style={{
                display: "inline-block",
                backgroundColor: "#cf723d",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                fontSize: 15,
                padding: "12px 28px",
                fontFamily: "var(--font-cabin), sans-serif",
                textDecoration: "none",
                borderRadius: 2,
              }}
            >
              Back to News &amp; Events
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
