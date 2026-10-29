import s from './TravelLanding.module.css'
import { SwooshMid } from './TravelArt'
import * as Icons from './TravelIcons'
import { audiences } from '@/data/travel'

export default function TravelBuiltFor({ page }) {
  return (
    <section className={s.built}>
      <div className={s.wrap}>
        <span className={s.kicker}>
          BUILT FOR
          <span className={s.deco}>
            <SwooshMid />
          </span>
        </span>
        <h2>
          {page.builtFor.title}
          <span className={s.dot}>.</span>
        </h2>

        <div className={s.aud}>
          {audiences.map((a) => {
            const Icon = Icons[a.icon]
            return (
              <div key={a.title}>
                <span className={s.badge}>
                  <Icon />
                </span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            )
          })}
        </div>

        <div className={`${s.stage} ${s.case}`}>
          <span className={s.q} aria-hidden="true">
            &ldquo;
          </span>
          <div>
            <span className={s.kicker} style={{ padding: 0 }}>
              CASE STUDY
            </span>
            <h3>A leisure tour operator</h3>
            <p>
              <b>The problem.</b> Enquiries came in from the website, calls and WhatsApp, and every
              quote had to be rebuilt by hand with hotel, ferry and cab costs.
            </p>
          </div>
          <p style={{ marginTop: 40 }}>
            <b className={s.g}>What we did.</b> We deployed this Travel CRM on their own branded
            workspace: one trip pipeline, reusable itineraries, branded quotes with ferry and hotel
            options, and instalment tracking with GST invoices.
          </p>
          <span className={`${s.hand} ${s.n}`}>live and running today</span>
        </div>
      </div>
    </section>
  )
}
