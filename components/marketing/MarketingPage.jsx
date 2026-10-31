import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Icon from '@/components/ui/Icon/Icon'
import DataCaptureFlow from './DataCaptureFlow'
import FeatureGridInner from './FeatureGridInner'
import LeadCaptureGraphic from './LeadCaptureGraphic'
import PlansBlock from './PlansBlock'
import CompareTable from './CompareTable'
import CRMDashboard from './CRMDashboard'
import TrainingInstitutesDashboard from './TrainingInstitutesDashboard'
import IndustrySwitcher from './IndustrySwitcher'
import TestimonialsCarousel from './TestimonialsCarousel'
import FeatureTabs from './FeatureTabs'
import Testimonial from './Testimonial'
import styles from './MarketingPage.module.css'

// Flat, compact variants — no 3D tilt, no decorative floating cards,
// smaller base font-size. Used inside the scenic+glass framed hero
// (see `media.framed: true` on product pages) where the external frame
// already provides the visual chrome. Content shrinks to fit the panel
// without touching the bottom edge.
function TrainingInstitutesDashboardFlat() {
  return <TrainingInstitutesDashboard flat showFloats={false} compact />
}
function CRMDashboardFlat() {
  return <CRMDashboard flat showFloats={false} compact />
}

const HERO_COMPONENTS = {
  crmDashboard: CRMDashboard,
  crmDashboardFlat: CRMDashboardFlat,
  trainingInstitutesDashboard: TrainingInstitutesDashboard,
  trainingInstitutesDashboardFlat: TrainingInstitutesDashboardFlat,
  industrySwitcher: IndustrySwitcher,
}

function HeroComponent({ name }) {
  const Cmp = HERO_COMPONENTS[name]
  return Cmp ? <Cmp /> : null
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function Media({ media, className, containClassName, priority = false }) {
  if (!media) return null
  if (media.type === 'video') {
    // Above-fold heroes pass priority=true → preload="auto" + fetchpriority
    // so the hero video starts downloading as fast as possible. Everywhere
    // else (Split blocks, below-fold media) uses preload="metadata" to
    // avoid eagerly pulling multi-megabyte files the user may never see.
    const preload = priority ? 'auto' : 'metadata'
    return (
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload={preload}
        poster={media.poster}
        aria-hidden="true"
        {...(priority ? { fetchpriority: 'high' } : {})}
      >
        <source src={media.src} type="video/mp4" />
      </video>
    )
  }
  // `fit: 'contain'` is for UI screenshots that must be shown in full. Only
  // honored when the caller supplies a dedicated class for that mode.
  const cls = media.fit === 'contain' && containClassName ? containClassName : className
  return <img className={cls} src={media.src} alt={media.alt || ''} loading="lazy" />
}

function Ctas({ ctas, onLight }) {
  if (!ctas?.length) return null
  return (
    <div className={styles.ctas}>
      {ctas.map((c) => (
        <a
          key={c.label}
          href={c.href}
          data-trial={c.trial ? '' : undefined}
          className={c.variant === 'ghost' ? styles.btnGhost : styles.btnPrimary}
        >
          {c.label}
          <Arrow />
        </a>
      ))}
    </div>
  )
}

/* ---------- blocks ---------- */
function FeatureGrid({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <FeatureGridInner items={block.items} flat={block.flat} />
      </div>
    </section>
  )
}

function Split({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.split} ${block.flip ? styles.flip : ''}`}>
        <div className={styles.splitText}>
          {block.kicker && <span className={styles.kicker}>{block.kicker}</span>}
          <h2 className={styles.blockTitle} style={{ textAlign: 'left', margin: 0 }}>{block.title}</h2>
          {block.body && <p className={styles.splitBody}>{block.body}</p>}
          {block.bullets && (
            <ul className={styles.bullets}>
              {block.bullets.map((b) => (
                <li key={b}><span className={styles.tick}><Icon name="check" /></span>{b}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={`${styles.splitMedia} ${block.squareMedia ? styles.splitMediaSquare : ''}`}>
          <Media
            media={block.media}
            className={styles.splitImg}
            containClassName={styles.splitImgContain}
          />
        </div>
      </div>
    </section>
  )
}

function Steps({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <ol className={styles.steps}>
          {block.items.map((s, i) => (
            <li className={styles.step} key={s.title}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stats({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <p className={styles.statsTitle}>{block.title}</p>}
        <div className={styles.stats}>
          {block.items.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials({ block }) {
  return <TestimonialsCarousel title={block.title} lead={block.lead} items={block.items} />
}

function Cards({ block }) {
  // `highlight: true` lifts a `cards` block onto a navy section with white
  // elevated cards (Zoho-style). Opt-in so other cards blocks stay neutral.
  const hl = block.highlight ? ' ' + styles.blockHighlight : ''
  return (
    <section className={styles.block + hl}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <div className={styles.cgrid}>
          {block.items.map((it) => {
            const Tag = it.href ? 'a' : 'div'
            return (
              <Tag className={styles.ccard} key={it.title} href={it.href}>
                {it.icon && <span className={styles.cicon}><Icon name={it.icon} /></span>}
                <h3 className={styles.ccardTitle}>{it.title}</h3>
                <p className={styles.ccardBody}>{it.body}</p>
                {it.href && <span className={styles.clink}>Learn more<Arrow /></span>}
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Prose({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.prose}`}>
        {block.sections.map((s) => (
          <div key={s.h} className={styles.proseItem}>
            <h2 className={styles.proseH}>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} className={styles.proseP}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq({ block }) {
  // Native <details>/<summary> gives us accordion behavior, keyboard support
  // and screen-reader state announcements with no client-side state. First
  // item defaults to open so visitors land on an immediate answer.
  return (
    <section className={styles.block}>
      <div className="container">
        <div className={styles.faqLayout}>
          <aside className={styles.faqSide}>
            {block.title && <h2 className={styles.faqSideTitle}>{block.title}</h2>}
            {block.lead && <p className={styles.faqSideLead}>{block.lead}</p>}
            <div className={styles.faqContact}>
              <p className={styles.faqContactText}>Still have questions? Our team is here to help.</p>
              <a className={styles.faqContactLink} href="/company/contact">Contact us →</a>
            </div>
          </aside>
          <div className={styles.faqList}>
            {block.items.map((q, i) => (
              <details className={styles.faqItem} key={q.q} open={i === 0}>
                <summary className={styles.faqQ}>
                  <span className={styles.faqNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.faqQText}>{q.q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">
                    <span className={styles.faqToggleBar} />
                    <span className={`${styles.faqToggleBar} ${styles.faqToggleBarV}`} />
                  </span>
                </summary>
                <div className={styles.faqA}>
                  <p>{q.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBand({ cta }) {
  if (!cta) return null
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBand}>
          <span className={styles.ctaGlow} aria-hidden="true" />
          <h2 className={styles.ctaTitle}>{cta.title}</h2>
          {cta.sub && <p className={styles.ctaSub}>{cta.sub}</p>}
          <div className={styles.ctaBtns}>
            <a href={cta.primary?.href || '#start'} data-trial className={styles.ctaPrimary}>
              {cta.primary?.label || 'Start free trial'}<Arrow />
            </a>
            {cta.secondary && (
              <a href={cta.secondary.href} className={styles.ctaGhost}>
                {cta.secondary.label}<Arrow />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function DataFlowBlock({ block }) {
  return <DataCaptureFlow {...block.config} />
}

function LeadCapture({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.split} ${block.flip ? styles.flip : ''}`}>
        <div className={styles.splitText}>
          {block.kicker && <span className={styles.kicker}>{block.kicker}</span>}
          <h2 className={styles.blockTitle} style={{ textAlign: 'left', margin: 0 }}>{block.title}</h2>
          {block.body && <p className={styles.splitBody}>{block.body}</p>}
          {block.bullets && (
            <ul className={styles.bullets}>
              {block.bullets.map((bl) => (
                <li key={bl}><span className={styles.tick}><Icon name="check" /></span>{bl}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.splitGraphic}>
          <LeadCaptureGraphic />
        </div>
      </div>
    </section>
  )
}

const BLOCKS = {
  featureGrid: FeatureGrid,
  split: Split,
  steps: Steps,
  stats: Stats,
  cards: Cards,
  prose: Prose,
  faq: Faq,
  testimonials: Testimonials,
  dataflow: DataFlowBlock,
  leadCapture: LeadCapture,
  plans: PlansBlock,
  compareTable: CompareTable,
  featureTabs: FeatureTabs,
  testimonial: Testimonial, // singular — large quote with photo. For a carousel use `testimonials` (plural).
}

export default function MarketingPage({ page }) {
  const hasMedia = !!page.hero?.media
  // Framed component heroes (e.g., the Training Institutes dashboard inside
  // Framed heroes carry decorative outer padding + an inner glass panel,
  // so the visible content (dashboard, video, screenshot) is only ~65%
  // of the media box. In the default 51% media column that reads cramped.
  // Any hero that opts into the framed treatment gets the wider column.
  const mediaWidePref = hasMedia && page.hero.media.framed
  return (
    <main>
      <section className={`${styles.heroWrap} ${hasMedia ? '' : styles.heroCentered}`}>
        <div className="container">
          <Breadcrumbs items={page.breadcrumb} />
          <div
            className={`${styles.hero} ${hasMedia ? styles.heroSplit : ''} ${
              mediaWidePref ? styles.heroSplitMediaWide : ''
            }`}
          >
            <div className={styles.heroText}>
              {page.hero.eyebrow && <span className={styles.eyebrow}>{page.hero.eyebrow}</span>}
              <h1 className={styles.title}>{page.hero.title}</h1>
              {page.hero.lead && <p className={styles.lead}>{page.hero.lead}</p>}
              <Ctas ctas={page.hero.ctas} />
            </div>
            {hasMedia && (
              page.hero.media.type === 'component' ? (
                // Component heroes can opt into the same scenic-photo +
                // frosted-glass panel used for framed video/image heroes
                // (e.g., Small Business CRM) by setting `media.framed:
                // true`. Keeps the visual pattern consistent across
                // product pages while letting the dashboard mockup render
                // live inside the glass panel.
                page.hero.media.framed ? (
                  <div className={`${styles.heroMedia} ${styles.heroMediaFramed} ${styles.heroMediaComponentFramed}`}>
                    <div className={`${styles.heroFrame} ${styles.heroFrameComponent}`}>
                      <HeroComponent name={page.hero.media.name} />
                    </div>
                  </div>
                ) : (
                  <div className={styles.heroComponent}>
                    <HeroComponent name={page.hero.media.name} />
                  </div>
                )
              ) : page.hero.media.framed ? (
                <div className={`${styles.heroMedia} ${styles.heroMediaFramed}`}>
                  <div className={styles.heroFrame}>
                    <Media media={page.hero.media} className={styles.heroImg} containClassName={styles.heroImgContain} priority />
                  </div>
                </div>
              ) : (
                <div className={`${styles.heroMedia} ${page.hero.media.square ? styles.heroMediaSquare : ''}`}>
                  <Media media={page.hero.media} className={styles.heroImg} containClassName={styles.heroImgContain} priority />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {(page.blocks || []).map((block, i) => {
        const Cmp = BLOCKS[block.type]
        return Cmp ? <Cmp key={i} block={block} /> : null
      })}

      <CtaBand cta={page.cta} />
    </main>
  )
}
