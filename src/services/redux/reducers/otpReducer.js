import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: '',
  email: '',
  callback: () => {},
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload.from;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setCallback: (state, action) => {
      state.callback = action.payload.callback;
    },
  },
});

export const { setFrom, setEmail, setCallback } = otpSlice.actions;
export default otpSlice.reducer;
