import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CourseDetails } from '@/lib/types/course';
import { motion } from 'motion/react';
import { PlayCircle, FileText } from 'lucide-react';

interface CurriculumAccordionProps {
  course: CourseDetails;
}

export function CurriculumAccordion({ course }: CurriculumAccordionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Curriculum</h2>
        <span className="text-sm text-slate-500">
          {course.stats.modules} Modules • {course.stats.lessons} Lessons • {course.stats.duration}
        </span>
      </div>
      <Accordion type="multiple" className="space-y-3">
        {course.modules.map((module) => (
          <AccordionItem
            key={module.id}
            value={module.id}
            className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="w-full flex items-center justify-between p-5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left [&[data-state=open]:bg-slate-50 dark:[data-state=open]:bg-slate-800/50">
              <div className="flex items-center gap-4">
                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {String(module.number).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{module.title}</p>
                  <p className="text-xs text-slate-500">
                    {module.lessonsCount} lessons • {module.duration}
                  </p>
                </div>
              </div>
            
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 bg-white dark:bg-slate-900 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between text-sm py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded px-2 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    {lesson.type === 'video' ? (
                      <PlayCircle className="text-slate-400 size-5 group-hover:text-primary transition-colors" />
                    ) : (
                      <FileText className="text-slate-400 size-5 group-hover:text-primary transition-colors" />
                    )}
                    <span className="text-slate-900 dark:text-white">{lesson.title}</span>
                  </div>
                  {lesson.type === 'video' ? (
                    <span className="text-slate-400">{lesson.duration}</span>
                  ) : (
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded uppercase font-bold">
                      PDF
                    </span>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
