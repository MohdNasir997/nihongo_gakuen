'use client'

import { motion } from 'motion/react'
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export function ContactInfoCards() {
  return (
    <div className="flex flex-col gap-8">
      {/* Email Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1"
      >
        <div className="flex gap-6">
          <div className="size-14 rounded-xl bg-slate-900 dark:bg-primary flex items-center justify-center shrink-0">
            <Mail className="text-white dark:text-black text-2xl" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mb-1">
              Email us
            </h4>
            <p className="text-slate-500 dark:text-slate-400 mb-3 font-medium">
              Available Mon-Fri, 9am-6pm JST.
            </p>
            <a
              className="text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4"
              href="mailto:hello@nihongolearn.com"
            >
              hello@nihongolearn.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Visit Us Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1"
      >
        <div className="flex gap-6">
          <div className="size-14 rounded-xl bg-slate-900 dark:bg-primary flex items-center justify-center shrink-0">
            <MapPin className="text-white dark:text-black text-2xl" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-xl mb-1">
              Visit us
            </h4>
            <p className="text-slate-500 dark:text-slate-400 mb-3 font-medium">
              Our headquarters in the heart of Tokyo.
            </p>
            <address className="not-italic text-slate-900 dark:text-white font-bold leading-relaxed">
              2-chome-1-1 Nihonbashi, Chuo City,
              <br />
              Tokyo 103-0027, Japan
            </address>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-4 px-2"
      >
        <h4 className="font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-[0.2em] mb-6">
          Connect with us
        </h4>
        <div className="flex gap-4">
          <a
            className="size-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            href="#"
            aria-label="Facebook"
          >
            <Facebook className="size-6" />
          </a>
          <a
            className="size-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            href="#"
            aria-label="Instagram"
          >
            <Instagram className="size-6" />
          </a>
        </div>
      </motion.div>

      {/* Map Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative group bg-white dark:bg-slate-900 p-2 shadow-lg"
      >
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img
            alt="Map showing Tokyo office location"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtvldIv1373VjRnhs3l6MJ611ZI9snRjC8syCnzMBx0CH5c_xcU5wzxZ3-N-0_g3rdTY4hPp7jy7N1ptu9B_w7qKvMwZcleQ2UKe9A4Z25fJrk7KPL4b0GbjxB9qTqzsJpSV4zHtPRRStoOu3vKXGP_HVrv-zcrGE4h19eHt41HmqbRtFz80_zwb3Mu4GwUK-Xk6N9HFgiUtNu5r4izIG8iVW-BFdmEWfF_gGhV8-ORzfic0sgNsz6OO3UVDnKEeG7XCBCVmg7FzU"
          />
          <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center pointer-events-none group-hover:bg-transparent transition-all">
            <div className="bg-white dark:bg-slate-900 px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-slate-100 dark:border-slate-700">
              <MapPin className="text-primary dark:text-primary text-2xl" />
              <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                Nihonbashi, Tokyo
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
