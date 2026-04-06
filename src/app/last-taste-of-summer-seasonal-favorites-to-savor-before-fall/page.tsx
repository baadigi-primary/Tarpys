import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Last Taste of Summer: Seasonal Favorites to Savor Before Fall | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Last Taste of Summer: Seasonal Favorites to Savor Before Fall"
      image="/images/news-10.jpg"
      content={`Late August in Monterey brings a unique kind of magic. The sun still hangs high, the evenings remain warm, and there's a lingering energy in the air--the kind that says there's still time to indulge, connect, and enjoy all that summer has to offer.

At Tarpy's, this season is celebrated with a menu that captures the best of summer's bounty. From wood-fired seafood to chilled cocktails and garden-fresh produce, every dish and drink is crafted to help guests savor these final sun-soaked weeks.

### Why Late Summer Is Perfect for Dining at Tarpy's

Monterey's mild coastal climate keeps the summer spirit alive well into September. Our garden patios are in full bloom, the kitchen is turning out summer's most vibrant dishes, and the bar is shaking up seasonal cocktails that taste like golden hour.

### Appetizers That Set the Stage

Every great summer meal starts with something fresh, flavorful, and perfect for sharing. Our appetizers highlight seasonal ingredients and bold flavors.

### Seasonal Entrees That Shine

August is the perfect time to revisit favorites or try something new before menus start shifting toward fall. Tarpy's offers a mix of light, bright dishes and hearty grilled classics.

### Raise a Glass to the Season

The bar at Tarpy's is ready to help you toast to the end of summer. From garden-inspired cocktails to crisp local wines, our drink menu has something for every palate.

### Make the Most of It While It Lasts

There's still time for long dinners under the trees, celebratory evenings with friends, and spontaneous nights. The final weeks of summer are an invitation to lean in and enjoy it all--good food, cold drinks, and a setting that only Monterey can offer.`}
    />
  );
}
