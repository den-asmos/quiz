import { ACTION_TYPES } from './types';

export const setQuestions = (questions) => ({
  type: ACTION_TYPES.SET_QUESTIONS,
  payload: questions,
});
