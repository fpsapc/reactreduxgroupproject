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
    description,
  }) => ({
    id,
    rocketName,
    rocketType,
    flickrImage,
    description,
    reserved: false,
  }));
  return selectedData;
});

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;
      const newRockets = state.rockets.map((rocket) => (
        rocket.id !== id ? rocket : { ...rocket, reserved: !rocket.reserved }));
      return { ...state, rockets: newRockets };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
