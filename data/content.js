// ============================================================
// Single source of truth for ALL site copy. No "AI agent" / "agentic" language.
// [ ] marks values to replace with real data before launch.
// ============================================================

export const nav = {
  brand: 'NNC CRM',
  links: [
    // `drawer: 'products'` tells the Navbar to render a hover drawer instead of
    // a direct link. The drawer content comes from the `products` export below.
    { label: 'Products', drawer: 'products' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/#faq' },
  ],
  signIn: { label: 'Sign in', href: '#' },
  cta: { label: 'Book a Demo', href: '/#start' },
}

// Products mega-menu. Six products shown as a left-column list in the nav
// drawer; hovering one swaps the middle detail panel and the right-side
// screenshot. Live products carry an `href` plus `subItems` (anchor links
// into the product page). Planned verticals carry `comingSoon: true` and
// are visible but unlinked until copy and the dedicated page are ready.
//
// Sub-item anchors assume the destination page has matching section ids
// (e.g. #trips on /travel-crm/). If a target id does not yet exist the link
// still works — it just scrolls to the top of the page. Add the ids on the
// product pages as the content firms up.
export const products = [
  {
    key: 'nnc-crm',
    name: 'NNC CRM',
    shortName: 'NNC CRM',
    description:
      'The configurable CRM for every industry — enquiries, pipeline, forecasting, invoicing and WhatsApp in one platform you shape to your workflow.',
    href: '/',
    exploreLabel: 'Explore NNC CRM',
    icon: 'crm',
    media: { src: '/hero.jpg', alt: 'NNC CRM dashboard' },
    subItems: [
      { label: 'Enquiries', href: '/#enquiries' },
      { label: 'Sales pipeline', href: '/#pipeline' },
      { label: 'Forecasting', href: '/#forecasting' },
      { label: 'Invoicing and payments', href: '/#invoicing' },
      { label: 'WhatsApp engagement', href: '/#whatsapp' },
      { label: 'Reports and analytics', href: '/#reports' },
      { label: 'Integrations', href: '/#integrations' },
    ],
  },
  {
    key: 'travel-crm',
    name: 'NNC Travel CRM',
    shortName: 'Travel CRM',
    description:
      'For travel agencies, tour operators and DMCs — trips, quotes, bookings, vouchers and accounting in one branded workspace.',
    href: '/travel-crm/',
    exploreLabel: 'Explore Travel CRM',
    icon: 'travel',
    media: { src: '/travel-crm/images/dashboard.png', alt: 'NNC Travel CRM owner dashboard' },
    subItems: [
      { label: 'Trips', href: '/travel-crm/#trips' },
      { label: 'Bookings', href: '/travel-crm/#bookings' },
      { label: 'Accounting', href: '/travel-crm/#accounting' },
      { label: 'Tasks', href: '/travel-crm/#tasks' },
      { label: 'Owner dashboard', href: '/travel-crm/#dashboard' },
    ],
  },
  {
    key: 'training-crm',
    name: 'NNC Training Institutes & Coaching CRM',
    shortName: 'Training Institutes CRM',
    description:
      'For multi-center institutes and coaching chains — admissions, student journeys, attendance, fees and performance across every branch, in one dashboard.',
    href: '/multi-center-training-institutes-crm/',
    exploreLabel: 'Explore Training CRM',
    icon: 'training',
    media: { src: '/training-reel.jpg', alt: 'Training institute CRM in use' },
    subItems: [
      { label: 'Centralized control', href: '/multi-center-training-institutes-crm/#centralized' },
      { label: 'Student journeys', href: '/multi-center-training-institutes-crm/#journeys' },
      { label: 'Multi-center analytics', href: '/multi-center-training-institutes-crm/#analytics' },
      { label: 'Retention', href: '/multi-center-training-institutes-crm/#retention' },
      { label: 'Targeted outreach', href: '/multi-center-training-institutes-crm/#outreach' },
    ],
  },
  {
    key: 'car-studio-crm',
    name: 'NNC Car Studio CRM',
    shortName: 'Car Studio CRM',
    description:
      'For car spas, detailing studios and premium coating centers — bookings, packages, slot management and customer history in one place.',
    href: '/car-studio-crm/',
    exploreLabel: 'Explore Car Studio CRM',
    icon: 'carcare',
    media: { src: '/img/scene-dashboard.jpg', alt: 'NNC Car Studio CRM dashboard preview' },
    subItems: [
      { label: 'Enquiries', href: '/car-studio-crm/#enquiries' },
      { label: 'Quotes', href: '/car-studio-crm/#quotes' },
      { label: 'Appointments', href: '/car-studio-crm/#appointments' },
      { label: 'Job cards', href: '/car-studio-crm/#jobcards' },
      { label: 'Billing & cash', href: '/car-studio-crm/#billing' },
      { label: 'Pricing', href: '/car-studio-crm/#pricing' },
    ],
  },
  {
    key: 'small-business-crm',
    name: 'NNC Small Business CRM',
    shortName: 'Small Business CRM',
    description:
      'For small teams finding their first hundred customers — the essentials to catch every lead, close deals and keep buyers close, without the enterprise overhead.',
    href: '/small-business-crm/',
    exploreLabel: 'Explore Small Business CRM',
    icon: 'smallbusiness',
    media: { src: '/hero.jpg', alt: 'NNC Small Business CRM dashboard preview' },
    subItems: [
      { label: 'Pricing', href: '/small-business-crm/#pricing' },
      { label: 'Enquiries', href: '/small-business-crm/#enquiries' },
      { label: 'Sales pipeline', href: '/small-business-crm/#pipeline' },
      { label: 'WhatsApp', href: '/small-business-crm/#whatsapp' },
      { label: 'Invoicing', href: '/small-business-crm/#invoicing' },
      { label: 'Reports', href: '/small-business-crm/#reports' },
    ],
  },
]

// Extra items shown below the product list in the drawer's left column.
// Matches Salesforce's convention of keeping Pricing at the bottom.
export const productDrawerExtras = [
  { label: 'Pricing', href: '/pricing' },
]

export const hero = {
  eyebrow: 'The decision making CRM',
  titlePre: "CRM Software ",
  titleNavy: 'in India',
  titlePost: ' to Manage Leads, Sales and Customers.',
  leadStrong: 'Looking for CRM Software in India that adapts to your business? NNC CRM brings enquiries, sales pipelines, forecasting, billing and WhatsApp engagement together in one flexible platform.',
  lead: 'Choose the modules you need and manage your customer journey without adjusting your business processes to traditional CRM software.',
  lead2: 'Whether you need Business CRM Software, Lead Management Software or a complete customer management solution, NNC CRM helps your team work smarter',
  ctas: [
    { label: 'Book a Demo', href: '#start', variant: 'primary' },
    { label: 'See it in action', href: '#decide', variant: 'ghost' },
  ],
  chips: [
    'Plans for every team size',
    'Pay quarterly, half yearly or yearly',
    'Free for 30 days',
  ],
  card: {
    title: 'Business outlook — [Month Year]',
    kpis: [
      { label: 'Last month', value: '[₹8,42,000]', delta: '6.4% vs expected', dir: 'up' },
      { label: 'This month (exp.)', value: '[₹9,10,000]', delta: 'on track', dir: 'up' },
      { label: 'Net margin', value: '[22.5%]', delta: '1.8 pts', dir: 'up' },
    ],
  },
}

export const uspStrip = [
  {
    no: '01',
    title: 'One price for your whole team',
    body: 'Pick a plan by team size: 1, 3 or 10 users. Every plan includes the core CRM, with no per seat math and no surprises.',
  },
  {
    no: '02',
    title: 'It thinks ahead, not behind',
    body: 'Most CRMs file away your past. NNC reads it and projects your next quarter, half-year and year.',
  },
  {
    no: '03',
    title: 'Your data, locked down',
    body: 'Encrypted, backed up, access-controlled. Your numbers stay yours.',
  },
]

export const decisions = {
  eyebrow: 'Decisions, not data dumps',
  title: 'Know your next move before the month does.',
  lead: 'NNC turns the numbers you already have into the answer you actually need: where is this business going, and what should I do about it now?',
  bullets: [
    ['Last month vs expected', 'See actual sales against your forecast — and why the gap exists.'],
    ['3, 6 & 12-month projections', 'A realistic outlook for revenue, built from your own trend.'],
    ['Where the money goes', 'Salaries, operating costs and other expenses, side by side with income.'],
  ],
  projections: [
    { label: '3 months', value: '[₹29.4L]', delta: '11%' },
    { label: '6 months', value: '[₹63.8L]', delta: '18%' },
    { label: '12 months', value: '[₹1.42Cr]', delta: '27%' },
  ],
  expense: {
    title: 'Last month — where it went',
    total: '[₹6,52,000]',
    segments: [
      { label: 'Salaries', pct: 46 },
      { label: 'Operating', pct: 27 },
      { label: 'Marketing', pct: 15 },
      { label: 'Other', pct: 12 },
    ],
  },
  kpis: [
    { label: 'Income', value: '[₹8.42L]' },
    { label: 'Expenses', value: '[₹6.52L]' },
    { label: 'Net', value: '[₹1.90L]', pos: true },
  ],
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Flexible CRM Software Pricing for Every Business',
  lead: 'Choose a plan that matches your business size and requirements. NNC CRM offers transparent pricing based on team size, without separate per-user billing.',
  note: 'Prices are by team size band, plus 18% GST. Start free, no credit card.',
  compareLabel: 'Compare All Features',
}

export const enquiries = {
  eyebrow: 'Enquiries',
  title: 'Every enquiry caught. None forgotten.',
  lead: 'From the first "how much?" to the closed deal, NNC keeps every enquiry in one place — captured from your website, WhatsApp, calls and walk-ins, then moved through your pipeline automatically. You always know what\'s hot, what\'s slipping, and what to chase today.',
  cta: { label: 'Start free trial', href: '#start', variant: 'ghost' },
  pipeline: [
    { stage: 'New', count: 38, pct: 90 },
    { stage: 'Contacted', count: 24, pct: 64 },
    { stage: 'Quoted', count: 16, pct: 42 },
    { stage: 'Negotiating', count: 9, pct: 24 },
    { stage: 'Won', count: 6, pct: 16, pos: true },
  ],
}

export const dataSafety = {
  eyebrow: 'Data safety',
  title: 'Your business runs on this data. We treat it that way.',
  lead: 'Every number, contact and enquiry inside NNC is encrypted, backed up and access-controlled. You decide who sees what — we make sure no one else does.',
  cards: [
    ['Encrypted end to end', "Data is encrypted in transit and at rest, so it's unreadable to anyone but you.", 'lock'],
    ['Automatic backups', 'Daily backups mean a wrong click or a lost device never costs you your records.', 'backup'],
    ['Role-based access', 'Give each person exactly the access they need — and nothing they don\'t.', 'roles'],
    ['Full audit trail', 'See who viewed, changed or exported anything, anytime. Total accountability.', 'audit'],
  ],
}

export const whatsapp = {
  eyebrow: 'WhatsApp chatbot',
  title: 'It qualifies leads while you sleep.',
  lead: 'Customers message you on WhatsApp — the NNC assistant asks the right five questions, understands the business, and hands you a qualified lead with a recommended plan. No forms, no waiting.',
  steps: [
    'Greets every customer who messages your business number.',
    'Asks five quick questions to understand who they are.',
    'Reads the answers and works out what they need.',
    'Builds a recommended plan with a yearly price.',
    'Hands you a qualified lead, ready to close.',
  ],
  cta: { label: 'Book a Demo', href: '#start', variant: 'primary' },
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently Asked Questions About NNC CRM',
  items: [
    {
      q: 'What Is NNC CRM?',
      a: 'NNC CRM is a flexible Customer Relationship Management Software platform that helps businesses manage enquiries, sales pipelines, customer information, forecasting, billing and WhatsApp engagement.',
    },
    {
      q: 'Is NNC CRM Suitable for Different Industries?',
      a: 'Yes. NNC CRM supports sales teams, service businesses, manufacturing, retail, healthcare, education and real estate with flexible modules and workflows.',
    },
    {
      q: 'How Much Does NNC CRM Cost?',
      a: 'The Starter plan costs ₹14,999 per year, Growth costs ₹29,999 per year and Enterprise costs ₹59,999 per year. Pricing depends on team size and excludes 18% GST.',
    },
    {
      q: 'Does NNC CRM Support WhatsApp Integration?',
      a: 'Yes. WhatsApp engagement is included in Growth and Enterprise plans. NNC CRM also offers a WhatsApp demo with an assistant that qualifies business leads by asking five questions.',
    },
    {
      q: 'Can I Import My Existing Business Data?',
      a: 'Yes. You can import your contacts, enquiries and existing pipelines into NNC CRM during setup.',
    },
  ],
}

export const finalCta = {
  title: 'Build the CRM Your Business Actually Needs',
  sub: 'Bring enquiries, sales pipelines, forecasting, billing and customer engagement together with NNC CRM.',
  sub2: 'Choose your plan, start your free 30-day trial and discover a smarter way to manage your business with CRM Software in India.',
  ctas: [
    { label: 'Book a Demo', href: '#start', variant: 'invert-primary' },
    { label: 'Try the WhatsApp Demo', href: 'https://wa.me/919164566466?text=I%20want%20to%20try%20the%20NNC%20CRM%20WhatsApp%20demo', variant: 'invert-ghost' },
  ],
  // Trust figures intentionally removed — pre-launch audit flagged
  // "2,000+ businesses" and "4.8/5 rating" as unprovable claims that ASCI
  // or a competitor could challenge. Re-add only with verifiable numbers.
  stats: [],
}

export const footer = {
  brandLine: 'The decision making CRM for every industry.',
  contactLabel: 'Get in touch',
  phone: '+91 94227 99466',
  email: 'hello@nncdigital.co.in',
  columns: [
    {
      title: 'Products',
      links: [
        // Mirrors the Products drawer in the nav. Car Studio CRM live as of
        // 2026-10-30. Only live products appear here — a dead link in the
        // footer reads worse than a visible gap.
        'NNC CRM',
        'Travel CRM',
        'Training Institutes CRM',
        'Car Studio CRM',
        'Small Business CRM',
        'Pricing',
      ],
    },
    {
      title: 'Industries',
      links: [
        'Sales teams',
        'Service businesses',
        'Manufacturing',
        'Retail and distribution',
        'Healthcare',
        'Education',
        'Real estate',
      ],
    },
    {
      title: 'Company',
      // Trimmed per pre-launch audit — removed Careers / Blog / Customer
      // stories / Press until those pages carry real content, because empty
      // pages hurt both trust and SEO.
      links: [
        'About us',
        'Partners',
        'Contact sales',
      ],
    },
    {
      title: 'Support',
      // Trimmed per pre-launch audit — removed API documentation and System
      // status (no public API docs or status page exists yet).
      links: [
        'Help center',
        'Getting started',
        'Security',
        'Data privacy',
        'Contact support',
      ],
    },
  ],
  social: ['linkedin', 'x', 'youtube', 'facebook', 'instagram'],
  copyright: '© 2026 NNC Digital Solutions Pvt. Ltd. All rights reserved.',
  madeIn: 'Made in India',
  // Removed 'Trust Center' and 'Cookie Settings' until those exist — pre-
  // launch audit flagged dead links in the legal row.
  legal: [
    'Terms',
    'Privacy',
    'Acceptable Use',
    'Legal and Compliance',
    'Site Map',
  ],
}
