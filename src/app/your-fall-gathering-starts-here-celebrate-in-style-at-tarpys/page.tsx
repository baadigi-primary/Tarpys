import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Your Fall Gathering Starts Here: Celebrate in Style at Tarpy's | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Your Fall Gathering Starts Here: Celebrate in Style at Tarpy's"
      image="/images/news-8.jpg"
      content={`As the pace of summer slows and the cool, coastal air of fall settles in, there's no better time to bring people together. Whether it's a milestone celebration, a company dinner, or simply an excuse to reconnect with friends, fall is the season for gathering--and Tarpy's is the place to do it.

### Why Fall Is the Best Time to Host

Monterey in the fall is a dream for hosting. The weather stays mild, the summer crowds begin to ease, and the natural beauty of the season sets the perfect backdrop for gathering.

### Private Dining Spaces That Impress

**Indoor Private Rooms**

Choose from several indoor dining areas, each offering its own atmosphere. Stone walls, vintage wood beams, and charming decor give every space a timeless feel.

**Garden Patios**

Outdoor spaces perfect for fall afternoons and early evenings. Surrounded by seasonal foliage with subtle lighting and garden ambiance.

### A Menu That Celebrates the Season

Braised Short Rib - A top choice for private dinners--slow-cooked, flavorful, and served with mashed potatoes.

Filet Mignon (USDA Prime) - Classic and elegant, served with mushrooms, Brussels sprouts, and beef jus.

Wood-Fired Salmon - A balanced option for any crowd with beurre blanc and market vegetables.

### Let Us Handle the Details

At Tarpy's, we believe hosting should feel as enjoyable as attending. Our events team works with you to coordinate every detail. Fall dates are filling fast, especially as the holidays approach.`}
    />
  );
}
