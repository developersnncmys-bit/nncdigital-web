import { Fragment } from "react"
import s from "./TravelLanding.module.css"
import { SwooshWide } from "./TravelArt"
import * as Icons from "./TravelIcons"
import { decisions as baseDecisions, morningScreen as baseMorningScreen } from "@/data/travel"

// The left panel rebuilds the real dashboard layout from images/dashboard.png in
// markup so it stays crisp; its figures are bracketed sample data, never a
// customer result.
function MorningScreen({ screen }) {
  return (
    <div className={`${s.stage} ${s.morning}`}>
      <div className={s.deco}>
        <img src="/travel-crm/doodles/stage-contours.svg" alt="" width={700} height={600} loading="lazy" decoding="async" />
      </div>

      <div className={s.morningBar}>
        <b>{screen.greeting}</b>
        <span>{screen.subheading || 'Your desk, this morning'}</span>
      </div>

      <div className={s.statCard}>
        <div className={s.statHead}>
          <b>{screen.statsTitle}</b>
          <div className={s.periods}>
            {screen.periods.map((p) => (
              <span key={p} className={p === screen.activePeriod ? s.on : undefined}>
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className={s.statRow}>
          {screen.stats.map((st) => (
            <div key={st.label}>
              <small>{st.label}</small>
              <b>{st.value}</b>
            </div>
          ))}
        </div>
      </div>

      <div className={s.miniGrid}>
        {screen.panels.map((p) => (
          <div className={s.mini} key={p.title}>
            <b>{p.title}</b>
            <div className={s.miniCols}>
              {p.cols.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className={s.src}>{screen.note}</p>
    </div>
  )
}

export default function TravelDecisions({ page }) {
  const d = page.decisions
  const items = d.items || baseDecisions
  // Page-level override: per-page briefs sometimes rename the dashboard
  // mockup's subheading, stats title or panel labels. Merge over the shared
  // base so a page only lists the fields it changes.
  const screen = { ...baseMorningScreen, ...(d.morningScreen || {}) }

  return (
    <section className={s.problem} id="decisions">
      <div className={s.wrap}>
        <div className={s.head}>
          <div>
            <span className={s.kicker}>
              {d.kicker}
              <span className={s.deco}>
                <SwooshWide />
              </span>
            </span>
            <h2>
              {d.titleLines.map((line, i) => (
                <Fragment key={line}>
                  {line}
                  {/* Explicit space + <br> so headings-extractors that
                      strip <br> still see word boundaries between lines
                      (e.g. "Clear" + <br> + "View" → "ClearView"). */}
                  {i < d.titleLines.length - 1 && (
                    <>
                      {' '}
                      <br />
                    </>
                  )}
                </Fragment>
              ))}
              <span className={s.dot}>.</span>
            </h2>
          </div>
          <p className={s.lead}>{d.lead}</p>
        </div>

        <div className={s.body}>
          <MorningScreen screen={screen} />

          <div className={s.leak}>
            <div className={s.cap}>{d.cap}</div>
            {d.capTitle && <h2 className={s.capTitle}>{d.capTitle}</h2>}
            {d.capLead && <p className={s.capLead}>{d.capLead}</p>}
            <div className={`${s.hand} ${s.decisionNote}`}>{d.note}</div>

            <div className={s.decisionList}>
              {items.map((it) => {
                const Icon = Icons[it.icon]
                return (
                  <div className={s.decision} key={it.q}>
                    <span className={s.badge}>
                      <Icon />
                    </span>
                    <h3>{it.q}</h3>
                    <div className={s.where}>{it.where}</div>
                    <p>{it.a}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
