import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import modalReducer from '../slices/modalSlice';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    modal: modalReducer,
  },
});

export default store;
