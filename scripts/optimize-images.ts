import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.resolve('Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images');
const outputDir = path.resolve('public/assets/images/optimized');
const widths = [480, 960, 1440];
const formats: Array<'webp' | 'avif' | 'jpeg'> = ['webp', 'avif', 'jpeg'];

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const files = await fs.readdir(inputDir);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  for (const file of imageFiles) {
    const fullPath = path.join(inputDir, file);
    const stem = file.replace(/\.[^.]+$/, '');

    for (const width of widths) {
      for (const format of formats) {
        const outputPath = path.join(outputDir, `${stem}-${width}.${format}`);
        const pipeline = sharp(fullPath).resize({ width, withoutEnlargement: true });

        if (format === 'webp') await pipeline.webp({ quality: 76 }).toFile(outputPath);
        if (format === 'avif') await pipeline.avif({ quality: 52 }).toFile(outputPath);
        if (format === 'jpeg') await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(outputPath);
      }
    }
  }

  console.log(`Optimized ${imageFiles.length} images to ${outputDir}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
