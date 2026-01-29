'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Users, Star, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TeacherCard } from '@/components/domain/teacher/TeacherCard';
import { teachers, filterTeachers, getTeachersByLevel } from '@/lib/data/teachers';
import { TeacherFilter } from '@/lib/types/teacher';

export default function TeachersPage() {
  const [filters, setFilters] = useState<TeacherFilter>({
    searchQuery: '',
    jlptLevel: 'All',
    lessonType: 'All',
    availability: 'All',
  });

  const filteredTeachers = filterTeachers(teachers, filters);

  const handleViewProfile = (id: string) => {
    window.location.href = `/teachers/${id}`;
  };

  const handleBook = (id: string) => {
    window.location.href = `/teachers/${id}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 dark:from-primary/10 dark:via-transparent dark:to-blue-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Users className="w-3 h-3 mr-2" />
              Expert Native Instructors
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-slate-100">
              Find Your Perfect{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Japanese Teacher
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8">
              Connect with certified native Japanese instructors who specialize in JLPT preparation,
              business Japanese, conversation practice, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>{teachers.filter(t => t.availabilityStatus === 'available').length} Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>Average {teachers.reduce((acc, t) => acc + t.rating, 0) / teachers.length} Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{teachers.reduce((acc, t) => acc + t.lessonsDone, 0).toLocaleString()}+ Lessons</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Filter Teachers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 block">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search by name, specialty, or title..."
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            {/* JLPT Level */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 block">
                JLPT Level
              </label>
              <div className="flex flex-wrap gap-2">
                {['All', 'N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                  <Button
                    key={level}
                    variant={filters.jlptLevel === level ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilters({ ...filters, jlptLevel: level })}
                    className={filters.jlptLevel === level ? 'bg-primary hover:bg-blue-600' : ''}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 block">
                Availability
              </label>
              <div className="flex gap-2">
                <Button
                  variant={filters.availability === 'All' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilters({ ...filters, availability: 'All' })}
                  className={filters.availability === 'All' ? 'bg-primary hover:bg-blue-600' : ''}
                >
                  All
                </Button>
                <Button
                  variant={filters.availability === 'available' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilters({ ...filters, availability: 'available' })}
                  className={filters.availability === 'available' ? 'bg-primary hover:bg-blue-600' : ''}
                >
                  Available
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Teachers Grid */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-between items-center mb-6"
        >
          <p className="text-slate-600 dark:text-slate-400">
            Showing <span className="font-bold text-slate-900 dark:text-slate-100">{filteredTeachers.length}</span>{' '}
            of {teachers.length} teachers
          </p>
          {filteredTeachers.length === 0 && (
            <p className="text-slate-500 dark:text-slate-500 italic">No teachers match your filters</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <TeacherCard
                teacher={teacher}
                onViewProfile={handleViewProfile}
                onBook={handleBook}
                variant={index === 0 ? 'featured' : 'default'}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
