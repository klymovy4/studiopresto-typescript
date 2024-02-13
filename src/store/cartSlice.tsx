import { createSlice } from "@reduxjs/toolkit";
import { cartCounter, sumOfOnePosition, getTotalPrice } from "../utils/helper";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, IProduct, InitialCartState } from "../models/models";
import showNotification from "../components/Notification/Notification";

const initialState: InitialCartState = {
  cart: [],
  cartCounter: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      const itemCart = state.cart.find((el: ICart) => el.item.id === item.id);

      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push({
          item,
          quantity: 1,
          priceCurrentPosition: 0,
        });
      }

      state.cartCounter = cartCounter(state.cart);
      state.cart.forEach((item) => {
        item.priceCurrentPosition = sumOfOnePosition(item);
      });

      state.totalPrice = getTotalPrice(state.cart);
        showNotification({
          type: "success",
          message: "Item has been added to cart!",
        });
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.item.id !== action.payload);
      state.cartCounter = cartCounter(state.cart);
      state.cart.forEach((item) => {
        item.priceCurrentPosition = sumOfOnePosition(item);
      });
      state.totalPrice = getTotalPrice(state.cart);

        showNotification({
          type: "error",
          message: "Item has been removed from cart!",
        });
    },

    plusOnePosition: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const itemCart = state.cart.find((item) => item.item.id === id);

      if (itemCart) {
        itemCart.quantity += 1;
        itemCart.priceCurrentPosition = itemCart.quantity * itemCart.item.price;
      }

      state.cartCounter = cartCounter(state.cart);
      state.totalPrice = getTotalPrice(state.cart);
    },

    removeOnePosition: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const itemCart = state.cart.find((item) => item.item.id === id);

      if (itemCart) {
        itemCart.quantity -= 1;

        if (itemCart.quantity > 0) {
          itemCart.priceCurrentPosition =
            itemCart.quantity * itemCart.item.price;
        }
      }
      state.cartCounter = cartCounter(state.cart);
      state.totalPrice = getTotalPrice(state.cart);
    },

    resetCart(state) {
      state.cart = [];
      state.cartCounter = cartCounter(state.cart);
      state.totalPrice = getTotalPrice(state.cart);
    },
  },
});

export const {
  addToCart,
  removeItem,
  removeOnePosition,
  plusOnePosition,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
