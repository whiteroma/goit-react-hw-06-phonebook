import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Filter/filterSlice';
import { formSlice } from './ContactForm/formSlice';

export const store = configureStore({
  reducer: {
    contacts: formSlice.reducer,
    filter: filterSlice.reducer,
  },
});
