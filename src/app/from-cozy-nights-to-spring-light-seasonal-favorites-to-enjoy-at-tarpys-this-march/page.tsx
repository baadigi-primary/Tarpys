import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "From Cozy Nights to Spring Light: Seasonal Favorites to Enjoy at Tarpy's This March | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="From Cozy Nights to Spring Light: Seasonal Favorites to Enjoy at Tarpy's This March"
      image="/images/news-2.jpg"
      content={`March in Monterey sits right on the edge of two seasons. Winter comfort still calls for rich entrees and warm drinks, but longer days and brighter skies hint that spring is just around the corner.

At Tarpy's, March brings together the best of both worlds. Hearty favorites remain front and center while lighter dishes and fresh ingredients remind us that the season is changing.

### Comfort Dishes That Still Feel Right

Early spring evenings along the Central Coast can still be cool, which makes comforting entrees especially appealing.

**Braised Short Rib**

Slow-braised until tender and served with roasted garlic mashed potatoes, green peas, and caramelized Cipollini onions. Rich, savory, and perfect for a cool Monterey evening.

**Classic Meatloaf**

Elevated with Marsala-mushroom sauce and paired with mashed potatoes and green beans. Familiar flavors meet restaurant-level refinement.

### Seafood That Bridges Winter and Spring

**Wood-Fired Salmon**

Flame-kissed salmon served with rice pilaf, snap peas, carrots, broccoli, and beurre blanc offers a balanced plate that's both comforting and fresh.

**Alaskan Halibut**

Pan-seared and finished with citrus-brown butter, this dish pairs roasted garlic mashed potatoes with baby kale for a combination that feels elegant but approachable.

### Drinks That Match the Mood

A Pinot Noir from Loring Wine Co. pairs beautifully with steaks and braised dishes. A Chardonnay from McIntyre complements seafood and chicken with buttery smoothness. For cocktail lovers, the Barrel-Aged Old Fashioned and Tarpy's Mule both offer warm spice notes that suit the season perfectly.

### A Relaxed Time to Gather

March tends to be one of the quieter and most enjoyable months for dining out in Monterey. The pace is relaxed, reservations are easier to secure, and the atmosphere feels more intimate. Tarpy's offers the kind of setting where those moments come naturally.`}
    />
  );
}
