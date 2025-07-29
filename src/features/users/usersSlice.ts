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
  isInitialized: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  isInitialized: false,
};

export const fetchUsers = createAsyncThunk<UsersResponse>(
  'users/fetchUsers',
  async () => {
    // Simulating a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const response = await axios.get<UsersResponse>("https://dummyjson.com/users");
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
        state.isInitialized = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;