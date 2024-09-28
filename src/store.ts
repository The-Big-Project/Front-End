/** @format */

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./states/languageSlice/languageSlice";

const store = configureStore({
  reducer: languageReducer,
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
