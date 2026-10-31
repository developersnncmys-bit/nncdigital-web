// Reusable Mac browser mockup — frosted-glass window on a navy-gradient
// backdrop. Used to frame animated dashboard mockups so a tour-of-the-app
// feel reads from any landing position (homepage Showcase, product hero
// media, etc.).
//
// Props:
//   url       — the string shown in the center address pill (default: generic brand URL)
//   children  — the UI to render inside the browser's content area
import styles from './BrowserFrame.module.css'

export default function BrowserFrame({ url = 'app.nnccrm.com', children }) {
  return (
    <div className={styles.stage}>
      <div className={styles.browser}>
        <div className={styles.bar}>
          <span className={styles.dots} aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className={styles.url}>{url}</span>
          <span className={styles.spacer} aria-hidden="true" />
        </div>
        <div className={styles.screen}>{children}</div>
      </div>
    </div>
  )
}
