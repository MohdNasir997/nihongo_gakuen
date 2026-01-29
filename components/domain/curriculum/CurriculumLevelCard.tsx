'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CurriculumLevel } from '@/lib/types/curriculum';

interface CurriculumLevelCardProps {
  level: CurriculumLevel;
  onEnroll: (levelId: string) => void;
}

const levelColors: Record<string, string> = {
  N5: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  N4: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  N3: 'bg-primary/5 text-primary',
  N2: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  N1: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
};

export function CurriculumLevelCard({ level, onEnroll }: CurriculumLevelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`relative rounded-2xl overflow-hidden border-2 transition-all ${
        level.isPopular
          ? 'border-primary bg-primary/5'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-primary/50'
      }`}
    >
      {/* Popular Badge */}
      {level.isPopular && (
        <div className="absolute top-0 right-0 px-4 py-1 bg-primary dark:bg-blue-400 text-white text-[10px] font-bold uppercase rounded-bl-xl">
          Popular
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Level Badge and Duration */}
        <div className="flex justify-between items-start mb-6">
          <Badge
            variant="outline"
            className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              levelColors[level.level] || 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            Level {level.level}
          </Badge>
          <span className="text-slate-400 dark:text-slate-400 text-xs font-medium">
            {level.lessonsCount} Lessons • {level.duration}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {level.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
          {level.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {level.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className={`w-full font-bold transition-all ${
            level.isPopular
              ? 'bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-primary/30'
              : 'bg-slate-100  dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
          onClick={() => onEnroll(level.id)}
        >
          {level.isPopular ? 'Book Trial Session' : 'Start Learning'}
        </Button>
      </div>
    </motion.div>
  );
}
