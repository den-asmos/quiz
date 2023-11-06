import { ACTION_TYPES } from '../actions/types';

export const questionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPDATE_QUESTION: {
      const updated = state.questions.map((question) => {
        if (question._id === payload._id) {
          return payload;
        }
        return question;
      });

      return { ...state, questions: updated };
    }
    case ACTION_TYPES.SET_QUESTIONS: {
      return { ...state, questions: payload };
    }
    case ACTION_TYPES.ADD_QUESTION: {
      const updated = state.questions.concat([payload]);

      return { ...state, questions: updated };
    }
    case ACTION_TYPES.DELETE_QUESTION: {
      const updated = state.questions.filter(
        (question) => question._id !== payload
      );

      return { ...state, questions: updated };
    }
    default: {
      return state;
    }
  }
};
