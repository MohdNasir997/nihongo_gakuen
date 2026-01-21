import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Course } from '@/lib/types/course';
import { motion } from 'motion/react';
import Link from 'next/link';
interface CourseCardProps {
  course: Course;
}

const getBadgeVariant = (color: Course['badgeColor']) => {
  switch (color) {
    case 'primary':
      return 'default';
    case 'indigo':
      return 'secondary';
    case 'red':
      return 'destructive';
    case 'black':
      return 'outline';
    default:
      return 'default';
  }
};

const getBadgeClass = (color: Course['badgeColor']) => {
  switch (color) {
    case 'primary':
      return 'bg-primary text-white';
    case 'indigo':
      return 'bg-indigo-600 text-white';
    case 'red':
      return 'bg-red-600 text-white';
    case 'black':
      return 'bg-black text-white border border-white/20';
    default:
      return 'bg-primary text-white';
  }
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col h-full">
        {/* Course Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${course.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <Badge
            className={`absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg ${getBadgeClass(course.badgeColor)}`}
            variant={getBadgeVariant(course.badgeColor)}
          >
            {course.level}
          </Badge>
        </div>

        {/* Course Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          {/* Instructor Info */}
          <div className="flex items-center gap-2 mb-6 text-muted-foreground text-sm">
            <Avatar className="size-6">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
                </svg>
              </AvatarFallback>
            </Avatar>
            <span>
              {course.instructor.name} • {course.lessons}
            </span>
          </div>

          {/* Price and CTA */}
          <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
            <span className="text-2xl font-black text-primary">
              ${course.price.toFixed(2)}
            </span>
            <Button
              asChild
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all"
            >
              <Link href={'/courses/n5-beginner-japanese'}>
              View Course
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
