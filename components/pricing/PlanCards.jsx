import { PLANS } from '@/lib/pricing'
import { inr } from '@/lib/format'
import styles from './PlanCards.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function PlanCards({ ctaHref = '/#start' }) {
  return (
    <div className={styles.grid}>
      {PLANS.map((p) => (
        <article
          key={p.id}
          className={`${styles.card} ${p.popular ? styles.popular : ''}`}
        >
          {p.popular && <span className={styles.badge}>Most popular</span>}
          <span className={styles.name}>{p.name}</span>
          <span className={styles.users}>{p.users}</span>
          <div className={styles.price}>
            <span className={styles.amount}>{inr(p.price)}</span>
            <span className={styles.per}>/ year</span>
          </div>
          <p className={styles.tagline}>{p.tagline}</p>
          <a href={ctaHref} className={styles.cta}>
            Start free trial
          </a>
          <ul className={styles.features}>
            {p.features.map((f) => (
              <li key={f}>
                <span className={styles.tick}>
                  <Check />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
