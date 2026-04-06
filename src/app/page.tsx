import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero 1 */}
      <HeroSection
        title="Tarpy's"
        subtitle="Best Monterey Steakhouse"
        bgImage="/images/hero1-bg.jpg"
        priority={true}
      />

      {/* Section 1: Stunning Backdrop — image left, text right */}
      <ContentSection
        headlineSecondary="Stunning Backdrop"
        headlinePrimary="Dinner in Monterey"
        icon="/images/icon-1.png"
        body="While others may try to imitate, no one can duplicate Tarpy's. Our iconic Monterey steakhouse offers hearty portions of gourmet fare, served on rustic stone patios surrounded by lush gardens. From tender ribs and fresh seafood to wild game and our famous meatloaf, every dish is a handcrafted classic. Explore our menu and discover why Tarpy's is the go-to spot for an unforgettable lunch or dinner in Monterey."
        ctas={[{ text: "View the full menu", href: "/menus" }]}
        image="/images/food-grid.png"
        imageAlt="Stunning Backdrop Steakhouse Dinner in Monterey CA"
        imageLeft={true}
      />

      {/* Hero 2 */}
      <HeroSection
        title="Refined Rustic Cuisine"
        subtitle="Re-Engineered"
        bgImage="/images/hero2-bg.jpg"
      />

      {/* Section 2: History — text left, image right */}
      <ContentSection
        headlineSecondary="History"
        headlinePrimary="And Lots of it"
        icon="/images/icon-2.png"
        body="It was the Great Famine of the late 1840s that brought Irishman Matt Tarpy to California, where he became a respected land owner. Known throughout the region as a skilled horseman, an expert tracker—and, as fate would have it, a deadly marksman. Matt Tarpy was hanged at Tapy's Flats (Site of Tarpy's Restaurant). Although Matt Tarpy continued to maintain his innocence he was hanged near his home. Later on the site became known as Tarpy's Flats and the site for Tarpy's."
        ctas={[{ text: "About Us", href: "/about-us" }]}
        image="/images/history-collage.png"
        imageAlt="Tarpy's Roadhouse History"
        imageLeft={false}
      />

      {/* Hero 3 */}
      <HeroSection
        title="Served with a Side of Green"
        subtitle=""
        bgImage="/images/hero3-bg.jpg"
      />

      {/* Section 3: Best Monterey Restaurant — text left, image right */}
      <ContentSection
        headlineSecondary="Best Monterey Restaurant"
        headlinePrimary="Inside and Out"
        icon="/images/icon-3.png"
        body="With serene patios, lush gardens, and cozy rustic dining spaces, Tarpy's offers an award-winning Monterey dining experience, inside and out. Enjoy expertly prepared steaks, fresh seafood, and warm hospitality in a setting as unforgettable as the food itself. Whether you're joining us for happy hour or planning a special event, Tarpy's is the perfect destination. Contact us for private party catering in Monterey, CA, or reserve your table today."
        ctas={[
          { text: "Make a Reservation", href: "/reservations" },
          { text: "Virtual Tour", href: "/virtual-tour" },
        ]}
        image="/images/best-of-winner.jpg"
        imageAlt="Best of Monterey County 2024 Winner"
        imageLeft={false}
      />

      <SiteFooter />
    </>
  );
}
