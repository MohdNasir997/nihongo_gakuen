'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  contactFormSchema,
  type ContactFormData,
  INQUIRY_TYPES,
} from '@/lib/schemas/contact'

/**
 * Mock API function for form submission
 * Simulates a server request with a delay
 */
async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Validate data (in real app, this would be done on the server)
  const validated = contactFormSchema.safeParse(data)
  if (!validated.success) {
    throw new Error('Validation failed')
  }

  // Simulate successful submission
  return {
    success: true,
    message: 'Thank you for your message! We will get back to you within 24 business hours.',
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  const watchedSubject = watch('subject')

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true)
      setSubmitError(null)

      const result = await submitContactForm(data)

      if (result.success) {
        setSubmitSuccess(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
          // Reset form values
          setValue('name', '')
          setValue('email', '')
          setValue('subject', '')
          setValue('message', '')
        }, 3000)
      }
    } catch (error) {
      setSubmitError('Something went wrong. Please try again later.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-lg text-center"
      >
        <CheckCircle2 className="size-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thank you for reaching out. We will get back to you within 24 business hours.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-2xl border-2 border-slate-100 dark:border-slate-800 shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-700/50"
    >
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <span className="size-1.5 rounded-full bg-primary" />
          Direct Inquiry
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Send us a message
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
          We typically respond within 24 business hours.
        </p>
      </div>

      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm"
        >
          {submitError}
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Yuki Tanaka"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-500 dark:text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="yuki@example.com"
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">How can we help?</Label>
          <Select
            value={watchedSubject}
            onValueChange={(value) => setValue('subject', value)}
          >
            <SelectTrigger
              id="subject"
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            >
              <SelectValue placeholder="Select an inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subject && (
            <p id="subject-error" className="text-sm text-red-500 dark:text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Please provide details about your request..."
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-500 dark:text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !isDirty || !isValid}
          className="w-full group h-14 text-base font-bold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <span>Submit Message</span>
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>

        <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center leading-relaxed px-4">
          By submitting this form, you acknowledge that your data will be handled in accordance with our{' '}
          <a
            className="text-slate-600 dark:text-slate-400 font-semibold underline underline-offset-2 hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </motion.div>
  )
}
