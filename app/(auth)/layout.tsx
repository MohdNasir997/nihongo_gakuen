import { AuthNavbar } from '@/components/layout/AuthNavbar'
import type { Metadata } from 'next'

/**
 * Metadata for authentication pages
 */
export const metadata: Metadata = {
  title: 'Create Account - NihonGo Learn',
  description: 'Start your journey to Japanese fluency today. Create your free account and access our comprehensive JLPT-aligned curriculum.',
}

/**
 * Layout for authentication pages
 * Features simplified navbar (no navigation links) and no footer
 * Auth pages typically have a focused, centered layout
 */
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <AuthNavbar />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
