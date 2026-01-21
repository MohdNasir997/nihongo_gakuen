import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Contact Us - NihonGo Learn',
  description:
    'Get in touch with our Tokyo team. Have questions about JLPT courses or corporate training? We are here to help you on your Japanese learning journey.',
}


export default function ContactLayout({
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
