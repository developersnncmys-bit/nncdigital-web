#!/usr/bin/env node
/**
 * Installs new Travel CRM product screenshots and keeps the code in step.
 *
 *   node scripts/install-travel-shots.mjs <folder-or-zip>
 *   node scripts/install-travel-shots.mjs            # re-reads what is already in place
 *
 * What it does:
 *   1. copies any recognised *.png into public/travel-crm/images/
 *   2. rewrites the w/h values in data/travel.js from the files' real pixel size,
 *      so width/height attributes always match and no layout shift appears
 *   3. reports, per image, whether the resolution is enough for the size the
 *      design renders it at on a 2x display
 *
 * The screenshots are 1x captures at ~1366px by default, which the design shows
 * at ~600 CSS px. That is sharp enough on a 1x monitor but soft on a 2x one.
 * Re-capture at 2x (~2732px wide) and run this script to fix that.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const IMAGES = 'public/travel-crm/images'
const DATA = 'data/travel.js'

// The CSS width each image is rendered at, measured from the built pages.
const RENDERED_CSS_PX = {
  'dashboard.png': 618,
  'pipeline.png': 598,
  'quote-builder.png': 598,
  'hotels.png': 598,
  'payments.png': 598,
  'quote-cover.png': 255,
  'voucher.png': 320,
  'instalment.png': 237,
  'logo.png': 40,
}

const pngSize = (file) => {
  const b = fs.readFileSync(file)
  if (b.readUInt32BE(0) !== 0x89504e47) throw new Error(`not a PNG: ${file}`)
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }
}

// ---- 1. optionally copy in new files -------------------------------------
const src = process.argv[2]
if (src) {
  let dir = src
  if (src.toLowerCase().endsWith('.zip')) {
    dir = fs.mkdtempSync(path.join(process.env.TEMP || '/tmp', 'shots-'))
    execFileSync('powershell', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${path.resolve(src)}' -DestinationPath '${dir}' -Force`])
    console.log(`extracted ${src}`)
  }
  const found = []
  ;(function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const f = path.join(d, e.name)
      if (e.isDirectory()) walk(f)
      else if (e.name.toLowerCase().endsWith('.png') && RENDERED_CSS_PX[e.name]) found.push(f)
    }
  })(dir)
  if (!found.length) {
    console.error(`no recognised screenshots in ${src}`)
    console.error(`expected any of: ${Object.keys(RENDERED_CSS_PX).join(', ')}`)
    process.exit(1)
  }
  for (const f of found) {
    const name = path.basename(f)
    fs.copyFileSync(f, path.join(IMAGES, name))
    console.log(`  copied ${name}`)
  }
  console.log()
}

// ---- 2. sync the dimensions recorded in data/travel.js --------------------
let data = fs.readFileSync(DATA, 'utf8')
let patched = 0
for (const name of fs.readdirSync(IMAGES).filter((f) => f.endsWith('.png'))) {
  const { w, h } = pngSize(path.join(IMAGES, name))
  const re = new RegExp(`(src: '/travel-crm/images/${name.replace('.', '\\.')}',[\\s\\S]{0,200}?w: )(\\d+)(,\\s*\\n?\\s*h: )(\\d+)`, 'g')
  data = data.replace(re, (m, a, oldW, c, oldH) => {
    if (+oldW !== w || +oldH !== h) patched++
    return `${a}${w}${c}${h}`
  })
}
fs.writeFileSync(DATA, data)
console.log(patched ? `updated ${patched} dimension pair(s) in ${DATA}` : `dimensions in ${DATA} already correct`)

// ---- 3. report sharpness --------------------------------------------------
console.log('\nimage              actual px   shown at   needs @2x   verdict')
let soft = 0
for (const [name, css] of Object.entries(RENDERED_CSS_PX)) {
  const file = path.join(IMAGES, name)
  if (!fs.existsSync(file)) {
    console.log(`  ${name.padEnd(18)} MISSING`)
    continue
  }
  const { w, h } = pngSize(file)
  const need = css * 2
  const ok = w >= need
  if (!ok) soft++
  console.log(
    `  ${name.padEnd(18)} ${String(`${w}x${h}`).padEnd(11)} ${String(css + 'px').padEnd(10)} ${String(need + 'px').padEnd(11)} ${
      ok ? 'crisp on 2x' : `SOFT — want >= ${need}px wide`
    }`
  )
}
console.log(
  soft
    ? `\n${soft} image(s) below 2x. Re-capture those at device pixel ratio 2 and re-run.`
    : '\nevery image has enough resolution for a 2x display.'
)
console.log('\nnext: npm run build')
