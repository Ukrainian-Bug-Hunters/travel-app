import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {

  },
});

export const globalReducer = globalSlice.reducer;
