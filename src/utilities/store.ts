import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import motiveReducer from "./MotivesSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    motives: motiveReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
