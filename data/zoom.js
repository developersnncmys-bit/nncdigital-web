// Content for the Zoom-style homepage sections.

export const worksWith = {
  title: 'Connect CRM Software with Your Everyday Business Tools',
  // Rendered as separate <p> blocks so each sentence sits on its own line
  // with spacing between them, instead of running together.
  body: [
    "NNC Digital's CRM Software in India connects your everyday applications to simplify customer communication, payments and business operations.",
    'Our CRM Integration Software and Cloud-Based CRM Software help manage sales activities and customer information from one centralized platform.',
  ],
  caption: 'Integrations',
  items: ['WhatsApp', 'Gmail', 'Razorpay', 'Tally', 'Shopify'],
}

export const lifecycle = {
  title: 'One CRM Software to Manage Your Entire Customer Journey',
  lead: "Manage enquiries, sales opportunities and customer relationships with NNC Digital's CRM Software in India. Our Sales and Lead Management Software helps businesses track leads, organize sales pipelines and automate follow-ups.",
  tabs: [
    {
      label: 'Enquiries',
      title: 'Capture Every Enquiry with Lead Management Software',
      body: "Capture leads from websites, WhatsApp, calls and walk-ins with Lead Management CRM Software. NNC Digital's Customer Lead Management Software organizes enquiries, sales stages and follow-ups in one shared pipeline.",
      bullets: ['Omnichannel Lead Capture', 'Lead Tracking and Management', 'Sales Pipeline Management', 'Automatic Pipeline Stages', 'Tasks and Reminders'],
      cta: { label: 'Book a Demo', href: '#start' },
      img: '/img/feat-enquiries.jpg',
    },
    {
      label: 'Sales',
      title: 'Manage Sales and Close Deals Faster',
      body: "Track sales opportunities, monitor deals and achieve business targets with NNC Digital's Sales Management Software. Our Sales CRM Software simplifies pipeline tracking, forecasting and sales performance analysis.",
      bullets: ['Sales Pipeline Management', 'Deal Tracking', 'Goal and Target Tracking', 'Sales Forecasting', 'Advanced Analytics'],
      cta: { label: 'Explore Sales Features', href: '/industries/sales-teams' },
      img: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      label: 'Relationships',
      title: 'Build Better Customer Relationships',
      body: "Manage customer information, invoices, payments and communication with NNC Digital's Client Management Software. Our Customer Relationship Management Software simplifies customer engagement, billing and reporting through one centralized Business CRM Software platform.",
      bullets: ['Contacts and Companies', 'Invoicing and Payments', 'GST-Ready Documents', 'WhatsApp Engagement', 'Reports and Dashboards'],
      cta: { label: 'Discover NNC CRM', href: '/' },
      img: '/img/feat-whatsapp.jpg',
    },
  ],
}

export const featureRows = [
  {
    eyebrow: 'Forecasting',
    title: 'See where your business is headed.',
    body: "NNC turns last month's numbers into a clear 3, 6 and 12 month forecast, so you always know your next move, not just what already happened.",
    bullets: ['Last month vs expected', '3, 6 & 12 month projections', 'See where the money goes'],
    img: '/img/feat-forecast.jpg',
    side: 'right',
  },
  {
    eyebrow: 'Enquiries',
    title: 'Every enquiry caught. None forgotten.',
    body: 'Capture enquiries from your website, WhatsApp, calls and walk ins into one pipeline that moves deals forward automatically, so nothing slips.',
    bullets: ['Omnichannel capture', 'Automatic pipeline stages', 'Know what to chase today'],
    img: '/img/feat-enquiries.jpg',
    side: 'left',
  },
  {
    eyebrow: 'WhatsApp',
    title: 'Qualify leads on WhatsApp, 24/7.',
    body: 'The NNC assistant greets customers, asks the right five questions, and hands you a qualified lead with a recommended plan, around the clock.',
    bullets: ['Auto qualify new leads', 'Five question flow', 'Ready to close handoff'],
    img: '/img/feat-whatsapp.jpg',
    side: 'right',
  },
]

export const howItWorks = {
  eyebrow: 'How It Works',
  title: 'Get Started with CRM Software in India in Minutes, Not Months',
  lead: "NNC Digital's Easy-to-Use CRM Software simplifies lead management, sales tracking and customer relationships. Set up your Online CRM Software in India in four simple steps.",
  steps: [
    { n: '01', icon: 'roles', title: 'Create Your CRM Account', body: 'Sign up for a free trial. No credit card required.' },
    { n: '02', icon: 'sales', title: 'Choose Your CRM Pricing Plan', body: 'Select an affordable CRM Software Plan for 1, 3 or up to 10 users.' },
    { n: '03', icon: 'vault', title: 'Import Your Customer Data', body: 'Import contacts, enquiries and sales pipelines into your Customer Database Management Software.' },
    { n: '04', icon: 'mkt', title: 'Go Live and Manage Your Business', body: 'Start managing leads, tracking sales and forecasting growth.' },
  ],
  cta: { label: 'Book a Demo', href: '#start' },
}

export const useCases = {
  eyebrow: 'Industries',
  title: 'Industry-Specific Business CRM Software for Every Growing Business',
  // Rendered by SectionHead as two separate <p> blocks so the keyword-rich
  // "From CRM Software…" line sits on its own paragraph with spacing above.
  lead: [
    'NNC Digital offers Industry-Specific CRM Software in India with flexible workflows for different business needs.',
    'From CRM Software for Small Businesses to multi-location enterprises, manage customers, sales and daily operations through one platform.',
  ],
  cta: { label: 'Explore Industry Solutions', href: '/industries' },
  // Nine industries per the home-page content brief. Each card title now
  // leads with the sector + its SEO-friendly CRM descriptor so the grid
  // doubles as internal keyword signals.
  cards: [
    { icon: 'sales', title: 'Sales Teams — Sales CRM Software', body: 'Track deals, opportunities and targets with Sales Pipeline Management Software.', href: '/industries/sales-teams' },
    { icon: 'service', title: 'Service Businesses — Service Management CRM', body: 'Manage enquiries, projects and billing with CRM Software for Service Businesses.', href: '/industries/service-businesses' },
    { icon: 'retail', title: 'Retail and Distribution — Retail CRM Software', body: 'Organize customers, sales orders and invoicing with CRM Software for Retail and Distribution Businesses.', href: '/industries/retail' },
    { icon: 'manufacturing', title: 'Manufacturing — Manufacturing CRM Software', body: 'Track quotations, inventory, orders and payments with CRM Software for Manufacturing Companies.', href: '/industries/manufacturing' },
    { icon: 'healthcare', title: 'Healthcare and Clinics — Healthcare CRM Software', body: 'Manage patient records, appointments and follow-ups with CRM Software for Clinics and Healthcare Businesses.', href: '/industries/healthcare' },
    { icon: 'realestate', title: 'Real Estate — Real Estate CRM Software', body: 'Track property enquiries, site visits and bookings with Real Estate Lead Management Software.', href: '/industries/real-estate' },
    { icon: 'travel', title: 'Travel and Tourism — Travel CRM Software', body: 'Manage travel enquiries, bookings and vouchers with CRM Software for Travel Agencies and Tour Operators.', href: '/travel-crm/' },
    { icon: 'education', title: 'Education — Education CRM Software', body: 'Organize admissions, parent follow-ups and fees with CRM Software for Educational Institutions.', href: '/industries/education' },
    { icon: 'training', title: 'Training Institutes — Institute Management CRM', body: 'Manage admissions, attendance and student records with CRM Software for Training Institutes.', href: '/multi-center-training-institutes-crm/' },
  ],
}
