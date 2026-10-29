import Reveal from '@/components/ui/Reveal/Reveal'
import { icons } from '@/components/ui/icons'
import { uspStrip } from '@/data/content'
import styles from './UspStrip.module.css'

const ICONS = ['roles', 'fc', 'lock']

export default function UspStrip() {
  return (
    <section className={styles.section}>
      <Reveal stagger={0.1} className={`container ${styles.grid}`}>
        {uspStrip.map((u, i) => {
          const Icon = icons[ICONS[i]]
          return (
            <article className={styles.card} key={u.no}>
              <div className={styles.top}>
                <span className={styles.well}>
                  {Icon && <Icon width={22} height={22} />}
                </span>
                <span className={styles.no}>{u.no}</span>
              </div>
              <h3 className={styles.title}>{u.title}</h3>
              <p className={styles.body}>{u.body}</p>
            </article>
          )
        })}
      </Reveal>
    </section>
  )
}
