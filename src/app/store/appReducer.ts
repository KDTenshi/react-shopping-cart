import { combineReducers } from "@reduxjs/toolkit";
import { itemsSlice } from "../../components/Items/model/itemsSlice";

export const appReducer = combineReducers({
  [itemsSlice.reducerPath]: itemsSlice.reducer,
});
