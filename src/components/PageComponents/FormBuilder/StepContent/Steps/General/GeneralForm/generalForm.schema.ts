import { z } from 'zod';

export const generalFormSchema = z.object({
  formTitle: z.string().min(3, 'Form title must be at least 3 characters'),
});
