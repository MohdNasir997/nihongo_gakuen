/**
 * SearchBar Component
 * Search input with icon
 */

'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder: string
  onSearch: (value: string) => void
}

export function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  return (
    <div className="w-full">
      <label className="flex items-center h-14 w-full  bg-muted rounded-lg border border-border focus-within:border-primary/50 transition-all">
        <Search className="text-muted-foreground ml-4 h-5 w-5" />
        <Input
          className="flex-1 bg-transparent border-none text-foreground focus:ring-0 placeholder:text-muted-foreground px-4 text-base"
          placeholder={placeholder}
          type="text"
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </div>
  )
}
