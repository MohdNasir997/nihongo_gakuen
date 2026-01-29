# Student Dashboard Implementation Plan

## Overview
Create a student dashboard page at `/dashboard` based on the design in `designs/student_dashboard_(dark_mode)_1`. The dashboard will display user progress, learning statistics, continue learning cards, weekly activity chart, and daily goals.

## Design Analysis

### Visual Elements from Design
1. **Sidebar Navigation** (responsive: collapses on mobile/tablet)
   - Logo with NihonGo Learn branding
   - Navigation items: My Courses, My Progress, Profile, Settings
   - Community Discord promo card
   - Help Center link

2. **Header**
   - Breadcrumb navigation (Home / Dashboard)
   - Search bar with icon
   - User profile: name, "Pro Learner" badge, avatar

3. **Main Content Area**
   - Welcome message: "Okaeri, Alex-san! 👋"
   - Stats cards grid:
     - Current Streak: 15 Days (with "TOP 5%" badge)
     - Lessons Finished: 42 (with "PROGRESSING" badge)
     - JLPT Goal: N3 Level (with "TARGET: DEC" badge)
   - "Continue Learning" section with 2 course cards:
     - Course thumbnail, title, type badge
     - Next lesson info
     - Progress bar with percentage
     - Play button
   - Weekly Activity bar chart (7 days)
   - Daily Goal checklist (3 items, 2 completed)

### Color Scheme (Dark Mode)
- Background: `deep-charcoal` (hsl(220, 15%, 12%))
- Card background: `card-bg` (hsl(220, 15%, 15%))
- Border: `border-soft` (hsl(220, 15%, 20%))
- Primary: `#6366f1` (indigo)
- Accent: `#818cf8`
- Success: `#4ade80` (soft-green)

## Technical Implementation

### 1. Install Required Shadcn UI Components

```bash
npx shadcn-ui@latest add progress
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add command
```

**Rationale:**
- `progress`: For progress bars in continue learning cards
- `scroll-area`: For scrollable sidebar on mobile
- `command`: For search functionality with keyboard navigation

### 2. Create TypeScript Interfaces

Create `lib/types/dashboard.ts`:

```typescript
export interface UserProfile {
  name: string;
  avatar: string;
  badge: string;
  badgeColor: string;
}

export interface UserProgress {
  currentStreak: number;
  streakBadge?: string;
  lessonsFinished: number;
  progressStatus?: string;
  jlptGoal: string;
  goalTarget?: string;
}

export interface WeeklyActivity {
  day: string;
  value: number;
  isToday?: boolean;
}

export interface DailyGoal {
  id: string;
  text: string;
  completed: boolean;
}

export interface ContinueLearning {
  id: string;
  courseId: string;
  title: string;
  type: string;
  nextLesson: string;
  progress: number;
  thumbnail: string;
}
```

### 3. Create Mock Data Files

#### `lib/data/user.ts`
```typescript
import { UserProfile } from '@/lib/types/dashboard';

export const userProfile: UserProfile = {
  name: 'Alex Chen',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV2B_PXjzKa0KmElCrIFHyxjOR7rWEhJxpyzJezoU4_SoK6bN7bBHRZVLQg_0pjbvVhn8-RnwF6S9b4cD0GjRNH1flLmJiVFbkZYw2yqZwInGqXlGf4RyFEXXBnIQiEn6AAcUII8YkxJlcBXNnzaf1BvOegoEhrVN4g8ZisWz5FgyGt9cHwK6o2fjSJ4p0SM7riL1TlXGkIFzdWaL9G-vBarU8l615vwk6m8SsqcHUqYsWloQtT5T5LP-dlMO2EXuoivbgCA8SllA',
  badge: 'Pro Learner',
  badgeColor: 'soft-green',
};
```

#### `lib/data/progress.ts`
```typescript
import { UserProgress } from '@/lib/types/dashboard';

export const userProgress: UserProgress = {
  currentStreak: 15,
  streakBadge: 'TOP 5%',
  lessonsFinished: 42,
  progressStatus: 'PROGRESSING',
  jlptGoal: 'N3 Level',
  goalTarget: 'TARGET: DEC',
};
```

#### `lib/data/activity.ts`
```typescript
import { WeeklyActivity } from '@/lib/types/dashboard';

export const weeklyActivity: WeeklyActivity[] = [
  { day: 'MON', value: 40 },
  { day: 'TUE', value: 60 },
  { day: 'WED', value: 90, isToday: true },
  { day: 'THU', value: 30 },
  { day: 'FRI', value: 50 },
  { day: 'SAT', value: 75 },
  { day: 'SUN', value: 15 },
];
```

#### `lib/data/goals.ts`
```typescript
import { DailyGoal } from '@/lib/types/dashboard';

export const dailyGoals: DailyGoal[] = [
  { id: '1', text: 'Complete 10 Kanji Cards', completed: true },
  { id: '2', text: 'Review Masu form', completed: true },
  { id: '3', text: 'Listen to 1 podcast episode', completed: false },
];
```

#### `lib/data/continueLearning.ts`
```typescript
import { ContinueLearning } from '@/lib/types/dashboard';

export const continueLearning: ContinueLearning[] = [
  {
    id: '1',
    courseId: 'n4-grammar',
    title: 'JLPT N4: Master Grammar',
    type: 'GRAMMAR',
    nextLesson: 'Lesson 14 - Passive Form (受身形)',
    progress: 65,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHMJ95zBiZ07D3-EYsDp42yPofIqXJzhlYvGN2D6w03q79au1lWVh13wfH4LrytJhowbNv-cpc1YGrau_CNygCuUe99j3uPYYWQjCDHq5pfVdIjN43Na_IxthgIstQLha8nGry2Tcrb7y4mpRrwYYWXIvmrvYFN_yo7mL-QVsTKXcjaeraWvAMeORCOHAOGW7YZMIrXIgfCPvrXv1KMshcMPW4mbxqOoyNfhiwedb7Xz0fdugZhDwSUF8jhSJTJal4d8lFnXq0KE',
  },
  {
    id: '2',
    courseId: 'kanji-2000',
    title: 'Daily Kanji: 2000 Essential',
    type: 'VOCAB',
    nextLesson: 'Mastering Radicals & Components',
    progress: 28,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHDEjWx0155151hANuVEt8hf9zW0q4bZP3CzvULKthahTBxh2miqxbrtRCDDkFovFxpp1OITOtPSLczz08f_thr-RUln27Gur9le2jJN73EmUYTjB47dLJ5uwA5TrIGxyFMG7uz8Qs9yTOm6B9nlz16zlU0VyqMkfC5dOt0o_Ji5ftVLG_XJcWkqV7vr6Bea8gq-CWxCO7QgnBeM1P7rJggehErckWDdSgg7HHctrN3RJye-4bk6l0FaXlLKtIKqW28t8_VFD_pm0',
  },
];
```

### 4. Create Domain Components

#### `components/domain/dashboard/DashboardSidebar.tsx`
- Responsive sidebar with collapsible navigation
- Logo and branding
- Navigation links with active states
- Community Discord promo card
- Help Center link
- Mobile hamburger menu integration

#### `components/domain/dashboard/DashboardHeader.tsx`
- Breadcrumb navigation
- Search bar with icon
- User profile section with avatar and badge

#### `components/domain/dashboard/StatCard.tsx`
- Reusable stat card component
- Icon with background
- Badge support
- Title and value display
- Hover animations

#### `components/domain/dashboard/ContinueLearningCard.tsx`
- Course thumbnail
- Course title and type badge
- Next lesson info
- Progress bar
- Play button with hover effect

#### `components/domain/dashboard/WeeklyActivityChart.tsx`
- Bar chart for weekly activity
- 7-day display
- Highlight today's activity
- Hover effects on bars

#### `components/domain/dashboard/DailyGoalList.tsx`
- List of daily goals
- Checkbox for completed items
- Hover effects on incomplete items

### 5. Create Dashboard Layout

`app/dashboard/layout.tsx`:
- Wrap with ThemeProvider
- Include DashboardSidebar
- Include DashboardHeader
- Set up responsive layout

### 6. Create Dashboard Page

`app/dashboard/page.tsx`:
- Welcome message
- Stats cards grid
- Continue Learning section
- Weekly Activity chart
- Daily Goal list
- Motion animations for smooth transitions

### 7. Add Animations

Use Motion for:
- Page load animations (fade in, slide up)
- Card hover effects (translate Y)
- Button hover effects (scale)
- Progress bar animations

### 8. Responsive Design

- Mobile: Sidebar hidden, hamburger menu, stacked cards
- Tablet: Sidebar collapsed to icons, 2-column grid
- Desktop: Full sidebar, 3-column grid

### 9. Dark Mode Support

- Use `dark:` prefix for dark mode styles
- Ensure proper contrast in both modes
- Test color scheme matches design

## File Structure

```
app/
└── dashboard/
    ├── layout.tsx
    └── page.tsx

components/
└── domain/
    └── dashboard/
        ├── DashboardSidebar.tsx
        ├── DashboardHeader.tsx
        ├── StatCard.tsx
        ├── ContinueLearningCard.tsx
        ├── WeeklyActivityChart.tsx
        └── DailyGoalList.tsx

lib/
├── types/
│   └── dashboard.ts
└── data/
    ├── user.ts
    ├── progress.ts
    ├── activity.ts
    ├── goals.ts
    └── continueLearning.ts
```

## Implementation Order

1. Install Shadcn UI components
2. Create TypeScript interfaces
3. Create mock data files
4. Create domain components (in order of dependency)
5. Create dashboard layout
6. Create dashboard page
7. Add animations
8. Test and refine

## Success Criteria

- [ ] Dashboard matches design visually
- [ ] All components are responsive
- [ ] Dark mode works correctly
- [ ] Animations are smooth and performant
- [ ] Code follows DRY principles
- [ ] TypeScript types are properly defined
- [ ] Mock data is realistic and well-structured
