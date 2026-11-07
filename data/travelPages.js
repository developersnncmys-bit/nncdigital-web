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
    // metaTitle + metaDescription per the current SEO brief.
    metaTitle: 'Travel CRM Software for Tour Operators & Travel Agencies | NNC Digital',
    metaDescription:
      'Manage travel enquiries, quotations, itineraries, bookings, payments, and accounting with NNC Travel CRM, all in one easy-to-use platform.',
    pill: 'Travel CRM | Built for Tour Operators and DMCs',
    // H1 broken at natural phrase boundaries so no word orphans on its own
    // line. Previous split ("Travel CRM Software for" / "Tour Operators,
    // Travel Agencies") was too wide for the hero column at 64px — "for"
    // dropped onto its own line. Four clean visual lines instead.
    h1: { lines: ['Travel CRM Software', 'for Tour Operators,', 'Travel Agencies'], tail: '', underline: 'and DMCs' },
    tagline: 'Your travel business, connected from enquiry to departure.',
    lead: 'Running a travel business means managing enquiries, preparing tour packages, coordinating bookings, and tracking payments. NNC Travel CRM brings these activities together in one workspace, helping tour operators, travel agencies, and destination management companies manage every trip with greater visibility. Create travel quotations, organize day-wise itineraries, manage bookings, monitor instalments, and keep your team aligned with a travel management CRM designed around the way your business works. Built and supported in India by Nakshatra Namaha Creations.',
    secondaryCta: { label: 'Explore Travel CRM Features', href: '#features' },
    heroNotes: ['reuse the quote that won', 'who still owes you'],
    decisions: {
      kicker: 'DECISIONS, NOT DATA DUMPS',
      titleLines: ['Start Every Day with a Clear', 'View of Your Travel Business'],
      lead: 'Travel enquiries, quotations, payments, and upcoming trips can quickly become difficult to track across different tools. NNC Travel CRM software brings your daily travel operations into one dashboard, helping your team understand what needs attention first.',
      // Section 4 (WHERE EACH ONE IS ANSWERED) — eyebrow, H2 and lead that
      // sit above the 5 decision cards, per brief.
      cap: 'WHERE EACH ONE IS ANSWERED',
      capTitle: 'Five Everyday Travel Business Decisions, One CRM',
      capLead: 'A travel agency CRM should do more than maintain guest information. It should help your team identify sales opportunities, manage bookings, track collections, and understand trip profitability.',
      note: 'answered, not filed',
      items: [
        {
          icon: 'Bell',
          q: 'Which Travel Enquiry Needs Attention?',
          where: 'TRIPS · PENDING FOLLOW-UPS',
          a: 'See the follow-ups scheduled for today, yesterday, and the next 7 days. Each trip has an assigned sales person and follow-up date, helping your team stay on top of travel enquiries.',
        },
        {
          icon: 'LayoutDashboard',
          q: 'How Is Our Travel Sales Pipeline Performing?',
          where: 'DASHBOARD · TRIP SALES STATS',
          a: 'Monitor leads, quotations, revenue, and conversion across today, this week, or this month. Understand how your travel sales pipeline is progressing.',
        },
        {
          icon: 'RefreshCw',
          q: 'Can We Reuse a Previous Tour Package?',
          where: 'TRIPS · NEW QUOTE',
          a: 'Find quotations created for the same destination and reuse their day-wise itineraries, hotels, transfers, and pricing to prepare another travel proposal.',
        },
        {
          icon: 'Wallet',
          q: 'Which Travel Payments Are Still Pending?',
          where: 'ACCOUNTING · INCOMING PAYMENTS',
          a: 'Review upcoming, overdue, unverified, and paid amounts. Each payment is connected to its booking and guest for easier travel payment tracking.',
        },
        {
          icon: 'FileText',
          q: 'What Is the Profitability of Each Trip?',
          where: 'ACCOUNTING · PROFIT REPORT',
          a: 'Compare the amount billed against the trip cost for every booking. Review travel business margins using the profit report available within the CRM.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT’S INSIDE',
      title: 'One Travel CRM for Your Entire Trip Management Process',
      lead: 'Manage travel enquiries, bookings, accounting, and team tasks through one connected travel business management system. NNC Travel CRM includes the complete product from day one, without separate paid add-on modules.',
    },
    features: {
      kicker: 'MODULE BY MODULE',
      title: 'Explore the Travel CRM Features Behind Every Trip',
      // Section 6 lead — from the brief, sat under the H2 above the five
      // feature rows. Was missing on the live page.
      lead: 'From managing new travel enquiries to tracking completed bookings, every module supports a different part of your travel business workflow.',
    },
    builtFor: {
      title: 'Travel Management Software for Different Travel Businesses',
      // Section 9 lead — sat under the H2 in the brief, was missing on the
      // live page. Rendered by TravelBuiltFor.jsx under the H2.
      lead: 'NNC Travel CRM supports teams that manage destination-based travel packages, bookings, and customer enquiries.',
    },
    cta: { lines: ['Discover How Travel CRM'], underline: 'Fits Your Business' },
    // FAQ Q headings in Title Case per the brief.
    faq: [
      {
        q: 'What Is a Travel CRM and How Does It Help Tour Operators?',
        a: 'A Travel CRM helps travel businesses organize enquiries, quotations, bookings, payments, and customer information. NNC Travel CRM brings these activities together through Trips, Bookings, Accounting, and Tasks, with an owner dashboard and branded workspace.',
      },
      {
        q: 'Is NNC Travel CRM Suitable for Travel Agencies and DMCs?',
        a: 'Yes. The product is designed for tour operators, destination management companies, destination specialists, and growing travel agencies that manage enquiries, destination-based quotations, bookings, and trip operations.',
      },
      {
        q: 'How Much Does Travel CRM Software Cost?',
        a: 'NNC Travel CRM costs Rs. 590 per user per month, with a minimum of 10 users. The starting plan is Rs. 5,900 before GST, or Rs. 6,962 per month including 18% GST for 10 users.',
      },
      {
        q: 'Can I Create Travel Quotations and Day-Wise Itineraries?',
        a: 'Yes. The CRM includes a quotation and itinerary builder. You can reuse previous quotations for the same destination or create custom day-wise itineraries with hotels, transfers, activities, and sightseeing.',
      },
      {
        q: 'Can I Manage Travel Payments and GST Invoices?',
        a: 'Yes. The accounting module supports incoming payment tracking, booking instalments, receipts, GST invoices, proforma invoices, and trip profit reports.',
      },
    ],
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
    keyword: 'tour operator crm software',
    angle: 'Tour operator economics: packages, bookings, payments, trip profitability.',
    // metaTitle + metaDescription per the SEO brief (primary keyword is now
    // "Tour Operator CRM Software"). Page self-canonicalizes.
    metaTitle: 'Tour Operator CRM Software for Bookings & Business',
    metaDescription:
      "Manage tour enquiries, packages, bookings, customer payments and trip profits with NNC Digital's Tour Operator CRM Software.",
    pill: 'Tour Operator CRM Software | Travel Business Management',
    h1: { lines: ['Tour Operator CRM Software to', 'Manage Packages, Bookings'], tail: '', underline: 'and Profits' },
    lead: "Manage your complete travel business with NNC Digital's Tour Operator CRM Software. Organize customer enquiries, create tour package quotations, manage hotel and transport bookings, track payments and monitor trip profitability from one platform. Built for tour operators, travel agencies and DMCs, our Tour Operator Management Software simplifies daily operations and helps your team manage every customer journey efficiently. From the first travel enquiry to confirmed bookings and final payments, manage your tour business with one cloud-based Travel CRM Software.",
    secondaryCta: { label: 'Explore the Software', href: '#features' },
    heroNotes: ['enquiry to booking', 'profits in view'],
    decisions: {
      kicker: 'FROM ENQUIRY TO DEPARTURE',
      titleLines: ['Manage Every Tour Booking', 'in Five Simple Steps'],
      lead: "Managing a tour business involves multiple activities, from handling customer enquiries and preparing travel proposals to confirming hotel reservations and collecting payments. NNC Digital's Tour Operator CRM Software brings these activities together, helping your team organize tour operations, reduce repetitive work and manage bookings with better visibility.",
      // Per-brief override for the dashboard mockup labels. Merged on top of
      // the shared base in data/travel.js, so only these fields change.
      morningScreen: {
        subheading: 'Your Desk, This Morning',
        statsTitle: 'Trip Sales Stats',
        panels: [
          { title: 'Pending Follow-Ups', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
          { title: 'Due Incoming Payments', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
          { title: 'Trips Starting', cols: ['Today', 'Next 7 Days'] },
          { title: 'Trips Ending', cols: ['Today', 'Previous 7 Days'] },
        ],
        note: 'Sample figures displayed in the Tour Operator CRM dashboard layout.',
      },
      cap: 'WHERE EACH ONE HAPPENS',
      capTitle: 'Stop Managing Your Tour Business Across Multiple Spreadsheets',
      capLead: 'Your daily operations, organized.',
      note: 'organized, not scattered',
      items: [
        {
          icon: 'ListChecks',
          q: 'Manage Every Customer Enquiry in One Place',
          where: 'TRIPS · LEAD MANAGEMENT',
          a: 'Use Tour Operator CRM Software to organize customer enquiries, assign sales executives, schedule follow-ups and track every trip through seven booking stages.',
        },
        {
          icon: 'RefreshCw',
          q: 'Reuse Existing Tour Packages and Itineraries',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'Find previous quotations for similar destinations with saved itineraries, hotel details, transport and package pricing. Prepare new tour proposals without starting from scratch.',
        },
        {
          icon: 'Hotel',
          q: 'Organize Hotel and Transport Bookings',
          where: 'BOOKINGS · HOTEL AND TRANSPORT',
          a: 'Maintain hotel information, room categories, meal plans, transportation services and sightseeing activities. Access saved records while managing tour reservations.',
        },
        {
          icon: 'Wallet',
          q: 'Track Customer Payments and Outstanding Balances',
          where: 'ACCOUNTING · PAYMENTS',
          a: 'Monitor advance payments, instalments, overdue balances and completed transactions. Maintain organized payment records for every tour booking.',
        },
        {
          icon: 'FileText',
          q: 'Understand the Profitability of Every Tour',
          where: 'ACCOUNTING · PROFIT REPORT',
          a: 'Review individual trip profitability by comparing booking revenue with trip costs. Use tour profit tracking to understand business performance and make better pricing decisions.',
        },
      ],
    },
    inside: {
      kicker: 'MORE THAN CUSTOMER MANAGEMENT',
      title: 'One Tour Operator Management Software for Your Entire Travel Business',
      lead: 'NNC Digital combines Tour Operator CRM Software, Tour Booking Management Software, Travel Quotation Software and Travel Agency Accounting Software to organize your complete business workflow. Manage customer enquiries, tour packages, hotel reservations, transportation, accounting and daily operations through one cloud-based travel management platform.',
      modules: [
        {
          icon: 'ListChecks',
          name: 'Trips',
          subtitle: 'Manage Every Tour Enquiry',
          lead: 'Track customer enquiries and tour bookings with Travel Lead Management Software.',
          items: [
            'Manage seven trip stages: New Query, In Progress, Converted, On Trip, Past, Canceled and Dropped',
            'Assign sales executives and follow-up dates',
            'Search trips by ID, customer name or phone number',
            'Import existing travel leads through CSV',
            'View quotations, itineraries and customer activity history',
            'Contact customers through WhatsApp from the trip page',
          ],
        },
        {
          icon: 'Hotel',
          name: 'Bookings',
          subtitle: 'Manage Hotels, Transport and Vouchers',
          lead: 'Organize travel reservations using Tour Booking Management Software.',
          items: [
            'Maintain hotel masters with images, locations and star ratings',
            'Store room categories, meal plans and hotel timings',
            'Manage child extra-bed eligibility and payment preferences',
            'Save destination-specific transportation and sightseeing details',
            'Generate trip, hotel and activity vouchers',
            'Customize voucher pricing, branding and terms',
          ],
        },
        {
          icon: 'Receipt',
          name: 'Accounting',
          subtitle: 'Track Payments and Tour Revenue',
          lead: 'Simplify financial operations with Tour Operator Accounting Software.',
          items: [
            'Track upcoming, overdue, paid and unverified payments',
            'Record advance payments and instalments',
            'Generate payment receipts and GST invoices',
            'Create proforma invoices before payment',
            'Review profit reports for individual trips',
            'Download payment and accounting records',
          ],
        },
        {
          icon: 'CalendarCheck',
          name: 'Tasks',
          subtitle: 'Keep Every Follow-Up on Schedule',
          lead: 'Organize team responsibilities with Travel CRM Follow-Up Management.',
          items: [
            'Assign customer follow-ups with due dates',
            'Add internal comments to trip records',
            'Receive booking, payment and comment alerts',
            'Track guest arrival and departure information',
            'Organize daily responsibilities across sales and operations teams',
          ],
        },
      ],
      workspace: {
        kicker: 'AND AROUND THEM',
        items: [
          { icon: 'LayoutDashboard', title: 'Owner Dashboard', body: 'Monitor revenue, enquiries, quotations, pending payments and upcoming trips from one Tour Operator CRM Dashboard.' },
          { icon: 'Palette', title: 'Your Branding', body: 'Add your agency logo and contact details to customer quotations and booking vouchers.' },
          { icon: 'Users', title: 'Individual User Access', body: 'Give sales, operations and accounting teams their own logins to manage their responsibilities.' },
          { icon: 'Globe', title: 'Cloud-Based Workspace', body: 'Access your Travel Business Management Software through a browser using your own branded address.' },
        ],
      },
    },
    features: {
      kicker: 'COMPLETE BUSINESS MANAGEMENT',
      title: 'Tour Operator CRM Software with Complete Booking and Business Management',
      lead: "Manage tour enquiries, prepare customized travel packages, organize hotel reservations, track payments and monitor business performance with NNC Digital's Tour Operator Management Software.",
    },
    // Brief lists modules in this order: 02 Quotes, 03 Bookings, 01 Trips,
    // 04 Accounting, 05 Owner Dashboard.
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    featureRowOverrides: {
      '01': {
        title: 'Manage Tour Leads, Customer Enquiries and Booking Status',
        note: 'every lead has an owner',
        lead: 'Organize every customer enquiry with Tour Operator Lead Management Software. Track potential customers, assign sales responsibilities and monitor tour bookings through a structured travel sales pipeline.',
        items: [
          {
            icon: 'ListChecks',
            title: 'Track Every Tour Enquiry',
            body: 'Use Tour Operator CRM Software to monitor customer enquiries across seven stages, from new travel requests to completed or dropped trips.',
          },
          {
            icon: 'Users',
            title: 'Assign Leads and Follow-Ups',
            body: 'Organize your sales team with Travel Lead Management Software. Assign sales executives, follow-up dates and tags to every tour enquiry.',
          },
          {
            icon: 'Upload',
            title: 'Search, Filter and Import Enquiries',
            body: 'Find customer records using trip ID, guest name or mobile number. Import existing travel enquiries through CSV and manage them using filters.',
          },
        ],
      },
      '02': {
        title: 'Create Professional Tour Package Quotations and Travel Itineraries',
        note: 'your logo, not ours',
        lead: 'Prepare customized tour proposals using Tour Operator Quotation Software. Reuse successful travel packages, organize day-wise itineraries and share branded quotations with customers.',
        items: [
          {
            icon: 'RefreshCw',
            title: 'Reuse Successful Tour Package Quotations',
            body: 'Find previous quotations for similar destinations with existing day-wise itineraries, hotels, transfers and pricing. Reuse saved travel proposals to prepare new customer quotations faster.',
          },
          {
            icon: 'Palette',
            title: 'Customize Every Tour Itinerary',
            body: 'Add hotels, accommodation, transportation, transfers, activities and sightseeing to create personalized tour packages. Organize every travel itinerary according to customer preferences.',
          },
          {
            icon: 'MessageCircle',
            title: 'Share Professional Tour Quotations',
            body: 'Create branded tour quotations with your agency logo and business details. Print, email or download proposals as PDFs and share them with customers through WhatsApp.',
          },
        ],
      },
      '03': {
        title: 'Simplify Hotel, Transport and Tour Booking Management',
        note: 'set up once, manage every booking',
        lead: 'Organize travel reservations with Tour Operator Booking Software. Maintain hotel information, transportation services and sightseeing details in one centralized booking management system.',
        items: [
          {
            icon: 'Hotel',
            title: 'Centralize Hotel and Accommodation Details',
            body: 'Manage hotel images, star ratings, room categories, meal plans, check-in and check-out timings and child extra-bed details using a structured Hotel Booking Management System.',
          },
          {
            icon: 'Bus',
            title: 'Manage Transportation and Sightseeing Services',
            body: 'Store cabs, ferries, transfers and sightseeing activities by destination. Reuse these records while preparing tour quotations and travel itineraries.',
          },
          {
            icon: 'Ticket',
            title: 'Generate Professional Tour Booking Vouchers',
            body: 'Create trip, hotel and activity vouchers directly from booking records. Customize agency branding, pricing and terms before sharing documents with customers or suppliers.',
          },
        ],
      },
      '04': {
        title: 'Manage Tour Payments, GST Invoices and Trip Profitability',
        note: 'no more manual payment ledgers',
        lead: 'Keep your travel business finances organized with Tour Operator Accounting Software. Track customer payments, outstanding balances, booking receipts and individual trip profitability from one platform.',
        items: [
          {
            icon: 'Wallet',
            title: 'Monitor Incoming and Overdue Payments',
            body: 'Use Travel Payment Management Software to track upcoming, overdue, paid and unverified payments with booking references and due dates.',
          },
          {
            icon: 'Receipt',
            title: 'Manage Instalments and GST Invoices',
            body: 'Record advance payments, track outstanding balances, issue receipts and generate GST invoices using Travel Agency Billing Software.',
          },
          {
            icon: 'FileText',
            title: 'Generate Proforma Invoices and Profit Reports',
            body: 'Prepare proforma invoices before receiving payments and review individual trip profitability. Understand the financial performance of every tour package.',
          },
        ],
      },
      '05': {
        title: 'Monitor Tour Sales, Bookings and Business Performance',
        note: 'your daily business overview',
        lead: 'Get a complete overview of your travel business with the Tour Operator CRM Dashboard. Track sales performance, customer enquiries, quotations, payments and upcoming departures without checking multiple records.',
        items: [
          {
            icon: 'LayoutDashboard',
            title: 'View Tour Sales and Conversion Reports',
            body: 'Track revenue, new enquiries, generated quotations and conversions using Travel Business Management Software, with daily, weekly and monthly views.',
          },
          {
            icon: 'Bell',
            title: 'Manage Pending Follow-Ups and Payments',
            body: 'Identify customer enquiries requiring attention, outstanding payments, booking alerts and team comments.',
          },
          {
            icon: 'CalendarCheck',
            title: 'Track Upcoming and Completed Tours',
            body: 'View trips starting or ending to plan guest pickups, hotel check-ins, departure arrangements and customer follow-ups.',
          },
        ],
      },
    },
    how: {
      title: 'Get Started with Tour Operator CRM Software in Four Simple Steps',
      lead: "Implement NNC Digital's Tour Operator Management Software with a guided setup process for your travel agency, sales team and operations department.",
      steps: [
        { icon: 'Headset', step: 'STEP 1', title: 'Book a Live Demo', body: 'Explore our Tour Operator CRM Software through a live demonstration featuring sample travel enquiries, tour package quotations, itineraries and bookings.' },
        { icon: 'PaletteOnDark', step: 'STEP 2', title: 'Set Up Your Branded Workspace', body: 'Configure your agency logo, company details and individual user logins to create a professional Travel CRM Software workspace.' },
        { icon: 'UploadOnDark', step: 'STEP 3', title: 'Add Your Travel Business Data', body: 'Organize hotel information, transportation services, sightseeing activities and existing customer enquiries. Import supported lead data through CSV.' },
        { icon: 'UsersOnDark', step: 'STEP 4', title: 'Train Your Team and Go Live', body: 'Get your sales, operations and accounts teams familiar with their workflows. Start managing tour bookings, preparing quotations and tracking customer payments.' },
      ],
    },
    pricing: {
      title: 'Affordable Tour Operator CRM Software Pricing for Growing Travel Agencies',
      lead: 'Get the essential features of Tour Operator CRM Software, Tour Booking Management Software and Travel Agency Management Software with straightforward per-user pricing. Pay according to your team size, starting with a minimum of 10 users.',
      dailyTitle: 'Professional Tour Operator CRM Software at Under ₹20 a Day',
      dailyBody: 'Starting at approximately ₹19.67 per user per day before GST, based on a 30-day month, NNC Digital provides Tour Operator Software to organize enquiries, manage bookings, prepare quotations and track trip profitability.',
      fine: 'Rates shown are based on September 2026 pricing and are subject to change.',
    },
    builtFor: {
      title: 'Tour Operator CRM Software for Travel Agencies, Tour Operators and DMCs',
      lead: "NNC Digital's Tour Operator Management Software supports businesses that manage recurring destinations, customized itineraries, multiple bookings and customer enquiries.",
      audiences: [
        { icon: 'MapPin', title: 'Tour Operators', body: 'Manage domestic and international tour packages with reusable itineraries, hotel options, transfers and sightseeing using Tour Operator Management Software.' },
        { icon: 'Handshake', title: 'Destination Management Companies (DMCs)', body: 'Manage accommodation, transportation, ground handling, supplier details and booking vouchers with DMC Management Software.' },
        { icon: 'Globe', title: 'Destination Specialists', body: 'Reuse destination-specific itineraries, hotel details and sightseeing packages with Tour Package Management Software.' },
        { icon: 'Users', title: 'Growing Travel Agencies', body: 'Bring sales, bookings, accounting and operations together with Cloud-Based Tour Operator Software for teams of 10 or more.' },
      ],
      caseStudy: {
        title: 'How a Leisure Tour Operator Simplified Travel Quotations and Booking Management',
        challengeLabel: 'The Challenge.',
        challenge: 'A leisure tour operator was managing customer enquiries received through its website, calls and WhatsApp. Preparing each tour quotation required manually combining hotel prices, ferry charges, transfers and destination itineraries. This made the quotation process repetitive and difficult to manage across the sales team.',
        solutionLabel: 'Our Solution.',
        solution: 'NNC Digital implemented a branded Travel CRM Software workspace with a centralized trip pipeline, reusable day-wise itineraries and customizable Tour Package Quotation Software. The solution brought hotel and ferry options, quotation sharing, booking details, instalment tracking and GST invoicing into one platform.',
        outcomeLabel: 'The Outcome.',
        outcome: 'The operator now has a centralized workflow to manage enquiries, prepare branded quotations, maintain booking records and track customer payments. The team also has better visibility into individual trip profitability and daily travel operations.',
        note: 'live and running today',
      },
    },
    faqTitle: 'Frequently Asked Questions About Tour Operator CRM Software',
    faqLead:
      'Find answers about Tour Operator CRM Software, travel bookings, tour package management, customer enquiries, pricing and business operations.',
    cta: {
      lines: ['See How Tour Operator CRM Software'],
      underline: 'Works for Your Travel Business',
      leads: [
        "Discover how NNC Digital's Tour Operator CRM Software helps your team manage customer enquiries, create tour package quotations, organize bookings, track payments and monitor trip profitability.",
        'Book a personalized live demonstration of our Tour Operator Management Software and explore the complete journey from a new enquiry to a confirmed and paid booking.',
      ],
      formTitle: 'Request Your Tour Operator CRM Demo',
      formLead: 'Tell us a little about your travel business.',
    },
    faq: [
      {
        q: 'Can Tour Operator CRM Software manage multiple tour packages?',
        a: "Yes. NNC Digital's Tour Operator CRM helps you manage multiple customer trips, customized tour packages, day-wise itineraries, hotel options, transportation details and booking records from one platform.",
      },
      {
        q: 'Can we manage customer enquiries and tour bookings in one place?',
        a: 'Yes. You can track customer enquiries through seven trip stages, assign sales executives, schedule follow-ups and maintain quotations, itineraries and booking information in one centralized system.',
      },
      {
        q: 'Can we create customized tour package quotations?',
        a: 'Yes. You can create tour package quotations by adding hotels, transfers, sightseeing activities and other travel services. You can also reuse previous quotations for similar destinations.',
      },
      {
        q: 'Can we manage hotel and transportation bookings?',
        a: 'Yes. You can maintain hotel information, room categories, meal plans, check-in timings, transportation services and sightseeing details for use in your quotations and bookings.',
      },
      {
        q: 'Can we track customer payments and instalments?',
        a: 'Yes. Record advance payments and instalments, monitor outstanding balances and track upcoming, overdue, paid and unverified payments. You can also generate payment receipts and GST invoices.',
      },
      {
        q: 'Can we track the profit of individual tour packages?',
        a: 'Yes. NNC Digital provides individual trip profit reports that help you compare the billed amount against trip costs and understand the profitability of your bookings.',
      },
      {
        q: 'Can we add our travel agency branding to quotations and vouchers?',
        a: 'Yes. Add your agency logo and business details to quotations and booking vouchers. Customize document pricing, branding and terms before sharing them.',
      },
      {
        q: 'Can we share tour quotations through WhatsApp?',
        a: 'Yes. You can download or print quotations as PDFs, send them through email or share them with customers using WhatsApp directly from the trip page.',
      },
      {
        q: 'Is Tour Operator CRM Software suitable for growing travel agencies?',
        a: "Yes. NNC Digital's Tour Operator CRM is designed to support growing travel businesses with a minimum team size of 10 users. It brings customer enquiries, quotations, bookings, payments and team activities together.",
      },
      {
        q: 'How much does Tour Operator CRM Software cost?',
        a: "NNC Digital's Tour Operator CRM costs Rs. 590 per user per month, plus 18% GST, with a minimum requirement of 10 users. The starting monthly investment is Rs. 6,962 for 10 users, including GST.",
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
    metaTitle: 'Travel Quotation Software for Tour Operators | NNC Digital',
    metaDescription:
      'Create travel quotations faster with NNC Travel Quotation Software. Reuse itineraries, add hotel costs, and share quotes via PDF, email or WhatsApp.',
    pill: 'Travel Quotation Software | Quote and Send',
    h1: { lines: ['Travel Quotation Software to', 'Create and Send Branded'], tail: '', underline: 'Tour Quotes Faster' },
    lead: "Travellers often compare quotations from several travel companies before choosing a package. NNC's Travel Quotation Software helps your team prepare customised, day-wise travel quotes using previously sent itineraries, saved hotel rates and transport details. Create professional travel quotations, calculate package costs and share branded proposals through email, PDF or WhatsApp. Manage every travel quote directly from its enquiry and keep the complete customer journey connected.",
    secondaryCta: { label: 'See the Quote Builder', href: '#features' },
    heroNotes: ['start from one that won', 'send it any way'],
    decisions: {
      kicker: 'FROM ENQUIRY TO SENT',
      // H2 Title Case + Section 4 H3 items Title Case per the brief.
      titleLines: ['Five Things Between', '"How Much?" and "Sent"'],
      lead: "Creating a travel quotation involves more than entering a package price. Your team needs the right itinerary, hotel rates, transfer costs, company branding and a convenient way to share the final quote. NNC's Travel Quotation Software brings these steps together so your team can prepare travel quotes without rebuilding every package from scratch.",
      // Per-page dashboard override — brief for this page keeps the original
      // labels ("Welcome back" / "Your desk, this morning" / "Trip Sales
      // Stats" / "Pending Follow-ups" etc.), whereas the shared base was
      // updated to the travel-crm brief's new labels.
      morningScreen: {
        greeting: 'Welcome back',
        subheading: 'Your desk, this morning',
        statsTitle: 'Trip Sales Stats',
        panels: [
          { title: 'Pending Follow-ups', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
          { title: 'Due Incoming', cols: ['Today', 'Yesterday'] },
          { title: 'Trips Starting', cols: ['Today', 'Next 7 Days'] },
          { title: 'Trips Ending', cols: ['Today', 'Prev 7 Days'] },
        ],
        note: 'Sample figures shown in the dashboard layout your team opens every morning.',
      },
      cap: 'WHERE EACH ONE HAPPENS',
      note: 'minutes, not evenings',
      items: [
        {
          icon: 'RefreshCw',
          q: 'Starting from a Blank Page',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'The trip page shows previous quotations for the same destination, including day-wise itineraries, hotels, transfers and prices. Use an existing travel quote as your starting point and customise it for the new enquiry.',
        },
        {
          icon: 'Hotel',
          q: 'Looking Up Hotel Rates Again',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Store hotel room types, meal plans, check-in and check-out timings in your hotel master. Your travel quotation software can use these saved details instead of relying on manually checked rates.',
        },
        {
          icon: 'Bus',
          q: 'Pricing Ferries and Transfers',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Save ferry, cab, transfer and sightseeing details by destination. Add the relevant services to a new travel quotation without entering the same information repeatedly.',
        },
        {
          icon: 'Palette',
          q: 'Making the Quote Look Like You',
          where: 'SETTINGS · BRANDING',
          a: 'Add your company logo, contact information and destination imagery to your travel quotations. Present every proposal with your own business identity.',
        },
        {
          icon: 'MessageCircle',
          q: 'Getting It in Front of the Guest',
          where: 'TRIPS · SHARE',
          a: 'Print the travel quotation, email it, download it as a PDF or send it through WhatsApp directly from the trip page.',
        },
      ],
    },
    inside: {
      kicker: 'WHAT SURROUNDS THE QUOTE',
      title: 'More Than Just Travel Quotation Software',
      lead: 'The quote builder is only one part of the process. Your team also needs organised enquiries, reusable package information, booking records and payment tracking. NNC connects these records so the work continues smoothly after a travel quotation is sent.',
      // Per-brief overrides for Trips/Bookings/Accounting/Tasks + AND-AROUND-
      // THEM. The brief uses a single bolded tagline per module (no secondary
      // lead), so `lead` is omitted here — TravelInside.jsx renders it
      // conditionally.
      modules: [
        {
          icon: 'ListChecks',
          name: 'Trips',
          subtitle: 'Every enquiry, from the first message to the completed trip.',
          items: [
            'Seven stages: New Query, In Progress, Converted, On Trip, Past, Canceled and Dropped',
            'Assign a salesperson and follow-up date to every trip',
            'Search using trip ID, guest name or phone number',
            'Organise leads with tags and filters',
            'Import existing enquiries through CSV',
            'Maintain quotations, itineraries and activity logs per trip',
            'Contact guests through WhatsApp from the trip page',
          ],
        },
        {
          icon: 'Hotel',
          name: 'Bookings',
          subtitle: 'Save package details once and reuse them in every travel quote.',
          items: [
            'Hotel master with photos, star rating and location',
            'Room types and meal plans such as CP, MAP and AP',
            'Check-in and check-out timings',
            'Child extra-bed age and payment preferences',
            'Transport and sightseeing details saved by location',
            'Trip, hotel and activity vouchers generated from bookings',
            'Show or hide prices, branding and terms on each voucher',
          ],
        },
        {
          icon: 'Receipt',
          name: 'Accounting',
          subtitle: 'Know what is owed, what is paid and what each trip earns.',
          items: [
            'Incoming payments by upcoming, past 7 days, unverified, paid and overdue',
            'Instalments recorded against each booking with the balance',
            'Receipts and GST invoices against logged payments',
            'Proforma invoice before payment',
            'Profit report per trip',
            'Download accounting and payment lists',
          ],
        },
        {
          icon: 'CalendarCheck',
          name: 'Tasks',
          subtitle: 'Keep every follow-up assigned and visible.',
          items: [
            'Follow-ups with dates and owners',
            'Comments on trips visible to the team',
            'Alerts for bookings, payments and comments',
            'Arrival and departure details for each trip',
          ],
        },
      ],
      workspace: {
        kicker: 'AND AROUND THEM',
        items: [
          { icon: 'LayoutDashboard', title: 'Owner Dashboard', body: 'Review sales, follow-ups, payments due and trips starting or ending from one screen.' },
          { icon: 'Palette', title: 'Your Branding', body: 'Your company logo and contact details appear on every travel quotation and voucher you send.' },
          { icon: 'Users', title: 'A Login Per User', body: 'Give sales, operations and accounts team members their own access to the platform.' },
          { icon: 'Globe', title: 'Your Own Workspace', body: 'Access your travel quotation software through your own cloud workspace address using any browser.' },
        ],
      },
    },
    features: { kicker: 'MODULE BY MODULE', title: 'Travel Quoting and Everything Either Side of It' },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    // Per-brief overrides for each module row — title, note, lead and items
    // come straight from the Google Doc. Images (shot/float) stay from the
    // shared base in data/travel.js so the screenshots don't need to move.
    featureRowOverrides: {
      '02': {
        kicker: 'QUOTES AND ITINERARIES',
        title: 'Send the Travel Quote That Already Won',
        note: 'your logo, not ours',
        lead: 'Prepare new travel quotations using previous quotes for the same destination. Instead of rebuilding every package, reuse the itinerary, hotel details, transfers and pricing that are already available.',
        items: [
          {
            icon: 'RefreshCw',
            title: 'Start from One That Worked',
            body: 'The trip page suggests previous quotations for the same destination. Reuse the day-wise travel plan, hotels, ferries and package price, then adjust the details for your new customer.',
          },
          {
            icon: 'Palette',
            title: 'Or Build It Custom, Day by Day',
            body: 'Create customised travel itineraries with hotels, transfers, activities and sightseeing. Add your company logo and business details to the quotation pages.',
          },
          {
            icon: 'MessageCircle',
            title: 'Send It However the Guest Replies',
            body: 'Share your travel quotation through different channels. Print it, email it, download a PDF or send it through WhatsApp directly from the trip page.',
          },
        ],
      },
      '03': {
        kicker: 'BOOKINGS',
        title: 'Price It Once, Quote It Again',
        note: 'set up once, quote forever',
        lead: 'Save hotel rates and destination services in your booking masters. Use these details when preparing new travel quotations, so your team can build packages using organised information.',
        items: [
          {
            icon: 'Hotel',
            title: 'A Hotel Master That Holds the Details',
            body: 'Maintain hotel photos, star ratings, locations, room types, meal plans such as CP, MAP and AP, check-in and check-out timings, and child extra-bed age details.',
          },
          {
            icon: 'Bus',
            title: 'Transport and Sightseeing by Location',
            body: 'Save ferries, cabs, transfers and activities against their destination. Bring the relevant services into a new travel quote whenever your team prepares a package for that location.',
          },
          {
            icon: 'Ticket',
            title: 'Vouchers Straight from the Booking',
            body: 'Generate trip, hotel and activity vouchers from the booking. Choose whether prices, branding and terms are displayed or hidden on the voucher.',
          },
        ],
      },
      '01': {
        kicker: 'TRIPS',
        title: 'Know What Is Live and Who Is Handling It',
        note: 'every lead has an owner',
        lead: 'Every travel quotation starts with an enquiry. Keep the customer, destination, follow-up and quotation details connected through the trip management module.',
        items: [
          {
            icon: 'ListChecks',
            title: 'Seven Stages, with Live Counts',
            body: 'Track New Query, In Progress, Converted, On Trip, Past, Canceled and Dropped. Select a stage to view the relevant trips and understand where enquiries stand.',
          },
          {
            icon: 'Users',
            title: 'An Owner on Every Row',
            body: 'Each trip carries its salesperson, status, tags and follow-up date. Your team can see who is responsible for the enquiry and the next action required.',
          },
          {
            icon: 'Upload',
            title: 'Find Any Trip, Bring in Any List',
            body: 'Search by trip ID, guest name or phone number. Upload existing enquiry lists through CSV and manage them in your travel CRM.',
          },
        ],
      },
      '04': {
        kicker: 'ACCOUNTING',
        title: 'See What Is Owed Before You Have to Ask',
        note: 'no more notebook ledgers',
        lead: 'Once a travel quotation becomes a booking, payment tracking becomes the next important step. Keep instalments, outstanding balances, receipts and invoices connected to the booking.',
        items: [
          {
            icon: 'Wallet',
            title: 'Every Payment Has a Status',
            body: 'Check upcoming, past 7 days, unverified, paid and overdue payments. Review the amount, due date and booking associated with each payment.',
          },
          {
            icon: 'Receipt',
            title: 'Instalments, Receipts and GST Invoices',
            body: 'Record part-payments against bookings and monitor the remaining balance. Generate receipts and GST invoices against logged payments.',
          },
          {
            icon: 'FileText',
            title: 'Proforma Up Front, Margin at the End',
            body: 'Create a proforma invoice before payment and review the profit report for each trip after the booking progresses.',
          },
        ],
      },
      '05': {
        kicker: 'OWNER DASHBOARD',
        title: 'Open the Day Already Knowing What It Holds',
        note: 'your 9 am check-in',
        lead: 'Get an overview of your travel enquiries, quotations, payments and upcoming trips. The owner dashboard helps your team see the work that needs attention without opening multiple records.',
        items: [
          {
            icon: 'LayoutDashboard',
            title: 'Revenue, Leads, Quotes, Conversion',
            body: 'Review the four sales figures for today, this week or this month. Understand how many enquiries are coming in and how your quotation activity is progressing.',
          },
          {
            icon: 'Bell',
            title: 'What Needs You Today?',
            body: 'View pending follow-ups and payments due for today, yesterday and the next seven days. Receive alerts for bookings, payments and comments.',
          },
          {
            icon: 'CalendarCheck',
            title: 'Trips Starting and Ending',
            body: 'Check trips starting and ending to plan pickups, hotel check-ins and customer feedback calls before the day begins.',
          },
        ],
      },
    },
    // HOW IT WORKS — per-brief override of the four onboarding steps.
    how: {
      title: 'From First Demo to Go Live in Four Clear Steps',
      lead: "Get your travel quotation software ready around your team's daily workflow. Set up your branding, bring in destination information and start preparing quotations through one connected workspace.",
      steps: [
        {
          icon: 'Headset',
          step: 'STEP 1',
          title: 'Live Demo',
          body: 'We walk your team through the CRM using travel enquiries and quotations similar to the destinations and packages you handle.',
        },
        {
          icon: 'PaletteOnDark',
          step: 'STEP 2',
          title: 'Your Workspace',
          body: 'Add your company logo and contact details to quotations and vouchers. Set up individual logins for your sales, operations and accounts users.',
        },
        {
          icon: 'UploadOnDark',
          step: 'STEP 3',
          title: 'Your Data Loaded',
          body: 'Bring in your hotel details, transport, sightseeing information and existing enquiries. Import lead lists through CSV.',
        },
        {
          icon: 'CalendarCheck',
          step: 'STEP 4',
          title: 'Team Trained, Go Live',
          body: 'Your sales, operations and accounts teams learn their respective screens. Start managing live trips and preparing travel quotations through your workspace.',
        },
      ],
    },
    // PRICING — per-brief overrides for the section headline, lead, the
    // "under Rs. 20 a day" block and the fine print.
    pricing: {
      title: 'One Simple Price Per User, Per Month',
      lead: 'Get travel quotation software and the connected tools your team needs to manage enquiries, bookings, payments and trips. Pay according to the number of users in your team, with a minimum of 10 users. Add more users as your travel business grows.',
      dailyBody: 'A shared platform to capture travel enquiries, create quotations, manage bookings and collect payments.',
      fine: 'Prices exclusive of 18% GST. Pricing as of September 2026 and subject to change.',
    },
    // BUILT FOR — per-brief audience cards + case-study block.
    builtFor: {
      title: 'Teams That Quote the Same Destinations Daily',
      audiences: [
        {
          icon: 'MapPin',
          title: 'Tour Operators',
          body: 'Create travel quotations for domestic holidays, island packages and multi-day tours involving hotels, ferries and cabs. Reuse package details when preparing similar itineraries.',
        },
        {
          icon: 'Handshake',
          title: 'DMCs',
          body: 'Prepare destination-specific travel quotations and coordinate ground-handling services for travel agents. Create supplier-ready vouchers from bookings.',
        },
        {
          icon: 'Globe',
          title: 'Destination Specialists',
          body: 'Manage hotel rates, transport information and sightseeing details for the regions your team sells regularly. Build destination-based travel quotes using saved information.',
        },
        {
          icon: 'Users',
          title: 'Growing Travel Agencies',
          body: 'Give teams of 10 or more a shared view of enquiries, quotations, bookings and trip activity through connected travel quotation and CRM software.',
        },
      ],
      caseStudy: {
        title: 'A Leisure Tour Operator',
        challengeLabel: 'The Problem.',
        challenge: 'Enquiries arrived through the website, phone calls and WhatsApp. Every travel quotation had to be rebuilt manually, with hotel, ferry and cab costs checked for each package.',
        solutionLabel: 'What We Did.',
        solution: 'We deployed a branded Travel CRM workspace with a shared trip pipeline, reusable day-wise itineraries, branded travel quotations with hotel and ferry options, and instalment tracking with GST invoices.',
        outcomeLabel: 'The Outcome.',
        outcome: 'The team can now manage enquiries, reuse travel quotations and keep booking and payment information connected in one workspace.',
        note: 'live and running today',
      },
    },
    cta: { lines: ['See how travel quotation software'], underline: 'works for your agency' },
    faqTitle: 'Questions Travel Owners Ask Us',
    faqLead: 'Still unsure about how the travel quotation software works? Call +91 94227 99466 or WhatsApp +91 91645 66466. We will walk you through the quote-building process.',
    faq: [
      {
        q: 'How fast can we send a travel quotation?',
        a: 'If you have quoted the same destination before, you can start with that previous itinerary. Its day-wise plan, hotels, transfers and price are already available to use as a starting point. Adjust the details for the new enquiry instead of creating the entire quotation again.',
      },
      {
        q: 'Can we build a custom travel quotation from scratch?',
        a: "Yes. Create a customised quotation and build the itinerary day by day. Add hotels, transfers, activities and sightseeing based on the traveller's requirements.",
      },
      {
        q: 'Will the travel quotation carry our company branding?',
        a: 'Yes. Your company logo, contact details and destination imagery can appear on the quotations you send, giving your travel proposals a consistent business identity.',
      },
      {
        q: 'How can we share the completed travel quotation?',
        a: 'You can print the quotation, email it, download it as a PDF or send it through WhatsApp directly from the trip page.',
      },
      {
        q: 'Can we send more than one quotation for the same trip?',
        a: 'Yes. A trip can hold multiple quotations. They remain linked to the trip under All Quotes, allowing your team to review the different options offered to the customer.',
      },
      {
        q: 'What happens after the customer accepts the quotation?',
        a: 'The trip moves to booking. Your team can generate booking vouchers, record instalments and create receipts and GST invoices against logged payments.',
      },
    ],
  },

  // -------------------------------------------------------------------------
  'travel-itinerary-software': {
    keyword: 'travel itinerary software',
    angle: 'The itinerary document itself — the day-wise plan the guest reads.',
    metaTitle: 'Travel Itinerary Software for Tour Operators | NNC Digital',
    metaDescription:
      "Create day-wise travel plans with NNC Digital's Travel Itinerary Software. Manage hotels, transfers, activities and branded itineraries. Book a demo.",
    pill: 'TRAVEL ITINERARY SOFTWARE | PLAN DAY BY DAY',
    h1: { lines: ['Travel Itinerary Software', 'for Travel Agencies'], tail: '', underline: 'and Tour Operators' },
    tagline: 'Create detailed day-wise travel plans your customers can easily understand.',
    lead: "Create detailed day-wise travel plans with NNC Digital's Travel Itinerary Software. Organize hotels, meal plans, transfers and sightseeing activities into professional itineraries your customers can easily understand. Our Travel Itinerary Builder helps travel agencies and tour operators customize trip schedules, reuse existing itineraries and share branded travel plans. From itinerary creation to bookings and payments, simplify operations with one Travel Agency CRM Software.",
    secondaryCta: { label: 'See the Itinerary Builder', href: '#features' },
    heroNotes: ['add hotels and activities', 'reuse itineraries'],
    decisions: {
      kicker: 'WHAT GOES INTO A DAY',
      titleLines: ['Build Complete Travel Itineraries', 'with Five Essential Features'],
      lead: "NNC Digital's Travel Itinerary Software brings accommodation, transportation, sightseeing and branding into one organized trip plan. Create professional multi-day itineraries using our Day-Wise Itinerary Builder without repeatedly entering the same travel details.",
      // Dashboard labels per brief (uses the "Trip Sales Stats" / sentence-
      // case panel labels, not the travel-crm brief's newer variants).
      morningScreen: {
        greeting: 'Welcome back',
        subheading: 'Your desk, this morning',
        statsTitle: 'Trip Sales Stats',
        panels: [
          { title: 'Pending Follow-Ups', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
          { title: 'Due Incoming', cols: ['Today', 'Yesterday', 'Next 7 Days'] },
          { title: 'Trips Starting', cols: ['Today', 'Next 7 Days'] },
          { title: 'Trips Ending', cols: ['Today', 'Previous 7 Days'] },
        ],
      },
      cap: 'WHERE EACH ONE COMES FROM',
      note: 'one day at a time',
      // H3 items numbered per brief (1-5).
      items: [
        {
          icon: 'Hotel',
          q: '1. Add Hotels and Accommodation Details',
          where: 'BOOKINGS · HOTEL MASTER',
          a: 'Use our Travel Itinerary Planning Software to add hotels, star ratings, room categories, meal plans (CP, MAP, AP) and check-in/check-out timings to each day.',
        },
        {
          icon: 'Bus',
          q: '2. Plan Transport and Transfers',
          where: 'BOOKINGS · TRANSPORT',
          a: 'Organize ferries, cabs and transfers with Tour Itinerary Software. Add destination-specific transport services and travel arrangements to your itinerary.',
        },
        {
          icon: 'Ticket',
          q: '3. Include Sightseeing and Activities',
          where: 'BOOKINGS · SIGHTSEEING',
          a: "Create engaging travel schedules with our Travel Itinerary Builder by adding sightseeing destinations, activities and experiences to each day's plan.",
        },
        {
          icon: 'Palette',
          q: '4. Create Branded Travel Itineraries',
          where: 'SETTINGS · BRANDING',
          a: 'Customize your Travel Itinerary PDF with your agency logo, contact details and destination images for a professional presentation.',
        },
        {
          icon: 'RefreshCw',
          q: '5. Reuse Existing Travel Itineraries',
          where: 'TRIPS · SUGGESTED QUOTES',
          a: 'Save time with Reusable Travel Itinerary Software. Access previous destination itineraries, update trip details and prepare new travel plans without starting from scratch.',
        },
      ],
    },
    inside: {
      kicker: 'AROUND THE ITINERARY',
      title: 'More Than Travel Itinerary Software — Manage Your Travel Operations',
      lead: 'NNC Digital combines Travel Itinerary Software, Travel CRM Software and Travel Booking Management Software to manage itineraries, enquiries, bookings and payments from one platform.',
      // Module subtitles Title Case + per brief's "Trips — Manage Travel
      // Enquiries and Itineraries" pattern.
      modules: [
        {
          icon: 'ListChecks',
          name: 'Trips',
          subtitle: 'Manage Travel Enquiries and Itineraries.',
          lead: 'Organize customer enquiries with Travel Agency CRM Software.',
          items: [
            'Track seven trip stages from new enquiry to completed trip',
            'Assign sales executives and follow-up dates',
            'Search trips by customer name, phone number or trip ID',
            'Import leads using CSV and apply filters or tags',
            'Access itineraries, quotations and trip activity logs',
            'Share trip details through WhatsApp',
          ],
        },
        {
          icon: 'Hotel',
          name: 'Bookings',
          subtitle: 'Manage Hotels and Travel Services.',
          lead: 'Simplify reservations with Travel Booking Management Software.',
          items: [
            'Store hotel images, ratings, room types and meal plans',
            'Manage check-in/check-out details and child extra-bed ages',
            'Save location-specific transfers and sightseeing services',
            'Generate hotel, trip and activity vouchers',
            'Customize voucher pricing, branding and terms',
          ],
        },
        {
          icon: 'Receipt',
          name: 'Accounting',
          subtitle: 'Track Travel Payments.',
          lead: 'Manage finances with Travel Agency Accounting Software.',
          items: [
            'Track upcoming, paid, overdue and unverified payments',
            'Record instalments and outstanding balances',
            'Generate payment receipts and GST invoices',
            'Create proforma invoices and trip profit reports',
            'Download accounting records',
          ],
        },
        {
          icon: 'CalendarCheck',
          name: 'Tasks',
          subtitle: 'Manage Follow-Ups and Daily Activities.',
          lead: 'Improve team coordination with Travel Task Management Software.',
          items: [
            'Assign customer follow-ups and deadlines',
            'Add internal comments to trip records',
            'Receive booking and payment alerts',
            'Track guest arrivals and departures',
          ],
        },
      ],
      workspace: {
        kicker: 'AND AROUND THEM',
        items: [
          { icon: 'LayoutDashboard', title: 'Owner Dashboard', body: 'Monitor sales, quotations, payments and upcoming trips through your Travel CRM Dashboard.' },
          { icon: 'Palette', title: 'Your Branding', body: 'Add agency logos and contact details to customer itineraries and booking vouchers.' },
          { icon: 'Users', title: 'Individual User Access', body: 'Provide separate logins for sales, operations and accounting teams.' },
          { icon: 'Globe', title: 'Cloud-Based Workspace', body: 'Access your Online Travel Itinerary Software through a branded workspace on any browser.' },
        ],
      },
    },
    features: {
      kicker: 'MODULE BY MODULE',
      title: 'Travel Itinerary Software with Booking, CRM and Payment Management',
      lead: "Build professional itineraries and manage your travel business using NNC Digital's integrated Travel Agency Management Software.",
    },
    featureOrder: [ROW.QUOTES, ROW.BOOKINGS, ROW.TRIPS, ROW.ACCOUNTS, ROW.DASHBOARD],
    // Section 5 feature-row overrides per brief (keyed by row.num).
    featureRowOverrides: {
      '01': {
        title: 'Manage Travel Leads and Trip Itineraries Efficiently',
        note: 'every lead has an owner',
        items: [
          { icon: 'ListChecks', title: 'Track Every Travel Enquiry', body: 'Use Travel CRM Software to organize enquiries across seven trip stages, from new queries to completed trips.' },
          { icon: 'Users', title: 'Assign Sales Responsibilities', body: 'Manage customer enquiries with Travel Lead Management Software. Assign sales executives, follow-up dates and trip statuses.' },
          { icon: 'Upload', title: 'Search and Import Travel Records', body: 'Find trips by ID, customer name or phone number and import existing enquiry lists through CSV.' },
        ],
      },
      '02': {
        title: 'Create Customized Day-Wise Travel Itineraries',
        note: 'your logo, not ours',
        items: [
          { icon: 'RefreshCw', title: 'Reuse Successful Travel Plans', body: 'Our Travel Itinerary Builder suggests existing destination itineraries with hotels, transfers, sightseeing and pricing, helping you prepare new travel plans faster.' },
          { icon: 'Palette', title: 'Build Personalized Trip Schedules', body: 'Create customized day-wise itineraries using Tour Itinerary Planning Software. Add hotels, activities and transfers based on customer preferences.' },
          { icon: 'MessageCircle', title: 'Share Professional Travel Itineraries', body: 'Create branded Travel Itinerary PDFs and share them through WhatsApp, email, PDF download or print.' },
        ],
      },
      '03': {
        title: 'Manage Hotels, Transport and Sightseeing in One Place',
        note: 'set up once, reuse again',
        items: [
          { icon: 'Hotel', title: 'Centralized Hotel Management', body: 'Store hotel details, room types, meal plans and check-in information using Hotel Booking Management Software.' },
          { icon: 'Bus', title: 'Transport and Sightseeing Management', body: 'Save ferries, cabs and sightseeing activities by destination and reuse them in your Travel Itinerary Planning Software.' },
          { icon: 'Ticket', title: 'Generate Travel Booking Vouchers', body: 'Create trip, hotel and activity vouchers with customizable branding, pricing and terms using Travel Booking Software.' },
        ],
      },
      '04': {
        title: 'Manage Travel Payments, GST Invoices and Trip Profitability',
        note: 'simplify travel payment tracking',
        items: [
          { icon: 'Wallet', title: 'Track Payment Status', body: 'Use Travel Payment Tracking Software to monitor upcoming, paid, overdue and unverified payments.' },
          { icon: 'Receipt', title: 'Manage Instalments and Invoices', body: 'Record advance payments, track balances and generate receipts and GST invoices with Travel Agency Billing Software.' },
          { icon: 'FileText', title: 'Monitor Trip Profitability', body: 'Generate proforma invoices and review trip profit reports with Travel Agency Accounting Software.' },
        ],
      },
      '05': {
        title: 'Track Travel Sales, Itineraries and Business Performance',
        note: 'your daily business overview',
        items: [
          { icon: 'LayoutDashboard', title: 'Monitor Sales and Quotations', body: 'View revenue, leads, quotations and conversion figures through the Travel Agency CRM Dashboard.' },
          { icon: 'Bell', title: 'Track Follow-Ups and Payments', body: 'Monitor customer follow-ups, outstanding payments, booking alerts and team updates.' },
          { icon: 'CalendarCheck', title: 'Manage Upcoming Trips', body: 'Track trips starting and ending to coordinate guest pickups, check-ins and departure arrangements.' },
        ],
      },
    },
    // Section 6 (HOW IT WORKS) override per brief.
    how: {
      title: 'Get Started with Travel Itinerary Software in Four Simple Steps',
      lead: "Set up NNC Digital's Travel Itinerary Software and simplify itinerary planning, quotation creation and travel booking management.",
      steps: [
        { icon: 'Headset', step: 'STEP 1', title: 'Book a Live Demo', body: 'Explore our Travel Itinerary Builder through a demonstration using sample travel packages and trip schedules.' },
        { icon: 'PaletteOnDark', step: 'STEP 2', title: 'Set Up Your Workspace', body: 'Add your travel agency logo, business details and user logins to your branded Travel CRM Software.' },
        { icon: 'UploadOnDark', step: 'STEP 3', title: 'Import Your Travel Data', body: 'Add hotels, transport, sightseeing services and existing customer enquiries, including supported CSV imports.' },
        { icon: 'UsersOnDark', step: 'STEP 4', title: 'Train Your Team and Go Live', body: 'Train sales, operations and accounts teams to manage itineraries, bookings and payments from one platform.' },
      ],
    },
    // Section 7 (PRICING) override per brief. Shared pricing numbers.
    pricing: {
      title: 'Affordable Travel Itinerary Software Pricing for Travel Agencies',
      lead: 'Get Travel Itinerary Software, Travel CRM Software and Travel Booking Management Software with flexible per-user pricing for growing travel businesses.',
      dailyTitle: 'Travel Itinerary Software Starting at Under ₹20 a Day',
      dailyBody: 'NNC Digital offers Travel Itinerary Software for Travel Agencies starting at approximately ₹19.67 per user per day before GST, based on a 30-day month, helping teams manage itineraries, quotations and bookings.',
      fine: 'Pricing based on September 2026 rates and subject to change.',
    },
    builtFor: {
      title: 'Travel Itinerary Software for Tour Operators, DMCs and Travel Agencies',
      lead: 'Our Travel Itinerary Planning Software helps travel businesses create professional multi-day itineraries and manage destination-specific travel packages.',
      audiences: [
        { icon: 'MapPin', title: 'Tour Operators', body: 'Build domestic and international holiday itineraries with hotels, transfers and sightseeing using Tour Operator Itinerary Software.' },
        { icon: 'Handshake', title: 'Destination Management Companies (DMCs)', body: 'Manage destination services, transport, hotel bookings and vouchers using DMC Management Software.' },
        { icon: 'Globe', title: 'Destination Specialists', body: 'Create reusable itineraries for frequently booked locations with Customized Travel Itinerary Software.' },
        { icon: 'Users', title: 'Growing Travel Agencies', body: 'Manage customer enquiries, trip planning and bookings with Cloud-Based Travel Agency Management Software for teams of 10 or more.' },
      ],
      caseStudy: {
        title: 'How a Leisure Tour Operator Simplified Travel Itinerary Management',
        challengeLabel: 'The Challenge.',
        challenge: 'A leisure tour operator received enquiries through its website, calls and WhatsApp. Preparing travel packages required manually adding hotel details, ferry charges, transfers and day-wise activities.',
        solutionLabel: 'Our Solution.',
        solution: 'NNC Digital implemented Travel Itinerary Software with reusable destination plans, branded quotations, hotel and ferry options, centralized trip management and payment tracking.',
        outcomeLabel: 'The Outcome.',
        outcome: 'The operator now manages travel enquiries, reusable itineraries, booking records and GST invoices through one Travel CRM Software workspace.',
        note: 'live and running today',
      },
    },
    // Section 10 (FAQ) override.
    faqTitle: 'Frequently Asked Questions About Travel Itinerary Software',
    faqLead:
      'Have more questions? Call +91 94227 99466 or WhatsApp +91 91645 66466.',
    // Section 11 (FINAL CALL TO ACTION) override per brief.
    cta: {
      lines: ['Create Your First Travel Itinerary'],
      underline: 'with NNC Digital',
      leads: [
        "Simplify travel planning with NNC Digital's Travel Itinerary Software. Build customized day-wise itineraries, organize bookings and share branded travel plans from one platform.",
        'Explore how our Travel Itinerary Builder helps your agency manage trip schedules, customer enquiries and payments efficiently.',
      ],
      formTitle: 'Request Your Travel Itinerary Software Demo',
      formLead: 'Tell us a little about your travel business.',
    },
    faq: [
      {
        q: '1. Can we create day-wise travel itineraries?',
        a: "Yes. NNC Digital's Travel Itinerary Software lets you create day-wise travel plans with hotels, meal plans, transfers, sightseeing and activities.",
      },
      {
        q: '2. Does the itinerary builder include hotels and meal plans?',
        a: 'Yes. Our Travel Itinerary Builder uses saved hotel records containing room types, meal plans (CP, MAP, AP) and check-in/check-out details.',
      },
      {
        q: '3. Can we reuse existing travel itineraries?',
        a: 'Yes. Our Tour Itinerary Software keeps previous itineraries searchable by trip and suggests them for similar destinations, saving time on repeat enquiries.',
      },
      {
        q: '4. Can we add our travel agency branding?',
        a: 'Yes. Create professional itineraries with your agency logo, contact details and destination images using Branded Travel Itinerary Software.',
      },
      {
        q: '5. How can we share itineraries with customers?',
        a: 'You can share travel itineraries through WhatsApp, email, PDF download or print using our Online Travel Itinerary Software.',
      },
      {
        q: '6. What happens after the customer confirms the itinerary?',
        a: 'Our Travel Booking Management Software helps manage bookings, generate hotel and activity vouchers, track instalments and issue GST invoices.',
      },
    ],
  },
}

export const travelPageSlugs = Object.keys(travelPages)
