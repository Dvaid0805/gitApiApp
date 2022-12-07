import {githubApi} from "./GitHub/github.api";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});