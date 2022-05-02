import React from 'react';
import {
  createHandleClickAcceptAction,
  createHandleClickDeleteAction,
  createHandleRedactSubmitAction,
} from './store/actions';
import { connect } from 'react-redux';
import Task from './task';
import TaskForm from './taskForm';

const mapStateToProps = (store) => ({
  tasks: store.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAccept: (currentTaskId) =>
    dispatch(createHandleClickAcceptAction(currentTaskId)),
  onClickDelete: (currentTaskId) =>
    dispatch(createHandleClickDeleteAction(currentTaskId)),
  onRedactSubmit: (newTasks) =>
    dispatch(createHandleRedactSubmitAction(newTasks)),
});

function MainPage(props) {
  const { tasks, onClickAccept, onClickDelete, onRedactSubmit } = props;

  const handleClickAccept = (e, currentTaskId) => {
    e.preventDefault();
    onClickAccept(currentTaskId);
  };

  const handleClickDelete = (e, currentTaskId) => {
    e.preventDefault();
    onClickDelete(currentTaskId);
  };

  const handleOnRedactSubmit = (task) => {
    const newTasks = tasks;
    const currentTaskId = task.id;

    const currentTaskIndex = newTasks.findIndex(
      (taskElem) => taskElem.id == currentTaskId
    );

    newTasks[currentTaskIndex].text = task.text;
    newTasks[currentTaskIndex].date = task.date;

    onRedactSubmit(newTasks);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <TaskForm />
        <ul className="tasks-container">
          {tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              id={task.id}
              onRedactSubmit={handleOnRedactSubmit}
              onClickAccept={(e) => handleClickAccept(e, task.id)}
              onClickDelete={(e) => handleClickDelete(e, task.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
