import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { appReducer } from "./appReducer";

export const appStore = configureStore({
  reducer: appReducer,
});

type RootState = ReturnType<typeof appStore.getState>;
type AppDispatch = typeof appStore.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
