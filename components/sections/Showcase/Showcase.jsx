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

        <div className={styles.stage}>
          <div className={styles.browser}>
            <div className={styles.bar}>
              <span className={styles.dots} aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className={styles.url}>app.nnccrm.com</span>
              <span className={styles.spacer} aria-hidden="true" />
            </div>
            <div className={styles.screen}>
              <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/showcase.jpg"
                aria-hidden="true"
              >
                <source src="/showcase.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
