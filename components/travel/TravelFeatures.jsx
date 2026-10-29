import s from "./TravelLanding.module.css"
import { SwooshMid, ArrowNoteLeft, ArrowNoteRight } from "./TravelArt"
import * as Icons from "./TravelIcons"
import { featureRows } from "@/data/travel"

function FeatureRow({ row, flip }) {
  const NoteArrow = flip ? ArrowNoteRight : ArrowNoteLeft

  return (
    <div className={flip ? `${s.row} ${s.flip}` : s.row}>
      <div className={s.media}>
        <div className={`${s.hand} ${s.note}`}>
          {row.note}
          <span className={s.deco}>
            <NoteArrow />
          </span>
        </div>

        <div className={s.stage}>
          <div className={s.deco}>
            <img src="/travel-crm/doodles/stage-contours.svg" alt="" width={700} height={600} loading="lazy" decoding="async" />
          </div>
          <div className={s.browser} style={{ position: "relative" }}>
            <div className={s.bar}>
              <i />
              <i />
              <i />
            </div>
            <img src={row.shot.src} alt={row.shot.alt} width={row.shot.w} height={row.shot.h} loading="lazy" decoding="async" />
          </div>
        </div>

        {row.float && (
          <div className={s.float} style={{ width: row.float.width }}>
            <img src={row.float.src} alt={row.float.alt} width={row.float.w} height={row.float.h} loading="lazy" decoding="async" />
          </div>
        )}
      </div>

      <div className={s.copy}>
        <div className={s.num}>
          {row.num}&nbsp;&nbsp;{row.kicker}
        </div>
        <h3>
          {row.title}
          <span className={s.dot}>.</span>
        </h3>

        {row.items.map((it) => {
          const Icon = Icons[it.icon]
          return (
            <div className={s.fi} key={it.title}>
              <span className={s.badge}>
                <Icon />
              </span>
              <div>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function TravelFeatures({ page }) {
  const c = page.features
  // Each page can lead with the module that matters most to its reader. The
  // flip pattern is recomputed from position so rows always alternate sides.
  const rows = page.featureOrder
    ? page.featureOrder.map((num) => featureRows.find((r) => r.num === num)).filter(Boolean)
    : featureRows

  return (
    <section className={s.features} id="features">
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
        </div>

        {rows.map((row, i) => (
          <FeatureRow row={row} flip={i % 2 === 1} key={row.num} />
        ))}
      </div>
    </section>
  )
}
