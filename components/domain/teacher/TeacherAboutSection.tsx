'use client';

import { motion } from 'motion/react';
import { User, GraduationCap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Teacher } from '@/lib/types/teacher';

interface TeacherAboutSectionProps {
  teacher: Teacher;
}

const specialtyColors: Record<string, string> = {
  'JLPT N1-N2 Mastery': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Honorifics (Keigo)': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Business Etiquette': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Academic Writing': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Intensive Speaking': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Grammar': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Business': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Conversation': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Culture': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Academic': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Kanji': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Beginners': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Kids': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

export function TeacherAboutSection({ teacher }: TeacherAboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="card-blur rounded-3xl p-6 lg:p-10 space-y-10 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
    >
      {/* About Me */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <User className="w-6 h-6 text-primary" />
          About Me
        </h2>
        <p className="text-slate-400 dark:text-slate-400 leading-relaxed">
          {teacher.bio}
        </p>
      </div>

      {/* Teaching Style */}
      {teacher.teachingStyle && (
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <GraduationCap className="w-6 h-6 text-primary" />
            Teaching Style
          </h2>
          <p className="text-slate-400 dark:text-slate-400 leading-relaxed">
            {teacher.teachingStyle}
          </p>
        </div>
      )}

      {/* Specialties */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-slate-100">
          <Award className="w-6 h-6 text-primary" />
          Specialties
        </h2>
        <div className="flex flex-wrap gap-3">
          {teacher.specialties.map((specialty, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 ${
                specialtyColors[specialty] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'
              }`}
            >
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
