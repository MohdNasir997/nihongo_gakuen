'use client'
import { TeacherAboutSection } from "./TeacherAboutSection";
import { TeacherProfileHeader } from "./TeacherProfileHeader";
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TeacherReviews } from '@/components/domain/teacher/TeacherReviews';
import { TeacherBookingSidebar } from '@/components/domain/teacher/TeacherBookingSidebar';
import { Teacher } from '@/lib/types/teacher';

interface TeacherPageProps {
  teacher: Teacher;
}

export default function teacherPage({teacher} : TeacherPageProps) {
    const handleContact = () => {
      // In a real app, this would open a chat or contact form
      console.log('Contact teacher:', teacher.id);
    };
  
    return (
         <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teachers
          </Button>
        </motion.div>

        {/* Teacher Profile Header */}
        <TeacherProfileHeader teacher={teacher} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - About and Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <TeacherAboutSection teacher={teacher} />

            {teacher.reviews && teacher.reviews.length > 0 && (
              <TeacherReviews reviews={teacher.reviews} totalReviewCount={teacher.reviewCount} />
            )}

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card-blur rounded-3xl p-6 lg:p-10 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <MessageSquare className="w-6 h-6 text-primary" />
                Send a Message
              </h2>
              <p className="text-slate-400 dark:text-slate-400 mb-6">
                Have questions before booking? Send a message to {teacher.name} to discuss your learning goals.
              </p>
              <Button
                onClick={handleContact}
                className="w-full bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-xl shadow-primary/25 transition-all"
              >
                Send Message
              </Button>
            </motion.section>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <TeacherBookingSidebar teacher={teacher} />
          </div>
        </div>
        </div>
      
    )
}