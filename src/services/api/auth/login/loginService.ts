import {z} from "zod";
import axios from "../../axios";

export const loginRequestSchema = z.object({
  data: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export type LoginRequestData = z.infer<typeof loginRequestSchema>;

export const loginResponseSchema = z.object({
  data: z.object({
    accessToken: z.string().min(1),
  }),
});

export type LoginResponseData = z.infer<typeof loginResponseSchema>;

export async function loginUser(data: LoginRequestData) {
  loginRequestSchema.parse(data);
  const response = await axios.post("/auth/login", data);
  const sanitizedResponse: LoginResponseData = loginResponseSchema.parse(
    response.data
  );
  return sanitizedResponse;
}
