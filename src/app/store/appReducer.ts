import { combineReducers } from "@reduxjs/toolkit";
import { itemsSlice } from "../../components/Items/model/itemsSlice";
import { cartSlice } from "../../shared/model/cartSLice";

export const appReducer = combineReducers({
  [itemsSlice.reducerPath]: itemsSlice.reducer,
  [cartSlice.reducerPath]: cartSlice.reducer,
});
