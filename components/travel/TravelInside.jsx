import s from "./TravelLanding.module.css"
import { SwooshMid } from "./TravelArt"
import * as Icons from "./TravelIcons"
import { CheckBadge } from "./TravelIcons"
import { modules, workspace } from "@/data/travel"

// Trips / Bookings / Accounting / Tasks are the product own top-level nav, so
// this section answers "what is in it" without paraphrase.
export default function TravelInside({ page }) {
  const c = page.inside
  return (
    <section className={s.inside} id="inside">
      <div className={s.wrap}>
        <div className={s.center}>
          <span className={s.kicker}>
            {c.kicker}
            <span className={s.deco}>
              <SwooshMid />
            </span>
          </span>
          <h2>
            {c.title}
            <span className={s.dot}>.</span>
          </h2>
          <p className={`${s.lead} ${s.muted}`} style={{ marginTop: 12 }}>
            {c.lead}
          </p>
        </div>

        <div className={s.modGrid}>
          {modules.map((m) => {
            const Icon = Icons[m.icon]
            return (
              <div className={s.mod} key={m.name}>
                <div className={s.modHead}>
                  <span className={s.badge}>
                    <Icon />
                  </span>
                  <div>
                    <h3>{m.name}</h3>
                    <p>{m.lead}</p>
                  </div>
                </div>
                <ul>
                  {m.items.map((it) => (
                    <li key={it}>
                      <CheckBadge />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className={s.around}>
          <span className={s.kicker} style={{ paddingBottom: 0 }}>
            {workspace.kicker}
          </span>
          <div className={s.aroundGrid}>
            {workspace.items.map((w) => {
              const Icon = Icons[w.icon]
              return (
                <div key={w.title}>
                  <span className={s.badge}>
                    <Icon />
                  </span>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
