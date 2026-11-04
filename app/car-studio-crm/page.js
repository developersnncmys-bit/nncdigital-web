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
  title: 'Car Studio CRM Software for Car Detailing Studios | NNC',
  description:
    "Manage enquiries, bookings, job cards, billing and multiple branches with NNC Digital's Car Studio CRM. Explore features, pricing and book a demo.",
  alternates: { canonical: '/car-studio-crm/' },
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
    title: 'Car Studio CRM – Manage Every Bay and Branch from One Screen',
    lead: "Manage your entire car studio with NNC Digital's Car Studio CRM. From customer enquiries to final invoices, streamline appointments, quotations, job cards, services, inventory and petty cash across all branches through one centralized workspace.",
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    media: {
      type: 'video',
      src: '/videos/car-studio.mp4?v=3',
      framed: true,
    },
  },

  blocks: [
    // -----------------------------------------------------------------------
    // Pricing — two tiers. All numbers are placeholders in [brackets].
    // -----------------------------------------------------------------------
    {
      type: 'plans',
      title: 'Find the Right Car Studio CRM Plan for Your Business',
      lead: 'Choose a Car Studio CRM plan designed for single-branch detailing studios or multi-branch car care businesses. Flexible monthly and annual billing options are available, with no long-term contracts.',
      note: 'Prices are indicative, exclude 18% GST and are based on annual billing. Monthly billing is available at a premium. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Studio',
          desc: 'For single-branch car spas and detailing studios',
          price: 'Rs. 3,999',
          per: '/ month',
          priceNote: 'One branch · Up to 8 users · Billed annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's Included",
          features: [
            'Enquiry, quotation and follow-up management',
            'Appointment calendar with slot management',
            'Job cards with technician assignment',
            'Services, products and basic inventory',
            'GST invoicing and daily petty cash',
            'Email and chat support',
          ],
        },
        {
          name: 'Chain',
          desc: 'For multi-branch car studio groups',
          badge: 'Most Popular',
          highlight: true,
          price: 'Rs. 8,999',
          per: '/ month',
          priceNote: 'Up to 5 branches · 25 users · Billed annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Studio, plus',
          features: [
            'Multi-branch dashboard with combined KPIs',
            'Branch-wise petty cash and wallet transfers',
            'Staff attendance, leaves and shift management',
            'Customer and vehicle history across branches',
            'Custom quotation templates and approval workflows',
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
      title: 'A Closer Look Inside Car Studio CRM',
      lead: "NNC Digital's Car Studio CRM brings essential car studio operations together, including enquiries, quotations, appointments, job cards and billing.",
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries & Follow-ups',
          title: 'Manage Every Walk-In and WhatsApp Enquiry in One Place',
          body: 'Capture and organize customer enquiries using Car Detailing CRM Software that records vehicle details, service interests, budgets and lead status.',
          bullets: [
            'Capture leads from WhatsApp, calls, forms and walk-ins',
            'Categorize leads as Hot, Warm or Cold',
            'Schedule follow-up reminders for today, tomorrow or later in the week',
          ],
          media: { src: '/img/product/cs-enquiries.mp4', alt: 'Enquiries list with hot and warm leads tagged by vehicle' },
        },
        {
          key: 'quotes',
          label: 'Quotes',
          title: 'Create Professional Quotes with Car Studio CRM Software',
          body: 'Generate branded quotations in minutes using our Car Studio CRM Software. Select services and products, apply package discounts, and share GST-ready quotes through WhatsApp or email. Track customer approvals and quotation status effortlessly.',
          bullets: [
            'Service and product catalog with branch-wise pricing',
            'Package bundling and discount management',
            'Quotation tracking: Sent, Viewed and Approved',
          ],
          media: { src: '/img/product/cs-quotes.mp4', alt: 'A quote being prepared with services and package pricing' },
        },
        {
          key: 'appointments',
          label: 'Appointments',
          title: 'Simplify Bookings with Car Studio Management Software',
          body: 'Manage customer appointments, service bays and technician schedules with Car Studio CRM Software. View daily and weekly bookings, reschedule appointments, and send automated WhatsApp confirmations and reminders.',
          bullets: [
            'Daily, weekly and bay-wise booking calendars',
            'Automated WhatsApp booking confirmations and reminders',
            'Easy rescheduling and technician reassignment with booking history',
          ],
          media: { src: '/img/product/cs-appointments.mp4', alt: 'Appointment calendar showing today\'s bookings across bays' },
        },
        {
          key: 'jobcards',
          label: 'Job Cards',
          title: 'Track Every Service with Digital Job Card Management',
          body: 'Manage vehicle servicing from start to delivery with Car Studio CRM Software. Create digital job cards with vehicle details, selected services, assigned technicians and estimated delivery times. Monitor job progress through real-time status updates.',
          bullets: [
            'Technician assignment and workload tracking',
            'Job status: Opened → In Progress → Work Completed → Delivered',
            'Overdue alerts and estimated delivery tracking',
          ],
          media: { src: '/img/product/cs-jobcards.mp4', alt: 'A running job card with technician assigned and status updating' },
        },
        {
          key: 'billing',
          label: 'Billing & Cash',
          title: 'Simplify GST Billing with Car Studio CRM Software',
          body: 'Manage invoices, payments and daily expenses using our Car Studio CRM Software. Generate GST and non-GST invoices directly from job cards, track pending payments, and monitor branch-wise petty cash and wallet transfers from one dashboard.',
          bullets: [
            'GST and non-GST invoice generation',
            'Pending invoice and payment tracking',
            'Branch-wise petty cash and user wallet management',
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
      title: 'Car Studio Management Software Built for Daily Operations',
      lead: 'Simplify daily tasks with a Car Studio CRM designed for busy service bays, customer communication and business reporting.',
      items: [
        {
          icon: 'rocket',
          title: 'One Dashboard for Every Branch',
          body: 'Switch between branches or view all studio operations in one dashboard. Monitor revenue, running jobs and petty cash across locations using centralized Multi-Branch Car Studio CRM capabilities.',
          image: '/Car-studio/Card1-sm.webp',
          imageAlt: 'Multi-branch car studio dashboard showing revenue, running jobs and petty cash across every location',
        },
        {
          icon: 'whatsapp',
          title: 'Keep Customers Connected Through WhatsApp',
          body: 'Share quotations, appointment confirmations, vehicle pickup updates and festive offers through WhatsApp to maintain customer communication.',
          image: '/Car-studio/card2-sm.webp',
          imageAlt: 'WhatsApp conversation with a car studio customer showing booking confirmation and pickup message',
        },
        {
          icon: 'reports',
          title: 'Track Every Number That Matters',
          body: 'Monitor revenue by branch, service and technician. Review pending payments, cash inflow and expenses through the reporting dashboard.',
          image: '/Car-studio/card3-sm.webp',
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
      title: 'Manage Multiple Car Studio Branches with One Login',
      body: "NNC Digital's Car Studio CRM helps multi-branch car care businesses manage individual studio operations while maintaining centralized business visibility. Each branch can handle its own enquiries, appointments, job cards and daily activities, while owners monitor combined performance.",
      bullets: [
        'Manage branch-specific users, services and pricing',
        'View consolidated revenue and job card performance',
        'Track branch-wise petty cash, transfers and audit history',
      ],
      media: { type: 'image', src: '/showcase.jpg', alt: 'Multi-branch dashboard rolling up studios into one view' },
      flip: true,
    },

    // -----------------------------------------------------------------------
    // "Get started" 3-up CTA block
    // -----------------------------------------------------------------------
    {
      type: 'cards',
      title: 'Three Simple Ways to Get Started with Car Studio CRM',
      lead: "Explore NNC Digital's Car Studio CRM and discover how it supports your car detailing and service operations.",
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Schedule a 30-minute walkthrough using your own services and workflow. No credit card or commitment required.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an Expert',
          body: 'Discuss your studio requirements with our team and explore the suitable CRM plan for your business.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a Demo',
          body: 'Explore the main CRM modules, including enquiries, quotations, appointments, job cards and billing, before booking a call.',
          href: '#demo',
        },
      ],
    },

    // -----------------------------------------------------------------------
    // FAQ
    // -----------------------------------------------------------------------
    {
      type: 'faq',
      title: 'Car Studio CRM – Frequently Asked Questions',
      lead: "Everything you need to know about NNC Digital's Car Studio CRM before booking a demo.",
      items: [
        {
          q: 'Who is NNC Car Studio CRM built for?',
          a: "NNC Digital's Car Studio CRM is designed for car spas, car detailing studios, coating centers and multi-branch car care chains. It helps businesses manage customer appointments, technician assignments, job cards, invoices and branch activities.",
        },
        {
          q: 'What features are included in Car Studio CRM?',
          a: 'The software includes enquiry management, follow-ups, quotations, appointments, job cards, service and product management, inventory, invoicing and petty cash tracking. Additional multi-branch and staff management features are available in the Chain plan.',
        },
        {
          q: 'Can Car Studio CRM manage multiple branches?',
          a: 'Yes. The Chain plan supports up to five branches and 25 users. Each branch can manage enquiries, appointments, job cards and pricing independently, while owners access consolidated revenue and performance reports.',
        },
        {
          q: 'How much does NNC Car Studio CRM cost?',
          a: 'The Studio plan starts at ₹3,999 per month for one branch and up to eight users. The Chain plan starts at ₹8,999 per month for up to five branches and 25 users. These indicative rates are billed annually and exclude 18% GST. Monthly billing is also available at a premium.',
        },
        {
          q: 'Can I migrate existing customer and vehicle data to Car Studio CRM?',
          a: 'Yes. NNC Digital supports importing existing customer records, vehicle details, services and open enquiries from spreadsheets or another CRM. Historical invoices and job cards can also be imported during a one-time migration before launch.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Ready to Simplify Your Operations with Car Studio CRM?',
    sub: "Manage enquiries, appointments, job cards, billing and multiple branches with NNC Digital's Car Studio CRM. Book a 30-minute demo using your own services and branch requirements to explore how the software fits your business.",
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'See Pricing', href: '/pricing' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
