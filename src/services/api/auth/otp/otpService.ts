import {z} from "zod";
import axios from "../../axios";

export const otpSenderRequestSchema = z.object({
  data: z.object({
    email: z.string().email(),
  }),
});
export type OtpSenderRequestData = z.infer<typeof otpSenderRequestSchema>;

export async function sendOtp(data: OtpSenderRequestData) {
  otpSenderRequestSchema.parse(data);
  await axios.post("/auth/otp", data);
}

export const otpVerifierRequestSchema = z.object({
  data: z.object({
    email: z.string().email(),
    code: z.string(),
  }),
});
export type OtpVerifierRequestData = z.infer<typeof otpVerifierRequestSchema>;

export async function verifyOtp(data: OtpVerifierRequestData) {
  otpVerifierRequestSchema.parse(data);
  await axios.post("/auth/otp/verify", data);
}
