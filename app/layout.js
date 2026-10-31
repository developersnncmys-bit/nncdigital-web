import './globals.css'
import Script from 'next/script'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/providers/SmoothScroll'
import SiteChrome from '@/components/layout/SiteChrome'
import VisitorTracker from '@/components/analytics/VisitorTracker'
import { SITE_URL, IS_LIVE } from '@/lib/site'

// Figtree — closest free match to Zoom's geometric grotesque (Almaden Sans / Happy Display)
const jakarta = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-jakarta',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mono',
})

const DESC =
  'A modular CRM with sales pipeline, enquiries, forecasting, invoicing and WhatsApp in one platform. Build your own plan. Pay quarterly, half yearly or yearly.'
const TITLE = "NNC CRM | India's Most Trusted CRM for Every Industry"

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESC,
  icons: {
    icon: [
      { url: '/nnc-mark.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/nnc-mark.png',
    apple: '/nnc-mark.png',
  },
  // Sitewide indexing default. On the live domain (nncdigital.co.in) pages
  // are indexable unless they override this; everywhere else (localhost,
  // preview URLs, staging) the whole site stays private. Individual pages
  // that must always stay noindex (case studies, car studio, small business,
  // net zero stub, features, thank-you) keep their own explicit override.
  robots: {
    index: IS_LIVE,
    follow: IS_LIVE,
    nocache: !IS_LIVE,
    googleBot: { index: IS_LIVE, follow: IS_LIVE, noimageindex: !IS_LIVE },
  },
  openGraph: { title: TITLE, description: DESC, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Pre-hydration scroll flag — runs before React hydrates so the Navbar
            can show its solid state immediately if the page loads already
            scrolled (e.g., refresh after scrolling, direct deep-link). Without
            this, the nav flashes transparent for one frame while React catches
            up with the real scroll position. */}
        <Script id="nav-scroll-flag" strategy="beforeInteractive">
          {`try{if(window.scrollY>0){document.documentElement.setAttribute('data-scrolled','')}}catch(e){}`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-841EMBRGQJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-841EMBRGQJ');
          `}
        </Script>
        {/* Sends a summary of each engaged visit — pages seen and time spent on
            each — to the team. GA4 above collects the same engagement data but
            never pushes it anywhere; this is the notification half. */}
        <VisitorTracker />
        <SmoothScroll>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  )
}
