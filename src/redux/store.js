import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    itemSlice,
    cartSlice,
  },
});
