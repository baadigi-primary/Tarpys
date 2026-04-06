import { writeFile } from 'fs/promises';

const dir = 'public/images';
const assets = [
  { url: 'https://www.tarpys.com/wp-content/uploads/2018/02/untitled-1-e1608900255633.jpg', name: 'hero-menus.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/private-e1608898162867.jpg', name: 'hero-parties.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2019/09/hcat-e1608900469788.jpg', name: 'hero-catering.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2016/04/spec.jpg', name: 'hero-rewards.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2024/10/rewards.jpg', name: 'rewards-card.jpg' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/2.png', name: 'icon-fork-2.png' },
  { url: 'https://www.tarpys.com/wp-content/uploads/2014/05/1.png', name: 'icon-fork-1.png' },
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
