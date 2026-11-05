import Hero from '@/components/sections/Hero/Hero'
import WorksWith from '@/components/sections/WorksWith/WorksWith'
import Lifecycle from '@/components/sections/Lifecycle/Lifecycle'
import Showcase from '@/components/sections/Showcase/Showcase'
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks'
import UseCases from '@/components/sections/UseCases/UseCases'
import Pricing from '@/components/sections/Pricing/Pricing'
import Faq from '@/components/sections/Faq/Faq'
import FinalCta from '@/components/sections/FinalCta/FinalCta'

// Homepage SEO per the client-supplied content brief. Overrides the
// sitewide default in app/layout.js with the keyword-targeted title and
// description for the "CRM Software in India" primary keyword.
const HOME_TITLE = 'CRM Software in India | Lead & Sales CRM - NNC Digital'
const HOME_DESC =
  "Discover NNC Digital's CRM Software in India to manage leads, sales, customers, billing, and WhatsApp communication. Plans start at ₹14,999/year."

export const metadata = {
  title: HOME_TITLE,
  description: HOME_DESC,
  alternates: { canonical: '/' },
  openGraph: { title: HOME_TITLE, description: HOME_DESC, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: HOME_TITLE, description: HOME_DESC },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksWith />
      <Lifecycle />
      <Showcase />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  )
}
