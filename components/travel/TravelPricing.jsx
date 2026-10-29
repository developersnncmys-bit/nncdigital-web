import { Fragment } from 'react'
import s from './TravelLanding.module.css'
import {
  SwooshMid,
  CircleAmount,
  ArrowPriceChart,
  UnderlineDaily,
} from './TravelArt'
import { CheckBadge } from './TravelIcons'
import { pricing } from '@/data/travel'

export default function TravelPricing() {
  return (
    <section className={s.pricing} id="pricing">
      <div className={s.wrap}>
        <div className={s.center}>
          <span className={s.kicker}>
            PRICING
            <span className={s.deco}>
              <SwooshMid />
            </span>
          </span>
          <h2>
            One simple price per user, per month
            <span className={s.dot}>.</span>
          </h2>
          <p className={`${s.lead} ${s.muted}`} style={{ marginTop: 12 }}>
            Pay only for the users on your team. Minimum 10 users. Add more as you grow.
          </p>
        </div>

        <div className={s.grid}>
          <div className={s.pcard}>
            <div className={s.deco}>
              <img src="/travel-crm/doodles/dark-contours.svg" alt="" width={700} height={700} loading="lazy" decoding="async" />
            </div>
            <div className={s.cap}>PER USER, PER MONTH</div>
            <div className={s.amt}>
              {pricing.perUser}
              <span className={s.deco}>
                <CircleAmount />
              </span>
            </div>
            <div className={s.gst}>+ 18% GST applicable</div>
            <hr />
            <div className={s.min}>{pricing.minUsers}</div>
            <p className={s.start}>{pricing.starting}</p>
            <ul>
              {pricing.includes.map((f) => (
                <li key={f}>
                  <CheckBadge />
                  {f}
                </li>
              ))}
            </ul>
            <a className={`${s.btn} ${s.btnOnDark}`} href="#demo">
              Book a live demo
            </a>
          </div>

          <div>
            <div className={`${s.stage} ${s.pchart}`}>
              <div className={s.deco}>
                <img src="/travel-crm/doodles/stage-contours.svg" alt="" width={700} height={600} loading="lazy" decoding="async" />
              </div>
              <div className={s.cap}>MONTHLY INVESTMENT BY TEAM SIZE</div>
              <div className={s.muted} style={{ fontSize: 14, position: 'relative' }}>
                Including 18% GST
              </div>
              <div className={`${s.hand} ${s.n}`}>
                start here
                <span className={s.deco}>
                  <ArrowPriceChart />
                </span>
              </div>

              <div className={s.pbars}>
                {pricing.byTeamSize.map((b) => (
                  <div
                    key={b.users}
                    className={b.highlight ? `${s.bar} ${s.hi}` : s.bar}
                    style={{ height: `${b.pct}%` }}
                  >
                    <b>{b.amount}</b>
                    <span>{b.users}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.eq}>
              {pricing.breakdown.map((box, i) => (
                <Fragment key={box.label}>
                  {i > 0 && (
                    <span className={s.op} aria-hidden="true">
                      {i === 1 ? 'x' : i === 3 ? '+' : '='}
                    </span>
                  )}
                  <div className={i === pricing.breakdown.length - 1 ? `${s.box} ${s.last}` : s.box}>
                    <b>{box.value}</b>
                    <span>{box.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>

            <div className={s.daily}>
              <b>
                Under{' '}
                <span className={s.u}>
                  Rs. 20 a day
                  <span className={s.deco}>
                    <UnderlineDaily />
                  </span>
                </span>{' '}
                per user
              </b>
              <p>
                Less than a cup of tea, for a seat that captures enquiries, sends quotes and collects
                payments.
              </p>
            </div>
          </div>
        </div>

        <p className={s.fine}>{pricing.fine}</p>
      </div>
    </section>
  )
}
