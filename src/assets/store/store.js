import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/slices";

export const Store = configureStore({
    reducer:{
        productData: cartReducer,
      }
})