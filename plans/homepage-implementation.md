# Homepage Implementation Plan

## Overview
Implement the NihonGo Learn homepage based on Google Stitch designs (light and dark mode versions). The homepage will be built using Next.js App Router, Shadcn UI components, Tailwind CSS, and Motion for animations.

## Design Analysis

### Available Assets
From `public/assets/`:
- `darkhero.png` - Hero image for dark mode
- `landing_absolute_beginner.png` - N5 course card
- `landing_business_mastery.png` - N1/N2 course card
- `landing_daily_conservation.png` - N4 course card
- `aboutushero.png` - About page hero (not for homepage)

### Images from Stitch HTML (use if not in assets)
- Hero image (light mode): `https://lh3.googleusercontent.com/aida-public/AB6AXuAEUKF3cBdtelLVfvIdUeeGY-_eErm64CqrLL61C4z7r1on3hrGR5-h0l3jsoaACF2MDl3oZMoG04ukH2xgOERHuP919VZ75oRwKGCMbLrQo5povP6cHx5Vl8DTQHhyAGN-0JWDPGAgN5XL29kPzcZE9KlfhKIF9yYtowYCVY1HPZuQ--AQ3WfrdjKwMyrzuvswrrtZSfah0uuwXEcbDMtsrPBOlkwSyf22PjkI0PhdzriQlHn__ucSSMAz07zWebiCQXTNT6L_CNc`
- Avatar images for testimonials (3 unique URLs)
- Course card images for N3 and other levels

### Design Philosophy
- **Light Mode**: Elegant, paper-texture aesthetic with Japanese cultural elements (seigaiha pattern)
- **Dark Mode**: Modern, tech-focused look with subtle patterns
- **Typography**: Inter (English) + Noto Serif JP (Japanese headings)
- **Color Palette**: Primary blue (#4361ee), warm neutrals, soft shadows

## Component Structure

### Directory Layout
```
components/
├── ui/                    # Shadcn UI components (add as needed)
│   ├── button.tsx
│   ├── card.tsx
│   └── badge.tsx
├── layout/                # Shared layout components
│   ├── Navbar.tsx
│   └── Footer.tsx
└── domain/                # Domain-specific components
    └── homepage/
        ├── HeroSection.tsx
        ├── FeatureCards.tsx
        ├── Testimonials.tsx
        └── CTASection.tsx
```

### Component Breakdown

#### 1. Navbar (`components/layout/Navbar.tsx`)
**Features:**
- Sticky header with backdrop blur
- Logo with Japanese-inspired icon
- Navigation links (Courses, Exchange, About, Contact)
- Auth buttons (Sign Up, Login)
- Theme toggle button
- Mobile menu (hamburger icon)

**Dark Mode:**
- Light mode: `bg-background-light/90`, border `#e8e4db`
- Dark mode: `bg-background-dark/90`, border `slate-800`

#### 2. Footer (`components/layout/Footer.tsx`)
**Features:**
- Logo and description
- Social media links
- Navigation columns (Platform, Resources, Support)
- Copyright and language selector

**Dark Mode:**
- Light mode: `bg-background-light`, border `#eeeae0`
- Dark mode: `bg-[#0b111a]`, border `slate-800`

#### 3. HeroSection (`components/domain/homepage/HeroSection.tsx`)
**Features:**
- Badge: "Learning Reimagined" with animated dot
- Headline: "Master Japanese with Confidence"
- Subtext: Description of the platform
- CTA buttons: "Start Learning" (primary), "Explore Courses" (secondary)
- Social proof: Avatar stack + "Trusted by over 50k students"
- Hero image with decorative blurs

**Images:**
- Light mode: Use Stitch HTML URL
- Dark mode: Use `darkhero.png` from assets

**Animations:**
- Fade in on load
- Hover effects on buttons
- Subtle image scale on hover

#### 4. FeatureCards (`components/domain/homepage/FeatureCards.tsx`)
**Features:**
- Section heading: "Everything you need to go from Beginner to Fluent"
- 3 feature cards:
  1. Structured Video Courses (blue icon)
  2. Live Language Exchange (green icon)
  3. Gamified Kanji Training (orange icon)
- Each card: Icon, title, description, "Learn more" link

**Animations:**
- Staggered fade-in on scroll
- Hover: Scale icon, enhance shadow, border color change

#### 5. Testimonials (`components/domain/homepage/Testimonials.tsx`)
**Features:**
- Section heading: "Student Voices" + "Success Stories"
- Navigation arrows (left/right)
- Horizontal scroll container
- 3 testimonial cards:
  - Sarah M. (Marketing Executive)
  - Kenji R. (Software Engineer)
  - Elena V. (University Student)
- Each card: 5 stars, quote, avatar, name, role

**Mock Data Structure:**
```typescript
interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}
```

**Animations:**
- Smooth horizontal scroll
- Hover: Shadow enhancement

#### 6. CTASection (`components/domain/homepage/CTASection.tsx`)
**Features:**
- Dark background with gradient
- Heading: "Ready to start your journey?"
- Subtext: "Get your first week of premium access for free..."
- Email input + "Get Started" button
- Decorative blurs

**Animations:**
- Subtle background gradient animation
- Button hover effect

## Implementation Steps

### Step 1: Create Component Structure
- Create `components/ui/`, `components/layout/`, `components/domain/homepage/` directories
- Add necessary Shadcn UI components (Button, Card, Badge)

### Step 2: Create Mock Data
- Create `lib/data/testimonials.ts` with testimonial data
- Create `lib/types/testimonial.ts` for TypeScript interface

### Step 3: Build Layout Components
- Implement `Navbar.tsx` with responsive design
- Implement `Footer.tsx` with all sections

### Step 4: Build Homepage Components
- Implement `HeroSection.tsx` with Motion animations
- Implement `FeatureCards.tsx` with staggered animations
- Implement `Testimonials.tsx` with scroll functionality
- Implement `CTASection.tsx` with email form

### Step 5: Assemble Homepage
- Update `app/page.tsx` to import and render all components
- Ensure proper section spacing and layout

### Step 6: Add Animations
- Import `motion` from `motion/react`
- Add fade-in, slide-up, and scale animations
- Ensure animations are subtle and performant

### Step 7: Responsive Design
- Mobile-first approach
- Test breakpoints: `<768px` (mobile), `768px-1024px` (tablet), `>1024px` (desktop)
- Ensure touch targets are 44px minimum

### Step 8: Dark Mode
- Add `dark:` classes throughout
- Test both light and dark modes
- Ensure sufficient contrast in both modes

### Step 9: Image Optimization
- Use Next.js `Image` component for all images
- Set appropriate dimensions and quality
- Add alt text for accessibility

## Technical Considerations

### Tailwind CSS Configuration
- Use existing Tailwind v4 setup
- Custom colors already defined in `app/globals.css`
- Custom shadows: `shadow-soft`, `shadow-organic`

### Motion Animations
```typescript
import { motion } from 'motion/react'

// Fade in variant
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

// Staggered children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### Icon Strategy
- Use Lucide React icons (already installed)
- Replace Material Symbols from Stitch HTML
- Common icons needed: `Play`, `MessageCircle`, `PenTool`, `Star`, `ChevronLeft`, `ChevronRight`, `ArrowRight`, `Menu`, `X`, `Sun`, `Moon`

### Accessibility
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images
- Color contrast: WCAG AA (4.5:1 minimum)

## Testing Checklist

- [ ] Homepage loads without errors
- [ ] All images display correctly (fallback to Stitch URLs if needed)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Dark mode toggle works correctly
- [ ] All animations are smooth and performant
- [ ] Navigation links work (even if placeholder routes)
- [ ] Buttons have proper hover states
- [ ] Testimonials scroll horizontally
- [ ] Email input in CTA section accepts input
- [ ] Footer links are properly aligned
- [ ] No console errors or warnings

## Notes

1. **Image Priority**: Use local assets when available, fallback to Stitch HTML URLs
2. **Animation Performance**: Use CSS transforms and opacity for animations
3. **Code Organization**: Keep components focused and single-purpose
4. **Type Safety**: Define TypeScript interfaces for all data structures
5. **DRY Principle**: Extract reusable patterns into shared components

## Next Steps

Once this plan is approved, switch to Code mode to begin implementation.
