import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'success',
  isOpen: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isOpen = true;
    },
    closeToast: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setToast, closeToast } = toastSlice.actions;
export default toastSlice.reducer;
