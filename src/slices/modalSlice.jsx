/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayProductsModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleDisplayProductsModal: (state) => {
      state.displayProductsModal = !state.displayProductsModal;
    },
  },
});

export const {
  toggleDisplayProductsModal,
} = modalSlice.actions;

export default modalSlice.reducer;
