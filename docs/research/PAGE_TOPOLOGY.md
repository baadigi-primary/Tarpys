# Tarpy's Page Topology

## URL: https://www.tarpys.com

## Page Structure (top to bottom)

| Order | Component | File | Scroll offset | Notes |
|-------|-----------|------|--------------|-------|
| 1 | SiteHeader | SiteHeader.tsx | fixed | Teal bg, logo left, nav right |
| 2 | Hero1 | HeroSection.tsx | 0px | Full-screen, food photo bg, centered text |
| 3 | StunningBackdrop | ContentSection.tsx | 900px | Parchment bg, 2-col: image left, text right |
| 4 | Hero2 | HeroSection.tsx | 1570px | Full-screen, comfort foods bg |
| 5 | HistorySection | ContentSection.tsx | 2470px | Parchment bg, 2-col: text left, image right |
| 6 | Hero3 | HeroSection.tsx | 3128px | Full-screen, garden patio bg |
| 7 | BestMontereyRestaurant | ContentSection.tsx | 4028px | Parchment bg, 2-col: text left, badge right |
| 8 | SiteFooter | SiteFooter.tsx | 4830px | Stone texture bg |

## Fixed/Sticky elements
- SiteHeader: fixed top-0, z-index 110, always visible
- Google Reviews badge: bottom-left floating widget (third-party)
- Accessibility toolbar: left side floating (skip in clone)
- Page scroll dots: right side indicator (3 dots)

## Interaction model
- Hero sections: static (no click/hover interaction needed — parallax is cosmetic)
- Content sections: static with hover on CTA buttons
- Navigation: hover shows dropdown for "Private Parties"
- Mobile: hamburger menu replaces full nav

## Global behaviors
- Background texture: tint.jpg (parchment) repeats on body and content sections
- Footer has stone/earth photo as cover background
- Scroll-down chevron on hero bottom center
- All hero heights: 100vh (min 600px)

## Responsive breakpoints
- Desktop: 1440px — 2-column grid for content sections
- Tablet: ~768px — transitional
- Mobile: 390px — single column, hamburger menu, content stacks vertically
