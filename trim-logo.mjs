import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'fs'

const b64 = readFileSync('public/nnc-logo.png').toString('base64')
const browser = await chromium.launch()
const page = await browser.newPage()

const out = await page.evaluate(async (src) => {
  const img = new Image()
  img.src = src
  await img.decode()
  const c = document.createElement('canvas')
  c.width = img.naturalWidth
  c.height = img.naturalHeight
  const ctx = c.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height)
  let minX = width, minY = height, maxX = 0, maxY = 0
  const A = 16
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > A) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  const pad = 6
  minX = Math.max(0, minX - pad)
  minY = Math.max(0, minY - pad)
  maxX = Math.min(width - 1, maxX + pad)
  maxY = Math.min(height - 1, maxY + pad)
  const w = maxX - minX + 1
  const h = maxY - minY + 1
  const c2 = document.createElement('canvas')
  c2.width = w
  c2.height = h
  c2.getContext('2d').drawImage(c, minX, minY, w, h, 0, 0, w, h)
  return { url: c2.toDataURL('image/png'), w, h, ow: width, oh: height }
}, 'data:image/png;base64,' + b64)

writeFileSync('public/nnc-logo.png', Buffer.from(out.url.split(',')[1], 'base64'))
console.log(`trimmed ${out.ow}x${out.oh} -> ${out.w}x${out.h} (ratio ${(out.w / out.h).toFixed(2)})`)
await browser.close()
