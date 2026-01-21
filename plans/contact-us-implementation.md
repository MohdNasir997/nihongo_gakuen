# Contact Us Page Implementation Plan

## Overview
Build the contact page (`/contact`) using Shadcn UI, Tailwind CSS, and Zod for form validation. The page includes a hero section, contact information cards, a contact form with validation, and an FAQ section.

## Design Analysis

### Page Structure
Based on `designs/contact_us/code.html`, the page consists of:

1. **Hero Section**
   - Headline: "Reach out to our Tokyo team"
   - Description text about JLPT courses and corporate training

2. **Contact Information Cards** (Left column)
   - Email card with icon and email address
   - Visit us card with Tokyo office address
   - Social media links (Facebook, Instagram)
   - Map image with location marker

3. **Contact Form** (Right column)
   - Full Name input
   - Work Email input
   - Subject dropdown (inquiry type)
   - Message textarea
   - Submit button
   - Privacy policy note

4. **FAQ Section**
   - Three commonly asked questions with answers

### Design Tokens
- Primary color: `#3c83f6` (blue)
- Background: `#f8fafc` (light slate)
- Dark mode support with `dark:` prefix
- Rounded corners: `rounded-xl` (0.75rem)
- Shadows: `shadow-sm` for cards

## Implementation Steps

### Step 1: Create Missing Shadcn UI Components

Create the following components in `components/ui/`:

#### 1.1 Input Component (`components/ui/input.tsx`)
```typescript
- Reusable input field with Tailwind styling
- Support for various input types (text, email, etc.)
- Focus states with ring styling
- Dark mode support
```

#### 1.2 Textarea Component (`components/ui/textarea.tsx`)
```typescript
- Reusable textarea for multi-line input
- Resizable option (resize-none for fixed size)
- Focus states with ring styling
- Dark mode support
```

#### 1.3 Label Component (`components/ui/label.tsx`)
```typescript
- Accessible label component
- Proper HTML label association
- Typography styling
- Dark mode support
```

#### 1.4 Select Component (`components/ui/select.tsx`)
```typescript
- Dropdown select component
- Based on Radix UI Select (via Shadcn)
- Custom styling to match design
- Dark mode support
```

### Step 2: Create Domain Components

Create the following components in `components/domain/contact/`:

#### 2.1 ContactHero (`components/domain/contact/ContactHero.tsx`)
```typescript
- Hero section with headline and description
- Motion animation for fade-in effect
- Responsive typography
- Dark mode support
```

#### 2.2 ContactInfoCards (`components/domain/contact/ContactInfoCards.tsx`)
```typescript
- Email card with icon and email link
- Visit us card with address
- Social media links with hover effects
- Map image with location overlay
- Motion animations for hover effects
- Dark mode support
```

#### 2.3 ContactForm (`components/domain/contact/ContactForm.tsx`)
```typescript
- Form with all required fields
- React Hook Form integration
- Zod validation schema
- Error message display
- Submit button with loading state
- Success message display
- Privacy policy note
- Dark mode support
```

#### 2.4 FAQSection (`components/domain/contact/FAQSection.tsx`)
```typescript
- Three FAQ items with Q&A
- Motion animations for fade-in
- Responsive grid layout
- Dark mode support
```

### Step 3: Create Contact Page Route

Create `app/contact/page.tsx`:
```typescript
- Import all domain components
- Assemble page layout
- Add motion animations for sections
- Ensure responsive design
- Dark mode support
```

### Step 4: Set Up Zod Validation Schema

Create `lib/schemas/contact.ts`:
```typescript
- Define validation schema for contact form
- Name: required, min 2 characters
- Email: required, valid email format
- Subject: required, must select an option
- Message: required, min 10 characters, max 500 characters
- Export schema and inferred type
```

### Step 5: Integrate React Hook Form

In `ContactForm.tsx`:
```typescript
- Import useForm hook from react-hook-form
- Import zodResolver for Zod integration
- Create form with proper field registration
- Add error handling and display
- Implement form submission handler
- Add loading state during submission
- Show success message after submission
```

### Step 6: Add Form Submission Handling

Create mock submission function:
```typescript
- Simulate API call with setTimeout
- Validate form data
- Return success/error response
- Handle network errors gracefully
```

### Step 7: Ensure Dark Mode Support

Throughout all components:
```typescript
- Use `dark:` prefix for dark mode styles
- Test both light and dark modes
- Ensure proper contrast ratios
- Use CSS variables from globals.css
```

### Step 8: Add Animations with Motion

Use Motion for:
```typescript
- Page fade-in on load
- Section animations on scroll
- Card hover effects
- Form field focus animations
- Button hover states
```

## Component Hierarchy

```
app/contact/page.tsx
├── ContactHero
├── ContactInfoCards
│   ├── EmailCard
│   ├── VisitUsCard
│   ├── SocialLinks
│   └── MapCard
├── ContactForm
│   ├── Input (name)
│   ├── Input (email)
│   ├── Select (subject)
│   ├── Textarea (message)
│   └── Button (submit)
└── FAQSection
    └── FAQItem[]
```

## Data Structures

### Contact Form Data
```typescript
{
  name: string        // "Yuki Tanaka"
  email: string       // "yuki@example.com"
  subject: string     // "JLPT Course Inquiry"
  message: string     // "Please provide details..."
}
```

### FAQ Data
```typescript
[
  {
    question: "Do you offer free trials for your courses?",
    answer: "Yes, every new student gets a 7-day free trial..."
  },
  // ... more FAQs
]
```

## File Structure

```
app/
└── contact/
    └── page.tsx

components/
├── ui/
│   ├── input.tsx        # NEW
│   ├── textarea.tsx     # NEW
│   ├── label.tsx        # NEW
│   └── select.tsx       # NEW
└── domain/
    └── contact/
        ├── ContactHero.tsx          # NEW
        ├── ContactInfoCards.tsx     # NEW
        ├── ContactForm.tsx          # NEW
        └── FAQSection.tsx           # NEW

lib/
└── schemas/
    └── contact.ts       # NEW
```

## Key Technical Decisions

### 1. Form Validation
- **Choice**: Zod + React Hook Form
- **Reasoning**: Type-safe validation, excellent TypeScript support, popular ecosystem
- **Impact**: All form fields must have proper validation rules

### 2. UI Components
- **Choice**: Shadcn UI components
- **Reasoning**: Consistent with project architecture, accessible, customizable
- **Impact**: Follow existing component patterns (Button, Card)

### 3. Animations
- **Choice**: Motion (Framer Motion)
- **Reasoning**: Already installed, declarative API, good performance
- **Impact**: Use motion.div for animations, keep animations subtle

### 4. Dark Mode
- **Choice**: CSS variables + dark: prefix
- **Reasoning**: Consistent with project setup, Tailwind native support
- **Impact**: All components must include dark mode styles

### 5. Form Submission
- **Choice**: Mock API with setTimeout
- **Reasoning**: Frontend-only architecture, no backend yet
- **Impact**: Simulate realistic loading states and responses

## Testing Checklist

- [ ] All form fields validate correctly
- [ ] Error messages display properly
- [ ] Form submission works with valid data
- [ ] Loading state shows during submission
- [ ] Success message displays after submission
- [ ] Dark mode looks correct in all components
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Animations are smooth and performant
- [ ] Accessibility: keyboard navigation, screen reader support
- [ ] All links are functional

## Dependencies to Install

Already installed:
- `react-hook-form`
- `zod`
- `motion`
- `lucide-react`

No additional dependencies needed.

## Notes

1. **Icons**: Use Lucide React icons (Mail, MapPin, Facebook, Instagram, ArrowForward)
2. **Map Image**: Use the Google Maps image from the design or a placeholder
3. **Social Links**: Use SVG icons from the design or Lucide equivalents
4. **Privacy Policy**: Link to `/privacy` (create placeholder if needed)
5. **Form Submission**: Mock submission with 1-2 second delay to simulate API call

## Future Enhancements

1. Add reCAPTCHA for spam protection
2. Implement file upload for attachments
3. Add phone number field
4. Create real backend API endpoint
5. Add email notification system
6. Implement analytics tracking for form submissions
