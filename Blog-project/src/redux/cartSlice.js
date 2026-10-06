import { createSlice } from "@reduxjs/toolkit";
const readCart = () => {
  try { return JSON.parse(localStorage.getItem("young-cake-cart") || "[]"); }
  catch { return []; }
};
const cartSlice = createSlice({
  name: "cart", initialState: { items: readCart() },
  reducers: {
    addToCart: (state, action) => {
      const found = state.items.find((item) => String(item.id) === String(action.payload.id));
      if (found) found.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("young-cake-cart", JSON.stringify(state.items));
    },
    changeQuantity: (state, action) => {
      const found = state.items.find((item) => String(item.id) === String(action.payload.id));
      if (found) found.quantity = Math.max(1, Number(action.payload.quantity) || 1);
      localStorage.setItem("young-cake-cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => String(item.id) !== String(action.payload));
      localStorage.setItem("young-cake-cart", JSON.stringify(state.items));
    },
    clearCart: (state) => { state.items = []; localStorage.setItem("young-cake-cart", "[]"); },
  },
});
export const { addToCart, changeQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
