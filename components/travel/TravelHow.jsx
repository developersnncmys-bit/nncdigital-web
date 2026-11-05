import s from './TravelLanding.module.css'
import { SwooshWide, StepsPath } from './TravelArt'
import * as Icons from './TravelIcons'
import { steps as baseSteps } from '@/data/travel'

export default function TravelHow({ page }) {
  // Per-page override — brief can swap the H2, lead and step titles/bodies
  // without touching other pages. Falls back to the travel-crm defaults.
  const h = page?.how || {}
  const title = h.title || 'Get Your Travel CRM Ready in Four Steps'
  const lead =
    h.lead ||
    'Move from a live product demonstration to managing your travel business through a structured onboarding process.'
  const stepsList = h.steps || baseSteps
  return (
    <section className={s.how} id="how">
      <div className={s.wrap}>
        <div className={s.center}>
          <span className={s.kicker}>
            HOW IT WORKS
            <span className={s.deco}>
              <SwooshWide />
            </span>
          </span>
          <h2>
            {title}
            <span className={s.dot}>.</span>
          </h2>
          <p className={s.howLead}>{lead}</p>
        </div>

        <div className={s.steps}>
          <div className={s.deco}>
            <StepsPath />
          </div>
          <div className={`${s.hand} ${s.live}`}>and you&rsquo;re live!</div>

          {stepsList.map((st) => {
            const Icon = Icons[st.icon]
            return (
              <div className={s.step} key={st.step}>
                <div className={s.circle}>
                  <Icon />
                </div>
                <small>{st.step}</small>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
