import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// async thunk for fetching data
export const fetchData = createAsyncThunk('home/fetchData', async () => {
  try {
    const response = await axios.get('https://api.openaq.org/v2/latest?limit=10&page=1&offset=0&sort=desc&radius=1000&order_by=lastUpdated&dumpRaw=false');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data.');
  }
});

const initialState = {
  home: [],
  isLoading: false,
  error: undefined,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    showContent: (state) => {
      const displayData = 'Home states';
      state.home = displayData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.home = action.payload.results;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { showData } = homeSlice.actions;
export default homeSlice.reducer;
