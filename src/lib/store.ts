import { combineReducers, configureStore } from "@reduxjs/toolkit";
import basketSlice from "@features/Basket/redux/slices/basketSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  basket: basketSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // necessary for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
