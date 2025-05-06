import { BasketItem } from "@/types/Basket";
import { Plate } from "@/types/Plate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  products: BasketItem[];
}

const initialState: BasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Plate>) => {
      const existingItem = state.products.find(
        (product) => product.code === action.payload.code,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.code !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.products.find(
        (product) => product.code === action.payload,
      );
      if (!existingItem) return;
      existingItem.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.products.find(
        (product) => product.code === action.payload,
      );
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.code !== action.payload,
        );
      } else {
        existingItem.quantity--;
      }
    },
    clearBasket: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToBasket,
  clearBasket,
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
