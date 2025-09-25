import { configureStore } from "@reduxjs/toolkit";
import travelTypeReducer from "./travelTypeSlice";  // adjust path as needed

export const store = configureStore({
  reducer: {
    travelType: travelTypeReducer,
  },
});

// Types for later use in hooks and components (TypeScript)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
