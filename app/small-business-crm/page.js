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
  title: 'Small Business CRM Software for Sales & Leads | NNC',
  description:
    "Manage leads, sales pipelines, WhatsApp conversations and invoices with NNC Digital's Small Business CRM. Explore affordable plans and book a demo.",
  alternates: { canonical: '/small-business-crm/' },
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
    title: 'Small Business CRM – Manage Leads, Sales and Customers in One Place',
    lead: "Simplify daily operations with NNC Digital's Small Business CRM. Capture every enquiry, manage sales pipelines and stay connected with customers through one simple platform. Designed for teams of up to 10 users, with quick setup and affordable pricing.",
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    media: {
      type: 'video',
      src: '/videos/small-business.mp4?v=4',
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
      title: 'Find the Right Small Business CRM Plan for Your Team',
      lead: 'Choose a Small Business CRM plan that fits your team size and sales requirements. Pay monthly or save with annual billing, with no long-term contracts.',
      note: 'Prices are indicative, exclude 18% GST and are based on annual billing. Monthly billing is available at an additional cost. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Starter',
          desc: 'For small teams getting started with CRM Software',
          price: 'Rs. 2,999',
          per: '/ month',
          priceNote: 'Up to 5 users · Billed annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's Included",
          features: [
            'Centralized enquiry management',
            'Sales pipeline with stages and owners',
            'WhatsApp conversations linked to leads',
            'Basic reports and dashboards',
            'Email and chat support',
          ],
        },
        {
          name: 'Pro',
          desc: 'For growing small businesses',
          badge: 'Most Popular',
          highlight: true,
          price: 'Rs. 5,999',
          per: '/ month',
          priceNote: 'Up to 10 users · Billed annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Starter, plus',
          features: [
            'Sales forecasting and targets',
            'GST invoicing and payment reminders',
            'Custom fields, tags and workflows',
            'Advanced reports with export',
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
      id: 'inside', // Target for the hero's "See What's Inside" button.
      title: 'A Closer Look Inside Small Business CRM Software',
      lead: "NNC Digital's Small Business CRM brings essential sales operations into one workspace, from customer enquiries to invoices and business reports.",
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries',
          title: 'Manage Every Customer Enquiry in One Inbox',
          body: 'Capture and organize leads using Lead Management Software that connects enquiries from WhatsApp, website forms, phone calls and walk-ins.',
          bullets: [
            'Automatically capture enquiries from WhatsApp, forms, calls and ads',
            'Assign leads to the right team members',
            'Track lead sources, ownership and next actions',
          ],
          media: { src: '/img/product/sb-enquiries.mp4', alt: 'A sales lead landing in the enquiries inbox' },
        },
        {
          key: 'pipeline',
          label: 'Sales Pipeline',
          title: 'Track Every Deal with Small Business CRM Software',
          body: 'Manage your sales pipeline effortlessly with our Small Business CRM Software. Track deals by stage, monitor progress, assign owners and schedule follow-ups from one dashboard. Stay updated on opportunities and focus on deals ready to close.',
          bullets: [
            'Visual sales pipeline with deal stages and values',
            'Deal ownership and follow-up date tracking',
            'Stage-wise deal filtering for better visibility',
          ],
          media: { src: '/img/product/sb-pipeline.mp4', alt: 'A sales team reviewing the pipeline together' },
        },
        {
          key: 'invoicing',
          label: 'Invoicing',
          title: 'Simplify GST Invoicing with Small Business CRM Software',
          body: 'Create proforma and GST invoices directly from your sales deals using Small Business CRM Software. Manage customer billing, schedule payment reminders and download receipts and ledgers without switching between different systems.',
          bullets: [
            'Proforma and GST invoice generation from deal pages',
            'Scheduled payment reminders',
            'Downloadable payment receipts and customer ledgers',
          ],
          media: { src: '/img/product/sb-invoicing.mp4', alt: 'A GST invoice being raised against a deal' },
        },
        {
          key: 'reports',
          label: 'Reports',
          title: 'Monitor Business Performance with Small Business CRM Software',
          body: 'Make informed decisions with our Small Business CRM Software. Track revenue, leads, conversions and outstanding payments from a single business analytics dashboard. Compare performance across different periods and export reports for easier analysis.',
          bullets: [
            'Centralized dashboard for revenue, leads, conversions and outstanding payments',
            'Daily, weekly and monthly performance comparisons',
            'Spreadsheet export for business data and reports',
          ],
          media: { src: '/img/product/sb-reports.mp4', alt: 'An owner reviewing the day on the reports dashboard' },
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4-up benefit cards.
    // -----------------------------------------------------------------------
    {
      type: 'featureGrid',
      flat: true,
      title: 'CRM Software Built for the Way Small Teams Work',
      lead: "NNC Digital's Small Business CRM simplifies daily sales activities with easy setup, WhatsApp communication and clear business dashboards.",
      items: [
        {
          icon: 'rocket',
          title: 'Start Fast and Manage Sales Efficiently',
          body: 'Set up your CRM workspace, import existing leads through CSV files and begin tracking sales opportunities without complicated implementation.',
          image: '/small-business-crm/images/card1-sm.webp',
          imageAlt: 'A small-business owner setting up NNC Small Business CRM on day one',
        },
        {
          icon: 'whatsapp',
          title: 'Connect with Customers Through WhatsApp',
          body: 'Manage customer conversations using WhatsApp CRM for Small Business. Keep WhatsApp communication connected to individual leads and sales opportunities for easy follow-ups.',
          image: '/small-business-crm/images/card2-sm.webp',
          imageAlt: 'A WhatsApp conversation attached to a sales deal in NNC',
        },
        {
          icon: 'reports',
          title: 'Stay Updated with Your Daily Sales Activities',
          body: 'Access a centralized dashboard showing pending follow-ups, overdue payments and new enquiries. Help your team prioritize important tasks without switching between multiple tools.',
          image: '/small-business-crm/images/card3-sm.webp',
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
      title: 'Upgrade Your Small Business CRM as Your Business Grows',
      body: 'When your team expands beyond 10 users or requires advanced features, upgrade from Small Business CRM to the full NNC CRM without losing existing information.',
      bullets: [
        'Transfer existing leads, contacts and sales records',
        'Add advanced modules based on business requirements',
        'Continue using existing team logins and workflows',
        'Scale your Customer Relationship Management Software as your operational needs increase',
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
      title: 'Three Simple Ways to Get Started with Small Business CRM',
      lead: "Explore NNC Digital's Small Business CRM through a product walkthrough, expert discussion or recorded demonstration.",
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Schedule a 30-minute demonstration using your own business data. Explore the platform without a credit card or commitment.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an Expert',
          body: 'Discuss your business needs with our team and find the right CRM solution for your sales workflow.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a Demo',
          body: 'Explore the key features, including enquiry management, sales pipelines, WhatsApp communication and reports, before booking a call.',
          href: '#demo',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // FAQ — placeholder answers. Swap in real ones.
    // -----------------------------------------------------------------------
    {
      type: 'faq',
      title: 'Small Business CRM – Frequently Asked Questions',
      lead: "Find answers to common questions about NNC Digital's Small Business CRM, pricing, features and implementation.",
      items: [
        {
          q: 'What is NNC Small Business CRM?',
          a: "NNC Digital's Small Business CRM is a customer relationship management platform designed for teams of 1 to 10 users. It helps businesses capture enquiries, track sales opportunities, manage WhatsApp conversations and monitor sales activities through a centralized dashboard.",
        },
        {
          q: 'How is Small Business CRM different from the full NNC CRM?',
          a: 'Small Business CRM focuses on essential features like lead management, sales pipelines, WhatsApp communication and reporting. The full NNC CRM supports additional requirements such as custom modules, advanced automation and more complex billing workflows as businesses grow.',
        },
        {
          q: 'How much does Small Business CRM cost?',
          a: 'The Starter plan costs ₹2,999 per month for up to 5 users, while the Pro plan costs ₹5,999 per month for up to 10 users. Both prices are based on annual billing and exclude 18% GST. Monthly billing is available at a premium, with final pricing confirmed before launch.',
        },
        {
          q: 'How quickly can I start using NNC Small Business CRM?',
          a: 'NNC Digital states that most teams can start using the CRM within a day. Setup includes importing existing leads through CSV files, applying business branding and providing team training.',
        },
        {
          q: 'Can I upgrade Small Business CRM when my team grows?',
          a: 'Yes. Businesses expanding beyond 10 users can upgrade to the full NNC CRM. Existing leads, deals, contacts, invoicing history and team logins can be carried over during the upgrade.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Ready to Simplify Your Sales with Small Business CRM?',
    sub: "Manage leads, sales pipelines, WhatsApp conversations and invoices with NNC Digital's Small Business CRM. Book a 30-minute demo using your own business data to explore how the platform fits your team.",
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'See Pricing', href: '/pricing' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
