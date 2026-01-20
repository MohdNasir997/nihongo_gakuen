'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

/**
 * ThemeProvider Component
 * Wraps the application with next-themes provider for theme management
 * 
 * Features:
 * - Automatic theme persistence to localStorage
 * - System theme detection and respect
 * - Prevents hydration mismatch with suppressHydrationWarning
 * - Smooth theme transitions
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
