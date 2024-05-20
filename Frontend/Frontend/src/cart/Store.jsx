import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx"

const store = configureStore({
  reducer: {
    cartReducer,
  }
});

export default store;