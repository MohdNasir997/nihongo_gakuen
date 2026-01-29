'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'

/**
 * Simplified navigation bar for authentication pages
 * Features logo, login button, and theme toggle
 * No navigation links (unlike main Navbar)
 */
export function AuthNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  /**
   * Prevent hydration mismatch by only rendering theme-dependent UI after mount
   */
  useState(() => {
    setMounted(true)
  })

  /**
   * Optimized theme toggle with useCallback
   * Leverages next-themes for automatic persistence and system theme detection
   */
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  /**
   * Optimized menu toggle with useCallback
   * Prevents unnecessary re-renders
   */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  /**
   * Determine if current theme is dark
   * Handles the case where theme is 'system' by checking systemTheme
   */
  const isDark = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7ecf4] dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 text-primary">
          <div className="size-6">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-[#0d131c] dark:text-white">
            NihonGo Learn
          </h2>
        </Link>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Already have an account?
          </span>
          <Button
            variant="outline"
            size="default"
            className="min-w-[84px] h-10"
            asChild
          >
            <Link href="/auth/login">Log In</Link>
          </Button>
          <Button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex p-2 items-center justify-center rounded-lg h-10 w-10 text-slate-400 hover:text-primary transition-all"
            variant="ghost"
          >
            {mounted && isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex p-2 items-center justify-center rounded-lg h-10 w-10 text-slate-400 hover:text-primary transition-all"
            variant="ghost"
          >
            {mounted && isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="flex items-center p-2 justify-center rounded-lg h-10 w-10"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-[#e7ecf4] dark:border-slate-800 px-6 py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?
              </span>
            </div>
            <Button
              variant="outline"
              size="default"
              className="w-full h-10"
              asChild
            >
              <Link href="/auth/login">Log In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
