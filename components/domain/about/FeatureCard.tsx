'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  bgColor: string
  hoverBgColor: string
  textColor: string
  index: number
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  bgColor,
  hoverBgColor,
  textColor,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800/50 p-10 rounded-3xl border border-stone-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
    >
      <div
        className={`size-14 ${bgColor} ${textColor} rounded-2xl flex items-center justify-center mb-6 ${hoverBgColor} group-hover:text-white transition-colors duration-300`}
      >
        <Icon className="size-7" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-[#1a1c1e] dark:text-white">
        {title}
      </h3>
      <p className="text-stone-500 dark:text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  )
}
