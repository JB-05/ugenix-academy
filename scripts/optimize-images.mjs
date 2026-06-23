import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = path.resolve(process.cwd(), 'public')

/** Resize + compress PNGs used on the site without changing layout dimensions in CSS. */
const TARGETS = [
  {
    file: 'illustrations/character-hero@3x.png',
    maxWidth: 1400,
    png: { compressionLevel: 9, quality: 82, effort: 10 },
  },
  {
    file: 'assets/features-portfolio-phone-tablet.png',
    maxWidth: 1280,
    png: { compressionLevel: 9, quality: 80, effort: 10 },
  },
  {
    file: 'illustrations/contact-courses.png',
    maxWidth: 960,
    png: { compressionLevel: 9, quality: 78, effort: 10 },
  },
  {
    file: 'illustrations/contact-partnerships.png',
    maxWidth: 960,
    png: { compressionLevel: 9, quality: 78, effort: 10 },
  },
]

async function optimizeOne({ file, maxWidth, png }) {
  const inputPath = path.join(ROOT, file)
  if (!fs.existsSync(inputPath)) {
    console.warn(`skip (missing): ${file}`)
    return
  }

  const before = fs.statSync(inputPath).size
  const tmpPath = `${inputPath}.opt.tmp`

  let pipeline = sharp(inputPath)
  const meta = await pipeline.metadata()

  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true })
  }

  await pipeline.png(png).toFile(tmpPath)
  fs.renameSync(tmpPath, inputPath)

  const after = fs.statSync(inputPath).size
  const saved = ((1 - after / before) * 100).toFixed(1)
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`)
}

for (const target of TARGETS) {
  await optimizeOne(target)
}
