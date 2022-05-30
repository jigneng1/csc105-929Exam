import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Picture } from "../Gallery/Gallery";
export const photo = createSlice({
  name: "counter",
  initialState: {
    value: Picture,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = photo.actions;

export default photo.reducer;