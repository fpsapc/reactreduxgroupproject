import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

});

export default rocketsSlice.reducer;
