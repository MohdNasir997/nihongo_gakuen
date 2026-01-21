import { CourseCard } from './CourseCard';
import { Course } from '@/lib/types/course';

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
}
