import Eyebrow from '@/components/ui/Eyebrow/Eyebrow'
import Reveal from '@/components/ui/Reveal/Reveal'
import styles from './SectionHead.module.css'

export default function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
  inverse = false,
}) {
  return (
    <Reveal
      stagger={0.09}
      className={`${styles.head} ${center ? styles.center : ''} ${
        inverse ? styles.inverse : ''
      }`}
    >
      {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
      <h2 className={`display-l ${styles.title}`}>{title}</h2>
      {Array.isArray(lead)
        ? lead.map((p, i) => (
            <p key={i} className={`lead ${styles.lead}`}>
              {p}
            </p>
          ))
        : lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
    </Reveal>
  )
}
