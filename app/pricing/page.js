import PlanGrid from '@/components/pricing/PlanGrid'
import ComparisonTable from '@/components/pricing/ComparisonTable'
import FeatureGridInner from '@/components/marketing/FeatureGridInner'
import Faq from '@/components/sections/Faq/Faq'
import { pricing } from '@/data/content'
import styles from './pricing.module.css'

export const metadata = {
  title: 'CRM Pricing Plans in India | NNC Digital',
  description:
    'Compare affordable CRM Pricing Plans from ₹14,999/year. Explore sales, lead management, WhatsApp and billing features. Start your free 30-day trial.',
  alternates: { canonical: '/pricing' },
}

// Pricing-page-specific hero sub. Kept local to this page (separate from the
// homepage's `pricing.lead` content) so each page's SEO lead stays targeted.
const HERO_SUB = [
  "Explore NNC Digital's CRM Pricing Plans for startups, small businesses and enterprises.",
  'Our Affordable CRM Software offers flexible CRM Software Pricing with lead management, sales pipelines, billing, forecasting and customer management.',
  'Choose CRM Subscription Plans based on team size, with transparent Business CRM Pricing and no additional per-user charges within your plan.',
]

// "Why Businesses Choose NNC CRM Pricing Plans" — six reasons per brief.
const WHY = [
  { icon: 'users', title: 'Priced by Team Size, Not Per User', body: 'Choose fixed CRM Subscription Plans for 1, 3 or 10 users without additional per-user charges within your plan.' },
  { icon: 'integrations', title: 'Modular CRM for Your Requirements', body: 'Customize your Business CRM Software by selecting modules for sales, customer management, billing and operations.' },
  { icon: 'whatsapp', title: 'Built-In WhatsApp Engagement', body: 'Manage conversations and customer follow-ups with CRM with WhatsApp Integration, available in Growth and Enterprise plans.' },
  { icon: 'forecast', title: 'Sales Forecasting and Analytics', body: 'Track revenue projections, sales targets and performance using Sales CRM Software with 3, 6 and 12-month forecasting.' },
  { icon: 'invoice', title: 'Flexible CRM Billing Options', body: 'Choose quarterly, half-yearly or yearly CRM Software Subscription Plans based on your business budget.' },
  { icon: 'rocket', title: 'Quick CRM Setup', body: 'Get started with Easy-to-Use CRM Software through quick onboarding, with most teams able to begin within a day.' },
]

// "Why Choose NNC Digital Solutions for Your CRM?" — three trust cards per brief.
const TRUST = [
  { icon: 'security', title: 'A Proven Software Development Track Record', body: 'With 10+ years of experience and 565+ delivered projects, NNC Digital builds Customizable CRM Software for different business requirements.', image: '/pricing/card1.webp', imageAlt: 'Ten year track record of delivered CRM projects for Indian businesses' },
  { icon: 'globe', title: 'Developed and Supported in India', body: 'Our teams across four Indian cities provide support for CRM Software in India, understanding local business workflows and operations.', image: '/pricing/card2.webp', imageAlt: 'NNC teams across four Indian cities supporting local businesses' },
  { icon: 'lock', title: 'Secure Business Data Management', body: 'Protect customer information with Secure CRM Software featuring encryption, backups, role-based access and data export options.', image: '/pricing/card3.webp', imageAlt: 'Encrypted and backed-up CRM data protected by role-based access controls' },
]

const STATS = [
  { value: '10+ Years', label: 'Building software' },
  { value: '565+ Projects', label: 'Delivered' },
  { value: '35+ Professionals', label: 'In-house team' },
  { value: '4 Offices', label: 'Across India' },
]

// Five FAQs per the content brief.
const FAQ = [
  { q: 'Is NNC CRM pricing based on the number of users?', a: 'NNC Digital offers CRM Pricing Plans based on team size rather than separate per-user charges. Starter supports 1 user, Growth supports up to 3 users and Enterprise supports up to 10 users.' },
  { q: 'Can I pay for my CRM subscription quarterly?', a: 'Yes. Our CRM Subscription Plans offer quarterly, half-yearly and yearly billing. Businesses can choose flexible CRM Software Pricing and change their billing term at renewal.' },
  { q: 'What does multi-tenant CRM mean for my business?', a: "Multi-Tenant CRM Software allows businesses or centers to operate in separate secure spaces while maintaining centralized management. NNC Digital's Enterprise CRM Software supports multi-center operations." },
  { q: 'Is GST included in the CRM pricing?', a: "No. NNC Digital's CRM Software Pricing in India excludes 18% GST. Starter costs ₹14,999/year, Growth ₹29,999/year and Enterprise ₹59,999/year before taxes." },
  { q: 'Does NNC Digital offer a free CRM trial?', a: 'Yes. NNC Digital offers a 30-day trial of its Customer Relationship Management Software without a credit card. Explore features and choose suitable CRM Pricing Plans for your business.' },
]

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <header className={`container ${styles.head}`}>
        <span className={styles.kicker}>/ Pricing</span>
        <h1 className={styles.title}>
          Flexible CRM Pricing Plans That Scale with <span className={styles.navy}>Your Business</span>
        </h1>
        {HERO_SUB.map((p, i) => (
          <p key={i} className={styles.sub}>
            {p}
          </p>
        ))}
      </header>

      <section className={`container ${styles.block}`}>
        <h2 className={styles.sectionTitle}>Affordable CRM Pricing Plans for Every Business</h2>
        <p className={styles.sectionLead}>
          Compare NNC Digital&apos;s CRM Pricing Plans and choose the right CRM Software for Small Businesses, sales teams or multi-center enterprises.
        </p>
        <p className={styles.sectionLead}>
          Our CRM Software Pricing in India starts at ₹14,999/year with flexible subscription options.
        </p>
      </section>

      <section className={`container ${styles.block}`}>
        <PlanGrid />
        <p className={styles.note}>{pricing.note}</p>
      </section>

      <section className={`container ${styles.tableSection}`}>
        <h2 className={styles.tableTitle}>Compare CRM Pricing Plans and Software Features</h2>
        <p className={styles.sectionLead}>
          Compare NNC Digital&apos;s CRM Subscription Plans to find the right Customer Relationship Management Software for your business.
        </p>
        <p className={styles.sectionLead}>
          Explore CRM Software Pricing, sales management, automation, security and integration features across Starter, Growth and Enterprise plans.
        </p>
        <div className={styles.tableWrap}>
          <ComparisonTable />
        </div>
      </section>

      <section className={`container ${styles.block}`}>
        <h2 className={styles.sectionTitle}>Why Businesses Choose NNC CRM Pricing Plans</h2>
        <p className={styles.sectionLead}>
          NNC Digital offers Affordable CRM Pricing Plans in India with flexible billing, business management tools and scalable features.
        </p>
        <p className={styles.sectionLead}>
          Our CRM Software for Small Businesses and growing teams simplifies lead management, sales tracking, billing and customer engagement.
        </p>
        <FeatureGridInner items={WHY} flat />
      </section>

      <section className={styles.trustWrap}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose NNC Digital Solutions for Your CRM?</h2>
          <p className={styles.sectionLead}>
            Developed by Nakshatra Namaha Creations, NNC Digital delivers flexible Customer Relationship Management Software backed by business-focused software development experience.
          </p>
          <p className={styles.sectionLead}>
            Our Business CRM Solutions combine lead management, sales tracking, customer engagement and billing through one centralized platform.
          </p>
          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <FeatureGridInner items={TRUST} />
        </div>
      </section>

      <Faq
        id="pricing-faq"
        data={{
          eyebrow: 'FAQ',
          title: 'CRM Pricing Plans – Frequently Asked Questions',
          lead:
            "Explore NNC Digital's CRM Pricing Plans, subscription options, pricing and business management features.",
          items: FAQ,
          cta: { label: 'Book a Demo', href: '#start' },
        }}
      />

      <section className={`container ${styles.cta}`}>
        <div className={styles.ctaBand}>
          <h2>Start Your Free CRM Trial Today</h2>
          <p>
            Explore NNC Digital&apos;s CRM Pricing Plans and choose Affordable CRM Software that fits your business requirements.
          </p>
          <p>
            Manage leads, sales pipelines, billing and customer relationships with flexible CRM Subscription Plans starting at ₹14,999/year.
          </p>
          <p>Start your free 30-day trial without a credit card.</p>
          <a href="/#start" className={styles.ctaBtn} data-trial>
            Start Free Trial
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
