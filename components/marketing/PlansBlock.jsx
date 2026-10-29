import styles from './PlansBlock.module.css'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function PlansBlock({ block }) {
  // Split layout (headline left, cards right) only when there are 2 plans or
  // fewer. 3-plan grids keep the full-width layout so the cards don't cramp.
  const isSplit = (block.plans?.length || 0) <= 2
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.layout} ${isSplit ? styles.layoutSplit : ''}`}>
          <div className={styles.intro}>
            {block.title && (
              <h2 className={styles.title}>
                <span className={styles.titleAccent} aria-hidden="true" />
                {block.title}
              </h2>
            )}
            {block.lead && <p className={styles.lead}>{block.lead}</p>}
            {isSplit && block.note && <p className={styles.note}>{block.note}</p>}
          </div>

          <div className={styles.grid}>
            {block.plans.map((p) => (
            <article key={p.name} className={`${styles.card} ${p.highlight ? styles.blue : ''}`}>
              {p.badge && <span className={styles.badge}>{p.badge}</span>}
              <span className={styles.desc}>{p.desc}</span>
              <span className={styles.name}>{p.name}</span>

              <div className={styles.priceRow}>
                <span className={styles.amount}>{p.price}</span>
                {p.per && <span className={styles.per}>{p.per}</span>}
              </div>
              {p.priceNote && <span className={styles.priceSub}>{p.priceNote}</span>}

              <a
                href={p.cta.href}
                {...(p.cta.trial ? { 'data-trial': '' } : {})}
                className={styles.cta}
              >
                {p.cta.label}
                <Arrow />
              </a>

              <span className={styles.featHead}>{p.featuresHeader}:</span>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className={styles.tick}><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </div>

        {/* For the full-width (3+ plan) layout, the note sits below the grid.
            In split layout it's rendered inside the intro column above. */}
        {!isSplit && block.note && <p className={styles.note}>{block.note}</p>}
      </div>
    </section>
  )
}
