import { Fragment } from 'react'
import s from './TravelLanding.module.css'
import {
  FlightHero,
  Sun,
  Waves,
  CirclePrice,
  ArrowPriceNote,
  ArrowHeroNoteA,
  ArrowHeroNoteB,
} from './TravelArt'
import { UnderlineHeroFlex } from './TravelArtFlex'
import { pricing, heroShots } from '@/data/travel'

export default function TravelHero({ page }) {
  const { pill, h1, lead, secondaryCta, heroNotes } = page

  return (
    <section className={s.hero}>
      <div className={s.deco} style={{ right: -330, top: -160 }}>
        <img src="/travel-crm/doodles/hero-contours.svg" alt="" width={900} height={760} />
      </div>
      <div className={s.deco} style={{ left: '52%', top: 10 }}>
        <FlightHero />
      </div>
      <div className={s.deco} style={{ right: 90, top: 60 }}>
        <Sun />
      </div>
      <div className={s.deco} style={{ right: 40, bottom: 70 }}>
        <Waves />
      </div>

      <div className={`${s.wrap} ${s.grid}`}>
        <div>
          <span className={s.pill}>{pill}</span>

          <h1>
            {h1.lines.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
            {h1.tail}
            {/* The full stop lives inside the underlined phrase: .u is an
                inline-block, so a dot placed after it gets pushed to the end of
                the line once the phrase wraps on a narrow screen. */}
            <span className={s.u}>
              {h1.underline}
              <span className={s.dot}>.</span>
              {/* stretches to whatever phrase this page underlines */}
              <span className={`${s.deco} ${s.stretch}`}>
                <UnderlineHeroFlex />
              </span>
            </span>
          </h1>

          <p className={s.lead}>{lead}</p>

          <div className={s.ctaRow}>
            <a className={`${s.btn} ${s.btnPrimary}`} href="#demo">
              Book a live demo
            </a>
            <a className={`${s.btn} ${s.btnSecondary}`} href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          </div>

          <div className={s.priceStrip}>
            <div className={s.big}>
              {pricing.perUser}
              <span className={s.deco}>
                <CirclePrice />
              </span>
            </div>
            <div className={s.per}>
              per user
              <br />
              per month
            </div>
            <div className={s.vr} />
            <div className={s.terms}>
              <b>{pricing.minUsers}</b>
              <span>{pricing.gstNote}</span>
            </div>
          </div>

          <div className={`${s.priceNote} ${s.hand}`}>
            <span className={s.deco}>
              <ArrowPriceNote />
            </span>
            under Rs. 20 a day per user!
          </div>
        </div>

        <div className={s.heroVisual}>
          <div className={s.browser}>
            <div className={s.bar}>
              <i />
              <i />
              <i />
              <span className={s.url}>yourbrand.nncdigital.in</span>
            </div>
            <img
              src={heroShots.dashboard.src}
              alt={heroShots.dashboard.alt}
              width={heroShots.dashboard.w}
              height={heroShots.dashboard.h}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className={`${s.float} ${s.q}`}>
            <img
              src={heroShots.quoteCover.src}
              alt={heroShots.quoteCover.alt}
              width={heroShots.quoteCover.w}
              height={heroShots.quoteCover.h}
              decoding="async"
            />
          </div>
          <div className={`${s.float} ${s.p}`}>
            <img
              src={heroShots.instalment.src}
              alt={heroShots.instalment.alt}
              width={heroShots.instalment.w}
              height={heroShots.instalment.h}
              decoding="async"
            />
          </div>

          <div className={`${s.hand} ${s.n1}`}>
            <span className={s.deco}>
              <ArrowHeroNoteA />
            </span>
            {heroNotes[0]}
          </div>
          <div className={`${s.hand} ${s.n2}`}>
            <span className={s.deco}>
              <ArrowHeroNoteB />
            </span>
            {heroNotes[1]}
          </div>
        </div>
      </div>
    </section>
  )
}
