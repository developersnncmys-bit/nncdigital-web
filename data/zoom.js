// Content for the Zoom-style homepage sections.

export const worksWith = {
  title: 'Connect CRM Software with Your Business Tools',
  body: "NNC Digital's CRM Software in India connects familiar platforms to simplify customer communication, payments and daily business activities.",
  caption: 'Integrations',
  items: ['WhatsApp', 'Gmail', 'Razorpay', 'Tally', 'Shopify'],
}

export const lifecycle = {
  title: 'One CRM for Your Entire Customer Journey',
  lead: 'Manage enquiries, sales opportunities and customer relationships with CRM Software in India, all through one platform.',
  tabs: [
    {
      label: 'Enquiries',
      title: 'Capture Every Enquiry. Never Miss an Opportunity.',
      body: "Capture leads from websites, WhatsApp, calls and walk-ins in one shared pipeline. NNC Digital's Lead Management Software organizes enquiries, sales stages and follow-ups.",
      bullets: ['Omnichannel Lead Capture', 'Automatic Pipeline Stages', 'Tasks and Reminders'],
      cta: { label: 'Book a Demo', href: '#start' },
      img: '/img/feat-enquiries.jpg',
    },
    {
      label: 'Sales',
      title: 'Manage Sales and Close Deals Faster',
      body: 'Track opportunities, monitor sales progress and manage targets with integrated Sales Management Software.',
      bullets: ['Sales Pipeline Management', 'Deal Tracking', 'Goal and Target Tracking', 'Sales Forecasting', 'Advanced Analytics'],
      cta: { label: 'Explore Sales Features', href: '/industries/sales-teams' },
      img: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      label: 'Relationships',
      title: 'Build Better Customer Relationships',
      body: "Manage customer information, invoices, payments and engagement activities with NNC's Client Management Software.",
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
  lead: 'Set up your CRM workspace, choose a plan and import your business data in four simple steps.',
  steps: [
    { n: '01', icon: 'roles', title: 'Create Your Account', body: 'Sign up for free. No credit card required.' },
    { n: '02', icon: 'sales', title: 'Choose Your Plan', body: 'Select a plan for 1, 3 or 10 users.' },
    { n: '03', icon: 'vault', title: 'Import Your Data', body: 'Import contacts, enquiries and existing sales pipelines.' },
    { n: '04', icon: 'mkt', title: 'Go Live Today', body: 'Start managing leads, tracking sales and forecasting growth.' },
  ],
  cta: { label: 'Book a Demo', href: '#start' },
}

export const useCases = {
  eyebrow: 'Industries',
  title: 'Business CRM Software Designed for Your Industry',
  lead: 'NNC Digital provides Industry Specific CRM Software with flexible workflows for different business requirements.',
  cta: { label: 'Explore Industry Solutions', href: '/industries' },
  // Nine industries per the home-page content brief. Travel, Education and
  // Training Institutes have their own product pages; the rest link to
  // their /industries/ pages.
  cards: [
    { icon: 'sales', title: 'Sales Teams', body: 'Manage deals, opportunities and sales pipelines with Sales Management CRM.', href: '/industries/sales-teams' },
    { icon: 'service', title: 'Service Businesses', body: 'Manage clients, projects and sales pipelines in one place.', href: '/industries/service-businesses' },
    { icon: 'retail', title: 'Retail and Distribution', body: 'Organize customer enquiries, sales activities and invoicing.', href: '/industries/retail' },
    { icon: 'manufacturing', title: 'Manufacturing', body: 'Track enquiries, inventory, orders, dispatches and payments.', href: '/industries/manufacturing' },
    { icon: 'healthcare', title: 'Healthcare and Clinics', body: 'Manage patient information, appointments and follow-ups.', href: '/industries/healthcare' },
    { icon: 'realestate', title: 'Real Estate', body: 'Track property enquiries, site visits and bookings.', href: '/industries/real-estate' },
    { icon: 'travel', title: 'Travel and Tourism', body: 'Manage travel enquiries, bookings and vouchers.', href: '/travel-crm/' },
    { icon: 'education', title: 'Education', body: 'Organize admission enquiries, parent follow-ups and fees.', href: '/industries/education' },
    { icon: 'training', title: 'Training Institutes', body: 'Manage multi-center admissions, student journeys and attendance.', href: '/multi-center-training-institutes-crm/' },
  ],
}
