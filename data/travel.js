import { contact } from './contact'

// NNC Travel CRM landing page — all page copy.
//
// The page is built around the decisions a travel owner makes, each answered by
// the module that actually settles it. Every capability below is visible in the
// product screenshots in public/travel-crm/images — nothing here is aspirational.
//
// No outcome claims appear on this page. Figures shown inside sample screens are
// wrapped in [square brackets], the same convention data/content.js uses to mark
// illustrative numbers.

// Derived from data/contact.js so the travel pages and the rest of the site
// can never drift apart. Calls go to the IVR line and WhatsApp to a separate
// handset, so the two are shown as different numbers everywhere.
export const contactDetails = {
  call: contact.phone,
  callHref: contact.phoneHref,
  whatsapp: contact.whatsapp,
  whatsappHref: contact.whatsappHref,
  email: contact.email,
  website: contact.website,
  websiteHref: contact.websiteHref,
}

export const pricing = {
  perUser: 'Rs. 590',
  minUsers: 'Minimum 10 users',
  gstNote: '+ 18% GST | Rs. 6,962 a month for 10 users',
  starting: 'Starting plan: Rs. 6,962 a month for 10 users, incl. GST',
  fine: 'Prices exclusive of 18% GST. Pricing as of September 2026 and subject to change.',
  includes: [
    'Trips, bookings, accounting and tasks',
    'Quote and itinerary builder',
    'Hotel, transport and sightseeing masters',
    'Vouchers and documents',
    'Payments, receipts and GST invoices',
    'Owner dashboard and alerts',
  ],
  // Rs. 590 x users x 1.18, rounded to the rupee. pct is the bar height as a
  // share of the tallest, exactly as laid out in the design.
  byTeamSize: [
    { users: '10 users', amount: 'Rs. 6,962', pct: 33.3, highlight: true },
    { users: '15 users', amount: 'Rs. 10,443', pct: 50 },
    { users: '20 users', amount: 'Rs. 13,924', pct: 66.7 },
    { users: '25 users', amount: 'Rs. 17,405', pct: 83.3 },
    { users: '30 users', amount: 'Rs. 20,886', pct: 100 },
  ],
  breakdown: [
    { value: '10', label: 'users' },
    { value: 'Rs. 590', label: 'per user' },
    { value: 'Rs. 5,900', label: 'subtotal' },
    { value: 'Rs. 1,062', label: '18% GST' },
    { value: 'Rs. 6,962', label: 'per month' },
  ],
}

export const navLinks = [
  { label: 'Decisions', href: '#decisions' },
  { label: 'What’s inside', href: '#inside' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#demo' },
]

// Hero imagery. Dimensions are the files' real pixel sizes and are written as
// width/height attributes so the browser reserves the right box before the
// image loads (no layout shift). scripts/install-travel-shots.mjs rewrites
// these from the files on disk, so re-capturing at 2x needs no hand edits.
export const heroShots = {
  dashboard: {
    src: '/travel-crm/images/dashboard.png',
    alt: 'Owner dashboard showing sales stats, follow-ups, payments due and trips',
    w: 1365,
    h: 686,
  },
  quoteCover: {
    src: '/travel-crm/images/quote-cover.png',
    alt: 'Branded quotation cover',
    w: 862,
    h: 682,
  },
  instalment: {
    src: '/travel-crm/images/instalment.png',
    alt: 'Instalment details with receipt',
    w: 650,
    h: 536,
  },
}

// ---------------------------------------------------------------------------
// Decisions — the section that replaces generic "why a travel CRM" framing.
// ---------------------------------------------------------------------------

// Mirrors the real dashboard layout in images/dashboard.png. Values are sample
// figures, bracketed so they never read as a customer result.
export const morningScreen = {
  greeting: 'Welcome back',
  statsTitle: 'Trip Sales Stats',
  periods: ['Today', 'Week', 'Month'],
  activePeriod: 'Month',
  stats: [
    { label: 'Revenue', value: '[₹76,062]' },
    { label: 'Leads', value: '[31]' },
    { label: 'Quotes', value: '[37]' },
    { label: 'Conversion', value: '[3%]' },
  ],
  panels: [
    { title: 'Pending Follow-ups', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
    { title: 'Due Incoming', cols: ['Today', 'Yesterday'] },
    { title: 'Trips Starting', cols: ['Today', 'Next 7 Days'] },
    { title: 'Trips Ending', cols: ['Today', 'Prev 7 Days'] },
  ],
  note: 'Sample figures, shown in the layout your team opens on each morning.',
}

export const decisions = [
  {
    icon: 'Bell',
    q: 'Who do I chase first today?',
    where: 'TRIPS · PENDING FOLLOW-UPS',
    a: 'Follow-ups due today, yesterday and over the next 7 days, each already assigned to the sales person who owns that trip.',
  },
  {
    icon: 'LayoutDashboard',
    q: 'Where are enquiries dropping off?',
    where: 'DASHBOARD · TRIP SALES STATS',
    a: 'Leads, quotes, revenue and conversion side by side for today, this week or this month, so the gap shows itself.',
  },
  {
    icon: 'RefreshCw',
    q: 'Which quote should we send?',
    where: 'TRIPS · NEW QUOTE',
    a: 'Pull up what you sent for the same destination before, with its day-wise plan, hotels, transfers and price already set.',
  },
  {
    icon: 'Wallet',
    q: 'Who still owes us money?',
    where: 'ACCOUNTING · INCOMING PAYMENTS',
    a: 'Upcoming, overdue, unverified and paid, every amount tied to the booking and the guest it came from.',
  },
  {
    icon: 'FileText',
    q: 'Did that trip actually make money?',
    where: 'ACCOUNTING · PROFIT REPORT',
    a: 'What the trip billed against what it cost, per booking, so the margin is a number and not a feeling.',
  },
]

// ---------------------------------------------------------------------------
// What's inside — the literal module map, taken from the product's own top nav.
// ---------------------------------------------------------------------------

export const modules = [
  {
    icon: 'ListChecks',
    name: 'Trips',
    lead: 'Every enquiry, from first message to past trip.',
    items: [
      'Seven stages: new query, in progress, converted, on trip, past, canceled and dropped',
      'A sales person and a follow-up date on every trip',
      'Search by trip id, guest name or phone number',
      'Tags, filters and CSV upload for existing leads',
      'Quotes, itineraries and an activities log per trip',
      'WhatsApp the guest from the trip page',
    ],
  },
  {
    icon: 'Hotel',
    name: 'Bookings',
    lead: 'Priced once, reused on every quote.',
    items: [
      'Hotel master with photos, star rating and location',
      'Room types, meal plans (CP, MAP, AP) and check-in/check-out times',
      'Child extra-bed age and payment preference per hotel',
      'Transport and sightseeing saved by location',
      'Trip, hotel and activity vouchers generated from the booking',
      'Show or hide prices, branding and terms on each voucher',
    ],
  },
  {
    icon: 'Receipt',
    name: 'Accounting',
    lead: 'What is owed, what is paid, what it earned.',
    items: [
      'Incoming payments by upcoming, past 7 days, unverified, paid and overdue',
      'Instalments logged against each booking, with the balance',
      'Receipts and GST invoices against a logged payment',
      'Proforma invoice before payment',
      'Profit report per trip',
      'Download any list',
    ],
  },
  {
    icon: 'CalendarCheck',
    name: 'Tasks',
    lead: 'Nothing waiting on someone remembering.',
    items: [
      'Follow-ups with dates and owners',
      'Comments on any trip, visible to the whole team',
      'Alerts for bookings, payments and comments',
      'Arrival and departure details per trip',
    ],
  },
]

export const workspace = {
  kicker: 'AND AROUND THEM',
  items: [
    { icon: 'LayoutDashboard', title: 'Owner dashboard', body: 'Sales, follow-ups, payments due and trips starting or ending, on one screen.' },
    { icon: 'Palette', title: 'Your branding', body: 'Your logo and contact details on every quote and voucher you send.' },
    { icon: 'Users', title: 'A login per user', body: 'Sales, operations and accounts each get their own access.' },
    { icon: 'Globe', title: 'Your own workspace', body: 'Runs at your own address, in the cloud, on any browser.' },
  ],
}

// ---------------------------------------------------------------------------
// Feature rows — each headed by the decision it settles, then the module detail.
// ---------------------------------------------------------------------------

export const featureRows = [
  {
    num: '01',
    kicker: 'TRIPS',
    title: 'Know what is live, and who is on it',
    note: 'every lead has an owner',
    shot: { src: '/travel-crm/images/pipeline.png', alt: 'Trips list with status filters, sales person and tags', w: 1366, h: 685 },
    items: [
      {
        icon: 'ListChecks',
        title: 'Seven stages, with live counts',
        body: 'New query, in progress, converted, on trip, past, canceled and dropped. Click a stage to see only those trips.',
      },
      {
        icon: 'Users',
        title: 'An owner on every row',
        body: 'Each trip carries its sales person, status, tags and follow-up date, so nothing sits unclaimed.',
      },
      {
        icon: 'Upload',
        title: 'Find any trip, bring in any list',
        body: 'Search by trip id, guest name or phone number, or upload a CSV of the enquiries you already have.',
      },
    ],
  },
  {
    num: '02',
    kicker: 'QUOTES AND ITINERARIES',
    title: 'Send the quote that already won',
    note: 'your logo, not ours',
    flip: true,
    shot: { src: '/travel-crm/images/quote-builder.png', alt: 'Trip details page with suggested quotes', w: 1366, h: 683 },
    float: { src: '/travel-crm/images/quote-cover.png', alt: 'Branded quote cover', w: 862, h: 682, width: 220 },
    items: [
      {
        icon: 'RefreshCw',
        title: 'Start from one that worked',
        body: 'The trip page suggests past quotes for the same destination, with the day-wise plan, hotels, ferries and price already in place.',
      },
      {
        icon: 'Palette',
        title: 'Or build it custom, day by day',
        body: 'Add hotels, transfers, activities and sightseeing as you go, and your logo and details land on every page.',
      },
      {
        icon: 'MessageCircle',
        title: 'Send it however the guest replies',
        body: 'Print, email or download a PDF, or WhatsApp the guest straight from the trip page.',
      },
    ],
  },
  {
    num: '03',
    kicker: 'BOOKINGS',
    title: 'Price it once, quote it forever',
    note: 'set up once, quote forever',
    shot: { src: '/travel-crm/images/hotels.png', alt: 'Hotel masters with meal plans and room types', w: 1366, h: 680 },
    float: { src: '/travel-crm/images/voucher.png', alt: 'Booking confirmation voucher with sharing options', w: 596, h: 298, width: 300 },
    items: [
      {
        icon: 'Hotel',
        title: 'A hotel master that holds the details',
        body: 'Photos, star rating, room types, meal plans (CP, MAP, AP), check-in and check-out times, and child extra-bed age.',
      },
      {
        icon: 'Bus',
        title: 'Transport and sightseeing by location',
        body: 'Ferries, cabs and activities saved once against a destination, then pulled into any quote.',
      },
      {
        icon: 'Ticket',
        title: 'Vouchers straight from the booking',
        body: 'Trip, hotel and activity vouchers, with prices, branding and terms shown or hidden as you choose.',
      },
    ],
  },
  {
    num: '04',
    kicker: 'ACCOUNTING',
    title: 'See what is owed before you have to ask',
    note: 'no more notebook ledgers',
    flip: true,
    shot: { src: '/travel-crm/images/payments.png', alt: 'Incoming payments list with paid and overdue status', w: 1366, h: 681 },
    float: { src: '/travel-crm/images/instalment.png', alt: 'Instalment detail with receipt', w: 650, h: 536, width: 220 },
    items: [
      {
        icon: 'Wallet',
        title: 'Every payment has a status',
        body: 'Upcoming, past 7 days, unverified, paid and overdue, each with its amount, due date and the booking behind it.',
      },
      {
        icon: 'Receipt',
        title: 'Instalments, receipts and GST invoices',
        body: 'Log part payments against the trip, watch the balance fall, and raise a GST invoice against a payment once logged.',
      },
      {
        icon: 'FileText',
        title: 'Proforma up front, margin at the end',
        body: 'Send a proforma before money moves, and check the profit report once the trip is done.',
      },
    ],
  },
  {
    num: '05',
    kicker: 'OWNER DASHBOARD',
    title: 'Open the day already knowing what it holds',
    note: 'your 9 am check-in',
    shot: { src: '/travel-crm/images/dashboard.png', alt: 'Owner dashboard', w: 1365, h: 686 },
    items: [
      {
        icon: 'LayoutDashboard',
        title: 'Revenue, leads, quotes, conversion',
        body: 'The four numbers that say how the desk is doing, for today, this week or this month.',
      },
      {
        icon: 'Bell',
        title: 'What needs you today',
        body: 'Pending follow-ups and payments due for today, yesterday and the next 7 days, plus alerts for bookings and comments.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Trips starting and ending',
        body: 'Plan pickups, check-ins and feedback calls before the day begins.',
      },
    ],
  },
]

export const steps = [
  {
    icon: 'Headset',
    step: 'STEP 1',
    title: 'Live demo',
    body: 'We walk your team through the CRM using trips like the ones you sell.',
  },
  {
    icon: 'PaletteOnDark',
    step: 'STEP 2',
    title: 'Your workspace',
    body: 'Your logo and details on quotes and vouchers, and a login for every user.',
  },
  {
    icon: 'UploadOnDark',
    step: 'STEP 3',
    title: 'Your data loaded',
    body: 'Hotels, transport, sightseeing and existing leads brought in, including CSV imports.',
  },
  {
    icon: 'UsersOnDark',
    step: 'STEP 4',
    title: 'Team trained, go live',
    body: 'Sales, operations and accounts learn their screens, then you run live trips.',
  },
]

export const audiences = [
  {
    icon: 'MapPin',
    title: 'Tour operators',
    body: 'Domestic and island packages with ferries, hotels and cabs.',
  },
  {
    icon: 'Handshake',
    title: 'DMCs',
    body: 'Ground handling for agents, with supplier-ready vouchers.',
  },
  {
    icon: 'Globe',
    title: 'Destination specialists',
    body: 'Teams that sell one region deeply and quote it every day.',
  },
  {
    icon: 'Users',
    title: 'Growing travel agencies',
    body: 'Ten or more people who need one shared view of every trip.',
  },
]

export const faqItems = [
  {
    q: 'What is actually included?',
    a: 'Trips, Bookings, Accounting and Tasks, plus the owner dashboard and your own branded workspace. That means the trip pipeline, quote and itinerary builder, hotel, transport and sightseeing masters, vouchers, instalments, receipts, GST invoices, proforma invoices and the profit report. There are no paid add-on modules.',
  },
  {
    q: 'What does the Travel CRM cost?',
    a: 'Rs. 590 per user per month plus 18% GST, with a minimum of 10 users. The starting plan is Rs. 6,962 a month for 10 users, including GST.',
  },
  {
    q: 'Can I add more users later?',
    a: 'Yes. Add users as your team grows. Each extra user is Rs. 590 plus GST per month.',
  },
  {
    q: 'Can I see what my team has been doing on a trip?',
    a: 'Yes. Every trip has an activities log and a comments thread, and each trip shows its sales person, status and next follow-up date.',
  },
  {
    q: 'Will quotes and vouchers carry my brand?',
    a: 'Yes. Your logo and contact details appear on quotes and vouchers, and you choose whether vouchers show prices, branding, terms and bank details.',
  },
  {
    q: 'Can I bring in my existing leads?',
    a: 'Yes. Upload a CSV of existing enquiries, or add new queries by hand.',
  },
  {
    q: 'Who owns the data?',
    a: 'Your data stays yours.',
  },
  {
    q: 'Do you help with setup?',
    a: 'Yes. We set up your workspace, load your hotels, transport and sightseeing, and train your sales, operations and accounts teams.',
  },
]

export const offices = [
  {
    city: 'Bengaluru',
    tag: 'CORPORATE OFFICE',
    address:
      '1st Floor, Darshan Plaza, Dwaraka Nagar, Banashankari 6th Stage 1st Block, Channasandra, Bengaluru, Karnataka 560098',
  },
  {
    city: 'Mumbai',
    tag: 'THANE WEST',
    address:
      'Lodha Signet, 302, Kolshet Road, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607',
  },
  {
    city: 'Mysuru',
    tag: 'BRANCH OFFICE',
    address:
      'Suswani Towers, Akkamahadevi Road, JP Nagar 2nd Stage, C-Block, Mysuru, Karnataka 570008',
  },
  {
    city: 'Hyderabad',
    tag: 'BRANCH OFFICE',
    address: '64/2 RT, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016',
  },
]

export const teamSizes = ['10 to 15', '16 to 30', '31 or more']
