import { createSlice } from '@reduxjs/toolkit';

import { createTopic, deleteTopic, updateTopic } from './actions';
import { Topic } from '@/types';

const initialState: {
  topics: Topic[];
} = {
  topics: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTopic, (state, { payload }) => {
      state.topics = [...state.topics, payload];
    });

    builder.addCase(updateTopic, (state, { payload }) => {
      const { id } = payload;

      if (id) {
        const targetIndex = state.topics.findIndex(i => i.id === id);

        if (targetIndex >= 0) {
          state.topics.splice(targetIndex, 1, {
            ...state.topics[targetIndex],
            ...payload,
          });
        }
      }
    });

    builder.addCase(deleteTopic, (state, { payload: id }) => {
      const targetIndex = state.topics.findIndex(i => i.id === id);

      if (targetIndex >= 0) {
        state.topics.splice(targetIndex, 1);
      }
    });
  },
});

export { selectTopics } from './selectors';
export { createTopic, updateTopic, deleteTopic } from './actions';
export const gameReducer = gameSlice.reducer;
