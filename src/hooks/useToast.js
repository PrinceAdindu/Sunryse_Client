import {useDispatch} from "react-redux";
import {closeToast, setToast} from "../services/redux/reducers/toastReducer";

const useToast = () => {
  const dispatch = useDispatch();

  const error = (message) => {
    dispatch(
      setToast({
        message,
        type: "error",
      })
    );
  };

  const success = (message) => {
    dispatch(
      setToast({
        message,
        type: "success",
      })
    );
  };

  const close = () => {
    dispatch(closeToast());
  };

  return {
    error,
    success,
    close,
  };
};

export default useToast;
