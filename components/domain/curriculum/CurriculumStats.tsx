'use client';

import { motion } from 'motion/react';
import { CurriculumStats as CurriculumStatsType } from '@/lib/types/curriculum';

interface CurriculumStatsProps {
  stats: CurriculumStatsType;
}

export function CurriculumStats({ stats }: CurriculumStatsProps) {
  const statItems = [
    { label: 'Active Students', value: stats.activeStudents },
    { label: 'Pass Rate', value: stats.passRate },
    { label: 'Native Teachers', value: stats.teacherCount },
    { label: 'Video Lessons', value: stats.videoLessons },
  ];

  return (
    <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-extrabold text-primary mb-2">
                {item.value}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
