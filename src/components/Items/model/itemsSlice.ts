import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../shared/types/types";

const initialState: Item[] = [];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});
