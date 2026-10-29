import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

mkdirSync('shots/sec', { recursive: true })
const URL = 'http://localhost:3001'
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 880 },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
})
const page = await ctx.newPage()
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)

const targets = [
  ['hero', 'h1'],
  ['workswith', 'Works with'],
  ['lifecycle', 'whole customer journey'],
  ['howitworks', 'Up and running'],
  ['usecases', 'how your business works'],
  ['faq', 'answered'],
]

for (const [name, sel] of targets) {
  await page.evaluate((s) => {
    let el
    if (s === 'h1') el = document.querySelector('h1')
    else {
      el = [...document.querySelectorAll('h2,h3,p,span')].find((e) =>
        e.textContent.includes(s)
      )
    }
    const sec = el?.closest('section') || el
    const y = sec.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo(0, Math.max(0, y))
  }, sel)
  await page.waitForTimeout(500)
  await page.screenshot({ path: `shots/sec/${name}.png` })
  console.log('captured', name)
}

await browser.close()
console.log('done')
