# Context: Nihongo Learn

## Current State

**Last Updated**: 2026-01-28

### Project Status: Development Phase

The Nihongo Learn frontend project is in active development phase. Multiple pages and components have been implemented including homepage, courses, course details, lesson player, auth pages, static pages (about, contact, pricing), community page, and student dashboard.

### What's Been Done

1. **Project Initialization**
   - Next.js 16.1.4 application created with App Router
   - TypeScript configuration set up with strict mode enabled
   - Tailwind CSS v4 configured with custom color variables
   - Shadcn UI initialized with New York style
   - Motion (Framer Motion) installed for animations

2. **Configuration Files**
   - [`components.json`](components.json): Shadcn UI configuration with aliases and paths
   - [`tsconfig.json`](tsconfig.json): TypeScript config with path aliases (`@/*`)
   - [`next.config.ts`](next.config.ts): Next.js configuration (minimal)
   - [`postcss.config.mjs`](postcss.config.mjs): PostCSS configuration for Tailwind
   - [`app/globals.css`](app/globals.css): Global styles with CSS variables for theming

3. **Design Assets**
   - Google Stitch exports available in [`designs/`](designs/) directory
   - 14 design folders with HTML and PNG screenshots for all major pages
   - Dark and light mode variants available for some designs
   - Public assets in [`public/assets/`](public/assets/) including hero images

4. **Documentation**
   - [`AGENTS.md`](AGENTS.md): Comprehensive development guidelines
   - [`README.md`](README.md): Standard Next.js README (needs updating)
   - Memory bank initialized and updated

5. **Component Structure**
   - [`components/ui/`](components/ui/) directory created with Shadcn components
   - [`components/domain/`](components/domain/) directory created with feature-specific components
   - [`components/layout/`](components/layout/) directory created with shared layout components
   - Multiple reusable components built (Navbar, Footer, CourseCard, etc.)

6. **Mock Data Infrastructure**
   - [`lib/data/`](lib/data/) directory created
   - TypeScript interfaces defined for core data models
   - Mock data files created for courses, lessons, users, community, pricing, testimonials
   - Dashboard-specific data created (user, progress, activity, goals, continueLearning)

7. **Application Pages Implemented**
   - Homepage ([`app/page.tsx`](app/page.tsx))
   - Course catalog ([`app/courses/page.tsx`](app/courses/page.tsx))
   - Course details ([`app/courses/[slug]/page.tsx`](app/courses/[slug]/page.tsx))
   - Lesson player ([`app/learn/[courseId]/[lessonId]/page.tsx`](app/learn/[courseId]/[lessonId]/page.tsx))
   - Auth pages ([`app/(auth)/register/page.tsx`](app/(auth)/register/page.tsx))
   - Static pages (about, contact, pricing)
   - Community page ([`app/community/page.tsx`](app/community/page.tsx))
   - Student dashboard ([`app/dashboard/page.tsx`](app/dashboard/page.tsx))

### What's Missing

1. **Application Pages**
   - Dashboard subpages (progress, profile, settings) need to be created
   - Some navigation links are placeholders

2. **Component Structure**
   - Some components could be further refactored for reusability

3. **Mock Data**
   - Dashboard data is mock and needs backend integration

4. **Features**
   - No authentication flow
   - No video player implementation
   - No language exchange functionality
   - No real-time progress tracking

### Current Working Directory

- **Root**: [`c:/Users/krmna/Desktop/my_portfolio/frontends/nihongo_gakuen`](.)
- **App Directory**: [`app/`](app/)
- **Designs Directory**: [`designs/`](designs/)
- **Public Assets**: [`public/assets/`](public/assets/)

## Recent Changes

### 2026-01-28: Student Dashboard Implementation
- Created student dashboard at [`app/dashboard/page.tsx`](app/dashboard/page.tsx)
- Implemented dashboard layout with responsive sidebar and header
- Created 6 domain components for dashboard (Sidebar, Header, StatCard, ContinueLearningCard, WeeklyActivityChart, DailyGoalList)
- Added dashboard-specific mock data (user, progress, activity, goals, continueLearning)
- Integrated Motion animations for smooth transitions
- Implemented responsive design for mobile, tablet, and desktop
- Added dark mode support throughout dashboard

### 2026-01-20: Memory Bank Initialization
- Created comprehensive memory bank structure
- Documented product vision and user experience goals
- Analyzed existing project configuration and design assets

## Next Steps (Priority Order)

### Immediate Priorities

1. **Create Component Structure**
   - Set up [`components/ui/`](components/ui/) for Shadcn components
   - Set up [`components/domain/`](components/domain/) for feature-specific components
   - Set up [`components/layout/`](components/layout/) for shared layout components

2. **Implement Shared Layout**
   - Create navigation bar component
   - Create footer component
   - Update [`app/layout.tsx`](app/layout.tsx) to include shared layout
   - Implement theme provider for dark/light mode

3. **Create Mock Data Infrastructure**
   - Create [`lib/data/`](lib/data/) directory
   - Define TypeScript interfaces for core data models
   - Create mock data files for courses, lessons, users, etc.

4. **Implement Homepage**
   - Convert `nihongo_learn_homepage` design to [`app/page.tsx`](app/page.tsx)
   - Implement hero section with animations
   - Create feature cards and CTA sections
   - Ensure responsive design and dark mode support

### Short-term Goals

5. **Implement Course Pages**
   - Create [`app/courses/page.tsx`](app/courses/page.tsx) from `courses_library` designs
   - Create [`app/courses/[slug]/page.tsx`](app/courses/[slug]/page.tsx) for course details
   - Implement course card components
   - Add filtering and search functionality

6. **Implement Lesson Player**
   - Create [`app/learn/[courseId]/[lessonId]/page.tsx`](app/learn/[courseId]/[lessonId]/page.tsx)
   - Implement video player with subtitle support
   - Add interactive quiz components
   - Create lesson navigation sidebar

7. **Implement Auth Pages**
   - Create [`app/auth/register/page.tsx`](app/auth/register/page.tsx) from `create_account` design
   - Add form validation with Zod and React Hook Form
   - Implement mock authentication flow

8. **Implement Static Pages**
   - Create [`app/about/page.tsx`](app/about/page.tsx) from `about_us` design
   - Create [`app/contact/page.tsx`](app/contact/page.tsx) from `contact_us` design
   - Create [`app/pricing/page.tsx`](app/pricing/page.tsx) from `pricing` designs

### Medium-term Goals

9. **Implement Community Features**
   - Create [`app/community/page.tsx`](app/community/page.tsx) from `language_exchange` designs
   - Implement matching algorithm mockup
   - Create chat components
   - Add community forum structure

10. **Implement Dashboard** ✅ COMPLETED
    - ✅ Create student dashboard page
    - ✅ Implement progress tracking visualization
    - ✅ Add gamification elements (badges, streaks)
    - ✅ Create personalized recommendations

11. **Polish and Refine**
    - Add animations throughout using Motion
    - Ensure consistent dark mode implementation
    - Optimize performance and accessibility
    - Add error handling and loading states

## Known Issues

- None identified yet (project in early stage)

## Technical Debt

- None identified yet (project in early stage)

## Dependencies to Watch

- Next.js 16 is in early release - monitor for breaking changes
- Tailwind CSS v4 is new - ensure compatibility with Shadcn UI
- Motion library updates may require animation adjustments
