/**
 * Checkout-related type definitions
 */

export type PaymentMethodType = 'card' | 'paypal' | 'applepay';

export interface BookingDetails {
  teacherId: string;
  teacherName: string;
  teacherAvatar: string;
  specialty: string;
  date: string;
  time: string;
  hourlyRate: number;
  serviceFee: number;
  tax: number;
  total: number;
}

export interface PaymentMethod {
  type: PaymentMethodType;
  isDefault?: boolean;
}

export interface PaymentFormData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  saveCard: boolean;
}

export interface PriceBreakdown {
  lessonRate: number;
  serviceFee: number;
  tax: number;
  total: number;
}

export interface PromoCode {
  code: string;
  discount: number;
  isValid: boolean;
}

export interface CheckoutState {
  booking: BookingDetails;
  selectedPaymentMethod: PaymentMethodType;
  paymentFormData: PaymentFormData;
  promoCode: PromoCode | null;
}
