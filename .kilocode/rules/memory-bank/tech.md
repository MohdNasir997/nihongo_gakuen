# Tech: Nihongo Learn

## Technologies Used

### Core Framework & Language
- **Next.js 16.1.4**: React framework with App Router for server-side rendering and routing
- **React 19.2.3**: UI library for building user interfaces
- **TypeScript 5**: Typed superset of JavaScript for type safety and better developer experience

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development
- **Shadcn UI**: Component library built on Radix UI with Tailwind integration
- **tw-animate-css**: Tailwind CSS animations library
- **CSS Variables**: Custom properties for theming (dark/light mode)

### Animation & Interactivity
- **Motion 12.27.2** (Framer Motion): Animation library for React components
- **React Hook Form 7.71.1**: Form handling with validation
- **Zod 4.3.5**: Schema validation for forms and data

### Icons & Fonts
- **Lucide React 0.562.0**: Icon library for React
- **Geist Font**: Default Next.js font family (Geist Sans, Geist Mono)
- **Google Fonts**: Inter (English) and Noto Serif JP (Japanese) for design assets

### Development Tools
- **ESLint 9**: JavaScript/TypeScript linting
- **PostCSS**: CSS transformation for Tailwind
- **pnpm**: Fast, disk space efficient package manager

## Development Setup

### Prerequisites
- Node.js 18+ (recommended: 20+)
- pnpm package manager
- Git

### Installation

1. **Clone the repository** (if not already done)
   ```bash
   git clone <repository-url>
   cd nihongo_gakuen
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Currently no environment variables are required as the project is frontend-only with mock data. Future additions may include:

```env
# Example future environment variables
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Project Configuration

### TypeScript Configuration ([`tsconfig.json`](tsconfig.json))
- **Target**: ES2017
- **Module Resolution**: bundler
- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` maps to project root
- **JSX**: react-jsx (new JSX transform)

### Next.js Configuration ([`next.config.ts`](next.config.ts))
- Minimal configuration currently
- Future additions may include:
  - Image domains
  - Redirects
  - Rewrites
  - Webpack configuration

### Tailwind Configuration ([`app/globals.css`](app/globals.css))
- **Import Method**: CSS-first with `@import "tailwindcss"`
- **Custom Variants**: Dark mode via `.dark` class
- **Theme**: Inline theme with CSS variables
- **Color System**: OKLCH color space for better color control

### Shadcn UI Configuration ([`components.json`](components.json))
- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Aliases**:
  - `@/components` → components
  - `@/lib` → lib
  - `@/ui` → components/ui
  - `@/hooks` → hooks
  - `@/utils` → lib/utils

## Technical Constraints

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge) with ES2017+ support
- No IE11 support
- Progressive enhancement approach for older browsers

### Performance Constraints
- Maximum bundle size: 250KB (gzipped) for initial load
- Time to Interactive: < 3 seconds on 3G
- Lighthouse Performance Score: 90+
- Animation frame rate: 60fps

### Accessibility Constraints
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratio: 4.5:1 minimum

### Responsive Design Constraints
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Touch targets: Minimum 44px × 44px

## Dependencies

### Production Dependencies

```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.562.0",
  "motion": "^12.27.2",
  "next": "16.1.4",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "react-hook-form": "^7.71.1",
  "tailwind-merge": "^3.4.0",
  "zod": "^4.3.5"
}
```

### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.1.4",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.4.0",
  "typescript": "^5"
}
```

### Dependency Notes

- **Next.js 16**: Early release version - monitor for breaking changes
- **React 19**: Latest version with new features and improvements
- **Tailwind CSS v4**: New version with CSS-first approach
- **Motion**: Framer Motion rebranded - check for API changes
- **Zod 4**: Latest version with improved validation features

## Tool Usage Patterns

### Component Development

1. **Creating Shadcn UI Components**
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```
   - Components are added to `components/ui/`
   - Automatically configured with Tailwind classes
   - TypeScript types included

2. **Creating Domain Components**
   - Manual creation in `components/domain/[feature]/`
   - Import Shadcn components as building blocks
   - Follow atomic design principles

3. **Creating Custom Hooks**
   - Place in `hooks/` directory
   - Prefix with `use` (e.g., `useAuth`, `useCourses`)
   - Export with JSDoc comments

### Styling Patterns

1. **Tailwind Utility Classes**
   - Use utility classes for 95% of styling
   - Reserve custom CSS for complex animations
   - Follow mobile-first responsive design

2. **Dark Mode Implementation**
   - Use `dark:` prefix for dark mode styles
   - Test both light and dark modes
   - Ensure sufficient contrast in both modes

3. **Animation with Motion**
   ```tsx
   import { motion } from 'motion/react'

   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.3 }}
   >
     Content
   </motion.div>
   ```

### Data Management

1. **Mock Data Structure**
   ```typescript
   // lib/data/courses.ts
   import { Course } from '@/types/course'

   export const courses: Course[] = [
     {
       id: '1',
       title: 'Japanese for Beginners',
       level: 'N5',
       // ...
     }
   ]
   ```

2. **TypeScript Interfaces**
   ```typescript
   // lib/types/course.ts
   export interface Course {
     id: string
     title: string
     level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
     description: string
     // ...
   }
   ```

3. **Custom Hooks for Data**
   ```typescript
   // hooks/useCourses.ts
   import { courses } from '@/lib/data/courses'

   export function useCourses() {
     return {
       courses,
       getCourseById: (id: string) => courses.find(c => c.id === id),
       // ...
     }
   }
   ```

### Form Handling

1. **React Hook Form + Zod**
   ```tsx
   import { useForm } from 'react-hook-form'
   import { zodResolver } from '@hookform/resolvers/zod'
   import { z } from 'zod'

   const schema = z.object({
     email: z.string().email(),
     password: z.string().min(8),
   })

   const form = useForm({
     resolver: zodResolver(schema),
   })
   ```

2. **Form Validation**
   - Use Zod schemas for validation
   - Display errors inline with form fields
   - Provide helpful error messages

### Testing Patterns

**Note**: Testing framework not yet configured. Future additions may include:

1. **Unit Testing**
   - Jest or Vitest for unit tests
   - React Testing Library for component tests

2. **Integration Testing**
   - Playwright or Cypress for E2E tests
   - Test critical user flows

3. **Type Checking**
   ```bash
   pnpm tsc --noEmit
   ```

### Code Quality

1. **ESLint**
   ```bash
   pnpm lint
   ```
   - Follow ESLint rules
   - Fix warnings before committing

2. **TypeScript Strict Mode**
   - All code must pass TypeScript strict mode
   - No `any` types unless absolutely necessary
   - Use proper type annotations

3. **Code Organization**
   - Follow the directory structure
   - Keep components focused and single-purpose
   - Extract reusable logic into hooks

## Build & Deployment

### Build Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

### Deployment Strategy

**Current**: Not deployed yet

**Recommended**: Vercel (native Next.js hosting)
- Automatic deployments from Git
- Edge network support
- Serverless functions ready
- Free tier available

**Alternative Options**:
- Netlify
- AWS Amplify
- Docker containers for self-hosting

### Environment-Specific Considerations

**Development**:
- Hot module replacement
- Source maps enabled
- Detailed error messages
- Fast refresh

**Production**:
- Minified code
- Optimized assets
- Error tracking (Sentry recommended)
- Analytics (Vercel Analytics recommended)

## Security Considerations

### Current State
- Frontend-only, minimal security concerns
- No sensitive data handling
- No authentication backend

### Future Security Measures
- Content Security Policy (CSP)
- XSS protection
- CSRF tokens for forms
- Secure authentication (JWT or session-based)
- Rate limiting for API calls
- Input validation and sanitization

## Performance Optimization

### Current Optimizations
- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Tailwind CSS purging for smaller bundle

### Future Optimizations
- Lazy loading for heavy components
- Virtual scrolling for long lists
- Service worker for offline support
- CDN for static assets
- Bundle analysis and optimization

## Monitoring & Analytics

**Current**: None configured

**Recommended Tools**:
- Vercel Analytics (built-in with Vercel)
- Google Analytics
- Sentry for error tracking
- Lighthouse CI for performance monitoring

## Troubleshooting

### Common Issues

1. **Tailwind classes not working**
   - Ensure `@import "tailwindcss"` is in `globals.css`
   - Check PostCSS configuration
   - Restart dev server

2. **TypeScript errors**
   - Run `pnpm tsc --noEmit` to check types
   - Ensure all dependencies are installed
   - Check tsconfig.json configuration

3. **Motion animations not working**
   - Ensure Motion is properly imported
   - Check browser console for errors
   - Verify component is wrapped correctly

4. **Shadcn components not styled**
   - Ensure `components.json` is correct
   - Check Tailwind CSS variables in `globals.css`
   - Verify component installation

### Getting Help

- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS documentation: https://tailwindcss.com/docs
- Check Shadcn UI documentation: https://ui.shadcn.com
- Check Motion documentation: https://motion.dev

## Version Control

### Git Workflow

- **Main branch**: `main` or `master`
- **Feature branches**: `feature/feature-name`
- **Bugfix branches**: `fix/bug-description`
- **Commit messages**: Conventional Commits format

### .gitignore

Already configured with Next.js defaults:
- `node_modules/`
- `.next/`
- `out/`
- `build/`
- `.DS_Store`
- `*.log`
