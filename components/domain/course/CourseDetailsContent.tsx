'use client';

import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { CourseHero } from './CourseHero';
import { InstructorProfile } from './InstructorProfile';
import { LearningOutcomes } from './LearningOutcomes';
import { CurriculumAccordion } from './CurriculumAccordion';
import { CourseReviews } from './CourseReviews';
import { CourseEnrollmentSidebar } from './CourseEnrollmentSidebar';
import { CourseDetails } from '@/lib/types/course';

interface CourseDetailsContentProps {
  course: CourseDetails;
}

export function CourseDetailsContent({ course }: CourseDetailsContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-[1280px] mx-auto px-6 py-8"
    >
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 mb-6" aria-label="Breadcrumb">
        <Link
          href="/"
          className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1"
        >
          <Home className="size-4" />
          Home
        </Link>
        <ChevronRight className="text-slate-400 size-4" />
        <Link
          href="/courses"
          className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
        >
          Japanese Courses
        </Link>
        <ChevronRight className="text-slate-400 size-4" />
        <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">
          {course.title}
        </span>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-8">
          <CourseHero course={course} />
          <InstructorProfile course={course} />
          <LearningOutcomes course={course} />
          <CurriculumAccordion course={course} />
          <CourseReviews course={course} />
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-1">
          <CourseEnrollmentSidebar course={course} />
        </div>
      </div>
    </motion.div>
  );
}
