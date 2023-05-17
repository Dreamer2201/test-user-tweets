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