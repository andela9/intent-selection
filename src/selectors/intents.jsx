import { createSelector } from '@reduxjs/toolkit';

export const selectIntents = (state) => state.intents;

export const selectIntentsList = createSelector(
  [selectIntents],
  (intents) => intents.list,
);

export const selectIntentsCount = createSelector(
  [selectIntents],
  (intents) => intents.list.length,
);

export const selectSelectedIntentsList = createSelector(
  [selectIntents],
  (intents) => intents.list.filter((intent) => intent.selected),
);
