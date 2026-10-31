'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CRMDashboard.module.css'

/* ---------------- icons ---------------- */
const ICON = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  funnel: 'M3 4h18l-7 8v6l-4 2v-8z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  invoice: 'M6 2h9l5 5v15H6zM15 2v5h5M9 13h6M9 17h6',
  bell: 'M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  plus: 'M12 5v14M5 12h14',
  check: 'M20 6 9 17l-5-5',
  bolt: 'M13 2 3 14h7l-1 8 10-12h-7z',
}
const Svg = ({ d, sw = 2 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)}
  </svg>
)

/* ---------------- count-up (re-runs on every view mount) ---------------- */
function Num({ to, prefix = '', suffix = '', decimals = 0 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to); return undefined
    }
    let raf, start
    const dur = 1000
    const ease = (t) => 1 - (1 - t) ** 3
    const step = (now) => {
      if (start === undefined) start = now
      const t = Math.min(1, (now - start) / dur)
      setN(to * ease(t))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to])
  const v = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-IN')
  return <>{prefix}{v}{suffix}</>
}

/* ---------------- mini sparkline ---------------- */
function Spark({ data, up = true }) {
  const w = 64, h = 22
  const max = Math.max(...data), min = Math.min(...data)
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - 2 - ((v - min) / (max - min || 1)) * (h - 4)
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
  return (
    <svg className={styles.spark} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={up ? 'var(--navy, #0b5cff)' : '#ef4444'} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---------------- area chart ---------------- */
const LINE = [[0, 90], [32, 82], [64, 86], [98, 64], [130, 70], [164, 46], [198, 52], [232, 30], [266, 24], [296, 12]]
const linePath = 'M' + LINE.map((p) => p.join(',')).join(' L')
const areaPath = linePath + ' L300,110 L0,110 Z'

function AreaChart() {
  return (
    <div className={styles.chartWrap}>
      <span className={styles.grid} aria-hidden="true" />
      <svg className={styles.chartSvg} viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="cdLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7aa2ff" />
            <stop offset="100%" stopColor="#0b5cff" />
          </linearGradient>
          <linearGradient id="cdArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(11,92,255,0.32)" />
            <stop offset="100%" stopColor="rgba(11,92,255,0)" />
          </linearGradient>
        </defs>
        <path className={styles.chartArea} d={areaPath} />
        <path className={styles.chartLine} d={linePath} pathLength="1" />
      </svg>
      <span className={styles.endDot} aria-hidden="true" />
      <span className={styles.chartTip}>₹14.2L<i>▲ 27%</i></span>
    </div>
  )
}

/* ---------------- progress donut ---------------- */
function Donut({ pct }) {
  const r = 52, c = 2 * Math.PI * r
  const off = c - (pct / 100) * c
  return (
    <div className={styles.donutWrap}>
      <svg viewBox="0 0 120 120" className={styles.donut} aria-hidden="true">
        <defs>
          <linearGradient id="cdDonut" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3f74ff" />
            <stop offset="100%" stopColor="#0a44c8" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--paper, #eef1f7)" strokeWidth="12" />
        <circle
          className={styles.donutVal}
          cx="60" cy="60" r={r} fill="none" stroke="url(#cdDonut)" strokeWidth="12" strokeLinecap="round"
          transform="rotate(-90 60 60)"
          style={{ strokeDasharray: c, '--c': c, '--off': off }}
        />
      </svg>
      <span className={styles.donutCenter}><b><Num to={pct} suffix="%" /></b><i>collected</i></span>
    </div>
  )
}

/* ---------------- module data ---------------- */
// Generic sales / CRM content used for the homepage Showcase. Keeps the
// visual chrome shared with TrainingInstitutesDashboard but swaps every
// data point for pipeline / customer / invoice flavor.
const MODULES = [
  { key: 'overview', label: 'Dashboard', icon: 'grid' },
  { key: 'leads', label: 'Pipeline', icon: 'funnel' },
  { key: 'students', label: 'Customers', icon: 'users' },
  { key: 'fees', label: 'Invoices', icon: 'invoice' },
]

const KPIS = [
  { label: 'Enquiries', to: 1240, delta: '+18%', spark: [4, 6, 5, 7, 8, 9, 11, 12] },
  { label: 'Deals won', to: 86, delta: '+32%', spark: [2, 3, 3, 4, 5, 6, 8, 10] },
  { label: 'Revenue (mo)', to: 18.4, decimals: 1, prefix: '₹', suffix: 'L', delta: '+27%', spark: [5, 6, 6, 8, 9, 11, 13, 14] },
  { label: 'Follow-ups', to: 24, delta: 'today', spark: [18, 20, 21, 22, 24, 25, 27, 24] },
]

const FEED = [
  { who: 'Rohit M.', what: 'moved Nextgen Cars to Quoted', t: 'now', c: '#1877f2', ini: 'RM' },
  { who: 'Sneha P.', what: 'collected ₹85,000 from ABC Ltd', t: '2m', c: '#16a34a', ini: 'SP' },
  { who: 'Imran K.', what: 'closed Starlight Bakery (₹1.9L)', t: '6m', c: '#a855f7', ini: 'IK' },
]

const PIPE = [
  { col: 'New', n: 14, cards: [{ name: 'Rohit Industries', sub: 'Manufacturing', amt: '₹2.4L' }, { name: 'Nextgen Cars', sub: 'Automotive', amt: '₹3.8L' }] },
  { col: 'Contacted', n: 9, cards: [{ name: 'Luma Textiles', sub: 'Retail', amt: '₹1.6L' }] },
  { col: 'Quoted', n: 6, cards: [{ name: 'ABC Logistics', sub: 'Logistics', amt: '₹5.2L' }, { name: 'Trenz Retail', sub: 'Retail', amt: '₹2.9L' }] },
  { col: 'Won', n: 4, won: true, cards: [{ name: 'Starlight Bakery', sub: 'F&B', amt: '₹1.9L' }] },
]

// Table rows for the "Customers" view (component still named Students for
// backward-compatible CSS classnames). Each row shows a company, contact,
// industry, status indicator and plan tier.
const STUDENTS = [
  { name: 'Rohit Industries', course: 'Rohit Sharma', batch: 'Manufacturing', status: 'active', fee: 'Growth' },
  { name: 'Nextgen Cars', course: 'Priya Patel', batch: 'Automotive', status: 'active', fee: 'Growth' },
  { name: 'ABC Logistics', course: 'Imran Khan', batch: 'Logistics', status: 'pending', fee: 'Trial' },
  { name: 'Trenz Retail', course: 'Sneha Patil', batch: 'Retail', status: 'active', fee: 'Starter' },
  { name: 'Starlight Bakery', course: 'Vikram Singh', batch: 'F&B', status: 'pending', fee: 'Trial' },
]

const PENDING = [
  { name: 'Rohit Industries', sub: 'INV-2026-089 · due in 3 days', amt: '₹1,20,000' },
  { name: 'Nextgen Cars', sub: 'INV-2026-092 · due today', amt: '₹85,000' },
  { name: 'ABC Logistics', sub: 'INV-2026-095 · due in 5 days', amt: '₹46,000' },
]

const TOASTS = [
  { ini: 'SB', c: '#16a34a', b: 'Deal won', i: 'Starlight Bakery · ₹1.9L' },
  { ini: '₹', c: '#0b5cff', b: 'Payment received', i: '₹85,000 · auto-receipt sent' },
  { ini: 'RM', c: '#1877f2', b: 'Lead qualified', i: 'Nextgen Cars moved to Quoted' },
]

/* ---------------- views ---------------- */
function Overview() {
  return (
    <div className={styles.view}>
      <div className={styles.kpis}>
        {KPIS.map((k, i) => (
          <div className={styles.kpi} style={{ animationDelay: `${i * 70}ms` }} key={k.label}>
            <span className={styles.kLabel}>{k.label}</span>
            <span className={styles.kVal}>
              <Num to={k.to} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} />
            </span>
            <span className={styles.kRow}>
              <span className={styles.kDelta}>▲ {k.delta}</span>
              <Spark data={k.spark} />
            </span>
          </div>
        ))}
      </div>
      <div className={styles.panelRow}>
        <div className={styles.chartCard} style={{ animationDelay: '160ms' }}>
          <div className={styles.cardHead}><span>Revenue trend</span><span className={styles.live}><i />Live</span></div>
          <AreaChart />
        </div>
        <div className={styles.feed} style={{ animationDelay: '220ms' }}>
          <div className={styles.cardHead}><span>Activity</span></div>
          {FEED.map((f, i) => (
            <div className={styles.feedItem} key={i} style={{ animationDelay: `${320 + i * 90}ms` }}>
              <span className={styles.fAv} style={{ background: f.c }}>{f.ini}</span>
              <span className={styles.fText}><b>{f.who}</b> {f.what}</span>
              <span className={styles.fTime}>{f.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Leads() {
  return (
    <div className={styles.view}>
      <div className={styles.pipe}>
        {PIPE.map((col, i) => (
          <div className={styles.col} key={col.col} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={styles.colHead}>
              <span className={col.won ? styles.colDotWon : styles.colDot} />{col.col}
              <span className={styles.colCount}>{col.n}</span>
            </div>
            {col.cards.map((c, j) => (
              <div className={`${styles.leadCard} ${col.won ? styles.leadWon : ''}`} key={j} style={{ animationDelay: `${i * 80 + j * 90 + 120}ms` }}>
                <span className={styles.lName}>{c.name}</span>
                <span className={styles.lSub}>{c.sub}</span>
                <span className={styles.lAmt}>{c.amt}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Students() {
  return (
    <div className={styles.view}>
      <div className={styles.tableCard}>
        <div className={styles.thead}>
          <span>Customer</span><span>Contact</span><span>Industry</span><span className={styles.tRight}>Plan</span>
        </div>
        {STUDENTS.map((s, i) => (
          <div className={styles.trow} key={s.name} style={{ animationDelay: `${i * 70}ms` }}>
            <span className={styles.tName}>
              <span className={styles.tDot} data-on={s.status === 'active'} />{s.name}
            </span>
            <span className={styles.tMuted}>{s.course}</span>
            <span className={styles.tMuted}>{s.batch}</span>
            <span className={styles.tRight}>
              <span className={s.status === 'active' ? styles.feePaid : styles.feeDue}>{s.fee}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Fees() {
  return (
    <div className={styles.view}>
      <div className={styles.panelRow}>
        <div className={styles.collectCard} style={{ animationDelay: '60ms' }}>
          <Donut pct={79} />
          <div className={styles.feesMeta}>
            <span className={styles.cBig}><Num to={18.4} decimals={1} prefix="₹" suffix="L" /></span>
            <span className={styles.cLabel}>collected of ₹23.0L invoiced</span>
            <span className={styles.cChip}>▲ 27% vs last month</span>
          </div>
        </div>
        <div className={styles.pending} style={{ animationDelay: '140ms' }}>
          <div className={styles.cardHead}><span>Outstanding invoices</span><span className={styles.pendTotal}>₹4.6L</span></div>
          {PENDING.map((p, i) => (
            <div className={styles.pRow} key={p.name} style={{ animationDelay: `${220 + i * 90}ms` }}>
              <span className={styles.pInfo}><b>{p.name}</b><i>{p.sub}</i></span>
              <span className={styles.pAmt}>{p.amt}</span>
              <span className={styles.remind}>Remind</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const VIEWS = { overview: Overview, leads: Leads, students: Students, fees: Fees }

/* ---------------- shell ---------------- */
// Props:
//   showFloats — toggle the two decorative overlay cards ("+32% conversion"
//     and "1,240 enquiries"). Great as hero accents; cluttered inside a
//     tighter frame like the Showcase's Mac browser mockup.
//   flat — disable the 3D card tilt + forced aspect ratio. Use when the
//     dashboard is embedded inside another window chrome and should sit
//     flat with natural height.
//   compact — shrink the dashboard base font-size so every em-based
//     element inside proportionally scales down. Combined with the fixed
//     card height, this keeps all four views (Dashboard / Pipeline /
//     Customers / Invoices) the SAME visual height instead of each
//     stretching to its own natural content height.
export default function CRMDashboard({ showFloats = true, flat = false, compact = false } = {}) {
  const ref = useRef(null)
  const [run, setRun] = useState(false)
  const [paused, setPaused] = useState(false)
  const [active, setActive] = useState(0)
  // Previous view index — set briefly during a transition so the outgoing
  // view can slide out to the left while the incoming view slides in from
  // the right. Cleared to null after the ~550ms animation finishes.
  const [prev, setPrev] = useState(null)
  const prevRef = useRef(active)
  const [toast, setToast] = useState(0)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const io = new IntersectionObserver(([e]) => setRun(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!run || paused) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setActive((a) => (a + 1) % MODULES.length), 4200)
    return () => clearInterval(id)
  }, [run, paused])

  // Trigger the slide transition whenever `active` changes.
  useEffect(() => {
    if (prevRef.current === active) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      prevRef.current = active
      return undefined
    }
    setPrev(prevRef.current)
    prevRef.current = active
    const t = setTimeout(() => setPrev(null), 550)
    return () => clearTimeout(t)
  }, [active])

  useEffect(() => {
    if (!run) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let hide
    const id = setInterval(() => {
      setToast((t) => (t + 1) % TOASTS.length)
      setShowToast(true)
      hide = setTimeout(() => setShowToast(false), 2600)
    }, 4200)
    return () => { clearInterval(id); clearTimeout(hide) }
  }, [run])

  const View = VIEWS[MODULES[active].key]
  const tt = TOASTS[toast]

  return (
    <div
      className={`${styles.stage} ${flat ? styles.stageFlat : ''} ${compact ? styles.stageCompact : ''}`}
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.card}>
        <aside className={styles.side}>
          <div className={styles.brand}>
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandName}>NNC CRM</span>
          </div>
          <span className={styles.navLabelTop}>Menu</span>
          <nav className={styles.nav}>
            {MODULES.map((m, i) => (
              <button
                type="button"
                key={m.key}
                className={`${styles.navItem} ${i === active ? styles.navActive : ''}`}
                onClick={() => setActive(i)}
                aria-current={i === active ? 'page' : undefined}
              >
                <span className={styles.navIcon}><Svg d={ICON[m.icon]} /></span>
                <span className={styles.navText}>{m.label}</span>
              </button>
            ))}
          </nav>
          <div className={styles.upsell}>
            <span className={styles.upIcon}><Svg d={ICON.bolt} /></span>
            <span>Growth plan<i>3 users · WhatsApp built in</i></span>
          </div>
        </aside>

        <div className={styles.body}>
          <header className={styles.top}>
            <span className={styles.searchBox}>
              <Svg d={ICON.search} />
              <span className={styles.searchPh}>Search leads, students…</span>
            </span>
            <span className={styles.topSpacer} />
            <button type="button" className={styles.newBtn}><Svg d={ICON.plus} />New</button>
            <button type="button" className={styles.iconBtn} aria-label="Notifications">
              <Svg d={ICON.bell} /><i className={styles.badge} />
            </button>
            <span className={styles.avatar}>RM</span>
          </header>

          <div className={styles.viewHead}>
            <h3 className={styles.viewTitle}>{MODULES[active].label}</h3>
            <span className={styles.crumbs}>NNC CRM · {MODULES[active].label}</span>
          </div>

          <div className={styles.viewport}>
            {prev !== null && (() => {
              const PrevView = VIEWS[MODULES[prev].key]
              return (
                <div className={`${styles.viewSlot} ${styles.viewExit}`} key={`exit-${prev}`}>
                  <PrevView />
                </div>
              )
            })()}
            <div
              className={`${styles.viewSlot} ${prev !== null ? styles.viewEnter : ''}`}
              key={`enter-${active}`}
            >
              <View />
            </div>
          </div>

          <span className={`${styles.toast} ${showToast ? styles.toastOn : ''}`} aria-hidden="true">
            <span className={styles.toastAv} style={{ background: tt.c }}>{tt.ini}</span>
            <span className={styles.toastText}><b>{tt.b}</b><i>{tt.i}</i></span>
            <span className={styles.toastCheck}><Svg d={ICON.check} /></span>
          </span>
        </div>
      </div>

      {/* layered floating cards for depth — hidden when the host context
          is tight (e.g., inside the homepage Showcase's Mac browser frame) */}
      {showFloats && (
        <>
      <span className={styles.floatA} aria-hidden="true">
        <span className={styles.faRing}><svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="var(--paper,#eef1f7)" strokeWidth="5" /><circle cx="18" cy="18" r="15" fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="30" transform="rotate(-90 18 18)" /></svg></span>
        <span className={styles.faText}><b>+32%</b><i>conversion rate</i></span>
      </span>
      <span className={styles.floatB} aria-hidden="true">
        <span className={styles.stack}>
          <i style={{ background: '#1877f2' }}>RM</i>
          <i style={{ background: '#16a34a' }}>SP</i>
          <i style={{ background: '#a855f7' }}>IK</i>
          <i className={styles.stackMore}>+1.2k</i>
        </span>
        <span className={styles.faText}><b>1,240</b><i>enquiries this month</i></span>
      </span>
        </>
      )}
    </div>
  )
}
