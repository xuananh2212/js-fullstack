import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../Utils/Configs/client";
const initialState = {
     todoList: [
          "item1", "item2"
     ],
     status: 'idle'
}
export const trelloListSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          update: (state, action) => {
               state.todoList = action.payload;
          }
     },
     extraReducers: (builder) => {
          builder
               .addCase(fetchTodos.pending, (state) => {
                    state.status = 'pending';
               })
               .addCase(fetchTodos.fulfilled, (state, action) => {
                    state.todoList = action.payload;
                    state.status = 'success';
               })
               .addCase(fetchTodos.rejected, (state) => {
                    state.status = 'error'
               })
     }
});

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await response.json();
     return data;
})

export const fetchGetApi = createAsyncThunk("fetchGetApi", async () => {
     const { data } = client
})
