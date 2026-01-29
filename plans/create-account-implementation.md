# Create Account Page Implementation Plan

## Overview
Build the create account page based on `designs/create_account/` following the project's DRY principles, responsive design requirements, and existing component architecture.

## Design Analysis

### Visual Elements from `designs/create_account/code.html`
1. **Simplified Navbar**: Logo + "Log In" button (no navigation links)
2. **Registration Card**: Centered card with form
3. **Form Fields**:
   - Full Name
   - Email Address
   - Password (with visibility toggle)
   - Confirm Password (with visibility toggle)
4. **Submit Button**: "Sign Up" with primary color
5. **Social Login**: Google and GitHub buttons
6. **Footer Links**: Terms of Service & Privacy Policy
7. **Trust Indicators**: "Available in 15+ Languages" and "JLPT N5-N1 Curriculum"

### Responsive Design Requirements
- Mobile-first approach
- Card max-width: 480px
- Responsive padding and spacing
- Touch-friendly targets (44px minimum)

## Component Architecture

### Directory Structure
```
app/
  (auth)/
    layout.tsx          # Auth layout with simplified navbar
    register/
      page.tsx          # Register page
components/
  layout/
    AuthNavbar.tsx      # Simplified navbar for auth pages
  domain/
    auth/
      RegisterForm.tsx  # Registration form with validation
      SocialLoginButtons.tsx  # Google & GitHub login buttons
lib/
  schemas/
    auth.ts            # Zod validation schema for registration
```

### Component Relationships
```
RegisterPage (app/(auth)/register/page.tsx)
├── AuthNavbar (components/layout/AuthNavbar.tsx)
└── RegisterForm (components/domain/auth/RegisterForm.tsx)
    ├── Form Fields (Shadcn UI: Input, Label, Form)
    ├── Password Visibility Toggles (Lucide icons)
    ├── Submit Button (Shadcn UI: Button)
    ├── SocialLoginButtons (components/domain/auth/SocialLoginButtons.tsx)
    └── Footer Links
```

## Implementation Steps

### Step 1: Create Auth Schema
**File**: `lib/schemas/auth.ts`

Create Zod schema for registration form validation:
- `fullName`: 2-50 characters, trimmed
- `email`: Valid email format, lowercase
- `password`: Minimum 8 characters
- `confirmPassword`: Must match password

Export type: `RegisterFormData`

### Step 2: Create AuthNavbar Component
**File**: `components/layout/AuthNavbar.tsx`

Simplified navbar for auth pages:
- Logo (same as main Navbar)
- "Log In" button (links to `/auth/login` - to be created later)
- Theme toggle button
- Mobile menu with same buttons
- No navigation links (Courses, Exchange, About, Contact)

**DRY Consideration**: Reuse logo SVG and theme toggle logic from existing Navbar

### Step 3: Create RegisterForm Component
**File**: `components/domain/auth/RegisterForm.tsx`

Features:
- React Hook Form integration
- Zod validation
- Password visibility toggle (show/hide)
- Confirm password validation
- Form submission handler (mock)
- Error display
- Loading state

**Form Fields**:
1. Full Name (text input)
2. Email Address (email input)
3. Password (password input with visibility toggle)
4. Confirm Password (password input with visibility toggle)

**Icons**: Use Lucide React icons (Eye, EyeOff)

### Step 4: Create SocialLoginButtons Component
**File**: `components/domain/auth/SocialLoginButtons.tsx`

Two social login buttons:
1. Google button with Google logo SVG
2. GitHub button with Terminal icon from Lucide

**Features**:
- Hover states
- Loading state on click
- Mock authentication handler

### Step 5: Create Auth Layout
**File**: `app/(auth)/layout.tsx`

Layout for auth pages:
- Uses AuthNavbar (not full Navbar)
- No Footer (auth pages typically don't have footer)
- Centered content area
- Background color matching design

**Metadata**: Title and description for auth pages

### Step 6: Create Register Page
**File**: `app/(auth)/register/page.tsx`

Main registration page:
- Page metadata (title, description)
- Centered layout with max-width
- RegisterForm component
- Trust indicators at bottom
- Terms & Privacy links

**Responsive Design**:
- Mobile: Full width with padding
- Tablet: Centered with max-width
- Desktop: Same as tablet

## DRY Principle Compliance

### Reusable Components
1. **AuthNavbar**: Can be reused for login, password reset, and other auth pages
2. **SocialLoginButtons**: Can be reused for login page
3. **RegisterForm**: Can be adapted for login form (remove confirm password, full name)

### Shared Patterns
1. **Form Validation**: Follow same pattern as `lib/schemas/contact.ts`
2. **Form Structure**: Use Shadcn UI Form components (same as ContactForm)
3. **Theme Toggle**: Reuse logic from existing Navbar
4. **Logo**: Reuse SVG from existing Navbar

### Avoid Duplication
- Don't duplicate navbar logic - extract common parts
- Don't duplicate form validation patterns - use consistent Zod schemas
- Don't duplicate button styles - use Shadcn UI Button variants

## Responsive Design Strategy

### Breakpoints (Tailwind CSS)
- Mobile: Default (< 768px)
- Tablet: `md:` (768px - 1024px)
- Desktop: `lg:` (> 1024px)

### Mobile-First Approach
```css
/* Base styles - Mobile */
.card { padding: 1.5rem; }

/* Tablet */
@media (min-width: 768px) {
  .card { padding: 2rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .card { padding: 2.5rem; }
}
```

### Touch Targets
- All buttons: Minimum 44px height
- Inputs: 48px height (as per design)
- Interactive elements: Sufficient spacing

## Dark Mode Support

### Color Strategy
- Use Tailwind `dark:` prefix for dark mode styles
- Leverage CSS variables from `app/globals.css`
- Ensure contrast ratio meets WCAG AA standards

### Dark Mode Classes
```tsx
// Light mode
bg-white text-slate-900 border-slate-200

// Dark mode
dark:bg-slate-900 dark:text-white dark:border-slate-800
```

## Animation Strategy

### Motion (Framer Motion) Usage
- Page transition: Fade in on mount
- Form field focus: Subtle scale or border animation
- Button hover: Subtle scale or color transition
- Social buttons: Hover lift effect

### Animation Variants
```tsx
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
}
```

## Mock Authentication

### Registration Flow (Frontend Only)
1. User fills form
2. Form validation (client-side with Zod)
3. Submit button shows loading state
4. Simulate API call with `setTimeout`
5. Show success message or error
6. Redirect to dashboard or show error

### Social Login Flow
1. User clicks social button
2. Button shows loading state
3. Simulate OAuth flow with `setTimeout`
4. Show success message or error
5. Redirect to dashboard

## Testing Checklist

### Functionality
- [ ] Form validation works correctly
- [ ] Password visibility toggle works
- [ ] Confirm password matches password
- [ ] Social login buttons have loading state
- [ ] Form submission shows loading state
- [ ] Success/error messages display correctly

### Responsive Design
- [ ] Mobile layout looks correct
- [ ] Tablet layout looks correct
- [ ] Desktop layout looks correct
- [ ] Touch targets are sufficient on mobile
- [ ] No horizontal scroll on mobile

### Dark Mode
- [ ] Light mode colors are correct
- [ ] Dark mode colors are correct
- [ ] Contrast is sufficient in both modes
- [ ] Theme toggle works correctly

### Accessibility
- [ ] All form fields have labels
- [ ] Error messages are associated with fields
- [ ] Keyboard navigation works
- [ ] ARIA labels are present
- [ ] Focus states are visible

## Future Enhancements

### Additional Auth Pages
- Login page (`/auth/login`)
- Password reset page (`/auth/reset-password`)
- Email verification page (`/auth/verify-email`)

### Form Enhancements
- Password strength indicator
- Email availability check (debounced)
- Captcha integration (reCAPTCHA)
- Remember me checkbox

### Social Providers
- Add more social login options (Twitter, Facebook)
- Implement actual OAuth integration
- Add social account linking

## Dependencies

### Required Components (Already Installed)
- ✅ Button (Shadcn UI)
- ✅ Card (Shadcn UI)
- ✅ Input (Shadcn UI)
- ✅ Label (Shadcn UI)
- ✅ Form (Shadcn UI with React Hook Form)
- ✅ Lucide React (icons)

### Required Packages (Already Installed)
- ✅ React Hook Form
- ✅ Zod
- ✅ Motion (Framer Motion)
- ✅ next-themes (for theme toggle)

### No Additional Dependencies Needed
All required components and packages are already installed in the project.

## Files to Create

1. `lib/schemas/auth.ts` - Auth validation schema
2. `components/layout/AuthNavbar.tsx` - Simplified auth navbar
3. `components/domain/auth/RegisterForm.tsx` - Registration form component
4. `components/domain/auth/SocialLoginButtons.tsx` - Social login buttons
5. `app/(auth)/layout.tsx` - Auth layout
6. `app/(auth)/register/page.tsx` - Register page

## Files to Modify

None - all files are new

## Notes

- Follow existing code style and patterns from the project
- Use TypeScript strict mode
- Ensure all components are properly typed
- Add JSDoc comments for complex logic
- Test both light and dark modes
- Verify mobile responsiveness
