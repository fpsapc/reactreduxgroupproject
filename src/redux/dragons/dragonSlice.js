import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const dragonUrl = 'https://api.spacexdata.com/v4/dragons';
export const fetchDragons = createAsyncThunk('dragons/dragonSlice', async () => {
  try {
    const response = await fetch(dragonUrl);
    const result = await response.json();
    const dragons = Object.entries(result).map((item) => (
      {
        name: item[1].name,
        id: item[1].id,
        type: item[1].type,
        images: item[1].flickr_images,
      }
    ));
    return dragons;
  } catch (err) {
    throw new Error(err);
  }
});

const initialState = {
  dragons: [],
  isLoading: false,
  error: false,
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.dragons = action.payload;
      state.isLoading = false;
    })
      .addCase(fetchDragons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default dragonSlice.reducer;
