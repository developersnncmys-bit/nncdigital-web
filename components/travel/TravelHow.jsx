import s from './TravelLanding.module.css'
import { SwooshWide, StepsPath } from './TravelArt'
import * as Icons from './TravelIcons'
import { steps } from '@/data/travel'

export default function TravelHow() {
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
            From first demo to go live, in four clear steps
            <span className={s.dot}>.</span>
          </h2>
        </div>

        <div className={s.steps}>
          <div className={s.deco}>
            <StepsPath />
          </div>
          <div className={`${s.hand} ${s.live}`}>and you&rsquo;re live!</div>

          {steps.map((st) => {
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
