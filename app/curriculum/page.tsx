'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CurriculumHero } from '@/components/domain/curriculum/CurriculumHero';
import { CurriculumStats } from '@/components/domain/curriculum/CurriculumStats';
import { CurriculumPathToggle } from '@/components/domain/curriculum/CurriculumPathToggle';
import { CurriculumLevelCard } from '@/components/domain/curriculum/CurriculumLevelCard';
import { TeacherCard } from '@/components/domain/teacher/TeacherCard';
import {
  curriculumLevels,
  curriculumStats,
  featuredLesson,
  getFeaturedTeachers,
} from '@/lib/data/curriculum';
import { CurriculumPath } from '@/lib/types/curriculum';

export default function CurriculumPage() {
  const [selectedPath, setSelectedPath] = useState<CurriculumPath>('standard');
  const featuredTeachers = getFeaturedTeachers(3);

  const handleEnroll = (levelId: string) => {
    // In a real app, this would navigate to enrollment or checkout
    console.log('Enroll in level:', levelId);
    window.location.href = `/checkout?level=${levelId}`;
  };

  const handleViewTeacher = (teacherId: string) => {
    window.location.href = `/teachers/${teacherId}`;
  };

  const handleBookTeacher = (teacherId: string) => {
    window.location.href = `/teachers/${teacherId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <CurriculumHero featuredLesson={featuredLesson} />

      {/* Stats Section */}
      <CurriculumStats stats={curriculumStats} />

      {/* Curriculum Levels Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='curriculum'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Learning Path
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Select the JLPT level that matches your current proficiency and start your journey to Japanese fluency.
            </p>
          </motion.div>

          {/* Path Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <CurriculumPathToggle
              selectedPath={selectedPath}
              onPathChange={setSelectedPath}
            />
          </motion.div>

          {/* Level Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {curriculumLevels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CurriculumLevelCard level={level} onEnroll={handleEnroll} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:via-transparent dark:to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
              Why Our Curriculum?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Our structured approach ensures systematic progress from beginner to expert level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'JLPT-Aligned',
                description: 'Curriculum designed specifically for JLPT N5-N1 exam preparation',
              },
              {
                icon: Target,
                title: 'Goal-Oriented',
                description: 'Clear milestones and measurable progress tracking',
              },
              {
                icon: Award,
                title: 'Expert Teachers',
                description: 'Learn from certified native Japanese instructors',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: '98% pass rate with thousands of successful students',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='teachers'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Expert Teachers
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Learn from certified native Japanese instructors with years of teaching experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TeacherCard
                  teacher={teacher}
                  onViewProfile={handleViewTeacher}
                  onBook={handleBookTeacher}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = '/teachers')}
              className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary px-8 py-3.5 rounded-xl font-bold transition-all"
            >
              View All Teachers
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of students who have achieved Japanese fluency with our structured curriculum.
            </p>
            <Button
              size="lg"
              onClick={() => (window.location.href = '/teachers')}
              className="bg-white dark:bg-slate-800 text-primary hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
