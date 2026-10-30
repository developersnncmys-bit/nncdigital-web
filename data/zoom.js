// Content for the Zoom-style homepage sections.

export const worksWith = {
  caption: 'Works with the tools you already use',
  items: ['WhatsApp', 'Gmail', 'Razorpay', 'Tally', 'Shopify'],
}

export const lifecycle = {
  title: 'One CRM for the whole customer journey.',
  lead: 'Capture every lead, move every deal forward, and keep customers coming back. Nothing slips, nothing forgotten.',
  tabs: [
    {
      label: 'New enquiries',
      title: 'Every enquiry caught. None forgotten.',
      body: 'Capture leads from your website, WhatsApp, calls and walk ins into one shared pipeline that updates itself.',
      bullets: ['Omnichannel capture', 'Automatic pipeline stages', 'Know what to chase today'],
      img: '/img/feat-enquiries.jpg',
    },
    {
      label: 'Active deals',
      title: 'See where every deal is headed.',
      body: "Track deals by stage, spot what's slipping, and forecast your next 3, 6 and 12 months from your real numbers.",
      bullets: ['3, 6 & 12 month forecast', 'Pipeline by stage', 'Spot deals that are slipping'],
      img: '/img/feat-forecast.jpg',
    },
    {
      label: 'After the sale',
      title: 'Keep customers coming back.',
      body: 'Follow up on WhatsApp, raise invoices, collect payments, and turn one time buyers into repeat business.',
      bullets: ['WhatsApp follow ups', 'Invoices and payments', 'Repeat and referrals'],
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
  eyebrow: 'How it works',
  title: 'Up and running in minutes, not months.',
  steps: [
    { n: '01', icon: 'roles', title: 'Create your account', body: 'Sign up free in seconds. No credit card required.' },
    { n: '02', icon: 'sales', title: 'Pick your plan', body: 'Choose by team size: 1, 3 or 10 users.' },
    { n: '03', icon: 'vault', title: 'Import your data', body: 'Bring in contacts, enquiries and pipelines in a click.' },
    { n: '04', icon: 'mkt', title: 'Go live today', body: 'Start capturing leads and forecasting from day one.' },
  ],
}

export const useCases = {
  eyebrow: 'Industries',
  title: 'Built for how your business works.',
  lead: 'One CRM, adapted to your team, so you go live sooner with workflows that fit.',
  cards: [
    { icon: 'sales', title: 'Sales teams', body: 'Track every deal, chase the right ones, and close faster.', href: '/industries/sales-teams' },
    { icon: 'service', title: 'Service businesses', body: 'Clients, projects and pipeline together in one place.', href: '/industries/service-businesses' },
    { icon: 'retail', title: 'Retail and distribution', body: 'From first enquiry to final invoice, all in one flow.', href: '/industries/retail' },
    { icon: 'manufacturing', title: 'Manufacturing', body: 'Orders, dispatch and payments connected end to end.', href: '/industries/manufacturing' },
    { icon: 'healthcare', title: 'Healthcare and clinics', body: 'Appointments, patients and follow ups, organised.', href: '/industries/healthcare' },
    { icon: 'realestate', title: 'Real estate', body: 'Leads, site visits and bookings tracked to close.', href: '/industries/real-estate' },
  ],
}
