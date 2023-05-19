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
            state.users = [...newArray]
            return state
        })
        .addCase(getAllUsers.rejected, (state, action) => {
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
            const toggleUser = state.users.find(user => user.id === action.payload.id)
            const idx = state.users.indexOf(toggleUser);
            state.users[idx] = action.payload
            return state
        })
        .addCase(changeUserFollowers.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            return state
        })
    }
})
export const {changeActiveBtnFollowers} = userSlice.actions
export default userSlice.reducer;