Here is a comprehensive `agents.md` file tailored for your Japanese e-learning project.

This file is designed to be placed in the root of your project. It serves as the context and rulebook for AI agents (like Cursor, Windsurf, or Copilot) to ensure they generate code that matches your specific architecture, tech stack (`motion`, Shadcn), and the source material from Google Stitch.

--- START OF FILE agents.md ---

# Project Context: Nihongo Learn (Japanese E-Learning Platform)

You are an expert Senior Frontend Engineer specializing in **Next.js (App Router)**, **TypeScript**, **Shadcn UI**, and **Framer Motion**.

We are building the **Frontend** of a Japanese e-learning platform.
The design source comes from "Google Stitch" exports, which provide raw HTML (`code.html`) and reference screenshots (`screen.png`) for various pages. the designs are in `designs/` directory.

## 🛠 Tech Stack

*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Library:** Shadcn UI (based on Radix UI)
*   **Animations:** Framer Motion (installed via `pnpm add motion`)
*   **Icons:** Lucide React
*   **Fonts:** Inter (English) + Noto Sans JP or Zen Kaku Gothic New (Japanese)
*   **Theme:** `next-themes` (Dark/Light mode support)

## ⚡️ Development Rules & Best Practices

### 1. The DRY Pattern (Don't Repeat Yourself)
*   **Atomic Components:** Do not duplicate UI logic. If a design pattern (e.g., a "Course Card", "Lesson Sidebar", or "JLPT Badge") appears in multiple Stitch exports, create a reusable component in `components/ui` or `components/domain`.
*   **Shared Layouts:** Use `layout.tsx` for persistent elements like the Navigation Bar and Footer. Do not re-import these in every page.
*   **Global Config:** Store shared variables (colors, font settings, navigation links) in a generic config file (e.g., `lib/config.ts`) rather than hardcoding them in components.

### 2. "Google Stitch" Conversion Workflow
The `code.html` provided in the directories is raw output. **DO NOT** copy-paste it directly.
1.  **Analyze:** Look at the `screen.png` to understand the visual hierarchy.
2.  **Identify:** Map visual elements to existing Shadcn components (e.g., Button, Card, Avatar, Badge, Accordion).
3.  **Reconstruct:** Rewrite the code using **Tailwind classes** and **Shadcn components**.
4.  **Discard:** Ignore the inline styles or specific class names from `code.html` if they conflict with Tailwind utility classes.

### 3. Animation Strategy (Framer Motion)
*   Use `import { motion } from 'motion/react'` (or `framer-motion`).
*   Wrap page transitions or interactive cards in `<motion.div>`.
*   **Constraint:** Keep animations subtle. Use standard variants (FadeIn, SlideUp) to maintain high performance.

### 4. Data Handling (Frontend Only Mode)
*   Since there is no backend yet, create **Mock Data** files in `lib/data/`.
*   Example: Create `lib/data/courses.ts` exporting an array of Course interfaces.
*   **Type Safety:** Always define TypeScript interfaces for your data (e.g., `interface Course`, `interface Lesson`).

## 📂 Directory to Route Mapping

Map the specific Stitch directories to this Next.js App Router structure:

| Stitch Folder Name | Next.js Route | Component Type |
| :--- | :--- | :--- |
| `nihongo_learn_homepage` | `app/page.tsx` | Landing Page |
| `about_us` | `app/about/page.tsx` | Static Page |
| `contact_us` | `app/contact/page.tsx` | Static Page |
| `courses_library_1` & `_2` | `app/courses/page.tsx` | Listing Page |
| `course_details__n5` | `app/courses/[slug]/page.tsx` | Dynamic Details |
| `active_lesson_player` | `app/learn/[courseId]/[lessonId]/page.tsx` | Player Logic |
| `create_account` | `app/auth/register/page.tsx` | Form Page |
| `language_exchange` | `app/community/page.tsx` | Social Feature |
| `pricing` | `app/pricing/page.tsx` | Static Page |

## 🎨 UI/Design Guidelines

*   **Dark/Light Mode:** The designs include specific folders for modes (e.g., `nihongo_learn_homepage_(dark_mode)`). Use Tailwind's `dark:` prefix to handle this.
    *   *Example:* `bg-white dark:bg-slate-950`
*   **Responsiveness:** Mobile-first approach.
    *   Base styles = Mobile.
    *   `md:` = Tablet.
    *   `lg:` = Desktop.
*   **Japanese Text:** Ensure CSS allows line breaking for Japanese text (`break-words` or specific CJK line-break rules).

## 📝 Tone & Persona

*   **Code Style:** Clean, modular, functional.
*   **Comments:** Explain complex logic, specifically around the "Language Exchange" matching algorithm mockups or video player state management.

--- END OF FILE agents.md ---