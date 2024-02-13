import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        cart: cartReducer,
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
