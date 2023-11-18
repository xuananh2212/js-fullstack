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
               .addCase(fetchGetApi.pending, (state) => {
                    console.log(1);
                    state.status = 'pending';
               })
               .addCase(fetchGetApi.fulfilled, (state, action) => {
                    console.log(action.payload);
               })
               .addCase(fetchGetApi.rejected, (state) => {
                    state.status = 'error'
               })
     }
});

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await response.json();
     return data;
})

export const fetchGetApi = createAsyncThunk("fetchGetApi", async (dataEmail) => {
     const queryString = new URLSearchParams({ email: dataEmail })
     const { data } = await client.get(`/api-key?${queryString}`);
     console.log(data);
     return data
})