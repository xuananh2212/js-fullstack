import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../Utils/Configs/client";
const initialState = {
     apiEmail: localStorage.getItem('apiEmail') || '',
     status: false,

}
export const apiSlice = createSlice({
     name: 'api',
     initialState,
     extraReducers: (builder) => {
          builder
               .addCase(fetchGetApi.pending, (state) => {

               })
               .addCase(fetchGetApi.fulfilled, (state, action) => {
                    console.log(state.apiEmail, action.payload.data.apikey)
                    console
                    if (action.payload.code === 200) {
                         state.status = true;
                         state.apiEmail = action.payload.data.apikey;
                    }

               })
               .addCase(fetchGetApi.rejected, (state) => {
               })
     }
});
export const fetchGetApi = createAsyncThunk("fetchGetApi", async (dataEmail) => {
     const queryString = new URLSearchParams({ email: dataEmail })
     const { data } = await client.get(`/api-key?${queryString}`);
     return data
})
