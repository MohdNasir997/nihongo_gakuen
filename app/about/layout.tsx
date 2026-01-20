import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About Us - NihonGo Learn',
  description:
    'Learn about NihonGo Learn\'s mission to bridge cultures through Japanese language education. Discover our story, expert teachers, and proven methodology.',
}


export default function AboutLayout({
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
  );
}