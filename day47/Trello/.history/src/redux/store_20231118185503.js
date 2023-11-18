import { configureStore } from "@reduxjs/toolkit";
import { trelloListSlice } from "./Slice/trelloListSlice";
import { trelloTaskSlice } from "./Slice/trelloTaskSlice";
import { apiSlice } from "./Slice/apiSlice";
const rootReducre = {
     reducer: {
          trelloList: trelloListSlice.reducer,
          // trelloTask: trelloTaskSlice.reducer
          api: apiSlice.reducer

     }
};
console.log(rootReducre);
export const store = configureStore(rootReducre);
console.log(store)