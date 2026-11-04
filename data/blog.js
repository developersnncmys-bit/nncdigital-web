// Blog post catalog. Add new posts as new entries in POSTS; everything else
// (index listing, dynamic routes, sitemap-eligibility) reads from this.
//
// Shape per post:
//   slug         - URL segment (unique)
//   title        - headline
//   excerpt      - 1–2 sentence lede shown on index cards and meta description
//   category     - short label shown as a chip (Playbooks / Industry / etc.)
//   publishedAt  - ISO date string ('2026-10-15')
//   readMinutes  - rough read time in minutes (int)
//   author       - { name } — no fake named customers; team byline is fine
//   cover        - { src, alt } for a real image, OR { tone } for a
//                  placeholder gradient (tones: navy / teal / amber / plum)
//   sections     - [{ h, p: [string], bullets?: [string] }] body content
//
// All posts default to noindex until /blog is added to INDEXABLE_PREFIXES in
// lib/site.js. The sample content below is placeholder — replace before launch.

export const POSTS = [
  {
    slug: 'pick-a-crm-your-team-will-actually-use',
    title: 'How to pick a CRM your team will actually use.',
    excerpt:
      'Most CRM rollouts fail because the rep sees the tool as admin. Here is a five-point test to run before you sign any contract — and the questions your demo call should actually answer.',
    category: 'Playbooks',
    publishedAt: '2026-10-28',
    readMinutes: 6,
    author: { name: 'Team NNC' },
    cover: { tone: 'navy' },
    sections: [
      {
        h: 'The problem with most CRM selections',
        p: [
          'Teams pick a CRM by feature checklist and launch by project plan. Six weeks in, the pipeline is half-filled, the reports are rehearsed for the weekly review, and the real work still lives in WhatsApp and Excel. The tool did not fail — the fit did.',
          'A CRM that your team actually opens every morning is not the one with the most features. It is the one that gives them something back in the first week: a call list, a reminder, a ready-to-send quote. Everything else is optional.',
        ],
      },
      {
        h: 'Five tests to run before you sign',
        p: ['Score any shortlist against these five, and be honest. If any one fails, assume the rollout will stall at that point.'],
        bullets: [
          'Does it capture leads from WhatsApp without the rep copying them in?',
          'Can a new rep learn the pipeline view in under ten minutes?',
          'Does it work on a phone in the field, not just a desk browser?',
          'Does the manager see the truth without a status meeting?',
          'Can your data come out on the day you decide to leave?',
        ],
      },
      {
        h: 'Questions a demo call should actually answer',
        p: [
          'Vendors tend to show you dashboards. That is the wrong half of the product. Ask instead to see what a rep does in the first thirty minutes of their day — because that is the view you are really buying.',
          'If the demo rep hesitates to show you the mobile app, or if "capture from WhatsApp" turns into "we have an integration you can set up", take that as a data point.',
        ],
      },
      {
        h: 'What to decide in the first week',
        p: [
          'Pick two things only: the stages your pipeline uses, and the single number your team will track daily. Everything else can wait until month two. Launches fail when the first week is a configuration marathon instead of a run.',
        ],
      },
    ],
  },
  {
    slug: 'whatsapp-first-sales-process',
    title: 'Why Indian businesses run on WhatsApp — and how to build a sales process around it.',
    excerpt:
      'WhatsApp is not a channel your sales team uses. It is where your buyers already live. Here is how to stop pretending otherwise and build a pipeline that treats WhatsApp as a first-class input.',
    category: 'Industry',
    publishedAt: '2026-10-21',
    readMinutes: 7,
    author: { name: 'Team NNC' },
    cover: { tone: 'teal' },
    sections: [
      {
        h: 'The conversation moved. The CRM did not.',
        p: [
          'In most Indian service and retail businesses, the real sales pipeline runs through a handful of WhatsApp threads on the owner\'s phone. The CRM holds the leads that someone remembered to log, two days late, with half the detail missing. Every month the numbers in the two systems drift further apart, and the one on the phone is the one that is right.',
          'The fix is not to force the rep off WhatsApp. It is to put WhatsApp inside the deal, so the conversation and the record are the same thing.',
        ],
      },
      {
        h: 'Three rules for a WhatsApp-first pipeline',
        bullets: [
          'Every inbound message is a lead until the rep marks it otherwise.',
          'Every reply is logged against the lead automatically, not re-typed.',
          'Every follow-up has a date on it the system owns, not a reminder the rep has to remember.',
        ],
        p: [],
      },
      {
        h: 'What this unlocks',
        p: [
          'When WhatsApp is the input and the CRM is the record, two things stop happening. Leads stop going cold because the rep "forgot to put them in", and managers stop running status meetings to find out what is actually happening. The pipeline is live, because the conversation is live.',
          'The second-order effect is more interesting: the owner finally has a weekly number for replies-within-24-hours. That number tells them exactly where the leaks are.',
        ],
      },
      {
        h: 'Where it breaks',
        p: [
          'This model breaks the moment the team starts using a personal WhatsApp account instead of WhatsApp Business. It also breaks if the templates and auto-replies are off-brand, because then the customer feels the handoff. Both are solvable — but they are the two failure modes to watch.',
        ],
      },
    ],
  },
  {
    slug: 'four-numbers-every-small-business-should-check',
    title: 'The four numbers every small-business owner should check every Monday.',
    excerpt:
      'Dashboards full of charts feel productive and change almost nothing. Pick four numbers, check them every Monday, act on them by Wednesday. That is the loop.',
    category: 'Playbooks',
    publishedAt: '2026-10-07',
    readMinutes: 5,
    author: { name: 'Team NNC' },
    cover: { tone: 'amber' },
    sections: [
      {
        h: 'Most dashboards are theatre',
        p: [
          'A twelve-chart dashboard looks like management. It is usually the opposite. The owner opens it on Monday, scans it for a minute, closes it, and runs the week on gut and a WhatsApp group. Nothing in the dashboard changed what anyone did that week.',
          'The fix is boring: cut the twelve charts to four numbers, and commit to a weekly ritual around them.',
        ],
      },
      {
        h: 'The four numbers',
        bullets: [
          'New leads this week vs the same week last month.',
          'Deals closing this week — with an owner and a dollar value against each.',
          'Invoices overdue by more than seven days — with the dollar amount at the top.',
          'WhatsApp replies waiting on someone on your team — count only.',
        ],
        p: [
          'That is it. If any of those four numbers moves the wrong way two weeks in a row, you have your Monday agenda.',
        ],
      },
      {
        h: 'The weekly ritual',
        p: [
          'Monday morning: scan the four. Pick one that is off. Decide by Monday evening who is accountable to move it. Check again on Friday. Do not add a fifth number until the four are moving the way you want.',
          'The point of a dashboard is not to inform. It is to force a decision. Four numbers force decisions; twelve do not.',
        ],
      },
    ],
  },
]

// Convenience: posts by slug (used by the dynamic route) and sorted by date
// desc (used by the index listing). Keep derivations here so pages stay thin.
export const POSTS_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]))
export const POSTS_SORTED = [...POSTS].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
)
