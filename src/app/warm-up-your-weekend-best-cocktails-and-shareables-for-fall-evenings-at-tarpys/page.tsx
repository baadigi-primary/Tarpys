import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Warm Up Your Weekend: Best Cocktails and Shareables for Fall Evenings at Tarpy's | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Warm Up Your Weekend: Best Cocktails and Shareables for Fall Evenings at Tarpy's"
      image="/images/news-5.jpg"
      content={`There's something special about fall weekends in Monterey. The air is cool and crisp, the pace slows just enough, and every evening feels like a chance to relax, connect, and indulge.

At Tarpy's, that means cozy outdoor seating, fireside tables, and a menu filled with bold cocktails and elevated shareables that are perfect for winding down or turning up your weekend plans.

### Shareables That Set the Mood

**Sriracha Glazed Ribs**

Sticky, sweet, and spicy--with a honey-sriracha glaze and crunchy peanuts. A crowd-pleaser and a must for anyone who likes their bites bold.

**Dungeness & Blue Crab Cakes**

Lightly crisped and served with roasted pepper coriander cream--the perfect pairing for a glass of wine.

**Giant Bavarian Pretzel**

Ale-washed, warm, and served with housemade ale-cheddar and whole-grain mustard. Salty, soft, and fun to pull apart with a cold beer.

### Cocktails Made for Cool Evenings

**Barrel-Aged Old Fashioned**

Michter's bourbon, vanilla, honey, nutmeg syrup, and orange bitters. Smooth and spirit-forward--fall in a glass.

**Tarpy's Mule**

Buffalo Trace, mint-cinnamon syrup, ginger beer, and lime. A spicy twist on the classic, perfect for sipping on the patio.

**Ocean Strike**

Vibrant gin cocktail with blue spirulina, Italicus, and rosemary. Beautiful, bold, and $1 from each drink supports local charities.

### Stay for Dinner--or Keep It Casual

Not every weekend outing needs a multi-course meal. But if you decide to stay, Tarpy's offers hearty fall entrees from Braised Short Rib and Filet Mignon to Wood-Fired Salmon. Whatever your weekend looks like, Tarpy's lets you ease into it with comfort, flavor, and California charm.`}
    />
  );
}
