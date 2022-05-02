import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from './middlewares';
import { taskReducer } from './reducers/taskReducer';

export const store = createStore(
  combineReducers({
    tasks: taskReducer,
  }),
  applyMiddleware(logger)
);
