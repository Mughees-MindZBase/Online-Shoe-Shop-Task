import { createSlice } from "@reduxjs/toolkit";

import shoe1 from "../../assets/svg/shoe1.svg";
import shoe2 from "../../assets/svg/shoe2.svg";
import shoe3 from "../../assets/svg/shoe3.svg";
import shoe4 from "../../assets/svg/shoe4.svg";
import shoe5 from "../../assets/svg/shoe5.svg";

const initialState = [
  { id: 1, image: shoe1, name: "Sneakers", price: 65.0, category: "Running" },
  {
    id: 2,
    image: shoe2,
    name: "Classic Shoes",
    price: 75.0,
    category: "Casual",
  },
  {
    id: 3,
    image: shoe3,
    name: "Sport Shoes",
    price: 85.0,
    category: "Training",
  },
  { id: 4, image: shoe4, name: "Boots", price: 95.0, category: "Hiking" },
  { id: 5, image: shoe5, name: "Loafers", price: 55.0, category: "Casual" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },

    deleteProduct: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
