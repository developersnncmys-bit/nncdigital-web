import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('shots', { recursive: true })
const URL = 'http://localhost:3000'

const browser = await chromium.launch()

async function capture(name, width, height) {
  // reducedMotion:'reduce' → reveal final states show, Lenis skipped (clean capture)
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  // nudge scroll to settle any ScrollTrigger states, then back to top
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(600)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(400)
  await page.screenshot({ path: `shots/${name}-full.png`, fullPage: true })
  // above-the-fold hero
  await page.screenshot({ path: `shots/${name}-hero.png` })
  await ctx.close()
  console.log(`captured ${name} (${width}x${height})`)
}

await capture('desktop', 1440, 900)
await capture('mobile', 390, 844)

// Configurator close-up (desktop) — scroll #build into view
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.evaluate(() => document.querySelector('#build')?.scrollIntoView())
  await page.waitForTimeout(600)
  await page.screenshot({ path: 'shots/configurator.png' })
  await ctx.close()
  console.log('captured configurator')
}

await browser.close()
console.log('done')
