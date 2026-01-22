import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - NihonGo Learn',
  description:
    'Choose the perfect plan for your Japanese learning journey. From free access to ultimate mastery, find the right fit for your goals.',
}

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
