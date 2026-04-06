# Tarpy's Website - Missing Pages Content Extraction

Scraped from tarpys.com on 2026-04-06. All 12 pages visited and documented below.

---

## 1. About Us (`/about-us/`)

**Page Title:** About Us | Tarpy's Monterey CA
**Hero/Banner:** No separate hero banner image - page uses the site's default textured background
**Hero Heading:** None (no `.article__header` hero section)

### Content Structure

**Section 1: History (2-column grid)**
- Left column: Framed image of the historic property
  - Image: `https://www.tarpys.com/wp-content/uploads/2016/04/about1.png` (alt: "Saucito Ranch", 430x450)
- Right column: Heading + history text
  - Heading (h2, decorative font): "Storied past. Tasty present."
  - Body text:

> The name Tarpy comes from Matt Tarpy, an Irish settler who once lived near present-day Watsonville. known locally as a respected horseman and enforcer of frontier justice. Tarpy's reputation took a dark turn following a dispute over land boundaries with neighbors Sarah and Murdock Nicholson. His version of "accidental" justice resulted in Sarah being shot, nine times. After being found guilty, a furious local mob took matters into their own hands. Tarpy was publicly hanged in the area now known as Tarpy Flats. The stunning stone building that now houses Tarpy's sits on 3.5 acres once part of the historic Ryan Ranch homestead. Construction started in the late 1800's and completed around 1917 by Charles and Alice Ryan, the home stood on 454 acres of rolling hills and meadows once known as Saucito Ranch. Over the years, the property passed through various hands until it was transformed into Tarpy's in 1992, blending rich history with rustic elegance and award-winning cuisine.

**Section 2: Meet the Team (heading centered)**
- Heading (h2, decorative font): "Meet the Team"

**Team Member 1 (left column):**
- Image: `https://www.tarpys.com/wp-content/uploads/2022/03/patrick.png` (alt: "Patrick Fisher", 130x130, circular)
- Name: Patrick Fisher
- Title: GENERAL MANAGER
- Bio: Patrick has been part of the Coastal Roots Hospitality family since 2019. New to the Monterey Peninsula at the time, he found a home with the restaurant group. Patrick started his restaurant career at the young age of 13, and has experience in the kitchen, all areas of service, behind the bar, and of course management. His passion in the industry has always centered around providing the best experience for his guests, and from creating a welcoming, team atmosphere for his employees to grow their knowledge and elevate their own expectations of themselves.

**Team Member 2 (right column):**
- Image: `https://www.tarpys.com/wp-content/uploads/2016/04/andreas.png` (alt: "Andreas Diaz", 130x130, circular)
- Name: Andreas Diaz
- Title: SOUS CHEF
- Bio: Chef Diaz has spent the majority of his career in the Tarpy's kitchen. Beginning in 1993 he has dedicated his career to sourcing local ingredients and crafting exceptional food. His talents shine through on desserts, where his artistry is on full display in items like Chocolate Espresso Bread Pudding and our Old Fashioned Coconut Cake.

### Structural Notes
- Uses `pixcode--grid` WordPress grid system with `six-twelfths` columns
- Team member images are small circular headshots (130x130)
- No links in content area
- Page uses WordPress theme "rosa-child"

---

## 2. Dine In & Take Out Menu (`/dine-in-and-take-out/`)

**Page Title:** Dine In & Take Out Menu | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2018/02/untitled-1-e1608900255633.jpg` (alt: "Dine In & Take Out", 1494x739)
**Hero Heading:** "Dine In & Take Out Menu"

### Content Structure

The page embeds a **SinglePlatform menu widget** via iframe. No native text content on the page itself.

**Embedded Menu Widget:**
- Provider: SinglePlatform (places.singleplatform.com)
- Location slug: `tarpys-roadhouse`
- API key: `ke09z8icq4xu8uiiccighy1bw`
- Menu ID: `3952038`
- Widget URL: `//places.singleplatform.com/tarpys-roadhouse/menu_widget?api_key=ke09z8icq4xu8uiiccighy1bw&display_menu=3952038&hide_cover_photo=true&hide_disclaimer=true&...`
- Styling: Background color #fbf0da, font family Cabin, black text

### Structural Notes
- Menu content loads inside an iframe, so menu items are not in the page DOM
- The iframe auto-resizes to ~8320px height
- There's also a hidden modal iframe for menu item details
- The menu was displaying actual content (items with prices visible in screenshot)

---

## 3. Wine List (`/wine-list/`)

**Page Title:** Wine List | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2019/10/catering11-e1608899940450.jpg` (alt: "Wine List", 793x1058 - wine bottles)
**Hero Heading:** "Wine List"

### Content Structure

- Static heading: `<h1>WINE LIST</h1>` (centered, 25px)
- Embedded SinglePlatform menu widget (same provider as dine-in menu)
- Menu ID: `2694733`
- **STATUS: "This menu is coming soon. Please check back later."** - The wine list menu is not currently populated in SinglePlatform.

### Structural Notes
- Same iframe embed pattern as dine-in menu
- The menu widget shows a placeholder message, not actual wine list data

---

## 4. Happy Hour & Bar Menu (`/happy-hour-bar/`)

**Page Title:** Happy Hour & Bar Menu | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2022/04/rio_cocktails_1.jpg` (alt: "Happy Hour & Bar Menu", 1111x634 - cocktail photo)
**Hero Heading:** "Happy Hour & Bar Menu"

### Content Structure

- Static heading: `<h1>Happy hour & BAR</h1>` (centered, 25px)
- Embedded SinglePlatform menu widget
- Menu ID: `5187954`
- **STATUS: Menu IS displaying content** - Shows actual menu items

**Visible menu items from screenshot:**

**BITES section:**
- Happy Hour & Bar: Everyday 3:30-6pm. No Substitutions or Alterations
- Garlic Fries - $8.00 (rosemary aioli, grana padano cheese)
- Blistered Tomato Bruschetta (3) - $8.00 (herb goat cheese & roasted garlic, vegetarian)
- Spicy Tuna Tacos (2) - $8.00 (scallion, sesame seeds, ecs-yum aioli, tostito)
- Monterey Bay Calamari - $8.00 (with lime-Thai dipping sauce & "srirochimole")
- Sriracha Glazed Ribs (2) - $8.00 (back ribs, honeysriracha for sauce and spicy coasals)
- Smoked Chicken Wings (5) - $8.00 (dried coffee rub, "srirochimaise", ranch dressing)

**WELL-COCKTAILS section:**
- Two-ingredient cocktail with well spirits. Any addition of juice $1
- Vodka - Tonic, Soda: $5.00
- Rum - Coke, Sprite, Soda: $5.00
- Gin - Tonic, Soda: $5.00
- Vodka & Gin Martinis: $9.00

---

## 5. Special Holiday Menu (`/special-holiday-menu/`)

**Page Title:** Special Holiday Menu | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2022/04/mothers_day_brunch_banner.jpg` (alt: "Special Holiday Menu", 1500x1000 - brunch food photo)
**Hero Heading:** "Special Holiday Menu"

### Content Structure

- Embedded SinglePlatform menu widget
- Menu ID: `5195508`
- **STATUS: "This menu is coming soon. Please check back later."** - Not currently populated.

### Structural Notes
- No static text content besides the widget
- Likely used seasonally for holiday-specific menus

---

## 6. Virtual Tour (`/virtual-tour/`)

**Page Title:** Virtual Tour | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2014/05/contact-e1608899640519.jpg` (alt: "Virtual Tour", 1456x596 - exterior of restaurant at night)
**Hero Heading:** "Virtual Tour"

### Content Structure

**Introductory text (full-width):**
> Step inside and experience the charm of Tarpy's Roadhouse from wherever you are. Our virtual tour invites you to explore the rustic elegance of our stone patios, lush gardens, and warm dining spaces--setting the perfect scene for unforgettable meals and memories. Take a look around and imagine your next visit with us.

**Two Google Maps Street View embeds (side by side, 6/12 columns each):**

1. **Street View Embed 1:**
   - URL: `https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1485879156104!6m8!1m7!1swx0ka8D_Ec0AAAQZCi8wGw!2m2!1d36.58250209066589!2d-121.8300426953137!3f124.9!4f-15.530000000000001!5f0.7820865974627469`
   - Height: 425.25px

2. **Street View Embed 2:**
   - URL: `https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1485879413132!6m8!1m7!1sVUiOuLZl0wcAAAQZCqTDNg!2m2!1d36.58242324509105!2d-121.830171727595!3f44.94!4f-9.620000000000005!5f0.7820865974627469`
   - Height: 425.25px

### Structural Notes
- Uses the pixcode grid system with two `six-twelfths` columns
- The Street View embeds show the interior/exterior of the restaurant
- Coordinates: ~36.5825, -121.8300 (Monterey, CA)
- Page had 5+ console errors (likely related to Google Maps API)

---

## 7. Catering FAQ (`/catering-faq/`)

**Page Title:** FAQ | Tarpy's Monterey CA
**Hero/Banner:** Dark overlay banner with heading "FAQ" (no separate hero image - uses a dark background box)
**Hero Heading:** "FAQ"

### Content Structure

**Section 1: Catering Introduction**
- Heading (h2, decorative): "Tarpy's Catering"
- Subheading (h3): "MAKES IT MEMORABLE"
- Text (bold): "From venues to menus our Catering & Event Specialists make entertaining easy and straightforward. We specialize in spectacular cuisine served by a courteous and professional staff, at an excellent value."
- CTA: "Choose a date and let's get started!"
- Contact: [catering@tarpys.com](mailto:catering@tarpys.com) or [831.655.2999](tel:831.655.2999)

**Section 2: Frequently Asked Questions (accordion)**
Uses WordPress `su-accordion` / `su-spoiler` components (click to expand).

**Q1: HOW DO I BOOK?**
> A signed contract and deposit equal to 50% of the total event bill will be due no later than one week prior to the event or no later than 48 hours prior to the event if booking is within one week of the event. Events will be confirmed on the calendar only when signed contract and deposit have been received. Once the event is confirmed, there is a $100 non-refundable cancellation fee. If services are cancelled 30 or more days prior to the event date, the remainder of the deposit is refundable. If our services are cancelled 15-29 days prior to the event date, 50% of the remaining deposit is non-refundable. If our services are cancelled 1-14 days prior to the event date the entire deposit is non-refundable.

**Q2: ARE ALL ITEMS ON THE MENU ALWAYS AVAILABLE?**
> Please note, items on the menu marked with an asterisk (*) need to be specially ordered. We need to have a minimum of 4 days notice and a minimum of 20 guests to have these items available.

**Q3: IS IT POSSIBLE TO SAMPLE FOOD BEFORE ORDERING?**
> Tastings are typically held at 11:30am or between 2-4pm. A menu tasting can be arranged through our Catering Department catering@tarpys.com or 831.655.2999. Fees vary depending on the items chosen. Due to the fact that some menu items need to be specially ordered, at least one weeks' notice is required for tastings.

**Q4: IS THERE A MINIMUM ORDER REQUIRED?**
> We require a minimum food and beverage expenditure of $1000 for full service events; $250 for deliveries. At least 72 hour advanced notice is required.

**Q5: WHAT IF WE ONLY NEED FOOD TO BE DROPPED OFF?**
> We do also offer delivery service where our caterer will deliver your food in high-quality disposable containers.
> - 1-20 guests -- $50
> - 21-40 guests -- $75
> - 41-60 guests -- $100
> - 61-100 guests -- $150

**Q6: WHAT ABOUT RENTALS?**
> Our coordinator can arrange rentals of china, flatware, glassware, tables, chairs, linens and much more. Rentals are based on individual party requirements.

**Q7: DO YOU PROVIDE STAFFING?**
> Our professional chefs and wait staff are what makes Tarpy's catering so wonderful. The teamwork, high spirits and unequaled attention to detail and cleanliness are unsurpassed. The number of your guests, style of service and the amount of cooking required determines staffing. Generally, we use 1 server for every 15 guests and 1 Chef for every 25 guests. We have a 4-hour minimum staff charge unless other arrangements are made. Catering hours are calculated by the time of your event plus 4 hours (2 hours for set up and 2 hours for clean-up). Chefs and Servers are charged at $30 per hour for full service events.

**Q8: DO YOU PROVIDE FULL BAR AND BEVERAGE SERVICE?**
> Tarpy's can provide full bar services for our wines, liquors, and beverages or we will serve wines, liquors, and beverages provided by you with no corkage fee.
>
> **BASIC BAR SET UP PACKAGE** - $3 per guest
> Includes tables and linens for bar & back bar, ice, dispensers, straws and napkins
>
> **BAR MIXER PACKAGE** - $6 per guest
> Includes tables and linens for bar & back bar, ice, dispensers, Soda Water, Tonic, Coke, Diet Coke, Sprite and juices, garnishes, straws and napkins
>
> **HOSTED BAR PACKAGES:**
>
> 1. **HOUSE SELECTION** - $24/person first 2 hours + $5/person each additional hour
>    - Wines: Chardonnay, Pinot Noir, Merlot
>    - Beers (choice of 3): Amstel Light, Downtown Brown, Corona, Coors Light, Stella Artois
>    - Coke, Diet Coke, Sprite
>    - Spirits: Seagram's Vodka, Gordon's Gin, Evan Williams Bourbon, Seagram's 7 Whiskey, Castillo Silver Rum, Lunazul Tequila, Grant's Scotch
>
> 2. **PREMIUM SELECTION** - $29/person first 2 hours + $5/person each additional hour
>    - Wines: Chardonnay, Pinot Noir, Merlot
>    - Beers (choice of 3): Amstel Light, Downtown Brown, Corona, Coors Light, Stella Artois
>    - Spirits: Stolichnaya Vodka, Bombay Sapphire Gin, Jack Daniels Bourbon, Crown Royal Whiskey, Bacardi Light Rum, Cazadores Tequila, Dewar's Scotch
>
> 3. **ULTRA-PREMIUM SELECTION** - $34/person first 2 hours + $5/person each additional hour
>    - Wines: Sparkling, Chardonnay, Pinot Noir, Merlot
>    - Beers (choice of 4): Amstel Light, Downtown Brown, Corona, Coors Light, Stella Artois
>    - Spirits: Grey Goose Vodka, Hendricks Gin, Maker's Mark Bourbon, Jameson Whiskey, Ron Zacapa Rum, Don Julio Anejo Tequila, Johnnie Walker "Black Label" Scotch

---

## 8. Catering Inquiry (`/cateringinquiry/`)

**Page Title:** Catering Inquiry | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2019/09/catering-5-inquiry-e1608893592148.jpg` (alt: "Catering Inquiry", 1487x634 - outdoor dining setup)
**Hero Heading:** "Catering Inquiry"

### Content Structure

**Intro:**
- Heading (h2, decorative): "CATERING INQUIRY"
- Subtext (bold, centered): "Please tell us about your event, we'll get back to you within 24 business hours."

**Form: Tripleseat Embedded Lead Form**
- Provider: Tripleseat (api.tripleseat.com)
- Lead form ID: `21496`
- Public key: `9d1ec90fa550ab24c17300ae05f1faa511bdffc2`

**Form Fields:**

*YOUR CONTACT INFORMATION:*
| Field | Type | Required |
|-------|------|----------|
| First Name | text | Yes |
| Last Name | text | Yes |
| Email Address | text | Yes |
| Phone Number | text | Yes |
| Phone Ext. | text | No |
| Company | text | Yes |
| GDPR Consent (Tripleseat privacy policy) | checkbox | Yes |

*SELECT YOUR DESIRED EVENT STYLE:*
| Field | Type | Options |
|-------|------|---------|
| Event Style | select | On-Premise Event, Drop-Off Catering, Pick-Up Catering, Full-Service Catering |

*EVENT ADDRESS (shown when Drop-Off/Pick-Up/Full-Service selected):*
| Field | Type |
|-------|------|
| Street Address | text |
| City | text |
| State/Province | text |
| Postal Code | text |
| Delivery Instructions | textarea |

*YOUR EVENT DETAILS:*
| Field | Type | Required |
|-------|------|----------|
| Nature of Event | text | No |
| Event Date | datepicker | Yes |
| Start Time | time (default 6:00pm) | No |
| End Time | time (default 9:00pm) | No |
| Number of People | text | Yes |
| Additional Information | textarea | No |
| How did you hear about us? | select | No |

*Referral Source Options:* EventUp, Instagram, Facebook, Venues by Tripleseat, Search Engine, Email, Other, CRH Employee, Yelp, Google Search, Open Table, Wedding Websites

- reCAPTCHA (visible, sitekey: `6LeC4CkUAAAAAK39iB_y_XhgS1EhvArMwecdZmCr`)
- Submit button

---

## 9. Onsite Party Inquiry (`/onsite-party-inquiry/`)

**Page Title:** Onsite Party Inquiry | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2019/08/brunch_new.jpg` (alt: "Onsite Party Inquiry", 1510x1007 - outdoor patio/brunch scene)
**Hero Heading:** "Onsite Party Inquiry"

### Content Structure

**Intro:**
- Heading (h2, decorative): "ONSITE PARTY INQUIRY"
- Subtext (bold, centered): "Please tell us about your event, we'll get back to you within 24 business hours."

**Form: Same Tripleseat form as Catering Inquiry**
- Identical lead form ID (`21496`) and public key
- Identical fields, options, and layout
- This is the exact same Tripleseat embed as the catering inquiry page

### Structural Notes
- Despite having a different page title and hero image, the form itself is identical to `/cateringinquiry/`
- Both pages use the same Tripleseat lead form ID

---

## 10. Catering Photos (`/catering-photos/`)

**Page Title:** Catering Photos | Tarpy's Monterey CA
**Hero/Banner:** Dark overlay with heading "Catering Photos" (no separate hero image visible)
**Hero Heading:** "Catering Photos"

### Content Structure

**WordPress Gallery** (`gallery-columns-4` layout, thumbnail size 426x240)

24 photos total, displayed as a 4-column grid. Each thumbnail links to the full-size image.

| # | Thumbnail URL | Full-size URL | Caption |
|---|--------------|---------------|---------|
| 1 | `.../catering1-426x240.jpg` | `.../catering1.jpg` | -- |
| 2 | `.../catering2-private-party-426x240.jpg` | `.../catering2-private-party.jpg` | PRIVATE PARTY |
| 3 | `.../catering3-426x240.jpg` | `.../catering3.jpg` | -- |
| 4 | `.../catering4-426x240.jpg` | `.../catering4.jpg` | -- |
| 5 | `.../catering5-twisted-roots-winery-426x240.jpg` | `.../catering5-twisted-roots-winery.jpg` | TWISTED ROOTS WINERY |
| 6 | `.../catering6-426x240.jpg` | `.../catering6.jpg` | -- |
| 7 | `.../catering7-426x240.jpg` | `.../catering7.jpg` | -- |
| 8 | `.../catering8-426x240.jpg` | `.../catering8.jpg` | -- |
| 9 | `.../catering9-426x240.jpg` | `.../catering9.jpg` | -- |
| 10 | `.../catering10-426x240.jpg` | `.../catering10.jpg` | -- |
| 11 | `.../catering11-e1608899940450-426x240.jpg` | `.../catering11-e1608899940450.jpg` | -- |
| 12 | `.../catering12-make-a-wish-foundation-426x240.jpg` | `.../catering12-make-a-wish-foundation.jpg` | MAKE A WISH FOUNDATION |
| 13 | `.../catering13-426x240.jpg` | `.../catering13.jpg` | -- |
| 14 | `.../catering14-carmel-wedding-426x240.jpg` | `.../catering14-carmel-wedding.jpg` | CARMEL WEDDING |
| 15 | `.../catering15-426x240.jpg` | `.../catering15.jpg` | -- |
| 16 | `.../catering16-426x240.jpg` | `.../catering16.jpg` | -- |
| 17 | `.../catering17-426x240.jpg` | `.../catering17.jpg` | -- |
| 18 | `.../catering18-426x240.jpg` | `.../catering18.jpg` | -- |
| 19 | `.../catering19-carmel-wedding-426x240.jpg` | `.../catering19-carmel-wedding.jpg` | CARMEL WEDDING |
| 20 | `.../catering20-private-party-426x240.jpg` | `.../catering20-private-party.jpg` | PRIVATE BIRTHDAY |
| 21 | `.../catering21-private-party-426x240.jpg` | `.../catering21-private-party.jpg` | PRIVATE PARTY |
| 22 | `.../catering22-426x240.jpg` | `.../catering22.jpg` | -- |
| 23 | `.../catering23-426x240.jpg` | `.../catering23.jpg` | -- |
| 24 | `.../catering24-twisted-roots-winery-426x240.jpg` | `.../catering24-twisted-roots-winery.jpg` | TWISTED ROOTS WINERY |

All image base URL: `https://www.tarpys.com/wp-content/uploads/2019/10/`

### Structural Notes
- Standard WordPress gallery using `galleryid-2092`
- Uses `gallery-columns-4` class for 4-column layout
- Images are thumbnails that link to full-size versions
- Full-page screenshot failed (too many images made the page too tall for Playwright)
- Only 8 of 24 photos have captions

---

## 11. Weddings & Parties (`/weddings-parties/`)

**Page Title:** Weddings | Tarpy's Monterey CA
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2019/03/wed-e1608899160747.jpg` (alt: "Weddings", 1490x743 - couple with trees)
**Hero Heading:** "IT'S YOUR STORY" + subheading "LET US HELP YOU TELL IT!"

### Content Structure

**Section 1: Introduction (full-width, centered)**
> Tarpy's is a creative American restaurant and wedding venue housed in a 1917 California stone ranch house. With picturesque patios and gardens, it's got all the makings for a special ceremony full of character.

- Contact: [banquet@tarpys.com](mailto:banquet@tarpys.com) or [831.655.2999](tel:831.655.2999)

**Services list (centered):**
- WEDDINGS
- ENGAGEMENT PARTIES
- BRIDAL SHOWERS
- REHEARSAL DINNERS
- FAMILY BRUNCH
- & MORE

**CTA Button:** [DOWNLOAD BRIDAL BROCHURE](https://www.tarpys.com/wp-content/uploads/2019/01/tarpysbridalf2.pdf)

**Note text:**
> Our site has many options for small gatherings. The courtyard is our largest area and the setting for all our wedding ceremonies, with receptions typically following in The Library and upstairs patio.

**Section 2: The Courtyard (2-column, image left)**
- Image: `https://www.tarpys.com/wp-content/uploads/2016/04/untitled-1_27.jpg` (alt: "HOPELESS ROMANTIC", 585x397)
- Heading (h2, decorative): "HOPELESS ROMANTIC"
- Subheading (h1): "THE COURTYARD"
- Decorative icon: `https://www.tarpys.com/wp-content/uploads/2014/05/2.png` (86x51)
- Description:

> The top choice for wedding ceremonies. Lush gardens surround this beautiful space with a distinctly European feel. The Courtyard is available for morning ceremonies between 9:30 and 10:30 a.m. and evenings between 4 and 5 p.m.

- **Seats 80**
- **Standing reception/cocktails 100**

**Section 3: The Library (2-column, text left)**
- Heading (h2, decorative): "you won't be shushed!"
- Subheading (h1): "the Library"
- Decorative icon: `https://www.tarpys.com/wp-content/uploads/2014/05/1.png` (59x49)
- Image: `https://www.tarpys.com/wp-content/uploads/2016/04/untitled-1_25.jpg` (alt: "Sthe Library", 586x400)
- Description:

> The Library provides a cozy, warm feel with fireplace, inspired art and a private garden patio; essentially everything you need to make your event a hit. The patio is perfect for mingling before an event and the beautiful outdoor terrace can be used for a small ceremony or a DJ and dancing.

- **Seats 80**
- **Standing reception/cocktails 120**

**Section 4: CTA**
- Text: "Click out all our smaller gathering spaces below."
- Button: [VIEW ALL ROOMS](https://www.tarpys.com/parties-are-us/)

**Section 5: Full-width image**
- Image: `https://www.tarpys.com/wp-content/uploads/2019/04/wedding01-1024x733.png` (alt: "wedding01", 1024x732 - layout/floor plan graphic)

---

## 12. Mother's Day Specials (`/mothers-day-specials/`)

**Page Title:** Parties are us | Tarpy's Monterey CA (NOTE: title mismatch - WordPress page title says "Parties are us" but content is Mother's Day)
**Hero Image:** `https://www.tarpys.com/wp-content/uploads/2025/05/coastelroot-banner-copy2-2048x1152.jpg` (alt: "Mothers Day Specials", 2048x1152)
**Hero Heading:** "Mothers Day Specials" + subheading "Celebrate Mothers Day in style with Coastal Roots"

### Content Structure

**Section 1: Introduction (full-width)**
- Heading (h2, decorative): "Make Mom feel extraordinary on May 11, 2025"
- Body (bold): "With exclusive promotions, luxurious dining, and a heartfelt celebration across our three Coastal Roots restaurants on the Monterey Peninsula."
- "Every mother dining with us on Mother's Day receives:"
  - A FREE GIFT, hand-selected with love
  - Our signature "Mom"osa Specialty Drink -- a delightful toast to the queen of the day!

**CTA Buttons (3-column):**
- [CALL 831.655.2999](tel:831.655.2999)
- [EMAIL](mailto:banquet@tarpys.com)
- [INQUIRY](https://www.tarpys.com/onsite-party-inquiry/)

**Section 2: Early Reservation Raffle (2-column, image left)**
- Image: `https://www.tarpys.com/wp-content/uploads/2025/05/mothers-day-carousel-early-reservation-raffle.jpg` (1440x1207)
- Heading: "Early Reservation Raffle -- Win Your Celebration On Us!"
- Text:

> Make your reservation by end of day May 7, 2025 and you could be one of two lucky winners to have your entire Mother's Day celebration PAID FOR by Coastal Roots!
> What You Get:
> - Up to $300 in credit toward food and non-alcoholic beverages
> - Valid only on May 11, 2025
> - Alcohol, tax, and gratuity not included

- Subheading: "BOOK YOUR TABLE EARLY"
- "Reserve now using the links below:"
- CTA: [RESERVE NOW](https://www.tarpys.com/reservations/)

**Section 3: Social Media Contest (2-column, text left)**
- Heading: "Social Media 'Tag Us and Win'--Brunch or Dinner for 4!"
- Text:

> Follow us and share the love!
> - Tag 3 friends on our Mother's Day ad
> - Make sure you're following our restaurant pages:
>   - [@ TarpysRoadhouse](https://www.instagram.com/tarpysroadhouse/)
>   - [@ MontrioBistro](https://www.instagram.com/montriobistro/)
>   - [@ RioGrillCarmel](https://www.instagram.com/RioGrillCarmel/)
> - Winners get Brunch or Dinner for 4 on May 11
> - Includes food + N/A beverages (excludes tax, tip & alcohol)

- Image: `https://www.tarpys.com/wp-content/uploads/2025/05/social12.jpg` (1440x1207)

**Section 4: Double Points (2-column, image left)**
- Image: `https://www.tarpys.com/wp-content/uploads/2025/05/mothers-day-carousel-double-points.jpg` (1528x1281)
- Heading: "Loyalty Members Get More -- Double Points!"
- Text:

> All Coastal Roots Loyalty Members will earn 2X the points when they dine on Mother's Day.
> If you're not a member yet, now's the perfect time to join!

- CTA: [SIGN UP FOR REWARDS](https://www.toasttab.com/coastalrootshospitality/rewardsSignup)

---

## Global Site Elements (present on all pages)

### Navigation
HOME | RESERVATIONS | MENUS | PRIVATE PARTIES (dropdown) | CATERING | NEWS & EVENTS | REWARDS & GIFT CARDS | CONTACT | CAREERS

### Logo
`https://www.tarpys.com/wp-content/uploads/2024/10/tarpys-2016-vector-no-stone4x.png` (1090x489)

### Footer
- **Contact:** TARPY'S | 831.647.1444 | 2999 Monterey Salinas Hwy, Monterey, CA 93940
- **Hours:**
  - Monday -- Thursday: 11:30 am -- 8:00 pm
  - Friday & Saturday: 11:30 am -- 9:00 pm
  - Sunday: 11:30 am -- 8:00 pm
- **Sister Restaurants:** "Tarpy's is proud to be part of the Coastal Roots Hospitality family. Be sure to explore our other restaurants: Rio Grill | Montrio"
- **Social:** FOLLOW ALONG - Facebook + Instagram icons
  - FB icon: `https://www.tarpys.com/wp-content/themes/rosa-child/images/fb.png`
  - IG icon: `https://www.tarpys.com/wp-content/themes/rosa-child/images/ins.png`
- **Newsletter signup:** Email input + SIGNUP button (Contact Form 7)
- **Badges:**
  - OpenTable Diners' Choice 2025: `https://www.opentable.com/restaurant-solutions/badge/ot/DC2-2025.png`
  - Ocean Friendly Restaurants: `https://www.tarpys.com/wp-content/uploads/2025/05/ofr-logo_white.png`
- **Copyright:** TARPYS 2026

### Google Reviews Widget (floating left sidebar)
- Overall Rating: 4.6 stars
- 5,765 reviews
- Google + Yelp logos

### Third-Party Integrations
- **Menu System:** SinglePlatform (places.singleplatform.com) - location: tarpys-roadhouse
- **Events/Catering Forms:** Tripleseat (api.tripleseat.com)
- **Reservations:** OpenTable
- **Loyalty/Rewards:** Toast (toasttab.com/coastalrootshospitality)
- **Newsletter:** Contact Form 7 (WordPress)
- **reCAPTCHA:** Two different keys used (site-wide invisible + Tripleseat visible)
- **Accessibility:** Accessibility widget (bottom-left icon)
- **Theme:** WordPress rosa-child theme

---

## Screenshots Saved

All screenshots saved to `/Users/samphilip/Documents/Claude/Tarpys/docs/design-references/`:

| Page | Filename | Type |
|------|----------|------|
| About Us | `about-us.png` | Full page |
| Dine In & Take Out | `dine-in-and-take-out.png` | Full page |
| Wine List | `wine-list.png` | Full page |
| Happy Hour & Bar | `happy-hour-bar.png` | Full page |
| Special Holiday Menu | `special-holiday-menu.png` | Full page |
| Virtual Tour | `virtual-tour.png` | Full page |
| Catering FAQ | `catering-faq.png` | Full page |
| Catering Inquiry | `catering-inquiry.png` | Full page |
| Onsite Party Inquiry | `onsite-party-inquiry.png` | Full page |
| Catering Photos | `catering-photos.png` | Viewport only (full page too large) |
| Weddings & Parties | `weddings-parties.png` | Full page |
| Mother's Day Specials | `mothers-day-specials.png` | Full page |
