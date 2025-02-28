import { z } from 'zod';

export const signupFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must contain at least 3 characters')
      .max(50, 'Name must contain at most 50 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z
      .string()
      .min(12, 'Password must contain at least 12 characters')
      .max(100, 'Password must contain at most 100 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(
        /[@$!%*?&]/,
        'Password must contain at least one special character'
      ),
    confirmPassword: z
      .string()
      .min(12, 'Please confirm your password')
      .max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
