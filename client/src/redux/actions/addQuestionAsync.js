import { addQuestion } from './addQuestion';

export const addQuestionAsync = (question) => {
  return (dispatch) => {
    return fetch(`/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addQuestion(data)));
  };
};
