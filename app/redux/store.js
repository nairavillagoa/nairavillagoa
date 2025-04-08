import { configureStore } from "@reduxjs/toolkit";
import selectedChecksSlice from "@/app/redux/slices/selectedChecksSlice"
import loginStateSlice from "@/app/redux/slices/loginStateSlice"
import navSlice from "@/app/redux/slices/navSlice"

export const store = configureStore({
  reducer: {
    checks: selectedChecksSlice,
    log: loginStateSlice,
    nav: navSlice,
  },
});
