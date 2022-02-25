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

  // // Favourtie Repos
  // favourtieForks: {},

  // FireStore Array Of Values
  firestoreForks: [],
  // FireStore Array Of id to quick check if a specific value is into firestoreForks
  firestoreForksID: [],
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
    getFirestoreForks: (state, action) => {
      state.firestoreForks = [...action.payload];
    },
    getFirestoreForksID: (state, action) => {
      state.firestoreForksID = [...action.payload];
    },
    // addFavouriteFork: (state, action) => {
    //   state.favourtieForks = { ...state.favourtieForks, [action.payload.id]: action.payload };
    // },
    // removeFavouriteFork: (state, actoin) => {
    //   delete state.favourtieForks[actoin.payload.id];
    // },
  },
});

export const { updateOwnerName, updateOwnerRepositry, updateSearchQuery, updateSearchForksLimit, updatePage, getFirestoreForks, getFirestoreForksID } = githubApiSlice.actions;

export default githubApiSlice.reducer;
