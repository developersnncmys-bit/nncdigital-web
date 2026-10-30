// Content for the Zoom-style homepage sections.

export const worksWith = {
  title: 'Connect with the tools your business already uses',
  body: 'Bring your everyday business activities together with NNC CRM. Work with the platforms you already use to manage customer interactions and business processes.',
  caption: 'Integrations',
  items: ['WhatsApp', 'Gmail', 'Razorpay', 'Tally', 'Shopify'],
}

export const lifecycle = {
  title: 'One CRM for your entire customer journey.',
  lead: 'From the first enquiry to closing deals and managing customer relationships, NNC CRM keeps your business activities organised in one place.',
  tabs: [
    {
      label: 'Enquiries',
      title: 'Capture every enquiry. Never miss an opportunity.',
      body: "Capture leads from your website, WhatsApp, calls and walk-ins into one shared pipeline. NNC's Lead Management Software helps organise enquiries, track pipeline stages and manage follow-ups.",
      bullets: ['Omnichannel Lead Capture', 'Automatic Pipeline Stages', 'Tasks and Reminders'],
      cta: { label: 'Book a Demo', href: '#start' },
      img: '/img/feat-enquiries.jpg',
    },
    {
      label: 'Sales',
      title: 'Manage sales and close deals faster.',
      body: 'Track opportunities, monitor sales progress and manage targets with integrated Sales Management Software.',
      bullets: ['Sales Pipeline Management', 'Deal Tracking', 'Goal and Target Tracking', 'Sales Forecasting', 'Advanced Analytics'],
      cta: { label: 'Explore Sales Features', href: '/industries/sales-teams' },
      img: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      label: 'Relationships',
      title: 'Build better customer relationships.',
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
  title: 'Get Started in Minutes, Not Months',
  lead: 'Getting started with CRM Software in India is simple with NNC CRM.',
  steps: [
    { n: '01', icon: 'roles', title: 'Create Your Account', body: 'Sign up for free in seconds. No credit card required.' },
    { n: '02', icon: 'sales', title: 'Choose Your Plan', body: 'Select a subscription based on your team size: 1, 3 or 10 users.' },
    { n: '03', icon: 'vault', title: 'Import Your Data', body: 'Bring your contacts, enquiries and existing pipelines into NNC CRM.' },
    { n: '04', icon: 'mkt', title: 'Go Live Today', body: 'Start capturing leads and forecasting business growth from day one.' },
  ],
  cta: { label: 'Start Your Free Trial', href: '#start' },
}

export const useCases = {
  eyebrow: 'Industries',
  title: 'Business CRM software designed for your industry.',
  lead: 'Every business works differently. NNC CRM offers flexible modules and workflows to support different industries and their customer management requirements.',
  cta: { label: 'Explore Industry Solutions', href: '/industries' },
  cards: [
    { icon: 'sales', title: 'Sales teams', body: 'Track deals, manage opportunities and close sales faster.', href: '/industries/sales-teams' },
    { icon: 'service', title: 'Service businesses', body: 'Manage clients, projects and sales pipelines in one place.', href: '/industries/service-businesses' },
    { icon: 'retail', title: 'Retail and distribution', body: 'Connect customer enquiries, sales and invoicing.', href: '/industries/retail' },
    { icon: 'manufacturing', title: 'Manufacturing', body: 'Manage enquiries, inventory, orders, dispatch and payments.', href: '/industries/manufacturing' },
    { icon: 'healthcare', title: 'Healthcare and clinics', body: 'Organise patient information, appointments and follow-ups.', href: '/industries/healthcare' },
    { icon: 'realestate', title: 'Real estate', body: 'Track property leads, site visits and bookings.', href: '/industries/real-estate' },
  ],
}
