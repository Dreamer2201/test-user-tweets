import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./api";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.loading = true
            return state
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = [...action.payload]
            return state
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.error = action.payload
            return state
        })
    }
})

export const {getUsers} = userSlice.actions;
export default userSlice.reducer;