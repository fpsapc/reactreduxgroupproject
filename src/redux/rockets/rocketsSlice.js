import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch(apiUrl);
  const rocketsData = await response.json();
  const selectedData = rocketsData.map(({
    id,
    rocket_name: rocketName,
    rocket_type: rocketType,
    flickr_images: flickrImage,
  }) => ({
    id,
    rocketName,
    rocketType,
    flickrImage,
  }));
  return selectedData;
});

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },

});

export default rocketsSlice.reducer;
