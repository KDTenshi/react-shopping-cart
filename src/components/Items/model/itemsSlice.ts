import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../shared/types/types";

const initialState: Item[] = [
  { id: "001", title: "Item 1", price: 100 },
  { id: "002", title: "Item 2", price: 200 },
  { id: "003", title: "Item 3", price: 300 },
  { id: "004", title: "Item 4", price: 400 },
  { id: "005", title: "Item 5", price: 500 },
  { id: "006", title: "Item 6", price: 600 },
  { id: "007", title: "Item 7", price: 700 },
  { id: "008", title: "Item 8", price: 800 },
  { id: "009", title: "Item 9", price: 900 },
  { id: "0010", title: "Item 10", price: 1000 },
];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});
