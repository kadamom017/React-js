import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("cyroUser");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: savedUser ? true : false,
  favorites: [],
  watchlist: [],
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem(
        "cyroUser",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.favorites = [];
      state.watchlist = [];

      localStorage.removeItem("cyroUser");
    },

    addFavorite: (state, action) => {
      const movieExists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );

      if (!movieExists) {
        state.favorites.push(action.payload);
      }
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
    },

    addToWatchlist: (state, action) => {
      const movieExists = state.watchlist.some(
        (movie) => movie.id === action.payload.id
      );

      if (!movieExists) {
        state.watchlist.push(action.payload);
      }
    },

    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  login,
  logout,
  addFavorite,
  removeFavorite,
  addToWatchlist,
  removeFromWatchlist,
} = authSlice.actions;

export default authSlice.reducer;