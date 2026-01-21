import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Cousrses - NihonGo Learn',
  description:
    'NihonGo Learn is a platform for learning Japanese language and culture.',
}


export default function CourseLayout({
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
