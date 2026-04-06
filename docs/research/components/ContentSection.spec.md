# ContentSection Specification

## Overview
- **Target file:** `src/components/ContentSection.tsx`
- **Screenshots:** `docs/design-references/section1-stunning-backdrop.png`, `docs/design-references/hero2-menu.png` (bottom half)
- **Interaction model:** static; CTA buttons have hover color change
- **Reused for:** 3 content sections (StunningBackdrop, History, BestMontereyRestaurant)

## DOM Structure
```
<section class="article__content">  (parchment bg texture)
  <div class="container">           (max-width 1250px, centered)
    <div class="grid">              (2-col, 50/50)
      <div class="col-left">        (image OR text, depending on variant)
      <div class="col-right">       (image OR text, depending on variant)
        <hgroup>
          <h2 class="headline__secondary"> → orange Amatic SC decorative heading
          <h2 class="headline__primary">   → teal Cabin uppercase heading
        <p> (icon image — decorative small graphic)
        <p> (body text, centered)
        <p> (CTA button(s))
```

## Computed Styles

### Section (.article__content)
- background: url('/images/tint.jpg') repeat, backgroundColor: #f5e6c8 (parchment)
- padding: 78px 0
- width: 100%

### Container
- maxWidth: 1250px
- margin: 0 auto
- padding: 0 24px

### Grid (2 columns)
- display: grid (or flex)
- gridTemplateColumns: 1fr 1fr
- gap: 40px
- alignItems: center

### .headline__secondary (decorative orange heading)
- fontFamily: "Amatic SC", cursive
- fontSize: 60px
- fontWeight: 700
- color: #d0723c (orange #cf723d)
- textTransform: uppercase
- letterSpacing: 4px
- lineHeight: 1
- textAlign: center

### .headline__primary (teal Cabin heading)
- fontFamily: Cabin, sans-serif
- fontSize: 36px
- fontWeight: 600
- color: #055a6f (teal)
- textTransform: uppercase
- letterSpacing: 4px
- lineHeight: 1.2
- textAlign: center

### Decorative icon
- display: block
- margin: 8px auto
- maxWidth: 80px

### Body text paragraph
- fontFamily: Cabin, sans-serif
- fontSize: 16px
- fontWeight: 400
- color: rgb(0, 0, 0)
- lineHeight: 27px
- textAlign: center
- maxWidth: 500px
- margin: 12px auto

### CTA Button (.btn-cta)
- display: inline-block
- backgroundColor: #cf723d (orange)
- color: white
- textTransform: uppercase
- letterSpacing: 1.5px
- fontSize: 15px
- padding: 10px 20px
- fontFamily: Cabin, sans-serif
- cursor: pointer
- Hover: backgroundColor: #b5622f

## Three Section Instances

### Section 1: Stunning Backdrop (image LEFT, text RIGHT)
- headlineSecondary: "Stunning Backdrop"
- headlinePrimary: "Dinner in Monterey"
- icon: `/images/icon-1.png`
- body: "While others may try to imitate, no one can duplicate Tarpy's. Our iconic Monterey steakhouse offers hearty portions of gourmet fare, served on rustic stone patios surrounded by lush gardens. From tender ribs and fresh seafood to wild game and our famous meatloaf, every dish is a handcrafted classic. Explore our menu and discover why Tarpy's is the go-to spot for an unforgettable lunch or dinner in Monterey."
- cta: [{ text: "View the full menu", href: "/menus" }]
- image: `/images/food-grid.png` (4-panel food grid collage, left column)

### Section 2: History (text LEFT, image RIGHT)
- headlineSecondary: "History"
- headlinePrimary: "And Lots of it"
- icon: `/images/icon-2.png`
- body: "It was the Great Famine of the late 1840s that brought Irishman Matt Tarpy to California, where he became a respected land owner. Known throughout the region as a skilled horseman, an expert tracker—and, as fate would have it, a deadly marksman. Matt Tarpy was hanged at Tapy's Flats (Site of Tarpy's Restaurant). Although Matt Tarpy continued to maintain his innocence he was hanged near his home. Later on the site became known as Tarpy's Flats and the site for Tarpy's."
- cta: [{ text: "About Us", href: "/about-us" }]
- image: `/images/history-collage.png` (sepia historical photo collage, right column)

### Section 3: Best Monterey Restaurant (text LEFT, image RIGHT)
- headlineSecondary: "Best Monterey Restaurant"
- headlinePrimary: "Inside and Out"
- icon: `/images/icon-3.png`
- body: "With serene patios, lush gardens, and cozy rustic dining spaces, Tarpy's offers an award-winning Monterey dining experience, inside and out. Enjoy expertly prepared steaks, fresh seafood, and warm hospitality in a setting as unforgettable as the food itself. Whether you're joining us for happy hour or planning a special event, Tarpy's is the perfect destination. Contact us for private party catering in Monterey, CA, or reserve your table today."
- cta: [{ text: "Make a Reservation", href: "/reservations" }, { text: "Virtual Tour", href: "/virtual-tour" }]
- image: `/images/best-of-winner.jpg` (300×300 award badge, right col, NOT full width)
- Note: Two CTA buttons, stacked or side by side with gap

## Assets
- `/images/tint.jpg` — parchment texture for bg
- `/images/food-grid.png` — 2×2 grid food photos (581×424)
- `/images/history-collage.png` — black & white historical photos collage (623×401)
- `/images/best-of-winner.jpg` — 2024 Best of Monterey County award badge (300×300)
- `/images/icon-1.png` — decorative curly ornament (59×49)
- `/images/icon-2.png` — decorative curly ornament (86×51)
- `/images/icon-3.png` — decorative heart ornament (61×68)

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, 50/50, image and text side by side
- **Mobile (390px):** single column — image stacks ABOVE text
  - headlineSecondary: fontSize 48px
  - headlinePrimary: fontSize 28px
  - padding: 48px 20px
- **Breakpoint:** ~768px
