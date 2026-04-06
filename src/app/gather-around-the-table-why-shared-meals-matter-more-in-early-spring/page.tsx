import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = { title: "Gather Around the Table: Why Shared Meals Matter More in Early Spring | Tarpy's Monterey CA" };

export default function PostPage() {
  return (
    <BlogPost
      title="Gather Around the Table: Why Shared Meals Matter More in Early Spring"
      image="/images/news-1.jpg"
      content={`As winter fades and the promise of spring begins to appear, many people feel the urge to reconnect. Early spring is often when calendars start filling again with dinners, catch-ups, and small celebrations. And few things bring people together quite like sharing a meal.

At Tarpy's, gathering around the table is part of the experience. From appetizers designed for sharing to hearty entrees that invite conversation between bites, the menu makes it easy to enjoy good food with great company.

### The Joy of Shareable Starters

Great meals often begin with small plates that encourage everyone to reach across the table.

**Crispy Calamari**

Lightly fried and served with lime-Thai dipping sauce and Srirachanaise, this dish delivers texture and bold flavor.

**Dungeness & Blue Crab Cakes**

Two perfectly crisp crab cakes served with roasted pepper coriander cream make a sophisticated starter for any table.

**Fried Artichoke Hearts**

Crispy and savory, served with ranch and Srirachanaise, these are a go-to appetizer for guests who enjoy local ingredients.

### Main Dishes Worth Talking About

Shared dining often leads to ordering a variety of entrees across the table. Rib Eye delivers bold steakhouse flavor with roasted marble potatoes and broccolini. Prawn Pasta features spinach fettuccini with lobster cream and asiago. Center Cut Bone-In Pork Chop balances savory and sweet with herbed polenta and apple compote.

### Drinks That Encourage Conversation

Cocktails and wine often extend the meal and keep the table lively. The Hibiscus Paloma offers bright citrus and floral notes. The Strawberry Bourbon Fling combines bourbon, elderflower, and strawberry for a balanced cocktail. Wine drinkers often gravitate toward Rose from Alexander Valley Vineyards for lighter meals or Pinot Noir from Loring Wine Co. for heartier dishes.

### The Setting Matters Too

Tarpy's offers a unique environment for shared dining. Garden patios provide fresh air and relaxed energy, while the historic interior spaces create a cozy, welcoming atmosphere. It's the type of restaurant where meals naturally stretch longer--and where gatherings often turn into memorable evenings.`}
    />
  );
}
