# Architecture: Nihongo Learn

## System Architecture

### High-Level Architecture

Nihongo Learn follows a **frontend-only architecture** with mock data simulating backend functionality. The application is built as a Single Page Application (SPA) using Next.js App Router with server-side rendering capabilities.

```
┌─────────────────────────────────────────────────────────────┐
│                         User Interface                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Pages      │  │  Components  │  │   Layouts    │        │
│  │  (App Router)│  │  (Shadcn UI) │  │  (Shared)    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         Data Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Mock Data   │  │   Types/     │  │   Utils/     │        │
│  │  (lib/data/) │  │ Interfaces   │  │  Helpers     │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Patterns

1. **Component-Based Architecture**: React components organized by domain and reusability
2. **Atomic Design**: Components organized into atoms, molecules, and organisms
3. **DRY Principle**: Shared logic extracted into reusable hooks and utilities
4. **Type Safety**: TypeScript interfaces for all data structures
5. **Responsive Design**: Mobile-first approach with Tailwind CSS

## Source Code Paths

### Directory Structure

```
nihongo_gakuen/
├── app/                          # Next.js App Router pages
│   ├── (auth)/                   # Auth route group
│   │   └── register/
│   │       └── page.tsx         # Registration page
│   ├── (marketing)/              # Marketing route group
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   └── pricing/
│   │       └── page.tsx         # Pricing page
│   ├── community/
│   │   └── page.tsx             # Language exchange community
│   ├── courses/
│   │   ├── page.tsx             # Course catalog
│   │   └── [slug]/
│   │       └── page.tsx         # Course details
│   ├── learn/
│   │   └── [courseId]/
│   │       └── [lessonId]/
│   │           └── page.tsx     # Lesson player
│   ├── layout.tsx               # Root layout with navbar/footer
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
│
├── components/
│   ├── ui/                      # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   ├── domain/                  # Domain-specific components
│   │   ├── course/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseList.tsx
│   │   │   └── CourseDetails.tsx
│   │   ├── lesson/
│   │   │   ├── LessonPlayer.tsx
│   │   │   ├── LessonSidebar.tsx
│   │   │   └── QuizComponent.tsx
│   │   ├── community/
│   │   │   ├── PartnerCard.tsx
│   │   │   ├── ChatInterface.tsx
│   │   │   └── MatchingAlgorithm.tsx
│   │   └── dashboard/
│   │       ├── ProgressChart.tsx
│   │       ├── AchievementBadge.tsx
│   │       └── StreakCounter.tsx
│   └── layout/                  # Layout components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ThemeProvider.tsx
│
├── lib/
│   ├── data/                    # Mock data files
│   │   ├── courses.ts
│   │   ├── lessons.ts
│   │   ├── users.ts
│   │   └── community.ts
│   ├── types/                   # TypeScript interfaces
│   │   ├── course.ts
│   │   ├── lesson.ts
│   │   ├── user.ts
│   │   └── community.ts
│   ├── utils.ts                 # Utility functions (cn helper)
│   └── config.ts                # Global configuration
│
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts
│   ├── useCourses.ts
│   ├── useProgress.ts
│   └── useTheme.ts
│
├── designs/                     # Google Stitch exports (reference only)
│   ├── nihongo_learn_homepage/
│   ├── courses_library_1/
│   └── ...
│
└── public/
    └── assets/                  # Static assets
        ├── darkhero.png
        ├── landing_absolute_beginner.png
        └── ...
```

## Key Technical Decisions

### 1. Next.js App Router
- **Decision**: Use App Router over Pages Router
- **Reasoning**: Built-in layouts, streaming, improved performance, better TypeScript support
- **Impact**: All pages must be in `app/` directory with `page.tsx` files

### 2. Shadcn UI
- **Decision**: Use Shadcn UI as the component library
- **Reasoning**: Built on Radix UI (accessible), highly customizable, follows Tailwind patterns
- **Impact**: Components in `components/ui/`, configured via `components.json`

### 3. Motion (Framer Motion)
- **Decision**: Use Motion for animations instead of CSS-only
- **Reasoning**: Declarative animations, better performance, complex animations support
- **Impact**: Wrap components in `<motion.div>`, use variants for reusable animations

### 4. Tailwind CSS v4
- **Decision**: Use Tailwind v4 (latest)
- **Reasoning**: Improved performance, new features, better dark mode support
- **Impact**: Use new CSS-first approach with `@import "tailwindcss"`

### 5. Mock Data Architecture
- **Decision**: Frontend-only with mock data
- **Reasoning**: Rapid prototyping, no backend complexity, focus on UI/UX
- **Impact**: All data in `lib/data/`, TypeScript interfaces for type safety

### 6. Route Groups
- **Decision**: Use Next.js route groups for organization
- **Reasoning**: Logical grouping without affecting URL structure
- **Impact**: `(auth)`, `(marketing)` groups for shared layouts

## Design Patterns in Use

### 1. Atomic Design Pattern
Components organized by complexity:
- **Atoms**: Basic UI elements (Button, Input, Badge)
- **Molecules**: Simple combinations (CourseCard, PartnerCard)
- **Organisms**: Complex UI sections (LessonPlayer, Navbar)

### 2. Container/Presenter Pattern
Separation of logic and presentation:
- **Container**: Handles data fetching, state management
- **Presenter**: Pure presentation components

### 3. Composition Pattern
Components composed from smaller components:
- Example: `CourseCard` = `Card` + `Badge` + `Avatar` + `Button`

### 4. Custom Hooks Pattern
Reusable logic extracted into hooks:
- `useAuth()`: Authentication state and methods
- `useCourses()`: Course data fetching and filtering
- `useProgress()`: Progress tracking logic

### 5. Provider Pattern
Shared state via React Context:
- `ThemeProvider`: Dark/light mode state
- `AuthProvider`: User authentication state
- `ProgressProvider`: Learning progress state

## Component Relationships

### Layout Components
```
RootLayout (app/layout.tsx)
├── ThemeProvider (wraps entire app)
├── Navbar (persistent across pages)
├── Main Content (children)
└── Footer (persistent across pages)
```

### Course Pages
```
CoursesPage (app/courses/page.tsx)
├── CourseList (components/domain/course/CourseList.tsx)
│   └── CourseCard[] (components/domain/course/CourseCard.tsx)
│       ├── Card (components/ui/card.tsx)
│       ├── Badge (components/ui/badge.tsx)
│       └── Avatar (components/ui/avatar.tsx)
└── Filters (components/ui/select.tsx)
```

### Lesson Player
```
LessonPlayer (app/learn/[courseId]/[lessonId]/page.tsx)
├── VideoPlayer (components/domain/lesson/VideoPlayer.tsx)
├── LessonSidebar (components/domain/lesson/LessonSidebar.tsx)
│   └── LessonItem[] (components/domain/lesson/LessonItem.tsx)
├── QuizComponent (components/domain/lesson/QuizComponent.tsx)
└── NotesPanel (components/domain/lesson/NotesPanel.tsx)
```

### Community Features
```
CommunityPage (app/community/page.tsx)
├── PartnerList (components/domain/community/PartnerList.tsx)
│   └── PartnerCard[] (components/domain/community/PartnerCard.tsx)
├── ChatInterface (components/domain/community/ChatInterface.tsx)
└── MatchingAlgorithm (components/domain/community/MatchingAlgorithm.tsx)
```

## Critical Implementation Paths

### 1. Homepage Implementation
**Path**: [`app/page.tsx`](app/page.tsx)
**Dependencies**: Navbar, Footer, HeroSection, FeatureCards
**Design Source**: `designs/nihongo_learn_homepage/`
**Key Components**:
- Hero section with CTA buttons
- Feature showcase cards
- Testimonials section
- Pricing preview

### 2. Course Catalog Implementation
**Path**: [`app/courses/page.tsx`](app/courses/page.tsx)
**Dependencies**: CourseCard, Filters, Search
**Design Source**: `designs/courses_library_1/`, `designs/courses_library_2/`
**Key Components**:
- Course grid/list
- Filter sidebar (JLPT level, topic, difficulty)
- Search functionality
- Pagination

### 3. Course Details Implementation
**Path**: [`app/courses/[slug]/page.tsx`](app/courses/[slug]/page.tsx)
**Dependencies**: CourseDetails, Syllabus, Reviews
**Design Source**: `designs/course_details__n5_beginner/`
**Key Components**:
- Course overview
- Syllabus breakdown
- Instructor profile
- Enrollment CTA
- Reviews section

### 4. Lesson Player Implementation
**Path**: [`app/learn/[courseId]/[lessonId]/page.tsx`](app/learn/[courseId]/[lessonId]/page.tsx)
**Dependencies**: VideoPlayer, LessonSidebar, QuizComponent
**Design Source**: `designs/active_lesson_player/`
**Key Components**:
- Video player with subtitles
- Lesson navigation sidebar
- Interactive quiz
- Vocabulary flashcards
- Note-taking panel

### 5. Authentication Flow
**Path**: [`app/(auth)/register/page.tsx`](app/(auth)/register/page.tsx)
**Dependencies**: AuthProvider, Form validation
**Design Source**: `designs/create_account/`
**Key Components**:
- Registration form
- Login form
- Password reset
- Social login options

### 6. Community Features
**Path**: [`app/community/page.tsx`](app/community/page.tsx)
**Dependencies**: PartnerCard, ChatInterface, MatchingAlgorithm
**Design Source**: `designs/language_exchange_community/`
**Key Components**:
- Partner matching
- Chat interface
- Community forums
- Language practice topics

## Data Flow

### Mock Data Flow
```
lib/data/courses.ts (export courses array)
    ↓
useCourses() hook (fetches and filters data)
    ↓
Page Component (receives data via hook)
    ↓
Child Components (render data)
```

### Authentication Flow (Mock)
```
User submits login form
    ↓
AuthProvider validates credentials (mock)
    ↓
Set user state in context
    ↓
Protected routes check auth state
    ↓
Redirect or render protected content
```

### Progress Tracking Flow
```
User completes lesson
    ↓
ProgressProvider updates state
    ↓
Update local storage (mock persistence)
    ↓
Dashboard reflects new progress
```

## State Management Strategy

### Local State
- Component-specific state (form inputs, UI toggles)
- Managed with React `useState` hook

### Context State
- Global state (theme, auth, progress)
- Managed with React Context API
- Custom hooks for easy access (`useTheme()`, `useAuth()`)

### Server State (Future)
- Data fetching (courses, lessons, users)
- Will use React Query or SWR when backend is added
- Currently using mock data

## Performance Considerations

### Code Splitting
- Next.js automatic code splitting by route
- Dynamic imports for heavy components
- Lazy loading for non-critical features

### Image Optimization
- Use Next.js Image component
- Optimize hero images and course thumbnails
- Responsive image sizes

### Animation Performance
- Use CSS transforms and opacity
- Avoid layout thrashing
- Use Motion's `layout` prop sparingly

### Bundle Size
- Tree-shaking with Next.js
- Import only needed components from libraries
- Analyze bundle with `next build --analyze`

## Accessibility Strategy

### Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support

### Color Contrast
- WCAG AA compliant colors
- High contrast mode support
- Dark mode with proper contrast

### Screen Reader Support
- Alt text for images
- Descriptive link text
- Live regions for dynamic content

### Responsive Design
- Mobile-first approach
- Touch-friendly targets (44px minimum)
- Readable font sizes (16px minimum)
