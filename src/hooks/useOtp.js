import {useDispatch} from "react-redux";
import {
  setFrom,
  setEmail,
  setCallback,
} from "../services/redux/reducers/otpReducer";

const useOtp = () => {
  const dispatch = useDispatch();

  const storeFrom = (from) => {
    dispatch(
      setFrom({
        from,
      })
    );
  };

  const storeEmail = (email) => {
    dispatch(
      setEmail({
        email,
      })
    );
  };

  const storeCallback = (callback) => {
    dispatch(
      setCallback({
        callback,
      })
    );
  };

  return {
    storeFrom,
    storeEmail,
    storeCallback,
  };
};

export default useOtp;
