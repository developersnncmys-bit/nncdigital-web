import SectionHead from '@/components/ui/SectionHead/SectionHead'
import Reveal from '@/components/ui/Reveal/Reveal'
import { icons } from '@/components/ui/icons'
import { howItWorks } from '@/data/zoom'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          lead={howItWorks.lead}
          center
        />
        <Reveal stagger={0.1} className={styles.steps}>
          {howItWorks.steps.map((s) => {
            const Icon = icons[s.icon]
            return (
              <div className={styles.step} key={s.n}>
                <div className={styles.topRow}>
                  <span className={styles.iconChip}>
                    {Icon && <Icon width={24} height={24} />}
                  </span>
                  <span className={styles.stepNo}>Step {s.n}</span>
                </div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            )
          })}
        </Reveal>
        {howItWorks.cta && (
          <div className={styles.ctaRow}>
            <a className={styles.cta} href={howItWorks.cta.href} data-trial>
              {howItWorks.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
