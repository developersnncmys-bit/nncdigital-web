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
  title: 'Car Studio CRM Software for Detailing Studios | NNC',
  description:
    "Manage bookings, quotations, job cards, billing and branches with NNC Digital's Car Studio CRM. Explore car detailing management features and book a demo.",
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
    lead: [
      "Simplify car care operations with NNC Digital's Car Studio CRM. Manage enquiries, appointments, quotations, job cards, inventory and billing in one platform.",
      'Our Car Studio Management Software combines Car Detailing CRM Software, Automotive CRM Software and Car Service Management Software to streamline daily operations across multiple branches.',
      'From bookings to vehicle delivery, our Car Detailing Business Management Software keeps your operations organized.',
    ],
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
      title: 'Affordable Car Studio CRM Software Pricing for Your Business',
      lead: [
        'Choose a Car Studio CRM plan designed for single-branch detailing studios and multi-branch car care businesses.',
        'Our Car Spa Management Software offers flexible monthly and annual billing options without long-term contracts.',
      ],
      note: 'Prices are indicative, exclude 18% GST and are based on annual billing. Monthly billing is available at a premium. Final pricing is confirmed before launch.',
      plans: [
        {
          name: 'Studio',
          desc: 'For Single-Branch Car Spas and Detailing Studios · Manage daily operations with CRM Software for Car Detailing Studios.',
          price: 'Rs. 3,999',
          per: '/ month',
          priceNote: 'One Branch · Up to 8 Users · Billed Annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: "What's Included",
          features: [
            'Enquiry, Quotation and Follow-Up Management',
            'Appointment Calendar with Slot Management',
            'Digital Job Cards and Technician Assignment',
            'Services, Products and Basic Inventory',
            'GST Invoicing and Daily Petty Cash',
            'Email and Chat Support',
          ],
        },
        {
          name: 'Chain',
          desc: 'For Multi-Branch Car Studio Groups · Scale operations with Multi-Branch Car Studio Management Software.',
          badge: 'Most Popular',
          highlight: true,
          price: 'Rs. 8,999',
          per: '/ month',
          priceNote: 'Up to 5 Branches · 25 Users · Billed Annually',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Studio, plus',
          features: [
            'Multi-Branch Dashboard with Combined KPIs',
            'Branch-Wise Petty Cash and Wallet Transfers',
            'Staff Attendance, Leaves and Shift Management',
            'Customer and Vehicle History Across Branches',
            'Custom Quotation Templates and Approval Workflows',
            'Priority Support and Onboarding',
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
      title: 'A Closer Look Inside Car Studio CRM Software',
      lead: "NNC Digital's Car Studio CRM combines essential business tools in one platform. Our Car Detailing CRM Software simplifies customer enquiries, quotations, bookings, job cards and billing for car spas and detailing studios.",
      cta: { label: 'Book a Demo', href: '#start', trial: true },
      tabs: [
        {
          key: 'enquiries',
          label: 'Enquiries & Follow-ups',
          title: 'Manage Every Walk-In and WhatsApp Enquiry in One Place',
          body: 'Capture leads from multiple channels using Car Detailing CRM Software. Our Automotive Lead Management Software helps track customer enquiries, vehicle details, service interests and follow-up activities.',
          bullets: [
            'Capture leads from WhatsApp, calls, forms and walk-ins',
            'Categorize enquiries as Hot, Warm or Cold',
            'Schedule follow-up reminders and track lead status',
          ],
          media: { src: '/img/product/cs-enquiries.mp4', alt: 'Enquiries list with hot and warm leads tagged by vehicle' },
        },
        {
          key: 'quotes',
          label: 'Quotes',
          title: 'Create Professional Quotes with Car Studio CRM Software',
          body: "Generate branded quotations with NNC Digital's Car Studio CRM Software. Our Car Detailing Quotation Software helps create GST-ready estimates, bundle service packages, manage discounts and share quotations through WhatsApp or email.",
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
          body: 'Manage customer appointments, service bays and technicians using Car Studio CRM Software. Our Car Studio Appointment Booking Software and Car Service Scheduling Software simplify daily bookings, rescheduling and automated WhatsApp reminders.',
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
          body: "Simplify vehicle service tracking with NNC Digital's Car Studio CRM Software. Our Digital Job Card Management Software records vehicle details, assigned technicians, services and estimated delivery times, helping you monitor every job from start to delivery.",
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
          body: "Manage invoices, payments and expenses with NNC Digital's Car Studio CRM Software. Our Car Studio Billing Software and Automotive Invoice Management Software help generate GST invoices, track pending payments and manage branch-wise petty cash.",
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
      lead: [
        "Simplify service operations, customer communication and reporting with NNC Digital's Car Studio CRM.",
        'Our Car Detailing Business Management Software helps manage service bays, employees and multiple locations.',
      ],
      items: [
        {
          icon: 'rocket',
          title: 'One Dashboard for Every Branch',
          body: 'Monitor bookings, revenue, active jobs and expenses across locations with Multi-Branch Car Studio CRM.',
          image: '/Car-studio/Card1-sm.webp',
          imageAlt: 'Multi-branch car studio dashboard showing revenue, running jobs and petty cash across every location',
        },
        {
          icon: 'whatsapp',
          title: 'Keep Customers Connected Through WhatsApp',
          body: 'Use Automotive Customer Relationship Management Software to share quotations, appointment confirmations, vehicle updates and offers through WhatsApp.',
          image: '/Car-studio/card2-sm.webp',
          imageAlt: 'WhatsApp conversation with a car studio customer showing booking confirmation and pickup message',
        },
        {
          icon: 'reports',
          title: 'Track Every Number That Matters',
          body: 'Track revenue, technician performance, pending payments and expenses with Car Studio Reporting and Analytics Software.',
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
      body: "Centralize operations across multiple locations with NNC Digital's Multi-Branch Car Studio CRM. Our Multi-Branch Car Studio Management Software helps car detailing businesses monitor appointments, job cards, revenue and customer information through one dashboard.",
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
      lead: "Explore NNC Digital's Car Studio CRM and discover how our Car Studio Management Software simplifies bookings, quotations, job cards and billing.",
      items: [
        {
          icon: 'rocket',
          title: 'Book a Demo',
          body: 'Schedule a 30-minute walkthrough of our CRM Software for Car Detailing Studios using your business workflow.',
          href: '#start',
        },
        {
          icon: 'phone',
          title: 'Talk to an Expert',
          body: 'Discuss your studio requirements and find the right Car Spa Management Software plan for your business.',
          href: '/company/contact',
        },
        {
          icon: 'help',
          title: 'Watch a Demo',
          body: 'Explore Automotive CRM Software features, including enquiries, appointments, quotations, job cards and billing.',
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
      lead: "Find answers about NNC Digital's Car Studio CRM, automotive business management features and pricing.",
      items: [
        {
          q: 'Who is NNC Car Studio CRM built for?',
          a: "NNC Digital's Car Studio CRM is designed for car spas, car detailing studios, coating centers and multi-branch car care businesses. Our Car Detailing Business Management Software helps manage bookings, technicians, job cards and billing.",
        },
        {
          q: 'What features are included in Car Studio CRM?',
          a: 'Our Car Studio Management Software includes lead management, quotations, appointment scheduling, digital job cards, inventory, GST invoicing and petty cash tracking. Advanced multi-branch features are available in the Chain plan.',
        },
        {
          q: 'Can Car Studio CRM manage multiple branches?',
          a: "Yes. NNC Digital's Multi-Branch Car Studio CRM supports up to five branches and 25 users through the Chain plan, with centralized customer records, revenue reports and branch management.",
        },
        {
          q: 'How much does NNC Car Studio CRM cost?',
          a: 'Our Car Studio CRM Software starts at ₹3,999/month for the Studio plan and ₹8,999/month for the Chain plan, based on annual billing. Prices exclude 18% GST, and monthly billing is available at a premium.',
        },
        {
          q: 'Can I migrate existing customer and vehicle data to Car Studio CRM?',
          a: 'Yes. Our Automotive CRM Software supports importing customer records, vehicle details, services and enquiries from spreadsheets or another CRM. Historical invoices and job cards can also be imported during migration.',
        },
      ],
    },
  ],

  // Final CTA band rendered by MarketingPage's CtaBand.
  cta: {
    title: 'Ready to Simplify Your Operations with Car Studio CRM?',
    sub: [
      "Manage bookings, enquiries, quotations, job cards, billing and multiple branches with NNC Digital's Car Studio CRM.",
      'Our Car Studio Management Software combines Car Detailing CRM Software, Car Spa Management Software and Automotive CRM Software features to streamline your business.',
      'Book a 30-minute demo and explore the right CRM solution for your car detailing business.',
    ],
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Talk to Sales', href: '/company/contact' },
  },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
