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
    const Icon = activeProduct ? PRODUCT_ICON[activeProduct.icon] : null

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

              {/* Right column: active product's detail */}
              <section className={styles.drawerDetail}>
                {activeProduct && (
                  <>
                    <span className={styles.detailIcon}>{Icon}</span>
                    <h3 className={styles.detailTitle}>
                      {activeProduct.name}
                      {activeProduct.comingSoon && <span className={styles.badgeInline}>Coming soon</span>}
                    </h3>
                    <p className={styles.detailDesc}>{activeProduct.description}</p>
                    {activeProduct.href && (
                      <a href={activeProduct.href} className={styles.detailExplore}>
                        {activeProduct.exploreLabel || `Explore ${activeProduct.shortName}`}
                        <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                          <path d="M3 6h6M6 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                    {activeProduct.subItems && activeProduct.subItems.length > 0 && (
                      <div className={styles.detailSubList}>
                        {activeProduct.subItems.map((s) => (
                          <a key={s.label} href={s.href} className={styles.detailSubItem}>
                            {s.label}
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
