import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import { questionReducer } from './reducers/questionReducer';

const initialState = {
  questions: [],
};

const store = createStore(
  questionReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
