'use client'

import { ContactHero } from '@/components/domain/contact/ContactHero'
import { ContactInfoCards } from '@/components/domain/contact/ContactInfoCards'
import { ContactForm } from '@/components/domain/contact/ContactForm'
import { FAQSection } from '@/components/domain/contact/FAQSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-[#0b111a]">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <ContactInfoCards />

          {/* Right Column - Contact Form */}
          <div className="lg:pl-6">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6">
        <FAQSection />
      </div>
    </main>
  )
}
