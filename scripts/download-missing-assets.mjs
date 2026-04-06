import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const dir = 'public/images';
if (!existsSync(dir)) await mkdir(dir, { recursive: true });

const assets = [
  // About Us
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/about1.png', name: 'about-ranch.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2022/03/patrick.png', name: 'team-patrick.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/andreas.png', name: 'team-andreas.png' },
  // Wine List hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/10/catering11-e1608899940450.jpg', name: 'hero-wine-list.jpg' },
  // Happy Hour hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2022/04/rio_cocktails_1.jpg', name: 'hero-happy-hour.jpg' },
  // Special Holiday hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2022/04/mothers_day_brunch_banner.jpg', name: 'hero-holiday-menu.jpg' },
  // Virtual Tour hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/contact-e1608899640519.jpg', name: 'hero-virtual-tour.jpg' },
  // Catering Inquiry hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/09/catering-5-inquiry-e1608893592148.jpg', name: 'hero-catering-inquiry.jpg' },
  // Onsite Party Inquiry hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/08/brunch_new.jpg', name: 'hero-onsite-inquiry.jpg' },
  // Weddings hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/03/wed-e1608899160747.jpg', name: 'hero-weddings.jpg' },
  // Weddings venue images
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/untitled-1_27.jpg', name: 'wedding-courtyard.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/untitled-1_25.jpg', name: 'wedding-library.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/04/wedding01-1024x733.png', name: 'wedding-floorplan.png' },
  // Mother's Day hero + images
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/05/coastelroot-banner-copy2-2048x1152.jpg', name: 'hero-mothers-day.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/05/mothers-day-carousel-early-reservation-raffle.jpg', name: 'mothers-day-raffle.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/05/social12.jpg', name: 'mothers-day-social.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/05/mothers-day-carousel-double-points.jpg', name: 'mothers-day-points.jpg' },
  // Catering photos (thumbnails)
  ...Array.from({length: 24}, (_, i) => {
    const num = i + 1;
    const names = {
      2: 'catering2-private-party', 5: 'catering5-twisted-roots-winery',
      11: 'catering11-e1608899940450', 12: 'catering12-make-a-wish-foundation',
      14: 'catering14-carmel-wedding', 19: 'catering19-carmel-wedding',
      20: 'catering20-private-party', 21: 'catering21-private-party',
      24: 'catering24-twisted-roots-winery'
    };
    const base = names[num] || `catering${num}`;
    return {
      url: `https://www.tarpys.com/wp-content/uploads/2019/10/${base}-426x240.jpg`,
      name: `catering-photo-${num}.jpg`
    };
  })
];

let ok = 0, fail = 0;
for (const asset of assets) {
  try {
    const res = await fetch(asset.url);
    if (!res.ok) { console.log(`SKIP ${asset.name}: ${res.status}`); fail++; continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(`${dir}/${asset.name}`, buf);
    console.log(`OK ${asset.name} (${(buf.length/1024).toFixed(0)}KB)`);
    ok++;
  } catch (e) {
    console.log(`ERR ${asset.name}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone: ${ok} OK, ${fail} failed`);
