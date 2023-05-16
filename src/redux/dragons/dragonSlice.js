import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  isLoading: false,
  error: false,
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
});

export default dragonSlice.reducer;
