import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Menus | Tarpy's Monterey CA",
};

const menuLinks = [
  { label: "Dine In & Take Out", href: "/dine-in-and-take-out" },
  { label: "Wine List", href: "/wine-list" },
  { label: "Happy Hour & Bar", href: "/happy-hour-bar" },
  { label: "Special Holiday Menu", href: "/special-holiday-menu" },
];

export default function MenusPage() {
  return (
    <>
      <SiteHeader />

      <PageHero title="Menus" bgImage="/images/hero-menus.jpg" />

      <section
        className="bg-parchment"
        style={{
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            maxWidth: 960,
            width: "100%",
          }}
        >
          {menuLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "18px 12px",
                border: "2px solid #055a6f",
                color: "#055a6f",
                fontFamily: "var(--font-amatic), cursive",
                fontSize: 28,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                textAlign: "center",
                textDecoration: "none",
                transition: "background 0.25s, color 0.25s",
                lineHeight: 1.2,
              }}
              onMouseEnter={undefined}
              className="menu-link-btn"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hover styles for the menu buttons */}
        <style>{`
          .menu-link-btn:hover {
            background: #055a6f !important;
            color: white !important;
          }
          @media (max-width: 768px) {
            .menu-link-btn {
              font-size: 22px !important;
            }
          }
          @media (max-width: 640px) {
            section.bg-parchment > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <SiteFooter />
    </>
  );
}
