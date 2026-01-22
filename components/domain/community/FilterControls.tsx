/**
 * FilterControls Component
 * Filter buttons and checkboxes with expandable dropdowns
 */

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FilterOption } from '@/lib/types/community'
import { ChevronDown } from 'lucide-react'

interface FilterControlsProps {
  variant?: 'dark' | 'light'
  showOnlineOnly: boolean
  onToggleOnline: () => void
}

export function FilterControls({
  variant = 'dark',
  showOnlineOnly,
  onToggleOnline,
}: FilterControlsProps) {
  const [nativeLang, setNativeLang] = useState<string | null>(null)
  const [learningLang, setLearningLang] = useState<string | null>(null)
  const [interests, setInterests] = useState<string | null>(null)

  const isDark = variant === 'dark'

  const filterOptions: FilterOption[] = [
    {
      label: 'Native:',
      options: ['Japanese'],
      selected: nativeLang,
      onSelect: setNativeLang,
    },
    {
      label: 'Learning:',
      options: ['English', 'Spanish', 'French'],
      selected: learningLang,
      onSelect: setLearningLang,
    },
  ]

  if (isDark) {
    filterOptions.push({
      label: 'Interests:',
      options: ['Anime', 'Cooking', 'Business', 'History', 'Jazz', 'Tennis'],
      selected: interests,
      onSelect: setInterests,
    })
  } else {
    filterOptions.push({
      label: 'JLPT:',
      options: ['N2+'],
      selected: interests,
      onSelect: setInterests,
    })
  }

  return (
    <div
      className={`flex flex-col gap-2 px-4 py-6 rounded-xl border border-border ${
        isDark ? 'bg-muted/50' : 'bg-background border-border'
      }`}
    >
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <Popover key={filter.label}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`h-10 gap-2 ${
                    isDark
                      ? 'bg-muted hover:bg-muted/80 text-foreground border-border'
                      : 'bg-background hover:bg-muted/80 text-foreground border-border'
                  }`}
                >
                  <span className="text-sm font-medium">{filter.label}</span>
                  <span className="text-sm">
                    {filter.selected || 'Select'}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 p-2">
                <div className="flex flex-col gap-1">
                  {filter.options.map((option) => (
                    <Button
                      key={option}
                      variant="ghost"
                      size="sm"
                      className={`w-full justify-start text-sm ${
                        filter.selected === option
                          ? 'bg-primary text-white'
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => filter.onSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            variant={showOnlineOnly ? 'default' : 'outline'}
            size="sm"
            className={`h-10 px-4 ${
              isDark
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'bg-primary/10 text-primary border-primary/20'
            }`}
            onClick={onToggleOnline}
          >
            {isDark ? 'Online Now' : 'Online Now'}
          </Button>
        </div>
      </div>
    </div>
  )
}
