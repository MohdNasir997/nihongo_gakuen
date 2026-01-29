# Nihongo Learn - Teachers, Curriculum & Checkout Architecture

## Component Hierarchy Overview

### Teachers Directory Page Structure
```
app/teachers/page.tsx
├── Navbar (shared)
├── Hero Section
│   ├── Search Bar
│   └── Filters
│       ├── JLPT Specialty
│       ├── Lesson Type
│       └── Availability
├── TeacherGrid
│   └── TeacherCard[] (reusable)
│       ├── Avatar
│       ├── Badge (Native, JLPT Level)
│       ├── Rating
│       ├── Specialties
│       └── Buttons (View, Book)
├── Pagination
├── Stats Section
└── Footer (shared)
```

### Teacher Profile Page Structure
```
app/teachers/[id]/page.tsx
├── Navbar (shared)
├── Breadcrumbs
├── Main Content (flex layout)
│   ├── Left Column
│   │   ├── TeacherProfileHeader
│   │   │   ├── Avatar
│   │   │   ├── Badges (Verified Native)
│   │   │   ├── Stats (Lessons, Students, Response)
│   │   │   └── Intro Video
│   │   ├── TeacherAboutSection
│   │   │   ├── About Me
│   │   │   ├── Teaching Style
│   │   │   └── Specialties
│   │   └── TeacherReviews
│   │       └── Review[]
│   └── Right Column (sticky)
│       └── TeacherBookingSidebar
│           ├── Pricing
│           ├── Calendar
│           ├── Time Slots
│           ├── CTA Button
│           └── Achievements
└── Footer (shared)
```

### Curriculum Page Structure
```
app/curriculum/page.tsx
├── Navbar (shared)
├── CurriculumHero
│   ├── Badge (JLPT Focused)
│   ├── Headline
│   ├── Description
│   ├── CTAs
│   └── Featured Lesson Card
├── Path Toggle
│   ├── Standard
│   └── Accelerated
├── CurriculumLevelGrid
│   └── CurriculumLevelCard[]
│       ├── Badge (N5-N1)
│       ├── Duration/Lessons
│       ├── Features List
│       └── CTA Button
├── Featured Teachers Section
│   └── TeacherCard[] (reusable)
├── Stats Section
└── Footer (shared)
```

### Checkout Page Structure
```
app/checkout/page.tsx
├── Navbar (shared)
├── CheckoutBreadcrumbs
├── Page Header
│   ├── Title
│   └── Secure Badge
├── Main Content (grid layout)
│   ├── Left Column
│   │   ├── OrderSummary
│   │   │   ├── Teacher Info
│   │   │   ├── Lesson Details
│   │   │   └── Price Breakdown
│   │   └── PromoCodeSection
│   │       ├── Input
│   │       └── Apply Button
│   └── Right Column
│       └── PaymentForm
│           ├── Payment Method Tabs
│           ├── Card Form
│           │   ├── Name
│           │   ├── Number
│           │   ├── Expiry
│           │   └── CVV
│           ├── Save Card
│           ├── Review Policy
│           └── Complete Purchase
├── Trust Assets
└── Footer (shared)
```

## Data Flow Diagrams

### Teacher Directory Data Flow
```
User Input (Search/Filters)
    ↓
filterTeachers(teachers, filters)
    ↓
Filtered Teachers Array
    ↓
TeacherCard Component (map)
    ↓
Render Teacher Grid
```

### Teacher Profile Data Flow
```
URL Parameter (teacher id)
    ↓
getTeacherById(id)
    ↓
Teacher Object
    ↓
Multiple Components
    ├── TeacherProfileHeader
    ├── TeacherAboutSection
    ├── TeacherReviews
    └── TeacherBookingSidebar
```

### Curriculum Data Flow
```
Curriculum Data (Levels N5-N1)
    ↓
CurriculumLevelCard Component (map)
    ↓
Render Level Grid
    ↓
User Selects Level
    ↓
Navigate to Course Details
```

### Checkout Data Flow
```
Booking State (from URL/Session)
    ↓
OrderSummary Component
    ↓
User Enters Payment
    ↓
PaymentForm Component
    ↓
Validate & Submit
    ↓
Success/Confirmation
```

## State Management

### Local State (useState)
- Search query
- Filter selections
- Selected date/time
- Payment method
- Form inputs
- Modal states

### URL State (useSearchParams)
- Teacher ID
- Booking details
- Filter parameters

### Global State (Context)
- Theme (dark/light)
- User authentication
- Cart/booking data

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Stacked sidebars
- Full-width inputs
- Simplified navigation

### Tablet (768px - 1024px)
- Two column grids
- Side-by-side layouts
- Medium-sized cards

### Desktop (> 1024px)
- Three/Four column grids
- Sticky sidebars
- Full feature set
- Hover effects enabled

## Animation Strategy

### Page Transitions
- FadeIn (0.3s duration)
- SlideUp (0.4s duration)
- Stagger children (0.1s delay)

### Component Animations
- Card hover: Scale (1.05), Shadow (lg)
- Button hover: Scale (1.02), Color transition
- Modal entry: FadeIn + Scale (0.95 → 1)

### Motion Variants
```typescript
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## Component Relationships

### Teacher Components
- **TeacherCard**: Used in Teachers Directory, Curriculum Featured Teachers
- **TeacherProfileHeader**: Only in Teacher Profile
- **TeacherAboutSection**: Only in Teacher Profile
- **TeacherBookingSidebar**: Only in Teacher Profile
- **TeacherReviews**: Only in Teacher Profile

### Curriculum Components
- **CurriculumHero**: Only in Curriculum Page
- **CurriculumLevelCard**: Only in Curriculum Page
- **CurriculumPathToggle**: Only in Curriculum Page
- **CurriculumStats**: Only in Curriculum Page

### Checkout Components
- **OrderSummary**: Only in Checkout Page
- **PromoCodeSection**: Only in Checkout Page
- **PaymentForm**: Only in Checkout Page
- **CheckoutBreadcrumbs**: Only in Checkout Page

### Shared Components
- **Navbar**: All pages
- **Footer**: All pages
- **Badge**: TeacherCard, CurriculumLevelCard
- **Button**: All interactive elements
- **Card**: TeacherCard, CurriculumLevelCard, OrderSummary, PaymentForm
- **Avatar**: TeacherCard, TeacherProfileHeader

## File Structure

```
app/
├── teachers/
│   ├── page.tsx              # Teachers directory
│   └── [id]/
│       └── page.tsx          # Teacher profile
├── curriculum/
│   └── page.tsx              # Curriculum page
└── checkout/
    └── page.tsx              # Lesson booking checkout

components/
└── domain/
    ├── teacher/
    │   ├── TeacherCard.tsx
    │   ├── TeacherBookingSidebar.tsx
    │   ├── TeacherReviews.tsx
    │   ├── TeacherProfileHeader.tsx
    │   └── TeacherAboutSection.tsx
    ├── curriculum/
    │   ├── CurriculumHero.tsx
    │   ├── CurriculumLevelCard.tsx
    │   ├── CurriculumPathToggle.tsx
    │   └── CurriculumStats.tsx
    └── checkout/
        ├── OrderSummary.tsx
        ├── PromoCodeSection.tsx
        ├── PaymentForm.tsx
        └── CheckoutBreadcrumbs.tsx

lib/
├── types/
│   ├── teacher.ts
│   ├── curriculum.ts
│   └── checkout.ts
└── data/
    ├── teachers.ts
    └── curriculum.ts
```

## Key Design Decisions

### 1. Component Reusability
- TeacherCard is used in multiple contexts (directory, curriculum)
- Shared UI components (Badge, Button, Card) used throughout
- Atomic design principles followed

### 2. Data Separation
- Types defined separately from data
- Mock data follows TypeScript interfaces
- Helper functions for data filtering

### 3. Layout Patterns
- Consistent use of Navbar and Footer
- Sticky sidebars for better UX
- Grid layouts for card collections

### 4. Animation Strategy
- Subtle, performant animations
- Motion library for consistency
- Staggered animations for lists

### 5. Dark Mode Support
- All components support dark mode
- Consistent color schemes
- Proper contrast ratios

## Integration Points

### Navigation
- Add "Teachers" link to Navbar
- Add "Curriculum" link to Navbar
- Ensure all routes accessible

### Data Flow
- Teachers directory filters data
- Teacher profile fetches single teacher
- Curriculum displays level data
- Checkout receives booking state

### User Flow
1. User browses Teachers Directory
2. User views Teacher Profile
3. User selects date/time in Booking Sidebar
4. User navigates to Checkout
5. User completes payment
6. User receives confirmation

## Performance Considerations

### Code Splitting
- Next.js automatic route splitting
- Dynamic imports for heavy components
- Lazy loading for non-critical features

### Image Optimization
- Next.js Image component
- Responsive image sizes
- Lazy loading for below-fold images

### Bundle Size
- Tree-shaking enabled
- Import only used components
- Analyze bundle with Next.js

## Accessibility Considerations

### Semantic HTML
- Proper heading hierarchy
- ARIA labels on interactive elements
- Semantic button and link elements

### Keyboard Navigation
- All interactive elements keyboard accessible
- Focus states visible
- Logical tab order

### Color Contrast
- WCAG AA compliant colors
- High contrast in dark mode
- Text readable on all backgrounds

### Screen Reader Support
- Alt text for images
- Descriptive link text
- Live regions for dynamic content
