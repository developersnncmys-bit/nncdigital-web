import MarketingPage from '@/components/marketing/MarketingPage'

const img = (src, alt) => ({ type: 'image', src, alt })

const PAGE = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Training Institutes & Coaching Centers' },
  ],
  hero: {
    eyebrow: 'Training Institutes & Coaching Centers',
    title: 'Best CRM for Training Institutes and Coaching Centers',
    lead: "Manage admissions, student enquiries and branch operations with NNC Digital's CRM for Training Institutes. Track every student journey from initial enquiry to enrolment while maintaining complete visibility across all your centers through one centralized platform.",
    ctas: [
      { label: 'Book a Demo', href: '#start', trial: true },
      { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
    ],
    // Animated SVG product mockup inside the scenic-photo + frosted-glass
    // framed hero treatment (same visual pattern as the Small Business CRM
    // hero). `framed: true` wraps the component in a mountain-landscape
    // backdrop with a glass panel; the `Flat` variant drops the 3D tilt
    // and decorative floating cards since the external frame already
    // supplies the visual chrome.
    media: {
      type: 'component',
      name: 'trainingInstitutesDashboardFlat',
      framed: true,
    },
  },
  blocks: [
    {
      type: 'stats',
      title: 'Trusted by Training Institutes and Coaching Centers Across India',
      items: [
        { value: '1,000+', label: 'Institutes and centers' },
        { value: '32%', label: 'More enquiries converted' },
        { value: '1 Day', label: 'To go live across centers' },
      ],
    },
    {
      type: 'featureGrid',
      flat: true,
      title: 'One CRM for Every Center You Run',
      lead: 'Manage admissions, students and branch performance with a centralized CRM for Training Institutes that brings all your centers together.',
      items: [
        { icon: 'globe', title: 'Centralized Control', body: 'Manage all your centers, student records and admission activities through one dashboard.' },
        { icon: 'reports', title: 'Complete Visibility', body: 'Monitor enquiries, admissions and revenue across every branch in real time.' },
        { icon: 'whatsapp', title: 'Targeted Outreach', body: 'Connect with prospective students through automated WhatsApp, SMS and email communication.' },
        { icon: 'pipeline', title: 'Student Journeys', body: 'Track students from their first enquiry to enrolment and future course progression.' },
        { icon: 'users', title: 'Student Retention', body: 'Identify students ready for their next program and engage them with relevant offers.' },
        { icon: 'forecast', title: 'Center Analytics', body: 'Compare branch performance and counsellor activities through centralized reports.' },
      ],
    },
    {
      type: 'dataflow',
      config: {
        title: 'Complete Student Data Capture Across All Centers',
        lead: 'Maintain accurate student information with a CRM for Training Institutes that keeps records synchronized across branches and headquarters. Create individual student profiles containing contact details, student IDs and campus information, ensuring consistent access to updated records.',
        student: {
          name: 'Aarav Sharma',
          initials: 'AS',
          age: 21,
          email: 'aarav.sharma@email.com',
          studentId: 'NNC 10241',
          campus: 'Pune Central / PC1',
        },
        learners: [{ initials: 'PS' }, { initials: 'MK' }],
        centers: [
          { label: 'Center 1', kind: 'center' },
          { label: 'Center 2', kind: 'center' },
          { label: 'Headquarter', kind: 'hq' },
        ],
      },
    },
    {
      type: 'leadCapture',
      kicker: 'Capture Every Enquiry',
      title: 'Zero Lead Leakage Across All Your Centers',
      body: 'Capture enquiries from multiple platforms using a Student Lead Management CRM and organize them in one centralized inbox.',
      bullets: [
        'Collect leads from Facebook, Google, webinars, websites and WhatsApp',
        'Automatically assign enquiries to the right center and counsellor',
        'Track student leads across branches without missing follow-ups',
      ],
    },
    {
      type: 'split',
      flip: true,
      kicker: 'One Source of Truth',
      title: 'Keep Course Information Consistent Across Every Center',
      body: 'Manage course details, batch schedules, fees and current offers using centralized Training Institute Management Software.',
      bullets: [
        'Maintain standard course, batch and fee information',
        'Share updates and offers across centers instantly',
        'Ensure consistent communication with students and parents',
      ],
      media: img('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80', 'A coordinator checking course details across centers'),
    },
    {
      type: 'split',
      kicker: 'Know Your Students',
      title: 'Get a 360-Degree View of Every Student',
      body: "Access complete student information through NNC Digital's CRM for Training Institutes, allowing counsellors to continue conversations with full context.",
      bullets: [
        'Review previous calls, messages and center visits',
        'Access course interests, test scores and demographics',
        'Maintain shared student histories across branches',
      ],
      media: img('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80', 'A counsellor meeting with a prospective student'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Track the Journey',
      title: 'Follow Every Step from Enquiry to Enrolment',
      body: "Simplify admissions with Student Admission Management Software that tracks every prospective student's progress.",
      bullets: [
        'Automatically log student interactions',
        'Monitor enquiry, contacted, demo and enrolled stages',
        'Provide daily follow-up action lists for counsellors',
      ],
      media: img('https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80', 'An admissions team mapping the enquiry-to-enrolment journey'),
    },
    {
      type: 'split',
      kicker: 'Smart Segmentation',
      title: 'Reach the Right Students with the Right Message',
      body: 'Use Education CRM Software to group students according to their interests and admission stages for more relevant communication.',
      bullets: [
        'Segment students by course, center, score or funnel stage',
        'Send personalized messages to different student groups',
        'Reduce repetitive manual communication',
      ],
      media: img('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80', 'A student receiving a well-targeted admissions message'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Omnichannel Campaigns',
      title: 'Manage Admissions Campaigns Across Every Channel',
      body: "NNC Digital's CRM for Training Institutes brings WhatsApp, SMS, email and calls into one communication workflow.",
      bullets: [
        'Manage multiple communication channels centrally',
        'Schedule automated reminders and follow-ups',
        'Help counsellors focus on student admissions',
      ],
      // Verified via Unsplash — person's hands using a phone (no brand
       // logo). Replaces an earlier URL that rendered the Netflix mark.
      media: img('https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=1200&auto=format&fit=crop&q=80', 'A student reading an admissions message on their phone'),
    },
    {
      type: 'split',
      kicker: 'Grow Existing Revenue',
      title: 'Turn One Course into the Next',
      body: 'Support student retention with a Coaching Institute CRM that identifies opportunities for continued learning and course progression.',
      bullets: [
        'Identify students ready for advanced courses',
        'Share targeted offers at relevant stages',
        'Encourage continued enrolment across programs',
      ],
      // Verified via Unsplash — three graduates tossing their caps.
       // Replaces an earlier URL that was returning 404.
      media: img('https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200&auto=format&fit=crop&q=80', 'A student progressing to the next course after retention outreach'),
    },
    {
      type: 'featureGrid',
      flat: true,
      title: 'See Performance from Every Angle',
      lead: 'Track admissions and branch operations using a CRM for Training Institutes with centralized performance dashboards.',
      items: [
        { icon: 'reports', title: 'Overall Performance', body: 'View student enquiries, admissions and revenue across all centers.' },
        { icon: 'integrations', title: 'Source Performance', body: 'Identify marketing channels and campaigns generating student enquiries.' },
        { icon: 'forecast', title: 'Center Performance', body: 'Compare branch and counsellor performance side by side.' },
      ],
    },
    {
      type: 'plans',
      title: 'Simple Pricing for Training Institutes',
      lead: 'Choose a CRM for Training Institutes plan that supports your admissions, courses, exams and learning requirements.',
      note: 'Prices are annual, plus 18% GST. A free trial is available without a credit card.',
      plans: [
        {
          name: 'Starter',
          desc: 'For a single center getting online',
          price: 'Rs 30,000',
          per: '/ year',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Includes',
          features: ['Web LMS', 'Courses', 'Exams', 'Certificates', 'Capped students'],
        },
        {
          name: 'Growth',
          desc: 'For institutes ready to scale',
          price: 'Rs 75,000 to 90,000',
          per: '/ year',
          highlight: true,
          badge: 'Most Popular',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Everything in Starter, plus',
          features: ['Live classes', 'Test series', 'WhatsApp fee collection'],
        },
        {
          name: 'Enterprise',
          desc: 'White-labelled and fully yours',
          price: 'Custom',
          per: '',
          priceNote: 'Tailored to your institute',
          cta: { label: 'Drop an Enquiry', href: '/company/contact' },
          featuresHeader: 'Everything in Growth, plus',
          features: ['White-labelled app', 'Custom domain', 'Priority support'],
        },
      ],
    },
    {
      type: 'compareTable',
      title: 'Everything Each Plan Includes',
      lead: 'Explore the features available across Starter, Growth and Enterprise plans, combining CRM for Training Institutes with a Learning Management System (LMS).',
      plans: ['Starter', 'Growth', 'Enterprise'],
      popularIndex: 1,
      groups: [
        { group: 'Learning platform (LMS)', rows: [
          { label: 'Web LMS portal', values: [true, true, true] },
          { label: 'Courses, sections and lessons', values: [true, true, true] },
          { label: 'Video lessons with HLS streaming', values: [true, true, true] },
          { label: 'Secure video with DRM and watermark', values: [false, true, true] },
          { label: 'Drip schedule and prerequisites', values: [true, true, true] },
          { label: 'Assignments and doubt solving', values: [true, true, true] },
          { label: 'Discussion forum', values: [false, true, true] },
        ] },
        { group: 'Assessments and certificates', rows: [
          { label: 'Exams and quizzes', values: [true, true, true] },
          { label: 'Online proctoring and anti cheat', values: [false, true, true] },
          { label: 'Test series and question bank', values: [false, true, true] },
          { label: 'All India ranking', values: [false, true, true] },
          { label: 'Certificates with QR verify', values: [true, true, true] },
          { label: 'Custom certificate templates', values: [false, true, true] },
        ] },
        { group: 'Live classes and engagement', rows: [
          { label: 'Live classes, native or Zoom and Meet', values: [false, true, true] },
          { label: 'Session recordings archived', values: [false, true, true] },
          { label: 'Attendance capture', values: [false, true, true] },
        ] },
        { group: 'CRM and admissions', rows: [
          { label: 'Lead and admissions management', values: [true, true, true] },
          { label: 'Student and enrollment management', values: [true, true, true] },
          { label: 'Batch and cohort management', values: [true, true, true] },
          { label: 'Staff accounts and roles', values: [true, true, true] },
          { label: 'Multi center management', values: [false, false, true] },
        ] },
        { group: 'Fees and payments', rows: [
          { label: 'Online fee collection with Razorpay', values: [true, true, true] },
          { label: 'Instalments and EMI schedules', values: [true, true, true] },
          { label: 'Receipts and fee dashboard', values: [true, true, true] },
          { label: 'WhatsApp fee collection and reminders', values: [false, true, true] },
        ] },
        { group: 'Communication', rows: [
          { label: 'Email and SMS notifications', values: [true, true, true] },
          { label: 'In app and push notifications', values: [true, true, true] },
          { label: 'WhatsApp Business API', values: [false, true, true] },
        ] },
        { group: 'Branding and apps', rows: [
          { label: 'Your logo and colours', values: [true, true, true] },
          { label: 'Student mobile app, shared branded', values: [true, true, true] },
          { label: 'White labelled mobile app', values: [false, false, true] },
          { label: 'Custom domain', values: [false, false, true] },
        ] },
        { group: 'Analytics and reporting', rows: [
          { label: 'Dashboards for enrollment, exams and fees', values: [true, true, true] },
          { label: 'Video and exam analytics', values: [false, true, true] },
          { label: 'Cohort comparison and scheduled reports', values: [false, true, true] },
          { label: 'CSV and PDF export', values: [true, true, true] },
        ] },
        { group: 'Capacity, security and support', rows: [
          { label: 'Student capacity', values: ['Capped', 'Expanded', 'Unlimited'] },
          { label: 'Secure isolated instance', values: [true, true, true] },
          { label: 'MFA, encryption and audit log', values: [true, true, true] },
          { label: 'Daily backups', values: [true, true, true] },
          { label: 'Onboarding', values: ['Self serve', 'Guided', 'Dedicated'] },
          { label: 'Support', values: ['Email', 'Priority', 'Dedicated manager'] },
        ] },
      ],
    },
    {
      type: 'testimonials',
      title: 'Loved by institutes that run multiple centers',
      lead: 'Sample stories shown here. Replace with your own customer quotes before launch.',
      items: [
        { quote: 'We finally see every center in one place. Enquiries stopped slipping and our admissions went up within the first term.', name: 'Ananya Rao', role: 'Director', company: 'BrightPath Academy', result: '+24% admissions', initials: 'AR' },
        { quote: 'Counsellors across five centers now follow the same process. Follow ups are automatic and nothing falls through.', name: 'Imran Sheikh', role: 'Operations Head', company: 'SkillForge', result: '5 centers unified', initials: 'IS' },
        { quote: 'Center by center analytics showed us exactly where to focus. Setup took a day and the team adopted it instantly.', name: 'Meera Nair', role: 'Founder', company: 'TopRankers', result: '1-day setup', initials: 'MN' },
      ],
    },
    {
      type: 'faq',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Which is the best CRM for training institutes?', a: 'NNC Digital offers a CRM for Training Institutes designed to manage student enquiries, admissions, communication and branch operations. Its centralized system supports training institutes and coaching centers in organizing student information and tracking performance.' },
        { q: 'How do you promote a coaching center?', a: 'Coaching centers can generate enquiries through Google, Facebook, websites, webinars and WhatsApp. NNC Digital helps capture these enquiries, assign them to counsellors and manage follow-ups through centralized admissions workflows.' },
        { q: 'Which is the best CRM for coaching centers?', a: 'NNC Digital provides a CRM for Coaching Centers with lead management, student admission tracking, communication workflows and performance analytics. Multi-center management is available under the Enterprise plan.' },
        { q: 'Can NNC Digital CRM manage admissions across multiple branches?', a: "Yes. NNC Digital's Enterprise plan supports multi-center management, helping institutes organize student records, admission activities and branch performance through a centralized platform." },
        { q: 'Does NNC Digital provide CRM and LMS features together?', a: 'Yes. NNC Digital combines student admission management with LMS capabilities such as courses, video lessons, exams and certificates. Live classes, test series and additional learning features are available in Growth and Enterprise plans.' },
      ],
    },
  ],
  cta: {
    title: 'The CRM Built for Multi-Center Training Institutes',
    sub: "Simplify student enquiries, admissions and branch operations with NNC Digital's CRM for Training Institutes. Book a 30-minute demo to explore the platform using your own data, or start your free trial today.",
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'See Pricing', href: '/pricing' },
  },
}

export const metadata = {
  title: 'CRM for Training Institutes & Coaching Centers | NNC',
  description:
    "Manage student leads, admissions and multiple branches with NNC Digital's CRM for Training Institutes. Explore features, pricing and book a demo.",
  alternates: { canonical: '/multi-center-training-institutes-crm/' },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
