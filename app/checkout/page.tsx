'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Clock, Headphones } from 'lucide-react';
import { CheckoutBreadcrumbs } from '@/components/domain/checkout/CheckoutBreadcrumbs';
import { OrderSummary } from '@/components/domain/checkout/OrderSummary';
import { PromoCodeSection } from '@/components/domain/checkout/PromoCodeSection';
import { PaymentForm } from '@/components/domain/checkout/PaymentForm';
import { getTeacherById } from '@/lib/data/teachers';
import { BookingDetails, PaymentFormData } from '@/lib/types/checkout';

export default function CheckoutPage() {
  // In a real app, these would come from URL params or state
  const teacherId = '1';
  const teacher = getTeacherById(teacherId);

  const [booking] = useState<BookingDetails>(
    teacher
      ? {
          teacherId: teacher.id,
          teacherName: teacher.name,
          teacherAvatar: teacher.avatar,
          specialty: teacher.specialties[0],
          date: 'Oct 24, 2023',
          time: '14:00 JST',
          hourlyRate: teacher.hourlyRate,
          serviceFee: 2.50,
          tax: 0.00,
          total: teacher.hourlyRate + 2.50,
        }
      : {
          teacherId: '1',
          teacherName: 'Teacher Name',
          teacherAvatar: '/assets/teacher_1.png',
          specialty: 'JLPT N1-N2 Mastery',
          date: 'Oct 24, 2023',
          time: '14:00 JST',
          hourlyRate: 45,
          serviceFee: 2.50,
          tax: 0.00,
          total: 47.50,
        }
  );

  const [promoDiscount, setPromoDiscount] = useState(0);

  const handleApplyPromo = (code: string) => {
    // Mock promo code logic
    if (code.toLowerCase() === 'welcome10') {
      setPromoDiscount(5.00);
    }
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    console.log('Payment submitted:', data);
    // In a real app, this would process the payment
    alert('Payment successful! Your lesson has been booked.');
  };

  const handleChangeLesson = () => {
    window.location.href = `/teachers/${teacherId}`;
  };

  const trustBadges = [
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is encrypted and secure',
    },
    {
      icon: Clock,
      title: '24h Cancellation',
      description: 'Free cancellation up to 24 hours before lesson',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our support team is here to help you anytime',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        {teacher && <CheckoutBreadcrumbs teacherName={teacher.name} />}

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
            Complete Your Booking
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Review your lesson details and complete the secure payment process
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Summary and Promo */}
          <div className="lg:col-span-1 space-y-6">
            <OrderSummary booking={booking} onChangeLesson={handleChangeLesson} />
            <PromoCodeSection onApplyPromo={handleApplyPromo} />
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-2">
            <PaymentForm onSubmit={handlePaymentSubmit} />
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Message (Hidden by default) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 hidden"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md mx-4 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-100">
              Booking Confirmed!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Your lesson has been successfully booked. You will receive a confirmation email shortly.
            </p>
            <button
              onClick={() => (window.location.href = '/dashboard')}
              className="w-full bg-primary dark:bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all"
            >
              Go to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
