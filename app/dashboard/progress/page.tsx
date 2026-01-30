'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { detailedProgress } from '@/lib/data/progress';
import { dailyGoals } from '@/lib/data/goals';
import { weeklyActivity } from '@/lib/data/activity';

export default function ProgressPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          My Progress
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
          A detailed overview of your Japanese language journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* JLPT Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-card-bg border-border-soft shadow-paper rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-6 w-full text-left">
              Goal: JLPT N3
            </h3>
            <div className="relative w-40 sm:w-48 h-40 sm:h-48 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-border-soft opacity-20"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={`${detailedProgress.overall.percentage * 4.4} 440`}
                  strokeLinecap="round"
                  className="text-primary"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="absolute inset-4 bg-card-bg rounded-full flex flex-col items-center justify-center border border-border-soft shadow-inner">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  {detailedProgress.overall.percentage}%
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-tighter">
                  Completed
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-white dark:text-white font-semibold">
                Intermediate Mastery
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                320 / 492 Grammar points learned
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="bg-card-bg border-border-soft shadow-paper rounded-2xl p-6 flex flex-col lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                Weekly Activity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-500">
                    Learning
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-soft-green" />
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-500">
                    Review
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-end justify-between gap-3 min-h-[160px] px-1">
              {weeklyActivity.map((day, index) => (
                <div key={day.day} className="w-full flex flex-col gap-1 items-center">
                  <div className="w-full flex flex-col gap-0.5 justify-end h-32">
                    <div
                      className={`w-full rounded-sm transition-all ${
                        day.isToday
                          ? 'bg-primary shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                          : 'bg-primary/40'
                      }`}
                      style={{ height: `${day.learning || day.value}%` }}
                    />
                    <div
                      className={`w-full rounded-sm transition-all ${
                        day.isToday ? 'bg-soft-green' : 'bg-soft-green/40'
                      }`}
                      style={{ height: `${day.review || (day.value * 0.4)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-600 dark:text-slate-600 font-bold mt-2">
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Daily Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="bg-card-bg border-border-soft shadow-paper rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                Daily Goals
              </h3>
              <span className="text-[10px] font-bold text-soft-green bg-soft-green/10 px-2 py-1 rounded-lg">
                {dailyGoals.filter((g) => g.completed).length}/{dailyGoals.length} Complete
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {dailyGoals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-3 group cursor-pointer ${
                    !goal.completed ? 'hover:bg-white/5 dark:hover:bg-white/5 rounded-lg p-1 -m-1' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      goal.completed
                        ? 'bg-soft-green/10 text-soft-green'
                        : 'border border-border-soft dark:border-border-soft bg-white/5 dark:bg-white/5 group-hover:border-primary/50 transition-colors'
                    }`}
                  >
                    {goal.completed && <Check className="h-[14px] w-[14px] font-bold" />}
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      goal.completed
                        ? 'text-slate-300 dark:text-slate-300'
                        : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-400 transition-colors'
                    }`}
                  >
                    {goal.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border border-dashed border-border-soft dark:border-border-soft rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-500 hover:text-primary hover:border-primary/30 transition-all">
              + Add Custom Goal
            </button>
          </Card>
        </motion.div>

        {/* Skill Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <h3 className="text-lg font-bold text-white dark:text-white">Skill Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Vocabulary', value: 62, icon: 'translate', level: 14, color: 'primary', current: 1240, total: 2000, unit: 'words', iconColor: 'text-primary' },
              { name: 'Listening', value: 30, icon: 'record_voice_over', level: 8, color: 'soft-green', current: 12, total: 40, unit: 'hours', iconColor: 'text-soft-green' },
              { name: 'Reading', value: 56, icon: 'menu_book', level: 11, color: 'purple-400', current: 85, total: 150, unit: 'texts', iconColor: 'text-purple-400' },
              { name: 'Grammar', value: 82, icon: 'edit_note', level: 18, color: 'orange-400', current: 198, total: 240, unit: 'items', iconColor: 'text-orange-400' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-card-bg border-border-soft shadow-paper rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-xl ${skill.iconColor}`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-bold text-slate-200 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                    <Badge className={`text-[10px] font-bold bg-${skill.color}/20 text-${skill.color}`}>
                      LV. {skill.level}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-500">
                      <span>PROGRESS</span>
                      <span>
                        {skill.current} / {skill.total} {skill.unit}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full w-[${skill.value}%] rounded-full ${
                          skill.color === 'primary'
                            ? 'bg-primary'
                            : skill.color === 'soft-green'
                            ? 'bg-soft-green'
                            : skill.color === 'purple-400'
                            ? 'bg-purple-400/80'
                            : 'bg-orange-400/80'
                        }`}
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
