import s from "./TravelLanding.module.css"
import { SwooshNarrow } from "./TravelArt"
import { faqItems as baseFaq, contactDetails } from "@/data/travel"

export default function TravelFaq({ page }) {
  const items = page.faq || baseFaq
  // Per-page overrides for the FAQ side column — brief can swap the H2
  // and the support lead. Falls back to the travel-crm defaults.
  const h2 = page.faqTitle || 'Questions travel owners ask us'
  const supportLead =
    page.faqLead ||
    `Still unsure? Call ${contactDetails.call} or WhatsApp ${contactDetails.whatsapp} and we will walk you through it.`

  return (
    <section className={s.faq} id="faq">
      <div className={`${s.wrap} ${s.grid}`}>
        <div className={s.side}>
          <span className={s.kicker}>
            FAQ
            <span className={s.deco}>
              <SwooshNarrow />
            </span>
          </span>
          <h2>
            {h2}
            <span className={s.dot}>.</span>
          </h2>
          <p className={`${s.lead} ${s.muted}`}>{supportLead}</p>
          <span className={`${s.hand} ${s.n}`}>happy to help</span>
        </div>

        <div>
          {items.map((item, i) => (
            // The design ships the first question open.
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className={s.t} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
