import { configureStore } from "@reduxjs/toolkit";
import { trelloListSlice } from "./Slice/trelloListSlice";
import { trelloTaskSlice } from "./Slice/trelloTaskSlice";
const rootReducre = {
     reducer: {
          trelloList: trelloListSlice.reducer,
          // trelloTask: trelloTaskSlice.reducer

     }
};
console.log(rootReducre);
export const store = configureStore(rootReducre);
console.log(store)