import { createSlice } from "@reduxjs/toolkit";
import { sliceItems } from "../utils/helper";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct, InitialItemsState } from "../models/models";

const initialState: InitialItemsState = {
  items: [],
  categories: [],
  slicedItems: [],
  isLoading: false,
  initialized: false,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload;
    },
    setSlicedItems: (state, action: PayloadAction<IProduct[][]>) => {
      state.slicedItems = action.payload;
    },
    setItemsCategory: (state, action: PayloadAction<Array<string>>) => {
      state.categories = action.payload;
    },
    findBySearch: (state, action: PayloadAction<string>) => {
      const text = action.payload;
      const filtererBySearch = state.items.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      state.slicedItems = sliceItems(filtererBySearch);
    },
    toggleLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initializedApp: (state) => {
      state.initialized = true;
    },
  },
});

export const {
  setItems,
  setItemsCategory,
  setSlicedItems,
  findBySearch,
  toggleLoader,
  initializedApp,
} = itemsSlice.actions;

export default itemsSlice.reducer;
