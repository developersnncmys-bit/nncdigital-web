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
    "Manage leads, sales pipelines, WhatsApp conversations and GST invoices with NNC Digital's Small Business CRM Software. Explore plans and book a demo.",
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
    lead: [
      "Simplify sales and customer management with NNC Digital's Small Business CRM. Manage enquiries, sales pipelines, WhatsApp conversations and customer information in one platform.",
      'Our CRM Software for Small Businesses combines Lead Management Software, Sales Management CRM and Customer Relationship Management Software to streamline daily operations.',
      'Built for startups and teams of up to 10 users, our Affordable CRM Software for Small Businesses offers flexible pricing and easy setup.',
    ],
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
      title: 'Affordable Small Business CRM Software Pricing for Your Team',
      lead: [
        'Choose a Small Business CRM plan that fits your team size, sales requirements and budget.',
        'Our CRM Software for Startups and Small Teams offers flexible monthly and annual billing without long-term contracts.',
      ],
      note: 'Prices are indicative, exclude 18% GST and are based on annual billing. Monthly billing is available at an additional cost. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Starter',
          desc: 'For Small Teams Getting Started with CRM Software · Manage essential sales activities with Small Business CRM Software.',
          price: 'Rs. 2,999',
          per: '/ month',
          priceNote: 'Up to 5 Users · Billed Annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's Included",
          features: [
            'Centralized Enquiry Management',
            'Sales Pipeline with Stages and Owners',
            'WhatsApp Conversations Linked to Leads',
            'Basic Reports and Dashboards',
            'Email and Chat Support',
          ],
        },
        {
          name: 'Pro',
          desc: 'For Growing Small Businesses · Scale your business with advanced Sales Management CRM and Business Management CRM features.',
          badge: 'Most Popular',
          highlight: true,
          price: 'Rs. 5,999',
          per: '/ month',
          priceNote: 'Up to 10 Users · Billed Annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Starter, plus',
          features: [
            'Sales Forecasting and Targets',
            'GST Invoicing and Payment Reminders',
            'Custom Fields, Tags and Workflows',
            'Advanced Reports with Export',
            'Priority Support and Onboarding',
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
      lead: "NNC Digital's Small Business CRM brings lead tracking, sales pipelines, invoicing and analytics into one centralized workspace. Our Business Management CRM and Customer Management Software help small businesses organize sales activities and improve customer relationships.",
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries',
          title: 'Manage Every Customer Enquiry in One Inbox',
          body: "Capture leads using NNC Digital's Lead Management Software and Small Business Lead Management Software. Our CRM with WhatsApp Integration for Small Business connects customer enquiries from WhatsApp, websites, phone calls and advertisements.",
          bullets: [
            'Capture enquiries from WhatsApp, forms, calls and ads',
            'Assign leads to the right team members',
            'Track lead sources, ownership and follow-ups',
          ],
          media: { src: '/img/product/sb-enquiries.mp4', alt: 'A sales lead landing in the enquiries inbox' },
        },
        {
          key: 'pipeline',
          label: 'Sales Pipeline',
          title: 'Track Every Deal with Small Business CRM Software',
          body: "Manage sales opportunities with NNC Digital's Small Business CRM Software. Our Sales Pipeline Management Software and Sales Tracking Software help track deal stages, assign sales owners and schedule follow-ups through one visual dashboard.",
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
          body: "Manage customer billing with NNC Digital's Small Business CRM Software. Our CRM Software with GST Invoicing and Small Business Invoice Management Software help create proforma invoices, generate GST bills and track payments directly from sales deals.",
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
          body: "Make informed decisions using NNC Digital's Small Business CRM Software. Our CRM Dashboard Software and Business Analytics Software help track revenue, leads, sales conversions and outstanding payments through centralized reports.",
          bullets: [
            'Dashboard for revenue, leads, conversions and outstanding payments',
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
      lead: [
        "NNC Digital's Small Business CRM simplifies sales tracking, customer communication and daily operations.",
        'Our CRM for Small Teams combines easy setup, WhatsApp engagement and centralized reporting.',
      ],
      items: [
        {
          icon: 'rocket',
          title: 'Start Fast and Manage Sales Efficiently',
          body: 'Set up your workspace, import leads through CSV files and track opportunities using Easy-to-Use CRM Software for Small Businesses.',
          image: '/small-business-crm/images/card1-sm.webp',
          imageAlt: 'A small-business owner setting up NNC Small Business CRM on day one',
        },
        {
          icon: 'whatsapp',
          title: 'Connect with Customers Through WhatsApp',
          body: 'Manage customer conversations with WhatsApp CRM for Small Business. Link WhatsApp communication to leads and sales opportunities for organized follow-ups.',
          image: '/small-business-crm/images/card2-sm.webp',
          imageAlt: 'A WhatsApp conversation attached to a sales deal in NNC',
        },
        {
          icon: 'reports',
          title: 'Stay Updated with Your Daily Sales Activities',
          body: 'Monitor enquiries, pending follow-ups and overdue payments using Small Business Sales Tracking Software and a centralized CRM Dashboard.',
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
      body: "Scale your operations with NNC Digital's Small Business CRM and upgrade to advanced Customer Relationship Management Software when your team expands. Our Scalable Business CRM Software supports growing businesses with additional modules and advanced workflows.",
      bullets: [
        'Transfer existing leads, contacts and sales records',
        'Add advanced CRM modules based on business requirements',
        'Continue using existing team logins and workflows',
        'Upgrade your CRM Software for Small Businesses as your operational requirements increase',
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
      lead: [
        "Explore NNC Digital's Small Business CRM through a personalized walkthrough, expert consultation or recorded product demonstration.",
        'Discover how our Affordable CRM Software for Small Businesses supports lead management, sales tracking and customer communication.',
      ],
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Schedule a 30-minute walkthrough of our CRM Software for Small Businesses using your business data.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an Expert',
          body: 'Discuss your sales requirements and find the right Small Business CRM Software plan for your team.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a Demo',
          body: 'Explore our Sales Management CRM features, including enquiries, sales pipelines, WhatsApp communication and reporting.',
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
      lead: "Find answers about NNC Digital's Small Business CRM, pricing, integrations and sales management features.",
      items: [
        {
          q: 'What is NNC Small Business CRM?',
          a: "NNC Digital's Small Business CRM is Customer Relationship Management Software for teams of up to 10 users. It helps manage leads, sales pipelines, WhatsApp conversations, customer information and sales reports in one platform.",
        },
        {
          q: 'How is Small Business CRM different from the full NNC CRM?',
          a: 'Our CRM Software for Small Businesses focuses on lead management, sales tracking, WhatsApp communication and reporting. The full NNC CRM offers additional modules, advanced automation and more complex business workflows.',
        },
        {
          q: 'How much does Small Business CRM cost?',
          a: 'NNC Digital offers Affordable CRM Software for Small Businesses starting at ₹2,999/month for up to 5 users and ₹5,999/month for up to 10 users. Prices are based on annual billing and exclude 18% GST.',
        },
        {
          q: 'How quickly can I start using NNC Small Business CRM?',
          a: "NNC Digital's Easy-to-Use CRM Software for Small Businesses allows most teams to get started within a day, including CSV lead imports, business branding and team training.",
        },
        {
          q: 'Can I upgrade Small Business CRM when my team grows?',
          a: 'Yes. Our Scalable Business CRM Software allows growing teams to upgrade to the full NNC CRM while retaining leads, sales records, customer information, invoices and existing team logins.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Grow Your Business with Affordable Small Business CRM Software',
    sub: [
      "Simplify customer management, sales pipelines and invoicing with NNC Digital's Small Business CRM.",
      'Our CRM Software for Small Businesses combines Lead Management Software, Sales Management CRM, WhatsApp CRM for Small Business and Business Management CRM features in one platform.',
      'Book a demo and discover how the right Customer Relationship Management Software can support your business growth.',
    ],
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: "See What's Inside", href: '#inside' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
