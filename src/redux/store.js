import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import dragonReducer, { fetchDragons } from './dragons/dragonSlice';
import rocketReducer, { fetchRockets } from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
    missions: missionReducer,
  },
});

store.dispatch(fetchRockets());
store.dispatch(fetchDragons());

export default store;
