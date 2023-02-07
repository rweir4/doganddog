import { configureStore, ThunkAction, ACtion } from "@reduxjs/toolkit";
// import productsReducers

export const store = configureStore({
  reducer: {
    product: productsReducer,
  }
});