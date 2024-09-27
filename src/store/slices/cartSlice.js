import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    updateCartItem: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
