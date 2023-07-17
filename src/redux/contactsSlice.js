import { createSlice } from '@reduxjs/toolkit';
import { contactsListDefault } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [...contactsListDefault],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;