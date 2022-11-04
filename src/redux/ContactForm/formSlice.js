import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const formSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({id: nanoid(), name: action.payload.name, number: action.payload.number})
    },
    deleteContact(state, action) {
      state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = formSlice.actions;
export const formReducer = formSlice.reducer;
