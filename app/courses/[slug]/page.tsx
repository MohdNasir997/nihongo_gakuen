import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/lib/data/courses';
import { CourseDetailsContent } from '@/components/domain/course/CourseDetailsContent';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailsContent course={course} />;
}
