import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  //to grab what we need
  reducer:{
    [articleApi.reducerPath]: articleApi.reducer
  }, 
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(articleApi.middleware)
  //helps us to do something with the state before we get it 
})