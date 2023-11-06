/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenProducts: false,

};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    productsModal: (state) => {
      state.isOpenProducts = !state.isOpenProducts;
    },
  },
});

export const { productsModal, documentModal } = modalSlice.actions;

export default modalSlice.reducer;
