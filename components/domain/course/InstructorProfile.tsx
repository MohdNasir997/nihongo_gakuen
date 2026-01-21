import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';

interface InstructorProfileProps {
  course: CourseDetails;
}

export function InstructorProfile({ course }: InstructorProfileProps) {
  const initials = course.instructor.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Avatar */}
        <Avatar className="size-24 sm:size-32 shrink-0 border-4 border-slate-100 dark:border-slate-800">
          {course.instructor.avatar ? (
            <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} className="object-cover" />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{course.instructor.name}</h3>
          <p className="text-primary font-semibold text-sm mb-2">{course.instructor.title}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {course.instructor.bio}
          </p>

          {/* Credentials Badges */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {course.instructor.credentials.map((credential, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium"
              >
                {credential}
              </Badge>
            ))}
          </div>
        </div>

        {/* View Profile Button */}
        <Button
          variant="outline"
          className="shrink-0 px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          View Profile
        </Button>
      </Card>
    </motion.div>
  );
}
