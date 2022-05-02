import {
  ADD_TASK,
  CHANGE_INPUT_TEXT,
  CHANGE_INPUT_DATE,
  CLICK_DELETE,
  CLICK_ACCEPT,
  HANDLE_REDACT_SUBMIT,
} from './types';

const initialTaskState = {
  tasks: [],
  inputTask: { id: '', text: '', date: '', done: '' },
};

export const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputTask: { ...state.inputTask, text: action.payload },
      };
    case CHANGE_INPUT_DATE:
      return {
        ...state,
        inputTask: { ...state.inputTask, date: action.payload },
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: state.inputTask.text,
            date: state.inputTask.date,
            done: false,
          },
        ],
        inputTask: { id: '', text: '', date: '', done: '' },
      };
    case CLICK_ACCEPT:
      return {
        ...state,
        tasks: [...handleOnClickAccept(action.payload, state.tasks)],
      };
    case CLICK_DELETE:
      return {
        ...state,
        tasks: [...handleOnClickDelete(action.payload, state.tasks)],
      };
    case HANDLE_REDACT_SUBMIT:
      return {
        ...state,
        tasks: [...action.payload],
      };
    default:
      return state;
  }
};

function handleOnClickAccept(currentTaskId, tasks) {
  const allTasks = tasks;

  const currentTaskIndex = allTasks.findIndex(
    (task) => task.id == currentTaskId
  );

  allTasks[currentTaskIndex].done = !allTasks[currentTaskIndex].done;

  return allTasks;
}

function handleOnClickDelete(currentTaskId, tasks) {
  const allTasks = tasks;

  allTasks.splice(
    allTasks.findIndex((task) => task.id == currentTaskId),
    1
  );

  return allTasks;
}
