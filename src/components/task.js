import React from 'react';
import HoverButtons from './hoverButtons';

export default function Task(props) {
  const { handleOnClickAccept, handleOnClickDelete } = props;

  return (
    <li
      id={props.task.id}
      className={`tasks-container__item ${
        props.task.done ? 'task--completed' : ''
      }`}
    >
      <span className={`${props.task.done ? 'task-text--completed' : ''}`}>
        {props.task.text}
      </span>
      {props.task.done && (
        <span className="task-completed-label">Выполнено</span>
      )}
      <HoverButtons
        task={props.task}
        key={props.task.id}
        handleOnClickAccept={handleOnClickAccept}
        handleOnClickDelete={handleOnClickDelete}
      />
    </li>
  );
}
