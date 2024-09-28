/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type languagesEnum = "en" | "ar";

export type initialLangStateType = {
  language: languagesEnum;
};

const initialState: initialLangStateType = {
  language: "en",
};

const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    update(state, action: PayloadAction<languagesEnum>) {
      state.language = action.payload;
    },
  },
});

export const { update } = languageSlice.actions;

export default languageSlice.reducer;
