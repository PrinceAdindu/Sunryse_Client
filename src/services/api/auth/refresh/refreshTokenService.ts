import {z} from "zod";
import axios from "../../axios";

export const refreshResponseSchema = z.object({
  data: z.object({
    accessToken: z.string().min(1),
  }),
});

export type RefreshResponseData = z.infer<typeof refreshResponseSchema>;

export async function refreshAccessToken() {
  const response = await axios.post("/auth/login/refresh");
  const sanitizedResponse: RefreshResponseData = refreshResponseSchema.parse(
    response.data
  );
  return sanitizedResponse;
}
