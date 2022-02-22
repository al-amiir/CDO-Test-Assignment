import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Form Inputs
  ownerName: "",
  ownerReposatiry: "",

  // Searching Parametes
  searchQuery: "",
  searchForksLimit: "",

  // Pagination
  page: 1,

  // Favourtie Repos
  favourtieForks: {},
};

export const githubApiSlice = createSlice({
  name: "githubApi",
  initialState,
  reducers: {
    // Update owner name on input
    updateOwnerName: (state, action) => {
      state.ownerName = action.payload;
    },
    updateOwnerRepositry: (state, action) => {
      state.ownerReposatiry = action.payload;
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    updateSearchForksLimit: (state, action) => {
      state.searchForksLimit = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    addFavouriteFork: (state, action) => {
      state.favourtieForks = { ...state.favourtieForks, [action.payload.id]: action.payload };
    },
    removeFavouriteFork: (state, actoin) => {
      delete state.favourtieForks[actoin.payload.id];
    },
  },
});

export const { updateOwnerName, updateOwnerRepositry, updateSearchQuery, updateSearchForksLimit, addFavouriteFork, removeFavouriteFork, updatePage } = githubApiSlice.actions;

export default githubApiSlice.reducer;
