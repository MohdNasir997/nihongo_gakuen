import { z } from "zod"

/**
 * Contact form validation schema
 * Defines the structure and validation rules for the contact form
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase(),
  subject: z
    .string()
    .min(1, "Please select an inquiry type")
    .refine(
      (value) => [
        "JLPT Course Inquiry",
        "Business/Corporate Training",
        "Technical Support",
        "Partnerships",
        "Other",
      ].includes(value),
      {
        message: "Please select a valid inquiry type",
      }
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters")
    .trim(),
})

/**
 * Type inference from the contact form schema
 * Use this type for form data throughout the application
 */
export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Inquiry type options for the subject dropdown
 */
export const INQUIRY_TYPES = [
  "JLPT Course Inquiry",
  "Business/Corporate Training",
  "Technical Support",
  "Partnerships",
  "Other",
] as const

export type InquiryType = (typeof INQUIRY_TYPES)[number]
