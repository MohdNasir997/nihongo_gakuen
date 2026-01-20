'use client'

import { motion } from 'motion/react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-40 bg-background-light">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div className="flex flex-col gap-3">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary/60 font-bold uppercase tracking-[0.2em] text-[10px]"
            >
              Student Voices
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#1a1c1e] dark:text-white text-3xl lg:text-4xl font-bold font-serif"
            >
              Success Stories
            </motion.h2>
          </div>
          
          <div className="flex gap-3">
            <button aria-label="Previous testimonial" className="flex size-12 items-center justify-center rounded-full border border-[#eeeae0] dark:border-slate-700 bg-card-light dark:bg-slate-800 hover:bg-[#f5f2eb] dark:hover:bg-slate-700 transition-all">
              <ChevronLeft className="size-6" />
            </button>
            <button aria-label="Next testimonial" className="flex size-12 items-center justify-center rounded-full border border-[#eeeae0] dark:border-slate-700 bg-card-light dark:bg-slate-800 hover:bg-[#f5f2eb] dark:hover:bg-slate-700 transition-all">
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-10 overflow-x-auto pb-8 scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="flex-none w-[380px] flex flex-col gap-8 p-10 bg-card-light dark:bg-[#1a2332] rounded-2xl shadow-soft border border-[#eeeae0] dark:border-slate-800 transition-all hover:shadow-organic"
            >
              <div className="flex text-[#8b7355]/40">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4.5 fill-[#8b7355]" />
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-serif italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div 
                  className="size-12 rounded-full border-2 border-[#eeeae0] bg-center bg-cover"
                  style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                ></div>
                <div>
                  <p className="text-[#1a1c1e] dark:text-white font-bold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
