import { Topic } from '@/types';
import { createAction } from '@reduxjs/toolkit';

export const createTopic = createAction<Topic>('topic/create');
export const updateTopic = createAction<Partial<Topic>>('topic/update');
export const deleteTopic = createAction<string>('topic/delete');
