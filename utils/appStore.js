import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { rtkApi } from "./rtkApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        [rtkApi.reducerPath]:rtkApi.reducer,
    }  ,   
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware)                                 
});
setupListeners(appStore.dispatch)
export default appStore;