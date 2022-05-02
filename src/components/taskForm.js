import React from 'react';
import {
  createAddTaskToListAction,
  createChangeInputTextAction,
  createChangeInputDateAction,
} from './store/actions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  inputTask: store.tasks.inputTask,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputText: (text) => dispatch(createChangeInputTextAction(text)),
  changeInputDate: (date) => dispatch(createChangeInputDateAction(date)),
  addTaskToList: () => dispatch(createAddTaskToListAction()),
});

function TaskForm(props) {
  const { inputTask, changeInputText, changeInputDate, addTaskToList } = props;

  const handleOnAddTaskToList = (e) => {
    e.preventDefault();
    if (inputTask.text.length < 1) return;
    addTaskToList();
  };

  return (
    <form
      className="tasks-сreator__form"
      onSubmit={(e) => handleOnAddTaskToList(e)}
    >
      <input
        className="tasks-сreator__textInput"
        type="text"
        placeholder="Напишите задачу"
        tabIndex="1"
        value={inputTask.text}
        onChange={(e) => changeInputText(e.target.value)}
      />
      <div className="tasks-creator__itemsWrapper">
        <div className="tasks-creator__itemsWrapper__textAndDateWrapper">
          <span className="tasks-сreator__text"> Указать дедлайн </span>
          <input
            className="tasks-сreator__dateInput"
            type="date"
            tabIndex="2"
            value={inputTask.date}
            onChange={(e) => changeInputDate(e.target.value)}
          ></input>
        </div>
        <button className="tasks-сreator__button" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
