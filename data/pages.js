// Content for every marketing / company / support / legal page.
// Each page: { metaTitle, metaDescription, breadcrumb[], hero{}, blocks[], cta{} }

const HOME = { label: 'Home', href: '/' }
const img = (src, alt) => ({ type: 'image', src, alt })
const startCta = {
  title: 'Run your business on what is next',
  sub: 'Start your free 30 day trial. No credit card required, cancel anytime.',
  primary: { label: 'Start free trial', href: '#start' },
  secondary: { label: 'See pricing', href: '/pricing' },
}
const heroCtas = [
  { label: 'Start free trial', href: '#start', trial: true },
  { label: 'See pricing', href: '/pricing', variant: 'ghost' },
]

/* ============================ INDUSTRIES ============================ */
const industriesCrumb = { label: 'Industries', href: '/industries' }
const ind = (slug, o) => ({
  metaTitle: o.metaTitle || `${o.name} CRM | NNC CRM`,
  metaDescription: o.metaDescription || o.lead,
  breadcrumb: [HOME, industriesCrumb, { label: o.name }],
  hero: { eyebrow: 'Industries', title: o.title, lead: o.lead, ctas: heroCtas, media: img(o.img, o.name) },
  blocks: [
    { type: 'split', kicker: 'The problem', title: o.splitTitle, body: o.splitBody, bullets: o.bullets, media: img(o.img2 || o.img, o.name) },
    { type: 'featureGrid', title: `Built for ${o.name.toLowerCase()}`, items: o.features },
    { type: 'stats', items: o.stats || [
      { value: '30 days', label: 'free trial on every plan' },
      { value: '1 day', label: 'typical setup time' },
      { value: '24x7', label: 'WhatsApp and email support' },
    ] },
  ],
  cta: startCta,
})

export const INDUSTRIES = {
  'sales-teams': ind('sales-teams', {
    name: 'Sales teams',
    metaTitle: 'CRM for Sales Teams | Pipeline & Activity | NNC CRM',
    metaDescription: 'Give your sales team a pipeline they will use, daily call lists and live targets. Close more deals and chase fewer dead leads.',
    title: 'A CRM your sales team will open every morning.',
    lead: 'Sales tools fail when reps see them as admin. NNC CRM flips that. It tells each rep who to call today, keeps the pipeline updated with a drag, and shows the manager the truth without a single status meeting.',
    img: '/img/case-sales.jpg', img2: '/img/scene-deal.jpg',
    splitTitle: 'Stop losing deals in spreadsheets and chat threads',
    splitBody: 'When leads live in notebooks, inboxes and WhatsApp, deals go cold. NNC keeps every opportunity in one pipeline your whole team can see.',
    bullets: ['Every lead captured from web, WhatsApp, calls and walk ins', 'One pipeline the whole team can see', 'Reminders so no follow up ever slips'],
    features: [
      { icon: 'pipeline', title: 'Visual pipeline', body: 'Move deals through stages and always know what to chase next.' },
      { icon: 'forecast', title: 'Sales forecasts', body: 'See expected revenue for the next 3, 6 and 12 months.' },
      { icon: 'whatsapp', title: 'WhatsApp selling', body: 'Reach buyers where they reply, right from the deal.' },
    ],
  }),
  'service-businesses': ind('service-businesses', {
    name: 'Service businesses',
    metaTitle: 'CRM for Service Businesses | Jobs & Repeat Revenue | NNC',
    metaDescription: 'Track every job from enquiry to invoice and protect your repeat revenue with automatic follow ups. Built for service businesses.',
    title: 'Every job tracked. Every repeat protected.',
    lead: 'For a service business, the money is in the second job, the renewal, the annual contract. NNC CRM tracks each job from first enquiry to paid invoice, then reminds you to come back before the customer forgets you.',
    img: '/img/case-services.jpg', img2: '/img/scene-support.jpg',
    splitTitle: 'One place for clients, work and money',
    splitBody: 'Service teams juggle enquiries, delivery and billing across tools. NNC ties them together so nothing falls between the cracks.',
    bullets: ['Track every client and project in one view', 'Turn approved work into invoices in a click', 'See what is owed and what is overdue'],
    features: [
      { icon: 'enquiries', title: 'Client enquiries', body: 'Capture and qualify new work the moment it comes in.' },
      { icon: 'invoice', title: 'Invoicing', body: 'Raise GST ready invoices and track payments in one place.' },
      { icon: 'reports', title: 'Profit reports', body: 'Know which clients and services actually make money.' },
    ],
  }),
  manufacturing: ind('manufacturing', {
    name: 'Manufacturing',
    metaTitle: 'Manufacturing CRM | Enquiry to Dispatch | NNC CRM',
    metaDescription: 'Manage enquiries, quotations, orders, dispatch and collections across your whole operation, end to end. A CRM built for manufacturers.',
    title: 'Connect orders, dispatch and payments.',
    lead: 'A manufacturing sale runs through too many hands: enquiry, quotation, negotiation, order, production, dispatch, payment. When that lives across calls, email and paper, things break. NNC CRM puts the whole chain on one screen, so nothing falls between departments.',
    img: '/img/case-mfg.jpg', img2: '/img/scene-office.jpg',
    splitTitle: 'From enquiry to dispatch, without the chaos',
    splitBody: 'Quotes in one tool, orders in another, payments in a third. NNC brings the full order to cash cycle into a single system.',
    bullets: ['Quotations and orders linked to every buyer', 'Dispatch and inventory in sync', 'Collections and outstanding tracked automatically'],
    features: [
      { icon: 'pipeline', title: 'Order pipeline', body: 'Track every order from quote to dispatch to payment.' },
      { icon: 'invoice', title: 'Billing and GST', body: 'Generate compliant invoices and e way documents fast.' },
      { icon: 'reports', title: 'Production view', body: 'See pending orders, dispatch load and dues at a glance.' },
    ],
  }),
  retail: ind('retail', {
    name: 'Retail and distribution',
    metaTitle: 'Retail & Distribution CRM | Orders & Dealers | NNC CRM',
    metaDescription: 'Manage dealer orders, billing, GST and collections in one view. A CRM built for retail and distribution businesses.',
    title: 'Orders, dealers and collections, in one view.',
    lead: 'Distribution runs on volume and trust. You cannot afford a missed order or a forgotten payment. NNC CRM keeps every dealer, every order and every rupee outstanding on one screen, so your team sells more and collects faster.',
    img: '/img/scene-mobile.jpg', img2: '/img/scene-data.jpg',
    splitTitle: 'Turn one time buyers into regulars',
    splitBody: 'Walk in, phone, WhatsApp or online, NNC captures every customer and order so you can bring them back again and again.',
    bullets: ['Every customer and order in one profile', 'WhatsApp offers and reorder reminders', 'Stock and catalog connected to sales'],
    features: [
      { icon: 'retail', title: 'Customer profiles', body: 'A full history of what each customer buys and when.' },
      { icon: 'whatsapp', title: 'WhatsApp campaigns', body: 'Send offers and festival greetings that drive reorders.' },
      { icon: 'reports', title: 'Sales analytics', body: 'See best sellers, slow movers and top customers.' },
    ],
  }),
  healthcare: ind('healthcare', {
    name: 'Healthcare and clinics',
    metaTitle: 'Healthcare & Clinic CRM | Patients & Follow Ups | NNC',
    metaDescription: 'Manage patient enquiries, appointments and follow ups with care and privacy built in. A CRM made for clinics and healthcare.',
    title: 'Care that follows up, every time.',
    lead: 'In healthcare, a missed follow up is more than lost revenue. NNC CRM makes sure every patient enquiry is answered, every appointment is remembered and every follow up happens, with privacy treated as seriously as you treat your patients.',
    img: '/img/scene-people.jpg', img2: '/img/scene-support.jpg',
    splitTitle: 'Never miss a follow up again',
    splitBody: 'Appointments in a diary, patients in a register, reminders in your head. NNC brings it together so patients always come back on time.',
    bullets: ['Patient records and history in one place', 'Appointment and follow up reminders on WhatsApp', 'Payments and packages tracked per patient'],
    features: [
      { icon: 'enquiries', title: 'Patient enquiries', body: 'Capture every new patient enquiry and convert more of them.' },
      { icon: 'whatsapp', title: 'Reminders', body: 'Automatic appointment and follow up reminders.' },
      { icon: 'security', title: 'Private and safe', body: 'Role based access keeps patient data protected.' },
    ],
  }),
  education: ind('education', {
    name: 'Education',
    metaTitle: 'Education CRM | Admissions, Parents & Fees | NNC CRM',
    metaDescription: 'Track admission enquiries, follow up with parents on WhatsApp and manage fees in one place. A CRM built for schools and academies.',
    title: 'A CRM for coaching and education.',
    lead: 'Admissions season is won by the institute that follows up fastest. NNC CRM captures every admission enquiry, keeps parents updated on WhatsApp and manages fees, so your counsellors convert more and your office runs calmer.',
    img: '/img/scene-team.jpg', img2: '/img/scene-dashboard.jpg',
    splitTitle: 'Convert more admission enquiries',
    splitBody: 'Enquiries come from ads, referrals and walk ins, then go cold without follow up. NNC keeps every prospective student warm until they join.',
    bullets: ['Every admission enquiry captured and assigned', 'Follow up reminders for counsellors', 'Fees and instalments tracked per student'],
    features: [
      { icon: 'enquiries', title: 'Admissions pipeline', body: 'Move every enquiry from interested to enrolled.' },
      { icon: 'whatsapp', title: 'Parent updates', body: 'Send reminders and updates to parents on WhatsApp.' },
      { icon: 'invoice', title: 'Fee management', body: 'Track fees, instalments and dues without spreadsheets.' },
    ],
  }),
  'real-estate': ind('real-estate', {
    name: 'Real estate',
    metaTitle: 'Real Estate CRM | Site Enquiries & Buyer Follow Up | NNC',
    metaDescription: 'Capture every site and portal enquiry, qualify buyers faster and follow up on WhatsApp so no hot lead is ever lost. A CRM for real estate.',
    title: 'Never lose a hot buyer to slow follow up.',
    lead: 'In real estate, the first agent to respond usually wins the deal. NNC CRM pulls in leads from portals, ads, your website and walk ins, qualifies them fast and keeps your team following up on WhatsApp until the site visit is booked.',
    img: '/img/scene-office.jpg', img2: '/img/scene-deal.jpg',
    splitTitle: 'Follow every lead to the close',
    splitBody: 'Property leads are expensive and easy to lose. NNC makes sure every enquiry gets a site visit, a follow up and a fair shot at closing.',
    bullets: ['Leads captured from portals, ads and referrals', 'Site visits scheduled and reminded', 'Bookings and payment milestones tracked'],
    features: [
      { icon: 'pipeline', title: 'Lead pipeline', body: 'See every lead by stage, project and budget.' },
      { icon: 'whatsapp', title: 'Instant follow up', body: 'Respond on WhatsApp while the lead is still hot.' },
      { icon: 'forecast', title: 'Booking forecast', body: 'Project bookings and revenue across your projects.' },
    ],
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
    { type: 'featureGrid', title: o.gridTitle || `What you get with ${o.name.toLowerCase()}`, items: o.features },
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
    metaDescription: 'A full WhatsApp inbox built into your CRM. Reply, broadcast, automate and qualify leads 24/7 without any third party tools.',
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
    metaTitle: 'About NNC | The Decision-Making CRM, Built in India',
    metaDescription: 'NNC CRM is built by Nakshatra Namaha Creations, a ten year software company. We built one CRM right, after building it for hundreds of clients.',
    breadcrumb: [HOME, companyCrumb, { label: 'About us' }],
    hero: {
      eyebrow: 'Company',
      title: 'We built this CRM hundreds of times before we built it once.',
      lead: 'For over ten years, our team at Nakshatra Namaha Creations built custom software for real estate firms, hospitals, academies, factories and agencies. Every client wanted roughly the same things: catch every lead, follow up on WhatsApp, send invoices, know what next month looks like. So we built it once, the right way, and made it available to everyone. That is NNC CRM.',
      ctas: heroCtas,
      media: img('/img/scene-team.jpg', 'The NNC team'),
    },
    blocks: [
      { type: 'stats', items: [
        { value: '10+', label: 'years building software' },
        { value: '565+', label: 'projects delivered' },
        { value: '35+', label: 'in house team' },
        { value: '4', label: 'offices across India' },
      ] },
      { type: 'prose', sections: [
        { h: 'Why we built NNC CRM', p: ['We were rebuilding the same twenty features for every client. We decided to build them properly, with WhatsApp native, real automation doing real work, and pricing that fits how Indian businesses actually operate.'] },
        { h: 'Not a runway. A track record.', p: ['We are not a venture funded startup with a 24 month clock. We are a company with paying clients, delivered projects and teams in four cities.'] },
      ] },
      { type: 'stats', title: 'Where to find us', items: [
        { value: 'Bengaluru', label: 'Head office' },
        { value: 'Mumbai', label: 'Thane West' },
        { value: 'Mysuru', label: 'Regional office' },
        { value: 'Hyderabad', label: 'Regional office' },
      ] },
    ],
    cta: { title: 'Build the CRM your business actually needs.', sub: 'Start your free trial, or talk to our team about the right plan for you.', primary: { label: 'Start free trial', href: '#start' }, secondary: { label: 'Contact us', href: '/company/contact' } },
  },
  careers: {
    ...cb('Careers', { lead: 'Join us and help Indian businesses grow.', metaTitle: "Careers at NNC | Build India's CRM With Us", metaDescription: 'Join NNC and help build the decision making CRM used across industries. Open roles in engineering, sales, support and marketing across four cities.' }),
    hero: { eyebrow: 'Careers', title: 'Build the CRM the whole country runs on.', lead: 'We are a profitable, ten year product and services company building something used by businesses across India. If you want real ownership and real impact, come build with us.', ctas: [{ label: 'See open roles', href: '#roles', variant: 'ghost' }], media: img('/img/scene-people.jpg', 'Careers') },
    blocks: [
      { type: 'featureGrid', title: 'Why work here', items: [
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
    ...cb('Partners', { lead: 'Grow with NNC as an implementation or referral partner.', metaTitle: 'Partner Program | Resell & Refer NNC CRM', metaDescription: 'Agencies, consultants and resellers: earn recurring revenue by bringing NNC CRM to your clients. Refer, resell or build on our platform.' }),
    hero: { eyebrow: 'Partners', title: 'Grow your business by growing ours.', lead: 'If you serve businesses that need a CRM, partner with NNC. Refer clients, resell the platform or build on top of it, and earn recurring revenue while we handle the product.', ctas: [{ label: 'Become a partner', href: '#start', trial: true }], media: img('/img/scene-deal.jpg', 'Partners') },
    blocks: [
      { type: 'featureGrid', title: 'Ways to partner', items: [
        { icon: 'partners', title: 'Referral partner', body: 'Refer businesses and earn recurring commission.' },
        { icon: 'service', title: 'Implementation', body: 'Set up and customise NNC for local businesses.' },
        { icon: 'api', title: 'Technology', body: 'Build integrations on our open API.' },
      ] },
    ],
    cta: { title: 'Ready to partner?', sub: 'Tell us about your business and we will be in touch.', primary: { label: 'Contact our team', href: 'mailto:partners@nncdigital.co.in' } },
  },
  customers: {
    ...cb('Customer stories', { lead: 'See how businesses grow with NNC CRM.', metaTitle: 'Customer Stories | NNC CRM Results & Reviews', metaDescription: 'See how academies, manufacturers, clinics and sales teams grow with NNC CRM. Real businesses, real results, verified reviews.' }),
    hero: { eyebrow: 'Customers', title: 'Businesses that stopped losing leads.', lead: 'The proof of a CRM is not its feature list. It is what happens to the businesses that use it. Here are the institutes, factories and teams that run on NNC CRM.', ctas: heroCtas, media: { type: 'component', name: 'crmDashboard' } },
    blocks: [
      { type: 'stats', items: [
        { value: '32%', label: 'more enquiries converted on average' },
        { value: '5 hrs', label: 'saved per rep each week' },
        { value: '2x', label: 'faster follow up response' },
        { value: '1 day', label: 'to go live' },
      ] },
      { type: 'featureGrid', title: 'What every story has in common', lead: 'Different industries, the same pattern: catch every lead, follow up fast, and decide with real numbers.', items: [
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
    hero: { eyebrow: 'Contact', title: 'Let us find the right plan for you.', lead: 'Tell us how your business works and we will show you exactly which modules you need and what it will cost. No pressure, no jargon.', ctas: [{ label: 'Start free trial', href: '#start', trial: true }], media: img('/img/scene-support.jpg', 'Contact') },
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
    hero: { eyebrow: 'Support', title: 'Get set up in four steps.', lead: 'Four quick steps to set up NNC and start capturing every enquiry today.', ctas: [{ label: 'Start free trial', href: '#start', trial: true }] },
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
      { type: 'featureGrid', title: 'What you can build', items: [
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
      { type: 'featureGrid', title: 'How we protect your data', items: [
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
    hero: {
      eyebrow: 'Legal',
      title: 'Legal and Compliance',
      lead: 'How NNC CRM, operated by Nakshatra Namaha Creations, meets its legal and regulatory obligations, and how to reach our compliance team. Last reviewed June 2026.',
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
    { type: 'featureGrid', title: 'Explore the product', lead: 'Every module works on its own and gets stronger together. Open one to see what it does.', items: [
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
  metaTitle: 'CRM by Industry: Education, Manufacturing, Healthcare | NNC',
  metaDescription: 'Ready built CRM packs for education, manufacturing, healthcare, retail, real estate, service businesses and sales teams. Pick yours and go live today.',
  breadcrumb: [HOME, { label: 'Industries' }],
  hero: {
    eyebrow: 'Industries', title: 'A CRM that already speaks your industry.',
    lead: 'Generic software makes you bend your business to fit it. NNC CRM ships ready built for the way your industry actually works, with the right stages, fields and reports already in place. Over ten years we have built CRMs for academies, factories, clinics and sales floors. Pick yours below.',
    ctas: heroCtas, media: { type: 'video', src: '/hero-reel.mp4', poster: '/hero-reel.jpg' },
  },
  blocks: [
    { type: 'stats', items: [
      { value: '8 industries', label: 'ready built CRM packs' },
      { value: '10+ years', label: 'building industry CRMs' },
      { value: '1 day', label: 'to go live' },
    ] },
    { type: 'featureGrid', title: 'Choose your industry', lead: 'Every pack ships with the pipeline stages, fields and reports your industry needs. Open yours to see the version built for you.', items: [
      { icon: 'sales', title: 'Sales teams', body: 'A CRM for sales teams: visual pipeline, daily call lists and live targets.', href: '/industries/sales-teams' },
      { icon: 'service', title: 'Service businesses', body: 'A service business CRM: every job from enquiry to invoice, plus repeat revenue.', href: '/industries/service-businesses' },
      { icon: 'manufacturing', title: 'Manufacturing', body: 'A manufacturing CRM: enquiry to quotation to dispatch to payment.', href: '/industries/manufacturing' },
      { icon: 'retail', title: 'Retail and distribution', body: 'A retail and distribution CRM: dealers, orders and collections in one view.', href: '/industries/retail' },
      { icon: 'healthcare', title: 'Healthcare and clinics', body: 'A healthcare CRM: patients, appointments and follow ups, kept private.', href: '/industries/healthcare' },
      { icon: 'education', title: 'Education', body: 'An education CRM: admission enquiries, parent follow ups and fees.', href: '/industries/education' },
      { icon: 'realestate', title: 'Real estate', body: 'A real estate CRM: portal and ad leads, site visits and bookings.', href: '/industries/real-estate' },
      { icon: 'users', title: 'Training institutes and coaching', body: 'A multi center CRM for coaching institutes and training centers.', href: '/multi-center-training-institutes-crm' },
    ] },
    { type: 'split', kicker: 'Industry specific CRM', title: 'Why an industry specific CRM beats a generic one', body: 'A generic CRM hands you empty fields and a blank pipeline, then leaves the hard part to you. An industry specific CRM from NNC arrives already set up for how your sector sells, serves and gets paid, so your team is productive on day one.', bullets: ['The right pipeline stages, ready on day one', 'Fields and forms that match your business', 'The reports your industry actually uses', 'Go live in a day, not a quarter'], media: img('/img/scene-dashboard.jpg', 'Industry specific CRM dashboard') },
    { type: 'featureGrid', title: 'Built for the way your industry works', items: [
      { icon: 'pipeline', title: 'Ready built workflows', body: 'Stages, fields and automations tuned to your sector, from day one.' },
      { icon: 'reports', title: 'The right reports', body: 'The numbers your industry runs on, without building dashboards yourself.' },
      { icon: 'whatsapp', title: 'WhatsApp follow up', body: 'Reach customers, patients, parents or buyers where they actually reply.' },
    ] },
    { type: 'faq', title: 'Industry CRM questions', items: [
      { q: 'What is an industry specific CRM?', a: 'An industry specific CRM ships with the pipeline stages, fields, automations and reports your sector needs, instead of a blank, generic setup. NNC CRM offers ready packs for eight industries so you go live faster.' },
      { q: 'Do you have a CRM for manufacturing?', a: 'Yes. The NNC manufacturing CRM connects enquiry, quotation, order, dispatch and collections on one screen, with GST ready invoicing built in.' },
      { q: 'Is there a CRM for healthcare or clinics?', a: 'Yes. The NNC healthcare CRM manages patient enquiries, appointments and follow ups, with role based access and privacy built in.' },
      { q: 'Which industries does NNC CRM support?', a: 'Sales teams, service businesses, manufacturing, retail and distribution, healthcare and clinics, education, real estate, and multi center training institutes and coaching centers.' },
    ] },
  ],
  cta: startCta,
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
    // `heroFit: 'contain'` on the per-case object → hero shows the full image
    // (used for UI screenshots that would otherwise crop under object-fit cover).
    media: { ...img(o.img, o.name), ...(o.heroFit ? { fit: o.heroFit } : {}) },
  },
  blocks: [
    { type: 'split', kicker: 'The challenge', title: o.challengeTitle, body: o.challengeBody, bullets: o.challengeBullets, media: img(o.img2 || o.img, o.name) },
    { type: 'split', flip: true, kicker: 'The solution', title: o.solutionTitle, body: o.solutionBody, bullets: o.solutionBullets, media: img(o.img3 || o.img, o.name) },
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
    img: '/travel-crm/images/dashboard.png',
    heroFit: 'contain',
    img2: '/img/scene-office.jpg',
    img3: '/img/scene-mobile.jpg',
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
      { value: '[~3x]', label: 'faster quote turnaround' },
      { value: '[+40%]', label: 'enquiry-to-booking conversion' },
      { value: '[1 day]', label: 'to onboard a new branch' },
      { value: '[0]', label: 'enquiries lost between branches' },
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
    img: '/training-reel.jpg',
    img2: '/img/scene-people.jpg',
    img3: '/img/scene-dashboard.jpg',
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
      { value: '[+25%]', label: 'enquiry-to-admission conversion' },
      { value: '[-70%]', label: 'time to close month-end collections' },
      { value: '[~90%]', label: 'parent engagement on WhatsApp reminders' },
      { value: '[1 day]', label: 'to add a new center to the roll-up' },
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
    img: '/img/scene-mobile.jpg',
    img2: '/img/scene-team.jpg',
    img3: '/img/scene-dashboard.jpg',
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
      { value: '[< 3 min]', label: 'average WhatsApp reply time' },
      { value: '[+50%]', label: 'leads followed up within 24 hours' },
      { value: '[0]', label: 'enquiries lost to a slow reply' },
      { value: '[1 day]', label: 'to go live from zero' },
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
    img: '/img/case-mfg.jpg',
    img2: '/img/scene-office.jpg',
    img3: '/img/scene-data.jpg',
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
      { value: '[-50%]', label: 'outstanding dues over 60 days' },
      { value: '[+20%]', label: 'quote-to-order conversion' },
      { value: '[~2x]', label: 'faster dispatch paperwork' },
      { value: '[1 week]', label: 'to go live with historical data imported' },
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
    img: '/img/case-services.jpg',
    img2: '/img/scene-support.jpg',
    img3: '/img/scene-dashboard.jpg',
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
      { value: '[+60%]', label: 'AMC renewal rate' },
      { value: '[~2x]', label: 'repeat job revenue year on year' },
      { value: '[-80%]', label: 'invoice-to-payment delay' },
      { value: '[1 day]', label: 'to go live' },
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
    img: '/img/scene-mobile.jpg',
    img2: '/img/scene-data.jpg',
    img3: '/img/scene-dashboard.jpg',
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
      { value: '[-45%]', label: 'outstanding dues over 60 days' },
      { value: '[+30%]', label: 'reorder rate from active dealers' },
      { value: '[~2x]', label: 'orders captured per rep per day' },
      { value: '[1 week]', label: 'to go live with full dealer base' },
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
    media: { type: 'component', name: 'crmDashboard' },
  },
  blocks: [
    { type: 'stats', items: [
      { value: '2,000+', label: 'businesses across India' },
      { value: '4.8 / 5', label: 'average customer rating' },
      { value: '1 day', label: 'typical go-live time' },
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
    ], media: img('/img/scene-dashboard.jpg', 'Teams reviewing a CRM dashboard') },
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
