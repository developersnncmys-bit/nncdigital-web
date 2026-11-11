// Content for every marketing / company / support / legal page.
// Each page: { metaTitle, metaDescription, breadcrumb[], hero{}, blocks[], cta{} }

const HOME = { label: 'Home', href: '/' }
const img = (src, alt) => ({ type: 'image', src, alt })
// Pre-launch audit: "Book a Demo" is the single primary CTA across the site
// (secondary options are "Start free trial" or "See pricing"). Keeps header
// and page body aligned instead of competing with two primary actions.
const startCta = {
  title: 'Run your business on what is next',
  sub: 'Book a 30-minute demo on your own data, or explore pricing.',
  primary: { label: 'Book a Demo', href: '#start' },
  secondary: { label: 'See Pricing', href: '/pricing' },
}
const heroCtas = [
  { label: 'Book a Demo', href: '#start', trial: true },
  { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
]

/* ============================ INDUSTRIES ============================ */
const industriesCrumb = { label: 'Industries', href: '/industries' }
const ind = (slug, o) => ({
  metaTitle: o.metaTitle || `${o.name} CRM | NNC CRM`,
  metaDescription: o.metaDescription || o.lead,
  breadcrumb: [HOME, industriesCrumb, { label: o.name }],
  // `heroComponent` opts into a framed dashboard-mockup hero (same visual
  // language as /multi-center-training-institutes-crm/) instead of a plain
  // image. Used on the education page because the TrainingInstitutesDashboard
  // already renders admissions / students / fees — a one-to-one fit.
  hero: {
    eyebrow: 'Industries',
    title: o.title,
    lead: o.lead,
    // Shared `heroCtas` ("Book a Demo" + "See pricing") is the default;
    // pages can override via `heroCtas` on the config (e.g. retail uses
    // "Start Free Trial" per the SEO brief).
    ctas: o.heroCtas || heroCtas,
    media: o.heroComponent
      ? { type: 'component', name: o.heroComponent, framed: true }
      : {
          ...img(o.img, o.name),
          ...(o.heroSquare ? { square: true } : {}),
          ...(o.heroSquareLg ? { squareLg: true } : {}),
        },
  },
  blocks: [
    { type: 'split', kicker: o.splitKicker || 'The problem', title: o.splitTitle, body: o.splitBody, bullets: o.bullets, media: img(o.img2 || o.img, o.name), ...(o.squareSplitMedia ? { squareMedia: true } : {}) },
    { type: 'featureGrid', flat: true, title: o.featuresTitle || `Built for ${o.name.toLowerCase()}`, lead: o.featuresLead, items: o.features },
    { type: 'stats', title: o.statsTitle, items: o.stats || [
      { value: '30 days', label: 'free trial on every plan' },
      { value: '1 day', label: 'typical setup time' },
      { value: '24x7', label: 'WhatsApp and email support' },
    ] },
    // Optional FAQ block appended when the per-industry entry supplies
    // `faq: { title?, lead?, items[] }`. Same renderer as every other FAQ
    // block on the site — no new component.
    ...(o.faq ? [{ type: 'faq', title: o.faq.title || 'Frequently Asked Questions', lead: o.faq.lead, items: o.faq.items }] : []),
  ],
  cta: o.cta || startCta,
})

export const INDUSTRIES = {
  'sales-teams': ind('sales-teams', {
    name: 'Sales Teams',
    metaTitle: 'CRM for Sales Teams & Lead Management | NNC Digital',
    metaDescription: 'Manage leads, sales pipelines, deals, WhatsApp follow-ups and revenue forecasts with NNC Digital CRM for Sales. Start your free 30-day trial.',
    title: 'CRM for Sales Teams to Manage Leads, Follow-Ups and Deals',
    lead: [
      "Simplify sales operations with NNC Digital's CRM for Sales. Capture leads, track deals, schedule follow-ups and manage sales opportunities in one platform.",
      'Our Sales Team CRM combines Sales Pipeline CRM, Lead Management CRM and Sales Management CRM to streamline daily sales activities.',
      'Designed for growing teams, our CRM Software for Sales Teams in India improves Sales Lead Tracking and Sales Performance Tracking.',
    ],
    img: '/img/industries/sales-hero.webp',
    img2: '/img/industries/sales-problem.webp',
    heroSquare: true,
    squareSplitMedia: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Challenge of Managing Sales Activities',
    splitTitle: 'Stop Losing Deals in Spreadsheets and Chat Threads',
    splitBody: [
      'Scattered leads and missed follow-ups can affect sales conversions.',
      "NNC Digital's CRM for Sales combines Sales Follow-Up CRM, Deal Management Software and Sales Automation Software to organize leads, deals and customer communication.",
    ],
    bullets: [
      'Capture enquiries with Lead Management CRM',
      'Track opportunities using Sales Pipeline CRM',
      'Schedule reminders with Lead Follow-Up Management Software',
      'Monitor team activities through Sales Performance Tracking',
      'Organize deals using Sales Pipeline Management Software',
    ],
    featuresTitle: 'Built for Sales Teams',
    featuresLead: [
      "NNC Digital's CRM for Sales helps teams manage leads, deals, customer follow-ups and revenue forecasts.",
      'Our Sales Management CRM combines Sales Pipeline CRM, Sales Forecasting CRM and WhatsApp Sales CRM for better sales visibility.',
    ],
    features: [
      {
        icon: 'pipeline',
        title: 'Visual Sales Pipeline',
        body: [
          'Track deals, sales stages and pending opportunities with Sales Pipeline CRM and Deal Management Software.',
          'Our Sales Pipeline Management Software helps teams monitor deal progress and prioritize sales activities.',
        ],
      },
      {
        icon: 'forecast',
        title: 'Sales Forecasts',
        body: [
          'Forecast revenue for 3, 6 and 12 months using Sales Forecasting CRM.',
          'Our CRM with Sales Forecasting and Sales Reporting Software help managers track targets and make informed decisions.',
        ],
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Selling',
        body: [
          'Manage customer conversations and follow-ups with WhatsApp Sales CRM and Sales Follow-Up CRM.',
          'Our CRM with WhatsApp Integration for Sales keeps buyer communication linked to leads and deals.',
        ],
      },
    ],
    statsTitle: 'Manage Sales Performance with Better Visibility',
    stats: [
      { value: '30 Days', label: 'Free trial of our Sales Team CRM' },
      { value: '1 Day', label: 'Typical CRM for Sales setup time' },
      { value: '24x7', label: 'WhatsApp and email support for CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About CRM for Sales',
      items: [
        { q: 'What is CRM for Sales?', a: "CRM for Sales helps teams capture leads, manage deals, schedule follow-ups and monitor opportunities. NNC Digital's Sales Management CRM centralizes sales activities and customer information." },
        { q: 'Can NNC Digital help sales teams manage leads and deals?', a: 'Yes. Our Lead Management CRM and Deal Management Software organize customer enquiries, sales stages and opportunities through a centralized Sales Pipeline CRM.' },
        { q: 'Does NNC Digital provide sales follow-up reminders?', a: 'Yes. Our Sales Follow-Up CRM and Lead Follow-Up Management Software help schedule reminders, manage pending activities and track customer follow-ups.' },
        { q: 'Can I track sales performance and forecast revenue?', a: 'Yes. Our Sales Forecasting CRM supports revenue projections for 3, 6 and 12 months. Sales Performance Tracking and Sales Reporting Software help managers monitor targets and team performance.' },
        { q: 'Does NNC Digital support WhatsApp communication for sales teams?', a: 'Yes. Our WhatsApp Sales CRM helps teams manage buyer conversations and follow-ups. CRM with WhatsApp Integration for Sales keeps communication connected to customer leads and deals.' },
      ],
    },
    cta: {
      title: 'Grow Your Sales with CRM Software',
      sub: [
        "Manage leads, sales pipelines, deals, forecasts and customer follow-ups with NNC Digital's CRM for Sales.",
        'Our Sales Team CRM combines Lead Management CRM, Sales Follow-Up CRM, Sales Forecasting CRM and WhatsApp Sales CRM to simplify sales operations.',
        'Start your free 30-day trial. No credit card required.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  'service-businesses': ind('service-businesses', {
    name: 'Service Businesses',
    metaTitle: 'CRM for Service Business | Jobs & Payments | NNC',
    metaDescription: "Manage clients, service jobs, GST invoices, payments and renewals with NNC Digital's CRM for Service Business. Start your free 30-day trial.",
    title: 'CRM for Service Business to Manage Clients, Jobs and Payments',
    lead: [
      "Simplify daily operations with NNC Digital's CRM for Service Business. Manage client enquiries, service jobs, invoices, payments and renewals in one platform.",
      'Our Service Business CRM combines Client Management CRM, Job Tracking CRM and CRM with Invoicing to streamline service delivery and customer relationships.',
      'Designed for growing service companies, our CRM Software for Service Businesses in India simplifies Service Business Management and repeat business tracking.',
    ],
    img: '/case-studies-images/service-business.jpg',
    img2: '/case-studies-images/service-challenge.webp',
    heroSquare: true,
    heroSquareLg: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Challenge of Managing Service Operations',
    splitTitle: 'One Place for Clients, Work and Payments',
    splitBody: [
      'Managing client enquiries, service jobs, billing and collections across multiple tools can delay operations.',
      "NNC Digital's CRM for Service Business combines Service Management Software, Job Tracking CRM and Payment Tracking CRM to organize daily workflows and customer follow-ups.",
    ],
    bullets: [
      'Centralize clients and projects with Client Management CRM',
      'Monitor service jobs using Service Job Tracking Software',
      'Generate GST invoices with CRM with Invoicing',
      'Track collections using Service Payment Tracking Software',
      'Manage repeat business with CRM for Renewals',
      'Organize follow-ups with Customer Follow-Up Management',
    ],
    featuresTitle: 'Built for Service Businesses',
    featuresLead: [
      "NNC Digital's Service Business CRM helps service companies manage clients, projects, invoicing, payments and renewals.",
      'Our CRM for Service Business combines Service Business Management Software, Client Management CRM and Profit Reports CRM for better operational visibility.',
    ],
    features: [
      {
        icon: 'enquiries',
        title: 'Client Enquiries',
        body: [
          'Capture enquiries, organize client information and schedule follow-ups with Client Management CRM and Customer Relationship Management Software.',
          'Our Client Management Software for Service Companies helps improve lead tracking and customer communication.',
        ],
      },
      {
        icon: 'invoice',
        title: 'Invoicing and Payments',
        body: [
          'Generate GST-ready invoices and monitor pending payments with CRM with Invoicing and Payment Tracking CRM.',
          'Our Service Billing Software and CRM Software with GST Invoicing simplify billing and payment management.',
        ],
      },
      {
        icon: 'reports',
        title: 'Profit Reports',
        body: [
          'Monitor revenue, client activity and service performance using Profit Reports CRM and Service Revenue Tracking Software.',
          'Track business performance through centralized reports for better decision-making.',
        ],
      },
    ],
    statsTitle: 'Manage Service Operations with Better Visibility',
    stats: [
      { value: '30 Days', label: 'Free trial of our Service Business CRM' },
      { value: '1 Day', label: 'Typical CRM for Service Business setup time' },
      { value: '24x7', label: 'WhatsApp and email support for CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About CRM for Service Business',
      items: [
        { q: 'What is CRM for Service Business?', a: "CRM for Service Business helps companies manage customer enquiries, jobs, invoices, payments and renewals. NNC Digital's Service Business CRM centralizes client records and daily operations." },
        { q: 'Can NNC Digital help track service jobs and projects?', a: 'Yes. Our Job Tracking CRM and Service Job Tracking Software help organize client projects, work updates, approved services and related payment information.' },
        { q: 'Does NNC Digital support invoicing and payment tracking?', a: 'Yes. Our CRM with Invoicing and Payment Tracking CRM help generate GST-ready invoices, maintain billing records and monitor outstanding payments.' },
        { q: 'Can I manage customer renewals and repeat business?', a: "Yes. NNC Digital's CRM for Renewals supports renewal tracking and Customer Follow-Up Management, helping service businesses maintain client relationships and identify repeat work opportunities." },
        { q: 'How can a Service Business CRM improve daily operations?', a: "A Service Business CRM centralizes enquiries, jobs, invoices and customer records. NNC Digital's Service Business Management Software and Profit Reports CRM help improve coordination and business visibility." },
      ],
    },
    cta: {
      title: 'Grow Your Service Business with CRM Software',
      sub: [
        "Manage clients, service jobs, GST invoices, payments and renewals with NNC Digital's CRM for Service Business.",
        'Our Service Business CRM combines Job Tracking CRM, Payment Tracking CRM, CRM for Renewals and Service Management Software to streamline daily operations.',
        'Start your free 30-day trial. No credit card required.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  manufacturing: ind('manufacturing', {
    name: 'Manufacturing',
    metaTitle: 'Best CRM for Manufacturing Business | NNC Digital',
    metaDescription: "Manage manufacturing orders, production, dispatch, GST billing and payments with NNC Digital's Manufacturing CRM Software. Start your free trial today.",
    title: 'Best CRM for Manufacturing Business to Manage Orders, Dispatch and Payments',
    lead: [
      "Simplify manufacturing operations with NNC Digital's best CRM for manufacturing business. Manage customer enquiries, quotations, orders, dispatch, GST billing and payments in one platform.",
      'Our Manufacturing CRM Software combines Order Management CRM, Production Management CRM and Manufacturing Customer Management to streamline sales and operations.',
      'Designed for manufacturers and factories, our CRM Software for Manufacturing Companies improves Sales and Order Tracking.',
    ],
    img: '/case-studies-images/manufacturing-hero.jpg',
    img2: '/case-studies-images/manufacturing-challenge.webp',
    heroSquareLg: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Challenge of Managing Manufacturing Operations',
    splitTitle: 'From Enquiry to Dispatch, Without the Chaos',
    splitBody: [
      'Managing quotations, production, orders and payments across multiple tools can delay operations.',
      "NNC Digital's Manufacturing CRM combines Manufacturing Order Management, Dispatch Management CRM and Payment Tracking CRM to organize workflows and improve team coordination.",
    ],
    bullets: [
      'Manage quotations and orders with Order Management CRM',
      'Track dispatches with Production and Dispatch Tracking Software',
      'Monitor collections using Manufacturing Payment Collection Software',
      'Improve sales and order tracking across departments',
      'Organize customer information with Manufacturing Customer Management',
    ],
    featuresTitle: 'Built for Manufacturing Businesses',
    featuresLead: [
      "NNC Digital's Manufacturing CRM Software helps factories and manufacturers manage enquiries, orders, production, dispatch, billing and payments.",
      'Our CRM Software for Manufacturers combines Manufacturing Sales Management Software, Order Management CRM and Dispatch Management CRM for better operational visibility.',
    ],
    features: [
      {
        icon: 'pipeline',
        title: 'Order Pipeline',
        body: [
          'Track quotations, orders and sales stages using Order Management CRM and Manufacturing Order Management Software.',
          'Manage customer orders and pending deliveries through a centralized Manufacturing Sales Tracking Software platform.',
        ],
      },
      {
        icon: 'invoice',
        title: 'Billing and GST',
        body: [
          'Generate invoices and manage payment records with CRM with Billing and GST.',
          'Our Manufacturing Billing Software helps organize GST documents, outstanding invoices and payment follow-ups.',
        ],
      },
      {
        icon: 'reports',
        title: 'Production and Dispatch View',
        body: [
          'Monitor pending orders, production progress and dispatch activities with Production Management CRM and Dispatch Management CRM.',
          'Use Production and Dispatch Tracking Software to improve coordination between sales, production and delivery teams.',
        ],
      },
    ],
    statsTitle: 'Manage Manufacturing Operations with Better Visibility',
    stats: [
      { value: '30 Days', label: 'Free trial of our Manufacturing CRM Software' },
      { value: '1 Day', label: 'Typical Manufacturing CRM setup time' },
      { value: '24x7', label: 'WhatsApp and email support for CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About Manufacturing CRM Software',
      items: [
        { q: 'What is the best CRM for manufacturing business?', a: "The best CRM for manufacturing business helps manage customer enquiries, quotations, orders, production, dispatch and payments. NNC Digital's Manufacturing CRM Software brings these activities into one platform." },
        { q: 'Can NNC Digital track orders from quotation to payment?', a: 'Yes. Our Order Management CRM and Manufacturing Order Management Software help track quotations, order progress, dispatch details and payment status.' },
        { q: 'Does NNC Digital support GST billing for manufacturing businesses?', a: 'Yes. Our CRM with Billing and GST helps manufacturers manage GST invoices, billing records and outstanding payments through centralized Manufacturing Billing Software.' },
        { q: 'Can manufacturing CRM software help manage outstanding payments?', a: 'Yes. Our Payment Tracking CRM and Manufacturing Payment Collection Software help track pending invoices, outstanding payments and collection follow-ups.' },
        { q: 'How can a manufacturing CRM improve business operations?', a: "A Manufacturing CRM centralizes customer records, quotations, orders, billing and follow-ups. NNC Digital's Manufacturing Sales Management Software helps improve coordination and operational visibility." },
      ],
    },
    cta: {
      title: 'Grow Your Business with Manufacturing CRM Software',
      sub: [
        "Manage enquiries, quotations, production, dispatch, GST billing and collections with NNC Digital's best CRM for manufacturing business.",
        'Our Manufacturing CRM Software combines Order Management CRM, Dispatch Management CRM, Payment Tracking CRM and CRM with Billing and GST to simplify operations.',
        'Start your free 30-day trial. No credit card required.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  retail: ind('retail', {
    name: 'Retail and distribution',
    metaTitle: 'CRM for Retail Business | Orders & Dealers – NNC Digital',
    metaDescription: "Manage customers, dealer orders, inventory and payments with NNC Digital's CRM for Retail Business. Simplify retail sales and start your free 30-day trial.",
    title: 'Retail CRM Software to Manage Orders, Dealers and Payments',
    lead: [
      "Simplify retail operations with NNC Digital's CRM for Retail Business. Manage customers, dealer orders, inventory, payments and sales in one platform.",
      'Our Retail CRM Software combines Distribution CRM Software, Dealer Management CRM, Order Management CRM and Customer Management CRM.',
      'Designed for retailers, wholesalers and distributors, our CRM Software for Retail Businesses in India streamlines order tracking and sales management.',
    ],
    img: '/case-studies-images/retail.jpg', img2: '/case-studies-images/retail-challenge.webp',
    heroSquareLg: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Challenge of Managing Retail Customers and Orders',
    splitTitle: 'Turn One-Time Buyers into Regular Customers',
    splitBody: "Missed follow-ups and delayed payments can affect sales. NNC Digital's CRM for Retail Business combines Retail Customer Management Software, Order Management CRM and Payment Collection CRM to organize orders, customers and collections.",
    bullets: [
      'Centralize orders and purchase history with Customer Management CRM',
      'Send offers and reorder reminders using WhatsApp Campaign CRM',
      'Connect products and stock with Retail Inventory Management Software',
      'Manage orders through Dealer Order Tracking Software',
      'Monitor collections using Retail Payment Tracking Software',
    ],
    featuresTitle: 'Built for Retail and Distribution Businesses',
    featuresLead: "NNC Digital's CRM for Retail Business combines Retail CRM Software, Distribution CRM Software, Dealer Management CRM and Sales Analytics CRM to simplify customer, order and sales management.",
    features: [
      { icon: 'retail', title: 'Customer Profiles', body: 'Track customer details, purchase history and repeat orders with Customer Management CRM and Retail Customer Management Software.' },
      { icon: 'whatsapp', title: 'WhatsApp Campaigns', body: 'Use WhatsApp Campaign CRM and Retail CRM with WhatsApp Integration to share offers, festival greetings and reorder reminders.' },
      { icon: 'reports', title: 'Sales Analytics', body: 'Monitor best sellers, slow-moving stock and customer trends with Sales Analytics CRM and Retail Sales Analytics Software.' },
    ],
    statsTitle: 'Manage Retail Sales with Better Visibility',
    stats: [
      { value: '30 Days', label: 'Free trial of our Retail CRM Software' },
      { value: '1 Day', label: 'Typical CRM for Retail Business setup time' },
      { value: '24x7', label: 'WhatsApp and email support for retail CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About CRM for Retail Business',
      items: [
        { q: 'What is CRM for Retail Business?', a: "CRM for Retail Business helps retailers manage customers, dealer orders, payments and repeat sales. NNC Digital's Retail CRM Software centralizes order tracking and customer records." },
        { q: 'Can NNC Digital help manage dealer orders and customer records?', a: 'Yes. Our Dealer Management CRM and Order Management CRM organize dealer details, customer profiles, purchase history and sales orders.' },
        { q: 'Can I track outstanding payments and follow-ups?', a: 'Yes. Our Payment Collection CRM and Retail Payment Tracking Software help track pending payments, invoices and collection reminders.' },
        { q: 'Does NNC Digital support WhatsApp campaigns for retail businesses?', a: 'Yes. Our WhatsApp Campaign CRM helps send promotional offers, festival greetings and reorder reminders to customers.' },
        { q: 'How can CRM software help improve repeat sales?', a: 'Retail CRM Software tracks purchase history and buying patterns. Our Customer Management CRM helps manage follow-ups and encourage repeat purchases.' },
      ],
    },
    cta: {
      title: 'Grow Your Retail Business with CRM Software',
      sub: [
        "Manage customers, orders, inventory, payments and WhatsApp campaigns with NNC Digital's CRM for Retail Business.",
        'Our Retail CRM Software combines Distribution CRM Software, Order Management CRM, Payment Collection CRM and Customer Management CRM to streamline business operations.',
        'Start your free 30-day trial. No credit card required. Cancel anytime.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  healthcare: ind('healthcare', {
    name: 'Healthcare and Clinics',
    metaTitle: 'CRM Software for Healthcare Industry | NNC Digital',
    metaDescription: "Manage patient enquiries, appointments, WhatsApp reminders, follow-ups and payments with NNC Digital's Healthcare CRM Software. Start your free trial.",
    title: 'Healthcare CRM Software That Keeps Every Patient Follow-Up on Track',
    lead: [
      "Simplify clinic operations with NNC Digital's CRM software for healthcare industry. Manage patient enquiries, appointments, WhatsApp reminders, follow-ups, payments and records in one platform.",
      'Our Healthcare CRM Software combines Patient Management CRM, Appointment Reminder CRM and Patient Data Management CRM to improve patient communication and daily clinic management.',
      'Built for clinics and healthcare providers, our CRM for Healthcare keeps patient information organized and accessible.',
    ],
    img: '/img/industries/healthcare-hero.webp',
    img2: '/img/industries/healthcare-problem.webp',
    heroSquare: true,
    squareSplitMedia: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Problem',
    splitTitle: 'Never Miss a Patient Follow-Up Again',
    splitBody: [
      'Managing appointments in diaries and patient records manually can lead to missed follow-ups.',
      "NNC Digital's CRM software for healthcare industry combines Patient Follow-Up CRM, Clinic Management Software and Appointment Scheduling Software to organize patient communication, visits and reminders.",
    ],
    bullets: [
      'Centralized patient records and medical history',
      'Automated appointment and follow-up reminders on WhatsApp',
      'Patient payments and package tracking',
      'Organized clinic operations with Patient Management Software',
      'Simplified patient communication with Healthcare CRM Software',
    ],
    featuresTitle: 'Built for Healthcare and Clinics',
    featuresLead: [
      "NNC Digital's CRM software for healthcare industry helps clinics manage patient enquiries, appointments, follow-ups, payments and information securely.",
      'Our CRM for Clinics combines Patient Relationship Management Software, Healthcare CRM Software and Patient Data Management CRM to simplify everyday operations.',
    ],
    features: [
      { icon: 'enquiries', title: 'Patient Enquiries', body: 'Capture and organize patient enquiries with Patient Management CRM and CRM software for healthcare industry. Track patient interactions, appointment requests and follow-up activities in one place.' },
      { icon: 'whatsapp', title: 'Reminders', body: 'Automate appointment notifications and follow-ups with Appointment Reminder CRM, WhatsApp Reminder CRM and Patient Follow-Up CRM to help reduce missed visits.' },
      { icon: 'security', title: 'Private and Safe', body: "Manage patient information with NNC Digital's Patient Data Management CRM. Our Healthcare CRM Software supports role-based access and controlled patient data management." },
    ],
    statsTitle: 'Simple Healthcare CRM Setup and Support',
    stats: [
      { value: '30 Days', label: 'Free trial to explore our Healthcare CRM Software' },
      { value: '1 Day', label: 'Typical setup time for CRM for Clinics' },
      { value: '24x7', label: 'WhatsApp and email support for healthcare CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About Healthcare CRM Software',
      items: [
        { q: 'What is CRM software for the healthcare industry?', a: "CRM software for healthcare industry helps clinics manage patient enquiries, appointments, reminders, payments and records. NNC Digital's Healthcare CRM Software centralizes patient communication and follow-ups." },
        { q: 'Can NNC Digital help clinics manage patient appointments?', a: "Yes. NNC Digital's CRM for Clinics and Appointment Reminder CRM help organize patient bookings, schedule reminders and track follow-ups through one platform." },
        { q: 'Does NNC Digital support WhatsApp appointment reminders?', a: 'Yes. Our WhatsApp Reminder CRM and Patient Follow-Up CRM help clinics send appointment notifications, reminders and follow-up messages to patients.' },
        { q: 'Can I manage patient payments and packages with NNC Digital?', a: "Yes. NNC Digital's Patient Management CRM helps clinics organize payment records, patient packages and billing information through centralized Clinic Management Software." },
        { q: 'How does Healthcare CRM Software help improve clinic management?', a: 'Healthcare CRM Software brings patient records, appointments, enquiries and follow-ups together. Our CRM software for healthcare industry helps clinics improve communication, reduce manual work and organize daily operations.' },
      ],
    },
    cta: {
      title: 'Simplify Patient Management with Healthcare CRM Software',
      sub: [
        "Manage patient enquiries, appointment scheduling, WhatsApp reminders, payments and follow-ups with NNC Digital's CRM software for healthcare industry.",
        'Our CRM for Healthcare combines Patient Management CRM, Clinic CRM Software and Patient Follow-Up Management Software to streamline patient communication and clinic operations.',
        'Start your free 30-day trial. No credit card required. Cancel anytime.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  education: ind('education', {
    name: 'Education',
    metaTitle: 'Education CRM Software for Coaching Institutes | NNC',
    metaDescription: 'Manage student admissions, enquiries, fees and follow-ups with education CRM software for coaching institutes, training centres and educational institutions.',
    title: 'Education CRM Software for Coaching Institutes and Educational Institutions',
    lead: [
      'Admissions season is won by the institute that follows up fastest. NNC CRM is education CRM software for coaching institutes, training centres, and educational institutions to manage student enquiries, admissions, fees, and follow-ups.',
      'Capture leads from websites, advertisements, referrals, and walk-ins. Assign enquiries to counsellors, automate follow-up reminders, and keep parents informed through WhatsApp.',
      "With NNC's CRM for education, your team can convert more admission enquiries into enrolments while simplifying everyday administrative work.",
    ],
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    // Hero: reuse the animated TrainingInstitutesDashboard (admissions /
    // students / fees screens) framed on the scenic+glass panel — a direct
    // visual preview of what this industry page is selling.
    heroComponent: 'trainingInstitutesDashboardFlat',
    img: '/img/scene-team.jpg',
    // Problem section: ADMISSIONS / ATTENDANCE / FEE RECORDS / STUDENT
    // PERFORMANCE binders next to a laptop. Maps one-to-one onto "every
    // admission enquiry captured", "follow up reminders" and "fees tracked".
    img2: '/case-studies-images/training-challenge.webp',
    splitKicker: 'The Problem',
    splitTitle: 'Convert More Admission Enquiries with Education CRM Software',
    splitBody: [
      'Coaching institutes receive student enquiries from advertisements, websites, referrals, WhatsApp, and walk-ins. Without a structured admission management system, missed calls, delayed follow-ups, and scattered records can lead to lost admissions.',
      "NNC's education CRM software centralises student enquiry management, helping counsellors track prospective students, manage admission pipelines, and improve enquiry conversion rates.",
    ],
    bullets: [
      'Every Admission Enquiry Captured and Assigned',
      'Follow-Up Reminders for Counsellors',
      'Fees and Instalments Tracked Per Student',
    ],
    featuresTitle: 'A Coaching Institute CRM Built for Your Institution',
    featuresLead: [
      'NNC CRM brings student enquiry management, admission tracking, fee management, and communication together in one education CRM platform.',
      'Whether you manage a coaching centre, training institute, or multi-centre educational business, NNC helps organise student information, improve parent communication, and simplify everyday operations.',
    ],
    features: [
      {
        icon: 'enquiries',
        title: 'Manage Student Enquiries and Admissions',
        body: 'Track prospective students from their first enquiry to enrolment with student admission management software.',
      },
      {
        icon: 'invoice',
        title: 'Simplify Student Fee Management',
        body: 'Monitor fee collection, pending payments, and instalments through a centralised student fee management system.',
      },
      {
        icon: 'whatsapp',
        title: 'Improve Parent and Student Communication',
        body: 'Keep parents and prospective students informed through WhatsApp communication and timely follow-ups.',
      },
      {
        icon: 'education',
        title: 'Manage Your Education Business from One Platform',
        body: 'Organise student records, admission activities, and reporting with CRM software for educational institutions.',
      },
    ],
    statsTitle: 'Built for Education',
    stats: [
      { value: '30 Days', label: 'Free trial on every plan' },
      { value: '1 Day', label: 'Typical setup time' },
      { value: '24x7', label: 'WhatsApp and email support' },
    ],
    cta: {
      title: 'Run Your Education Business on What Is Next',
      sub: [
        "Manage student admissions, enquiries, fee collection, and counsellor follow-ups with NNC's education CRM software.",
        'Discover how a CRM for coaching institutes can help improve admission enquiry conversion, organise student information, and simplify administrative tasks.',
        'Book a 30-minute demo using your own data or explore flexible CRM pricing for your educational institution.',
      ],
      primary: { label: 'Book a Demo', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
  'real-estate': ind('real-estate', {
    name: 'Real Estate',
    metaTitle: 'CRM for Real Estate Leads & Site Visits | NNC Digital',
    metaDescription: "Manage property leads, site visits, WhatsApp follow-ups and bookings with NNC Digital's CRM for Real Estate. Simplify sales and start your free trial.",
    title: 'CRM for Real Estate to Manage Property Leads, Site Visits and Bookings',
    lead: [
      "Simplify property sales with NNC Digital's CRM for Real Estate. Capture buyer enquiries from property portals, ads, websites, referrals and walk-ins in one platform.",
      'Our Real Estate CRM Software combines Property CRM Software, Real Estate Lead Management CRM and Real Estate Sales Tracking Software to manage leads, site visits, bookings and follow-ups.',
      'Built for agents, builders and developers, our CRM Software for Real Estate Agents keeps sales pipelines organized.',
    ],
    img: '/img/industries/real-estate-hero.webp',
    img2: '/img/industries/real-estate-problem.webp',
    heroSquare: true,
    squareSplitMedia: true,
    heroCtas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    splitKicker: 'The Challenge of Managing Property Leads',
    splitTitle: 'Follow Every Property Lead to the Close',
    splitBody: [
      'Missed enquiries and delayed follow-ups can affect property sales.',
      "NNC Digital's CRM for Real Estate combines Property Lead Management, Real Estate Follow-Up CRM and Site Visit Management CRM to track buyer enquiries, schedule visits and manage sales opportunities efficiently.",
    ],
    bullets: [
      'Capture property leads from portals, ads, websites and referrals',
      'Schedule site visits with Real Estate Site Visit Management Software',
      'Track property bookings and payment milestones',
      'Organize buyers, projects and budgets with Real Estate Customer Management',
      'Manage deals with Real Estate Sales Pipeline Management Software',
    ],
    featuresTitle: 'Built for Real Estate Businesses',
    featuresLead: [
      "NNC Digital's CRM for Real Estate helps builders, property developers and agents manage enquiries, follow-ups, site visits and bookings.",
      'Our Real Estate CRM Software combines Property Sales Management Software, Real Estate Booking CRM and WhatsApp CRM for Real Estate to streamline property sales operations.',
    ],
    features: [
      {
        icon: 'pipeline',
        title: 'Lead Pipeline',
        body: [
          'Track buyer enquiries, budgets, projects and deal stages with Real Estate Lead Management CRM.',
          'Our Property Lead Management Software helps sales teams identify potential buyers and manage opportunities through a centralized Real Estate Sales Pipeline.',
        ],
      },
      {
        icon: 'whatsapp',
        title: 'WhatsApp Follow-Ups',
        body: [
          'Manage buyer conversations with WhatsApp CRM for Real Estate and Real Estate Follow-Up CRM.',
          'Our Real Estate CRM with WhatsApp Integration helps sales teams organize property updates, customer communication and follow-up reminders.',
        ],
      },
      {
        icon: 'forecast',
        title: 'Booking Forecast',
        body: [
          'Monitor property bookings, payment milestones and sales opportunities using Real Estate Booking CRM.',
          'Our Real Estate Sales Tracking Software provides better visibility into booking stages, pending payments and property sales performance.',
        ],
      },
    ],
    statsTitle: 'Manage Real Estate Sales with Better Visibility',
    stats: [
      { value: '30 Days', label: 'Free trial to explore our Real Estate CRM Software' },
      { value: '1 Day', label: 'Typical setup time for CRM for Real Estate' },
      { value: '24x7', label: 'WhatsApp and email support for real estate CRM users' },
    ],
    faq: {
      title: 'Frequently Asked Questions About CRM for Real Estate',
      items: [
        { q: 'What is CRM for Real Estate?', a: "CRM for Real Estate helps property businesses manage buyer enquiries, site visits, follow-ups and bookings. NNC Digital's Real Estate CRM Software centralizes property leads, customer information and sales activities." },
        { q: 'Can NNC Digital help manage property leads from multiple sources?', a: 'Yes. Our Real Estate Lead Management CRM captures enquiries from property portals, ads, websites, referrals and walk-ins. Property Lead Management Software helps organize leads and track their progress.' },
        { q: 'Does NNC Digital support WhatsApp follow-ups for property leads?', a: "Yes. NNC Digital's WhatsApp CRM for Real Estate helps sales teams manage buyer conversations, property updates and follow-ups through centralized customer communication." },
        { q: 'Can I track site visits and property bookings?', a: 'Yes. Our Site Visit Management CRM and Real Estate Booking CRM help schedule property visits, set reminders, monitor booking stages and track payment milestones.' },
        { q: 'Who can use NNC Digital Real Estate CRM Software?', a: "NNC Digital's Real Estate CRM Software is designed for builders, developers, real estate agents and property sales teams. Our CRM Software for Property Developers simplifies lead management, buyer communication and sales tracking." },
      ],
    },
    cta: {
      title: 'Grow Property Sales with CRM for Real Estate',
      sub: [
        "Manage property enquiries, buyer communication, site visits and bookings with NNC Digital's CRM for Real Estate.",
        'Our Property CRM Software combines Real Estate Lead Management CRM, Site Visit Management CRM and WhatsApp CRM for Real Estate to simplify customer follow-ups and improve sales visibility.',
        'Start your free 30-day trial. No credit card required.',
      ],
      primary: { label: 'Start Free Trial', href: '#start' },
      secondary: { label: 'See Pricing', href: '/pricing' },
    },
  }),
}

/* ============================ FEATURES ============================ */
const featuresCrumb = { label: 'Features', href: '/features' }
const feat = (o) => ({
  metaTitle: o.metaTitle || `${o.name} | NNC CRM`,
  metaDescription: o.metaDescription || o.lead,
  breadcrumb: [HOME, featuresCrumb, { label: o.name }],
  hero: { eyebrow: 'Product', title: o.title, lead: o.lead, ctas: heroCtas, media: img(o.img, o.name) },
  blocks: [
    { type: 'featureGrid', flat: true, title: o.gridTitle || `What you get with ${o.name.toLowerCase()}`, items: o.features },
    o.split && { type: 'split', flip: true, kicker: o.split.kicker || 'How it helps', title: o.split.title, body: o.split.body, bullets: o.split.bullets, media: img(o.img2 || o.img, o.name) },
  ].filter(Boolean),
  cta: startCta,
})

export const FEATURES = {
  enquiries: feat({
    name: 'Enquiries',
    metaTitle: 'Lead & Enquiry Management Software | NNC CRM',
    metaDescription: 'Capture every lead from calls, web, WhatsApp and ads in one inbox. Auto assign, auto remind and follow up so no enquiry is ever lost again.',
    title: 'Every enquiry caught. None forgotten.',
    lead: 'Leads arrive from everywhere: a missed call, a website form, a WhatsApp message, an ad, a walk in. NNC CRM pulls them all into one inbox, assigns each one to the right person and reminds them to follow up, automatically. The lead you forget is the deal your competitor closes.',
    img: '/img/feat-enquiries.jpg', img2: '/img/scene-office.jpg',
    features: [
      { icon: 'enquiries', title: 'Capture everywhere', body: 'Web forms, WhatsApp, calls and walk ins, all into one inbox.' },
      { icon: 'pipeline', title: 'Auto assign', body: 'Route each enquiry to the right person instantly.' },
      { icon: 'clock', title: 'Never go cold', body: 'Reminders keep every enquiry moving until it closes.' },
    ],
    split: { title: 'Know what is hot and what is slipping', body: 'A single view of every enquiry means you always know what to chase today.', bullets: ['Source tracking for every enquiry', 'Stages tailored to your business', 'Daily follow up list for your team'] },
  }),
  'sales-pipeline': feat({
    name: 'Sales pipeline',
    metaTitle: 'Sales Pipeline Software & Deal Tracking | NNC CRM',
    metaDescription: 'A visual sales pipeline that shows every deal by stage, value and owner. Move deals, spot bottlenecks and know what will close this week.',
    title: 'See every deal. Move it forward.',
    lead: 'Your pipeline should answer one question in three seconds: what is going to close, and what is stuck. NNC CRM gives you a clean visual board of every deal by stage, value and owner, so your team always knows the next move.',
    img: '/img/scene-dashboard.jpg', img2: '/img/scene-deal.jpg',
    features: [
      { icon: 'pipeline', title: 'Drag and drop', body: 'Move deals through stages in a single click.' },
      { icon: 'reports', title: 'Weighted value', body: 'See expected revenue by stage and probability.' },
      { icon: 'users', title: 'Team view', body: 'Track performance across every rep and region.' },
    ],
  }),
  forecasting: feat({
    name: 'Forecasting',
    metaTitle: 'Sales Forecasting Software | NNC CRM',
    metaDescription: 'Forecast revenue 3, 6 and 12 months ahead from real pipeline data. Plan hiring, cash and targets with numbers you can trust.',
    title: 'Know what next quarter looks like, today.',
    lead: 'Most businesses run on last month’s numbers. NNC CRM looks forward. It reads your live pipeline and projects revenue 3, 6 and 12 months out, so you can plan hiring, cash flow and targets with confidence instead of hope.',
    img: '/img/feat-forecast.jpg', img2: '/img/scene-planning.jpg',
    features: [
      { icon: 'forecast', title: 'Revenue forecast', body: 'See where you are headed, not just where you have been.' },
      { icon: 'reports', title: 'Scenario planning', body: 'Compare best case and worst case in seconds.' },
      { icon: 'clock', title: 'Always current', body: 'Forecasts update automatically as deals change.' },
    ],
  }),
  invoicing: feat({
    name: 'Invoicing and payments',
    metaTitle: 'Invoicing & Payment Tracking Software | NNC CRM',
    metaDescription: 'Raise GST ready invoices, send automatic payment reminders and track collections inside your CRM. Get paid faster, chase less.',
    title: 'Raise the invoice. Get paid. Move on.',
    lead: 'The deal is not done when it is won. It is done when the money is in. NNC CRM turns a closed deal into a GST ready invoice in one click, chases the payment for you and shows you exactly who owes what.',
    img: '/img/scene-data.jpg', img2: '/img/scene-office.jpg',
    features: [
      { icon: 'invoice', title: 'GST ready invoices', body: 'Compliant invoices in seconds, no extra software.' },
      { icon: 'whatsapp', title: 'Share and remind', body: 'Send invoices and gentle reminders on WhatsApp.' },
      { icon: 'reports', title: 'Track dues', body: 'Always know what is paid, pending and overdue.' },
    ],
  }),
  whatsapp: feat({
    name: 'WhatsApp engagement',
    metaTitle: 'WhatsApp CRM & Business Inbox | NNC CRM',
    metaDescription: 'A full WhatsApp inbox built into your CRM. Reply, broadcast, automate and qualify leads 24/7 — no extra apps needed.',
    title: 'India runs on WhatsApp. So does NNC CRM.',
    lead: 'If your CRM cannot do WhatsApp, it is missing the most important channel in the country. NNC CRM has a real WhatsApp inbox built in, where your whole team can read, reply, broadcast and automate, with every message tied to the right lead and deal.',
    img: '/img/feat-whatsapp.jpg', img2: '/img/scene-mobile.jpg',
    features: [
      { icon: 'whatsapp', title: 'Two way chat', body: 'Reply to customers right from the contact record.' },
      { icon: 'enquiries', title: 'Capture leads', body: 'Turn every WhatsApp enquiry into a tracked lead.' },
      { icon: 'reports', title: 'Campaigns', body: 'Broadcast offers and measure what works.' },
    ],
  }),
  reports: feat({
    name: 'Reports and analytics',
    metaTitle: 'CRM Reports & Sales Analytics Dashboard | NNC CRM',
    metaDescription: 'Live dashboards for sales, lead sources, team performance and revenue. See what is working, fix what is not, export anytime.',
    title: 'Run the business on numbers, not noise.',
    lead: 'Reports should answer questions, not create more. NNC CRM gives you live dashboards on the things that decide your month: revenue, sources, team output and conversion. Open it in the morning and you know exactly where to spend your day.',
    img: '/img/scene-data.jpg', img2: '/img/scene-dashboard.jpg',
    features: [
      { icon: 'reports', title: 'Live dashboards', body: 'Sales, collections and growth at a glance.' },
      { icon: 'forecast', title: 'Trends', body: 'Spot what is rising and what is slowing early.' },
      { icon: 'users', title: 'Team scorecards', body: 'See who is performing and who needs help.' },
    ],
  }),
  integrations: feat({
    name: 'Integrations',
    metaTitle: 'CRM Integrations: Website, Ads, Payments | NNC CRM',
    metaDescription: 'Connect website forms, Google and Meta ad leads, payment gateways and the tools your team already uses. Your CRM, wired into your business.',
    title: 'Wired into the tools you already use.',
    lead: 'A CRM works best when it sits at the centre of everything. NNC CRM connects to your website, your ad accounts, your payment gateway and your everyday tools, so leads and data flow in automatically and your team stops copying things by hand.',
    img: '/img/scene-planning.jpg', img2: '/img/scene-team.jpg',
    features: [
      { icon: 'integrations', title: 'Plug and play', body: 'Turn on the tools you use in a few clicks.' },
      { icon: 'invoice', title: 'Accounting', body: 'Sync invoices and payments with Tally and Razorpay.' },
      { icon: 'api', title: 'Open API', body: 'Build custom connections with our developer API.' },
    ],
  }),
}

/* ============================ COMPANY ============================ */
const companyCrumb = { label: 'Company', href: '/company/about' }
const cb = (label, o) => ({ metaTitle: o.metaTitle || `${label} | NNC CRM`, metaDescription: o.metaDescription || o.lead, breadcrumb: [HOME, companyCrumb, { label }] })

export const COMPANY = {
  about: {
    metaTitle: 'About NNC Digital CRM | Our Story & Experience',
    metaDescription: 'Discover NNC Digital CRM, built on 10+ years of experience, 565+ projects and a 35+ member team. Explore our business CRM software and company story.',
    breadcrumb: [HOME, companyCrumb, { label: 'About us' }],
    hero: {
      eyebrow: 'Company',
      title: 'NNC Digital CRM – Built from Real Business Experience',
      lead: [
        'Built on 10+ years of experience, NNC Digital CRM combines lead management, WhatsApp follow-ups, invoicing and automation in one CRM Platform.',
        'Developed by Nakshatra Namaha Creations, our Business CRM Software integrates Lead Management CRM, Sales Management CRM and CRM with Automation.',
        'Our CRM Software for Indian Businesses simplifies customer management, sales and daily workflows.',
      ],
      ctas: heroCtas,
      media: img('/img/scene-planning.jpg', 'A professional working on business software — the real business experience behind NNC Digital CRM'),
    },
    blocks: [
      // Section: Experience That Goes Beyond Building Software.
      // Big values stay to the number only — Salesforce-style stats row — so
      // every cell renders cleanly on one line. The brief's H3 phrasing +
      // descriptor sit in the label below, consistent across all four cells.
      { type: 'stats', title: 'Experience That Goes Beyond Building Software', lead: 'NNC Digital brings years of experience in Business CRM Software, custom applications and business technology solutions.', items: [
        { value: '10+', label: 'Years of experience in custom software development' },
        { value: '565+', label: 'Projects delivered across industries' },
        { value: '35+', label: 'In-house professionals developing CRM software' },
        { value: '4', label: 'Offices serving Bengaluru, Mumbai, Mysuru and Hyderabad' },
      ] },
      // Section: Why We Built NNC Digital CRM — H2 with intro + H3
      // "One Platform for Business Management" subsection per the brief.
      { type: 'prose', sections: [
        {
          h: 'Why We Built NNC Digital CRM',
          p: [
            'After developing software for different industries, we created NNC Digital CRM to bring essential business tools into one platform.',
            'Our Decision-Making CRM combines WhatsApp CRM, Business Automation Software, Lead Tracking Software and invoicing.',
          ],
          subs: [
            {
              h: 'One Platform for Business Management',
              p: [
                'NNC CRM offers centralized Customer Relationship Management Software for sales, customer engagement and business operations.',
                'Key features: Lead Management CRM, WhatsApp CRM, CRM with Automation, Invoicing, and Reports and Dashboards.',
              ],
            },
          ],
        },
      ] },
      // Section: Not a Runway. A Track Record. — H2 with intro + two H3
      // subsections (Real Project Experience + Experienced In-House Team)
      // + brief's "Get to Know NNC Digital CRM" section CTA.
      { type: 'prose', sections: [
        {
          h: 'Not a Runway. A Track Record.',
          p: [
            'NNC Digital CRM is backed by 565+ delivered projects, 10+ years of experience and a skilled development team.',
            'Our Indian CRM Software is built from practical business experience.',
          ],
          subs: [
            {
              h: 'Real Project Experience',
              p: ['565+ projects across industries, including CRM for Sales Teams, CRM for Service Businesses and custom applications.'],
            },
            {
              h: 'Experienced In-House Team',
              p: ['35+ professionals developing Business CRM Software and Cloud-Based CRM Software.'],
            },
          ],
          cta: { label: 'Get to Know NNC Digital CRM', href: '#start', trial: true },
        },
      ] },
      // Section: Where to Find NNC Digital Across India — four offices.
      { type: 'stats', title: 'Where to Find NNC Digital Across India', lead: 'NNC Digital operates from four offices, delivering CRM Software for Indian Businesses and custom solutions.', items: [
        { value: 'Bengaluru', label: 'Head Office — Business CRM Software in India and software development' },
        { value: 'Mumbai', label: 'Thane West — CRM Software and digital solutions' },
        { value: 'Mysuru', label: 'Regional Office — CRM for Indian Businesses and software services' },
        { value: 'Hyderabad', label: 'Regional Office — Customer Management CRM and business solutions' },
      ] },
      // Section: FAQ — five questions per the brief.
      { type: 'faq', title: 'Frequently Asked Questions About NNC Digital CRM', items: [
        { q: 'What is NNC Digital CRM?', a: 'NNC Digital CRM is Customer Relationship Management Software developed by Nakshatra Namaha Creations. It combines Lead Management CRM, WhatsApp CRM, invoicing, automation and reporting.' },
        { q: 'Why did Nakshatra Namaha Creations build NNC Digital CRM?', a: 'After 10+ years of software development, the team created NNC Digital CRM to combine essential business tools into one Decision-Making CRM Platform.' },
        { q: 'How much experience does the NNC team have in software development?', a: 'NNC has 10+ years of experience, 565+ projects, 35+ professionals and four offices, supporting Business CRM Software and custom development.' },
        { q: 'Where is Nakshatra Namaha Creations located?', a: 'NNC Digital operates in Bengaluru, Mumbai (Thane West), Mysuru and Hyderabad, providing CRM Software for Indian Businesses.' },
        { q: 'How can I get started with NNC Digital CRM?', a: 'Book a demo, explore pricing or start a free trial of NNC Digital CRM. Our CRM Platform helps manage leads, sales and customer relationships.' },
      ] },
    ],
    // Section: Final CTA — "Build the CRM Your Business Actually Needs".
    cta: {
      title: 'Build the CRM Your Business Actually Needs',
      sub: [
        'Manage leads, sales and customer relationships with NNC Digital CRM.',
        'Our Business CRM Software combines Sales Pipeline Management Software, WhatsApp CRM and CRM with Automation.',
        'Explore our Customizable CRM Software for Businesses to simplify daily operations.',
      ],
      primary: { label: 'Book a Demo', href: '#start' },
      secondary: { label: 'Contact Us', href: '/company/contact' },
    },
  },
  careers: {
    ...cb('Careers', { lead: 'Join us and help Indian businesses grow.', metaTitle: "Careers at NNC | Build India's CRM With Us", metaDescription: 'Join NNC and help build the decision making CRM used across industries. Open roles in engineering, sales, support and marketing across four cities.' }),
    hero: { eyebrow: 'Careers', title: 'Build the CRM the whole country runs on.', lead: 'We are a profitable, ten year product and services company building something used by businesses across India. If you want real ownership and real impact, come build with us.', ctas: [{ label: 'See open roles', href: '#roles', variant: 'ghost' }], media: img('/img/scene-people.jpg', 'Careers') },
    blocks: [
      { type: 'featureGrid', flat: true, title: 'Why work here', items: [
        { icon: 'rocket', title: 'Real impact', body: 'Your work reaches thousands of businesses every day.' },
        { icon: 'users', title: 'Small team', body: 'Ownership from day one, no layers, no red tape.' },
        { icon: 'globe', title: 'Flexible', body: 'Work from anywhere in India with a results first culture.' },
      ] },
      { type: 'cards', title: 'Open roles', lead: 'We are always looking for talented people. Do not see your role? Write to us.', items: [
        { icon: 'pipeline', title: 'Product Engineer', body: 'Full stack engineer to build core CRM features. Remote, India.' },
        { icon: 'users', title: 'Customer Success', body: 'Help businesses get the most out of NNC. Remote, India.' },
        { icon: 'reports', title: 'Growth Marketer', body: 'Own demand generation across channels. Remote, India.' },
      ] },
    ],
    cta: { title: 'Want to join us?', sub: 'Send your resume and a note to careers@nncdigital.co.in.', primary: { label: 'Email careers', href: 'mailto:careers@nncdigital.co.in' } },
  },
  blog: {
    ...cb('Blog', { lead: 'Ideas on sales, CRM and running a better business.', metaTitle: 'NNC CRM Blog | CRM, Sales & WhatsApp Growth Tips', metaDescription: 'Practical guides on CRM, sales pipelines, WhatsApp marketing and growing your business by industry. Written by the NNC team.' }),
    hero: { eyebrow: 'Blog', title: 'Ideas to help you sell more and chase less.', lead: 'Practical, no fluff guides on running a tighter sales operation, getting more from WhatsApp, and choosing the right CRM for your industry.', ctas: [], media: img('/img/scene-planning.jpg', 'Blog') },
    blocks: [
      { type: 'cards', title: 'Latest articles', items: [
        { icon: 'forecast', title: 'How to forecast revenue with a CRM', body: 'A simple framework to project the next quarter using live pipeline data.', href: '#' },
        { icon: 'whatsapp', title: 'WhatsApp selling that does not annoy', body: 'Five ways to use WhatsApp to win deals without spamming customers.', href: '#' },
        { icon: 'pipeline', title: 'Build a pipeline your team will use', body: 'Design sales stages that match how your business actually sells.', href: '#' },
      ] },
    ],
    cta: startCta,
  },
  partners: {
    ...cb('Partners', { lead: 'Partner with NNC Digital.', metaTitle: 'NNC Digital Partner Program | Become a CRM Partner', metaDescription: 'Join NNC Digital Partner Program. Earn commissions as a CRM referral partner, offer CRM implementation services or build integrations. Apply today.' }),
    hero: {
      eyebrow: 'Partners',
      title: 'Grow Your Business by Growing Ours',
      lead: [
        'Join the NNC Digital Partner Program and explore new CRM Business Partnership opportunities.',
        'Our CRM Partner Program helps businesses and professionals become CRM Referral Partners, CRM Implementation Partners or Technology Partners.',
        'Refer clients, provide CRM services or build integrations through our CRM Software Partnership and grow your business with recurring revenue opportunities.',
      ],
      ctas: [{ label: 'Become a Partner', href: 'mailto:partners@nncdigital.co.in' }],
      media: img('/img/scene-deal.jpg', 'Partners'),
    },
    blocks: [
      // Section: Ways to Partner — three partnership types from the brief.
      // Each card now carries the brief's two-paragraph body via the
      // FeatureGridInner array support — no layout change.
      { type: 'featureGrid', flat: true, title: 'Explore Ways to Partner with NNC Digital', lead: [
        'Choose a partnership model that fits your expertise through the NNC Digital Partner Program.',
        'Our CRM Partner Program offers CRM Reseller Program, Business Referral Program and CRM Integration Partners opportunities for businesses and technology professionals.',
      ], items: [
        {
          icon: 'partners',
          title: 'Referral Partner',
          body: [
            'Turn business connections into opportunities.',
            'Become a CRM Referral Partner through our CRM Referral Partner Program. Refer businesses looking for CRM solutions and earn recurring commissions while NNC Digital manages the product.',
          ],
          href: 'mailto:partners@nncdigital.co.in?subject=Referral%20Partner%20Application',
          linkLabel: 'Become a Referral Partner',
        },
        {
          icon: 'service',
          title: 'CRM Implementation Partner',
          body: [
            'Help businesses get started with NNC CRM.',
            'Join our CRM Implementation Partner Program to set up, customize and implement NNC CRM for businesses.',
            'Provide CRM Integration Services and implementation support based on customer requirements.',
          ],
          href: 'mailto:partners@nncdigital.co.in?subject=Implementation%20Partnership%20Enquiry',
          linkLabel: 'Explore Implementation Partnership',
        },
        {
          icon: 'api',
          title: 'Technology Partner',
          body: [
            'Build and connect with NNC CRM.',
            'Become one of our Technology Partners and explore CRM Integration Partnership Program opportunities.',
            'Build custom integrations and extend NNC CRM capabilities using our Open API.',
          ],
          href: 'mailto:partners@nncdigital.co.in?subject=Technology%20Partner%20Application',
          linkLabel: 'Become a Technology Partner',
        },
      ] },
      // Section: FAQ — five questions per the brief.
      { type: 'faq', title: 'Frequently Asked Questions About the NNC Digital Partner Program', items: [
        { q: 'What is the NNC Digital Partner Program?', a: 'The NNC Digital Partner Program is a CRM Business Partnership opportunity for professionals and companies interested in client referrals, CRM implementation and technology integrations.' },
        { q: 'How can I become an NNC Digital referral partner?', a: 'Join our CRM Referral Partner Program or Business Referral Program by referring businesses looking for CRM software. Eligible CRM Referral Partners can earn recurring commissions.' },
        { q: 'What does an NNC CRM Implementation Partner do?', a: 'A CRM Implementation Partner helps businesses configure, customize and implement NNC CRM. Our CRM Implementation Partner Program supports businesses requiring tailored CRM solutions.' },
        { q: 'Can technology companies partner with NNC Digital?', a: "Yes. Technology Partners and CRM Integration Partners can use NNC CRM's Open API to build integrations and connect business applications." },
        { q: 'How can I apply for the NNC Digital Partner Program?', a: 'Apply through the partnership form on our website to explore CRM Software Partnership Opportunities. Our team will review your interest and discuss the next steps.' },
      ] },
    ],
    // Section: Final CTA — "Ready to Grow with NNC Digital?".
    cta: {
      title: 'Ready to Grow with NNC Digital?',
      sub: [
        'Explore CRM Software Partnership Opportunities through the NNC Digital Partner Program.',
        "Whether you're interested in becoming a CRM Channel Partner, CRM Reseller, CRM Referral Partner or Technology Partner, let's grow together.",
        'Share your business details and partnership interests with our team.',
      ],
      primary: { label: 'Become a Partner', href: 'mailto:partners@nncdigital.co.in' },
    },
  },
  customers: {
    ...cb('Customer stories', { lead: 'See how businesses grow with NNC CRM.', metaTitle: 'Customer Stories | NNC CRM Results & Reviews', metaDescription: 'See how academies, manufacturers, clinics and sales teams grow with NNC CRM. Real businesses, real results, verified reviews.' }),
    hero: { eyebrow: 'Customers', title: 'Businesses that stopped losing leads.', lead: 'The proof of a CRM is not its feature list. It is what happens to the businesses that use it. Here are the institutes, factories and teams that run on NNC CRM.', ctas: heroCtas, media: { type: 'component', name: 'crmDashboardFlat', framed: true } },
    blocks: [
      { type: 'stats', items: [
        { value: '32%', label: 'more enquiries converted on average' },
        { value: '5 hrs', label: 'saved per rep each week' },
        { value: '2x', label: 'faster follow up response' },
        { value: '1 day', label: 'to go live' },
      ] },
      { type: 'featureGrid', flat: true, title: 'What every story has in common', lead: 'Different industries, the same pattern: catch every lead, follow up fast, and decide with real numbers.', items: [
        { icon: 'enquiries', title: 'The challenge', body: 'Leads scattered across WhatsApp, calls and spreadsheets, with no follow up and no clear numbers.' },
        { icon: 'integrations', title: 'The solution', body: 'One CRM with the right modules turned on for their business, live in about a day.' },
        { icon: 'forecast', title: 'The result', body: 'More leads converted, faster collections, and decisions backed by real numbers.' },
      ] },
      { type: 'testimonials', title: 'In their words', lead: 'Sample quotes shown here. Replace with your real customer quotes and verified Google reviews before launch.', items: [
        { quote: 'We stopped losing enquiries overnight. Every lead now gets a follow up, and our conversions are up within the first month.', name: 'Rohit Mehta', role: 'Director', company: 'Steelline Industries', result: '1.4× conversions', initials: 'RM' },
        { quote: 'WhatsApp campaigns from NNC bring our customers back every month. Repeat sales have doubled since we switched.', name: 'Sneha Patil', role: 'Owner', company: 'Trenz Retail', result: '2× repeat sales', initials: 'SP' },
        { quote: 'Our agents respond before the lead goes cold. We are closing far more site visits than we ever did before.', name: 'Arjun Reddy', role: 'Sales Head', company: 'Skyline Realty', result: '+30% site visits', initials: 'AR' },
      ] },
      { type: 'cards', title: 'Customer stories by industry', lead: 'Read how teams in your sector grow with NNC CRM.', items: [
        { icon: 'manufacturing', title: 'A manufacturer cut dues by half', body: 'How a mid size unit brought order to cash under control with NNC.', href: '#' },
        { icon: 'retail', title: 'A retailer doubled repeat sales', body: 'Using WhatsApp campaigns to bring customers back every month.', href: '#' },
        { icon: 'realestate', title: 'A builder closed 30% more', body: 'Faster follow up turned cold property leads into bookings.', href: '#' },
        { icon: 'education', title: 'An academy filled more seats', body: 'A coaching institute converted more admission enquiries every season.', href: '#' },
        { icon: 'service', title: 'A service firm protected renewals', body: 'Automatic reminders brought back AMC and repeat work on time.', href: '#' },
        { icon: 'sales', title: 'A sales team beat its target', body: 'A daily call list and live pipeline lifted close rates across the team.', href: '#' },
      ] },
    ],
    cta: startCta,
  },
  contact: {
    ...cb('Contact sales', { lead: 'Talk to our team about NNC CRM.', metaTitle: 'Contact Sales | NNC CRM', metaDescription: 'Talk to the NNC team about the right plan for your business. Call 94227 99466, email hello@nncdigital.co.in, or book a quick demo.' }),
    hero: { eyebrow: 'Contact', title: 'Let us find the right plan for you.', lead: 'Tell us how your business works and we will show you exactly which modules you need and what it will cost. No pressure, no jargon.', ctas: [{ label: 'Book a Demo', href: '#start', trial: true }], media: img('/img/scene-support.jpg', 'Contact') },
    blocks: [
      { type: 'cards', title: 'Ways to reach us', items: [
        { icon: 'phone', title: 'Call us', body: '94227 99466, Monday to Saturday, 10am to 7pm.' },
        { icon: 'mail', title: 'Email us', body: 'hello@nncdigital.co.in, we reply within one business day.' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Message us on WhatsApp for a quick response.' },
      ] },
      { type: 'stats', title: 'Our offices', items: [
        { value: 'Bengaluru', label: 'Head office' },
        { value: 'Mumbai', label: 'Thane West' },
        { value: 'Mysuru', label: 'Regional office' },
        { value: 'Hyderabad', label: 'Regional office' },
      ] },
    ],
    cta: startCta,
  },
  press: {
    ...cb('Press', { lead: 'News and media resources for NNC CRM.', metaTitle: 'Press & Media | NNC CRM', metaDescription: 'News, announcements and media resources from NNC. For press enquiries, reach our team or download our brand assets.' }),
    hero: { eyebrow: 'Press', title: 'News and media resources.', lead: 'The latest from NNC, plus everything the press needs in one place.', ctas: [{ label: 'Email press', href: 'mailto:press@nncdigital.co.in', variant: 'ghost' }], media: img('/img/scene-office.jpg', 'Press') },
    blocks: [
      { type: 'cards', title: 'Media resources', items: [
        { icon: 'press', title: 'Press kit', body: 'Logos, brand assets and product screenshots.', href: '#' },
        { icon: 'book', title: 'Company facts', body: 'Key facts and milestones about NNC CRM.', href: '#' },
        { icon: 'mail', title: 'Media contact', body: 'Reach our communications team directly.', href: 'mailto:press@nncdigital.co.in' },
      ] },
    ],
    cta: startCta,
  },
}

/* ============================ SUPPORT ============================ */
const supportCrumb = { label: 'Support', href: '/support/help-center' }
const sb = (label, o) => ({ metaTitle: o.metaTitle || `${label} | NNC CRM`, metaDescription: o.metaDescription || o.lead, breadcrumb: [HOME, supportCrumb, { label }] })

export const SUPPORT = {
  'help-center': {
    ...sb('Help center', { lead: 'Guides and answers for NNC CRM.', metaTitle: 'Help Center | NNC CRM Support', metaDescription: 'Guides, answers and how tos for NNC CRM. Search articles on setup, billing, WhatsApp, imports and more.' }),
    hero: { eyebrow: 'Support', title: 'How can we help?', lead: 'Browse guides, answers and tips to get the most out of NNC CRM.', ctas: [{ label: 'Contact support', href: '/support/contact', variant: 'ghost' }] },
    blocks: [
      { type: 'cards', title: 'Browse by topic', items: [
        { icon: 'rocket', title: 'Getting started', body: 'Set up your account, team and pipeline.', href: '/support/getting-started' },
        { icon: 'enquiries', title: 'Enquiries and leads', body: 'Capture, assign and follow up on enquiries.', href: '#' },
        { icon: 'invoice', title: 'Billing and payments', body: 'Invoices, GST and tracking payments.', href: '#' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Connect WhatsApp and run campaigns.', href: '/features/whatsapp' },
        { icon: 'api', title: 'Developers', body: 'Use the NNC API and webhooks.', href: '/support/api' },
        { icon: 'security', title: 'Security and privacy', body: 'Keep your account and data safe.', href: '/support/security' },
      ] },
    ],
    cta: { title: 'Still need a hand?', sub: 'Our team is here Monday to Saturday.', primary: { label: 'Contact support', href: '/support/contact' } },
  },
  'getting-started': {
    ...sb('Getting started', { lead: 'Set up NNC CRM in minutes.', metaTitle: 'Getting Started | NNC CRM', metaDescription: 'Set up NNC CRM in minutes. Create your account, pick your plan, import data and go live, step by step.' }),
    hero: { eyebrow: 'Support', title: 'Get set up in four steps.', lead: 'Four quick steps to set up NNC and start capturing every enquiry today.', ctas: [{ label: 'Book a Demo', href: '#start', trial: true }] },
    blocks: [
      { type: 'steps', title: 'Your first day with NNC', items: [
        { title: 'Create your account', body: 'Sign up in seconds, no credit card needed.' },
        { title: 'Invite your team', body: 'Add your people and set their roles.' },
        { title: 'Set up your pipeline', body: 'Choose stages that match how you sell.' },
        { title: 'Capture enquiries', body: 'Connect WhatsApp and your website forms.' },
      ] },
    ],
    cta: startCta,
  },
  api: {
    ...sb('API documentation', { lead: 'Build on the NNC CRM API.', metaTitle: 'API Documentation | NNC CRM Developers', metaDescription: 'Build on NNC CRM. REST API and webhooks to connect leads, deals, invoices and more to your own systems.' }),
    hero: { eyebrow: 'Developers', title: 'The NNC CRM API.', lead: 'A clean REST API and webhooks to connect NNC with your own systems.', ctas: [{ label: 'Contact developer support', href: '/support/contact', variant: 'ghost' }] },
    blocks: [
      { type: 'featureGrid', flat: true, title: 'What you can build', items: [
        { icon: 'api', title: 'REST API', body: 'Read and write leads, deals, contacts and invoices.' },
        { icon: 'integrations', title: 'Webhooks', body: 'Get notified the moment data changes in NNC.' },
        { icon: 'lock', title: 'Secure tokens', body: 'Scoped API keys you can rotate any time.' },
      ] },
      { type: 'prose', sections: [
        { h: 'Getting an API key', p: ['Generate a scoped API key from Settings, then send it as a Bearer token on every request. Keys can be limited to specific data and rotated at any time.'] },
        { h: 'Base URL', p: ['All endpoints are served over HTTPS at https://api.nncdigital.co.in/v1. Requests and responses use JSON.'] },
      ] },
    ],
    cta: { title: 'Building something?', sub: 'Our developer team is happy to help.', primary: { label: 'Contact developer support', href: '/support/contact' } },
  },
  status: {
    ...sb('System status', { lead: 'Live status of NNC CRM services.', metaTitle: 'System Status | NNC CRM', metaDescription: 'Live status and uptime for NNC CRM services. Check current status and past incidents.' }),
    hero: { eyebrow: 'Support', title: 'Current system status.', lead: 'All NNC CRM systems are operational. Subscribe to get notified of any incidents.', ctas: [] },
    blocks: [
      { type: 'cards', title: 'Current status', items: [
        { icon: 'status', title: 'Web app', body: 'Operational, 99.98% uptime in the last 90 days.' },
        { icon: 'api', title: 'API', body: 'Operational, 99.97% uptime in the last 90 days.' },
        { icon: 'whatsapp', title: 'WhatsApp delivery', body: 'Operational, messages delivering normally.' },
      ] },
    ],
    cta: { title: 'Need help with an issue?', sub: 'Reach our support team any time.', primary: { label: 'Contact support', href: '/support/contact' } },
  },
  security: {
    ...sb('Security', { lead: 'How NNC keeps your data safe.', metaTitle: 'Security | NNC CRM', metaDescription: 'How NNC CRM protects your data: encryption, access controls, backups and infrastructure hosted in India.' }),
    hero: { eyebrow: 'Trust', title: 'Your data, protected.', lead: 'Your business data is protected with encryption, strict access controls and regular backups.', ctas: [{ label: 'Read our privacy policy', href: '/legal/privacy', variant: 'ghost' }], media: img('/img/scene-dashboard.jpg', 'Security') },
    blocks: [
      { type: 'featureGrid', flat: true, title: 'How we protect your data', items: [
        { icon: 'lock', title: 'Encrypted', body: 'Data is encrypted in transit and at rest.' },
        { icon: 'users', title: 'Role based access', body: 'People see only what they are allowed to.' },
        { icon: 'security', title: 'Backups', body: 'Automatic hourly backups keep your data safe.' },
      ] },
    ],
    cta: startCta,
  },
  'data-privacy': {
    ...sb('Data privacy', { lead: 'How NNC handles your data.', metaTitle: 'Data Privacy | NNC CRM', metaDescription: 'How NNC CRM collects, uses and protects your data, aligned with the DPDP Act 2023. Your data stays yours.' }),
    hero: { eyebrow: 'Trust', title: 'Privacy you can trust.', lead: 'We collect only what we need to run the service, and we never sell your data. Our approach is aligned with the DPDP Act 2023.', ctas: [{ label: 'Read privacy policy', href: '/legal/privacy', variant: 'ghost' }] },
    blocks: [
      { type: 'prose', sections: [
        { h: 'Our promise', p: ['You own your data. We process it only to provide NNC CRM to you, and you can export or delete it at any time.'] },
        { h: 'What we collect', p: ['We collect account details, the business data you enter, and usage information that helps us improve the product. We do not sell personal data to anyone.'] },
        { h: 'Your controls', p: ['You can access, export and delete your data from your account settings, or by writing to hello@nncdigital.co.in.'] },
      ] },
    ],
    cta: startCta,
  },
  contact: {
    ...sb('Contact support', { lead: 'Get help from the NNC team.', metaTitle: 'Contact Support | NNC CRM', metaDescription: 'Need help? Reach the NNC support team by email, WhatsApp or phone. We respond fast.' }),
    hero: { eyebrow: 'Support', title: 'We are here to help.', lead: 'Our team is here to help you get the most out of NNC CRM.', ctas: [] },
    blocks: [
      { type: 'cards', title: 'Reach us', items: [
        { icon: 'phone', title: 'Call', body: '94227 99466, Monday to Saturday, 10am to 7pm.' },
        { icon: 'mail', title: 'Email', body: 'hello@nncdigital.co.in, replies within one business day.' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Message us for a quick response during business hours.' },
      ] },
    ],
    cta: startCta,
  },
}

/* ============================ LEGAL ============================ */
const legalCrumb = { label: 'Legal' }
const legal = (label, intro, sections, opts = {}) => ({
  metaTitle: opts.metaTitle || `${label} | NNC CRM`,
  metaDescription: opts.metaDescription || intro,
  breadcrumb: [HOME, legalCrumb, { label }],
  hero: { eyebrow: 'Legal', title: opts.h1 || label, lead: intro },
  // `lastUpdated` is surfaced by the dedicated LegalPage layout under the
  // hero title. Falls back to the shared default so every legal page carries
  // a review date even when the entry does not override it.
  lastUpdated: opts.lastUpdated || '31 October 2026',
  blocks: [{ type: 'prose', sections }],
  cta: null,
})

export const LEGAL = {
  terms: legal('Terms of Service', 'The terms that govern your use of NNC CRM. Please read them carefully.', [
    { h: '1. Agreement', p: ['By using NNC CRM you agree to these terms. If you are using the service on behalf of a business, you agree on its behalf.'] },
    { h: '2. Using the service', p: ['You may use NNC CRM only in line with these terms and applicable law. You are responsible for the activity in your account and for keeping your login secure.'] },
    { h: '3. Plans and billing', p: ['Paid plans are billed in advance for the period you choose. Prices are shown exclusive of GST. You can cancel at any time and your plan will run until the end of the paid period.'] },
    { h: '4. Your data', p: ['You own the data you put into NNC CRM. We process it to provide the service, as described in our Privacy Policy.'] },
    { h: '5. Changes', p: ['We may update these terms from time to time. We will let you know about material changes before they take effect.'] },
  ]),
  privacy: legal('Privacy Policy', 'How NNC CRM collects, uses and protects your information.', [
    { h: 'Information we collect', p: ['We collect account information you provide, the business data you enter into the product, and usage data that helps us improve NNC CRM.'] },
    { h: 'How we use it', p: ['We use your information to provide and improve the service, to support you, and to keep the product secure. We do not sell your personal data.'] },
    { h: 'Data retention', p: ['We keep your data for as long as your account is active. You can export or delete it at any time from settings.'] },
    { h: 'Contact', p: ['For any privacy question, write to hello@nncdigital.co.in.'] },
  ]),
  'trust-center': legal('Trust Center', 'Security, privacy and reliability at NNC CRM, in one place.', [
    { h: 'Security', p: ['Your data is encrypted in transit and at rest, with role based access and automatic hourly backups.'] },
    { h: 'Privacy', p: ['We collect only what we need and never sell your data. You stay in control of your information at all times.'] },
    { h: 'Reliability', p: ['We target 99.9% uptime and publish live status for all our services.'] },
  ], { h1: 'Security, privacy and compliance in one place.' }),
  'acceptable-use': legal('Acceptable Use Policy', 'The rules for using NNC CRM responsibly.', [
    { h: 'Responsible use', p: ['You agree not to use NNC CRM to send spam, store unlawful content, or harm the service or other users.'] },
    { h: 'Messaging', p: ['When using WhatsApp and email features, you must follow the relevant platform policies and obtain consent where required.'] },
    { h: 'Enforcement', p: ['We may suspend accounts that breach this policy to protect our customers and the service.'] },
  ]),
  compliance: {
    metaTitle: 'Legal & Compliance | NNC CRM',
    metaDescription: 'How NNC CRM meets its legal and regulatory obligations, including the DPDP Act 2023, GST, security and lawful data requests. Reach our compliance team.',
    breadcrumb: [HOME, legalCrumb, { label: 'Legal and Compliance' }],
    lastUpdated: '31 October 2026',
    hero: {
      eyebrow: 'Legal',
      title: 'Legal and Compliance',
      lead: 'How NNC CRM, operated by Nakshatra Namaha Creations, meets its legal and regulatory obligations, and how to reach our compliance team.',
    },
    blocks: [
      { type: 'prose', sections: [
        { h: 'Overview', p: ['NNC CRM is built and operated by Nakshatra Namaha Creations. This page summarises how we meet our legal and regulatory obligations and how to reach our compliance team. It is provided for your information and is not legal advice.'] },
        { h: 'Compliance with Indian law', p: ['We operate in line with applicable Indian law, including the Information Technology Act 2000 and its rules, the Digital Personal Data Protection Act 2023, and applicable tax law. We review our practices regularly and update them as the law evolves.'] },
        { h: 'Data protection', p: ['We process the personal data in your account only to provide and improve NNC CRM, in line with our Privacy Policy and the Digital Personal Data Protection Act 2023. We collect only what we need, we never sell your data, and you can export or delete it at any time.'] },
        { h: 'Where your data is stored', p: ['Customer data is hosted on secure infrastructure, encrypted in transit and at rest. Access is controlled by role, logged for audit, and backed up regularly.'] },
        { h: 'GST and record keeping', p: ['NNC CRM helps you raise GST ready invoices and keep clean records. You remain responsible for your own tax registration, filings and returns. We provide the tools and documents to make that easier.'] },
        { h: 'Messaging and consent', p: ['When you use the WhatsApp, SMS and email features, you must obtain the consent required by law and follow the relevant platform and regulatory policies, including TRAI and DLT rules and the WhatsApp Business policy. Our Acceptable Use Policy explains what is and is not allowed.'] },
        { h: 'Sub processors', p: ['We use a small number of trusted third party providers for hosting, payments and messaging to deliver the service. Each is bound by appropriate confidentiality and data protection terms.'] },
        { h: 'Lawful requests', p: ['We respond to valid and lawful requests from authorities in accordance with applicable law. Where we are legally permitted to do so, we will notify the affected customer before disclosing their data.'] },
        { h: 'Intellectual property', p: ['NNC CRM, including its software, brand and content, is owned by Nakshatra Namaha Creations. The business data you enter remains yours at all times.'] },
        { h: 'Grievance officer', p: ['In line with Indian IT rules, you can reach our Grievance Officer for any complaint about content, data or compliance. Write to legal@nncdigital.co.in with the subject Grievance. We will acknowledge your complaint within 24 hours and resolve it within the timelines set by law.'] },
        { h: 'Changes to this page', p: ['We may update our legal and compliance practices from time to time. Material changes will be posted here with a new review date.'] },
        { h: 'Contact', p: ['For any legal, compliance or data request, contact our team at legal@nncdigital.co.in.'] },
      ] },
      { type: 'cards', title: 'Related policies and resources', items: [
        { icon: 'lock', title: 'Privacy Policy', body: 'How we collect, use and protect your information.', href: '/legal/privacy' },
        { icon: 'security', title: 'Security', body: 'Encryption, access controls and backups.', href: '/support/security' },
        { icon: 'users', title: 'Data privacy', body: 'Your data, your control, aligned with the DPDP Act 2023.', href: '/support/data-privacy' },
        { icon: 'integrations', title: 'Trust Center', body: 'Security, privacy and reliability in one place.', href: '/legal/trust-center' },
      ] },
    ],
    cta: {
      title: 'Questions about legal or compliance?',
      sub: 'Reach our legal and compliance team and we will help.',
      primary: { label: 'Email legal', href: 'mailto:legal@nncdigital.co.in' },
      secondary: { label: 'Visit the Trust Center', href: '/legal/trust-center' },
    },
  },
  cookies: legal('Cookie Settings', 'How NNC CRM uses cookies and how to control them.', [
    { h: 'What cookies we use', p: ['We use essential cookies to run the product and a small number of analytics cookies to understand usage and improve the experience.'] },
    { h: 'Managing cookies', p: ['You can control cookies through your browser settings. Disabling essential cookies may affect how the product works.'] },
  ], { h1: 'Cookie preferences.' }),
}

/* ============================ OVERVIEWS ============================ */
export const FEATURES_OVERVIEW = {
  metaTitle: 'Features | NNC CRM Software for Sales, Billing & WhatsApp',
  metaDescription: 'Explore NNC CRM: enquiries, sales pipeline, forecasting, invoicing, WhatsApp engagement, reports and integrations. One modular platform, one subscription.',
  breadcrumb: [HOME, { label: 'Features' }],
  hero: {
    eyebrow: 'Product', title: 'One CRM for the whole customer journey',
    lead: 'Every NNC CRM module works on its own and gets stronger together. Turn on only what you need today, add the rest when you grow. Nothing to reinstall, nothing to migrate.',
    ctas: heroCtas, media: { type: 'video', src: '/showcase.mp4', poster: '/showcase.jpg' },
  },
  blocks: [
    { type: 'stats', items: [
      { value: '7 modules', label: 'one platform, one subscription' },
      { value: '30 days', label: 'free trial, no credit card' },
      { value: '1 day', label: 'to go live' },
    ] },
    { type: 'featureGrid', flat: true, title: 'Explore the product', lead: 'Every module works on its own and gets stronger together. Open one to see what it does.', items: [
      { icon: 'enquiries', title: 'Enquiries', body: 'Catch every lead from every channel in one inbox.', href: '/features/enquiries' },
      { icon: 'pipeline', title: 'Sales pipeline', body: 'See every deal by stage, value and owner.', href: '/features/sales-pipeline' },
      { icon: 'forecast', title: 'Forecasting', body: 'Project revenue 3, 6 and 12 months ahead.', href: '/features/forecasting' },
      { icon: 'invoice', title: 'Invoicing and payments', body: 'Raise GST ready invoices and get paid faster.', href: '/features/invoicing' },
      { icon: 'whatsapp', title: 'WhatsApp engagement', body: 'A real WhatsApp inbox built into your CRM.', href: '/features/whatsapp' },
      { icon: 'reports', title: 'Reports and analytics', body: 'Live dashboards that turn data into decisions.', href: '/features/reports' },
      { icon: 'integrations', title: 'Integrations', body: 'Wire in your website, ads, payments and tools.', href: '/features/integrations' },
    ] },
    { type: 'split', kicker: 'Enquiries', title: 'Every enquiry caught. None forgotten.', body: 'Calls, web forms, WhatsApp, ad leads and walk ins all land in one inbox, assigned to the right person and reminded automatically.', bullets: ['Capture from every channel', 'Auto assign to the right person', 'Reminders until it closes'], media: img('/img/feat-enquiries.jpg', 'NNC CRM enquiry inbox') },
    { type: 'split', flip: true, kicker: 'Forecasting', title: 'Know what next quarter looks like, today.', body: 'NNC reads your live pipeline and projects revenue 3, 6 and 12 months out, so you plan hiring, cash and targets with numbers, not hope.', bullets: ['Forecasts built from real deals', 'Three horizons in one view', 'Forecast against your target'], media: img('/img/feat-forecast.jpg', 'NNC CRM forecast chart') },
    { type: 'split', kicker: 'WhatsApp', title: 'India runs on WhatsApp. So does NNC.', body: 'A real WhatsApp inbox built in, where your whole team can read, reply, broadcast and automate, with every message tied to the right deal.', bullets: ['One shared team inbox', 'Qualify leads 24/7', 'Broadcast the compliant way'], media: img('/img/feat-whatsapp.jpg', 'NNC CRM WhatsApp inbox') },
    { type: 'faq', title: 'Questions about the product', items: [
      { q: 'Can I turn modules on and off?', a: 'Yes. NNC CRM is modular. Turn on only what you need today and add the rest when you grow, with nothing to reinstall and nothing to migrate.' },
      { q: 'Do the modules work together?', a: 'Yes. Every module shares the same contacts, deals and history, so an enquiry can flow to a deal, an invoice and a forecast without any re entry.' },
      { q: 'Can I start with one and add more later?', a: 'Absolutely. Start with the core and add forecasting, invoicing or integrations whenever you are ready. Your data stays exactly where it is.' },
    ] },
  ],
  cta: startCta,
}

export const INDUSTRIES_OVERVIEW = {
  metaTitle: 'Industry Specific CRM Software in India | NNC Digital',
  metaDescription: 'Explore Industry Specific CRM Software for sales, retail, healthcare, manufacturing, real estate and more. Manage workflows with NNC Digital. Book a demo.',
  breadcrumb: [HOME, { label: 'Industries' }],
  hero: {
    eyebrow: 'Industries',
    title: 'Industry Specific CRM Software Built for Your Business',
    lead: [
      "Simplify operations with NNC Digital's Industry Specific CRM Software. Manage sales, customer relationships and business workflows with industry-focused features.",
      'Our CRM Software for Industries combines Business CRM Software, Industry Specific CRM Solutions and CRM Workflow Automation to streamline daily activities.',
      'Backed by 10+ years of experience, NNC Digital offers Industry Specific CRM Software in India for sales, manufacturing, healthcare, education, real estate and more.',
    ],
    ctas: heroCtas, media: { type: 'component', name: 'industrySwitcher', framed: true },
  },
  blocks: [
    // Section: Industry Highlights
    { type: 'stats', title: 'CRM Solutions Designed for Different Industries', items: [
      { value: '9 Industries', label: 'Ready-Built Industry CRM Solutions' },
      { value: '10+ Years', label: 'Building Business CRM Software' },
      { value: '1 Day', label: 'Typical CRM Implementation Time' },
    ] },
    // Section: Choose Your Industry (9-card grid).
    { type: 'featureGrid', flat: true, title: 'Choose Industry Specific CRM Software for Your Business', lead: [
      "Explore NNC Digital's Industry Specific CRM Software, designed with customized workflows, business fields and reporting tools.",
      'Our CRM Software for Different Industries simplifies customer management, sales tracking and daily operations.',
    ], items: [
      { icon: 'sales', title: 'CRM for Sales Teams', body: 'Manage leads, deals and targets with CRM for Sales Teams and Sales CRM Software. Track opportunities, pipelines and follow-ups using Sales Pipeline Management Software.', href: '/industries/sales-teams' },
      { icon: 'service', title: 'CRM for Service Businesses', body: 'Manage clients, service jobs, invoicing and renewals with Service Business CRM and Service Management Software. Simplify follow-ups and payment tracking.', href: '/industries/service-businesses' },
      { icon: 'manufacturing', title: 'CRM for Manufacturing', body: 'Track enquiries, quotations, orders and dispatches with Manufacturing CRM Software and Manufacturing Order Management Software. Organize production-related sales and payments.', href: '/industries/manufacturing' },
      { icon: 'retail', title: 'CRM for Retail and Distribution', body: 'Manage dealers, customer orders and collections with Retail and Distribution CRM and Retail CRM Software. Simplify sales and distribution management.', href: '/industries/retail' },
      { icon: 'healthcare', title: 'CRM for Healthcare and Clinics', body: 'Manage patient enquiries, appointments and follow-ups with Healthcare CRM Software and Patient Management CRM. Organize clinic communication and patient information.', href: '/industries/healthcare' },
      { icon: 'education', title: 'CRM for Education', body: 'Manage admission enquiries, parent communication and fee tracking with Education CRM Software and Student Admission Management Software.', href: '/industries/education' },
      { icon: 'realestate', title: 'CRM for Real Estate', body: 'Track property leads, site visits and bookings with Real Estate CRM Software and Property Lead Management Software. Streamline real estate sales activities.', href: '/industries/real-estate' },
      { icon: 'travel', title: 'CRM for Travel and Tourism', body: 'Manage travel enquiries, quotations, bookings and vouchers with Travel CRM Software and Travel Agency Management Software.', href: '/travel-crm/' },
      { icon: 'users', title: 'CRM for Training Institutes and Coaching Centers', body: 'Manage student enquiries, admissions and branches with Training Institute CRM and Coaching Center Management Software. Track student journeys and follow-ups.', href: '/multi-center-training-institutes-crm/' },
    ] },
    // Section: Industry Specific CRM — why it beats a generic CRM.
    { type: 'split', kicker: 'Industry Specific CRM', title: 'Why Industry Specific CRM Software Is Better Than Generic CRM', body: [
      'Generic CRM tools often require extensive customization.',
      "NNC Digital's Industry Specific CRM Software provides predefined workflows, business fields and reporting features.",
      'Our Customizable CRM Software for Industries simplifies implementation and everyday Business Process Management.',
    ], bullets: [
      'Ready-to-use sales pipeline stages with Sales Pipeline Management Software',
      'Business-specific fields and forms with Industry Specific Customer Management Software',
      'Industry-focused reports with Industry CRM Analytics and reporting dashboards',
      'Faster CRM implementation with CRM Implementation Software and CRM Workflow Automation',
    ], media: img('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80', 'A team configuring their industry-specific CRM together') },
    // Section: Built for the way your industry works (3 image cards).
    { type: 'featureGrid', title: 'Industry Specific CRM Software Built Around Your Workflow', lead: [
      "NNC Digital's Industry Specific CRM Software combines Business CRM Software, CRM Workflow Automation and customer management tools.",
      'Our Industry Based CRM Software for Small Businesses helps teams organize sales, communication and reporting.',
    ], items: [
      { icon: 'pipeline', title: 'Ready-Built CRM Workflows', body: 'Manage industry-specific sales stages, business fields and automated tasks with CRM Software with Industry Specific Workflows.', image: '/Industries/card1-sm.webp', imageAlt: 'Industry-specific CRM workflow with pre-configured pipeline stages and automations' },
      { icon: 'reports', title: 'Reports That Match Your Business', body: 'Track performance through Industry CRM Analytics, customizable dashboards and Business CRM Reporting Software.', image: '/Industries/card2-sm.webp', imageAlt: 'Pre-built industry reports dashboard showing the metrics your sector tracks' },
      { icon: 'whatsapp', title: 'WhatsApp Follow-Up Management', body: 'Connect with customers, patients, parents and buyers using WhatsApp Integrated CRM and Customer Follow-Up Management Software.', image: '/Industries/card3-sm.webp', imageAlt: 'WhatsApp conversation with a customer, patient or parent for industry-specific follow-up' },
    ] },
    // Section: FAQ — 5 questions per brief.
    { type: 'faq', title: 'Industry Specific CRM Software – Frequently Asked Questions', items: [
      { q: 'What is Industry Specific CRM Software?', a: "Industry Specific CRM Software provides workflows, fields and reporting tools designed for different sectors. NNC Digital's Industry Specific CRM Solutions simplify customer management, sales and daily operations." },
      { q: 'Does NNC Digital offer CRM software for manufacturing businesses?', a: 'Yes. Our Manufacturing CRM Software helps manage customer enquiries, quotations, orders, dispatches and payments using centralized Manufacturing Order Management Software.' },
      { q: 'Is NNC CRM suitable for healthcare businesses and clinics?', a: "Yes. NNC Digital's Healthcare CRM Software and Patient Management CRM help clinics organize patient enquiries, appointments, reminders and follow-ups." },
      { q: 'Which industries does NNC Digital CRM support?', a: 'Our CRM Software for Industries supports nine sectors: sales, services, manufacturing, retail, healthcare, education, real estate, travel and training institutes. Each offers relevant Business CRM Software features.' },
      { q: 'What are the benefits of using Industry Specific CRM Software?', a: 'Industry Specific CRM Software provides ready-built workflows, relevant fields, reporting dashboards and CRM Workflow Automation. These features help businesses reduce setup work and improve operational efficiency.' },
    ] },
  ],
  // Section: Final CTA — "Grow Your Business…" per brief.
  cta: {
    title: 'Grow Your Business with Industry Specific CRM Software',
    sub: [
      "Simplify sales, customer relationships and daily operations with NNC Digital's Industry Specific CRM Software.",
      'Our Industry Specific CRM Solutions combine Business CRM Software, Industry CRM Analytics and WhatsApp Integrated CRM to support different business requirements.',
      'Book a 30-minute demo or start your free trial today.',
    ],
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Start Free Trial', href: '#start' },
  },
}

/* ============================ CASE STUDIES ============================ */
// Representative scenario-style stories by vertical. No individual customer
// names or quotes until a real one is captured — numbers in [brackets] are
// illustrative, following the project convention. Each detail page links back
// to the matching product. Pages are noindex until swapped for real stories;
// add '/case-studies' to INDEXABLE_PREFIXES in lib/site.js when ready.
const caseStudiesCrumb = { label: 'Case Studies', href: '/case-studies' }
const cs = (slug, o) => ({
  metaTitle: o.metaTitle || `${o.name} — Case Study | NNC CRM`,
  metaDescription: o.metaDescription || o.lead,
  breadcrumb: [HOME, caseStudiesCrumb, { label: o.name }],
  hero: {
    eyebrow: 'Case study',
    title: o.title,
    lead: o.lead,
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: o.productCta || 'Explore the product', href: o.productHref, variant: 'ghost' },
    ],
    // `heroComponent: 'name'` on the per-case object → render that
    // registered HERO_COMPONENT in the hero media slot (framed with the
    // scenic+glass treatment). Used when a case study should show the
    // same animated dashboard mockup as its sibling product page.
    //
    // Otherwise: `heroFit: 'contain'` on the per-case object → hero shows
    // the full image (used for UI screenshots that would otherwise crop
    // under object-fit cover). `framed: true` is applied ONLY when
    // heroFit is 'contain' because the scenic+glass panel looks great
    // wrapping a dashboard screenshot but awkward wrapping stock photos.
    // Set `heroPlain: true` to opt out of the framed treatment while
    // keeping contain-fit — the image renders as a plain card.
    media: o.heroComponent
      ? { type: 'component', name: o.heroComponent, framed: true }
      : {
          ...img(o.img, o.name),
          ...(o.heroFit ? { fit: o.heroFit } : {}),
          ...(o.heroFit === 'contain' && !o.heroPlain ? { framed: true } : {}),
          ...(o.heroSquare ? { square: true } : {}),
        },
  },
  blocks: [
    { type: 'split', kicker: 'The challenge', title: o.challengeTitle, body: o.challengeBody, bullets: o.challengeBullets, media: img(o.img2 || o.img, o.name), ...(o.squareSplitMedia ? { squareMedia: true } : {}) },
    { type: 'split', flip: true, kicker: 'The solution', title: o.solutionTitle, body: o.solutionBody, bullets: o.solutionBullets, media: img(o.img3 || o.img, o.name), ...(o.squareSplitMedia ? { squareMedia: true } : {}) },
    { type: 'stats', title: 'Illustrative outcomes', items: o.outcomes },
    { type: 'steps', title: 'How a typical rollout goes', items: o.steps },
    { type: 'cards', title: 'Modules this scenario leans on', lead: 'Every rollout starts small and grows. These are the parts of NNC CRM most useful to this sector on day one.', items: o.modules },
    { type: 'faq', title: 'Common questions from this sector', items: o.faq },
  ],
  cta: {
    title: o.ctaTitle || 'See it on your own data.',
    sub: o.ctaSub || 'A thirty-minute walkthrough on a workspace built around your business.',
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: o.productCta || 'Explore the product', href: o.productHref },
  },
})

export const CASE_STUDIES = {
  'travel-agency-multi-branch': cs('travel-agency-multi-branch', {
    name: 'Travel agency scaling across branches',
    metaTitle: 'Case Study: Multi-Branch Travel Agency CRM | NNC Travel CRM',
    metaDescription: 'How travel agencies run quotations, bookings, vouchers and accounting across multiple branches on NNC Travel CRM. Representative scenario.',
    title: 'How a travel agency runs multi-branch operations on NNC Travel CRM.',
    lead: 'A representative scenario of how growing travel agencies move from spreadsheets and WhatsApp threads to one branded workspace for every branch, every quote and every payment.',
    productHref: '/travel-crm/',
    productCta: 'Explore Travel CRM',
    img: '/travel-crm/images/dashboard.webp',
    heroFit: 'contain',
    // Challenge image — one agent at a laptop with floating analytics
    // widgets around them. Reads as "trying to juggle every branch from
    // one screen" — the fragmented-before-CRM state the challenge
    // section describes. Local webp converted from the branded PNG set.
    img2: '/case-studies-images/travel-challenge.webp',
    // Solution image — team around a boardroom dashboard, one wall
    // screen, everyone aligned. Reads as the "one branded workspace for
    // every branch" the solution section describes (shared view, shared
    // pipeline, shared numbers).
    img3: '/case-studies-images/travel-solution.webp',
    challengeTitle: 'Quotes in Excel, enquiries in WhatsApp, bookings in notebooks.',
    challengeBody: 'Travel agencies grow by taking on more branches, more agents and more suppliers. Without one system, a quote raised in one branch is invisible to another, repeat customers get re-asked for the same details, and the owner cannot see what any branch is actually selling this week.',
    challengeBullets: [
      'Enquiries scattered across phones and inboxes',
      'Quotes re-built every time, with no version history',
      'Payments and supplier dues tracked in parallel spreadsheets',
      'No single view of what any branch is quoting or closing',
    ],
    solutionTitle: 'One branded workspace for every branch.',
    solutionBody: 'NNC Travel CRM centralises enquiries, trip quotes, bookings, vouchers and accounting against the right branch and the right agent. Owners get a live view of every pipeline, every payment and every voucher — on their phone.',
    solutionBullets: [
      'Enquiries auto-captured from the website, WhatsApp and ad leads',
      'Quotes built from reusable itinerary blocks, versioned per revision',
      'Branch-scoped permissions so each team sees only its own work',
      'Owner dashboard rolls every branch up to one P&L view',
    ],
    outcomes: [
      { value: '~2x', label: 'faster quote turnaround' },
      { value: '+25%', label: 'enquiry-to-booking conversion' },
      { value: '1 day', label: 'to onboard a new branch' },
      { value: '~90%', label: 'enquiries routed to the right branch on first touch' },
    ],
    steps: [
      { title: 'Discovery call', body: 'A thirty-minute call to map existing branches, enquiry channels and supplier workflow.' },
      { title: 'Workspace setup', body: 'Branches, agents, trip types and quote templates configured on a dedicated workspace.' },
      { title: 'Data import', body: 'Existing customers and in-flight enquiries imported from CSVs so no lead is dropped on switchover.' },
      { title: 'Training and go-live', body: 'Agents trained in a single afternoon. The team runs live from the same evening.' },
    ],
    modules: [
      { icon: 'enquiries', title: 'Enquiries', body: 'Every enquiry captured from WhatsApp, forms and calls — assigned to the right branch and agent.' },
      { icon: 'pipeline', title: 'Trips and quotes', body: 'Reusable itinerary blocks, versioned revisions, branded PDFs ready for the customer.' },
      { icon: 'invoice', title: 'Bookings and accounting', body: 'Vouchers, supplier dues and customer payments linked to every trip.' },
      { icon: 'reports', title: 'Owner dashboard', body: 'Live view of enquiries, bookings and collections across every branch.' },
    ],
    faq: [
      { q: 'Does each branch see only its own work?', a: 'Yes. Branch-scoped permissions mean agents in one branch only see their own enquiries, quotes and customers. Owners and admins get a roll-up view across every branch.' },
      { q: 'Can we keep our existing itinerary templates?', a: 'Yes. We import your current PDF templates and rebuild them as reusable itinerary blocks on NNC Travel CRM, so your quotes keep the same look and language.' },
      { q: 'How long does onboarding a new branch take?', a: 'Typically one day. A new branch is added as a scope on the existing workspace — no second installation, no second subscription.' },
    ],
  }),

  'training-institute-multi-center': cs('training-institute-multi-center', {
    name: 'Training institute consolidating multi-center admissions',
    metaTitle: 'Case Study: Multi-Center Training Institute CRM | NNC',
    metaDescription: 'How training institutes and coaching chains unify admissions, attendance, fees and performance across every branch on one dashboard.',
    title: 'How a multi-center training institute runs admissions in one place.',
    lead: 'A representative scenario of how coaching chains and multi-branch academies pull admissions, attendance, fees and performance into one dashboard — without losing the autonomy each center needs.',
    productHref: '/multi-center-training-institutes-crm/',
    productCta: 'Explore Training CRM',
    // Reuse the same animated TrainingInstitutesDashboard shown on the
    // product page hero (/multi-center-training-institutes-crm/) — the
    // case study case + product page share the same visual language.
    heroComponent: 'trainingInstitutesDashboardFlat',
    img: '/training-reel.jpg',
    // Challenge image — desk with ADMISSIONS, ATTENDANCE, FEE RECORDS and
    // STUDENT PERFORMANCE binders stacked beside a laptop. Perfect visual
    // for "every center keeps its own paper register".
    img2: '/case-studies-images/training-challenge.webp',
    // Solution image — teacher at a laptop with a dashboard open, a
    // classroom of students in the background and another teacher at a
    // whiteboard holding a tablet. Reads as "one admissions pipeline, one
    // dashboard, mobile roll-call across every center".
    img3: '/case-studies-images/training-solution.webp',
    challengeTitle: 'Every center runs its own spreadsheet.',
    challengeBody: 'As an institute grows past three or four centers, each one builds its own admissions tracker, fee register and attendance book. The head office cannot see which center is converting enquiries, which batch is at risk of dropouts, or which parent is late on fees — until it is too late.',
    challengeBullets: [
      'Admission enquiries sit in different formats per center',
      'Attendance recorded on paper, aggregated by the next day',
      'Fee follow-ups done ad hoc with no shared visibility',
      'No way to compare center-level performance in real time',
    ],
    solutionTitle: 'One admissions pipeline for every center.',
    solutionBody: 'NNC Training Institutes CRM gives every center the same admissions, attendance and fees workflow, and gives the head office one roll-up dashboard. Parents get WhatsApp reminders. Teachers get a mobile roll-call. Directors get the numbers in one place.',
    solutionBullets: [
      'Admissions pipeline shared across every center',
      'Attendance marked on mobile, visible in real time',
      'Fee reminders go out automatically on WhatsApp',
      'Director dashboard rolls up every center on one screen',
    ],
    outcomes: [
      { value: '+25%', label: 'enquiry-to-admission conversion' },
      { value: '-70%', label: 'time to close month-end collections' },
      { value: '~90%', label: 'parent engagement on WhatsApp reminders' },
      { value: '1 day', label: 'to add a new center to the roll-up' },
    ],
    steps: [
      { title: 'Discovery call', body: 'A thirty-minute call to map centers, counsellors, batches and fee structures.' },
      { title: 'Workspace setup', body: 'Centers, batches, courses and fee schedules configured on a dedicated workspace.' },
      { title: 'Data import', body: 'Student rosters, pending enquiries and fee ledgers imported from Excel in one pass.' },
      { title: 'Training and go-live', body: 'Counsellors trained in the morning, teachers in the afternoon. The chain runs live the next day.' },
    ],
    modules: [
      { icon: 'enquiries', title: 'Admissions', body: 'Capture, qualify and follow up on every admission enquiry across every center.' },
      { icon: 'users', title: 'Student journeys', body: 'A record for every student — enrolment, attendance, fees, performance.' },
      { icon: 'whatsapp', title: 'Parent outreach', body: 'Automated WhatsApp reminders for fees, PTMs, exams and attendance alerts.' },
      { icon: 'reports', title: 'Multi-center analytics', body: 'Compare conversion, attendance and collections across every center, live.' },
    ],
    faq: [
      { q: 'Does each center retain its own control?', a: 'Yes. Each center sees its own enquiries, batches and students. Directors and admins see every center through the roll-up dashboard.' },
      { q: 'Can we handle different fee structures per course?', a: 'Yes. Fee schedules are configured per course and per cohort, with discounts and instalment plans supported.' },
      { q: 'Does it work for a single center too?', a: 'Yes. Single-center institutes use the same CRM without the multi-center roll-up — and can scale when they open their next branch.' },
    ],
  }),

  'small-business-whatsapp-first': cs('small-business-whatsapp-first', {
    name: 'Small business catching every WhatsApp lead',
    metaTitle: 'Case Study: Small Business WhatsApp Lead Capture | NNC CRM',
    metaDescription: 'How a small business catches, qualifies and converts WhatsApp leads with NNC Small Business CRM, without hiring an SDR team.',
    title: 'How a small business turns WhatsApp chat into closed deals.',
    lead: 'A representative scenario of how small teams of one to ten people use NNC Small Business CRM to catch every WhatsApp enquiry, qualify it fast and never lose a buyer to a slow reply.',
    productHref: '/small-business-crm/',
    productCta: 'Explore Small Business CRM',
    img: '/case-studies-images/whatsapp-first-hero.jpg',
    // Hero image is 1254x1254 (square). Match the hero card aspect to the
    // image via `heroSquare: true` so object-fit:cover fills perfectly
    // with no crop and no side letterbox. Scoped to this page only.
    heroSquare: true,
    img2: '/case-studies-images/whatsapp1.jpg',
    img3: '/case-studies-images/whatsapp2.jpg',
    challengeTitle: 'The owner is the sales team, the service team and the WhatsApp inbox.',
    challengeBody: 'A small team wears every hat. Enquiries land on the owner’s personal WhatsApp between site visits. By the time the reply goes out, the lead has already asked three competitors. Nothing is logged, so there is no way to know which channel is paying off.',
    challengeBullets: [
      'Enquiries on personal WhatsApp, lost when the owner is busy',
      'No shared view of which lead is at which stage',
      'Repeat buyers re-asked for details they already shared',
      'No idea which channel actually brings revenue',
    ],
    solutionTitle: 'A WhatsApp-first CRM a one-person team can actually run.',
    solutionBody: 'NNC Small Business CRM puts WhatsApp inside the deal. Every message is logged against the lead, every follow-up has a date, and the dashboard shows the four numbers that actually matter — leads today, deals closing this week, invoices overdue and WhatsApp waiting.',
    solutionBullets: [
      'A shared WhatsApp inbox linked to the deal pipeline',
      'Auto-replies cover the common asks when the owner is in the field',
      'Templates for quotes and reminders, one tap away',
      'A daily dashboard with the four numbers a small team runs on',
    ],
    outcomes: [
      { value: '< 3 min', label: 'average WhatsApp first-reply time' },
      { value: '+35%', label: 'leads followed up within 24 hours' },
      { value: '~95%', label: 'enquiries acknowledged on the same day' },
      { value: '1 day', label: 'to go live from zero' },
    ],
    steps: [
      { title: 'Thirty-minute setup call', body: 'Map the owner’s current WhatsApp number, enquiry sources and simple pipeline stages.' },
      { title: 'Workspace setup', body: 'WhatsApp Business API connected, pipeline stages built, auto-replies written in the owner’s voice.' },
      { title: 'Data import', body: 'Existing contacts and in-flight enquiries imported from the phone and spreadsheets.' },
      { title: 'Go-live same afternoon', body: 'The owner runs the business from the CRM — on desktop at the office, on mobile in the field.' },
    ],
    modules: [
      { icon: 'enquiries', title: 'Enquiries', body: 'Every enquiry — WhatsApp, website, call, walk-in — in one inbox.' },
      { icon: 'whatsapp', title: 'WhatsApp inbox', body: 'A real two-way inbox with templates, auto-replies and broadcast campaigns.' },
      { icon: 'pipeline', title: 'Sales pipeline', body: 'Simple drag-and-drop stages the owner actually keeps up to date.' },
      { icon: 'reports', title: 'Daily dashboard', body: 'The four numbers that run a small business — leads, pipeline, invoices and WhatsApp waiting.' },
    ],
    faq: [
      { q: 'Does it work with my existing WhatsApp number?', a: 'Yes. We migrate your business number to WhatsApp Business API during setup, so your customers still message the same number they always have.' },
      { q: 'Do I need a sales team to use this?', a: 'No. The product is built for teams of one to ten. Most Small Business CRM customers start as a single owner-operator.' },
      { q: 'What happens when I grow past ten people?', a: 'Upgrade to the full NNC CRM in one click. Your pipeline, deals, WhatsApp history and invoicing all carry across.' },
    ],
  }),

  'manufacturing-order-to-cash': cs('manufacturing-order-to-cash', {
    name: 'Manufacturer tightening the order-to-cash cycle',
    metaTitle: 'Case Study: Manufacturing Order-to-Cash CRM | NNC CRM',
    metaDescription: 'How a manufacturer connects enquiry, quotation, order, dispatch and collections on one screen with NNC CRM. Representative scenario.',
    title: 'How a manufacturer connects enquiry, dispatch and collections on one screen.',
    lead: 'A representative scenario of how a mid-size manufacturing unit brings its order-to-cash cycle — enquiry, quotation, order, dispatch, invoice, payment — into one system, so nothing falls between sales, production and accounts.',
    productHref: '/industries/manufacturing',
    productCta: 'Explore Manufacturing CRM',
    img: '/case-studies-images/manufacturing-hero.jpg',
    heroSquare: true,
    // Challenge image — professional with Quotation / Order / Dispatch /
    // Payment icons floating around a laptop. Reads as "the sale runs
    // through many disconnected tools" the challenge section describes.
    img2: '/case-studies-images/manufacturing-challenge.webp',
    // Solution image — handshake deal with the full Enquiry → Quotation
    // → Order → Dispatch → Payment pipeline + a laptop sales dashboard.
    // Reads as "one connected pipeline" the solution section describes.
    img3: '/case-studies-images/manufacturing-solution.webp',
    // Both split images are 1:1 renders; opt into the square card variant
    // so object-fit:cover fills perfectly with no crop. Scoped to this
    // case study only — other case studies keep the default 4:3 cards.
    squareSplitMedia: true,
    challengeTitle: 'Quotes in one tool, orders in another, payments in a third.',
    challengeBody: 'A manufacturing sale runs through many hands. When the quote lives in Excel, the order in Tally and the collection in a WhatsApp group, deliveries slip, dues pile up, and nobody has a single number to run the business from.',
    challengeBullets: [
      'Quotations re-built per enquiry with no version history',
      'Orders not visible to production until paperwork lands',
      'Dispatch and e-way bills tracked separately from the deal',
      'Collections chased from a spreadsheet that is always out of date',
    ],
    solutionTitle: 'One pipeline from enquiry to payment.',
    solutionBody: 'NNC CRM links every enquiry to its quotation, every order to its dispatch and every invoice to its payment. Sales, production and accounts work from the same record, so a late dispatch is visible before it ships and a late payment is chased before it is forgotten.',
    solutionBullets: [
      'Enquiries routed to the right sales engineer automatically',
      'Quotations versioned, approved and converted to orders in one click',
      'GST-ready invoicing and e-way bills tied to each dispatch',
      'Outstanding dues chased automatically on WhatsApp and email',
    ],
    outcomes: [
      { value: '-50%', label: 'outstanding dues over 60 days' },
      { value: '+20%', label: 'quote-to-order conversion' },
      { value: '~2x', label: 'faster dispatch paperwork' },
      { value: '1 week', label: 'to go live with historical data imported' },
    ],
    steps: [
      { title: 'Discovery call', body: 'A ninety-minute workshop with sales, production and accounts to map the current order-to-cash flow.' },
      { title: 'Workspace setup', body: 'Pipeline stages, quotation templates, GST configuration and dispatch forms built for the unit.' },
      { title: 'Data import', body: 'Open quotations, pending orders and outstanding ledgers imported from Tally and Excel.' },
      { title: 'Training and go-live', body: 'Each team trained on their screens over two days; the unit runs live from the following Monday.' },
    ],
    modules: [
      { icon: 'enquiries', title: 'Enquiries', body: 'Every buyer enquiry — email, website, call, trade show — captured and assigned.' },
      { icon: 'pipeline', title: 'Order pipeline', body: 'Quote → order → dispatch → invoice → payment, visible on one screen.' },
      { icon: 'invoice', title: 'GST invoicing', body: 'Compliant invoices, e-way bills and credit notes raised against each order.' },
      { icon: 'reports', title: 'Collections report', body: 'Age-bucketed outstanding dues with automated chase workflows.' },
    ],
    faq: [
      { q: 'Does it integrate with Tally?', a: 'Yes. Invoices raised in NNC CRM can be synced to Tally so accounts does not re-enter data; the connection is set up during go-live.' },
      { q: 'Can we handle complex multi-item quotations?', a: 'Yes. Quotation templates support item catalogues, bundle pricing, discounts, taxes and freight — exported as branded PDFs.' },
      { q: 'What about e-way bills and GST returns?', a: 'E-way bills are generated on dispatch. GST returns can be prepared from the invoicing module or synced to your existing GSP.' },
    ],
  }),

  'service-business-renewals': cs('service-business-renewals', {
    name: 'Service business protecting repeat revenue',
    metaTitle: 'Case Study: Service Business Renewals CRM | NNC CRM',
    metaDescription: 'How a service business protects AMC renewals and repeat work with NNC CRM. Representative scenario.',
    title: 'How a service business turns one-time jobs into repeat revenue.',
    lead: 'A representative scenario of how service businesses — AMCs, installers, maintenance contractors — stop losing renewals to forgotten follow-ups and make the second job happen without a sales push.',
    productHref: '/industries/service-businesses',
    productCta: 'Explore Service CRM',
    img: '/case-studies-images/service-business.jpg',
    heroSquare: true,
    // Challenge image — two team members at a desk with "Renewals not
    // tracked", "Field notes on paper", "Invoices raised late" and
    // "Repeat customers go to competitors" sticky-note warnings floating
    // around them. Hits the challenge section one-for-one.
    img2: '/case-studies-images/service-challenge.webp',
    // Solution image — handshake over a customer record showing AMC
    // Renewal, WhatsApp Reminder, Service History timeline. Reads as
    // "one record per customer, one reminder before every renewal".
    img3: '/case-studies-images/service-solution.webp',
    squareSplitMedia: true,
    challengeTitle: 'The first job is easy. The second one needs a reminder nobody is sending.',
    challengeBody: 'In a service business, the money is in the second job — the renewal, the AMC, the annual contract. When the field team is busy with today’s work, nobody is tracking which customer is due for a check-in, which contract expires next month, or which repeat buyer has gone quiet.',
    challengeBullets: [
      'No clear calendar of renewals coming up',
      'Field notes stay on paper, invisible to the office',
      'Invoices raised late because jobs are closed verbally',
      'Repeat customers go to competitors because nobody followed up',
    ],
    solutionTitle: 'One record per customer. One reminder before every renewal.',
    solutionBody: 'NNC CRM turns every job into a full customer record — installations, service visits, invoices and warranties. Renewals are scheduled the day the first job closes, and reminders go out automatically before the contract runs out, protecting repeat revenue without a sales push.',
    solutionBullets: [
      'Every service visit, part and payment on one customer record',
      'Renewals and AMC expiries flagged on the dashboard',
      'Automatic WhatsApp reminders before every renewal date',
      'Field team updates jobs from mobile; office sees it instantly',
    ],
    outcomes: [
      { value: '+60%', label: 'AMC renewal rate' },
      { value: '~2x', label: 'repeat job revenue year on year' },
      { value: '-80%', label: 'invoice-to-payment delay' },
      { value: '1 day', label: 'to go live' },
    ],
    steps: [
      { title: 'Discovery call', body: 'A thirty-minute call to map job types, contract durations and the existing customer book.' },
      { title: 'Workspace setup', body: 'Service types, SLA templates, renewal rules and WhatsApp reminder messages configured.' },
      { title: 'Data import', body: 'Existing customers, contracts and job histories imported from spreadsheets.' },
      { title: 'Training and go-live', body: 'Field team trained on the mobile app; office team on the desktop view. Live the same afternoon.' },
    ],
    modules: [
      { icon: 'enquiries', title: 'Jobs and tickets', body: 'Every job tracked from enquiry to completion to invoice.' },
      { icon: 'invoice', title: 'Billing', body: 'Raise invoices the moment a job is closed; chase payments automatically.' },
      { icon: 'whatsapp', title: 'Renewal reminders', body: 'Automated WhatsApp reminders before every contract expiry.' },
      { icon: 'reports', title: 'Repeat revenue', body: 'See which customers, services and segments drive the most repeat business.' },
    ],
    faq: [
      { q: 'Can the field team use it on mobile?', a: 'Yes. Technicians update job status, add notes and attach photos from the mobile app. The office sees updates in real time.' },
      { q: 'Can we track parts and warranties?', a: 'Yes. Parts fitted, serial numbers and warranty terms are stored against each job, so a future service visit always has the history.' },
      { q: 'What about scheduled preventive maintenance?', a: 'PM visits are generated from AMC templates on a cadence you choose, and show up on the field team’s calendar automatically.' },
    ],
  }),

  'retail-distribution-collections': cs('retail-distribution-collections', {
    name: 'Retail distributor speeding up collections',
    metaTitle: 'Case Study: Retail Distribution Collections CRM | NNC CRM',
    metaDescription: 'How a retail distributor keeps dealers, orders and collections on one screen with NNC CRM. Representative scenario.',
    title: 'How a retail distributor keeps dealers, orders and collections on one screen.',
    lead: 'A representative scenario of how distributors with hundreds of dealers stop losing track of orders in transit and dues on paper, and move onto one view that their sales team and accounts team share.',
    productHref: '/industries/retail',
    productCta: 'Explore Retail CRM',
    img: '/case-studies-images/retail.jpg',
    heroSquare: true,
    // Challenge image — rep at laptop with Dealer Order / Phone Order /
    // Email Order / Dealer Dues / Multiple SKUs widgets floating around.
    // Reads as "orders scattered across phone, WhatsApp, email, SKUs
    // tracked in Excel" the challenge section describes.
    img2: '/case-studies-images/retail-challenge.webp',
    // Solution image — rep with laptop, Dealer Profile + Orders & Payments
    // + Outstanding Dues + Dealer Performance panels around her. Reads as
    // "one profile per dealer, orders and dues in the same view" the
    // solution section describes.
    img3: '/case-studies-images/retail-solution.webp',
    squareSplitMedia: true,
    challengeTitle: 'Hundreds of dealers, dozens of SKUs, one Excel sheet.',
    challengeBody: 'A distribution business runs on volume. When dealer orders come in by phone, WhatsApp and email, and dues are tracked in an Excel sheet one person owns, something slips every day. Sales reps cannot see what is overdue; accounts cannot see what is being promised.',
    challengeBullets: [
      'Dealer orders scattered across WhatsApp and phone',
      'Dues tracked in a spreadsheet one person maintains',
      'Reps make promises accounts cannot see',
      'No way to compare dealer performance across the region',
    ],
    solutionTitle: 'One profile per dealer. Orders and dues in the same view.',
    solutionBody: 'NNC CRM gives every dealer one profile — orders, invoices, dispatches, payments, dues, WhatsApp. Reps work from a mobile app in the field. Accounts chases outstanding dues automatically. Owners see region, rep and dealer performance in one dashboard.',
    solutionBullets: [
      'One profile per dealer, with full order and payment history',
      'Reps raise orders on mobile; office sees them live',
      'Age-bucketed outstanding dues with automated chases',
      'Region, rep and dealer league tables for the owner',
    ],
    outcomes: [
      { value: '-45%', label: 'outstanding dues over 60 days' },
      { value: '+30%', label: 'reorder rate from active dealers' },
      { value: '~2x', label: 'orders captured per rep per day' },
      { value: '1 week', label: 'to go live with full dealer base' },
    ],
    steps: [
      { title: 'Discovery call', body: 'A sixty-minute workshop with sales and accounts to map dealers, product catalogues and payment terms.' },
      { title: 'Workspace setup', body: 'Dealer profiles, catalogue, pricing rules and credit terms built for the business.' },
      { title: 'Data import', body: 'Dealer master, open orders and outstanding ledgers imported from existing systems.' },
      { title: 'Training and go-live', body: 'Reps trained on the mobile app in a single morning; office on the desktop view in the afternoon.' },
    ],
    modules: [
      { icon: 'retail', title: 'Dealer profiles', body: 'Full history of orders, payments, dues and conversations per dealer.' },
      { icon: 'pipeline', title: 'Orders', body: 'Reps capture orders on mobile; office processes them live.' },
      { icon: 'invoice', title: 'Collections', body: 'Age-bucketed outstanding dues with automated chase workflows.' },
      { icon: 'reports', title: 'Sales analytics', body: 'Region, rep and dealer league tables; best-sellers and slow movers.' },
    ],
    faq: [
      { q: 'Can reps use it offline in the field?', a: 'Yes. Orders captured without signal are queued on the device and sync automatically when the rep is back online.' },
      { q: 'Does it enforce credit limits per dealer?', a: 'Yes. Each dealer carries a credit limit and payment terms; orders beyond the limit route to accounts for approval before they ship.' },
      { q: 'Can we see region-by-region performance?', a: 'Yes. The owner dashboard rolls region, rep and dealer performance up to one view, with the ability to drill into any level.' },
    ],
  }),
}

export const CASE_STUDIES_OVERVIEW = {
  metaTitle: 'Case Studies | How Businesses Grow on NNC CRM',
  metaDescription: 'Representative scenarios showing how travel agencies, training institutes, manufacturers, service businesses, retailers and small teams run on NNC CRM.',
  breadcrumb: [HOME, { label: 'Case Studies' }],
  hero: {
    eyebrow: 'Case studies',
    title: 'How businesses in your sector run on NNC CRM.',
    lead: 'The proof of a CRM is not its feature list — it is what happens to the business that uses it. The pages below are representative scenarios from the industries we serve, written to show the kind of change teams see in the first ninety days. Named customer stories are added as they are published, with permission.',
    ctas: heroCtas,
    media: { type: 'component', name: 'crmDashboardFlat', framed: true },
  },
  blocks: [
    // Trust stats pulled per pre-launch audit — "2,000+ businesses" and
    // "4.8/5 rating" were flagged as unprovable claims that ASCI or a
    // competitor could challenge. Replaced with provable product facts.
    { type: 'stats', items: [
      { value: '10+ years', label: 'building industry CRMs' },
      { value: '5 verticals', label: 'with ready-built modules' },
      { value: '30 days', label: 'free trial, no card needed' },
    ] },
    { type: 'cards', highlight: true, title: 'Stories by sector', lead: 'Open any scenario to see the challenge, the solution and the kind of outcome teams in that sector see on NNC CRM.', items: [
      { icon: 'globe', title: 'Travel agency scaling across branches', body: 'From spreadsheet quotes to a branded workspace that every branch shares.', href: '/case-studies/travel-agency-multi-branch' },
      { icon: 'users', title: 'Training institute, every center in one view', body: 'Admissions, attendance and fees across every branch, on one dashboard.', href: '/case-studies/training-institute-multi-center' },
      { icon: 'whatsapp', title: 'Small business, WhatsApp-first sales', body: 'A one-person team catching every WhatsApp lead and closing more deals.', href: '/case-studies/small-business-whatsapp-first' },
      { icon: 'manufacturing', title: 'Manufacturer tightening order-to-cash', body: 'Enquiry, quote, dispatch and payment on the same screen — no handoff gaps.', href: '/case-studies/manufacturing-order-to-cash' },
      { icon: 'service', title: 'Service business protecting renewals', body: 'Turning one-time jobs into repeat revenue with reminders nobody has to send.', href: '/case-studies/service-business-renewals' },
      { icon: 'retail', title: 'Retail distributor cutting outstanding dues', body: 'Dealers, orders and collections on one profile, chased automatically.', href: '/case-studies/retail-distribution-collections' },
    ] },
    { type: 'split', kicker: 'What every story has in common', title: 'Catch every lead. Follow up fast. Decide with real numbers.', body: 'Different sectors, the same pattern. Every rollout starts with one broken workflow — a lost enquiry, a slow follow-up, a payment that fell through the cracks — and ends with the right people seeing the right numbers at the right time.', bullets: [
      'The challenge is almost always invisibility — nobody can see what is slipping',
      'The solution is a single pipeline the whole team actually keeps up to date',
      'The result is more leads converted, faster collections and clearer decisions',
    ], media: { type: 'image', src: '/case-study.png', alt: 'Teams reviewing a CRM dashboard', fit: 'contain' } },
    { type: 'featureGrid', flat: true, title: 'Why NNC CRM shows up in every story', items: [
      { icon: 'forecast', title: 'Live in a day', body: 'Workspace, data and training in one day — not a six-month implementation.' },
      { icon: 'whatsapp', title: 'WhatsApp built in', body: 'India runs on WhatsApp. We put it where the deal lives, not on a side tab.' },
      { icon: 'reports', title: 'The numbers that matter', body: 'Dashboards built around decisions, not generic metrics.' },
      { icon: 'security', title: 'Your data stays yours', body: 'Hosted in India, backed up daily, exportable at any time.' },
    ] },
    { type: 'faq', title: 'Questions about case studies', items: [
      { q: 'Are these real customer stories?', a: 'The pages above are representative scenarios — written to show the kind of challenge, solution and outcome a team in that sector sees on NNC CRM. Named customer stories, with real quotes and verified metrics, are added as they are published with permission.' },
      { q: 'Can I speak to a reference customer?', a: 'Yes. For a serious evaluation we can introduce you to a customer in your sector, subject to their availability and permission. Ask on your demo call.' },
      { q: 'Will my own rollout see the same results?', a: 'Numbers on each case study are illustrative and flagged in brackets. Your own outcome depends on your pipeline volume, team discipline and starting point — the discovery call is the right place to make a realistic estimate.' },
    ] },
  ],
  cta: startCta,
}

/* ============================ LOOKUP ============================ */
export const CATEGORIES = {
  industries: INDUSTRIES,
  features: FEATURES,
  company: COMPANY,
  support: SUPPORT,
  legal: LEGAL,
  caseStudies: CASE_STUDIES,
}

export function getPage(category, slug) {
  return CATEGORIES[category]?.[slug] || null
}
