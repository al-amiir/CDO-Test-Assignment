import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { githubAPI } from "../services/githubAPI";
import githubApiSlice from "../features/githubAPI/githubAPISlice";
export const store = configureStore({
  reducer: {
    github: githubApiSlice,
    [githubAPI.reducerPath]: githubAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubAPI.middleware),
});

setupListeners(store.dispatch);
