import { deleteQuestion } from './deleteQuestion';

export const deleteQuestionAsync = (id) => {
  return (dispatch) => {
    return fetch(`/questions/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => dispatch(deleteQuestion(data)));
  };
};
