# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshots:** `docs/design-references/hero1-top.png`, `docs/design-references/hero2-menu.png`, `docs/design-references/hero3-garden.png`
- **Interaction model:** static (parallax effect is cosmetic — implement as simple cover bg)
- **Used for:** 3 hero banners on the page (reusable component with props)

## DOM Structure
```
<section class="c-hero"> (full-viewport-height, relative, overflow-hidden)
  <div class="c-hero__background"> (absolute fill, bg image cover)
    <img class="c-hero__image" src="..."> (cover fill)
  <div class="c-hero__wrapper"> (flex center both axes, padding 72px, full size)
    <hgroup class="article__headline"> (text centered)
      <h2 class="headline__primary"> → big Amatic SC title (white)
      <div class="headline__description">
        <div class="separator"> → decorative divider line + star
        <h2/p class="headline__secondary whitetitle"> → subtitle (orange or white)
  <a class="scroll-chevron"> (bottom center, animated bounce)
    <svg chevron-down>
```

## Computed Styles

### Section container (.c-hero)
- height: 900px (100vh)
- position: relative
- overflow: hidden
- display: flex
- alignItems: center
- justifyContent: center

### Background image
- position: absolute
- top: 0, left: 0, width: 100%, height: 100%
- objectFit: cover
- objectPosition: center

### Wrapper (.c-hero__wrapper)
- display: flex
- alignItems: center
- justifyContent: center
- width: 100%
- height: 100%
- padding: 72px
- color: white

### Headline group (hgroup)
- textAlign: center
- display: flex
- flexDirection: column
- alignItems: center
- gap: 8px

### Dark overlay box (behind text)
- background: rgba(0, 0, 0, 0.35)
- padding: 40px 60px
- display: inline-block

### .headline__primary (big display title)
- fontFamily: "Amatic SC", cursive
- fontSize: 80px
- fontWeight: 700
- color: white
- textTransform: uppercase
- letterSpacing: 16px
- lineHeight: 1.1
- margin: 0

### Separator ornament
- display: flex
- alignItems: center
- gap: 12px
- color: white
- margin: 12px 0
- Lines: 80px wide, 1px tall, white, opacity 0.6
- Star: ✻ character, 14px

### .headline__secondary / .whitetitle (subtitle)
- fontFamily: Cabin, sans-serif
- fontSize: 28px (desktop)
- fontWeight: 400
- color: #cf723d (orange)
- textTransform: uppercase
- letterSpacing: 8px
- margin: 0

### Scroll-down chevron
- position: absolute
- bottom: 30px
- left: 50%
- transform: translateX(-50%)
- color: white
- animation: bounce-down 2s ease-in-out infinite
- Background: slightly tinted circle

## Three Hero Instances

### Hero 1
- title: "Tarpy's"
- subtitle: "Best Monterey Steakhouse"
- bg: `/images/hero1-bg.jpg`

### Hero 2
- title: "Refined Rustic Cuisine"
- subtitle: "Re-Engineered"
- bg: `/images/hero2-bg.jpg`

### Hero 3
- title: "Served with a Side of Green"
- subtitle: "" (empty, just the separator ornament)
- bg: `/images/hero3-bg.jpg`

## Assets
- `/images/hero1-bg.jpg` — shrimp dish close-up (dark moody)
- `/images/hero2-bg.jpg` — comfort foods / grilled items
- `/images/hero3-bg.jpg` — garden patio with stone walls, outdoor dining tables

## Responsive Behavior
- **Desktop:** 900px / 100vh, large text
- **Mobile:** full viewport height, text scales down
  - title fontSize: 48px on mobile
  - subtitle fontSize: 18px on mobile
  - padding: 24px
  - overlay box: padding 24px 20px
