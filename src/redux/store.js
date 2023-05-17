import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonSlice';
import rocketReducer, { fetchRockets } from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

store.dispatch(fetchRockets());

export default store;
