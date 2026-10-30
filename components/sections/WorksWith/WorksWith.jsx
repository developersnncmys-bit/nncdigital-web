import { worksWith } from '@/data/zoom'
import styles from './WorksWith.module.css'

export default function WorksWith() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{worksWith.title}</h2>
          <p className={styles.body}>{worksWith.body}</p>
        </div>
        <div className={styles.integrations}>
          <span className={styles.caption}>{worksWith.caption}:</span>
          <div className={styles.logos}>
            {worksWith.items.map((n, i) => (
              <span key={n} className={styles.logo}>
                {n}
                {i < worksWith.items.length - 1 && (
                  <span className={styles.sep} aria-hidden="true">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
