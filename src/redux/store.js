import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: [],
    filter: filterSlice.reducer,
  },
});
