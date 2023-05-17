import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
