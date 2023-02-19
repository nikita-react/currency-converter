import { configureStore } from "@reduxjs/toolkit";
import curreuncyReducer from "./currencySlice";

export default configureStore({
  reducer: {
    currency: curreuncyReducer,
  },
});
