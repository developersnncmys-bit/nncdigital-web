import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('shots/review', { recursive: true })
const URL = 'http://localhost:3001'
const browser = await chromium.launch()

async function fullpage(name, width, height, url = URL) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(700)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(500)
  await page.screenshot({ path: `shots/review/${name}.png`, fullPage: true })
  await ctx.close()
  console.log('captured', name)
}

await fullpage('desktop', 1440, 900)
await fullpage('mobile', 390, 844)
await fullpage('pricing', 1440, 900, URL + '/pricing')

await browser.close()
console.log('done')
