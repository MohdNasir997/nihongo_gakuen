'use client'

import { motion } from 'motion/react'

/**
 * FAQ data structure
 */
const FAQS = [
  {
    question: "Do you offer free trials for your courses?",
    answer:
      "Yes, every new student gets a 7-day free trial of our Pro Learner dashboard to explore all study materials and interactive lessons.",
  },
  {
    question: "How do I access the student community?",
    answer:
      "Once you subscribe, a unique invite link for our private Discord server will appear in your Student Dashboard under the Community tab.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can manage, pause, or cancel your subscription directly from your account settings at any time without any hidden fees.",
  },
] as const

export function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-32 pt-24 border-t border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Commonly Asked Questions
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          Quick answers to frequently asked questions about our platform and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {FAQS.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-0 size-7 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-900 dark:text-white font-bold text-xs">
              Q
            </div>
            <h5 className="font-bold text-slate-900 dark:text-white text-lg mb-4">
              {faq.question}
            </h5>
            <div className="h-px w-12 bg-primary/30 mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
