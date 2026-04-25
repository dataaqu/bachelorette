import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const W = 1200;
const H = 630;
const BG = { r: 0xfe, g: 0xf7, b: 0xe7, alpha: 1 };

const champBuf = await sharp(path.join(publicDir, 'champ.png'))
  .resize(560, 560, { fit: 'inside', kernel: 'lanczos3' })
  .png()
  .toBuffer();

await sharp({
  create: { width: W, height: H, channels: 4, background: BG },
})
  .composite([{ input: champBuf, gravity: 'center' }])
  .png({ quality: 92 })
  .toFile(path.join(publicDir, 'og-image.png'));

console.log('✓ og-image.png created — 1200×630');
