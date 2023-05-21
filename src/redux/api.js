import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://64690996183682d614386dc6.mockapi.io/api/v1';

export const getAllUsers = createAsyncThunk(
	'users/get',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${baseURL}/users`);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const changeUserFollowers = createAsyncThunk(
	'users/toggleFollowers',
	async (id, { rejectWithValue, getState }) => {
		const user = getState().users.users.find(user => user.id === id);
		const updatedUser = {
			name: user.name,
			tweets: user.tweets,
			followers: user.followers,
			avatar: user.avatar
		}
		try {
			const { data } = await axios.put(`${baseURL}/users/${id}`, updatedUser);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
