import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "The Ultimate Guide to Hosting Fall Events at Tarpy's | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="The Ultimate Guide to Hosting Fall Events at Tarpy's"
      image="/images/news-4.png"
      content={`As the leaves start to turn and the pace of the year slows just a bit, fall becomes the perfect season to gather. Whether it's an intimate birthday dinner, a corporate celebration, or a pre-holiday family reunion, autumn offers a unique blend of coziness and elegance.

At Tarpy's, fall gatherings are second nature. With a historic stone setting, expansive gardens, and a seasonal menu full of bold, comforting flavors, we're here to help you host an unforgettable event.

### Why Fall Is the Best Time to Gather

Fall in Monterey offers some of the most pleasant weather of the year. Crowds thin out, reservations are easier to secure, and the energy shifts from summer bustle to fall connection.

### Beautiful Spaces for Every Occasion

**Garden Patios**

Our outdoor patios are surrounded by native plants and softly lit for fall evenings. With built-in heaters and covered sections, they're excellent for both lunch events and candlelit dinners.

**Private Dining Rooms**

Inside the historic stone house, we offer multiple private rooms with rustic architecture, wood accents, and an intimate feel. Great for rehearsal dinners, birthdays, and professional gatherings.

### A Menu That Feels Like Fall

**Braised Short Rib**

Served with roasted garlic mashed potatoes, green peas, and Cipollini onions--the ultimate fall crowd-pleaser.

**Filet Mignon (USDA Prime)**

Elegant and flavorful, with Brussels sprouts, mushrooms, and a rich beef jus.

### Let Us Take Care of the Details

Planning an event doesn't need to be stressful. Our team is experienced in handling everything from casual gatherings to full-service events. Let this fall be the season you host something truly memorable.`}
    />
  );
}
