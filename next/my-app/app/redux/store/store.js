"use client";
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../slices/countSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,  // <--- yahi key important hai
    cart: cartReducer,
  },
});