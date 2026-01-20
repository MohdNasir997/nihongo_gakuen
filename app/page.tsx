import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/domain/homepage/HeroSection'
import { FeatureCards } from '@/components/domain/homepage/FeatureCards'
import { Testimonials } from '@/components/domain/homepage/Testimonials'
import { CTASection } from '@/components/domain/homepage/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeatureCards />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
