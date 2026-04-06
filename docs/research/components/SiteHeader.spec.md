# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/hero1-top.png` (header visible at top)
- **Interaction model:** static on desktop; hamburger toggle on mobile

## DOM Structure
```
<header class="site-header"> (fixed, full-width, z-110)
  <div class="container"> (max-width 1250px, centered)
    <div class="flexbox"> (flex row, space-between)
      <div> (hamburger button — hidden on desktop)
      <div class="branding-container">
        <a href="/">
          <img src="/images/tarpys-logo.png" alt="Tarpy's Monterey CA">
      <div>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Reservations</a></li>
            <li><a>Menus</a></li>
            <li class="has-dropdown"><a>Private Parties</a>
              <ul class="sub-menu">
                <li><a>Onsite Parties</a></li>
                <li><a>Weddings</a></li>
            <li><a>Catering</a></li>
            <li><a>News & Events</a></li>
            <li><a>Rewards & Gift Cards</a></li>
            <li><a>Contact</a></li>
            <li><a>Careers</a></li>
```

## Computed Styles (exact values from getComputedStyle)

### Header container
- position: fixed
- top: 0px
- width: 100%
- height: 106px
- backgroundColor: rgb(5, 90, 111)  → #055a6f (teal)
- zIndex: 110
- transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1)

### Container inner
- maxWidth: 1250px
- margin: 0 auto
- padding: 0 24px
- display: flex
- alignItems: center
- justifyContent: space-between

### Logo image
- height: ~65px (auto width, maintain aspect ratio)
- display: block

### Nav links
- fontSize: 12px
- fontFamily: Cabin, sans-serif
- fontWeight: 400
- color: rgb(255, 255, 255) — white
- textTransform: uppercase
- letterSpacing: 1px
- padding: 12px
- display: inline-block

### Active link
- text-decoration: underline (current page)

### Dropdown sub-menu
- background: #055a6f (same teal)
- position: absolute
- padding: 8px 0
- min-width: 160px
- Sub-menu items: same link style, padding 8px 16px

## States & Behaviors

### Dropdown hover (Private Parties)
- **Trigger:** hover on "Private Parties" nav item
- **State A:** sub-menu hidden (display: none)
- **State B:** sub-menu visible (display: block)
- **Transition:** fade-in or instant

### Mobile hamburger
- **Trigger:** viewport < 768px
- **State A:** hamburger icon visible, nav hidden
- **State B:** hamburger tapped → nav slides in from top/left
- Show hamburger: 3 stacked lines, white, on left
- Logo: centered on mobile

## Assets
- Logo: `/images/tarpys-logo.png` (1090×489px, white/blue cartoon logo)

## Text Content
Nav items (in order): Home, Reservations, Menus, Private Parties (dropdown: Onsite Parties, Weddings), Catering, News & Events, Rewards & Gift Cards, Contact, Careers

## Responsive Behavior
- **Desktop (1440px):** logo left, full nav right
- **Mobile (390px):** hamburger (☰) top-left, logo centered, nav hidden until toggled
- **Breakpoint:** ~768px
