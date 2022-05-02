import {
  ADD_TASK,
  CHANGE_INPUT_TEXT,
  CHANGE_INPUT_DATE,
  CLICK_ACCEPT,
  CLICK_DELETE,
  HANDLE_REDACT_SUBMIT,
} from './reducers/types';

export const createAddTaskToListAction = () => ({
  type: ADD_TASK,
});

export const createChangeInputTextAction = (text) => ({
  type: CHANGE_INPUT_TEXT,
  payload: text,
});

export const createChangeInputDateAction = (date) => ({
  type: CHANGE_INPUT_DATE,
  payload: date,
});

export const createHandleClickAcceptAction = (currentTaskId) => ({
  type: CLICK_ACCEPT,
  payload: currentTaskId,
});

export const createHandleClickDeleteAction = (currentTaskId) => ({
  type: CLICK_DELETE,
  payload: currentTaskId,
});

export const createHandleRedactSubmitAction = (newTasks) => ({
  type: HANDLE_REDACT_SUBMIT,
  payload: newTasks,
});
