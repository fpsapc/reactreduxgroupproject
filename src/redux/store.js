import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

export default store;
