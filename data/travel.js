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
    src: '/travel-crm/images/dashboard.webp',
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
  greeting: 'Welcome Back',
  subheading: 'Your Travel Business at a Glance',
  statsTitle: 'Trip Sales Overview',
  periods: ['Today', 'Week', 'Month'],
  activePeriod: 'Month',
  stats: [
    { label: 'Revenue', value: '₹76,062' },
    { label: 'Leads', value: '31' },
    { label: 'Quotes', value: '37' },
    { label: 'Conversion', value: '3%' },
  ],
  // Panel titles and columns match the Google Doc brief for this screen.
  // Prior copy ("Pending Follow-ups" / "Due Incoming" / "Trips Starting" /
  // "Trips Ending") drifted from the brief — restored here. Added the
  // missing "Due" column on Incoming Payments.
  panels: [
    { title: 'Follow-ups to Complete', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
    { title: 'Incoming Payments', cols: ['Today', 'Yesterday', 'Due'] },
    { title: 'Upcoming Departures', cols: ['Today', 'Next 7 Days'] },
    { title: 'Recent Trip Completions', cols: ['Today', 'Previous 7 Days'] },
  ],
  note: 'Sample figures displayed in the travel CRM dashboard layout.',
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

// Each module carries TWO sub-headings under the H3 name to match the
// Google Doc brief: `subtitle` is the bolded tagline, `lead` is the softer
// one-liner that follows it. Rendered by TravelInside.jsx.
export const modules = [
  {
    icon: 'ListChecks',
    name: 'Trips',
    subtitle: 'Manage Every Travel Enquiry from First Contact to Completed Trip.',
    lead: 'Organize your travel sales pipeline and maintain a complete record of every guest and trip.',
    items: [
      'Seven trip stages: New Query, In Progress, Converted, On Trip, Past, Canceled, and Dropped',
      'Assign trip ownership and follow-up dates',
      'Search travel enquiries by trip ID, guest name, or phone number',
      'Organize travel leads with tags and filters',
      'Import existing travel enquiries through CSV uploads',
      'Maintain quotations, itineraries, and activity logs for each trip',
      'Contact guests through WhatsApp from the trip page',
    ],
  },
  {
    icon: 'Hotel',
    name: 'Bookings',
    subtitle: 'Build a Reusable Database for Travel Packages and Bookings.',
    lead: 'Keep hotel, transport, and sightseeing information ready for future travel quotations.',
    items: [
      'Hotel database with photos, star ratings, and locations',
      'Room categories and meal plans (CP, MAP, AP)',
      'Hotel check-in and check-out times',
      'Child extra-bed age and payment preferences',
      'Transport and sightseeing details organized by location',
      'Generate trip, hotel, and activity vouchers',
      'Control the display of prices, branding, and terms on vouchers',
    ],
  },
  {
    icon: 'Receipt',
    name: 'Accounting',
    subtitle: 'Manage Travel Payments, Instalments, Invoices, and Trip Profitability.',
    lead: 'Keep travel booking payments organized and maintain visibility into outstanding amounts.',
    items: [
      'Categorize incoming payments as upcoming, past 7 days, unverified, paid, and overdue',
      'Record booking instalments and track outstanding balances',
      'Issue receipts and GST invoices against logged payments',
      'Create proforma invoices before payment',
      'Generate profit reports for each trip',
      'Download payment and booking lists',
    ],
  },
  {
    icon: 'CalendarCheck',
    name: 'Tasks',
    subtitle: 'Keep Travel Operations Moving Without Missed Follow-ups.',
    lead: 'Stay aligned on trips, payments, and bookings with shared tasks and alerts.',
    items: [
      'Assign follow-up tasks with dates and owners',
      'Add comments to trips for team communication',
      'Receive alerts for bookings, payments, and comments',
      'Maintain arrival and departure details for every trip',
    ],
  },
]

export const workspace = {
  kicker: 'AND AROUND THEM',
  // Titles + bodies match the Google Doc brief verbatim (previous copy had
  // drifted from the brief: "Your branding" / "A login per user" / "Your
  // own workspace" → "Branded Travel Workspace" / "Individual User
  // Access" / "Cloud-Based Travel CRM").
  items: [
    { icon: 'LayoutDashboard', title: 'Owner Dashboard', body: 'Get a consolidated view of travel sales, follow-ups, pending payments, and upcoming trips.' },
    { icon: 'Palette', title: 'Branded Travel Workspace', body: 'Use your own branding on travel quotations and vouchers.' },
    { icon: 'Users', title: 'Individual User Access', body: 'Provide separate logins for sales, operations, and accounting teams.' },
    { icon: 'Globe', title: 'Cloud-Based Travel CRM', body: 'Access your travel management software through your own workspace on any browser.' },
  ],
}

// ---------------------------------------------------------------------------
// Feature rows — each headed by the decision it settles, then the module detail.
// ---------------------------------------------------------------------------

// Section 6 (MODULE BY MODULE) — titles and sub-points match the Google
// Doc brief verbatim. Each row's H2 is the brief's bolded module tagline
// and the three sub-H3s are the brief's module sub-headings.
export const featureRows = [
  {
    num: '01',
    kicker: 'TRIPS',
    title: 'Manage Your Travel Pipeline with Better Visibility',
    note: 'every lead has an owner',
    shot: { src: '/travel-crm/images/pipeline.png', alt: 'Travel enquiry list with trip status, assigned sales person, and tags', w: 1366, h: 685 },
    items: [
      {
        icon: 'ListChecks',
        title: 'Track Every Trip Stage',
        body: 'View New Query, In Progress, Converted, On Trip, Past, Canceled, and Dropped. Select a stage to see the trips assigned to it.',
      },
      {
        icon: 'Users',
        title: 'Assign Every Enquiry',
        body: 'Each trip includes a sales person, status, tags, and follow-up date, making travel lead management easier for your team.',
      },
      {
        icon: 'Upload',
        title: 'Search and Import Travel Leads',
        body: 'Find trips by ID, guest name, or phone number. Bring existing travel enquiries into the CRM through CSV uploads.',
      },
    ],
  },
  {
    num: '02',
    kicker: 'QUOTES AND ITINERARIES',
    title: 'Create Travel Quotations Without Starting from Scratch',
    note: 'your logo, not ours',
    flip: true,
    shot: { src: '/travel-crm/images/quote-builder.png', alt: 'Travel quotation builder with destination details and suggested itineraries', w: 1366, h: 683 },
    float: { src: '/travel-crm/images/quote-cover.png', alt: 'Branded quote cover', w: 862, h: 682, width: 220 },
    items: [
      {
        icon: 'RefreshCw',
        title: 'Reuse Successful Travel Proposals',
        body: 'Find previous quotations for the same destination with their day-wise plans, hotels, ferries, and pricing already available.',
      },
      {
        icon: 'Palette',
        title: 'Customize Every Travel Itinerary',
        body: 'Add hotels, transfers, activities, and sightseeing to create a personalized travel proposal for each guest.',
      },
      {
        icon: 'MessageCircle',
        title: 'Share Professional Travel Quotations',
        body: 'Print, email, or download quotations as PDFs. Share them with guests through WhatsApp from the trip page.',
      },
    ],
  },
  {
    num: '03',
    kicker: 'BOOKINGS',
    title: 'Organize Travel Booking Details in One Place',
    note: 'set up once, quote forever',
    shot: { src: '/travel-crm/images/hotels.png', alt: 'Hotel database, booking details, and travel voucher generation', w: 1366, h: 680 },
    float: { src: '/travel-crm/images/voucher.png', alt: 'Booking confirmation voucher with sharing options', w: 596, h: 298, width: 300 },
    items: [
      {
        icon: 'Hotel',
        title: 'Maintain Detailed Hotel Information',
        body: 'Store hotel photos, ratings, room types, meal plans, check-in and check-out times, and child extra-bed details.',
      },
      {
        icon: 'Bus',
        title: 'Save Destination-Based Services',
        body: 'Maintain transport, ferries, sightseeing, and activities by location for reuse in travel quotations.',
      },
      {
        icon: 'Ticket',
        title: 'Generate Travel Booking Vouchers',
        body: 'Create trip, hotel, and activity vouchers with customizable prices, branding, and terms.',
      },
    ],
  },
  {
    num: '04',
    kicker: 'ACCOUNTING',
    title: 'Keep Every Travel Payment Accounted For',
    note: 'no more notebook ledgers',
    flip: true,
    shot: { src: '/travel-crm/images/payments.png', alt: 'Travel payment tracking dashboard and instalment receipt details', w: 1366, h: 681 },
    float: { src: '/travel-crm/images/instalment.png', alt: 'Instalment detail with receipt', w: 650, h: 536, width: 220 },
    items: [
      {
        icon: 'Wallet',
        title: 'Track Incoming Payments',
        body: 'View upcoming, past 7 days, unverified, paid, and overdue payments along with their due dates and associated bookings.',
      },
      {
        icon: 'Receipt',
        title: 'Record Instalments and Generate Invoices',
        body: 'Log part payments against bookings, track remaining balances, and generate receipts and GST invoices against logged payments.',
      },
      {
        icon: 'FileText',
        title: 'Review Trip Profitability',
        body: 'Create proforma invoices before payments and review profit reports after trips are completed.',
      },
    ],
  },
  {
    num: '05',
    kicker: 'OWNER DASHBOARD',
    title: 'Get a Better View of Your Travel Business Performance',
    note: 'your 9 am check-in',
    shot: { src: '/travel-crm/images/dashboard.webp', alt: 'Travel business dashboard with revenue, lead statistics, pending follow-ups, and payment information', w: 1365, h: 686 },
    items: [
      {
        icon: 'LayoutDashboard',
        title: 'Monitor Travel Sales Performance',
        body: 'Review revenue, leads, quotations, and conversion for today, this week, or this month.',
      },
      {
        icon: 'Bell',
        title: 'Identify Pending Business Activities',
        body: 'View follow-ups and payments due across today, yesterday, and the next 7 days, along with booking and comment alerts.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Prepare for Upcoming Trips',
        body: 'Review trips starting and ending to plan pickups, check-ins, and feedback calls.',
      },
    ],
  },
]

// Section 7 (HOW IT WORKS) — step titles + bodies verbatim from the brief.
export const steps = [
  {
    icon: 'Headset',
    step: 'STEP 1',
    title: 'Live Demo',
    body: 'Explore NNC Travel CRM using travel scenarios similar to the trips and packages your team manages.',
  },
  {
    icon: 'PaletteOnDark',
    step: 'STEP 2',
    title: 'Your Workspace',
    body: 'Set up your company branding, quotations, vouchers, and individual user logins.',
  },
  {
    icon: 'UploadOnDark',
    step: 'STEP 3',
    title: 'Your Travel Data',
    body: 'Load hotel, transport, sightseeing, and existing enquiry information, including CSV imports.',
  },
  {
    icon: 'UsersOnDark',
    step: 'STEP 4',
    title: 'Team Training and Go Live',
    body: 'Train sales, operations, and accounts teams on their respective CRM screens before managing live trips.',
  },
]

// Section 9 (BUILT FOR) — titles + bodies verbatim from the brief.
export const audiences = [
  {
    icon: 'MapPin',
    title: 'Tour Operators',
    body: 'Manage domestic and island tour packages with hotels, ferries, cabs, and travel quotations.',
  },
  {
    icon: 'Handshake',
    title: 'Destination Management Companies',
    body: 'Organize ground handling for agents with supplier-ready vouchers and trip details.',
  },
  {
    icon: 'Globe',
    title: 'Destination Specialists',
    body: 'Manage travel enquiries and quotations for teams focused on specific destinations and regions.',
  },
  {
    icon: 'Users',
    title: 'Growing Travel Agencies',
    body: 'Bring sales, operations, and accounting teams together with a shared view of every trip.',
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
