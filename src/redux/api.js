import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://64646504043c103502b89e29.mockapi.io/api/v1'

export const getAllUsers = createAsyncThunk(
    'users/get',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get(`${baseURL}/users`);       
            return data;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const changeUserFollowers = createAsyncThunk(
    'users/toggleFollowers',
    async (id, { rejectWithValue, getState }) => {
        const user = getState().users.users.find(user => user.id === id)
        console.log(user)
        let amountFollowers = user.followers
        user.isActiveBtn ? amountFollowers -= 1 : amountFollowers += 1
        const newUser = {
            ...user,
            followers: amountFollowers,
            isActiveBtn: !user.isActiveBtn,
        }
        console.log(newUser)
        try {
            const {data} = await axios.put(`${baseURL}/users/${id}`, newUser);
            console.log(data)       
            return data;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

