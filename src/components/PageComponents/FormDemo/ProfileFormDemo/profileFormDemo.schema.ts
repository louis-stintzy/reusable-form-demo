import { z } from 'zod';

export const profileFormSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Enter a valid email address'),
  birthDate: z
    .string()
    .refine(
      (date) => new Date(date) <= new Date(),
      'Birth date cannot be in the future'
    ),
  avatar: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length === 1, 'Avatar image is required')
    .refine(
      (fileList) => ['image/jpeg', 'image/png'].includes(fileList[0]?.type),
      'Only PNG and JPEG images are allowed'
    ),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
});
