import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Fall Flavors, Monterey Style: Local Dishes You'll Only Find at Tarpy's | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Fall Flavors, Monterey Style: Local Dishes You'll Only Find at Tarpy's"
      image="/images/news-3.jpg"
      content={`There's something undeniably special about fall in Monterey. It's the season of rich sunsets, earthy colors, and cool breezes rolling in from the coast. At Tarpy's, fall flavors go beyond comfort classics. They tap into the region's ingredients, heritage, and rugged elegance to create dishes that feel as local as they are unforgettable.

### Starters That Tell a Story

**Castroville Artichoke**

A true Monterey classic. Coal-roasted and served with blistered tomatoes and lemon-basil pesto. A love letter to the nearby "Artichoke Capital of the World."

**Spicy Tuna Tacos**

Monterey Bay tuna meets ponzu aioli, scallions, and wasabi tobiko--served in crispy taco shells for a modern take on a coastal staple.

### Entrees with Monterey Character

**Cajun-Seasoned Petrale Sole**

Served with pineapple salsa, curry rice, a seasonal vegetable medley, and lime-coconut cream. This dish blends bold flavor with a coastal twist.

**Smoked Baby Back Ribs**

Slow-smoked in-house and served with dill-chive potato salad and horseradish slaw. Rustic, smoky, and unforgettable.

### Fall Cocktails That Speak Local

Barrel-Aged Old Fashioned - Aged bourbon with vanilla, honey, nutmeg, and bitters. Bold, warming, and crafted for cool nights.

Tarpy's Mule - A spicy, house-made take on the classic--with Buffalo Trace, mint-cinnamon syrup, and ginger beer.

### The Tarpy's Experience, Fall Edition

Everything about fall at Tarpy's--from the garden-lit patios to the flicker of candles in the dining room--celebrates the season. The setting is historic, the food is modern yet grounded, and every dish tells a story of where we are.`}
    />
  );
}
