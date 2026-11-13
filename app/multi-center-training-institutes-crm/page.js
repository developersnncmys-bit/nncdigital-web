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
    lead: [
      "Simplify enquiries, admissions, courses and branch operations with NNC Digital's CRM for Training Institutes.",
      'Our Training Institute Management Software combines Student Admission Management Software, Education CRM Software and Learning Management System (LMS) features in one platform.',
      'From leads to enrolment, our CRM for Coaching Centers simplifies student and multi-branch management.',
    ],
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
      lead: [
        "Manage student admissions, branch operations and performance with NNC Digital's Multi-Center Training Institutes CRM.",
        'Our CRM for Training Institutes brings student records, communication and admissions into one centralized Institute Management Software platform.',
      ],
      items: [
        { icon: 'globe', title: 'Centralized Control', body: 'Manage multiple branches, student profiles and admission activities with Multi-Center Management Software.' },
        { icon: 'reports', title: 'Complete Visibility', body: 'Monitor student enquiries, enrolments and revenue across centers using Education CRM Software.' },
        { icon: 'whatsapp', title: 'Targeted Outreach', body: 'Engage prospective students through automated WhatsApp, SMS and email communication.' },
        { icon: 'pipeline', title: 'Student Journeys', body: 'Track enquiries, admissions and course progression with Student Lifecycle Management Software.' },
        { icon: 'users', title: 'Student Retention', body: 'Identify opportunities for advanced courses and improve engagement with Student Retention Management Software.' },
        { icon: 'forecast', title: 'Center Analytics', body: 'Compare branch admissions, counsellor activities and revenue using centralized Institute Performance Analytics.' },
      ],
    },
    {
      type: 'dataflow',
      config: {
        title: 'Complete Student Data Capture Across All Centers',
        lead: "Centralize student information with NNC Digital's CRM for Training Institutes and keep records organized across branches. Our Student Management Software maintains student profiles, contact details, IDs and campus information in one accessible Student Database Management System.",
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
      body: "Capture and organize admissions enquiries with NNC Digital's Student Lead Management CRM. Our Student Enquiry Management Software helps coaching centers track prospects, assign leads and manage follow-ups.",
      bullets: [
        'Capture student leads from Facebook, Google, webinars, websites and WhatsApp',
        'Automatically assign enquiries to the right center and counsellor',
        'Track admissions leads and follow-ups with Lead Management Software for Training Institutes',
      ],
    },
    {
      type: 'split',
      flip: true,
      kicker: 'One Source of Truth',
      title: 'Keep Course Information Consistent Across Every Center',
      body: 'Manage courses, batches, fees and offers with centralized Training Institute Management Software. Our Course Management Software and Coaching Center Management Software keep academic information consistent across branches.',
      bullets: [
        'Maintain updated course details, batch schedules and fee structures',
        'Share course updates and promotional offers across centers',
        'Ensure consistent communication with students and parents',
      ],
      media: img('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80', 'A coordinator checking course details across centers'),
    },
    {
      type: 'split',
      kicker: 'Know Your Students',
      title: 'Get a 360-Degree View of Every Student',
      body: "Access complete student profiles with NNC Digital's CRM for Training Institutes. Our Student Relationship Management Software gives counsellors a centralized view of enquiries, course interests and communication history.",
      bullets: [
        'Review previous calls, messages and center visits',
        'Access course preferences, test scores and student details',
        'Maintain shared student records using Student Information Management Software',
      ],
      media: img('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80', 'A counsellor meeting with a prospective student'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Track the Journey',
      title: 'Follow Every Step from Enquiry to Enrolment',
      body: "Simplify your admission process with Student Admission Management Software that tracks every prospect from enquiry to enrolment. NNC Digital's Admission Management CRM helps counsellors manage communication, admission stages and follow-up activities.",
      bullets: [
        'Automatically record student interactions',
        'Track enquiry, contacted, demo and enrolled stages',
        'Manage daily follow-ups with Student Admission Tracking Software',
      ],
      media: img('https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80', 'An admissions team mapping the enquiry-to-enrolment journey'),
    },
    {
      type: 'split',
      kicker: 'Smart Segmentation',
      title: 'Reach the Right Students with the Right Message',
      body: "Use NNC Digital's Education CRM Software to segment students based on course interests, admission stages and branch locations. Our Student Engagement CRM simplifies personalized communication and targeted admission campaigns.",
      bullets: [
        'Segment student leads by course, center, scores and admission stage',
        'Send personalized WhatsApp, SMS and email messages',
        'Reduce manual work with Student Communication Management Software',
      ],
      media: img('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80', 'A student receiving a well-targeted admissions message'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Omnichannel Campaigns',
      title: 'Manage Admissions Campaigns Across Every Channel',
      body: "NNC Digital's CRM for Training Institutes connects WhatsApp, SMS, email and calls in one communication workflow. Our Admission Marketing CRM helps coaching centers manage student enquiries, automated follow-ups and admissions campaigns.",
      bullets: [
        'Manage student communication through multiple channels',
        'Schedule admission reminders and automated follow-ups',
        'Improve counsellor productivity with CRM Automation Software',
      ],
      // Verified via Unsplash — person's hands using a phone (no brand
       // logo). Replaces an earlier URL that rendered the Netflix mark.
      media: img('https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=1200&auto=format&fit=crop&q=80', 'A student reading an admissions message on their phone'),
    },
    {
      type: 'split',
      kicker: 'Grow Existing Revenue',
      title: 'Turn One Course into the Next',
      body: "Increase student engagement and course progression with NNC Digital's Coaching Institute CRM. Our Student Retention Management Software helps institutes identify students interested in advanced programs and continued learning.",
      bullets: [
        'Identify students eligible for advanced courses',
        'Share personalized course recommendations and offers',
        'Support repeat enrolments through Student Lifecycle Management',
      ],
      // Verified via Unsplash — three graduates tossing their caps.
       // Replaces an earlier URL that was returning 404.
      media: img('https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200&auto=format&fit=crop&q=80', 'A student progressing to the next course after retention outreach'),
    },
    {
      type: 'featureGrid',
      flat: true,
      title: 'See Performance from Every Angle',
      lead: [
        "Monitor admissions, counsellor productivity and branch performance with NNC Digital's CRM for Training Institutes.",
        'Our Training Institute Analytics Software provides centralized reports to track enquiries, conversions and revenue.',
      ],
      items: [
        { icon: 'reports', title: 'Overall Performance', body: 'Track student enquiries, admissions and revenue using Admission Management Reports.' },
        { icon: 'integrations', title: 'Source Performance', body: 'Identify top-performing channels and campaigns with Student Lead Tracking Software.' },
        { icon: 'forecast', title: 'Center Performance', body: 'Compare branch performance and counsellor productivity through Multi-Center CRM Analytics.' },
      ],
    },
    {
      type: 'plans',
      title: 'Affordable CRM for Training Institutes – Simple Pricing Plans',
      lead: [
        "Choose NNC Digital's CRM for Training Institutes with flexible pricing for coaching centers, training academies and educational institutions.",
        'Our Training Institute Management Software combines admissions, course management, exams and Learning Management System (LMS) features.',
      ],
      note: 'Prices are annual, plus 18% GST. A free trial is available without a credit card.',
      plans: [
        {
          name: 'Starter',
          desc: 'For a single center getting online · An essential Training Institute CRM Software plan for managing courses, students and online learning.',
          price: 'Rs 30,000',
          per: '/ year',
          cta: { label: 'Book a Demo', href: '#start', trial: true },
          featuresHeader: 'Includes',
          features: ['Web LMS', 'Courses', 'Exams', 'Certificates', 'Capped students'],
        },
        {
          name: 'Growth',
          desc: 'For institutes ready to scale · Advanced Coaching Center Management Software with online learning, assessments and fee collection.',
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
          desc: 'White-labelled and fully yours · Scalable Multi-Center Training Institutes CRM with custom branding and centralized institute management.',
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
      title: 'Compare CRM for Training Institutes Plans and Features',
      lead: 'Explore Starter, Growth and Enterprise plans combining CRM for Training Institutes, Student Admission Management Software and Learning Management System (LMS) features.',
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
      type: 'faq',
      title: 'Frequently Asked Questions About CRM for Training Institutes',
      lead: "Find answers about NNC Digital's CRM for Training Institutes, admissions, coaching center management and LMS features.",
      items: [
        { q: 'Which is the best CRM for training institutes?', a: 'NNC Digital offers a CRM for Training Institutes that manages student enquiries, admissions, follow-ups and branch operations. Its Training Institute Management Software helps coaching centers organize student records and track performance through one platform.' },
        { q: 'How do you promote a coaching center?', a: "Coaching centers can generate admission leads through Google Ads, Facebook, websites, webinars and WhatsApp. NNC Digital's Student Lead Management CRM captures enquiries, assigns counsellors and simplifies follow-ups using Admission Management Software." },
        { q: 'Which is the best CRM for coaching centers?', a: 'NNC Digital provides a CRM for Coaching Centers with student lead tracking, admissions management, communication automation and analytics. Its Coaching Center Management Software also supports multi-center management through the Enterprise plan.' },
        { q: 'Can NNC Digital CRM manage admissions across multiple branches?', a: "Yes. NNC Digital's Multi-Center Training Institutes CRM supports centralized student records, admission tracking and branch performance management through its Enterprise plan." },
        { q: 'Does NNC Digital provide CRM and LMS features together?', a: 'Yes. NNC Digital combines Education CRM Software with a Learning Management System (LMS) to manage student admissions, courses, video lessons, exams and certificates. Growth and Enterprise plans include advanced learning features.' },
      ],
    },
  ],
  cta: {
    title: 'The CRM Built for Multi-Center Training Institutes',
    sub: [
      "Simplify admissions, student engagement and branch management with NNC Digital's CRM for Training Institutes.",
      'Our Training Institute Management Software combines Student Lead Management CRM, Student Admission Management Software and Learning Management System (LMS) features in one centralized platform.',
      'Book a 30-minute demo or start your free trial today.',
    ],
    primary: { label: 'Book a Demo', href: '#start' },
    secondary: { label: 'Start Free Trial', href: '#start' },
  },
}

export const metadata = {
  title: 'CRM for Training Institutes & Coaching Centers | NNC',
  description:
    "Manage student leads, admissions, courses and branches with NNC Digital's CRM for Training Institutes. Explore CRM & LMS features and book a demo.",
  alternates: { canonical: '/multi-center-training-institutes-crm/' },
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
