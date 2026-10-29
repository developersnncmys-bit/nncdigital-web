import { Fragment } from "react"
import s from "./TravelLanding.module.css"
import { SwooshWide } from "./TravelArt"
import * as Icons from "./TravelIcons"
import { decisions as baseDecisions, morningScreen } from "@/data/travel"

// The left panel rebuilds the real dashboard layout from images/dashboard.png in
// markup so it stays crisp; its figures are bracketed sample data, never a
// customer result.
function MorningScreen() {
  return (
    <div className={`${s.stage} ${s.morning}`}>
      <div className={s.deco}>
        <img src="/travel-crm/doodles/stage-contours.svg" alt="" width={700} height={600} loading="lazy" decoding="async" />
      </div>

      <div className={s.morningBar}>
        <b>{morningScreen.greeting}</b>
        <span>Your desk, this morning</span>
      </div>

      <div className={s.statCard}>
        <div className={s.statHead}>
          <b>{morningScreen.statsTitle}</b>
          <div className={s.periods}>
            {morningScreen.periods.map((p) => (
              <span key={p} className={p === morningScreen.activePeriod ? s.on : undefined}>
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className={s.statRow}>
          {morningScreen.stats.map((st) => (
            <div key={st.label}>
              <small>{st.label}</small>
              <b>{st.value}</b>
            </div>
          ))}
        </div>
      </div>

      <div className={s.miniGrid}>
        {morningScreen.panels.map((p) => (
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

      <p className={s.src}>{morningScreen.note}</p>
    </div>
  )
}

export default function TravelDecisions({ page }) {
  const d = page.decisions
  const items = d.items || baseDecisions

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
                  {i < d.titleLines.length - 1 && <br />}
                </Fragment>
              ))}
              <span className={s.dot}>.</span>
            </h2>
          </div>
          <p className={s.lead}>{d.lead}</p>
        </div>

        <div className={s.body}>
          <MorningScreen />

          <div className={s.leak}>
            <div className={s.cap}>{d.cap}</div>
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
