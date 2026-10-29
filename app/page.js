import Hero from '@/components/sections/Hero/Hero'
import WorksWith from '@/components/sections/WorksWith/WorksWith'
import Lifecycle from '@/components/sections/Lifecycle/Lifecycle'
import Showcase from '@/components/sections/Showcase/Showcase'
import HowItWorks from '@/components/sections/HowItWorks/HowItWorks'
import UseCases from '@/components/sections/UseCases/UseCases'
import Pricing from '@/components/sections/Pricing/Pricing'
import Faq from '@/components/sections/Faq/Faq'
import FinalCta from '@/components/sections/FinalCta/FinalCta'

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
