import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/types";

export interface CartItem extends Item {
  amount: number;
  totalPrice: number;
}

type CartStateType = {
  isShown: boolean;
  items: CartItem[];
};

const initialState: CartStateType = {
  isShown: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.isShown = true;
    },
    hideCart: (state) => {
      state.isShown = false;
    },
    addToCart: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const cartItem: CartItem = { ...item, amount: 1, totalPrice: item.price };

      state.items.push(cartItem);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const toIncrease = state.items.find((item) => item.id === action.payload);

      if (toIncrease) {
        const amount = toIncrease.amount + 1;

        toIncrease.amount = amount;
        toIncrease.totalPrice = toIncrease.price * amount;
      }
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      const toDecrease = state.items.find((item) => item.id === action.payload);

      if (toDecrease && toDecrease.amount > 1) {
        const amount = toDecrease.amount - 1;

        toDecrease.amount = amount;
        toDecrease.totalPrice = toDecrease.price * amount;
      }
    },
  },
});

export const { showCart, hideCart, addToCart, removeFromCart, increaseAmount, decreaseAmount } = cartSlice.actions;
