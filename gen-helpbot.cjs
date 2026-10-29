const fs = require('fs')
const f = 'C:/Users/admin/AppData/Local/Temp/claude/c--Users-admin-nncdigital/a15940b3-f9c5-43e2-8f7f-a0efef23b1b8/tasks/w5gk1r8vr.output'
const result = JSON.parse(fs.readFileSync(f, 'utf8')).result

const ALLOWED = new Set([
  '/', '/pricing', '/features', '/features/enquiries', '/features/sales-pipeline',
  '/features/forecasting', '/features/invoicing', '/features/whatsapp', '/features/reports',
  '/features/integrations', '/industries', '/industries/sales-teams', '/industries/service-businesses',
  '/industries/manufacturing', '/industries/retail', '/industries/healthcare', '/industries/education',
  '/industries/real-estate', '/company/about', '/company/careers', '/company/blog', '/company/partners',
  '/company/customers', '/company/contact', '/company/press', '/support/help-center',
  '/support/getting-started', '/support/api', '/support/status', '/support/security',
  '/support/data-privacy', '/support/contact', '/legal/terms', '/legal/privacy', '/legal/trust-center',
  '/legal/acceptable-use', '/legal/compliance', '/legal/cookies', '/sitemap', '#start',
])

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const slug = (s) => norm(s).replace(/\s+/g, '-').slice(0, 48)

const seenQ = new Set()
const seenId = new Set()
let dropped = 0, badLink = 0
const KB = []
for (const e of result.entries) {
  const key = norm(e.question)
  if (seenQ.has(key)) { dropped++; continue }
  seenQ.add(key)
  let id = slug(e.question)
  while (seenId.has(id)) id += '-x'
  seenId.add(id)
  const entry = {
    id,
    topic: e.topic,
    intents: e.intents,
    question: e.question,
    answer: e.answer,
  }
  if (e.linkHref) {
    if (ALLOWED.has(e.linkHref)) entry.link = { label: e.linkLabel || 'Learn more', href: e.linkHref }
    else badLink++
  }
  KB.push(entry)
}

// Build 6 starters: critic's + high-intent fillers that exist as questions
const starters = [...result.starters]
const want = [
  /what does nnc crm do|what is nnc/i,
  /which industries|industries (is|do)/i,
  /how (do|can) i (contact|reach)|talk to|contact (your|the) team/i,
  /how (do i )?get started|how do i start/i,
]
for (const re of want) {
  if (starters.length >= 6) break
  const hit = KB.find((e) => re.test(e.question) && !starters.includes(e.question))
  if (hit) starters.push(hit.question)
}
const STARTERS = starters.slice(0, 6)

const out = `// Knowledge base for the NNC help chatbot (the floating assistant widget).
// Generated from a grounded multi-agent pass over the site content. ${KB.length} entries.

export const GREETING =
  "Hi! I'm the NNC assistant. Ask me about pricing, features, the free trial, or anything else, or tap a question below."

export const CONTACT = {
  phone: '94227 99466',
  email: 'hello@nncdigital.co.in',
  hours: 'Mon to Sat, 10am to 7pm',
}

export const STARTERS = ${JSON.stringify(STARTERS, null, 2)}

export const KB = ${JSON.stringify(KB, null, 2)}
`

fs.writeFileSync('data/helpbot.js', out)
console.log('wrote data/helpbot.js')
console.log('entries kept:', KB.length, '| duplicates dropped:', dropped, '| invalid links dropped:', badLink)
console.log('starters:', JSON.stringify(STARTERS))
