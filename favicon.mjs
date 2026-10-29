import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'fs'

const b64 = readFileSync('public/nnc-logo.png').toString('base64')
const browser = await chromium.launch()
const page = await browser.newPage()

const out = await page.evaluate(async (src) => {
  const img = new Image()
  img.src = src
  await img.decode()
  const W = img.naturalWidth, H = img.naturalHeight
  const c = document.createElement('canvas')
  c.width = W; c.height = H
  const ctx = c.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const { data } = ctx.getImageData(0, 0, W, H)
  const colInk = (x) => {
    for (let y = 0; y < H; y++) if (data[(y * W + x) * 4 + 3] > 16) return true
    return false
  }
  // walk from left: mark = first ink run; stop at the gap before "NNC"
  let x = 0
  while (x < W && !colInk(x)) x++
  const start = x
  // full vertical bounds of the lockup
  let minY = H, maxY = 0
  for (let yy = 0; yy < H; yy++)
    for (let xx = 0; xx < W; xx++)
      if (data[(yy * W + xx) * 4 + 3] > 16) { if (yy < minY) minY = yy; if (yy > maxY) maxY = yy; break }
  const mh = maxY - minY + 1
  // the swirl mark is the leftmost square region
  const mw = mh
  // square canvas with padding
  const side = Math.round(Math.max(mw, mh) * 1.18)
  const sq = document.createElement('canvas')
  sq.width = 512; sq.height = 512
  const sctx = sq.getContext('2d')
  const scale = 512 / side
  const dw = mw * scale, dh = mh * scale
  sctx.drawImage(c, start, minY, mw, mh, (512 - dw) / 2, (512 - dh) / 2, dw, dh)
  return { url: sq.toDataURL('image/png'), mw, mh, W, H }
}, 'data:image/png;base64,' + b64)

writeFileSync('app/icon.png', Buffer.from(out.url.split(',')[1], 'base64'))
console.log(`mark ${out.mw}x${out.mh} from ${out.W}x${out.H} -> app/icon.png 512x512`)
await browser.close()
