import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectTopics = createSelector(
  (state: RootState) => state.game,
  data => data.topics,
);

export const selectTopic = (id?: string) =>
  createSelector(
    (state: RootState) => state.game,
    data => data.topics.find(i => i.id === id),
  );
