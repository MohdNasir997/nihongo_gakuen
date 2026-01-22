/**
 * Pricing Page
 * Main pricing page with hero, toggle, cards, and FAQ
 */

'use client'

import { useState } from 'react'
import { PricingHero } from '@/components/domain/pricing/PricingHero'
import { BillingToggle } from '@/components/domain/pricing/BillingToggle'
import { PricingGrid } from '@/components/domain/pricing/PricingGrid'
import { PricingFAQ } from '@/components/domain/pricing/PricingFAQ'
import { TrustedBySection } from '@/components/domain/pricing/TrustedBySection'

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="flex flex-1 justify-center py-20 px-6">
      <div className="flex flex-col max-w-[1140px] flex-1">
        <PricingHero />
        <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />
        <PricingGrid isYearly={isYearly} />
        <TrustedBySection />
        <PricingFAQ />
      </div>
    </main>
  )
}
