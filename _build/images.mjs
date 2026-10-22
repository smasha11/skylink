// Optimises the photos in _build/images-src/ into /assets/img/ (WebP, 2 widths) + og-image.jpg.
// Run with `npm run images` after adding or replacing a photo in images-src/.
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join, dirname, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'images-src');
const out = join(here, '..', 'assets', 'img');

for (const file of readdirSync(src)) {
  const { name } = parse(file);
  const input = join(src, file);
  for (const [w, suffix] of [[1600, ''], [800, '-800']]) {
    const info = await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality: 74 }).toFile(join(out, `${name}${suffix}.webp`));
    console.log(`${name}${suffix}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
  }
}

// Social share image (1200x630) from the home hero photo
const og = await sharp(join(src, 'hero-trucks.webp')).resize(1200, 630, { fit: 'cover', position: 'right' }).jpeg({ quality: 78, mozjpeg: true }).toFile(join(out, 'og-image.jpg'));
console.log(`og-image.jpg  1200x630  ${Math.round(og.size / 1024)} KB`);
