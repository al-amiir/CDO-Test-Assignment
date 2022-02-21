import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourtieForks: {},
};

export const githubApiSlice = createSlice({
  name: "githubApi",
  initialState,
  reducers: {
    addFavouriteFork: (state, action) => {
      state.favourtieForks = { ...state.favourtieForks, [action.payload.id]: action.payload };
    },
    removeFavouriteFork: (state, actoin) => {
      delete state.favourtieForks[actoin.payload.id];
    },
  },
});

export const { addFavouriteFork, removeFavouriteFork } = githubApiSlice.actions;

export default githubApiSlice.reducer;
