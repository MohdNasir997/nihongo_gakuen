'use client'

import { motion } from 'motion/react'
import { PlayCircle, MessageCircle, PenTool, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: PlayCircle,
    title: 'Structured Video Courses',
    description: 'Expert-led lessons mapped to JLPT standards. Master grammar with bite-sized video modules.',
    linkText: 'Explore Curriculum',
    color: 'blue',
    href: '/courses'
  },
  {
    icon: MessageCircle,
    title: 'Live Language Exchange',
    description: 'Practice real-world Japanese with native speakers. Scheduled 1-on-1 calls to boost confidence.',
    linkText: 'Meet Tutors',
    color: 'green',
    href: '/community'
  },
  {
    icon: PenTool,
    title: 'Gamified Kanji Training',
    description: 'Our SRS-powered system helps you memorize 2,000+ characters with high-quality visual aids.',
    linkText: 'Try SRS Tool',
    color: 'orange',
    href: '#'
  }
]

const colorClasses = {
  blue: {
    iconBg: 'bg-[#f0f4ff] dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
    hoverBorder: 'hover:border-blue-500/30',
    linkColor: 'text-blue-600/80 dark:text-blue-400'
  },
  green: {
    iconBg: 'bg-[#f0fdf4] dark:bg-green-500/10',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-200 dark:hover:border-emerald-500/30',
    linkColor: 'text-emerald-600 dark:text-emerald-400'
  },
  orange: {
    iconBg: 'bg-[#fff7ed] dark:bg-orange-500/10',
    iconColor: 'text-orange-600 dark:text-orange-400',
    hoverBorder: 'hover:border-orange-200 dark:hover:border-orange-500/30',
    linkColor: 'text-orange-600 dark:text-orange-400'
  }
}

export function FeatureCards() {
  return (
    <section className="py-32 px-6 lg:px-40 bg-card-light/50 dark:bg-[#151719] border-y border-[#eeeae0] dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-6 mb-20 text-center items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1a1c1e] dark:text-white text-3xl lg:text-5xl font-bold leading-tight tracking-tight max-w-[800px] font-serif"
          >
            Everything you need to go from <span className="text-primary/70 italic font-serif">Beginner to Fluent</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-[600px] leading-relaxed"
          >
            Our holistic approach combines curriculum, conversation, and character practice in a distraction-free environment.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            
            return (
              <motion.a
                key={index}
                href={feature.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className={`group flex flex-col gap-8 rounded-2xl border border-[#eeeae0] dark:border-slate-800 bg-card-light dark:bg-background-dark p-10 ${colors.hoverBorder} transition-all duration-500 shadow-soft hover:shadow-organic`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`flex size-14 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconColor} transition-transform`}
                >
                  <Icon size={32} />
                </motion.div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#1a1c1e] dark:text-white text-xl font-bold leading-tight font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-2 font-bold text-sm">
                  <span className={colors.linkColor}>{feature.linkText}</span>
                  <ArrowRight className="size-[18px]" />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
