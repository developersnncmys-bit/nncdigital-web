import MarketingPage from '@/components/marketing/MarketingPage'

// NNC Net Zero CRM — positioned as a BRSR / ESG tracker for Indian SMEs.
//
// Context: SEBI's BRSR (Business Responsibility & Sustainability Reporting)
// is mandatory for the top 1000 listed companies and is trickling down to
// their suppliers. Indian SMEs that export to EU/US also face CBAM and
// customer scope-3 demands. This page targets growing Indian businesses
// (10-500 people) that need to collect and report ESG data without hiring
// a sustainability office.
//
// Noindex: inherits the site-wide `robots: { index: false }` from app/layout.js
// and reinforces it below. Will not appear in the sitemap or robots allowlist
// until /net-zero-crm/ is explicitly added to INDEXABLE_PREFIXES in lib/site.js.
export const metadata = {
  title: 'NNC Net Zero CRM | BRSR & ESG tracker for Indian businesses',
  description:
    'The ESG tracker your biggest customers are asking for. BRSR-ready reporting for growing Indian businesses — energy, water, waste, workforce and Scope 1-2 emissions in one audit-ready workspace.',
  robots: { index: false, follow: false },
}

const PAGE = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    { label: 'Net Zero CRM' },
  ],

  hero: {
    eyebrow: 'ESG & BRSR CRM',
    title: 'The ESG tracker your biggest customers are asking for.',
    lead: 'BRSR-ready reporting for growing Indian businesses — energy, water, waste, workforce and Scope 1-2 emissions in one audit-ready workspace. No sustainability officer required.',
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'Watch demo', href: '#demo', variant: 'ghost' },
    ],
    media: {
      type: 'component',
      name: 'netZeroDashboard',
    },
  },

  blocks: [
    // -----------------------------------------------------------------------
    // Trust stats — reuses the site-wide figures from data/content.js so
    // Net Zero CRM says the same thing as the rest of the site.
    // -----------------------------------------------------------------------
    {
      type: 'stats',
      title: 'Trusted by businesses across India',
      items: [
        { value: '2,000+', label: 'businesses across India' },
        { value: '9', label: 'BRSR principles covered' },
        { value: '1 week', label: 'to first audit-ready report' },
      ],
    },

    // -----------------------------------------------------------------------
    // Pricing — two plans. Numbers in [brackets] until final pricing lands.
    // Higher than Small Business CRM because this is a specialized vertical
    // and the buyers are mid-market businesses with ESG budgets.
    // -----------------------------------------------------------------------
    {
      type: 'plans',
      title: 'Pricing that scales with your reporting.',
      lead: 'Start with a single plant or office. Add locations as your ESG scope grows. No per-user charges.',
      note: 'Prices shown are indicative and exclusive of 18% GST. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Starter',
          desc: 'For one location getting ESG data in order.',
          price: '[Rs. 4,999]',
          per: '/ month',
          priceNote: '[Single location, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's included",
          features: [
            'Energy, water and waste data collection',
            'Scope 1 and Scope 2 emissions with Indian grid factors',
            'Up to 20 data entry users',
            'BRSR 9-principle data model',
            'Audit trail on every number',
            'Email and chat support',
          ],
        },
        {
          name: 'Growth',
          desc: 'For multi-location businesses reporting to large customers.',
          badge: 'Most popular',
          highlight: true,
          price: '[Rs. 9,999]',
          per: '/ month',
          priceNote: '[Up to 5 locations, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Starter, plus',
          features: [
            'Multi-location rollups (plants, offices, warehouses)',
            'BRSR report export in SEBI format',
            'GRI and customer-specific questionnaire templates',
            'Supplier data requests and reminders',
            'Document attachments on every data point',
            'Priority onboarding and support',
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Tabbed feature showcase — the 5 pillars of what the product tracks.
    // Images are stock scenes until product screenshots are captured.
    // -----------------------------------------------------------------------
    {
      type: 'featureTabs',
      title: 'What Net Zero CRM actually tracks.',
      lead: 'The five data families your ESG report needs, captured once and reused across every disclosure.',
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'energy',
          label: 'Energy & utilities',
          title: 'Every unit of energy, from every meter.',
          body: 'Electricity, diesel, gas, LPG and renewable energy, logged against the right location and the right billing period. Attach the bill as proof.',
          bullets: [
            'Meter-level entry for electricity and fuel',
            'Automatic kWh and GJ unit conversions',
            'Renewable vs grid split, visible at a glance',
          ],
          media: { src: '/img/scene-dashboard.jpg', alt: 'An operations lead entering energy data' },
        },
        {
          key: 'emissions',
          label: 'Scope 1 & 2 emissions',
          title: 'Emissions calculated with the right factors.',
          body: 'Scope 1 (direct — fuel, company vehicles, refrigerants) and Scope 2 (purchased electricity) calculated using Indian grid emission factors and GHG Protocol methodology.',
          bullets: [
            'Indian regional grid factors kept up to date',
            'Scope 1 breakdown by activity type',
            'Market-based and location-based Scope 2',
          ],
          media: { src: '/img/scene-team.jpg', alt: 'A team reviewing an emissions summary' },
        },
        {
          key: 'water-waste',
          label: 'Water & waste',
          title: 'Water drawn, water discharged, waste handled.',
          body: 'Freshwater withdrawal by source, discharge by destination, and waste by category — hazardous, non-hazardous, recycled, landfilled.',
          bullets: [
            'Water by source (municipal, groundwater, surface, recycled)',
            'Waste by stream with disposal method',
            'Links to vendor pickup receipts for audit trail',
          ],
          media: { src: '/img/scene-dashboard.jpg', alt: 'A water and waste data entry screen' },
        },
        {
          key: 'workforce',
          label: 'Workforce & social',
          title: 'The S in ESG, from headcount to safety.',
          body: 'Workforce diversity, training hours, safety incidents, wage ratios and grievance records — the BRSR Principle 3, 5 and 7 data that most spreadsheets miss.',
          bullets: [
            'Workforce diversity and pay-ratio tracking',
            'Lost-time injury frequency rate',
            'Training hours by employee category',
          ],
          media: { src: '/img/scene-mobile.jpg', alt: 'An HR lead reviewing workforce ESG data' },
        },
        {
          key: 'reports',
          label: 'BRSR reports',
          title: 'The report your auditor and your customer will accept.',
          body: 'Generate the full BRSR disclosure in SEBI format, or export to GRI, your lender\'s template, or your largest customer\'s questionnaire — all from the same data.',
          bullets: [
            'BRSR Core and full BRSR formats',
            'GRI 2021 standards mapping',
            'Custom questionnaire templates for key customers',
          ],
          media: { src: '/img/scene-team.jpg', alt: 'A BRSR disclosure report being reviewed' },
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4-up benefit cards — why NNC Net Zero CRM over a spreadsheet.
    // -----------------------------------------------------------------------
    {
      type: 'featureGrid',
      title: 'Built for teams that don\'t have a sustainability office.',
      lead: 'Clear, local and honest. The things an operations or finance lead needs to produce an ESG report that holds up.',
      items: [
        {
          icon: 'check',
          title: 'BRSR-ready from day one',
          body: 'Data model mapped to the SEBI BRSR 9 principles. When a listed customer asks for your BRSR Core, you export, you don\'t rebuild.',
          image: '/net-zero-crm/images/card1.png',
          imageAlt: 'A sustainability lead preparing a BRSR export in NNC Net Zero CRM',
        },
        {
          icon: 'globe',
          title: 'Multi-site, one dashboard',
          body: 'Plants, warehouses and offices roll up into company-level totals. Drill into any one site when the auditor asks.',
          image: '/net-zero-crm/images/card2.png',
          imageAlt: 'Multi-site emissions dashboard rolling up plants and warehouses',
        },
        {
          icon: 'lock',
          title: 'Audit trail on every number',
          body: 'Every data point carries the source document, the person who entered it and the time. No more hunting for the electricity bill from April.',
          image: '/net-zero-crm/images/card3.png',
          imageAlt: 'Audit trail showing source document and timestamp on each ESG data point',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Upgrade split — ties to the main NNC CRM.
    // -----------------------------------------------------------------------
    {
      type: 'split',
      kicker: 'ALREADY ON NNC CRM?',
      title: 'Net Zero CRM pairs with your customer records.',
      body: 'Already using NNC CRM for sales and billing? Add Net Zero CRM and link emissions to the customer accounts they belong to. Show large buyers the carbon footprint of their orders, straight from the deal.',
      bullets: [
        'Share logins and workspaces with your main CRM',
        'Attach emissions and ESG scores to customer records',
        'Reply to buyer sustainability questionnaires without leaving the deal',
      ],
      media: { type: 'image', src: '/showcase.jpg', alt: 'NNC CRM paired with ESG data' },
      flip: true,
    },

    // -----------------------------------------------------------------------
    // 3-up CTA cards — how to engage.
    // -----------------------------------------------------------------------
    {
      type: 'cards',
      title: 'Three ways to see Net Zero CRM.',
      lead: 'Walk through the product on your own data, or talk to the team that built it.',
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Thirty-minute walkthrough using your energy bills and headcount. No credit card, no commitment.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to a specialist',
          body: 'Not sure whether BRSR applies to you? Call us and we will help you figure it out.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a demo',
          body: 'See the main screens in action — data entry, emissions, BRSR export — before you book a call.',
          href: '#demo',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // FAQ — real BRSR / ESG questions in NNC voice.
    // -----------------------------------------------------------------------
    {
      type: 'faq',
      title: 'Net Zero CRM — common questions.',
      items: [
        {
          q: 'What is NNC Net Zero CRM?',
          a: 'A focused ESG and BRSR tracker for growing Indian businesses. It captures the data your sustainability report needs — energy, water, waste, workforce and emissions — and exports in the format your customer, lender or auditor asks for. Priced for operations teams, not consulting firms.',
        },
        {
          q: 'What is BRSR and does it apply to me?',
          a: 'BRSR is the Business Responsibility and Sustainability Reporting framework from SEBI. It is mandatory for the top 1000 listed companies in India, but the data they need flows down to their suppliers. If you sell to a listed company, export to the EU or US, or borrow from a bank with ESG requirements, BRSR data is already being asked of you.',
        },
        {
          q: 'How much does it cost?',
          a: 'Starter is [Rs. 4,999 per month] for a single location. Growth is [Rs. 9,999 per month] for up to 5 locations with BRSR export and supplier data collection. Both are billed annually and exclusive of 18% GST. Final pricing is confirmed before launch.',
        },
        {
          q: 'Do I need a sustainability officer to use this?',
          a: 'No. Net Zero CRM is built for operations, finance and HR leads who already have the source data — electricity bills, fuel logs, headcount sheets. We handle the mapping to BRSR principles and the emission factor calculations. Your team enters the raw numbers.',
        },
        {
          q: 'What data do I need to get started?',
          a: 'For a basic Scope 1 and Scope 2 report: twelve months of electricity bills, fuel consumption (diesel, LPG, petrol), company vehicle logs, employee headcount and training records. We walk you through the first upload in your onboarding call.',
        },
        {
          q: 'Can I export reports in my customer\'s specific format?',
          a: 'Yes. Growth plan includes BRSR Core and full BRSR formats, GRI 2021 mapping, and custom questionnaire templates for your largest customers. The data layer stays the same; only the output format changes.',
        },
        {
          q: 'Where is my data stored?',
          a: 'In Indian data centers, backed up daily, with role-based access per location and per data category. You can export any dataset to a spreadsheet whenever you need it. If you decide to leave, you take everything with you.',
        },
      ],
    },
  ],

  // Final CTA band — rendered by MarketingPage's CtaBand.
  cta: {
    title: 'See Net Zero CRM on your own data.',
    sub: 'Book a 30-minute demo. We will show you how your energy bills and headcount become an audit-ready ESG report.',
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Talk to sales', href: '/company/contact' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
