import { z } from "zod";
import axios from "../../axios";

export const resetPasswordRequestSchema = z.object({
  data: z.object({
    resetToken: z.string().min(1),
    newPassword: z.string().min(8), // Ensure password has a minimum length
  }),
});

export type ResetPasswordRequestPayload = z.infer<typeof resetPasswordRequestSchema>;

export const resetPasswordResponseSchema = z.object({
  data: z.object({
    message: z.string(),
  }),
});

export type ResetPasswordResponsePayload = z.infer<typeof resetPasswordResponseSchema>;

export async function resetPassword(data: ResetPasswordRequestPayload) {
  resetPasswordRequestSchema.parse(data);
  const response = await axios.post("/auth/reset-password", data);
  const sanitizedResponse: ResetPasswordResponsePayload = resetPasswordResponseSchema.parse(response.data);
  return sanitizedResponse;
}
