import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice  from "./reducer/Reducer";



export const store = configureStore({
   reducer: {
    sidebar: sidebarSlice
   }
})