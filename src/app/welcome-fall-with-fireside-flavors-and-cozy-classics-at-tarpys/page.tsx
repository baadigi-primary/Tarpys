import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Welcome Fall with Fireside Flavors and Cozy Classics at Tarpy's | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Welcome Fall with Fireside Flavors and Cozy Classics at Tarpy's"
      image="/images/news-9.jpg"
      content={`As the warm days of summer ease into the golden tones of early autumn, the coastal charm of Monterey takes on a new kind of magic. There's a crispness in the air, the sun sets just a bit earlier, and the appetite leans toward something more comforting.

At Tarpy's, the arrival of fall means a subtle but satisfying shift--from chilled roses and light fare to fireside flavors, slow-cooked classics, and warm, inviting cocktails.

### Start with Something Savory

**Sriracha Glazed Ribs**

Finished with a honey-sriracha glaze and spicy peanuts--smoky, sweet, and satisfying.

**Dungeness & Blue Crab Cakes**

Seared and served with roasted pepper coriander cream, bringing coastal elegance to any fall dinner.

### Entrees That Bring the Heat

**Braised Short Rib**

Fall-apart tender and layered with red wine demi-glace, garlic mashed potatoes, green peas, and caramelized Cipollini onions.

**Filet Mignon (USDA Prime)**

Rich and refined, served with Brussels sprouts, mushrooms, and deeply savory beef jus.

**Alaskan Halibut**

Pan-seared and finished with citrus-brown butter, with roasted garlic mashed potatoes and baby kale.

### Cocktails That Warm the Soul

**Barrel-Aged Manhattan**

Buffalo Trace, Antica Vermouth, and orange bitters--the ultimate cold-weather sipper.

**Barrel-Aged Old Fashioned**

Michter's, vanilla, honey, and nutmeg syrup. Smooth, spiced, and perfect for fireside dining.

### Celebrate the Season with Us

Whether it's a casual dinner, a seasonal celebration, or a cozy night out, Tarpy's invites you to enjoy fall the way it was meant to be: with full plates, warm drinks, and rustic charm in every detail.`}
    />
  );
}
