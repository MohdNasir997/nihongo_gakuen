/**
 * Community Page
 * Language exchange community page
 */

'use client'

import { useState } from 'react'
import { CommunityHero } from '@/components/domain/community/CommunityHero'
import { SearchBar } from '@/components/domain/community/SearchBar'
import { FilterControls } from '@/components/domain/community/FilterControls'
import { PartnerGrid } from '@/components/domain/community/PartnerGrid'
import { HowItWorks } from '@/components/domain/community/HowItWorks'
import { partners, howItWorksSteps } from '@/lib/data/community'

export default function CommunityPage() {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-8">
        <CommunityHero variant="dark" />
        <SearchBar
          placeholder="Search community..."
          onSearch={setSearchQuery}
        />
        <FilterControls
          variant="dark"
          showOnlineOnly={showOnlineOnly}
          onToggleOnline={() => setShowOnlineOnly(!showOnlineOnly)}
        />
        <PartnerGrid
          partners={partners.filter(
            (partner) =>
              showOnlineOnly ? partner.isOnline : true
          )}
          variant="dark"
        />
        <HowItWorks steps={howItWorksSteps} />
      </div>
    </main>
  )
}
