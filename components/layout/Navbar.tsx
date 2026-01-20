'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'

/**
 * Navigation link configuration
 * Centralized array for maintainability and DRY principle
 */
const NAVIGATION_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/community', label: 'Exchange' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  /**
   * Prevent hydration mismatch by only rendering theme-dependent UI after mount
   * next-themes handles this internally, but we add this for the icon rendering
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
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e4db] dark:border-slate-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 lg:px-40 py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tight font-serif text-[#1a1c1e] dark:text-white">
            NihonGo Learn
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Button variant="secondary" size="default" className="min-w-25">
            Login
          </Button>
          <Button size="default" className="min-w-25 dark:bg-blue-400 dark:hover:bg-blue-500">
            Sign Up
          </Button>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center rounded-lg h-10 w-10 text-slate-400 hover:text-primary transition-all"
          >
            {mounted && isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden flex items-center  p-2 justify-center rounded-lg h-10 w-10 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all bg-blue-500"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-background-dark border-b border-[#e8e4db] dark:border-slate-800 px-6 py-4">
          <nav className="flex flex-col gap-4 mb-4" aria-label="Mobile navigation">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Button variant="secondary" size="default" className="w-full">
              Login
            </Button>
            <Button size="default" className="w-full dark:bg-blue-400 dark:hover:bg-blue-500">
              Sign Up
            </Button>
            <Button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-slate-600 hover:text-primary transition-all"
            >
              {mounted && isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
              <span className="text-sm font-medium">Toggle Theme</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
