import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('shots', { recursive: true })
const URL = 'http://localhost:3001'
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
})
const page = await ctx.newPage()
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
// find Showcase by heading text and scroll it into view
await page.evaluate(() => {
  const h = [...document.querySelectorAll('h2')].find((e) =>
    /See NNC CRM in action/i.test(e.textContent)
  )
  h?.closest('section')?.scrollIntoView({ block: 'center' })
})
await page.waitForTimeout(900)
await page.screenshot({ path: 'shots/showcase.png' })
await ctx.close()
await browser.close()
console.log('captured shots/showcase.png')
