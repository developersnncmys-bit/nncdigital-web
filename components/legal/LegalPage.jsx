import Icon from '@/components/ui/Icon/Icon'
import styles from './LegalPage.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

// Reference design (translation agency privacy page) splits the H1 into two
// tones: first word bright, remaining words in an accent color with a period.
// Replicates that cleanly for any 1–3 word title.
function TitleTwoTone({ text }) {
  const parts = text.trim().split(/\s+/)
  if (parts.length === 1) {
    return <span className={styles.titleMain}>{parts[0]}.</span>
  }
  const first = parts[0]
  const rest = parts.slice(1).join(' ')
  return (
    <>
      <span className={styles.titleMain}>{first} </span>
      <span className={styles.titleAccent}>{rest}.</span>
    </>
  )
}

// Props:
//   title         — the legal page title (e.g. "Privacy Policy")
//   intro         — short intro paragraph above the first section
//   lastUpdated   — formatted date string ("10 October 2026")
//   sections      — [{ h, p: [string], bullets?: [string] }]
//   related       — { title, items: [{ icon, title, body, href }] } appended
//                   after the sections as a cards grid. Used by the
//                   compliance page for its "Related policies" block.
//   cta           — { title, sub, primary: { label, href }, secondary?: {...} }
//                   appended as a compact CTA band at the bottom.
export default function LegalPage({ title, intro, lastUpdated, sections = [], related, cta }) {
  const items = sections.map((s, i) => {
    // Strip leading "1. " / "01 " style numbering from source copy — the
    // layout adds its own numbers on both the TOC and section head.
    const h = s.h.replace(/^\s*\d+[.)]\s*/, '').trim()
    return { ...s, h, num: String(i + 1).padStart(2, '0'), id: slug(h) }
  })

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowBar} aria-hidden="true" />
            LEGAL
          </span>
          <h1 className={styles.title}>
            <TitleTwoTone text={title} />
          </h1>
          {lastUpdated && (
            <p className={styles.updated}>LAST UPDATED: {lastUpdated.toUpperCase()}</p>
          )}
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container ${styles.layout}`}>
          <aside className={styles.tocWrap}>
            <nav className={styles.toc} aria-label="On this page">
              <span className={styles.tocHead}>ON THIS PAGE</span>
              <ol className={styles.tocList}>
                {items.map((s) => (
                  <li key={s.id} className={styles.tocItem}>
                    <a href={`#${s.id}`} className={styles.tocLink}>
                      <span className={styles.tocNum}>{s.num}</span>
                      <span className={styles.tocText}>{s.h}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className={styles.content}>
            {intro && <p className={styles.intro}>{intro}</p>}
            {items.map((s) => (
              <article key={s.id} id={s.id} className={styles.section}>
                <div className={styles.sectionHead}>
                  <span className={styles.sectionNum} aria-hidden="true">{s.num}</span>
                  <h2 className={styles.sectionTitle}>{s.h}</h2>
                </div>
                {s.p.map((para, i) => (
                  <p key={i} className={styles.p}>{para}</p>
                ))}
                {s.bullets && (
                  <ul className={styles.bullets}>
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {related?.items?.length ? (
        <section className={styles.related}>
          <div className="container">
            {related.title && <h2 className={styles.relatedTitle}>{related.title}</h2>}
            <div className={styles.relatedGrid}>
              {related.items.map((it) => (
                <a className={styles.relatedCard} key={it.title} href={it.href}>
                  {it.icon && <span className={styles.relatedIcon}><Icon name={it.icon} /></span>}
                  <h3 className={styles.relatedCardTitle}>{it.title}</h3>
                  <p className={styles.relatedCardBody}>{it.body}</p>
                  <span className={styles.relatedLink}>Learn more <Arrow /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {cta ? (
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBand}>
              <h2 className={styles.ctaTitle}>{cta.title}</h2>
              {cta.sub && <p className={styles.ctaSub}>{cta.sub}</p>}
              <div className={styles.ctaBtns}>
                {cta.primary && (
                  <a href={cta.primary.href} className={styles.ctaPrimary}>
                    {cta.primary.label} <Arrow />
                  </a>
                )}
                {cta.secondary && (
                  <a href={cta.secondary.href} className={styles.ctaGhost}>
                    {cta.secondary.label} <Arrow />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
