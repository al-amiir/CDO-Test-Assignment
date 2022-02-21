import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from '../features/counter/counterSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubAPI } from "../services/githubAPI";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [githubAPI.reducerPath]: githubAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubAPI.middleware),
});

setupListeners(store.dispatch);
