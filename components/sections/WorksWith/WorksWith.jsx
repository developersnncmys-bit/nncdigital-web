import { worksWith } from '@/data/zoom'
import styles from './WorksWith.module.css'

export default function WorksWith() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.caption}>{worksWith.caption}:</span>
        <div className={styles.logos}>
          {worksWith.items.map((n) => (
            <span key={n} className={styles.logo}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
