import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { todoSlice } from "./slice/todoSlice";
const rootReducre = {
     reducer: {
          counter: counterSlice.reducer,
          todo: todoSlice.reducer,
     }
};
console.log(rootReducre);
export const store = configureStore(rootReducre);
console.log(store)