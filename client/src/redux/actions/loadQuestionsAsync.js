import { setQuestions } from './setQuestions';

export const loadQuestionsAsync = () => {
  return (dispatch) => {
    return fetch(`/questions`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((questions) => dispatch(setQuestions(questions)));
  };
};
