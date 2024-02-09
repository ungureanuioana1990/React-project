import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../pages/types';
import { RootState } from './store';

interface UsersState {
  users: User[];
  filteredUsers: User[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  error: null,
  status: 'idle',
};
// input selectors
const selectAllUsers = (state: RootState) => state.users.users;
const selectSearchQuery = (state: RootState, searchQuery: string) => searchQuery;

// createSelector
export const selectFilteredUsers = createSelector(
  [selectAllUsers, selectSearchQuery], // Input selectors
  (users, searchQuery) => {
    // Result function
    return users.filter(user =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (numberOfUsers: number, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${numberOfUsers}`);
    return response.data.results as User[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.error = null; // Reset error before fetching
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload; // Store fetched users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload as string; // Set error message
      });
  },
  
});

export default usersSlice.reducer;
