'use client';

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CheckoutBreadcrumbsProps {
  teacherName: string;
}

export function CheckoutBreadcrumbs({ teacherName }: CheckoutBreadcrumbsProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 text-sm mb-6"
    >
      <Link href="/teachers" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
        Teachers
      </Link>
      <ChevronRight className="w-4 h-4 text-slate-400" />
      <Link href={`/teachers/${teacherName.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
        {teacherName}
      </Link>
      <ChevronRight className="w-4 h-4 text-slate-400" />
      <span className="text-slate-900 dark:text-white font-medium">Checkout</span>
    </motion.nav>
  );
}
