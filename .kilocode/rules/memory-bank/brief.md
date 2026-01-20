Here is a concise yet comprehensive project brief optimized for **Kilo Code’s memory bank**. You should save this as `project_brief.md` or paste it directly into the project context/memory.

***

# Project Brief: Nihongo Learn (Frontend)

## 1. Overview
We are building the frontend of a Japanese e-learning platform ("Nihongo Learn") using **Next.js** and **Shadcn UI**. The platform serves English speakers learning Japanese (and vice versa) with video courses, progress tracking, and language exchange features.

## 2. Technical Stack
*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS + Shadcn UI
*   **Animation:** `motion` (Framer Motion)
*   **Icons:** Lucide React
*   **Theme:** Dark/Light mode support (`next-themes`)

## 3. Current Objective
Convert raw "Google Stitch" design exports (directories containing `code.html` and `screen.png`) into a clean, component-based Next.js application.
**Note:** We are currently **Frontend Only**. All backend logic (Auth, DB) must be simulated with **Mock Data** and interfaces.

## 4. Design Source & Asset Strategy
The project root contains folders exported from Google Stitch.
*   **Do not** copy-paste `code.html`. It is raw output.
*   **Do** use `screen.png` as the visual target.
*   **Do** refactor the design into atomic Shadcn components and Tailwind utility classes.
*   **Do** implement responsive design (Mobile First) and Dark Mode variants (`dark:`) based on the folder names.

## 5. Route Mapping (Stitch → Next.js)
Map the flat Stitch directories to the following App Router structure:

| Stitch Source Folder | Target Route | Function |
| :--- | :--- | :--- |
| `nihongo_learn_homepage` | `/` | Landing Page |
| `courses_library_1` & `_2` | `/courses` | Course Catalog |
| `course_details__n5` | `/courses/[slug]` | Course Overview |
| `active_lesson_player` | `/learn/[courseId]/[lessonId]` | Video Player |
| `language_exchange` | `/community` | Social/Matching |
| `create_account` | `/auth/register` | Signup |
| `pricing` | `/pricing` | Subscription Plans |
| `about_us` | `/about` | Static Info |
| `contact_us` | `/contact` | Contact Form |

## 6. Development Guidelines
1.  **DRY Pattern:** If a UI element (like a specific "Lesson Card") appears in multiple Stitch folders, create a reusable component in `@/components`.
2.  **Mock Data:** Store data in `@/lib/data` (e.g., `courses.ts`, `users.ts`). Do not hardcode content inside page components.
3.  **Animations:** Use `motion` for subtle page transitions and interactive elements (hover states, modal entry).
4.  **Layouts:** Use `layout.tsx` for the persistent Navbar and Footer to avoid code duplication.