import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Savor the Shift: How Tarpy's Transforms with the Fall Season | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Savor the Shift: How Tarpy's Transforms with the Fall Season"
      image="/images/news-7.jpg"
      content={`There's something special about fall on the Central Coast. The air turns crisp, the sunlight softens, and the rhythm of the days begins to slow. At Tarpy's, the seasonal transition is more than just a change in weather--it's an invitation to experience our space, flavors, and hospitality in a new way.

### A Garden That Evolves with the Season

Nestled on 3.5 acres of gardens and native landscaping, our property changes character as the months unfold. In fall, the greenery softens into golden hues, the air grows still, and the space becomes more intimate.

Outdoor dining remains a highlight with cool evenings made cozier by flickering lanterns, soft throws, and heaters tucked throughout the patios.

### A Menu That Moves into Comfort

**Braised Short Rib**

A seasonal staple, slow-cooked in red wine demi-glace and served with garlic mashed potatoes, peas, and caramelized Cipollini onions.

**Center Cut Bone-In Pork Chop**

A robust dish featuring herbed polenta, bacon-laced Brussels sprouts, and apple compote--rich, smoky, and sweet.

**Wood-Fired Salmon**

For those seeking something lighter, this coastal classic is served with rice pilaf, vibrant vegetables, and beurre blanc.

### Sips That Suit the Season

Barrel-Aged Old Fashioned - Deep, rich, and endlessly sippable.

Barrel-Aged Manhattan - Buffalo Trace, Antica Vermouth, and orange bitters--balanced and bold for fireside evenings.

### Plan Your Fall Visit

Now is the perfect time to enjoy Tarpy's in its autumn rhythm. The garden is quieter, the menu heartier, and the entire experience just a bit more relaxed. Rediscover Tarpy's this fall.`}
    />
  );
}
