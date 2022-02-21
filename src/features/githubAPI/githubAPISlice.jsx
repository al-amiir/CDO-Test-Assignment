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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addFavouriteFork, removeFavouriteFork } = githubApiSlice.actions;

export default githubApiSlice.reducer;
