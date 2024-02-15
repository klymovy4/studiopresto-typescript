import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import cartReducer from "./cartSlice";

const rootReduser = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

// export const store = configureStore({
//   reducer: rootReduser,
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
