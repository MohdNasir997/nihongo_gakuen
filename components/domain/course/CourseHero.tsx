import { Badge } from '@/components/ui/badge';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';

interface CourseHeroProps {
  course: CourseDetails;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 bg-slate-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.heroImage})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <Badge className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded mb-4 inline-block">
          {course.level} Level
        </Badge>
        <h1 className="text-white text-4xl font-black leading-tight tracking-tight mb-3">
          {course.title}
        </h1>
        <p className="text-slate-300 text-lg max-w-xl">{course.longDescription}</p>
      </div>
    </motion.div>
  );
}
