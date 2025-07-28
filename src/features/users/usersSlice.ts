import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  phone: string;
  username: string;
  email: string;
}

export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<UsersResponse, string>(
  'users/fetchUsers',
  async (query) => {
    // Simulating a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const url = "https://dummyjson.com/users";
    const response = await axios.get<UsersResponse>(query ? `${url}/search?q=${query}` : url);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UsersResponse>) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;