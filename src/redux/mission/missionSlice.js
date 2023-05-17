import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = { missions: [], isLoading: false };
const baseURL = 'https://api.spacexdata.com/v3/missions';

// =============== Asynchronous =============

export const getMissionFromAPI = createAsyncThunk(
  'missions/getMissionFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something goes wrong.');
    }
  },
);

const missionSlice = createSlice({
  initialState,
  name: 'missions',
  reducers: {
    joinedMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
    leavedMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: {
    [getMissionFromAPI.fulfilled]: (state, action) => {
      const missions = action.payload.map(
        ({ mission_id: id, mission_name: missionName, description }) => ({
          id,
          missionName,
          description,
        }),
      );
      return { ...state, missions };
    },
    [getMissionFromAPI.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

// Expose the state
export const allMissions = (state) => state.missions.missions;
export const isLoading = (state) => state.missions.isLoading;
// Export the actions
export const { joinedMission, leavedMission } = missionSlice.actions;
// Export default the reducer

export default missionSlice.reducer;
