import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPayment: false,
  showCharger: false,

  stepTwo: false,
  stepThree: false,

  paymentDetail: false,

};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setShowPayment: (state, action) => {
      state.showPayment = action.payload;
    },
    setShowCharger: (state, action) => {
      state.showCharger = action.payload;
    },
    setStepTwo: (state, action) => {
      state.stepTwo = action.payload;
    },
    setStepThree: (state, action) => {
      state.stepThree = action.payload;
    },
    setPaymentDetail: (state, action) => {
      state.paymentDetail = action.payload;
    },

  },
});

export const { setShowPayment, setShowCharger, setStepTwo, setStepThree, setPaymentDetail } = paymentSlice.actions;
export default paymentSlice.reducer;
