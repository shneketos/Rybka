import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import items from "../../pages/Main/items.json";

const initialState = {
  items: items,
  status: "loading",
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
