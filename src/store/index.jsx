import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import navbarReducer from '../slices/modalSlice';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    navbar: navbarReducer,
  },
});

export default store;
