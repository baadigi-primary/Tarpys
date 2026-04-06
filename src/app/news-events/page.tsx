import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "News & Events | Tarpy's Monterey CA",
};

const posts = [
  {
    title: "Gather Around the Table: Why Shared Meals Matter More in Early Spring",
    image: "/images/news-1.jpg",
    href: "/gather-around-the-table-why-shared-meals-matter-more-in-early-spring",
    excerpt:
      "As winter fades and the promise of spring begins to appear, many people feel the urge to reconnect. Early spring is often when calendars start filling again with dinners, catch-ups, and small celebrations. And few things bring people together quite like sharing a meal.",
  },
  {
    title: "From Cozy Nights to Spring Light: Seasonal Favorites to Enjoy at Tarpy's This March",
    image: "/images/news-2.jpg",
    href: "/from-cozy-nights-to-spring-light-seasonal-favorites-to-enjoy-at-tarpys-this-march",
    excerpt:
      "March in Monterey sits right on the edge of two seasons. Winter comfort still calls for rich entrées and warm drinks, but longer days and brighter skies hint that spring is just around the corner. It's a time when meals feel a little more relaxed, conversations stretch a little longer, and dining becomes less about rushing and more about enjoying the moment.",
  },
  {
    title: "Fall Flavors, Monterey Style: Local Dishes You'll Only Find at Tarpy's",
    image: "/images/news-3.jpg",
    href: "/fall-flavors-monterey-style-local-dishes-youll-only-find-at-tarpys",
    excerpt:
      "There's something undeniably special about fall in Monterey. It's the season of rich sunsets, earthy colors, and cool breezes rolling in from the coast. But what truly sets the season apart here isn't just the weather—it's the food. At Tarpy's, fall flavors go beyond comfort classics.",
  },
  {
    title: "The Ultimate Guide to Hosting Fall Events at Tarpy's",
    image: "/images/news-4.png",
    href: "/the-ultimate-guide-to-hosting-fall-events-at-tarpys",
    excerpt:
      "As the leaves start to turn and the pace of the year slows just a bit, fall becomes the perfect season to gather. Whether it's an intimate birthday dinner, a corporate celebration, or a pre-holiday family reunion, autumn offers a unique blend of coziness and elegance that makes any event feel meaningful.",
  },
  {
    title: "Warm Up Your Weekend: Best Cocktails and Shareables for Fall Evenings at Tarpy's",
    image: "/images/news-5.jpg",
    href: "/warm-up-your-weekend-best-cocktails-and-shareables-for-fall-evenings-at-tarpys",
    excerpt:
      "There's something special about fall weekends in Monterey. The air is cool and crisp, the pace slows just enough, and every evening feels like a chance to relax, connect, and indulge. At Tarpy's, that means cozy outdoor seating, fireside tables, and a menu filled with bold cocktails and elevated shareables.",
  },
  {
    title: "Cozy Season is Here: Tarpy's Dishes That Taste Like Fall",
    image: "/images/news-6.jpg",
    href: "/cozy-season-is-here-tarpys-dishes-that-taste-like-fall",
    excerpt:
      "Fall has officially arrived in Monterey, and with it comes crisp coastal air, golden sunsets, and the irresistible pull toward warmth, comfort, and hearty seasonal fare. At Tarpy's, autumn is a time to lean into the rich, rustic side of our menu—where slow-braised meats, roasted vegetables, and bold California flavors come together in perfect harmony.",
  },
  {
    title: "Savor the Shift: How Tarpy's Transforms with the Fall Season",
    image: "/images/news-7.jpg",
    href: "/savor-the-shift-how-tarpys-transforms-with-the-fall-season",
    excerpt:
      "There's something special about fall on the Central Coast. The air turns crisp, the sunlight softens, and the rhythm of the days begins to slow. At Tarpy's, the seasonal transition is more than just a change in weather—it's an invitation to experience our space, flavors, and hospitality in a new way.",
  },
  {
    title: "Your Fall Gathering Starts Here: Celebrate in Style at Tarpy's",
    image: "/images/news-8.jpg",
    href: "/your-fall-gathering-starts-here-celebrate-in-style-at-tarpys",
    excerpt:
      "As the pace of summer slows and the cool, coastal air of fall settles in, there's no better time to bring people together. Whether it's a milestone celebration, a company dinner, or simply an excuse to reconnect with friends, fall is the season for gathering—and Tarpy's is the place to do it.",
  },
  {
    title: "Welcome Fall with Fireside Flavors and Cozy Classics at Tarpy's",
    image: "/images/news-9.jpg",
    href: "/welcome-fall-with-fireside-flavors-and-cozy-classics-at-tarpys",
    excerpt:
      "As the warm days of summer ease into the golden tones of early autumn, the coastal charm of Monterey takes on a new kind of magic. There's a crispness in the air, the sun sets just a bit earlier, and the appetite leans toward something more comforting.",
  },
  {
    title: "Last Taste of Summer: Seasonal Favorites to Savor Before Fall",
    image: "/images/news-10.jpg",
    href: "/last-taste-of-summer-seasonal-favorites-to-savor-before-fall",
    excerpt:
      "Late August in Monterey brings a unique kind of magic. The sun still hangs high, the evenings remain warm, and there's a lingering energy in the air—the kind that says there's still time to indulge, connect, and enjoy all that summer has to offer.",
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <SiteHeader />

      <main
        className="bg-parchment"
        style={{
          paddingTop: 146,
          paddingBottom: 80,
          fontFamily: "var(--font-cabin), sans-serif",
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .news-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h1
            className="headline-primary"
            style={{ textAlign: "center", marginBottom: 16 }}
          >
            News &amp; Events
          </h1>

          <div
            style={{
              width: 200,
              height: 1,
              background: "#ccc",
              margin: "0 auto 60px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
            {posts.map((post, i) => {
              const imageLeft = i % 2 === 0;

              const imageBlock = (
                <a
                  href={post.href}
                  style={{ display: "block", overflow: "hidden", borderRadius: 4 }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={900}
                    height={506}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              );

              const textBlock = (
                <div>
                  <h2 style={{ margin: 0 }}>
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-amatic), cursive",
                        fontSize: 36,
                        fontWeight: 700,
                        color: "#cf723d",
                        textDecoration: "none",
                        lineHeight: 1.2,
                      }}
                    >
                      {post.title}
                    </a>
                  </h2>

                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      color: "#bbb",
                      margin: "12px 0",
                    }}
                  >
                    ✻
                  </div>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#555",
                      margin: "0 0 14px",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#cf723d",
                      textTransform: "uppercase",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textDecoration: "none",
                    }}
                  >
                    Read more
                  </a>
                </div>
              );

              return (
                <article
                  key={i}
                  className="news-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 40,
                    alignItems: "center",
                  }}
                >
                  {imageLeft ? (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
