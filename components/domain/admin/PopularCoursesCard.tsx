import { PopularCourse } from '@/lib/types/admin';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'motion/react';

interface PopularCoursesCardProps {
  courses: PopularCourse[];
}

export default function PopularCoursesCard({ courses }: PopularCoursesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="bg-card border-border">
        <div className="p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-4">Popular Courses</h2>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-card-foreground">
                        {course.title}
                      </h3>
                      <Badge className="bg-primary/20 text-primary text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {course.students} students enrolled
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Progress value={course.capacity} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {course.capacity}% capacity
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
