'use client';

import { motion } from 'motion/react';
import { Star, Play, Verified } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Teacher } from '@/lib/types/teacher';

interface TeacherProfileHeaderProps {
  teacher: Teacher;
}

export function TeacherProfileHeader({ teacher }: TeacherProfileHeaderProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-blur rounded-3xl p-6 lg:p-10 flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
    >
      {/* Teacher Image */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-slate-700">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Verified Native Badge */}
        <div className="flex items-center gap-2 justify-center py-2 px-4 bg-primary/10 rounded-xl border border-primary/20 text-primary">
          <Verified className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Verified Native</span>
        </div>
      </div>

      {/* Teacher Info */}
      <div className="flex-1">
        {/* Name and Rating */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-slate-100">
              {teacher.name}
            </h1>
            <p className="text-primary font-medium">{teacher.title}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {teacher.rating}
              </span>
            </div>
            <span className="text-xs text-slate-400">{teacher.reviewCount} Reviews</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">
              Lessons Done
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {teacher.lessonsDone.toLocaleString()}+
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">
              Students
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {teacher.studentCount}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">
              Response
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {teacher.responseTime}
            </p>
          </div>
        </div>

        {/* Intro Video */}
        {teacher.videoIntroUrl && (
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 group cursor-pointer">
            <img
              src={teacher.avatar}
              alt="Video Intro Thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs font-medium bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-white">
              Introduction Video • {teacher.videoIntroDuration}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
