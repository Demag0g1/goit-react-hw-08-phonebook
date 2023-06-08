import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from "./operations";


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [action.payload, ...state.items],
  };
};
const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleDelContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
};
const handleFulfilledLogOut = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]:handleFetchContactsSuccess,
    [addContact.fulfilled]:handleAddContactSuccess,
    [deleteContact.fulfilled]:handleDelContactSuccess,
    [logOut.fulfilled]: handleFulfilledLogOut,
    
  },
});

export const contactsReducer = contactsSlice.reducer;