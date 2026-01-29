'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Menu, X, Sun, Moon, Search, Bell, Settings } from 'lucide-react'

/**
 * Navigation links for lesson pages
 */
const LESSON_NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/courses', label: 'Courses' },
  { href: '/community', label: 'Community' },
] as const

/**
 * Navigation bar for lesson pages
 * Features logo, search bar, navigation links, notifications/settings buttons, and user avatar
 * Reuses logo SVG and theme toggle logic from existing Navbar
 */
export function LessonNavbar() {
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
   */
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  /**
   * Optimized menu toggle with useCallback
   */
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  /**
   * Determine if current theme is dark
   */
  const isDark = mounted && (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a212c] px-6 py-3 lg:px-10">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-[#0d131c] dark:text-white">
            NihonGo Learn
          </h2>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex relative h-10 w-64 items-center">
          <Search className="absolute left-3 text-gray-400 size-4" />
          <Input
            type="text"
            placeholder="Search lessons..."
            className="w-full rounded-lg border-none bg-gray-100 dark:bg-gray-800 pl-10 text-sm focus:ring-2 focus:ring-primary dark:text-white"
          />
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {LESSON_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  link.href === '/courses' ? 'text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Settings"
            >
              <Settings className="size-5" />
            </Button>
          </div>
          <Avatar className="size-10 border border-gray-200 dark:border-gray-800">
            <AvatarImage src="/assets/student_1.png" alt="Student profile" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1a212c] border-b border-gray-200 dark:border-gray-800 px-6 py-4">
          {/* Mobile Search */}
          <div className="relative h-10 w-full items-center mb-4">
            <Search className="absolute left-3 text-gray-400 size-4" />
            <Input
              type="text"
              placeholder="Search lessons..."
              className="w-full rounded-lg border-none bg-gray-100 dark:bg-gray-800 pl-10 text-sm focus:ring-2 focus:ring-primary dark:text-white"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 mb-4">
            {LESSON_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  link.href === '/courses' ? 'text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 justify-start gap-2"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
              <span>Notifications</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 justify-start gap-2"
              aria-label="Settings"
            >
              <Settings className="size-5" />
              <span>Settings</span>
            </Button>
            <Avatar className="size-10 border border-gray-200 dark:border-gray-800 mx-auto">
              <AvatarImage src="/assets/student_1.png" alt="Student profile" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </header>
  )
}
