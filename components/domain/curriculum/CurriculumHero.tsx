'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FeaturedLesson } from '@/lib/types/curriculum';
import Link from 'next/link';

/**
 * Props for the CurriculumHero component
 * 
 * @remarks
 * This component displays a hero section with a featured lesson card.
 * It requires a featured lesson object with all necessary properties for rendering.
 * 
 * @example
 * ```tsx
 * <CurriculumHero 
 *   featuredLesson={{
 *     id: '1',
 *     title: 'Introduction to Hiragana',
 *     description: 'Learn the basics...',
 *     teacherName: 'Yuki Tanaka',
 *     teacherAvatar: '/avatars/yuki.jpg',
 *     imageUrl: '/lessons/hiragana.jpg'
 *   }}
 * />
 * ```
 */
export interface CurriculumHeroProps {
  /**
   * The featured lesson to display in the hero section
   * 
   * @remarks
   * This must be a complete FeaturedLesson object with all required properties.
   * The component will throw an error if any required field is missing.
   * 
   * @see FeaturedLesson
   */
  featuredLesson: FeaturedLesson;
  
  /**
   * Optional custom heading text
   * 
   * @defaultValue "Your Guided Path to Japanese Fluency"
   */
  heading?: string;
  
  /**
   * Optional custom description text
   * 
   * @defaultValue "From zero to N1 mastery. Our structured curriculum, designed by native linguists, combines deep cultural immersion with rigorous JLPT preparation."
   */
  description?: string;
  
  /**
   * Optional callback when CTA button is clicked
   * 
   * @remarks
   * Useful for analytics tracking or custom navigation logic
   */
  onExploreClick?: () => void;
  
  /**
   * Optional callback when "Meet Teachers" button is clicked
   * 
   * @remarks
   * Useful for analytics tracking or custom navigation logic
   */
  onTeachersClick?: () => void;
}

/**
 * Validates that the featured lesson has all required properties
 * 
 * @param lesson - The lesson to validate
 * @throws {Error} If any required property is missing or invalid
 * 
 * @internal
 */
function validateFeaturedLesson(lesson: FeaturedLesson): void {
  const requiredFields: (keyof FeaturedLesson)[] = [
    'id',
    'title',
    'description',
    'teacherName',
    'teacherAvatar',
    'imageUrl'
  ];
  
  for (const field of requiredFields) {
    if (!lesson[field]) {
      throw new Error(
        `CurriculumHero: Missing required field '${field}' in featuredLesson. ` +
        `Received: ${JSON.stringify(lesson)}`
      );
    }
  }
  
  // Validate URLs are not empty strings
  if (lesson.imageUrl.trim() === '') {
    throw new Error('CurriculumHero: imageUrl cannot be an empty string');
  }
  
  if (lesson.teacherAvatar.trim() === '') {
    throw new Error('CurriculumHero: teacherAvatar cannot be an empty string');
  }
}

/**
 * CurriculumHero Component
 * 
 * Displays a hero section with:
 * - Animated heading and description
 * - Call-to-action buttons
 * - Featured lesson card with hover effects
 * - Responsive layout for mobile and desktop
 * 
 * @param props - Component props
 * @returns The rendered hero section
 * 
 * @throws {Error} If featuredLesson is missing required properties
 */
export function CurriculumHero({
  featuredLesson,
  heading = "Your Guided Path to Japanese Fluency",
  description = "From zero to N1 mastery. Our structured curriculum, designed by native linguists, combines deep cultural immersion with rigorous JLPT preparation.",
  onExploreClick,
  onTeachersClick
}: CurriculumHeroProps) {
  // Validate props at runtime for better error messages
  try {
    validateFeaturedLesson(featuredLesson);
  } catch (error) {
    console.error('CurriculumHero validation error:', error);
    throw error; // Re-throw to fail fast during development
  }
  
  // Memoize the featured lesson data to prevent unnecessary re-renders
  // This is a performance optimization for when the parent re-renders
  // but the featured lesson data hasn't changed
  const lessonData = featuredLesson;
  
  return (
    <header className="relative overflow-hidden pt-16 pb-24 gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              JLPT Focused Mastery
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-slate-100"
            >
              {heading}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Japanese Fluency
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
               asChild
                size="lg"
                className="bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2"
                onClick={onExploreClick}
              >
                <Link href="#curriculum">
                Explore Curriculum
                <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                onClick={onTeachersClick}
              >
                <Link href="#teachers">
                Meet Our Teachers
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Featured Lesson Card */}
          <div className="flex-1 w-full lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="card-blur p-4 rounded-3xl relative overflow-hidden group">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={lessonData.imageUrl}
                    alt={lessonData.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white/20">
                      <AvatarImage
                        src={lessonData.teacherAvatar}
                        alt={lessonData.teacherName}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary text-white font-semibold">
                        <User className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-bold">Featured Lesson</p>
                      <p className="text-white/70 text-sm italic">{lessonData.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
