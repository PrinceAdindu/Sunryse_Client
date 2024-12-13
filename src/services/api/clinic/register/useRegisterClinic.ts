import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";

import useToast from "../../../../hooks/useToast";
import {registerClinic, RegisterClinicRequestData} from "./registerClinic";
import {ApiError} from "../../ApiError";
import {useAsyncError} from "../../../../hooks/useAsyncError";

export function useRegisterClinic() {
  const navigate = useNavigate();
  const toastInstance = useToast();
  const throwError = useAsyncError();

  return useMutation(
    (requestData: RegisterClinicRequestData) => registerClinic(requestData),
    {
      onSuccess: () => {
        navigate("/login");
        toastInstance.success("Your Sunryse ID was successfully created");
      },
      onError: (error: ApiError) => {
        if (error.code === 409) {
          toastInstance.error("This email is already being used");
        } else {
          toastInstance.error(
            "There was an error on our end, please try again soon"
          );
          throwError(error);
        }
      },
    }
  );
}
