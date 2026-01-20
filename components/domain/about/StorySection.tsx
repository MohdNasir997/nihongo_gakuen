'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ABOUT_CONTENT, ABOUT_CONFIG } from './about-content'

export function StorySection() {
  const { story } = ABOUT_CONTENT

  return (
    <section className={`${ABOUT_CONFIG.sectionPadding} px-6 lg:px-8 overflow-hidden relative`}>
      {/* Decorative Background SVG */}
      <div className="absolute top-0 right-0 -mr-24 opacity-5 pointer-events-none">
        <svg className="w-96 h-96" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="0.5" />
          <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className={`${ABOUT_CONFIG.maxContainerWidth} mx-auto relative z-10`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#1a1c1e] dark:text-white">
            {story.heading}
          </h2>
          <div className="w-12 h-1 bg-[#bc002d] mx-auto" />
        </motion.div>

        {/* Story Content */}
        <div className="space-y-8 text-lg text-stone-700 dark:text-slate-300 leading-loose text-justify font-light">
          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {story.paragraphs[0]}
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {story.paragraphs[1]}
          </motion.p>

          {/* Image and Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-8 items-center py-6"
          >
            <div className="w-1/2 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800">
              <Image
                src="/assets/aboutushero.png"
                alt="Our story background"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 italic text-stone-500 dark:text-slate-400 border-l-2 border-stone-200 dark:border-slate-700 pl-6">
              &ldquo;{story.quote}&rdquo;
            </div>
          </motion.div>

          {/* Third Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {story.paragraphs[2]}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
