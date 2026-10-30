import MarketingPage from '@/components/marketing/MarketingPage'

// NNC Small Business CRM landing page.
//
// Scaffolded in the Salesforce "Starter Suite" style using the data-driven
// MarketingPage block system. All copy marked with [brackets] is placeholder,
// following the project convention — swap in real figures and language before
// adding this page to lib/site.js INDEXABLE_PREFIXES.
//
// Noindex: this page inherits the site-wide `robots: { index: false }` set in
// app/layout.js, and the page metadata below reinforces that. It will not
// appear in the sitemap or robots allowlist until /small-business-crm/ is
// explicitly added to INDEXABLE_PREFIXES.
export const metadata = {
  title: 'NNC Small Business CRM | NNC Digital',
  description:
    'The CRM for small teams finding their first hundred customers — the essentials to catch every lead, close deals and keep buyers close, without the enterprise overhead.',
  robots: { index: false, follow: false },
}

const PAGE = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    { label: 'Small Business CRM' },
  ],

  hero: {
    eyebrow: 'Small Business CRM',
    title: 'The CRM your small business will actually use.',
    lead: 'The essentials to catch every lead, close deals and keep buyers close — ready in a day, priced for a team of ten.',
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: "See what's inside", href: '#inside', variant: 'ghost' },
    ],
    media: {
      type: 'video',
      src: '/videos/small-business.mp4?v=2',
      framed: true,
    },
  },

  blocks: [
    // -----------------------------------------------------------------------
    // Pricing — two side-by-side plan cards, like Salesforce Starter + Pro.
    // All numbers are placeholders in [brackets]; replace with final pricing.
    // -----------------------------------------------------------------------
    {
      type: 'plans',
      title: 'Find the plan that fits.',
      lead: 'Two straightforward tiers. Pay monthly or save with annual billing. No contracts, cancel anytime.',
      note: 'Prices shown are indicative and exclusive of 18% GST. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Starter',
          desc: 'For lean teams getting their first CRM in place.',
          price: 'Rs. 2,999',
          per: '/ month',
          priceNote: '[For up to 5 users, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's included",
          features: [
            'Enquiries from every channel in one inbox',
            'Sales pipeline with stages and owners',
            'WhatsApp conversations attached to each lead',
            'Basic reports and dashboards',
            'Up to [5] users',
            'Email and chat support',
          ],
        },
        {
          name: 'Pro',
          desc: 'For growing businesses that need a bit more.',
          badge: 'Most popular',
          highlight: true,
          price: 'Rs. 5,999',
          per: '/ month',
          priceNote: '[For up to 10 users, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Starter, plus',
          features: [
            'Forecasting and sales targets',
            'GST invoicing and payment reminders',
            'Custom fields, tags and workflows',
            'Advanced reports with export',
            'Up to [10] users',
            'Priority support and onboarding',
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Tabbed feature showcase (new featureTabs block). Images in /img/scene-*
    // are stock scene photos used until product screenshots are captured.
    // -----------------------------------------------------------------------
    {
      type: 'featureTabs',
      id: 'inside', // Target for the hero's "See what's inside" button.
      title: 'A closer look inside.',
      lead: 'The essentials, done well — from first enquiry to final invoice, in one simple workspace.',
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries',
          title: 'Every lead in one inbox.',
          body: 'WhatsApp, website forms, phone calls and walk-ins — all captured in one place, with the owner, the source and the next step on every row.',
          bullets: [
            'Auto-capture from WhatsApp, forms, calls and ads',
            'Assigned to the right person the moment it lands',
            'Nothing sits unclaimed',
          ],
          media: { src: '/img/scene-dashboard.jpg', alt: 'A sales lead landing in the enquiries inbox' },
        },
        {
          key: 'pipeline',
          label: 'Sales pipeline',
          title: 'Every deal, by stage, by owner.',
          body: 'Drag deals through stages, see what is stuck and what is close, and know who owns the next move.',
          bullets: [
            'Visual pipeline with stage counts and value',
            'Follow-up date and owner on every deal',
            'Drill into any stage to see only those deals',
          ],
          media: { src: '/img/scene-team.jpg', alt: 'A sales team reviewing the pipeline together' },
        },
        {
          key: 'whatsapp',
          label: 'WhatsApp',
          title: 'A real WhatsApp inbox, inside your CRM.',
          body: 'Reply from the same screen as the deal. Templates, auto-replies and broadcast campaigns, with every message logged against the contact.',
          bullets: [
            'Two-way WhatsApp against each lead and customer',
            'Templates and auto-replies for the common asks',
            'Broadcast campaigns with opt-in / opt-out tracking',
          ],
          media: { src: '/img/scene-mobile.jpg', alt: 'A business owner replying on WhatsApp from the CRM' },
        },
        {
          key: 'invoicing',
          label: 'Invoicing',
          title: 'Raise a GST invoice without leaving the deal.',
          body: 'Proforma up front, GST invoices on payment, reminders when things slip. All against the right customer, all in one place.',
          bullets: [
            'Proforma and GST invoices from the deal page',
            'Payment reminders on the dates you choose',
            'Downloadable receipts and ledgers',
          ],
          media: { src: '/img/scene-dashboard.jpg', alt: 'A GST invoice being raised against a deal' },
        },
        {
          key: 'reports',
          label: 'Reports',
          title: 'The four numbers that run a small business.',
          body: 'Revenue, leads, conversion and outstanding — side by side, for today, this week or this month.',
          bullets: [
            'A single dashboard with the four numbers that matter',
            'Compare today vs last week vs last month',
            'Export any list to a spreadsheet',
          ],
          media: { src: '/img/scene-team.jpg', alt: 'An owner reviewing the day on the reports dashboard' },
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4-up benefit cards.
    // -----------------------------------------------------------------------
    {
      type: 'featureGrid',
      title: 'Built for the way a small team actually works.',
      lead: 'Lightweight, honest, and designed to be useful on day one — not after a six-week implementation.',
      items: [
        {
          icon: 'rocket',
          title: 'Start fast, see value faster',
          body: 'Set up your workspace, import a CSV and start logging deals the same morning. No consultants required.',
          image: '/small-business-crm/images/card1.png',
          imageAlt: 'A small-business owner setting up NNC Small Business CRM on day one',
        },
        {
          icon: 'whatsapp',
          title: 'WhatsApp where your customers already are',
          body: 'Most Indian small-business buyers want to WhatsApp. We put that where the deal lives.',
          image: '/small-business-crm/images/card2.png',
          imageAlt: 'A WhatsApp conversation attached to a sales deal in NNC',
        },
        {
          icon: 'reports',
          title: 'Know what to do today',
          body: 'The dashboard shows follow-ups due, payments overdue and new leads waiting — in that order.',
          image: '/small-business-crm/images/card3.png',
          imageAlt: 'The daily dashboard showing follow-ups, payments due and new leads',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Upgrade split — "Growing beyond? Meet NNC CRM"
    // -----------------------------------------------------------------------
    {
      type: 'split',
      kicker: 'GROWING BEYOND SMALL BUSINESS?',
      title: 'Move up to the full NNC CRM.',
      body: 'When your team grows past ten, when billing gets complex, when you need forecasting and custom modules — the full NNC CRM is a one-click upgrade. Your data moves with you.',
      bullets: [
        'All your Small Business CRM data carries over',
        'Add modules only when you need them',
        'Keep the same team logins and workflows',
      ],
      media: { type: 'image', src: '/showcase.jpg', alt: 'NNC CRM full product preview — placeholder image' },
      flip: true,
    },

    // -----------------------------------------------------------------------
    // Customer quote. Reuses an existing sample testimonial from data/pages.js
    // (owner-at-retail persona, WhatsApp angle — fits the Small Business
    // audience). Flagged as sample content there — swap for a verified
    // customer quote + photo before launch.
    // -----------------------------------------------------------------------
    {
      type: 'testimonial',
      quote:
        'WhatsApp campaigns from NNC bring our customers back every month. Repeat sales have doubled since we switched.',
      author: 'Sneha Patil',
      role: 'Owner',
      company: 'Trenz Retail',
      initials: 'SP',
      // Add `photo: '/small-business-crm/images/testimonial-sneha.jpg'` when
      // a real customer photo is available. The initials circle is the fallback.
    },

    // -----------------------------------------------------------------------
    // "Get started" 3-up CTA block (Start free / Talk to expert / Watch demo)
    // Rendered with the Cards block so each card has an icon + body + link.
    // -----------------------------------------------------------------------
    {
      type: 'cards',
      title: 'Three ways to get started.',
      lead: 'Try it on your own, talk to a human, or watch it in action — whichever fits your style.',
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Thirty-minute walkthrough on your own data. No credit card, no commitment.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an expert',
          body: 'Not sure where to start? Call us and we will help you figure it out.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a demo',
          body: 'See the main screens in action — enquiries, pipeline, WhatsApp and reports — before you book a call.',
          href: '#demo',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // FAQ — placeholder answers. Swap in real ones.
    // -----------------------------------------------------------------------
    {
      type: 'faq',
      title: 'Small Business CRM — common questions.',
      items: [
        {
          q: 'What is NNC Small Business CRM?',
          a: 'A focused CRM for teams of one to ten people. You get enquiries from every channel in one inbox, a visual sales pipeline, WhatsApp built in, GST invoicing and the four reports a small business actually reads. Priced per team band, not per user, so adding a teammate does not change your bill.',
        },
        {
          q: 'How is this different from the full NNC CRM?',
          a: 'Small Business CRM is the essentials, done well. The full NNC CRM adds forecasting, custom modules, advanced automations and heavier billing — all useful once your team crosses ten, but overhead before then. If you outgrow Small Business CRM, upgrading moves your data and workflows across in one step.',
        },
        {
          q: 'How much does it cost?',
          a: 'Starter is [Rs. 2,999 per month] for up to 5 users. Pro is [Rs. 5,999 per month] for up to 10 users. Both are billed annually and exclusive of 18% GST; monthly billing is available at a small premium. Final pricing is confirmed before launch.',
        },
        {
          q: 'How quickly can I go live?',
          a: 'Most teams are live in a day. We walk you through the setup on a one-hour call, import your existing leads from a CSV, apply your logo and branding, and train the team on their screens. You run live from the same afternoon.',
        },
        {
          q: 'What if I grow beyond 10 users?',
          a: 'Upgrade to the full NNC CRM in one click. Your enquiries, deals, contacts and invoicing history all carry across, and your team keeps the same logins. No separate migration project, no second rollout.',
        },
        {
          q: 'Where is my data stored?',
          a: 'Your data stays in Indian data centers, backed up daily. You can export any list to a spreadsheet whenever you need it. If you decide to leave, you take everything with you — no vendor lock-in.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Ready to see Small Business CRM?',
    sub: 'Book a 30-minute demo on your own data. We will show you exactly how it fits your team.',
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Talk to sales', href: '/company/contact' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
