import { pricing } from '@/data/content'
import PlanGrid from '@/components/pricing/PlanGrid'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.title}>{pricing.title}</h2>
          <p className={styles.lead}>{pricing.lead}</p>
          <a className={styles.explore} href="/pricing">
            {pricing.compareLabel}
          </a>
        </header>

        <div className={styles.gridWrap}>
          <PlanGrid />
        </div>

        <div className={styles.notes}>
          <p>*All plans include a free 30 day trial. No credit card required.</p>
          <p>**Prices are exclusive of GST and billed in Indian rupees.</p>
        </div>
      </div>
    </section>
  )
}
