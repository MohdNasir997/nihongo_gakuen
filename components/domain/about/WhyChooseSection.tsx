'use client'

import { motion } from 'motion/react'
import { ABOUT_CONTENT, ABOUT_CONFIG } from './about-content'
import { FeatureCard } from './FeatureCard'

export function WhyChooseSection() {
  const { features } = ABOUT_CONTENT

  return (
    <section className={`${ABOUT_CONFIG.sectionPadding} px-6 lg:px-8 bg-stone-50/50 dark:bg-slate-900/30`}>
      <div className={`${ABOUT_CONFIG.maxContainerWidth} mx-auto`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1a1c1e] dark:text-white">
            Why NihonGo Learn?
          </h2>
          <p className="text-stone-500 dark:text-slate-400 max-w-2xl mx-auto italic">
            {ABOUT_CONTENT.story.subtitle}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              hoverBgColor={feature.hoverBgColor}
              textColor={feature.textColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
