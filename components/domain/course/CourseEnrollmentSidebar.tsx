import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';
import {
  Video,
  FileText,
  Infinity,
  Smartphone,
  Award,
  PlayCircle,
  Clock,
  Users,
} from 'lucide-react';

interface CourseEnrollmentSidebarProps {
  course: CourseDetails;
}

export function CourseEnrollmentSidebar({ course }: CourseEnrollmentSidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-24 space-y-6"
    >
      {/* Enrollment Card */}
      <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
        {/* Preview Video */}
        <div className="aspect-video rounded-lg mb-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${course.previewVideo})` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <PlayCircle className="text-white text-6xl relative z-10 drop-shadow-lg size-24" />
          <span className="absolute bottom-3 text-white text-xs font-bold px-3 py-1 bg-black/60 rounded-full">
            Preview this course
          </span>
        </div>

        {/* Price Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black">${course.price.toFixed(2)}</span>
            {course.originalPrice && (
              <>
                <span className="text-slate-400 line-through text-lg">${course.originalPrice.toFixed(2)}</span>
                {course.discountPercent && (
                  <span className="text-green-500 font-bold text-sm">{course.discountPercent}% OFF</span>
                )}
              </>
            )}
          </div>
          {course.discountDeadline && (
            <p className="text-red-500 text-xs font-bold flex items-center gap-1">
              <Clock className="size-4" />
              {course.discountDeadline} left at this price!
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full bg-primary dark:bg-blue-500 hover:bg-primary/90 text-white font-bold h-12 rounded-xl transition-all flex items-center justify-center gap-2"
            size="lg"
          >
            Enroll Now
          </Button>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold h-12 rounded-xl transition-all flex items-center justify-center gap-2"
            size="lg"
            variant="default"
          >
            Available with Subscription
          </Button>
          <Button
            variant="outline"
            className="w-full border border-slate-200 dark:border-slate-700 font-bold h-12 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            size="lg"
          >
            Add to Wishlist
          </Button>
        </div>

        {/* Course Includes */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <p className="font-bold text-sm">This course includes:</p>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-3">
              <Video className="text-slate-400 size-5" />
              <span>{course.includes.videoHours} on-demand video</span>
            </li>
            <li className="flex items-center gap-3">
              <FileText className="text-slate-400 size-5" />
              <span>{course.includes.resources} downloadable resources</span>
            </li>
            <li className="flex items-center gap-3">
              <Infinity className="text-slate-400 size-5" />
              <span>Full lifetime access</span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone className="text-slate-400 size-5" />
              <span>Access on mobile and TV</span>
            </li>
            <li className="flex items-center gap-3">
              <Award className="text-slate-400 size-5" />
              <span>Certificate of completion</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Corporate Learning Box */}
      <Card className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-primary" />
          <p className="font-bold text-sm">Corporate Learning</p>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          Want to train your team in Japanese? Get your group access to 1,000+ courses.
        </p>
        <Button
          variant="link"
          className="text-xs font-bold text-primary hover:underline p-0 h-auto"
        >
          NihonGo for Business →
        </Button>
      </Card>
    </motion.div>
  );
}
