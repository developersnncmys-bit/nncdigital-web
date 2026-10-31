import MarketingPage from '@/components/marketing/MarketingPage'

// NNC Car Studio CRM landing page.
//
// Positioned for car spas, detailing studios, coating centers and multi-branch
// car care chains. The product is already running real workshops — the content
// here is modelled on the live admin dashboard (enquiries → quotes → appointments
// → job cards → invoices + branch-wise petty cash + attendance).
//
// We deliberately do NOT reference any specific studio or brand name on-page.
// All placeholder numbers wrap in [brackets] per project convention; replace
// before adding /car-studio-crm/ to lib/site.js INDEXABLE_PREFIXES.
export const metadata = {
  title: 'NNC Car Studio CRM | NNC Digital',
  description:
    'The CRM for car studios, detailing centers and multi-branch car care chains — enquiries, quotes, appointments, job cards, billing and branch-wise petty cash in one workspace.',
  robots: { index: false, follow: false },
}

const PAGE = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Products' },
    { label: 'Car Studio CRM' },
  ],

  hero: {
    eyebrow: 'Car Studio CRM',
    title: 'Run every bay, every branch, from one screen.',
    lead: 'From the first enquiry to the final invoice — bookings, quotes, job cards, services, inventory and petty cash across every branch, in one workspace built for car studios.',
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: "See what's inside", href: '#inside', variant: 'ghost' },
    ],
    media: {
      type: 'video',
      src: '/videos/car-studio.mp4?v=2',
      framed: true,
    },
  },

  blocks: [
    // -----------------------------------------------------------------------
    // Pricing — two tiers. All numbers are placeholders in [brackets].
    // -----------------------------------------------------------------------
    {
      type: 'plans',
      title: 'Find the plan that fits your studio.',
      lead: 'Two straightforward tiers. Pay monthly or save with annual billing. No contracts, cancel anytime.',
      note: 'Prices shown are indicative and exclusive of 18% GST. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Studio',
          desc: 'For single-branch car spas and detailing studios.',
          price: 'Rs. 3,999',
          per: '/ month',
          priceNote: '[For one branch, up to 8 users, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's included",
          features: [
            'Enquiries, quotes and followups in one inbox',
            'Appointment calendar with slot management',
            'Job cards with technician assignment and status',
            'Services, products and basic inventory',
            'GST invoicing and daily petty cash',
            'One branch, up to [8] users',
            'Email and chat support',
          ],
        },
        {
          name: 'Chain',
          desc: 'For multi-branch car studio groups.',
          badge: 'Most popular',
          highlight: true,
          price: 'Rs. 8,999',
          per: '/ month',
          priceNote: '[For up to 5 branches, 25 users, billed annually]',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Studio, plus',
          features: [
            'Multi-branch dashboard with roll-up KPIs',
            'Branch-wise petty cash with wallet transfers',
            'Attendance, leaves and shift management',
            'Customer and vehicle history across branches',
            'Custom quote templates and approval flows',
            'Up to [5] branches and [25] users',
            'Priority support and onboarding',
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Tabbed feature showcase. Each tab plays a real screen-recording of the
    // product module. FeatureTabs auto-detects .mp4 and renders a muted,
    // looping <video> inline.
    // -----------------------------------------------------------------------
    {
      type: 'featureTabs',
      id: 'inside',
      title: 'A closer look inside.',
      lead: 'The modules a working car studio actually runs on — enquiries, bookings, job cards and billing in the same workspace.',
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries & Followups',
          title: 'Every walk-in and WhatsApp lead in one list.',
          body: 'Capture leads with the car make, model and service they are asking about. Mark them Hot / Warm / Cold, set the next followup and never let an enquiry go stale.',
          bullets: [
            'Auto-capture from WhatsApp, calls, forms and walk-ins',
            'Lead tagged with vehicle, service interest and budget',
            'Followup reminders due today, tomorrow, this week',
          ],
          media: { src: '/img/product/cs-enquiries.mp4', alt: 'Enquiries list with hot and warm leads tagged by vehicle' },
        },
        {
          key: 'quotes',
          label: 'Quotes',
          title: 'Build a branded quote in minutes.',
          body: 'Pick services and products from your catalog, apply package discounts, and send a polished GST-ready quote on WhatsApp or email. Track opens, approvals and expiries.',
          bullets: [
            'Service and product catalog with branch pricing',
            'Package bundling and discount rules',
            'Quote followups with status (sent / viewed / approved)',
          ],
          media: { src: '/img/product/cs-quotes.mp4', alt: 'A quote being prepared with services and package pricing' },
        },
        {
          key: 'appointments',
          label: 'Appointments',
          title: 'Slot management without the back-and-forth.',
          body: 'See the day across every bay and technician. Book, reschedule or reassign a slot in two clicks — customers get a WhatsApp confirmation and a reminder the morning of.',
          bullets: [
            'Day, week and bay-view calendars',
            'Auto WhatsApp confirmations and reminders',
            'Reschedule or reassign without losing history',
          ],
          media: { src: '/img/product/cs-appointments.mp4', alt: 'Appointment calendar showing today\'s bookings across bays' },
        },
        {
          key: 'jobcards',
          label: 'Job Cards',
          title: 'From opened to delivered, every job tracked.',
          body: 'Every booking becomes a job card with the vehicle, services, assigned technician and estimated delivery. Status updates roll up to the owner dashboard in real time.',
          bullets: [
            'Technician assignment and workload view',
            'Status flow: Opened → In Progress → Work Completed → Delivered',
            'Overdue alerts and estimated delivery tracking',
          ],
          media: { src: '/img/product/cs-jobcards.mp4', alt: 'A running job card with technician assigned and status updating' },
        },
        {
          key: 'billing',
          label: 'Billing & Cash',
          title: 'GST invoices, petty cash and payments in one view.',
          body: 'Raise GST or non-GST invoices from a job card. Record payments by mode, track pending collections, and manage branch-wise petty cash with user wallets and transfers.',
          bullets: [
            'GST and non-GST invoicing from the job card',
            'Pending invoices and pending payments at a glance',
            'Branch-wise petty cash with user wallet transfers',
          ],
          media: { src: '/img/product/cs-billing.mp4', alt: 'Invoice and petty cash view with branch-wise cash flow' },
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 3-up benefit cards.
    // -----------------------------------------------------------------------
    {
      type: 'featureGrid',
      flat: true,
      title: 'Built for the way a car studio actually runs.',
      lead: 'Multi-bay, multi-branch and messy on the floor — the CRM handles it without turning your day into a spreadsheet.',
      items: [
        {
          icon: 'rocket',
          title: 'One screen for every branch',
          body: 'Switch branches from the top bar or roll up every studio into one dashboard. Revenue, running jobs and petty cash — side by side, by location.',
          image: '/Car-studio/Card1.webp',
          imageAlt: 'Multi-branch car studio dashboard showing revenue, running jobs and petty cash across every location',
        },
        {
          icon: 'whatsapp',
          title: 'Customers kept close on WhatsApp',
          body: 'Quotes, booking confirmations, pickup messages and festive offers all go out on the channel your customers actually open.',
          image: '/Car-studio/card2.webp',
          imageAlt: 'WhatsApp conversation with a car studio customer showing booking confirmation and pickup message',
        },
        {
          icon: 'reports',
          title: 'Know every number that matters',
          body: 'Revenue by branch, by service and by technician. Pending payments, cash in and cash out — ready for your morning review.',
          image: '/Car-studio/card3.webp',
          imageAlt: 'Car studio reports dashboard with revenue by branch, service and technician, plus pending payments and cash flow',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Multi-branch split — ties into chains that already run more than one.
    // -----------------------------------------------------------------------
    {
      type: 'split',
      kicker: 'MULTIPLE BRANCHES?',
      title: 'One login. Every branch. Clean roll-up.',
      body: 'Each branch runs its own enquiries, appointments and job cards — and the owner dashboard rolls them all up into one view. Petty cash, attendance and inventory stay branch-specific; revenue and KPIs come together.',
      bullets: [
        'Branch-level users, services and pricing',
        'Owner dashboard rolls up revenue and job cards',
        'Branch-wise petty cash with transfers and audit trail',
      ],
      media: { type: 'image', src: '/showcase.jpg', alt: 'Multi-branch dashboard rolling up studios into one view' },
      flip: true,
    },

    // -----------------------------------------------------------------------
    // "Get started" 3-up CTA block
    // -----------------------------------------------------------------------
    {
      type: 'cards',
      title: 'Three ways to get started.',
      lead: 'See it in action on your own data, talk to a human, or watch a quick walkthrough — pick whichever fits.',
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Thirty-minute walkthrough on your own services and workflow. No credit card, no commitment.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an expert',
          body: 'Not sure where to start? Call us and we will help you figure out the right fit for your studio or chain.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a demo',
          body: 'See the main screens — enquiries, quotes, appointments, job cards and billing — before you book a call.',
          href: '#demo',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // FAQ
    // -----------------------------------------------------------------------
    {
      type: 'faq',
      title: 'Car Studio CRM — common questions.',
      lead: 'Everything you need to know before booking a demo.',
      items: [
        {
          q: 'Who is NNC Car Studio CRM built for?',
          a: 'Car spas, detailing studios, coating centers and multi-branch car care chains. If you take appointments, assign jobs to technicians, raise invoices and want to see what each branch is doing — this is for you.',
        },
        {
          q: 'What modules does it include out of the box?',
          a: 'Enquiries, followups, quotes, appointments, job cards, services, products and inventory, GST and non-GST invoicing, branch-wise petty cash, customer and vehicle history, attendance and leaves. The owner dashboard rolls up revenue, pending payments and running jobs across every branch.',
        },
        {
          q: 'Does it handle multiple branches?',
          a: 'Yes. Each branch runs its own enquiries, appointments and job cards, with branch-specific users, pricing and petty cash. The owner dashboard rolls up revenue and KPIs across every branch so you see the whole chain at a glance.',
        },
        {
          q: 'How much does it cost?',
          a: 'Studio is [Rs. 3,999 per month] for a single branch with up to 8 users. Chain is [Rs. 8,999 per month] for up to 5 branches and 25 users. Both are billed annually and exclusive of 18% GST; monthly billing is available at a small premium. Final pricing is confirmed before launch.',
        },
        {
          q: 'How quickly can we go live?',
          a: 'Most studios are live in a week. We import your service catalog, set up branches, users and bays, and run a short training session for your team. From there, your front desk can book, quote and raise invoices on day one.',
        },
        {
          q: 'Can we migrate from Google Sheets or another CRM?',
          a: 'Yes. We import your existing customers, vehicles, services and open enquiries from a spreadsheet or your current CRM. Historical invoices and job cards can be imported too, in a one-time migration before launch.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Ready to see Car Studio CRM?',
    sub: 'Book a 30-minute demo on your own services and branches. We will show you exactly how it fits your studio.',
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Talk to sales', href: '/company/contact' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
