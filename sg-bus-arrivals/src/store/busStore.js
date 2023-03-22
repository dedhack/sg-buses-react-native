import { configureStore } from "@reduxjs/toolkit";
import { busApi } from "../features/busSlice";

export const busStore = configureStore({
  reducer: {
    [busApi.reducerPath]: busApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(busApi.middleware),
});
