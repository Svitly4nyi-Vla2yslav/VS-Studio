import {existsSync, unlinkSync} from 'node:fs';
import {resolve} from 'node:path';
import sharp from 'sharp';

const source = resolve('../../public/videos/plehn-recruiter-poster.png');
const output = resolve('../../public/videos/plehn-recruiter-poster.webp');
await sharp(source).webp({quality: 88, smartSubsample: true}).toFile(output);

if (!existsSync(output)) {
  throw new Error('Die WebP-Konvertierung des Posters ist fehlgeschlagen.');
}

unlinkSync(source);
