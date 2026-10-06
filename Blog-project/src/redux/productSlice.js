import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});
export const fetchProductById = createAsyncThunk("products/fetchOne", async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});
export const createProduct = createAsyncThunk("products/create", async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
});
export const updateProduct = createAsyncThunk("products/update", async ({ id, product }) => {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
});
export const removeProduct = createAsyncThunk("products/remove", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], selected: null, loading: false, error: null },
  reducers: { clearSelected: (state) => { state.selected = null; } },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = action.payload; })
      .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(fetchProductById.pending, (state) => { state.loading = true; state.error = null; state.selected = null; })
      .addCase(fetchProductById.fulfilled, (state, action) => { state.loading = false; state.selected = action.payload; })
      .addCase(fetchProductById.rejected, (state, action) => { state.loading = false; state.error = action.error.message; })
      .addCase(createProduct.fulfilled, (state, action) => { state.items.unshift(action.payload); })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => String(item.id) === String(action.payload.id));
        if (index !== -1) state.items[index] = action.payload;
        state.selected = action.payload;
      })
      .addCase(removeProduct.fulfilled, (state, action) => { state.items = state.items.filter((item) => String(item.id) !== String(action.payload)); });
  },
});
export const { clearSelected } = productSlice.actions;
export default productSlice.reducer;
