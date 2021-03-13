import { createSelector } from '@reduxjs/toolkit';

export const selectIntentsState = (state) => state.intents;

export const selectIntents = createSelector(
  [selectIntentsState],
  (intentsState) => intentsState.intents,
);
