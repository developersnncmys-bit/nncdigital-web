import SectionHead from '@/components/ui/SectionHead/SectionHead'
import Reveal from '@/components/ui/Reveal/Reveal'
import { useCases } from '@/data/zoom'
import styles from './UseCases.module.css'

const ICONS = {
  sales: <path d="M3 5h18M6 12h12M10 19h4" />,
  service: <><path d="M3 7h18v12H3z" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>,
  retail: <><path d="M6 8h12l1 12H5z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  manufacturing: <><path d="M3 21h18" /><path d="M4 21V10l5 3V10l5 3V10l5 3v8M8 21v-4h3v4" /></>,
  healthcare: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  realestate: <><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6M8 11h.01M16 11h.01" /></>,
}

const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {ICONS[name]}
  </svg>
)

// Small decorative sparkle used in each card's visual — same cue as the
// animated sparkles in the Salesforce reference. Static (no motion) to keep
// the section visually calm.
const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10z" />
  </svg>
)

export default function UseCases() {
  return (
    <section className={`container ${styles.section}`} id="industries">
      <SectionHead
        eyebrow={useCases.eyebrow}
        title={useCases.title}
        lead={useCases.lead}
        center
      />
      <Reveal stagger={0.08} className={styles.grid}>
        {useCases.cards.map((c) => (
          <a className={styles.card} key={c.title} href={c.href}>
            <div className={styles.visual} />
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
              <span className={styles.link}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </a>
        ))}
      </Reveal>
      {useCases.cta && (
        <div className={styles.ctaRow}>
          <a className={styles.cta} href={useCases.cta.href}>
            {useCases.cta.label}
          </a>
        </div>
      )}
    </section>
  )
}
