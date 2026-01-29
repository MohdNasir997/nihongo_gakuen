'use client';

import { motion } from 'motion/react';
import { Star, StarHalf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Teacher } from '@/lib/types/teacher';

interface TeacherCardProps {
  teacher: Teacher;
  onViewProfile?: (id: string) => void;
  onBook?: (id: string) => void;
  variant?: 'default' | 'featured';
}

export function TeacherCard({ teacher, onViewProfile, onBook, variant = 'default' }: TeacherCardProps) {
  const availabilityColor = teacher.availabilityStatus === 'available' ? 'bg-green-500' : 'bg-slate-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-primary/50 transition-all ${
        variant === 'featured' ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      {/* Teacher Image */}
      <div className="relative aspect-[4/3]">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-full h-full object-cover"
        />
        {/* Availability Indicator */}
        <div
          className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 ${availabilityColor}`}
          title={teacher.availabilityStatus === 'available' ? 'Available Now' : 'Away'}
        />
        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {teacher.isNative && (
            <Badge className="bg-slate-900/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-white border border-white/10">
              NATIVE
            </Badge>
          )}
          <Badge className="bg-primary/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-white border border-white/10">
            {teacher.level}
          </Badge>
        </div>
      </div>

      {/* Teacher Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
            {teacher.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold text-slate-300 dark:text-slate-400">
              {teacher.rating} ({teacher.reviewCount})
            </span>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4">
          {teacher.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-6">
          {teacher.specialties.slice(0, 2).map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-semibold"
            >
              {specialty}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {onViewProfile && (
            <Button
              variant="outline"
              size="sm"
              className="py-2.5 rounded-xl text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              onClick={() => onViewProfile(teacher.id)}
            >
              View Profile
            </Button>
          )}
          {onBook && (
            <Button
              size="sm"
              className="py-2.5 rounded-xl text-xs font-bold bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-primary/20 transition-all"
              onClick={() => onBook(teacher.id)}
            >
              Book Session
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
