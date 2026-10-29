// Stroke-based inline icons (currentColor). Keyed by name for data-driven sections.
const svg = (children, vb = '0 0 24 24') => (p) =>
  (
    <svg
      viewBox={vb}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  )

export const icons = {
  // ---- modules ----
  enq: svg(
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  sales: svg(
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 3 5-6" />
      <path d="M18 8h2v2" />
    </>
  ),
  fc: svg(
    <>
      <path d="M3 3v18h18" />
      <path d="M6 15l4-4 3 2 5-7" />
      <path d="M18 6h2v2" strokeDasharray="0" />
    </>
  ),
  exp: svg(
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  inv: svg(
    <>
      <path d="M6 2h9l3 3v17l-3-2-3 2-3-2-3 2V2Z" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>
  ),
  rep: svg(
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  wa: svg(
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 9 19.6L4 20Z" />
      <path d="M9 10c0 3 2 5 5 5" />
    </>
  ),
  inventory: svg(
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" />
    </>
  ),
  mkt: svg(
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
    </>
  ),
  vault: svg(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 8.8V7M12 17v-1.8M15.2 12H17M7 12h1.8" />
    </>
  ),

  // ---- data safety ----
  lock: svg(
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" />
    </>
  ),
  backup: svg(
    <>
      <path d="M12 4a8 8 0 1 0 8 8" />
      <path d="M20 4v5h-5M12 8v4l3 2" />
    </>
  ),
  roles: svg(
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 11a3 3 0 0 0 0-6M21 20a6 6 0 0 0-5-5.9" />
    </>
  ),
  audit: svg(
    <>
      <path d="M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H9Z" />
      <path d="M14 3v5h5M9 13l2 2 4-4" />
    </>
  ),
}
