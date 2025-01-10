import { isAxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import useToast from "../../../../hooks/useToast";
import useOtp from "../../../../hooks/useOtp";
import useAuthContext from "../../../../hooks/useAuthContext";
import { useErrorLogger } from "../../../../hooks/useErrorLogger";

import { resetPassword } from "./resetPasswordService";
import { ResetPasswordRequestPayload } from "./resetPasswordService";

export function useResetPassword() {
  const otpInstance = useOtp();
  const { setAuth } = useAuthContext();

  const logError = useErrorLogger();
  const toastInstance = useToast();
  const navigate = useNavigate();

  return useMutation(
    async (requestPayload: ResetPasswordRequestPayload) => {
      const response = await resetPassword(requestPayload);
      return { response, email: requestPayload.data };
    },
    {
      onSuccess: ({ response }) => {
        toastInstance.success("Password reset successfully");
        navigate("/login");
      },
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          const errorCode = error.response?.data.code;
          if (errorCode === 404) {
            toastInstance.error("Invalid or expired reset token");
          } else {
            toastInstance.error("There was an error, please try again soon");
            logError(error);
          }
        } else {
          toastInstance.error("There was an error, please try again soon");
          logError(error);
        }
      },
    }
  );
}