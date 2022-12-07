import { githubApi } from './GitHub/github.api';
import { githubReducer } from './GitHub/github.slice';
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    githubReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>