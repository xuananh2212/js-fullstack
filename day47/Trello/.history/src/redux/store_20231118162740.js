import { configureStore } from "@reduxjs/toolkit";
import { trelloListSlice } from "./Slice/trelloListSlice";
import 
const rootReducre = {
     reducer: {
          trelloList: 

     }
};
console.log(rootReducre);
export const store = configureStore(rootReducre);
console.log(store)