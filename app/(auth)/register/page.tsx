import { RegisterForm } from '@/components/domain/auth/RegisterForm'
import { Globe, Verified } from 'lucide-react'
import type { Metadata } from 'next'

/**
 * Page metadata
 */
export const metadata: Metadata = {
  title: 'Create Account - NihonGo Learn',
  description: 'Start your journey to Japanese fluency today. Create your free account and access our comprehensive JLPT-aligned curriculum.',
}

/**
 * Registration page
 * Features centered card layout with form and trust indicators
 * Responsive design with mobile-first approach
 */
export default function RegisterPage() {
  return (
    <div className="w-full max-w-[480px]">
      {/* Registration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
        {/* Headline Section */}
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold text-center pb-2">
            Create an account
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal text-center">
            Start your journey to Japanese fluency today.
          </p>
        </div>

        {/* Registration Form */}
        <RegisterForm />
      </div>

      {/* Decorative Trust Indicators */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs">
          <Globe className="size-4" />
          <span>Available in 15+ Languages</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs">
          <Verified className="size-4" />
          <span>JLPT N5-N1 Curriculum</span>
        </div>
      </div>
    </div>
  )
}
