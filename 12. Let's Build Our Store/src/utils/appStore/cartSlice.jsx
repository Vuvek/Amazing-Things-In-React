import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop(sta);
    },
    clearCart: (state) => {
      console.log(current(state));
      //   state = [];
      // state.items = [];
      return { items: [] };
      console.log(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
