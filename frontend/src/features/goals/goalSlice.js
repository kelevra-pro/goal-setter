import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;
