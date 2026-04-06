import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Cozy Season is Here: Tarpy's Dishes That Taste Like Fall | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Cozy Season is Here: Tarpy's Dishes That Taste Like Fall"
      image="/images/news-6.jpg"
      content={`Fall has officially arrived in Monterey, and with it comes crisp coastal air, golden sunsets, and the irresistible pull toward warmth, comfort, and hearty seasonal fare. At Tarpy's, autumn is a time to lean into the rich, rustic side of our menu.

### Hearty Entrees That Satisfy the Season

**Braised Short Rib**

This signature fall dish delivers tender, red wine-braised beef served with roasted garlic mashed potatoes, green peas, and caramelized Cipollini onions.

**Filet Mignon (USDA Prime)**

Our 8oz filet is seared to perfection and served with Brussels sprouts, mushrooms, and a savory beef jus.

**Classic Meatloaf**

Loaded with flavor and served with creamy mashed potatoes, crisp green beans, and a house-made Marsala-mushroom sauce.

### Fall Favorites from the Sea

**Alaskan Halibut**

Delicately pan-seared and finished with citrus-brown butter, paired with roasted garlic mashed potatoes and baby kale.

**Cajun-Seasoned Petrale Sole**

Lightly spiced and topped with pineapple salsa, served with curry rice and lime-coconut cream.

### Cocktails That Capture the Season

**Barrel-Aged Old Fashioned**

Michter's bourbon, vanilla, honey, nutmeg syrup, and orange bitters--perfectly layered and slightly smoky.

**Tarpy's Mule**

Buffalo Trace, mint-cinnamon syrup, ginger beer, and lime. A spiced version of a classic, perfect for chilly nights.

### Make It a Cozy Season to Remember

Fall is the season to slow down, savor, and reconnect. Tarpy's is here to make your October meals just the right amount of cozy, comforting, and unforgettable.`}
    />
  );
}
