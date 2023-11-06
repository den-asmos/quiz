import { ACTION_TYPES } from './types';

export const deleteQuestion = (id) => ({
  type: ACTION_TYPES.DELETE_QUESTION,
  payload: id,
});
