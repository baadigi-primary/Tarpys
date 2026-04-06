import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const dir = 'public/images';
if (!existsSync(dir)) await mkdir(dir, { recursive: true });

const assets = [
  // Reservations hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update2-e1608894038720.jpg', name: 'hero-reservations.jpg' },
  // Menus hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update4-e1608894072747.jpg', name: 'hero-menus.jpg' },
  // Private parties hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update1-e1608894017478.jpg', name: 'hero-parties.jpg' },
  // Catering hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update3-e1608894055755.jpg', name: 'hero-catering.jpg' },
  // Rewards hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update5-e1608894089258.jpg', name: 'hero-rewards.jpg' },
  // Contact hero
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update2-e1608894038720.jpg', name: 'hero-contact.jpg' },
  // Fork/knife divider icon
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/03/div.png', name: 'divider-icon.png' },
  // Rooms/bottom image
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/bottom.jpg', name: 'rooms-bottom.jpg' },
  // OpenTable badge
  { url: 'https://www.opentable.com/restaurant-solutions/badge/ot/DC2-2025.png', name: 'opentable-dc-2025.png' },
];

for (const asset of assets) {
  try {
    const res = await fetch(asset.url);
    if (!res.ok) { console.log(`SKIP ${asset.name}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(`${dir}/${asset.name}`, buf);
    console.log(`OK ${asset.name} (${(buf.length/1024).toFixed(0)}KB)`);
  } catch (e) {
    console.log(`ERR ${asset.name}: ${e.message}`);
  }
}
console.log('Done');
