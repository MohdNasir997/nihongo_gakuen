# Language Exchange Page Implementation Plan

## Overview
Build a responsive language exchange community page for Nihongo Learn with light and dark mode support, following DRY principles and using Shadcn UI components.

## Design Analysis

### Dark Mode Features (`language_exchange_(dark_mode)`)
- **Hero Section**: "Find Your Voice" with subtitle and CTA button
- **Search Bar**: Search by language, interest, or name
- **Filter Controls**:
  - Native: Japanese (expandable dropdown)
  - Learning: English (expandable dropdown)
  - Interests (expandable dropdown)
  - Checkbox: Show only online partners
- **Partner Grid**: 3 cards with:
  - Profile photo with online status indicator (green/gray)
  - Name and location
  - Native language badge
  - Learning language badge
  - Interest tags (Anime, Cooking, etc.)
  - Connect button
- **How It Works Section**: 3 steps with icons
- **Simple Footer**: Copyright and links

### Light Mode Features (`language_exchange_community`)
- **Hero Section**: Background image with "Connect with Native Speakers" and CTA button
- **Search Bar**: Search community
- **Filter Controls**:
  - Native: Japanese (expandable dropdown)
  - Learning: English (expandable dropdown)
  - JLPT N2+ (expandable dropdown)
  - Online Now (toggle button)
- **Partner Grid**: 3 cards with:
  - Profile photo with gradient background
  - Online status indicator (green/gray)
  - Name and location
  - Native/Learning language badges (colored)
  - JLPT level badge
  - Bio/description
  - Message and View Profile buttons
- **How Language Exchange Works Section**: 3 steps with icons
- **Footer**: Logo, copyright, and links

## Component Architecture (DRY Principle)

### 1. `CommunityHero.tsx`
**Purpose**: Hero section with optional background image
**Props**:
```typescript
interface CommunityHeroProps {
  variant?: 'dark' | 'light'
}
```
**Features**:
- Animated entrance
- Background image for light mode
- Title and description
- CTA button
- Responsive typography

### 2. `SearchBar.tsx`
**Purpose**: Search input with icon
**Props**:
```typescript
interface SearchBarProps {
  placeholder: string
  onSearch: (value: string) => void
}
```
**Features**:
- Input with search icon
- Focus states
- Responsive width

### 3. `FilterControls.tsx`
**Purpose**: Filter buttons and checkboxes
**Props**:
```typescript
interface FilterControlsProps {
  variant?: 'dark' | 'light'
  filters: FilterOption[]
  showOnlineOnly: boolean
  onToggleOnline: () => void
}

interface FilterOption {
  label: string
  options: string[]
  selected: string | null
  onSelect: (value: string) => void
}
```
**Features**:
- Expandable dropdowns
- Toggle checkbox
- Responsive layout

### 4. `PartnerCard.tsx`
**Purpose**: Display language exchange partner
**Props**:
```typescript
interface PartnerCardProps {
  partner: Partner
  variant?: 'dark' | 'light'
}

interface Partner {
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
```
**Features**:
- Profile photo with status indicator
- Name and location
- Language badges
- Interest tags
- Action buttons (Message, View Profile)
- Hover animations
- Responsive design

### 5. `PartnerGrid.tsx`
**Purpose**: Container for partner cards
**Props**:
```typescript
interface PartnerGridProps {
  partners: Partner[]
  variant?: 'dark' | 'light'
}
```
**Features**:
- Responsive grid (1/2/3 columns)
- Animated card entrance

### 6. `HowItWorks.tsx`
**Purpose**: Display how exchange works steps
**Props**:
```typescript
interface HowItWorksProps {
  steps: Step[]
}

interface Step {
  icon: string
  title: string
  description: string
}
```
**Features**:
- 3 steps with icons
- Responsive grid
- Animated entrance

## Data Structure

### TypeScript Interfaces (`lib/types/community.ts`)
```typescript
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
```

### Mock Data (`lib/data/community.ts`)
```typescript
export const partners: Partner[] = [
  {
    id: '1',
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    avatar: '/assets/partner1.jpg',
    isOnline: true,
    nativeLanguage: 'Japanese',
    learningLanguages: ['English', 'Spanish'],
    interests: ['Anime', 'Cooking'],
    bio: 'Hello! I\'m a chef in Tokyo. I love talking about food, anime, and hiking. Let\'s practice together!',
  },
  // ... more partners
]

export const howItWorksSteps: Step[] = [
  {
    icon: 'person_search',
    title: '1. Find a Partner',
    description: 'Filter by language proficiency, interests, and availability to find your perfect match.',
  },
  {
    icon: 'chat',
    title: '2. Start a Chat',
    description: 'Send a connection request and start messaging. Practice writing and speaking in real-time.',
  },
  {
    icon: 'school',
    title: '3. Practice Together',
    description: 'Schedule video calls or share study materials to improve your Japanese skills faster.',
  },
]
```

## Required Shadcn UI Components

### Already Available
- ✅ `button.tsx`
- ✅ `input.tsx`
- ✅ `card.tsx`
- ✅ `badge.tsx`
- ✅ `avatar.tsx`

### Need to Add
- ⬜ `select.tsx` - For filter dropdowns
- ⬜ `popover.tsx` - For expandable menus

## Implementation Steps

### Step 1: Add Shadcn UI Components
```bash
npx shadcn@latest add select
npx shadcn@latest add popover
```

### Step 2: Create Type Definitions
- Create `lib/types/community.ts` with interfaces

### Step 3: Create Mock Data
- Create `lib/data/community.ts` with partner data and steps

### Step 4: Create Domain Components
Create `components/domain/community/` directory with:
- `CommunityHero.tsx`
- `SearchBar.tsx`
- `FilterControls.tsx`
- `PartnerCard.tsx`
- `PartnerGrid.tsx`
- `HowItWorks.tsx`

### Step 5: Create Page Structure
- Create `app/community/layout.tsx` with Navbar and Footer
- Create `app/community/page.tsx` that composes all components

### Step 6: Add Animations
- Use Motion for:
  - Hero entrance animation
  - Card hover effects
  - Filter dropdown animations
  - Step entrance animations

### Step 7: Ensure Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)

### Step 8: Dark Mode Support
- Use `dark:` prefix for dark mode styles
- Test both light and dark modes
- Ensure proper contrast

## Styling Guidelines

### Color Palette
- **Dark Mode Primary**: `#3030e8` (purple)
- **Dark Mode Background**: `#111121` (deep charcoal)
- **Dark Medium**: `#1a1a2e`
- **Dark Light**: `#242447`
- **Light Mode Primary**: `#3c83f6` (blue)
- **Light Background**: `#f5f7f8`

### Typography
- **Font Family**: Inter (display)
- **Hero Title**: 4xl mobile, 6xl desktop, font-black
- **Card Title**: xl, font-bold
- **Body Text**: sm, leading-relaxed

### Spacing
- **Section Padding**: py-8 mobile, py-12 desktop
- **Card Padding**: p-6
- **Grid Gap**: gap-6

## Accessibility Requirements

- ✅ Keyboard navigation for filters
- ✅ ARIA labels for interactive elements
- ✅ Color contrast 4.5:1 minimum
- ✅ Touch targets 44px minimum
- ✅ Screen reader support

## Performance Considerations

- ✅ Lazy load partner cards
- ✅ Optimize images (avatars)
- ✅ Use Motion's `layout` prop sparingly
- ✅ CSS transforms for animations

## Testing Checklist

- [ ] All components render correctly
- [ ] Search functionality works
- [ ] Filters work and update grid
- [ ] "Show only online" checkbox works
- [ ] Partner cards display correctly
- [ ] Online status indicators are accurate
- [ ] Responsive design works on all breakpoints
- [ ] Dark mode toggles correctly
- [ ] Animations are smooth (60fps)
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Touch targets are accessible on mobile
- [ ] Links and buttons are functional

## File Structure

```
app/
├── community/
│   ├── layout.tsx
│   └── page.tsx
components/
└── domain/
    └── community/
        ├── CommunityHero.tsx
        ├── SearchBar.tsx
        ├── FilterControls.tsx
        ├── PartnerCard.tsx
        ├── PartnerGrid.tsx
        └── HowItWorks.tsx
lib/
├── data/
│   └── community.ts
└── types/
    └── community.ts
```

## Notes

- Use existing Navbar and Footer components
- Follow DRY principle - make PartnerCard truly reusable
- Use Motion for subtle animations only
- Test both light and dark modes thoroughly
- Ensure mobile-friendly touch targets
- Keep partner data separate from components for easy updates
- Use Shadcn Select and Popover for filter dropdowns
