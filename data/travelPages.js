// Keyword landing pages for NNC Travel CRM.
//
// One page per target keyword. Several of these keywords are close variants of
// each other, so each page is deliberately written from a DIFFERENT angle —
// different reader, different five questions, different module emphasis and a
// different FAQ — rather than being the same page with the phrase swapped.
// The `angle` field records that intent so it stays obvious when editing.
//
// Every capability named here is visible in the product screenshots under
// public/travel-crm/images. No outcome claims appear on any page; sample
// figures inside mock screens are [bracketed], per data/content.js convention.

// Feature rows live in data/travel.js and are shared. `featureOrder` reorders
// them per page so the module that matters most to that reader leads.
export const ROW = {
  TRIPS: '01',
  QUOTES: '02',
  BOOKINGS: '03',
  ACCOUNTS: '04',
  DASHBOARD: '05',
}

const contact = {
  call: '+91 94227 99466',
  whatsapp: '+91 91645 66466',
}

export const travelPages = {
  // -------------------------------------------------------------------------
  'travel-crm': {
    keyword: 'travel crm',
    angle: 'Flagship. The owner’s daily decisions, answered by the modules.',
    metaTitle: 'Travel CRM for Tour Operators & DMCs | NNC Travel CRM',
    metaDescription:
      'A travel CRM for tour operators and DMCs: trip pipeline, quotes, vouchers and payments in one workspace. Rs. 590 per user per month, minimum 10 users.',
    pill: 'Travel CRM | for tour operators and DMCs',
    h1: { lines: ['Your travel CRM,', 'every decision'], tail: '', underline: 'on one screen' },
    lead: 'A travel CRM built around trips, not deals. Bookings, accounting and tasks sit beside the pipeline, with the quotes, vouchers, payments and numbers behind them, so the next move is on the screen rather than in someone’s head. Built and supported in India by Nakshatra Namaha Creations.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['reuse the quote that won', 'who still owes you'],
    decisions: {
      kicker: 'DECISIONS, NOT DATA DUMPS',
      titleLines: ['Every morning starts with', 'the same five questions'],
      lead: 'Your team already has the answers somewhere, in a chat, a notebook or someone’s memory. NNC Travel CRM keeps each one a click away, on the screen they work in all day.',
      cap: 'WHERE EACH ONE IS ANSWERED',
      note: 'answered, not filed',
    },
    inside: {
      kicker: 'WHAT’S INSIDE',
      title: 'Everything in the travel CRM',
      lead: 'This is the whole product, not a starter tier. Every line below is in the CRM your team logs into on day one.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'The screens behind each answer' },
    builtFor: { title: 'Made for teams that sell travel every day' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
  },

  // -------------------------------------------------------------------------
  'travel-crm-software': {
    keyword: 'travel crm software',
    angle: 'Software buyer: how it is delivered, accessed, administered and exited.',
    metaTitle: 'Travel CRM Software | Cloud CRM for Travel | NNC',
    metaDescription:
      'Cloud travel CRM software on your own branded workspace. Nothing to install, a login per user, CSV import and export, and your data stays yours.',
    pill: 'Travel CRM software | cloud, browser based',
    h1: { lines: ['Travel CRM', 'software, open'], tail: '', underline: 'in a browser' },
    lead: 'Travel CRM software with no server to buy, nothing to install and no per-machine licences. Your workspace runs at your own address, every user gets their own login, and the data inside it stays yours. Built and supported in India by Nakshatra Namaha Creations.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['your own address', 'a login per user'],
    decisions: {
      kicker: 'BEFORE YOU BUY SOFTWARE',
      titleLines: ['The five questions', 'every buyer asks us'],
      lead: 'Not what it does — how it is delivered, who can get into it, and what happens to your data. Here is the straight answer to each.',
      cap: 'WHERE EACH ONE IS ANSWERED',
      note: 'no server required',
      items: [
        {
          icon: 'Globe',
          q: 'What do we actually install?',
          where: 'DELIVERY · CLOUD WORKSPACE',
          a: 'Nothing. It runs in the browser at your own workspace address, so any machine your team already has will do.',
        },
        {
          icon: 'Users',
          q: 'Who gets access, and to what?',
          where: 'SETTINGS · USERS',
          a: 'A login for every user, with sales, operations and accounts each working in their own screens.',
        },
        {
          icon: 'Upload',
          q: 'Can we bring our existing data in?',
          where: 'TRIPS · UPLOAD CSV',
          a: 'Upload a CSV of your existing enquiries, and we load your hotels, transport and sightseeing during setup.',
        },
        {
          icon: 'FileSpreadsheet',
          q: 'Can we get our data back out?',
          where: 'ACCOUNTING · DOWNLOAD',
          a: 'Lists download from the CRM, and quotes, vouchers and invoices are all exportable as PDFs.',
        },
        {
          icon: 'Receipt',
          q: 'What does it cost as we grow?',
          where: 'PRICING · PER USER',
          a: 'Rs. 590 per user per month plus GST, minimum 10 users. Add a user, add Rs. 590. No module upsells.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT THE SOFTWARE INCLUDES',
      title: 'What the travel CRM software includes',
      lead: 'Every module below is in the licence. There is no paid add-on tier and no per-feature pricing.',
    },
    features: { kicker: 'SCREEN BY SCREEN', title: 'What your team will be working in' },
    builtFor: { title: 'Travel businesses that have outgrown spreadsheets' },
    cta: { lines: ['Try the software on'], underline: 'your own trips' },
    faq: [
      {
        q: 'Do we need to install anything?',
        a: 'No. NNC Travel CRM is cloud software. Your team opens it in a browser at your own workspace address, on whatever computers you already have.',
      },
      {
        q: 'Is it a one-time licence or a subscription?',
        a: 'A subscription: Rs. 590 per user per month plus 18% GST, with a minimum of 10 users. That is Rs. 6,962 a month for 10 users including GST.',
      },
      {
        q: 'Can we import the data we already have?',
        a: 'Yes. Upload a CSV of existing enquiries, and during setup we load your hotels, transport and sightseeing for you.',
      },
      {
        q: 'Can we export our data later?',
        a: 'Yes. Lists can be downloaded from the CRM, and quotes, vouchers and invoices are all available as PDFs.',
      },
      {
        q: 'Who owns the data?',
        a: 'Your data stays yours.',
      },
      {
        q: 'Do you help with setup and training?',
        a: 'Yes. We set up your workspace, load your masters and train your sales, operations and accounts teams before you go live.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-agency-crm': {
    keyword: 'travel agency crm',
    angle: 'Agency owner running a multi-counter desk: who owns what, how each counter performs.',
    metaTitle: 'Travel Agency CRM | An Owner on Every Enquiry | NNC',
    metaDescription:
      'A travel agency CRM that gives every enquiry an owner and every counter a number. Pipeline, quotes, vouchers and payments in one shared workspace.',
    pill: 'Travel agency CRM | for agency desks',
    h1: { lines: ['Travel agency', 'CRM that gives'], tail: '', underline: 'leads an owner' },
    lead: 'A travel agency CRM where walk-ins, calls and WhatsApp messages land in one pipeline, each assigned to a counter with a follow-up date. You can see who is carrying what, and which of your people are converting. Built and supported in India by Nakshatra Namaha Creations.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['every counter accounted for', 'nothing left to memory'],
    decisions: {
      kicker: 'RUNNING AN AGENCY DESK',
      titleLines: ['Five things an agency owner', 'needs to see every day'],
      lead: 'When enquiries arrive at several counters from several channels, the hard part is not selling. It is knowing who has what, and what has gone quiet.',
      cap: 'WHERE EACH ONE IS ANSWERED',
      note: 'one shared desk',
      items: [
        {
          icon: 'Users',
          q: 'Who is handling this enquiry?',
          where: 'TRIPS · SALES PERSON',
          a: 'Every trip carries the name of the counter staff who owns it, so two people never chase the same guest and nobody assumes someone else has it.',
        },
        {
          icon: 'Bell',
          q: 'What has gone quiet this week?',
          where: 'TRIPS · FOLLOW-UP DATE',
          a: 'Each trip carries its next follow-up date, and the dashboard lists what is due today, yesterday and over the next 7 days.',
        },
        {
          icon: 'LayoutDashboard',
          q: 'How is the desk actually doing?',
          where: 'DASHBOARD · TRIP SALES STATS',
          a: 'Leads, quotes, revenue and conversion for today, this week or this month, so a slow patch shows up while you can still act.',
        },
        {
          icon: 'ListChecks',
          q: 'What is sitting in each stage?',
          where: 'TRIPS · STAGE COUNTS',
          a: 'New query, in progress, converted, on trip, past, canceled and dropped, each with a count you can click into.',
        },
        {
          icon: 'Wallet',
          q: 'Which bookings are still unpaid?',
          where: 'ACCOUNTING · OVERDUE',
          a: 'Upcoming, overdue, unverified and paid, each tied to the booking and guest, so collection is a list and not a memory test.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT YOUR AGENCY GETS',
      title: 'What the travel agency CRM holds',
      lead: 'Your whole counter works from the same records, so a colleague picking up a guest mid-conversation sees everything already said.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'The screens your counter works in' },
    featureOrder: [ROW.TRIPS, ROW.DASHBOARD, ROW.QUOTES, ROW.ACCOUNTS, ROW.BOOKINGS],
    builtFor: { title: 'Made for agencies that sell travel every day' },
    cta: { lines: ['See it running on'], underline: 'your own counter' },
    faq: [
      {
        q: 'Can I see what each of my staff is working on?',
        a: 'Yes. Every trip shows its sales person, status and next follow-up date, and each trip carries an activities log and a comments thread.',
      },
      {
        q: 'We get enquiries on WhatsApp, calls and walk-ins. Does that work?',
        a: 'Yes. Any enquiry can be added as a query by hand, and you can upload a CSV of lists you already keep. From the trip page your staff can WhatsApp the guest directly.',
      },
      {
        q: 'What does a travel agency CRM cost?',
        a: 'Rs. 590 per user per month plus 18% GST, with a minimum of 10 users. The starting plan is Rs. 6,962 a month for 10 users, including GST.',
      },
      {
        q: 'Will quotes carry my agency’s brand?',
        a: 'Yes. Your logo and contact details appear on every quote and voucher, and you choose whether vouchers show prices, branding, terms and bank details.',
      },
      {
        q: 'Can I add counters later?',
        a: 'Yes. Each extra user is Rs. 590 plus GST per month.',
      },
      {
        q: 'Who owns the data?',
        a: 'Your data stays yours.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-agency-crm-software': {
    keyword: 'travel agency crm software',
    angle: 'Agency rollout: getting a whole agency team onto it without stopping work.',
    metaTitle: 'Travel Agency CRM Software | Set Up and Live | NNC',
    metaDescription:
      'Travel agency CRM software with your branding, your hotels and your existing leads loaded, and every counter trained before you go live.',
    pill: 'Travel agency CRM software | set up for you',
    h1: { lines: ['Travel agency', 'CRM software,'], tail: '', underline: 'set up for you' },
    lead: 'The hard part of travel agency CRM software is not the software, it is the week you switch. We set up your branded workspace, load your hotels and existing leads, and train sales, operations and accounts before you run a live trip on it.',
    secondaryCta: { label: 'See the four steps', href: '#how' },
    heroNotes: ['loaded before you start', 'everyone trained'],
    decisions: {
      kicker: 'THE SWITCH, NOT THE SOFTWARE',
      titleLines: ['Five things that decide', 'whether a rollout sticks'],
      lead: 'Most CRM projects fail in the first fortnight, not the first demo. These are the five we handle for you before your team is expected to use it.',
      cap: 'HOW EACH ONE IS HANDLED',
      note: 'we do the loading',
      items: [
        {
          icon: 'Upload',
          q: 'What happens to our existing leads?',
          where: 'STEP 3 · CSV IMPORT',
          a: 'They come with you. Upload a CSV of the enquiries you already keep, and add anything else by hand.',
        },
        {
          icon: 'Hotel',
          q: 'Who enters all our hotels and rates?',
          where: 'STEP 3 · MASTERS LOADED',
          a: 'We do, during setup: hotels with room types and meal plans, plus transport and sightseeing by location.',
        },
        {
          icon: 'Palette',
          q: 'Will it look like our agency?',
          where: 'STEP 2 · YOUR WORKSPACE',
          a: 'Your logo and contact details go on quotes and vouchers, at your own workspace address, before anything goes out.',
        },
        {
          icon: 'Users',
          q: 'Will the counter staff actually use it?',
          where: 'STEP 4 · TEAM TRAINED',
          a: 'Sales, operations and accounts are each trained on their own screens, not given one generic walkthrough.',
        },
        {
          icon: 'Headset',
          q: 'What if something breaks after go-live?',
          where: 'SUPPORT · IN INDIA',
          a: 'We built it and we support it, from Bengaluru, Mumbai, Mysuru and Hyderabad. Call ' + contact.call + ' or WhatsApp ' + contact.whatsapp + '.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT GETS SET UP',
      title: 'What the travel agency CRM software sets up',
      lead: 'Everything below is loaded, branded and tested with your own data before your team is asked to work in it.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'What your agency will be working in' },
    builtFor: { title: 'Agencies moving off spreadsheets for the first time' },
    cta: { lines: ['Plan the switch for'], underline: 'your own agency' },
    faq: [
      {
        q: 'How long does setup take?',
        a: 'Four steps: a live demo, your branded workspace, your data loaded, then training and go-live. We size the timeline with you on the demo call.',
      },
      {
        q: 'Do you load our hotels and rates, or do we?',
        a: 'We do, as part of setup. Hotels with room types and meal plans, plus transport and sightseeing by location.',
      },
      {
        q: 'Can we keep working while we switch?',
        a: 'Yes. Your existing enquiries come across by CSV, so you can carry live trips over rather than starting empty.',
      },
      {
        q: 'Who trains the team?',
        a: 'We do. Sales, operations and accounts are each trained on the screens they will actually use.',
      },
      {
        q: 'What does it cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users. That is Rs. 6,962 a month for 10 users including GST.',
      },
      {
        q: 'Who do we call when something goes wrong?',
        a: 'Us. NNC Travel CRM is built and supported in India by Nakshatra Namaha Creations, with offices in Bengaluru, Mumbai, Mysuru and Hyderabad.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'crm-for-travel-agencies': {
    keyword: 'crm for travel agencies',
    angle: 'Comparison: spreadsheets vs a generic CRM vs a travel-specific one.',
    metaTitle: 'CRM for Travel Agencies | Built Around Trips | NNC',
    metaDescription:
      'A CRM for travel agencies, not one adapted from somewhere else: hotel and transfer masters, day-wise itineraries, vouchers and GST invoices as standard.',
    pill: 'CRM for travel agencies | built for trips',
    h1: { lines: ['A CRM for travel', 'agencies, built'], tail: '', underline: 'around trips' },
    lead: 'Generic CRMs track deals. A CRM for travel agencies has to hold nights, transfers, meal plans and ferries, then voucher and invoice all of it. This one is built around that, so you are not bending a sales tool into a trip.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['nights, not deal stages', 'vouchers as standard'],
    decisions: {
      kicker: 'WHAT A GENERIC CRM MAKES YOU BUILD',
      titleLines: ['Five things travel needs', 'that most CRMs do not have'],
      lead: 'You can force a general-purpose CRM to hold a travel enquiry. What it will not hold is everything that has to happen after the guest says yes.',
      cap: 'WHERE EACH ONE LIVES HERE',
      note: 'already in the box',
      items: [
        {
          icon: 'Hotel',
          q: 'Where do hotels and room types live?',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'In a hotel master with photos, star rating, room types, meal plans (CP, MAP, AP), check-in and check-out times and child extra-bed age.',
        },
        {
          icon: 'Bus',
          q: 'What about ferries, cabs and sightseeing?',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Saved by location once and pulled into any quote, instead of being retyped into a notes field each time.',
        },
        {
          icon: 'RefreshCw',
          q: 'How do we quote a five-night package?',
          where: 'TRIPS · NEW QUOTE',
          a: 'As a day-wise itinerary with hotels, transfers and activities priced per day — or by reusing one you already sent for that destination.',
        },
        {
          icon: 'Ticket',
          q: 'Who generates the vouchers?',
          where: 'BOOKINGS · VOUCHERS',
          a: 'The CRM does, from the booking: trip, hotel and activity vouchers, with prices, branding and terms shown or hidden.',
        },
        {
          icon: 'Receipt',
          q: 'And the GST invoice?',
          where: 'ACCOUNTING · INVOICES',
          a: 'Raised against a logged payment, with proforma invoices before payment and a profit report per trip after it.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT’S INSIDE',
      title: 'What a CRM for travel agencies needs',
      lead: 'None of the below is a custom field you have to configure. It is how the product is built.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Built around trips, not deals' },
    featureOrder: [ROW.BOOKINGS, ROW.QUOTES, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    builtFor: { title: 'Agencies that sell packages, not products' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
    faq: [
      {
        q: 'Why not just use a general purpose CRM?',
        a: 'You can hold an enquiry in one. What a general CRM will not do is keep a hotel master with meal plans and room types, build a day-wise itinerary, generate trip and hotel vouchers, or raise a GST invoice against an instalment. Those are all standard here.',
      },
      {
        q: 'Can it handle multi-night packages with ferries and transfers?',
        a: 'Yes. Quotes are built day by day with hotels, transfers, activities and sightseeing, and transport is saved by location so it can be reused.',
      },
      {
        q: 'Do we still need separate invoicing software?',
        a: 'No. Receipts, GST invoices and proforma invoices are raised inside the CRM, against the booking they belong to.',
      },
      {
        q: 'Will quotes and vouchers carry our brand?',
        a: 'Yes. Your logo and contact details appear on quotes and vouchers, and you choose whether vouchers show prices, branding, terms and bank details.',
      },
      {
        q: 'What does it cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users, which is Rs. 6,962 a month for 10 users including GST.',
      },
      {
        q: 'Can we bring our existing enquiries across?',
        a: 'Yes. Upload a CSV of existing enquiries, or add new queries by hand.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-agent-crm': {
    keyword: 'travel agent crm',
    angle: 'The individual agent’s day, first person — not the owner’s view.',
    metaTitle: 'Travel Agent CRM | Your Day, End to End | NNC',
    metaDescription:
      'A travel agent CRM that opens on what you owe people today: follow-ups due, quotes to send, payments to chase, and the guest a WhatsApp away.',
    pill: 'Travel agent CRM | for the people selling',
    h1: { lines: ['Travel agent CRM', 'that opens on'], tail: '', underline: 'what you owe' },
    lead: 'A travel agent CRM built for the person selling, not a report for management. The trips that are yours, the follow-ups that are due, the quote you can reuse and the guest you can message without leaving the page.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['the trips that are yours', 'message from the trip page'],
    decisions: {
      kicker: 'YOUR DAY, IN ORDER',
      titleLines: ['Five moments in a', 'travel agent’s day'],
      lead: 'Every one of these happens before lunch. Here is where the CRM meets you in each.',
      cap: 'WHERE EACH ONE HAPPENS',
      note: 'all in one tab',
      items: [
        {
          icon: 'Bell',
          q: '9 am. Who am I supposed to call back?',
          where: 'DASHBOARD · PENDING FOLLOW-UPS',
          a: 'Follow-ups due today and yesterday, plus the next 7 days, each one already against your name.',
        },
        {
          icon: 'RefreshCw',
          q: '10 am. They want Andaman, five nights.',
          where: 'TRIPS · NEW QUOTE',
          a: 'Search what you sent for that destination before and start from its day-wise plan, hotels, ferries and price.',
        },
        {
          icon: 'MessageCircle',
          q: '11 am. They asked on WhatsApp.',
          where: 'TRIPS · TRIP PAGE',
          a: 'WhatsApp the guest straight from the trip page, or print, email or download the quote as a PDF.',
        },
        {
          icon: 'Wallet',
          q: '3 pm. Did their advance come in?',
          where: 'ACCOUNTING · INSTALMENTS',
          a: 'Part payments are logged against the booking with the balance beside them, so you can see it without asking accounts.',
        },
        {
          icon: 'CalendarCheck',
          q: '5 pm. Who flies tomorrow?',
          where: 'DASHBOARD · TRIPS STARTING',
          a: 'Trips starting and ending, today and over the next 7 days, so pickups and check-ins are sorted before you leave.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT YOU GET',
      title: 'What the travel agent CRM gives you',
      lead: 'You will live in Trips. The other three are there when the guest says yes.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'The screens you will actually use' },
    featureOrder: [ROW.TRIPS, ROW.QUOTES, ROW.ACCOUNTS, ROW.BOOKINGS, ROW.DASHBOARD],
    builtFor: { title: 'For the people who sell the trips' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
    faq: [
      {
        q: 'Will I only see my own trips?',
        a: 'Every trip carries the sales person who owns it, and you can filter to yours. The stage counts and lists make it easy to work only from what is assigned to you.',
      },
      {
        q: 'Can I message the guest from the CRM?',
        a: 'Yes. There is a WhatsApp action on the trip page, and quotes can be printed, emailed or downloaded as a PDF.',
      },
      {
        q: 'Do I have to build every quote from scratch?',
        a: 'No. The trip page suggests past quotes for the same destination, with the day-wise plan, hotels, transfers and price already in place.',
      },
      {
        q: 'How do I remember follow-ups?',
        a: 'Each trip carries a follow-up date, and the dashboard lists what is pending today, yesterday and over the next 7 days.',
      },
      {
        q: 'Can I see whether a guest has paid?',
        a: 'Yes. Instalments are logged against the booking with the balance, and payments are marked upcoming, overdue, unverified or paid.',
      },
      {
        q: 'Do I need training?',
        a: 'We train sales, operations and accounts on their own screens as part of setup, before you go live.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-agent-software': {
    keyword: 'travel agent software',
    angle: 'Tool consolidation — what this one login replaces.',
    metaTitle: 'Travel Agent Software | One Login, Not Six Tools | NNC',
    metaDescription:
      'Travel agent software covering enquiries, quotes, itineraries, hotel masters, vouchers, receipts and GST invoices in one place, on one login.',
    pill: 'Travel agent software | one login',
    h1: { lines: ['Travel agent', 'software, in'], tail: '', underline: 'one login' },
    lead: 'Travel agent software that keeps the enquiry list, the quote, the itinerary, the hotel rates, the voucher and the GST invoice on the same record, instead of in six different files. Nothing has to be retyped between them.',
    secondaryCta: { label: 'See what it replaces', href: '#inside' },
    heroNotes: ['one record, not six files', 'nothing retyped'],
    decisions: {
      kicker: 'WHAT IT REPLACES',
      titleLines: ['Five jobs, five tools,', 'now one record'],
      lead: 'Each of these is usually a separate file, app or notebook. Every one of them is a screen in here, pointed at the same trip.',
      cap: 'WHERE EACH JOB MOVES TO',
      note: 'stop retyping',
      items: [
        {
          icon: 'FileSpreadsheet',
          q: 'The enquiry spreadsheet',
          where: 'TRIPS · PIPELINE',
          a: 'Becomes a pipeline with seven stages, an owner, a follow-up date and tags on every row, searchable by trip id, guest or phone.',
        },
        {
          icon: 'Palette',
          q: 'The quote you rebuild in a document',
          where: 'TRIPS · NEW QUOTE',
          a: 'Becomes a branded quote built from a past itinerary or day by day, ready to print, email, PDF or WhatsApp.',
        },
        {
          icon: 'Hotel',
          q: 'The hotel rate sheet',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Becomes a master with room types, meal plans, check-in and check-out times and child extra-bed age, reusable on every quote.',
        },
        {
          icon: 'Ticket',
          q: 'The voucher you format by hand',
          where: 'BOOKINGS · VOUCHERS',
          a: 'Generates from the booking, as trip, hotel and activity vouchers, with prices and terms shown or hidden.',
        },
        {
          icon: 'Receipt',
          q: 'The invoice book',
          where: 'ACCOUNTING · GST INVOICES',
          a: 'Becomes receipts and GST invoices raised against logged payments, with proforma invoices before and a profit report after.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT’S IN THE ONE LOGIN',
      title: 'What the travel agent software replaces',
      lead: 'There is no document tier, no invoicing tier and no reporting tier. It is all one licence.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Every job, on the same record' },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.ACCOUNTS, ROW.TRIPS, ROW.DASHBOARD],
    builtFor: { title: 'Agents juggling too many files' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
    faq: [
      {
        q: 'What does this replace?',
        a: 'The enquiry spreadsheet, the quote document, the itinerary file, the hotel rate sheet, the hand-formatted voucher and the invoice book. All of them become screens against the same trip record.',
      },
      {
        q: 'Do we still need separate invoicing software?',
        a: 'No. Receipts, GST invoices and proforma invoices are raised inside the CRM against the booking.',
      },
      {
        q: 'Does it make documents we can send to guests?',
        a: 'Yes. Branded quotes and trip, hotel and activity vouchers, which you can print, email, download as PDF or WhatsApp from the trip page.',
      },
      {
        q: 'Is there a per-document or per-module charge?',
        a: 'No. Rs. 590 per user per month plus 18% GST, minimum 10 users, covers everything.',
      },
      {
        q: 'Can we move our rate sheets in?',
        a: 'Yes. We load your hotels, transport and sightseeing during setup, and you can upload existing enquiries as a CSV.',
      },
      {
        q: 'Who owns the data?',
        a: 'Your data stays yours.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-management-software': {
    keyword: 'travel management software',
    angle: 'Operations management across many live trips at once.',
    metaTitle: 'Travel Management Software | Every Live Trip | NNC',
    metaDescription:
      'Travel management software for tour operators and DMCs: manage every live trip, supplier, voucher and payment in one workspace. For travel sellers.',
    pill: 'Travel management software | for travel sellers',
    h1: { lines: ['Travel', 'management'], tail: '', underline: 'software for trips' },
    lead: 'Travel management software for what happens after the sale: the nights, transfers and activities that have to be arranged, the vouchers that go to suppliers, the payments that come in, and the margin that is left at the end.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['what is running today', 'what it earned'],
    decisions: {
      kicker: 'MANAGING WHAT IS ALREADY SOLD',
      titleLines: ['Five things to manage', 'once the guest says yes'],
      lead: 'Selling the trip is the short part. These five are what the rest of the month is actually made of.',
      cap: 'WHERE EACH ONE IS MANAGED',
      note: 'after the sale',
      items: [
        {
          icon: 'CalendarCheck',
          q: 'What is starting and ending today?',
          where: 'DASHBOARD · TRIPS STARTING',
          a: 'Trips starting and ending for today and the next 7 days, so pickups, check-ins and feedback calls are planned in advance.',
        },
        {
          icon: 'Hotel',
          q: 'Are the hotels and transfers confirmed?',
          where: 'BOOKINGS · MASTERS',
          a: 'Hotels with room types and meal plans, and transport and sightseeing by location, held against the booking rather than in a chat.',
        },
        {
          icon: 'Ticket',
          q: 'Has everyone been vouchered?',
          where: 'BOOKINGS · VOUCHERS',
          a: 'Trip, hotel and activity vouchers generated from the booking, with prices, branding and terms shown or hidden per recipient.',
        },
        {
          icon: 'Wallet',
          q: 'What is still to collect?',
          where: 'ACCOUNTING · INCOMING PAYMENTS',
          a: 'Upcoming, overdue, unverified and paid, with instalments logged against each booking and the balance visible.',
        },
        {
          icon: 'FileText',
          q: 'What did the month actually earn?',
          where: 'ACCOUNTING · PROFIT REPORT',
          a: 'What each trip billed against what it cost, so margin is a number per booking and not a guess at month end.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT YOU MANAGE IN IT',
      title: 'What the travel management software runs',
      lead: 'Sales, operations and accounts work from the same trips, so nothing has to be handed over as a message.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'The screens that run the operation' },
    featureOrder: [ROW.DASHBOARD, ROW.BOOKINGS, ROW.ACCOUNTS, ROW.TRIPS, ROW.QUOTES],
    builtFor: { title: 'Operations teams running many trips at once' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
    faq: [
      {
        q: 'Is this corporate travel management software?',
        a: 'No. This is for businesses that sell travel — tour operators, DMCs and travel agencies. It manages the trips you sell to guests, not employee travel booking or expense claims for a corporate travel desk.',
      },
      {
        q: 'Can operations and sales work in the same system?',
        a: 'Yes. Sales, operations and accounts each get their own logins and screens, working from the same trips, bookings and payments.',
      },
      {
        q: 'How do we track what is running right now?',
        a: 'The dashboard lists trips starting and ending for today and the next 7 days, alongside pending follow-ups and payments due.',
      },
      {
        q: 'Does it handle supplier documents?',
        a: 'Vouchers are generated from the booking for trips, hotels and activities, and you control whether each shows prices, branding and terms.',
      },
      {
        q: 'Can we see profitability per trip?',
        a: 'Yes. There is a profit report per trip, plus proforma invoices, receipts and GST invoices in the accounting module.',
      },
      {
        q: 'What does it cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users, which is Rs. 6,962 a month for 10 users including GST.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'tour-operator-crm': {
    keyword: 'tour operator crm',
    angle: 'Operator economics: multi-night packages, cost build-up, margin per departure.',
    metaTitle: 'Tour Operator CRM | See the Margin on Every Trip | NNC',
    metaDescription:
      'A tour operator CRM for multi-night packages: day-wise itineraries, hotel and ferry costs, instalments and a profit report on every trip.',
    pill: 'Tour operator CRM | for package sellers',
    h1: { lines: ['A tour operator', 'CRM that shows'], tail: '', underline: 'the margin' },
    lead: 'A tour operator does not sell a product, it assembles one: nights, ferries, cabs and activities, priced together. This tour operator CRM holds the whole build-up, from the first quote to what the trip actually earned.',
    secondaryCta: { label: 'See what’s inside', href: '#inside' },
    heroNotes: ['built from real costs', 'margin per departure'],
    decisions: {
      kicker: 'THE OPERATOR’S MATHS',
      titleLines: ['Five questions behind', 'every package you sell'],
      lead: 'Package selling lives and dies on what went into the price. These are the five the CRM is built to answer.',
      cap: 'WHERE EACH ONE IS ANSWERED',
      note: 'costs, not guesses',
      items: [
        {
          icon: 'RefreshCw',
          q: 'What did we quote last time for this?',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'Past quotes for the same destination come up on the trip page with their day-wise plan, hotels, ferries and price.',
        },
        {
          icon: 'Hotel',
          q: 'What do the nights actually cost?',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Room types, meal plans (CP, MAP, AP), check-in and check-out times and child extra-bed age, held per hotel.',
        },
        {
          icon: 'Bus',
          q: 'And the ferries and transfers?',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Transport and sightseeing saved by location, pulled into the quote instead of being priced by hand each time.',
        },
        {
          icon: 'Wallet',
          q: 'How much of it has been paid?',
          where: 'ACCOUNTING · INSTALMENTS',
          a: 'Part payments logged against the booking with the balance beside them, and a status of upcoming, overdue, unverified or paid.',
        },
        {
          icon: 'FileText',
          q: 'What was left at the end?',
          where: 'ACCOUNTING · PROFIT REPORT',
          a: 'What the trip billed against what it cost, per booking, so a thin departure is visible before you repeat it.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT’S INSIDE',
      title: 'What the tour operator CRM holds',
      lead: 'Everything that goes into a departure, and everything that comes out of it, against the same trip.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'From first enquiry to final margin' },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.ACCOUNTS, ROW.TRIPS, ROW.DASHBOARD],
    builtFor: { title: 'Operators who assemble every trip they sell' },
    cta: { lines: ['See it running on'], underline: 'your own packages' },
    faq: [
      {
        q: 'Can it handle multi-night packages?',
        a: 'Yes. Quotes are built day by day, with hotels per night, transfers, activities and sightseeing, and you can start from a past itinerary for the same destination.',
      },
      {
        q: 'Can we see the margin on a trip?',
        a: 'Yes. There is a profit report per trip, showing what the trip billed against what it cost.',
      },
      {
        q: 'How do we handle part payments?',
        a: 'Instalments are logged against each booking with the running balance, and each payment shows as upcoming, overdue, unverified or paid.',
      },
      {
        q: 'Does it store our ferry and cab rates?',
        a: 'Yes. Transport and sightseeing are saved by location once and pulled into any quote.',
      },
      {
        q: 'Will vouchers go out under our brand?',
        a: 'Yes. Trip, hotel and activity vouchers are generated from the booking, and you choose whether each shows prices, branding, terms and bank details.',
      },
      {
        q: 'What does a tour operator CRM cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users. That is Rs. 6,962 a month for 10 users including GST.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'tour-operator-crm-software': {
    keyword: 'tour operator crm software',
    angle: 'Inventory and supplier operations — the masters that make quoting fast.',
    metaTitle: 'Tour Operator CRM Software | Inventory Once | NNC',
    metaDescription:
      'Tour operator CRM software with hotel, transport and sightseeing masters, day-wise quoting and vouchers generated from the booking. Set up once.',
    pill: 'Tour operator CRM software | inventory first',
    h1: { lines: ['Tour operator CRM', 'software, your'], tail: '', underline: 'inventory inside' },
    lead: 'Quoting is slow because the hotels, ferries and activities live in someone’s head or a rate sheet. Tour operator CRM software fixes that: put them in once, with rooms, meal plans and timings, and every quote after that is assembly.',
    secondaryCta: { label: 'See the masters', href: '#inside' },
    heroNotes: ['entered once', 'reused on every quote'],
    decisions: {
      kicker: 'THE MASTERS BEHIND FAST QUOTING',
      titleLines: ['Five things worth', 'entering only once'],
      lead: 'Each of these is data your team currently retypes for every enquiry. In the CRM each is a master record that every future quote can draw on.',
      cap: 'WHERE EACH ONE IS STORED',
      note: 'type it once',
      items: [
        {
          icon: 'Hotel',
          q: 'Hotels, rooms and meal plans',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Photos, star rating, location, room types, meal plans (CP, MAP, AP), check-in and check-out times and child extra-bed age.',
        },
        {
          icon: 'Bus',
          q: 'Ferries, cabs and sightseeing',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Saved against a destination, then pulled into any quote for that destination without being re-priced.',
        },
        {
          icon: 'RefreshCw',
          q: 'The itineraries that already sell',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'Past quotes stay searchable by trip id or guest, so a proven day-wise plan becomes the base for the next one.',
        },
        {
          icon: 'Ticket',
          q: 'Voucher formats and terms',
          where: 'BOOKINGS · VOUCHERS',
          a: 'Trip, hotel and activity vouchers generate from the booking, with prices, branding and terms shown or hidden as you set them.',
        },
        {
          icon: 'Palette',
          q: 'Your branding on documents',
          where: 'SETTINGS · BRANDING',
          a: 'Logo and contact details applied to every quote and voucher, so nothing goes out looking improvised.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT THE SOFTWARE HOLDS',
      title: 'What the tour operator CRM software stores',
      lead: 'The masters below are loaded for you during setup, so your team starts with a full catalogue rather than an empty one.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Inventory in, quotes out' },
    featureOrder: [ROW.BOOKINGS, ROW.QUOTES, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    builtFor: { title: 'Operators who quote the same destinations daily' },
    cta: { lines: ['See it running on'], underline: 'your own inventory' },
    faq: [
      {
        q: 'Who enters our hotels and rates?',
        a: 'We do, during setup. Hotels with room types and meal plans, plus transport and sightseeing by location, are loaded before you go live.',
      },
      {
        q: 'What does the hotel master hold?',
        a: 'Photos, star rating, location, room types, meal plans (CP, MAP, AP), check-in and check-out times, child extra-bed age and payment preference.',
      },
      {
        q: 'Can we reuse a past itinerary?',
        a: 'Yes. The trip page suggests previous quotes for the same destination, and you can start from one with its plan, hotels, transfers and price already in place.',
      },
      {
        q: 'Are vouchers generated automatically?',
        a: 'They are generated from the booking, as trip, hotel and activity vouchers, and you choose whether each shows prices, branding and terms.',
      },
      {
        q: 'Can we add destinations later?',
        a: 'Yes. Hotels, transport and sightseeing can be added at any time, and new services are saved by location.',
      },
      {
        q: 'What does it cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users, which is Rs. 6,962 a month for 10 users including GST.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'crm-for-tour-operators': {
    keyword: 'crm for tour operators',
    angle: 'What changes in the first month — a before/after of the working week.',
    metaTitle: 'CRM for Tour Operators | Live in Four Steps | NNC',
    metaDescription:
      'A CRM for tour operators, set up with your hotels, transport and existing leads, and your team trained before go-live. See what changes week by week.',
    pill: 'CRM for tour operators | live in four steps',
    h1: { lines: ['A CRM for tour', 'operators, on'], tail: '', underline: 'your own trips' },
    lead: 'A CRM for tour operators that arrives loaded, not empty. We bring in your hotels, transport and existing enquiries, brand your quotes and vouchers, and train your team on the screens they will actually use.',
    secondaryCta: { label: 'See the four steps', href: '#how' },
    heroNotes: ['your data, not demo data', 'trained before go-live'],
    decisions: {
      kicker: 'WHAT ACTUALLY CHANGES',
      titleLines: ['Five habits that change', 'in the first month'],
      lead: 'Not features — working habits. This is what a tour operator’s week looks like once the CRM is carrying it.',
      cap: 'WHERE EACH ONE CHANGES',
      note: 'week one onwards',
      items: [
        {
          icon: 'ListChecks',
          q: 'Chasing a list, not a memory',
          where: 'TRIPS · STAGES AND FOLLOW-UPS',
          a: 'Enquiries sit in seven named stages with an owner and a follow-up date, instead of being spread across chats and notebooks.',
        },
        {
          icon: 'RefreshCw',
          q: 'Quoting in minutes, not evenings',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'The second Andaman enquiry of the week starts from the first one, rather than being priced again from scratch.',
        },
        {
          icon: 'Ticket',
          q: 'Vouchers that generate themselves',
          where: 'BOOKINGS · VOUCHERS',
          a: 'Trip, hotel and activity vouchers come from the booking, so nobody is formatting one by hand the night before departure.',
        },
        {
          icon: 'Wallet',
          q: 'Collections as a list',
          where: 'ACCOUNTING · OVERDUE',
          a: 'Overdue, upcoming and unverified payments are a screen someone can work through, not a question asked at month end.',
        },
        {
          icon: 'LayoutDashboard',
          q: 'A morning number, every morning',
          where: 'DASHBOARD · TRIP SALES STATS',
          a: 'Revenue, leads, quotes and conversion for today, this week or this month, in the same place every day.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT YOU GO LIVE WITH',
      title: 'What a CRM for tour operators ships with',
      lead: 'By go-live these are not empty screens. Your hotels, transport, sightseeing and existing enquiries are already in them.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'The screens your week moves into' },
    builtFor: { title: 'Tour operators making the move' },
    cta: { lines: ['See it running on'], underline: 'your own trips' },
    faq: [
      {
        q: 'How do we get started?',
        a: 'Four steps: a live demo using trips like the ones you sell, your branded workspace, your data loaded, then training and go-live.',
      },
      {
        q: 'Will the demo use our kind of trips?',
        a: 'Yes. We walk your team through the CRM using trips like the ones you actually sell, rather than a generic sample.',
      },
      {
        q: 'Do we start with an empty system?',
        a: 'No. We load your hotels, transport and sightseeing, and you can upload a CSV of existing enquiries, so you go live with your own data.',
      },
      {
        q: 'How long until the team is comfortable?',
        a: 'Sales, operations and accounts are each trained on their own screens before go-live. We size the timeline with you on the demo call.',
      },
      {
        q: 'What does it cost?',
        a: 'Rs. 590 per user per month plus 18% GST, minimum 10 users, which is Rs. 6,962 a month for 10 users including GST.',
      },
      {
        q: 'Who supports us afterwards?',
        a: 'Nakshatra Namaha Creations, from Bengaluru, Mumbai, Mysuru and Hyderabad. Call ' + contact.call + ' or WhatsApp ' + contact.whatsapp + '.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-quotation-software': {
    keyword: 'travel quotation software',
    angle: 'The quote itself: speed to send, what is on it, how it goes out.',
    metaTitle: 'Travel Quotation Software | Branded Quotes Fast | NNC',
    metaDescription:
      'Travel quotation software that builds a branded, day-wise quote from a past itinerary or from scratch, then prints, emails, PDFs or WhatsApps it.',
    pill: 'Travel quotation software | quote and send',
    h1: { lines: ['Travel quotation', 'software, sent'], tail: '', underline: 'before lunch' },
    lead: 'Travellers enquire with several operators at once. This travel quotation software builds a branded, day-wise quote from one you have already sent, prices the hotels and transfers from your own masters, and sends it the way the guest asked.',
    secondaryCta: { label: 'See the quote builder', href: '#features' },
    heroNotes: ['start from one that won', 'send it any way'],
    decisions: {
      kicker: 'FROM ENQUIRY TO SENT',
      titleLines: ['Five things between', '“how much?” and “sent”'],
      lead: 'Every one of these is where a quote usually stalls. Here is what the software does with each.',
      cap: 'WHERE EACH ONE HAPPENS',
      note: 'minutes, not evenings',
      items: [
        {
          icon: 'RefreshCw',
          q: 'Starting from a blank page',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'The trip page offers past quotes for the same destination, with the day-wise plan, hotels, transfers and price already set.',
        },
        {
          icon: 'Hotel',
          q: 'Looking up hotel rates again',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Room types, meal plans and timings come from your own hotel master, so nothing is priced from memory.',
        },
        {
          icon: 'Bus',
          q: 'Pricing ferries and transfers',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Transport and sightseeing are saved by location and dropped into the quote for that destination.',
        },
        {
          icon: 'Palette',
          q: 'Making it look like you',
          where: 'SETTINGS · BRANDING',
          a: 'Your logo, contact details and destination imagery are applied to every quote automatically.',
        },
        {
          icon: 'MessageCircle',
          q: 'Getting it in front of the guest',
          where: 'TRIPS · SHARE',
          a: 'Print it, email it, download a PDF, or WhatsApp the guest straight from the trip page.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT SURROUNDS THE QUOTE',
      title: 'What surrounds the travel quotation software',
      lead: 'The quote builder is the visible part. These are the records that make it fast, and what happens once the guest agrees.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Quoting, and everything either side of it' },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    builtFor: { title: 'Teams that quote the same destinations daily' },
    cta: { lines: ['Quote a trip on'], underline: 'your own screen' },
    faq: [
      {
        q: 'How fast can we send a quote?',
        a: 'If you have quoted that destination before, you start from that itinerary with its plan, hotels, transfers and price in place, and adjust from there rather than building it again.',
      },
      {
        q: 'Can we build a custom quotation from scratch?',
        a: 'Yes. Create a custom quotation and build it day by day with hotels, transfers, activities and sightseeing.',
      },
      {
        q: 'Will the quote carry our branding?',
        a: 'Yes. Your logo, contact details and destination imagery appear on every quote you send.',
      },
      {
        q: 'How do we send it?',
        a: 'Print it, email it, download it as a PDF, or WhatsApp the guest directly from the trip page.',
      },
      {
        q: 'Can we send more than one option?',
        a: 'Yes. A trip can hold several quotes, and they stay against the trip under All Quotes so you can see what was offered.',
      },
      {
        q: 'What happens after the guest accepts?',
        a: 'The trip moves on to booking, where vouchers are generated, instalments are logged and receipts and GST invoices are raised.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-itinerary-software': {
    keyword: 'travel itinerary software',
    angle: 'The itinerary document itself — the day-wise plan the guest reads.',
    metaTitle: 'Travel Itinerary Software | Day-Wise Plans | NNC',
    metaDescription:
      'Travel itinerary software that builds a day-wise plan with hotels, meal plans, ferries and activities, branded as yours and reusable on the next trip.',
    pill: 'Travel itinerary software | day by day',
    h1: { lines: ['Travel itinerary', 'software guests'], tail: '', underline: 'can picture' },
    lead: 'Day 1 Port Blair, Day 2 Havelock by ferry, Day 3 Elephant Beach. Travel itinerary software that gives each day its hotel, meal plan, transfer and activity, laid out as something a traveller reads rather than a price list.',
    secondaryCta: { label: 'See the itinerary builder', href: '#features' },
    heroNotes: ['day by day, with the hotel', 'reuse it next time'],
    decisions: {
      kicker: 'WHAT GOES INTO A DAY',
      titleLines: ['Five things every day', 'of an itinerary needs'],
      lead: 'An itinerary is only useful when each day answers where they sleep, how they move and what they do. Here is where each piece comes from.',
      cap: 'WHERE EACH ONE COMES FROM',
      note: 'one day at a time',
      items: [
        {
          icon: 'Hotel',
          q: 'Where do they sleep that night?',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'The hotel with its star rating, room type and meal plan (CP, MAP, AP), plus check-in and check-out times.',
        },
        {
          icon: 'Bus',
          q: 'How do they get to the next place?',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Ferries, cabs and transfers saved by location, with the service and class shown against the day.',
        },
        {
          icon: 'Ticket',
          q: 'What do they do while they are there?',
          where: 'BOOKINGS · SIGHTSEEING',
          a: 'Activities and sightseeing pulled in per day, so the plan reads as a trip rather than a list of hotels.',
        },
        {
          icon: 'Palette',
          q: 'Does it look like it came from us?',
          where: 'SETTINGS · BRANDING',
          a: 'Your logo, contact details and destination imagery on the cover and through the document.',
        },
        {
          icon: 'RefreshCw',
          q: 'Can we use it again next week?',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'Every itinerary stays searchable against its trip, so the next enquiry for that destination starts from it.',
        },
      ],
    },
    inside: {
      kicker: 'AROUND THE ITINERARY',
      title: 'What the travel itinerary software draws on',
      lead: 'The itinerary draws on your masters, sits on the trip record, and carries through to vouchers and invoices once it is booked.',
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Building the plan, and what follows it' },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    builtFor: { title: 'Teams selling multi-day, multi-stop trips' },
    cta: { lines: ['Build an itinerary on'], underline: 'your own screen' },
    faq: [
      {
        q: 'Can we build a day-wise itinerary?',
        a: 'Yes. Itineraries are built day by day, with the hotel, meal plan, transfer and activities against each day of the trip.',
      },
      {
        q: 'Does it include hotels and meal plans?',
        a: 'Yes. Hotels come from your own master with room types, meal plans (CP, MAP, AP) and check-in and check-out times.',
      },
      {
        q: 'Can we reuse an itinerary for the next guest?',
        a: 'Yes. Past itineraries stay searchable against their trips, and the trip page suggests them for the same destination.',
      },
      {
        q: 'Will it carry our branding?',
        a: 'Yes. Your logo, contact details and destination imagery appear on the itinerary and quote you send.',
      },
      {
        q: 'How do guests receive it?',
        a: 'Print it, email it, download a PDF, or WhatsApp the guest from the trip page.',
      },
      {
        q: 'What happens once they confirm?',
        a: 'The itinerary carries through to the booking, where trip, hotel and activity vouchers are generated and payments are tracked.',
      },
    ],
  },
}

export const travelPageSlugs = Object.keys(travelPages)
