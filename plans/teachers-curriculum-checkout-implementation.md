# Implementation Plan: Teachers, Curriculum, and Checkout Pages

## Overview
This plan details the implementation of four new pages for the Nihongo Learn platform:
1. **Teachers Directory** (`/teachers`) - Browse and search for teachers
2. **Individual Teacher Profile** (`/teachers/[id]`) - View teacher details and book lessons
3. **Curriculum** (`/curriculum`) - View JLPT-aligned learning paths
4. **Lesson Booking Checkout** (`/checkout`) - Complete lesson purchase

---

## 1. Data Layer

### 1.1 Teacher Types (`lib/types/teacher.ts`)

```typescript
export type TeacherSpecialty = 
  | 'Grammar' 
  | 'Business' 
  | 'Conversation' 
  | 'Culture' 
  | 'Academic' 
  | 'Kanji' 
  | 'Beginners' 
  | 'Kids'
  | 'JLPT N1-N2 Mastery'
  | 'Honorifics (Keigo)'
  | 'Business Etiquette'
  | 'Academic Writing'
  | 'Intensive Speaking';

export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export type AvailabilityStatus = 'available' | 'away' | 'busy';

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar: string;
  isNative: boolean;
  rating: number;
  reviewCount: number;
  specialties: TeacherSpecialty[];
  level: JLPTLevel;
  bio: string;
  teachingStyle?: string;
  aboutMe?: string;
  hourlyRate: number;
  lessonsDone: number;
  studentCount: number;
  responseTime: string;
  availabilityStatus: AvailabilityStatus;
  videoIntroUrl?: string;
  videoIntroDuration?: string;
  achievements?: Achievement[];
  reviews?: TeacherReview[];
}

export interface Achievement {
  icon: string;
  title: string;
}

export interface TeacherReview {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  lessonType: string;
  comment: string;
}

export interface TeacherFilter {
  searchQuery: string;
  jlptLevel: string;
  lessonType: string;
  availability: string;
}
```

### 1.2 Teacher Data (`lib/data/teachers.ts`)

Create mock data for teachers based on design files:
- Yumi Tanaka (JLPT N1 Specialist, Grammar, Business, Honorifics)
- Hiroshi Sato (Business Japanese, Conversation)
- Sakura Ito (Culture & Slang, Conversation, N5-N3)
- Kenji Watanabe (Academic Japanese, Kanji, N2)
- Aki Mori (Beginners, Kids, N4-N5)

### 1.3 Curriculum Types (`lib/types/curriculum.ts`)

```typescript
export type CurriculumPath = 'standard' | 'accelerated';

export interface CurriculumLevel {
  id: string;
  level: JLPTLevel;
  title: string;
  description: string;
  lessonsCount: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  color?: string;
}

export interface CurriculumStats {
  activeStudents: string;
  passRate: string;
  teacherCount: string;
  videoLessons: string;
}
```

### 1.4 Curriculum Data (`lib/data/curriculum.ts`)

Create mock data for JLPT levels:
- N5: The Foundations (48 lessons, 12 weeks)
- N4: Daily Proficiency (62 lessons, 16 weeks)
- N3: Intermediate Bridge (84 lessons, 20 weeks) - Popular
- N2: Advanced Mastery (96 lessons, 24 weeks)
- N1: Expert Level (120 lessons, 30 weeks)

### 1.5 Checkout Types (`lib/types/checkout.ts`)

```typescript
export interface BookingDetails {
  teacherId: string;
  teacherName: string;
  teacherAvatar: string;
  specialty: string;
  date: string;
  time: string;
  hourlyRate: number;
  serviceFee: number;
  tax: number;
  total: number;
}

export interface PaymentMethod {
  type: 'card' | 'paypal' | 'applepay';
  isDefault?: boolean;
}
```

---

## 2. Component Architecture

### 2.1 Teacher Components (`components/domain/teacher/`)

#### TeacherCard.tsx
**Purpose**: Reusable teacher card for directory and featured sections
**Props**: `teacher: Teacher`, `onViewProfile: (id: string) => void`, `onBook: (id: string) => void`
**Features**:
- Teacher image with availability indicator
- Native speaker badge
- JLPT level badge
- Name and rating
- Specialties tags
- View Profile and Book Session buttons
- Hover effects with Motion

#### TeacherBookingSidebar.tsx
**Purpose**: Booking interface on teacher profile page
**Props**: `teacher: Teacher`
**Features**:
- Pricing display ($/hr)
- Date picker calendar (7 days)
- Time slot selection (JST)
- Book a Lesson CTA
- Trial lesson option
- Teacher achievements

#### TeacherReviews.tsx
**Purpose**: Display teacher reviews
**Props**: `reviews: TeacherReview[]`, `totalReviewCount: number`
**Features**:
- Review cards with author info
- Star ratings
- Review text
- "Show all reviews" button
- Pagination for large review lists

#### TeacherProfileHeader.tsx
**Purpose**: Teacher profile header section
**Props**: `teacher: Teacher`
**Features**:
- Teacher image
- Verified Native badge
- Name and title
- Rating and review count
- Stats (lessons, students, response time)
- Intro video player

#### TeacherAboutSection.tsx
**Purpose**: Teacher bio and teaching style
**Props**: `teacher: Teacher`
**Features**:
- About Me section
- Teaching Style section
- Specialties badges
- Motion animations

### 2.2 Curriculum Components (`components/domain/curriculum/`)

#### CurriculumHero.tsx
**Purpose**: Hero section for curriculum page
**Features**:
- Gradient mesh background
- JLPT Focused Mastery badge
- Main headline with gradient text
- Description
- CTA buttons (Explore Curriculum, Meet Our Teachers)
- Featured lesson card with hover effect
- Motion animations

#### CurriculumLevelCard.tsx
**Purpose**: Individual JLPT level card
**Props**: `level: CurriculumLevel`, `onEnroll: (levelId: string) => void`
**Features**:
- Level badge (N5, N4, N3, etc.)
- Duration and lessons count
- Title and description
- Features list with checkmarks
- CTA button
- Popular badge for N3
- Hover effects

#### CurriculumPathToggle.tsx
**Purpose**: Toggle between Standard and Accelerated paths
**Features**:
- Toggle switch UI
- Active state styling
- On change handler

#### CurriculumStats.tsx
**Purpose**: Display curriculum statistics
**Props**: `stats: CurriculumStats`
**Features**:
- 4 stat cards (Students, Pass Rate, Teachers, Video Lessons)
- Large numbers with primary color
- Labels
- Motion animations

### 2.3 Checkout Components (`components/domain/checkout/`)

#### OrderSummary.tsx
**Purpose**: Display lesson booking details
**Props**: `booking: BookingDetails`, `onChangeLesson: () => void`
**Features**:
- Teacher image and info
- Lesson details (date, time, specialty)
- Price breakdown (lesson rate, service fee, tax)
- Total amount
- Change lesson button

#### PromoCodeSection.tsx
**Purpose**: Promo code input and apply
**Features**:
- Input field
- Apply button
- Success/error states

#### PaymentForm.tsx
**Purpose**: Payment information form
**Props**: `onSubmit: (data: PaymentData) => void`
**Features**:
- Payment method tabs (Card, PayPal, Apple Pay)
- Cardholder name input
- Card number input with format
- Expiry date input
- CVV input
- Save card checkbox
- Review policy section
- Complete purchase button

#### CheckoutBreadcrumbs.tsx
**Purpose**: Navigation breadcrumbs
**Features**:
- Teachers > Teacher Name > Checkout
- Clickable links

---

## 3. Page Implementation

### 3.1 Teachers Directory (`app/teachers/page.tsx`)

**Route**: `/teachers`

**Layout**: Use existing root layout with Navbar and Footer

**Components**:
- Hero section with search bar
- Filter controls (JLPT Specialty, Lesson Type, Availability)
- TeacherGrid component (using TeacherCard)
- Pagination component
- Stats section

**Data Flow**:
```typescript
const teachers = useTeachers();
const filteredTeachers = filterTeachers(teachers, filters);
```

**Features**:
- Search by name, keyword, or specialty
- Filter by JLPT level (N1-N5)
- Filter by lesson type (Conversation, Grammar, Business, Exam Prep)
- Filter by availability (Weekdays, Weekends, Evenings)
- Sort by (Most Recommended, Top Rated, Newest, Price)
- Pagination (12 teachers per page)
- Responsive grid (1-4 columns)

### 3.2 Teacher Profile (`app/teachers/[id]/page.tsx`)

**Route**: `/teachers/[id]`

**Layout**: Use existing root layout with Navbar and Footer

**Components**:
- Breadcrumbs
- TeacherProfileHeader
- TeacherAboutSection
- TeacherReviews
- TeacherBookingSidebar (sticky)

**Data Flow**:
```typescript
const teacher = useTeacher(params.id);
```

**Features**:
- Full teacher profile
- Intro video player
- Stats display
- Specialties badges
- Reviews section
- Booking interface with calendar
- Responsive layout (sidebar stacks on mobile)

### 3.3 Curriculum (`app/curriculum/page.tsx`)

**Route**: `/curriculum`

**Layout**: Use existing root layout with Navbar and Footer

**Components**:
- CurriculumHero
- CurriculumPathToggle
- CurriculumLevelGrid (using CurriculumLevelCard)
- FeaturedTeachersSection (reusing TeacherCard)
- CurriculumStats

**Data Flow**:
```typescript
const curriculumLevels = useCurriculumLevels();
const featuredTeachers = useFeaturedTeachers();
```

**Features**:
- Hero with featured lesson
- Path toggle (Standard/Accelerated)
- JLPT level cards (N5-N1)
- Popular badge on N3
- Featured teachers section
- Stats section
- Responsive grid (1-3 columns)

### 3.4 Lesson Booking Checkout (`app/checkout/page.tsx`)

**Route**: `/checkout`

**Layout**: Use existing root layout with Navbar and Footer

**Components**:
- CheckoutBreadcrumbs
- Page header with secure badge
- OrderSummary
- PromoCodeSection
- PaymentForm
- Footer trust assets

**Data Flow**:
```typescript
const booking = useBookingDetails();
```

**Features**:
- Breadcrumb navigation
- Secure SSL badge
- Lesson details summary
- Price breakdown
- Promo code input
- Payment method selection
- Card form with validation
- Save card option
- Review policy
- Complete purchase button
- Trust badges (PCI Compliant, Fraud Protected)

---

## 4. Design Considerations

### 4.1 Dark Mode Support
All components must support dark mode using Tailwind's `dark:` prefix:
- Backgrounds: `bg-white dark:bg-slate-900`
- Text: `text-slate-900 dark:text-slate-100`
- Borders: `border-slate-200 dark:border-slate-800`
- Cards: `bg-white dark:bg-slate-800/50`

### 4.2 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3-4 columns)
- Touch-friendly targets (44px minimum)
- Stacked layouts on mobile

### 4.3 Animations (Motion)
- Page transitions: FadeIn, SlideUp
- Hover effects: Scale, color transitions
- Card hover: Subtle lift and shadow
- Button hover: Scale and color change
- Use `motion.div` for animated elements
- Keep animations subtle and performant

### 4.4 Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Alt text for images
- Color contrast (WCAG AA)
- Focus states on interactive elements

---

## 5. Integration Points

### 5.1 Navigation Updates
Update [`components/layout/Navbar.tsx`](components/layout/Navbar.tsx) to include:
- Teachers link in navigation
- Curriculum link in navigation

### 5.2 Route Protection
Consider protecting `/checkout` route:
- Check if user has selected a lesson
- Redirect to teacher profile if no booking data

### 5.3 Data Reuse
- Reuse existing `Course` types where applicable
- Reuse `Instructor` type from course types
- Extend rather than duplicate types

### 5.4 Shared Components
- Reuse `Badge` from Shadcn UI
- Reuse `Button` from Shadcn UI
- Reuse `Card` from Shadcn UI
- Reuse `Avatar` from Shadcn UI
- Reuse `Input` and `Label` from Shadcn UI

---

## 6. Implementation Order

### Phase 1: Data Layer (Foundation)
1. Create `lib/types/teacher.ts`
2. Create `lib/types/curriculum.ts`
3. Create `lib/types/checkout.ts`
4. Create `lib/data/teachers.ts` with mock data
5. Create `lib/data/curriculum.ts` with mock data

### Phase 2: Teacher Components
6. Create `components/domain/teacher/TeacherCard.tsx`
7. Create `components/domain/teacher/TeacherBookingSidebar.tsx`
8. Create `components/domain/teacher/TeacherReviews.tsx`
9. Create `components/domain/teacher/TeacherProfileHeader.tsx`
10. Create `components/domain/teacher/TeacherAboutSection.tsx`

### Phase 3: Curriculum Components
11. Create `components/domain/curriculum/CurriculumHero.tsx`
12. Create `components/domain/curriculum/CurriculumLevelCard.tsx`
13. Create `components/domain/curriculum/CurriculumPathToggle.tsx`
14. Create `components/domain/curriculum/CurriculumStats.tsx`

### Phase 4: Checkout Components
15. Create `components/domain/checkout/OrderSummary.tsx`
16. Create `components/domain/checkout/PromoCodeSection.tsx`
17. Create `components/domain/checkout/PaymentForm.tsx`
18. Create `components/domain/checkout/CheckoutBreadcrumbs.tsx`

### Phase 5: Page Implementation
19. Create `app/teachers/page.tsx`
20. Create `app/teachers/[id]/page.tsx`
21. Create `app/curriculum/page.tsx`
22. Create `app/checkout/page.tsx`

### Phase 6: Integration & Polish
23. Update Navbar with new links
24. Add dark mode support to all components
25. Add Motion animations throughout
26. Test responsive design
27. Test dark mode
28. Test accessibility

---

## 7. File Structure

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

---

## 8. Success Criteria

- [ ] All four pages implemented matching design specifications
- [ ] Dark mode working on all pages
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] All components reusable and following DRY principle
- [ ] TypeScript strict mode passing
- [ ] Motion animations smooth and performant
- [ ] Accessibility standards met (WCAG AA)
- [ ] Mock data properly typed
- [ ] Navigation links functional
- [ ] No console errors or warnings

---

## 9. Future Enhancements

### Backend Integration
- Replace mock data with API calls
- Implement real teacher search and filtering
- Implement actual booking system
- Integrate payment gateway (Stripe, PayPal)
- Real-time availability updates

### Additional Features
- Teacher favorites
- Booking history
- Calendar integration
- Video call integration
- In-app messaging with teachers
- Teacher comparison feature
- Curriculum progress tracking
- Personalized curriculum recommendations
