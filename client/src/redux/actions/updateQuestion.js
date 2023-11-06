import { ACTION_TYPES } from './types';

export const updateQuestion = (questionData) => ({
  type: ACTION_TYPES.UPDATE_QUESTION,
  payload: questionData,
});
