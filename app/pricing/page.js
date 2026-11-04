import PlanGrid from '@/components/pricing/PlanGrid'
import ComparisonTable from '@/components/pricing/ComparisonTable'
import FeatureGridInner from '@/components/marketing/FeatureGridInner'
import Faq from '@/components/sections/Faq/Faq'
import { pricing } from '@/data/content'
import styles from './pricing.module.css'

export const metadata = {
  title: 'CRM Pricing Plans in India | NNC Digital',
  description:
    "Explore NNC Digital's CRM Pricing Plans starting at ₹14,999/year. Compare Starter, Growth and Enterprise features. Start your free 30-day trial.",
  alternates: { canonical: '/pricing' },
}

// "Why Businesses Choose NNC CRM Pricing Plans" — six reasons per brief.
const WHY = [
  { icon: 'users', title: 'Priced by Team Size, Not Per User', body: 'Choose a fixed team-size band for 1, 3 or 10 users without additional charges for each user within the selected plan.' },
  { icon: 'integrations', title: 'Modular CRM for Your Requirements', body: 'Activate the CRM modules you need and add more features as your business requirements grow.' },
  { icon: 'whatsapp', title: 'Built-In WhatsApp Engagement', body: 'Manage customer conversations through an integrated WhatsApp inbox, available with Growth and Enterprise plans.' },
  { icon: 'forecast', title: 'Sales Forecasting and Analytics', body: 'Access revenue forecasts for 3, 6 and 12 months to support business planning and sales decisions.' },
  { icon: 'invoice', title: 'Flexible CRM Billing Options', body: 'Choose quarterly, half-yearly or yearly billing based on your preferred payment schedule.' },
  { icon: 'rocket', title: 'Quick CRM Setup', body: 'NNC Digital supports quick onboarding, with most teams able to start using the CRM within a day.' },
]

// "Why Choose NNC Digital Solutions for Your CRM?" — three trust cards per brief.
const TRUST = [
  { icon: 'security', title: 'A Proven Software Development Track Record', body: 'With over 10 years of software development experience and 565+ delivered projects, NNC Digital builds CRM solutions around business requirements.', image: '/pricing/card1.webp', imageAlt: 'Ten year track record of delivered CRM projects for Indian businesses' },
  { icon: 'globe', title: 'Developed and Supported in India', body: "NNC Digital's teams across four Indian cities provide software support and understand local business operations.", image: '/pricing/card2.webp', imageAlt: 'NNC teams across four Indian cities supporting local businesses' },
  { icon: 'lock', title: 'Secure Business Data Management', body: 'Protect business information through encryption, backups and role-based access. Export or delete your data when required.', image: '/pricing/card3.webp', imageAlt: 'Encrypted and backed-up CRM data protected by role-based access controls' },
]

const STATS = [
  { value: '10+ Years', label: 'Building software' },
  { value: '565+ Projects', label: 'Delivered' },
  { value: '35+ Professionals', label: 'In-house team' },
  { value: '4 Offices', label: 'Across India' },
]

// Five FAQs per the content brief.
const FAQ = [
  { q: 'Is NNC CRM pricing based on the number of users?', a: 'NNC Digital offers CRM Pricing Plans based on team-size bands instead of individual per-user charges. Starter supports 1 user, Growth supports up to 3 users and Enterprise supports up to 10 users.' },
  { q: 'Can I pay for my CRM subscription quarterly?', a: 'Yes. NNC Digital supports quarterly, half-yearly and yearly billing options. You can change your billing term at renewal.' },
  { q: 'What does multi-tenant CRM mean for my business?', a: 'Multi-tenant CRM allows each business or center to operate within its own secure space on the platform. Head offices can maintain centralized visibility across their centers.' },
  { q: 'Is GST included in the CRM pricing?', a: 'No. All NNC Digital CRM Pricing Plans are displayed before tax. An additional 18% GST applies to Starter, Growth and Enterprise subscriptions.' },
  { q: 'Does NNC Digital offer a free CRM trial?', a: 'Yes. NNC Digital provides a 30-day free trial without requiring a credit card. You can explore the CRM features and select a suitable subscription plan when ready.' },
]

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <header className={`container ${styles.head}`}>
        <span className={styles.kicker}>/ Pricing</span>
        <h1 className={styles.title}>
          Flexible CRM Pricing Plans That Scale with <span className={styles.navy}>Your Business</span>
        </h1>
        <p className={styles.sub}>{pricing.lead}</p>
      </header>

      <div className="container">
        <PlanGrid />
        <p className={styles.note}>{pricing.note}</p>
      </div>

      <section className={`container ${styles.tableSection}`}>
        <h2 className={styles.tableTitle}>Compare CRM Pricing Plans and Features</h2>
        <ComparisonTable />
      </section>

      <section className={`container ${styles.block}`}>
        <h2 className={styles.sectionTitle}>Why Businesses Choose NNC CRM Pricing Plans</h2>
        <p className={styles.sectionLead}>
          NNC Digital offers CRM Pricing Plans with flexible billing, essential business tools and features that support growing teams.
        </p>
        <FeatureGridInner items={WHY} flat />
      </section>

      <section className={styles.trustWrap}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose NNC Digital Solutions for Your CRM?</h2>
          <p className={styles.sectionLead}>
            Developed by Nakshatra Namaha Creations, NNC CRM combines software development experience with business-focused Customer Relationship Management Software.
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
            "Explore answers to common questions about NNC Digital's CRM Pricing Plans, billing options and subscription features.",
          items: FAQ,
          cta: { label: 'Book a Demo', href: '#start' },
        }}
      />

      <section className={`container ${styles.cta}`}>
        <div className={styles.ctaBand}>
          <h2>Start Your Free CRM Trial Today</h2>
          <p>
            Explore NNC Digital's CRM Pricing Plans and discover a CRM solution suited to your team size and business needs. Start your 30-day free trial without a credit card. Choose quarterly, half-yearly or yearly billing when you're ready.
          </p>
          <a href="/#start" className={styles.ctaBtn} data-trial>
            Book a Demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
