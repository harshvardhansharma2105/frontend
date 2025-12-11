import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
