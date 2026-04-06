import { writeFile } from 'fs/promises';
const dir = 'public/images';
const imgs = [
  { url: 'https://www.tarpys.com/wp-content/uploads/2026/03/gather-around-the-table-900x506.jpg', name: 'news-1.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2026/03/from-cozy-nights-to-spring-light-900x506.jpg', name: 'news-2.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/10/fall-flavors-monterey-style-900x675.jpeg', name: 'news-3.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/10/the-ultimate-guide-to-hosting-fall-events-at-tarpys--900x506.png', name: 'news-4.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/10/warm-up-your-weekend-900x599.jpg', name: 'news-5.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/10/cozy-season-is-here-900x600.jpg', name: 'news-6.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/09/savor-the-shift-900x506.jpg', name: 'news-7.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/09/your-fall-gathering-900x506.jpg', name: 'news-8.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/09/welcome-fall-900x506.jpg', name: 'news-9.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2025/08/last-taste-of-summer-900x506.jpg', name: 'news-10.jpg' },
];
for (const img of imgs) {
  try {
    const res = await fetch(img.url);
    if (!res.ok) { console.log(`SKIP ${img.name}: ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(`${dir}/${img.name}`, buf);
    console.log(`OK ${img.name} (${(buf.length/1024).toFixed(0)}KB)`);
  } catch (e) { console.log(`ERR ${img.name}: ${e.message}`); }
}
console.log('Done');
