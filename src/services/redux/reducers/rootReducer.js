import { combineReducers } from 'redux';
import toastReducer from './toastReducer';
import otpReducer from './otpReducer';

const reducer = combineReducers({
  toast: toastReducer,
  otp: otpReducer,
});

export default reducer;
