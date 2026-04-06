# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/hero1-viewport.png` (shows footer)
- **Interaction model:** static; newsletter form submit, social links open in new tab

## DOM Structure
```
<footer class="site-footer">
  <aside class="sidebar sidebar--footer">  (stone/earth bg cover image)
    <div class="container">
      <div class="footer-left two-thirds">  (info + hours text)
        <p>TARPY'S | 831.647.1444 | 2999 Monterey Salinas Hwy, Monterey, CA 93940</p>
        <div class="tarpy-footer">
          <p>Monday – Thursday: 11:30 am – 8:00 pm</p>
          <p>Friday & Saturday: 11:30 am – 9:00 pm</p>
          <p>Sunday: 11:30 am – 8:00 pm</p>
          <p>Tarpy's is proud to be part of the Coastal Roots Hospitality family.</p>
          <p>Be sure to explore our other restaurants:</p>
          <p><a>Rio Grill</a> | <a>Montrio</a></p>
      <div class="footer-right two-col">  (social + newsletter)
        <div class="col">
          <p>Follow Along</p>
          <ul>
            <li><a href="facebook"><img src="/images/social-facebook.png"></li>
            <li><a href="instagram"><img src="/images/social-instagram.png"></li>
          <div class="opentable-badge">
            <a href="opentable"><img src="/images/opentable-badge.png" 180x180></a>
        <div class="col">
          <p>Newsletter</p>
          <input type="email" placeholder="Your email address">
          <button>SIGNUP</button>
          <img src="/images/ofr-logo.png" alt="OFR Logo" max-width:200px>
  <div class="copyright-area">  (teal bg)
    <svg blurp shape> (teal teardrop shape pointing up)
    <div class="container">
      <p class="copyright-text">© TARPYS 2026</p>
```

## Computed Styles

### Footer outer (.site-footer)
- background: url('/images/tint.jpg') repeat (parchment) — actually the sidebar has the stone bg

### Footer sidebar (.sidebar--footer)
- background: url('/images/footer-bg.png') no-repeat center/cover
- padding: 66px 0 60px
- color: white

### Container
- maxWidth: 1250px
- margin: 0 auto
- padding: 0 24px

### Footer layout
- display: grid or flex
- Two main sections: info block (2/3 width) + social/newsletter (1/3 width)
- Actually 3-column: info takes full top row, then 2 columns below for social+newsletter

### Address/info text
- fontFamily: Cabin, sans-serif
- fontSize: 16px
- color: white
- textAlign: center
- lineHeight: 1.7

### "Follow Along" / "Newsletter" label
- fontFamily: Cabin, sans-serif
- fontSize: 14px
- fontWeight: 600
- color: white
- textTransform: uppercase
- letterSpacing: 2px
- marginBottom: 12px

### Social icons
- display: flex
- gap: 12px
- img: 36×36px each
- marginBottom: 16px

### OpenTable badge
- img: 180×180px

### Newsletter form
- input: background white, border none, padding 8px 12px, width ~220px
- button: background #cf723d, color white, padding 8px 20px, uppercase, letterSpacing 1.5px

### OFR Logo
- maxWidth: 200px
- marginTop: 15px
- float: left
- marginLeft: 15px

### Copyright area (.copyright-area)
- backgroundColor: #055a6f (teal)
- padding: 20px 0 48px
- color: rgba(255, 255, 255, 0.57)
- fontSize: 12px
- textAlign: center
- position: relative (for SVG blurp shape)

### SVG blurp (decorative teardrop pointing up into footer)
- fill: #055a6f
- position: absolute
- top: 0, left: 50%, transform: translateX(-50%)
- width: ~100px (or larger teardrop pointing down from copyright into stone section)

## Text Content (verbatim)
- Address line: "TARPY'S | 831.647.1444 | 2999 Monterey Salinas Hwy, Monterey, CA 93940"
- Hours:
  - "Monday – Thursday: 11:30 am – 8:00 pm"
  - "Friday & Saturday: 11:30 am – 9:00 pm"
  - "Sunday: 11:30 am – 8:00 pm"
- "Tarpy's is proud to be part of the Coastal Roots Hospitality family."
- "Be sure to explore our other restaurants:"
- Links: Rio Grill (https://www.riogrill.com/), Montrio (https://www.montrio.com/)
- Social: Follow Along
- Social links: Facebook (https://www.facebook.com/tarpysmonterey), Instagram (http://instagram.com/tarpysroadhouse)
- OpenTable: links to https://www.opentable.com/restaurant/profile/44596/reserve
- Newsletter label: "Newsletter"
- Newsletter input placeholder: "Your email address"
- Newsletter button: "Signup"
- Copyright: "© TARPYS 2026"

## Assets
- `/images/footer-bg.png` — dark stone/earth cover photo
- `/images/social-facebook.png` — 36×36px Facebook icon
- `/images/social-instagram.png` — 36×36px Instagram icon
- `/images/opentable-badge.png` — 180×180px OpenTable Diners' Choice 2025 badge
- `/images/ofr-logo.png` — Ocean Friendly Restaurants logo (white, max-width 200px)

## Responsive Behavior
- **Desktop (1440px):** address top center, then 2 columns: Follow Along + Newsletter side by side
- **Mobile (390px):** single column stack — address, hours, social, newsletter
- **Breakpoint:** ~768px
