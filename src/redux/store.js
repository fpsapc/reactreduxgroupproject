import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
  },
});

export default store;
