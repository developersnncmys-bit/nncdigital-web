import PlanGrid from '@/components/pricing/PlanGrid'
import ComparisonTable from '@/components/pricing/ComparisonTable'
import FeatureGridInner from '@/components/marketing/FeatureGridInner'
import { pricing } from '@/data/content'
import styles from './pricing.module.css'

export const metadata = {
  title: 'NNC CRM Pricing | Pay Quarterly, Half-Yearly or Yearly',
  description:
    'Simple CRM pricing by team size, not per user. Pick Starter, Growth or Enterprise and pay quarterly, every six months or yearly. Start free, no credit card.',
}

const WHY = [
  { icon: 'users', title: 'Priced by team size, not per seat', body: 'Add people without adding cost. One price per band of 1, 3 or 10 users.' },
  { icon: 'integrations', title: 'Modular, only what you need', body: 'Turn on the modules you need today and add the rest as you grow. Nothing to reinstall.' },
  { icon: 'whatsapp', title: 'WhatsApp built in', body: 'A full WhatsApp inbox inside the CRM — no extra apps needed.' },
  { icon: 'forecast', title: 'Forecasting, not just history', body: 'See revenue 3, 6 and 12 months ahead, so you plan with numbers, not hope.' },
  { icon: 'invoice', title: 'Flexible billing', body: 'Pay quarterly, half yearly or yearly, and switch the term whenever it suits you.' },
  { icon: 'rocket', title: 'Live in a day', body: 'No long onboarding and no consultant fees. Most teams are up and running before lunch.' },
]

const TRUST = [
  { icon: 'security', title: 'A real track record', body: 'Ten years, 565+ delivered projects and paying clients. Not a runway and a prayer.' },
  { icon: 'globe', title: 'Built and supported in India', body: 'Teams in four cities who understand how Indian businesses actually operate.' },
  { icon: 'lock', title: 'Your data, secure and yours', body: 'Encrypted, backed up and protected by role based access. Export or delete it anytime.' },
]

const STATS = [
  { value: '10+', label: 'years building software' },
  { value: '565+', label: 'projects delivered' },
  { value: '35+', label: 'in house team' },
  { value: '4', label: 'offices across India' },
]

const FAQ = [
  { q: 'Is the price per user?', a: 'No. You pay by team size band, so adding people in your band does not raise the price.' },
  { q: 'Can I pay quarterly?', a: 'Yes. Choose quarterly, half yearly or yearly. You can change the term at renewal.' },
  { q: 'What does multi tenant mean for me?', a: 'Each business or center runs in its own secure space within the platform, while head office keeps one view across all of them.' },
  { q: 'Is GST included?', a: 'Prices are shown before tax. 18% GST applies on every plan.' },
  { q: 'Is there a free trial?', a: 'Yes, with no credit card. Start free and upgrade when you are ready.' },
]

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <header className={`container ${styles.head}`}>
        <span className={styles.kicker}>/ Pricing</span>
        <h1 className={styles.title}>
          Plans that scale with your team, <span className={styles.navy}>not your bill</span>.
        </h1>
        <p className={styles.sub}>{pricing.lead}</p>
      </header>

      <div className="container">
        <PlanGrid />
        <p className={styles.note}>{pricing.note}</p>
      </div>

      <section className={`container ${styles.tableSection}`}>
        <h2 className={styles.tableTitle}>Compare every feature</h2>
        <ComparisonTable />
      </section>

      <section className={`container ${styles.block}`}>
        <h2 className={styles.sectionTitle}>Why teams choose NNC CRM</h2>
        <p className={styles.sectionLead}>
          More than a price. These are the reasons businesses pick NNC CRM and stay.
        </p>
        <FeatureGridInner items={WHY} />
      </section>

      <section className={styles.trustWrap}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why NNC Digital Solutions</h2>
          <p className={styles.sectionLead}>
            NNC CRM is built by Nakshatra Namaha Creations, a ten year software company. We built this
            CRM hundreds of times for clients before we built it once, the right way, for everyone.
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

      <section className={`container ${styles.block}`}>
        <h2 className={styles.sectionTitle}>Pricing questions, answered</h2>
        <div className={styles.faq}>
          {FAQ.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.cta}`}>
        <div className={styles.ctaBand}>
          <h2>Start your free trial today.</h2>
          <p>No credit card required. Free for 30 days, then pay quarterly, half yearly or yearly.</p>
          <a href="/#start" className={styles.ctaBtn} data-trial>
            Start free trial
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
