'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

interface PromoCodeSectionProps {
  onApplyPromo: (code: string) => void;
}

export function PromoCodeSection({ onApplyPromo }: PromoCodeSectionProps) {
  const [promoCode, setPromoCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleApply = () => {
    if (promoCode.trim()) {
      // Mock validation - in real app, this would check against API
      setIsValid(promoCode.toLowerCase() === 'welcome10');
      setIsApplied(true);
      onApplyPromo(promoCode);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm"
    >
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
        Promo Code
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={promoCode}
          onChange={e => setPromoCode(e.target.value)}
          disabled={isApplied}
          placeholder="Enter code"
          className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400"
        />
        <Button
          onClick={handleApply}
          disabled={isApplied || !promoCode.trim()}
          className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Apply
        </Button>
      </div>

      {/* Validation Messages */}
      {isValid === true && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-emerald-600 dark:text-emerald-400 mt-2"
        >
          Promo code applied! You saved ${5.00}
        </motion.p>
      )}
      {isValid === false && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-rose-600 dark:text-rose-400 mt-2"
        >
          Invalid promo code. Please try again.
        </motion.p>
      )}
    </motion.div>
  );
}
