'use client';

import { useState } from 'react';
import { CourseHeroSection } from '@/components/domain/course/CourseHeroSection';
import { CourseFilters } from '@/components/domain/course/CourseFilters';
import { CourseGrid } from '@/components/domain/course/CourseGrid';
import { Pagination } from '@/components/domain/course/Pagination';
import { courses } from '@/lib/data/courses';
import { JLPTLevel } from '@/lib/types/course';

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'All Levels'>('All Levels');
  const [selectedKanjiFocus, setSelectedKanjiFocus] = useState('All Topics');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = selectedLevel === 'All Levels' 
    ? courses 
    : courses.filter(course => course.level === selectedLevel);

  const coursesPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8">
        <CourseHeroSection />
        
        <CourseFilters
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedKanjiFocus={selectedKanjiFocus}
          onKanjiFocusChange={setSelectedKanjiFocus}
        />
        
        <CourseGrid courses={paginatedCourses} />
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
