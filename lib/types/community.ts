/**
 * Community page type definitions
 */

export interface Partner {
  id: string
  name: string
  location: string
  avatar: string
  isOnline: boolean
  nativeLanguage: string
  learningLanguages: string[]
  interests: string[]
  jlptLevel?: string
  bio: string
}

export interface Step {
  icon: string
  title: string
  description: string
}

export interface FilterOption {
  label: string
  options: string[]
  selected: string | null
  onSelect: (value: string) => void
}
