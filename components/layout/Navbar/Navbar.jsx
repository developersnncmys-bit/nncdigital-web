'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button/Button'
import { nav, products, productDrawerExtras } from '@/data/content'
import styles from './Navbar.module.css'

// Drawers keyed by `link.drawer` on nav items in data/content.js. Right now
// only 'products' is a drawer; add more here if a future nav item becomes one.
const DRAWERS = {
  products: {
    items: products,
    extras: productDrawerExtras,
  },
}

// Sub-item icons for the Zoom-style grid in the drawer's right panel. Picked
// by keyword against the sub-item label so content.js does not need per-item
// icon fields. Falls back to the generic dot when no keyword matches.
const SUBITEM_ICON = {
  inbox: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  funnel: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 4h18l-7 9v6l-4 2v-8L3 4z" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" />
    </svg>
  ),
  receipt: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 3h14v18l-3-2-3 2-3-2-3 2-2-2V3z" /><path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20V10M18 20V4M6 20v-6" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 0 0 4 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2H3V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 4v6a8 8 0 0 1-16 0C4 6 10 2 20 4z" /><path d="M4 10c6-2 12 2 14 10" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69 5.64 9.05a9 9 0 1 0 12.73 0L12 2.69z" />
    </svg>
  ),
  fileCheck: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41 13.42 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><circle cx="7" cy="7" r="1.3" />
    </svg>
  ),
  dot: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
}

// Pick an icon from the sub-item label — longer keywords first so "sales
// pipeline" matches `funnel` via "pipeline" rather than falling through.
const SUBITEM_ICON_RULES = [
  ['pricing', 'tag'],
  ['enquir', 'inbox'],
  ['pipeline', 'funnel'],
  ['forecast', 'trending'],
  ['invoice', 'receipt'],
  ['invoicing', 'receipt'],
  ['payment', 'receipt'],
  ['accounting', 'receipt'],
  ['whatsapp', 'chat'],
  ['engagement', 'chat'],
  ['report', 'bars'],
  ['analytic', 'bars'],
  ['dashboard', 'bars'],
  ['analytics', 'bars'],
  ['integration', 'puzzle'],
  ['trip', 'pin'],
  ['tour', 'pin'],
  ['booking', 'calendar'],
  ['task', 'check'],
  ['central', 'sliders'],
  ['control', 'sliders'],
  ['journey', 'users'],
  ['student', 'users'],
  ['workforce', 'users'],
  ['social', 'users'],
  ['retention', 'users'],
  ['outreach', 'send'],
  ['energy', 'zap'],
  ['utilit', 'zap'],
  ['emission', 'leaf'],
  ['scope', 'leaf'],
  ['water', 'droplet'],
  ['waste', 'droplet'],
  ['brsr', 'fileCheck'],
]
const iconForSubItem = (label = '') => {
  const l = label.toLowerCase()
  for (const [kw, name] of SUBITEM_ICON_RULES) {
    if (l.includes(kw)) return SUBITEM_ICON[name]
  }
  return SUBITEM_ICON.dot
}

// Minimal product icon set. Kept local so the Navbar does not pull from the
// site-wide icon registry (which is tuned for feature icons, not product
// badges). Each is a 24x24 stroked SVG, inherits color from CSS.
const PRODUCT_ICON = {
  crm: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
      <path d="M8 14h3" />
      <path d="M8 17h8" />
    </svg>
  ),
  travel: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 16l20-7-6 13-3-6-5-2-6 2z" />
    </svg>
  ),
  training: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" />
    </svg>
  ),
  carcare: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 13l2-5a3 3 0 0 1 2.8-2h8.4A3 3 0 0 1 19 8l2 5" />
      <path d="M3 13v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4z" />
      <circle cx="7" cy="16" r="1" />
      <circle cx="17" cy="16" r="1" />
    </svg>
  ),
  smallbusiness: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1.5-4h15L21 9" />
      <path d="M3 9v2a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0V9" />
      <path d="M5 13v7h14v-7" />
      <path d="M10 20v-4h4v4" />
    </svg>
  ),
  netzero: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21c-5-3-7-7-7-11 0-3 3-6 7-6s7 3 7 6c0 4-2 8-7 11z" />
      <path d="M12 21V8" />
    </svg>
  ),
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Which drawer is open on desktop (hover-driven). null = closed.
  const [desktopDrawer, setDesktopDrawer] = useState(null)
  // Which item inside the open drawer is currently highlighted. Keyed by
  // product.key — defaults to the first product when the drawer opens.
  const [activeKey, setActiveKey] = useState(null)
  // Which drawers are expanded in the mobile accordion. Keyed by drawer name.
  const [mobileExpanded, setMobileExpanded] = useState({})
  const tick = useRef(false)
  // Debounces drawer close so brief cursor exits across the trigger↔panel
  // gap do not snap the drawer shut.
  const closeTimer = useRef(null)
  const pathname = usePathname()
  // Off the homepage there's no dark hero, so always use the solid (dark-text)
  // bar. Also flip to solid while any drawer is open — the drawer background
  // is white and the dark-hero nav would otherwise fight it visually.
  const solid = scrolled || pathname !== '/' || desktopDrawer !== null

  useEffect(() => {
    const onScroll = () => {
      if (tick.current) return
      tick.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        tick.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close any open drawer when the route changes.
  useEffect(() => {
    setDesktopDrawer(null)
    setOpen(false)
    setMobileExpanded({})
  }, [pathname])

  // Clear any pending close timer on unmount.
  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const openDrawer = (name) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setDesktopDrawer(name)
    const drawer = DRAWERS[name]
    if (drawer && drawer.items.length) {
      setActiveKey((prev) => prev || drawer.items[0].key)
    }
  }
  const scheduleCloseDrawer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setDesktopDrawer(null)
      closeTimer.current = null
    }, 120)
  }

  const renderDesktopItem = (l) => {
    if (!l.drawer) {
      return (
        <a key={l.label} href={l.href} className={styles.link}>
          {l.label}
        </a>
      )
    }
    const drawer = DRAWERS[l.drawer]
    if (!drawer) return null
    const isOpen = desktopDrawer === l.drawer
    const activeProduct =
      drawer.items.find((p) => p.key === activeKey) || drawer.items[0]

    return (
      <div
        key={l.label}
        className={styles.drawerWrap}
        onMouseEnter={() => openDrawer(l.drawer)}
        onMouseLeave={scheduleCloseDrawer}
      >
        <button
          type="button"
          className={`${styles.link} ${styles.drawerTrigger} ${isOpen ? styles.drawerTriggerOpen : ''}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onFocus={() => openDrawer(l.drawer)}
        >
          {l.label}
          <svg className={styles.caret} viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
            <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <div className={styles.drawer} role="menu">
            <div className={styles.drawerGrid}>
              {/* Left column: list of products + extras */}
              <aside className={styles.drawerList} aria-label="Products">
                {drawer.items.map((p) => {
                  const isActive = p.key === activeProduct?.key
                  return (
                    <button
                      key={p.key}
                      type="button"
                      className={`${styles.listRow} ${isActive ? styles.listRowActive : ''}`}
                      onMouseEnter={() => setActiveKey(p.key)}
                      onFocus={() => setActiveKey(p.key)}
                      onClick={() => {
                        if (p.href) window.location.href = p.href
                      }}
                    >
                      <span className={styles.listRowLabel}>{p.shortName || p.name}</span>
                      {p.comingSoon && <span className={styles.badge}>Soon</span>}
                      {!p.comingSoon && (
                        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" className={styles.listChevron}>
                          <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  )
                })}

                {drawer.extras && drawer.extras.length > 0 && (
                  <>
                    <div className={styles.listDivider} />
                    {drawer.extras.map((e) => (
                      <a key={e.label} href={e.href} className={styles.listExtra}>
                        {e.label}
                      </a>
                    ))}
                  </>
                )}
              </aside>

              {/* Right column: active product's detail — Zoom-style header +
                  icon-tile grid of sub-items (not a long description block). */}
              <section className={styles.drawerDetail}>
                {activeProduct && (
                  <>
                    <header className={styles.detailHeader}>
                      <h3 className={styles.detailTitle}>
                        {activeProduct.name}
                        {activeProduct.comingSoon && <span className={styles.badgeInline}>Coming soon</span>}
                      </h3>
                      {activeProduct.description && (
                        <p className={styles.detailTagline}>{activeProduct.description}</p>
                      )}
                      {activeProduct.href && (
                        <a href={activeProduct.href} className={styles.detailExplore}>
                          {activeProduct.exploreLabel || `Explore ${activeProduct.shortName}`}
                          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                            <path d="M3 6h6M6 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </header>
                    {activeProduct.subItems && activeProduct.subItems.length > 0 && (
                      <div className={styles.detailSubGrid}>
                        {activeProduct.subItems.map((s) => (
                          <a key={s.label} href={s.href} className={styles.detailSubTile}>
                            <span className={styles.detailSubTileIcon}>{iconForSubItem(s.label)}</span>
                            <span className={styles.detailSubTileLabel}>{s.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {activeProduct.comingSoon && (
                      <p className={styles.detailMuted}>Details and a dedicated page are on the way.</p>
                    )}
                  </>
                )}
              </section>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderMobileItem = (l) => {
    if (!l.drawer) {
      return (
        <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
          {l.label}
        </a>
      )
    }
    const drawer = DRAWERS[l.drawer]
    if (!drawer) return null
    const isExpanded = !!mobileExpanded[l.drawer]

    return (
      <div key={l.label} className={styles.mobileGroup}>
        <button
          type="button"
          className={styles.mobileGroupToggle}
          aria-expanded={isExpanded}
          onClick={() => setMobileExpanded((s) => ({ ...s, [l.drawer]: !s[l.drawer] }))}
        >
          <span>{l.label}</span>
          <svg
            viewBox="0 0 12 12"
            width="12"
            height="12"
            className={`${styles.mobileCaret} ${isExpanded ? styles.mobileCaretOpen : ''}`}
            aria-hidden="true"
          >
            <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {isExpanded && (
          <div className={styles.mobileSub}>
            {drawer.items.map((p) => {
              const Icon = PRODUCT_ICON[p.icon]
              const content = (
                <>
                  <span className={styles.mobileSubIcon}>{Icon}</span>
                  <span className={styles.mobileSubBody}>
                    <span className={styles.mobileSubTitleRow}>
                      <span className={styles.mobileSubTitle}>{p.name}</span>
                      {p.comingSoon && <span className={styles.badge}>Coming soon</span>}
                    </span>
                    <span className={styles.mobileSubDesc}>{p.description}</span>
                  </span>
                </>
              )
              const className = `${styles.mobileSubItem} ${p.comingSoon ? styles.mobileSubDisabled : ''}`
              return p.href ? (
                <a key={p.key} href={p.href} className={className} onClick={() => setOpen(false)}>
                  {content}
                </a>
              ) : (
                <div key={p.key} className={className} aria-disabled="true">
                  {content}
                </div>
              )
            })}
            {drawer.extras?.map((e) => (
              <a
                key={e.label}
                href={e.href}
                className={styles.mobileExtra}
                onClick={() => setOpen(false)}
              >
                {e.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <header className={`${styles.nav} ${solid ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" aria-label="NNC Digital, go to home page">
          <img className={styles.mark} src="/nnc-mark.png" alt="" aria-hidden="true" />
          <span className={styles.brandText}>
            NNC<span className={styles.brandLight}>digital</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {nav.links.map(renderDesktopItem)}
        </nav>

        <div className={styles.actions}>
          <Button href={nav.cta.href} variant="primary" arrow={false}>
            {nav.cta.label}
          </Button>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {nav.links.map(renderMobileItem)}
          <div className={styles.mobileCta}>
            <Button href={nav.cta.href} variant="primary" arrow={false}>
              {nav.cta.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
