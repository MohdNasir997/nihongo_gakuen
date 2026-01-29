# Lesson Player Page Implementation Plan

## Overview
Build the active lesson player page based on `designs/active_lesson_player/` following project's DRY principles, responsive design requirements, and existing component architecture.

## Design Analysis

### Visual Elements from `designs/active_lesson_player/code.html`
1. **Navbar**: Logo, search bar, navigation links, notifications/settings buttons, user avatar
2. **Breadcrumbs**: Course navigation path (Japanese N3 / Module 2: Grammar / Lesson 4)
3. **Main Content** (2/3 width):
   - Video player with play button and custom controls
   - Lesson title and description
   - "Mark as Complete" button
   - Previous/Next lesson navigation
4. **Sidebar** (1/3 width):
   - Resources section (downloads for PDF notes, vocabulary list)
   - Q&A section with questions and instructor replies
   - Question input textarea
5. **Footer**: Simple copyright footer

### Responsive Design Requirements
- Mobile: Stacked layout, video player full width
- Tablet: Sidebar moves to right, video player takes 2/3
- Desktop: Same as tablet with optimal spacing

## Component Architecture

### Directory Structure
```
lib/
  types/
    lesson.ts          # Extended lesson types
  data/
    lessons.ts         # Mock lesson data
components/
  layout/
    LessonNavbar.tsx   # Navbar with search for lesson pages
  domain/
    lesson/
      VideoPlayer.tsx       # Video player with custom controls
      LessonResources.tsx   # Downloadable resources
      LessonQA.tsx          # Q&A section
      LessonNavigation.tsx   # Prev/Next buttons
app/
  learn/
    [courseId]/
      [lessonId]/
        layout.tsx          # Lesson page layout
        page.tsx            # Lesson player page
```

### Component Relationships
```
LessonPlayerPage (app/learn/[courseId]/[lessonId]/page.tsx)
├── LessonNavbar (components/layout/LessonNavbar.tsx)
├── Main Content (2/3 width)
│   ├── Breadcrumbs
│   ├── VideoPlayer (components/domain/lesson/VideoPlayer.tsx)
│   ├── LessonInfo (title, description)
│   └── LessonNavigation (components/domain/lesson/LessonNavigation.tsx)
└── Sidebar (1/3 width)
    ├── LessonResources (components/domain/lesson/LessonResources.tsx)
    └── LessonQA (components/domain/lesson/LessonQA.tsx)
```

## Implementation Steps

### Step 1: Create Extended Lesson Types
**File**: `lib/types/lesson.ts`

Extend existing lesson types from `lib/types/course.ts` with:
- `VideoLesson` interface for lesson player
- `LessonResource` interface for downloadable files
- `QAQuestion` interface for Q&A section
- `InstructorReply` interface for instructor responses
- `LessonProgress` interface for tracking completion

### Step 2: Create Lesson Mock Data
**File**: `lib/data/lessons.ts`

Create mock data for:
- Sample lesson with video URL (placeholder)
- Downloadable resources (PDF, Excel)
- Q&A questions with instructor replies
- Lesson progress tracking

### Step 3: Create LessonNavbar Component
**File**: `components/layout/LessonNavbar.tsx`

Navbar for lesson pages:
- Logo (reuse from existing Navbar)
- Search bar with icon
- Navigation links (Dashboard, Courses, Community)
- Notifications and Settings buttons
- User avatar
- Mobile menu with all elements

**DRY Consideration**: Reuse logo SVG from existing Navbar

### Step 4: Create VideoPlayer Component
**File**: `components/domain/lesson/VideoPlayer.tsx`

Video player with:
- Placeholder video/image (use placeholder or mock video)
- Play button overlay
- Custom video controls:
  - Play/Pause
  - Volume
  - Progress bar
  - Time display
  - Closed captions
  - Settings
  - Fullscreen
- Hover state for controls
- Responsive aspect ratio

**Features**:
- Play/Pause toggle
- Volume control
- Progress indicator
- Time display (current / total)
- Fullscreen toggle
- Subtitle toggle
- Settings button

### Step 5: Create LessonResources Component
**File**: `components/domain/lesson/LessonResources.tsx`

Resources section:
- Downloadable files list
- File icons (PDF, Excel)
- File names and sizes
- Download buttons
- Hover states

**Resources**:
- Lesson notes (PDF)
- Vocabulary list (Excel)
- Additional materials

### Step 6: Create LessonQA Component
**File**: `components/domain/lesson/LessonQA.tsx`

Q&A section:
- List of questions with:
  - User avatar and name
  - Question text
  - Timestamp
  - Instructor replies (nested)
- Question input textarea
- Post Question button
- Scrollable container
- Custom scrollbar styling

**Features**:
- Display existing questions
- Show instructor replies
- Add new question form
- Scrollable area for many questions

### Step 7: Create LessonNavigation Component
**File**: `components/domain/lesson/LessonNavigation.tsx`

Navigation buttons:
- Previous Lesson button
- Progress indicator (e.g., "Progress: 4 / 12 Lessons")
- Next Lesson button
- Responsive layout

### Step 8: Create Lesson Layout
**File**: `app/learn/[courseId]/[lessonId]/layout.tsx`

Layout for lesson pages:
- Uses LessonNavbar (not main Navbar)
- Includes Footer
- Grid layout for content (2/3 + 1/3)
- Responsive breakpoints

### Step 9: Create Lesson Player Page
**File**: `app/learn/[courseId]/[lessonId]/page.tsx`

Main lesson player page:
- Breadcrumbs navigation
- VideoPlayer component
- Lesson title and description
- Mark as Complete button
- LessonNavigation component
- LessonResources component
- LessonQA component
- Mock data integration

**Responsive Design**:
- Mobile: Stacked layout
- Tablet: 2-column grid (2/3 + 1/3)
- Desktop: Same as tablet with max-width

## DRY Principle Compliance

### Reusable Components
1. **LessonNavbar**: Can be reused for all lesson pages
2. **VideoPlayer**: Can be reused for video previews
3. **LessonResources**: Can be reused for course resources page
4. **LessonQA**: Can be reused for community forums

### Shared Patterns
1. **Navbar Structure**: Follow same pattern as existing Navbar
2. **Card Components**: Use Shadcn UI Card components
3. **Button Styles**: Use Shadcn UI Button variants
4. **Icons**: Use Lucide React consistently
5. **Theme Toggle**: Reuse logic from existing Navbar

### Avoid Duplication
- Don't duplicate navbar logic - extract common parts
- Don't duplicate card styles - use Shadcn UI Card
- Don't duplicate button styles - use Shadcn UI Button
- Don't duplicate icon patterns - use Lucide React

## Responsive Design Strategy

### Breakpoints (Tailwind CSS)
- Mobile: Default (< 768px)
- Tablet: `md:` (768px - 1024px)
- Desktop: `lg:` (> 1024px)

### Mobile-First Approach
```css
/* Base styles - Mobile */
.video-player { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .grid-layout { grid-template-columns: 2fr 1fr; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1600px; }
}
```

### Touch Targets
- All buttons: Minimum 44px height
- Video controls: Sufficient spacing
- Interactive elements: Touch-friendly

## Dark Mode Support

### Color Strategy
- Use Tailwind `dark:` prefix for dark mode styles
- Leverage CSS variables from `app/globals.css`
- Ensure contrast ratio meets WCAG AA standards

### Dark Mode Classes
```tsx
// Light mode
bg-white text-slate-900 border-gray-200

// Dark mode
dark:bg-[#1a212c] dark:text-white dark:border-gray-800
```

## Animation Strategy

### Motion (Framer Motion) Usage
- Video play button: Scale on hover
- Resource cards: Subtle lift on hover
- Question cards: Fade in when loaded
- Navigation buttons: Hover effects

### Animation Variants
```tsx
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
}

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.2 } }
}
```

## Mock Data Strategy

### Lesson Data Structure
```typescript
interface LessonData {
  course: {
    id: string
    title: string
    level: string
  }
  module: {
    id: string
    title: string
  }
  lesson: {
    id: string
    title: string
    description: string
    videoUrl: string
    duration: string
  }
  resources: LessonResource[]
  questions: QAQuestion[]
  progress: {
    current: number
    total: number
  }
}
```

### Placeholder Content
- Use placeholder images from `public/assets/` or Unsplash
- Use placeholder video URLs or mock video player
- Use mock data for Q&A questions

## Testing Checklist

### Functionality
- [ ] Video player controls work correctly
- [ ] Play/Pause toggle works
- [ ] Progress bar updates
- [ ] Download buttons trigger downloads (mock)
- [ ] Question form submits (mock)
- [ ] Mark as Complete button works (mock)
- [ ] Navigation buttons work correctly

### Responsive Design
- [ ] Mobile layout looks correct
- [ ] Tablet layout looks correct
- [ ] Desktop layout looks correct
- [ ] Video player is responsive
- [ ] Sidebar is responsive
- [ ] No horizontal scroll on mobile

### Dark Mode
- [ ] Light mode colors are correct
- [ ] Dark mode colors are correct
- [ ] Contrast is sufficient in both modes
- [ ] Theme toggle works correctly

### Accessibility
- [ ] Video player has ARIA labels
- [ ] All buttons have labels
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Video controls are accessible

## Future Enhancements

### Video Features
- Actual video player integration (HTML5 video or custom player)
- Subtitle support with multiple languages
- Playback speed control
- Video quality selector
- Picture-in-picture mode

### Q&A Features
- Real-time updates with WebSockets
- Upvote/downvote system
- Mark questions as answered
- Filter by topic
- Search questions

### Progress Tracking
- Save progress to local storage
- Sync with backend when available
- Resume from last position
- Completion certificates

## Dependencies

### Required Components (Already Installed)
- ✅ Button (Shadcn UI)
- ✅ Card (Shadcn UI)
- ✅ Input (Shadcn UI)
- ✅ Textarea (Shadcn UI)
- ✅ Avatar (Shadcn UI)
- ✅ Badge (Shadcn UI)
- ✅ Separator (Shadcn UI)
- ✅ Lucide React (icons)
- ✅ Motion (Framer Motion)

### Required Packages (Already Installed)
- ✅ React Hook Form
- ✅ Zod
- ✅ Motion (Framer Motion)
- ✅ next-themes (for theme toggle)

### No Additional Dependencies Needed
All required components and packages are already installed in the project.

## Files to Create

1. `lib/types/lesson.ts` - Extended lesson types
2. `lib/data/lessons.ts` - Mock lesson data
3. `components/layout/LessonNavbar.tsx` - Navbar with search
4. `components/domain/lesson/VideoPlayer.tsx` - Video player component
5. `components/domain/lesson/LessonResources.tsx` - Resources section
6. `components/domain/lesson/LessonQA.tsx` - Q&A section
7. `components/domain/lesson/LessonNavigation.tsx` - Navigation buttons
8. `app/learn/[courseId]/[lessonId]/layout.tsx` - Lesson layout
9. `app/learn/[courseId]/[lessonId]/page.tsx` - Lesson player page

## Files to Modify

None - all files are new

## Notes

- Follow existing code style and patterns from project
- Use TypeScript strict mode
- Ensure all components are properly typed
- Add JSDoc comments for complex logic
- Test both light and dark modes
- Verify mobile responsiveness
- Use placeholder content where needed
- Mock all backend interactions
