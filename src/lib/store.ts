import { configureStore } from '@reduxjs/toolkit';
import basketSlice from "@features/Basket/redux/slices/basketSlice"

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
