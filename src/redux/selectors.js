import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;

export const getContacts = state => state.contacts;

export const selectContacts = state => state.contacts.contactsList;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectfilteredContacts = createSelector(
  [selectContacts, getFilter],
  (contacts, filter) => {
    const normilezedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  }
);
