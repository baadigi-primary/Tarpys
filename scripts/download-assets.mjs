import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;

const assets = [
  // Background textures
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/tint.jpg', dest: 'images/tint.jpg' },
  { url: 'https://www.tarpys.com/wp-content/themes/rosa-child/images/footer.png', dest: 'images/footer-bg.png' },

  // Logo
  { url: 'https://www.tarpys.com/wp-content/uploads/2024/10/tarpys-2016-vector-no-stone4x.png', dest: 'images/tarpys-logo.png' },

  // Favicon
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/05/favicon.png', dest: 'seo/favicon.png' },

  // Hero background images
  { url: 'https://www.tarpys.com/wp-content/uploads/2018/02/bg-1-e1608893980863.jpg', dest: 'images/hero1-bg.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/08/comfort-foods.jpg', dest: 'images/hero2-bg.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2020/10/th2909-crh-tarpys-website-slider-update3.jpg', dest: 'images/hero3-bg.jpg' },

  // Content section images
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/sense-grid-1.png', dest: 'images/food-grid.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/hearty-right.png', dest: 'images/history-collage.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/09/best-of-winner_24_800x800-300x300.jpg', dest: 'images/best-of-winner.jpg' },

  // Decorative icons
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/1.png', dest: 'images/icon-1.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/2.png', dest: 'images/icon-2.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/07/3.png', dest: 'images/icon-3.png' },

  // Social media icons
  { url: 'https://www.tarpys.com/wp-content/themes/rosa-child/images/fb.png', dest: 'images/social-facebook.png' },
  { url: 'https://www.tarpys.com/wp-content/themes/rosa-child/images/ins.png', dest: 'images/social-instagram.png' },

  // Award / partner logos
  { url: 'https://www.opentable.com/restaurant-solutions/badge/ot/DC2-2025.png', dest: 'images/opentable-badge.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/05/ofr-logo_white.png', dest: 'images/ofr-logo.png' },
];

async function download(url, destRel) {
  const dest = path.join(PUBLIC_DIR, destRel);
  mkdirSync(path.dirname(dest), { recursive: true });
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, destRel).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const ws = createWriteStream(dest);
      pipeline(res, ws).then(resolve).catch(reject);
    }).on('error', reject);
  });
}

console.log(`Downloading ${assets.length} assets to ${PUBLIC_DIR}...`);

const results = await Promise.allSettled(
  assets.map(({ url, dest }) =>
    download(url, dest)
      .then(() => { console.log(`  ✓ ${dest}`); })
      .catch(err => { console.error(`  ✗ ${dest}: ${err.message}`); })
  )
);

const failed = results.filter(r => r.status === 'rejected');
console.log(`\nDone. ${assets.length - failed.length}/${assets.length} succeeded.`);
