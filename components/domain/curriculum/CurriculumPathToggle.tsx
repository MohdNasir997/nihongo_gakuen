'use client';

import { motion } from 'motion/react';

interface CurriculumPathToggleProps {
  selectedPath: 'standard' | 'accelerated';
  onPathChange: (path: 'standard' | 'accelerated') => void;
}

export function CurriculumPathToggle({ selectedPath, onPathChange }: CurriculumPathToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl"
    >
      <button
        onClick={() => onPathChange('standard')}
        className={`flex-1 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
          selectedPath === 'standard'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        Standard Path
      </button>
      <button
        onClick={() => onPathChange('accelerated')}
        className={`flex-1 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
          selectedPath === 'accelerated'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        Accelerated
      </button>
    </motion.div>
  );
}
