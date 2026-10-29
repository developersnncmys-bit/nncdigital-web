// Shared line-icon set (24x24, stroke=currentColor). Used across marketing pages.
const P = {
  sales: <path d="M3 5h18M6 12h12M10 19h4" />,
  service: <><path d="M3 7h18v12H3z" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>,
  retail: <><path d="M6 8h12l1 12H5z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  manufacturing: <><path d="M3 21h18" /><path d="M4 21V10l5 3V10l5 3V10l5 3v8M8 21v-4h3v4" /></>,
  healthcare: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  education: <><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></>,
  realestate: <><path d="M3 21V8l9-5 9 5v13" /><path d="M9 21v-6h6v6M8 11h.01M16 11h.01" /></>,
  enquiries: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />,
  pipeline: <><path d="M3 6h18M3 12h18M3 18h18" /><path d="M7 6v12M17 6v12" /></>,
  forecast: <><path d="M3 17 9 11l4 4 8-8" /><path d="M21 7v6h-6" /></>,
  invoice: <><path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5M9 13h6M9 17h6M9 9h2" /></>,
  whatsapp: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 0 1-9 9 9 9 0 0 1-4-1l-5 1 1-5a9 9 0 1 1 17-4z" />,
  reports: <path d="M5 21V11M12 21V7M19 21V3M3 21h18" />,
  integrations: <><path d="M12 2 2 7l10 5 10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></>,
  security: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  api: <><path d="m8 3-6 9 6 9M16 3l6 9-6 9" /><path d="m13 7-2 10" /></>,
  status: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3M12 17h.01" /></>,
  rocket: <path d="M5 13c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0zM12 15l-3-3a14 14 0 0 1 8-8c2 0 3 1 3 3a14 14 0 0 1-8 8zM15 9h.01" />,
  book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" />,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  partners: <><path d="M16 3h5v5M21 3l-9 9" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
  press: <><path d="M4 22V4a1 1 0 0 1 1-1h12l3 3v16H4z" /><path d="M8 7h6M8 11h8M8 15h8" /></>,
  blog: <><path d="M4 4h16v12H7l-3 3z" /><path d="M8 9h8M8 12h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.7 2z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></>,
}

export default function Icon({ name, className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name] || P.check}
    </svg>
  )
}
