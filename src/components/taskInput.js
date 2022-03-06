import React from 'react';

export default function TaskInput(props) {
  const { onTextChange, onDateChange, onTaskAdd, text, date } = props;

  return (
    <form className="tasks-сreator__form" onSubmit={onTaskAdd}>
      <input
        className="tasks-сreator__textInput"
        type="text"
        placeholder="Напишите задачу"
        tabIndex="1"
        value={text}
        onChange={onTextChange}
      />
      <div className="tasks-creator__itemsWrapper">
        <div className="tasks-creator__itemsWrapper__textAndDateWrapper">
          <span className="tasks-сreator__text"> Указать дедлайн </span>
          <input
            className="tasks-сreator__dateInput"
            type="date"
            tabIndex="2"
            value={date}
            onChange={onDateChange}
          ></input>
        </div>
        <button className="tasks-сreator__button" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}
