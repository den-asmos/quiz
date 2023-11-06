import { ACTION_TYPES } from './types';

export const addQuestion = (questionData) => ({
  type: ACTION_TYPES.ADD_QUESTION,
  payload: questionData,
});
