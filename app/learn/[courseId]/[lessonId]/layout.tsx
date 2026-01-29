import { LessonNavbar } from '@/components/layout/LessonNavbar'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

/**
 * Metadata for lesson pages
 */
export const metadata: Metadata = {
  title: 'Lesson Player - NihonGo Learn',
  description: 'Watch and learn Japanese lessons with our interactive video player. Access resources and ask questions.',
}

/**
 * Layout for lesson pages
 * Features LessonNavbar (with search) and Footer
 * Grid layout for video player and sidebar
 */
export default function LessonLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
      <LessonNavbar />
      <main className="flex-1 px-4 py-6 lg:px-20 xl:px-40 max-w-[1600px] mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
