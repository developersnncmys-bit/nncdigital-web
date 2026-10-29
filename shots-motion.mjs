import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('shots/motion', { recursive: true })
const URL = 'http://localhost:3000'
const browser = await chromium.launch()

// Real user experience: animations ON (no reduced motion).
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'no-preference',
})
const page = await ctx.newPage()
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const total = await page.evaluate(() => document.body.scrollHeight)
const step = 800
let i = 0
for (let y = 0; y < total; y += step) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y)
  await page.waitForTimeout(700) // let reveals fire
  await page.screenshot({ path: `shots/motion/scroll-${String(i).padStart(2, '0')}.png` })
  i++
}

console.log('steps:', i, 'scrollHeight:', total)
console.log('CONSOLE ERRORS:', errors.length ? JSON.stringify(errors, null, 2) : 'none')
await browser.close()
