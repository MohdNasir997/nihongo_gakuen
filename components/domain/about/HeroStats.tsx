'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'

interface StatItem {
  value: string
  label: string
  icon: LucideIcon
  bgColor: string
  textColor: string
}

interface HeroStatsProps {
  stats: readonly StatItem[]
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 border border-stone-100 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${stat.bgColor} p-2 rounded-lg ${stat.textColor}`}>
            <stat.icon className="size-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1a1c1e] dark:text-white">{stat.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
