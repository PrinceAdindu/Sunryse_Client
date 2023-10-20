import { combineReducers } from 'redux';
import toastReducer from './toastReducer';

const reducer = combineReducers({
  toast: toastReducer,
});

export default reducer;
