'use client';

import { motion } from 'motion/react';
import { Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BookingDetails } from '@/lib/types/checkout';

interface OrderSummaryProps {
  booking: BookingDetails;
  onChangeLesson?: () => void;
}

export function OrderSummary({ booking, onChangeLesson }: OrderSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
    >
      <h2 className="text-slate-900 dark:text-white text-xl font-bold p-6 border-b border-slate-200 dark:border-slate-800">
        1. Review Your Lesson
      </h2>

      <div className="p-6 space-y-6">
        {/* Lesson Detail Card */}
        <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <Avatar className="size-20 rounded-lg bg-center bg-cover flex-shrink-0 border-2 border-slate-200 dark:border-slate-700">
            <img src={booking.teacherAvatar} alt={booking.teacherName} />
          </Avatar>
          <div className="flex flex-col gap-1">
            <Badge className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded w-fit">
              {booking.specialty}
            </Badge>
            <p className="text-slate-900 dark:text-white text-base font-bold">
              {booking.teacherName} - {booking.specialty}
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
              <Edit className="w-4 h-4" />
              <span>Oct 24, 2023 | 14:00 JST</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-between text-slate-600 dark:text-slate-400">
            <span>60-minute Lesson Rate</span>
            <span>${booking.hourlyRate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400">
            <span>Platform Service Fee</span>
            <span>${booking.serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 dark:text-slate-400">
            <span>Tax</span>
            <span>${booking.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-900 dark:text-white font-bold text-xl pt-4 border-t border-slate-200 dark:border-slate-800">
            <span>Total Amount</span>
            <span className="text-primary">${booking.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Change Lesson Button */}
        {onChangeLesson && (
          <button
            onClick={onChangeLesson}
            className="text-primary text-xs font-bold mt-2 flex items-center gap-1 hover:underline"
          >
            <Edit className="w-3 h-3" />
            Change Lesson
          </button>
        )}
      </div>
    </motion.div>
  );
}
