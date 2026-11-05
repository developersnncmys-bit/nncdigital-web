import s from './TravelLanding.module.css'
import { SwooshMid } from './TravelArt'
import * as Icons from './TravelIcons'
import { audiences as baseAudiences } from '@/data/travel'

export default function TravelBuiltFor({ page }) {
  // Per-page overrides — a brief can swap the audience cards and/or the
  // case-study block without touching other pages. Keyed off `page.builtFor`.
  const aud = page.builtFor?.audiences || baseAudiences
  const cs = page.builtFor?.caseStudy
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
        {page.builtFor.lead && <p className={s.builtLead}>{page.builtFor.lead}</p>}

        <div className={s.aud}>
          {aud.map((a) => {
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
            <h3>{cs?.title || 'A Leisure Tour Operator'}</h3>
            <p>
              <b>{cs?.challengeLabel || 'The Challenge.'}</b>{' '}
              {cs?.challenge ||
                'Travel enquiries arrived through the website, calls, and WhatsApp. Preparing every quotation required manually rebuilding hotel, ferry, and cab costs.'}
            </p>
          </div>
          <div>
            <p>
              <b className={s.g}>{cs?.solutionLabel || 'The Solution.'}</b>{' '}
              {cs?.solution ||
                'NNC Travel CRM was deployed on the operator’s branded workspace, bringing together a trip pipeline, reusable itineraries, branded quotations with ferry and hotel options, and instalment tracking with GST invoices.'}
            </p>
            {cs?.outcome && (
              <p style={{ marginTop: 20 }}>
                <b className={s.g}>{cs?.outcomeLabel || 'The Outcome.'}</b>{' '}
                {cs.outcome}
              </p>
            )}
          </div>
          <span className={`${s.hand} ${s.n}`}>{cs?.note || 'live and running today'}</span>
        </div>
      </div>
    </section>
  )
}
