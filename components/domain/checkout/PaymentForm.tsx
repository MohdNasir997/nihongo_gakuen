'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Lock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaymentMethodType, PaymentFormData } from '@/lib/types/checkout';

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('card');
  const [formData, setFormData] = useState<PaymentFormData>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  });

  const paymentMethods: { type: PaymentMethodType; icon: any; label: string }[] = [
    { type: 'card', icon: CreditCard, label: 'Card' },
    { type: 'paypal', icon: CreditCard, label: 'PayPal' },
    { type: 'applepay', icon: CreditCard, label: 'Apple Pay' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
    >
      <h2 className="text-slate-900 dark:text-white text-xl font-bold p-6 border-b border-slate-200 dark:border-slate-800">
        2. Payment Method
      </h2>

      <div className="p-6">
        {/* Payment Method Tabs */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {paymentMethods.map(method => (
            <button
              key={method.type}
              onClick={() => setSelectedMethod(method.type)}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                selectedMethod === method.type
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <method.icon className="w-6 h-6" />
              <span className="text-xs font-bold">{method.label}</span>
            </button>
          ))}
        </div>

        {/* Card Form */}
        {selectedMethod === 'card' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Cardholder Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Cardholder Name
              </label>
              <input
                type="text"
                value={formData.cardholderName}
                onChange={e => setFormData({ ...formData, cardholderName: e.target.value })}
                placeholder="Full Name on Card"
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400"
              />
            </div>

            {/* Card Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                  <div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[8px] font-bold text-slate-600 dark:text-slate-400">
                    VISA
                  </div>
                </div>
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={e => setFormData({ ...formData, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  CVV
                </label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={e => setFormData({ ...formData, cvv: e.target.value })}
                  placeholder="123"
                  maxLength={3}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Save Card */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="save-card"
                checked={formData.saveCard}
                onChange={e => setFormData({ ...formData, saveCard: e.target.checked })}
                className="rounded text-primary focus:ring-primary bg-slate-800 border-slate-700"
              />
              <label htmlFor="save-card" className="text-sm text-slate-500 dark:text-slate-400">
                Save this card for future bookings
              </label>
            </div>

            {/* Review Policy */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Info className="text-primary text-lg" />
                Review Policy
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Free cancellation up to 24 hours before lesson starts. Cancellations made within 24 hours are non-refundable. By clicking &quot;Complete Purchase&quot;, you agree to our{' '}
                <a className="text-primary underline" href="#">
                  Terms of Service
                </a>
                .
              </p>
            </div>

            {/* Complete Purchase Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 transform active:scale-[0.98]"
            >
              <Lock className="w-5 h-5" />
              Complete Purchase - $47.50
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
