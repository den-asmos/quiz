import { updateQuestion } from './updateQuestion';

export const updateQuestionAsync = (id, question) => {
  return (dispatch) => {
    return fetch(`/questions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    })
      .then((response) => response.json())
      .then((data) => dispatch(updateQuestion(data)));
  };
};
