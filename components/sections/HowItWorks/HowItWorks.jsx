import SectionHead from '@/components/ui/SectionHead/SectionHead'
import Reveal from '@/components/ui/Reveal/Reveal'
import { icons } from '@/components/ui/icons'
import { howItWorks } from '@/data/zoom'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead eyebrow={howItWorks.eyebrow} title={howItWorks.title} center />
        <div className={styles.stepsWrap}>
          {/* Dashed timeline that runs behind the numbered badges. */}
          <span className={styles.timeline} aria-hidden="true" />
          <Reveal stagger={0.1} className={styles.steps}>
            {howItWorks.steps.map((s) => {
              const Icon = icons[s.icon]
              return (
                <div className={styles.step} key={s.n}>
                  <span className={styles.badge}>{s.n}</span>
                  <div className={styles.card}>
                    <span className={styles.iconChip}>
                      {Icon && <Icon width={28} height={28} />}
                    </span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
