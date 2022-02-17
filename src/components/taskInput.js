import React from 'react';

export default function TaskInput(props) {
  const { onTextChange, onTaskAdd, text } = props;

  return (
    <form className="tasks-сreator__form" onSubmit={onTaskAdd}>
      <input
        className="tasks-сreator__input"
        type="text"
        placeholder="Напишите задачу"
        tabIndex="1"
        value={text}
        onChange={onTextChange}
      />
      <button className="tasks-сreator__button" type="submit">
        Добавить
      </button>
    </form>
  );
}
