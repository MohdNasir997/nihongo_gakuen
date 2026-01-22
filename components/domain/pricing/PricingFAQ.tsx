/**
 * PricingFAQ Component
 * FAQ accordion section (dark mode)
 */

'use client'

import { motion } from 'motion/react'
import { faqItems } from '@/lib/data/pricing'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function PricingFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 w-full px-4 max-w-3xl mx-auto"
    >
      <h2 className="text-foreground text-2xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl bg-card border border-border"
          >
            <AccordionTrigger className="px-6 py-4 text-foreground font-bold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-muted-foreground text-sm">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
