import CRMDashboard from '@/components/marketing/CRMDashboard'
import BrowserFrame from '@/components/marketing/BrowserFrame'
import styles from './Showcase.module.css'

export default function Showcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>See NNC CRM in Action</h2>
        <p className={styles.lead}>
          Discover how NNC CRM helps businesses capture leads, manage sales
          pipelines, forecast growth and organise customer information through
          one platform.
        </p>
        <p className={styles.lead}>
          Explore how this Customer Relationship Management Software simplifies
          everyday business activities.
        </p>
        <a className={styles.cta} href="#start" data-trial>
          Watch CRM Demo
        </a>

        {/* Animated SVG product mockup inside a shared Mac browser frame.
            CRMDashboard cycles through Dashboard → Pipeline → Customers →
            Invoices every ~4s with live-updating KPIs, revenue chart,
            pipeline, and toast notifications. `compact` keeps all four
            views at the same fixed height and shrinks the content so
            nothing clips or jumps. */}
        <div className={styles.frameWrap}>
          <BrowserFrame url="app.nnccrm.com">
            <CRMDashboard showFloats={false} flat compact />
          </BrowserFrame>
        </div>
      </div>
    </section>
  )
}
