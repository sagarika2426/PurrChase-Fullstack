import { createSlice } from "@reduxjs/toolkit";

const arr = JSON.parse(localStorage.getItem("cart"))

const initialState = {
  items: arr || []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        // console.log({action});
        const newItem = action.payload;
        const existingItem = state.items.findIndex(item => item.productId === newItem.productId);
        if(existingItem != -1){
          state.items[existingItem].quantity += 1;
        }
        else{
          state.items.push({...newItem, quantity : 1})
        }
      // state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // console.log(product)
      // console.log(action.payload);
      state.items = state.items.filter(p => p.productId !== product);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      console.log("increase:", productId);
      const item = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      console.log("decrease:", productId);
      const item = state.items.find((item) => item.productId === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
