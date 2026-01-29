'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Teacher, CalendarDay, TimeSlot } from '@/lib/types/teacher';
import { getCalendarDays, getTimeSlots } from '@/lib/data/teachers';

interface TeacherBookingSidebarProps {
  teacher: Teacher;
}

export function TeacherBookingSidebar({ teacher }: TeacherBookingSidebarProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const calendarDays = getCalendarDays();
  const timeSlots = getTimeSlots();

  return (
    <aside className="w-full lg:w-96">
      <div className="sticky top-24 space-y-6">
        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="card-blur rounded-3xl p-6 border-2 border-primary/20 bg-primary/5"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-400 dark:text-slate-400 font-medium">Pricing</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">
                ${teacher.hourlyRate}
              </span>
              <span className="text-slate-400 dark:text-slate-400 text-sm">
                /hr
              </span>
            </div>
          </div>

          {/* Calendar */}
          <div className="mb-6">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-3">
              Select Date
            </p>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-2 font-bold text-slate-500 dark:text-slate-600">
              <span>MO</span>
              <span>TU</span>
              <span>WE</span>
              <span>TH</span>
              <span>FR</span>
              <span>SA</span>
              <span>SU</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  disabled={day.isPast}
                  onClick={() => !day.isPast && setSelectedDay(day.day)}
                  className={`aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                    day.isPast
                      ? 'text-slate-600 cursor-not-allowed'
                      : day.isSelected
                      ? 'bg-primary dark:bg-blue-500 text-white shadow-lg shadow-primary/30'
                      : 'hover:bg-primary/20'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-3">
              Available Times (JST)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  disabled={!slot.isAvailable}
                  onClick={() => slot.isAvailable && setSelectedTime(slot.time)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    !slot.isAvailable
                      ? 'border border-slate-700 bg-slate-800 text-slate-600 cursor-not-allowed'
                      : slot.isSelected
                      ? 'border-2 border-primary bg-primary/20 text-primary'
                      : 'border border-slate-700 bg-slate-800 hover:border-primary'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <Button
            size="lg"
            className="w-full bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 group"
            disabled={!selectedDay || !selectedTime}
          >
            Book a Lesson
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trial Lesson */}
          <p className="text-[11px] text-center text-slate-500 dark:text-slate-300">
            Trial lesson?{' '}
            <a className="text-primary underline font-bold hover:text-blue-400 transition-colors" href="#">
              Book a 30m session for ${Math.round(teacher.hourlyRate * 0.33)}
            </a>
          </p>
        </motion.div>

        {/* Teacher Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="card-blur rounded-3xl p-6 bg-slate-900/50"
        >
          <h4 className="text-sm font-bold mb-4 text-slate-900 dark:text-slate-100">Teacher Achievements</h4>
          <div className="space-y-4">
            {teacher.achievements?.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-slate-300 dark:text-slate-300">{achievement.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
