import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
    resetToken: z.string(), // Add resetToken to the schema
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }
    if (data.newPassword !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password confirmation does not match',
        path: ['passwordConfirmation'],
      });
    }
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
