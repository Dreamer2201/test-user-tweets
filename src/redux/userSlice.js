import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, changeUserFollowers } from "./api";

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
            const newArray = action.payload.map(user => {
                return {
                    ...user,
                    isActiveFollowBtn: false
                }
            })
            console.log(newArray)
            state.users = [...action.payload]
            return state
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.error = action.payload
            return state
        })
        .addCase(changeUserFollowers.pending, (state) => {
            state.loading = true
            return state
        })
        .addCase(changeUserFollowers.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
            const toggleUser = state.users.find(user => user.id === action.payload.id)
            
            const idx = state.users.indexOf(toggleUser);
            console.log(idx)
            state.users[idx] = action.payload
            return state
        })
        .addCase(changeUserFollowers.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.error = action.payload
            return state
        })
    }
})

export default userSlice.reducer;