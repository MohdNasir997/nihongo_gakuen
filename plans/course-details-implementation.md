# Course Details Page Implementation Plan

## Overview
Create a comprehensive course details page at `/courses/[slug]` with enrollment functionality, based on the Google Stitch design from `designs/course_details__n5_beginner/`.

## Design Analysis

### Page Sections
Based on the design reference, the course details page includes:

1. **Breadcrumbs Navigation** - Home / Japanese Courses / Course Title
2. **Hero Section** - Course image, title, description, level badge
3. **Instructor Profile** - Avatar, name, credentials, bio, view profile button
4. **What You'll Learn** - Checklist of learning outcomes (4 items grid)
5. **Curriculum** - Accordion-style modules with lessons (12 modules, 48 lessons, 15h total)
6. **Student Reviews** - Rating display and review cards
7. **Sticky Sidebar**:
   - Course preview video thumbnail
   - Price with discount ($49.99, was $89.99, 45% off)
   - "Enroll Now" and "Add to Wishlist" buttons
   - Course includes list (video, resources, lifetime access, mobile, certificate)
   - Corporate learning info box

### Key Features
- **Available with Subscription** button (as requested)
- Responsive design (mobile-first)
- Dark mode support
- Subtle animations using Motion
- Interactive curriculum accordion

## Implementation Steps

### 1. Expand Type Definitions

**File**: [`lib/types/course.ts`](lib/types/course.ts)

Add detailed interfaces:
- `Instructor` - name, avatar, title, bio, credentials
- `Module` - id, title, lessons count, duration
- `Lesson` - id, title, type (video/pdf), duration
- `Review` - id, author, avatar, rating, date, comment
- `CourseDetails` - extends Course with detailed fields

### 2. Update Mock Data

**File**: [`lib/data/courses.ts`](lib/data/courses.ts)

Create detailed course data for N5 Beginner:
- Full instructor profile (Tanaka Sensei)
- 12 modules with lesson breakdown
- Learning outcomes
- Student reviews
- Pricing and discount info

### 3. Download Shadcn UI Components

Run CLI commands to install:
```bash
pnpx shadcn-ui@latest add tabs
pnpx shadcn-ui@latest add separator
pnpx shadcn-ui@latest add dialog
pnpx shadcn-ui@latest add popover
```

### 4. Create Domain Components

#### 4.1 CourseHero Component
**File**: `components/domain/course/CourseHero.tsx`
- Hero section with background image
- Course title and description
- Level badge
- Gradient overlay

#### 4.2 InstructorProfile Component
**File**: `components/domain/course/InstructorProfile.tsx`
- Instructor avatar and info
- Credentials badges
- Bio paragraph
- View profile button

#### 4.3 LearningOutcomes Component
**File**: `components/domain/course/LearningOutcomes.tsx`
- Section header with icon
- 2-column grid of checklist items
- Checkmark icons

#### 4.4 CurriculumAccordion Component
**File**: `components/domain/course/CurriculumAccordion.tsx`
- Uses Shadcn Accordion component
- Module headers with number, title, duration
- Expandable lesson lists
- Video and PDF lesson types

#### 4.5 CourseReviews Component
**File**: `components/domain/course/CourseReviews.tsx`
- Rating summary (stars + average)
- Review cards with author info
- Star rating display

#### 4.6 CourseEnrollmentSidebar Component
**File**: `components/domain/course/CourseEnrollmentSidebar.tsx`
- Preview video thumbnail with play button
- Price display with discount
- "Enroll Now" button (primary)
- "Available with Subscription" button (secondary)
- "Add to Wishlist" button
- Course includes list
- Corporate learning box

### 5. Create Page Route

**File**: `app/courses/[slug]/page.tsx`

- Dynamic route with slug parameter
- Fetch course data by slug
- Not found handling for invalid slugs
- Layout with main content and sidebar
- Breadcrumbs navigation
- Motion animations for page load

### 6. Add Animations

Use Motion library for:
- Page fade-in on load
- Hover effects on cards
- Accordion smooth transitions
- Button hover states

## Component Structure

```
app/courses/[slug]/page.tsx
├── Breadcrumbs
├── Main Content (lg:col-span-2)
│   ├── CourseHero
│   ├── InstructorProfile
│   ├── LearningOutcomes
│   ├── CurriculumAccordion
│   └── CourseReviews
└── Sidebar (lg:col-span-1, sticky)
    └── CourseEnrollmentSidebar
```

## Data Flow

```
lib/data/courses.ts (export getCourseBySlug)
    ↓
app/courses/[slug]/page.tsx (fetch course by slug)
    ↓
CourseEnrollmentSidebar (render pricing and CTA)
    ↓
User clicks "Enroll Now" or "Available with Subscription"
    ↓
(Mock) Navigate to enrollment flow
```

## Technical Considerations

### Responsive Design
- Mobile: Stacked layout
- Tablet (md): 2-column grid
- Desktop (lg): 2-column with sticky sidebar

### Dark Mode
- Use `dark:` prefix for all color variants
- Ensure sufficient contrast in both modes
- Test with both light and dark themes

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images

### Performance
- Lazy load images
- Code splitting for components
- Optimize animations (transform/opacity only)

## Mock Data Structure

```typescript
interface CourseDetails {
  id: string;
  slug: string;
  title: string;
  level: JLPTLevel;
  description: string;
  longDescription: string;
  imageUrl: string;
  heroImage: string;
  previewVideo: string;
  instructor: Instructor;
  price: number;
  originalPrice: number;
  discountPercent: number;
  discountDeadline: string;
  learningOutcomes: string[];
  modules: Module[];
  reviews: Review[];
  stats: {
    lessons: number;
    duration: string;
    modules: number;
    students: number;
    rating: number;
    reviewCount: number;
  };
  includes: {
    videoHours: string;
    resources: number;
    lifetimeAccess: boolean;
    mobileAccess: boolean;
    certificate: boolean;
  };
}
```

## Testing Checklist

- [ ] Page loads correctly with valid slug
- [ ] 404 page for invalid slug
- [ ] All sections render properly
- [ ] Accordion expands/collapses correctly
- [ ] Buttons have hover states
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode displays correctly
- [ ] Animations are smooth
- [ ] Links work (breadcrumbs, view profile)
- [ ] Images load properly
- [ ] No console errors

## Future Enhancements

- Add actual enrollment flow
- Implement wishlist functionality
- Add course preview video player
- Implement review submission
- Add related courses section
- Integrate with payment gateway
- Add progress tracking for enrolled users
