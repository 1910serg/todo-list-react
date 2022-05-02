import React from 'react';

export default function HoverButtons(props) {
  const { onClickAccept, onClickDelete } = props;

  return (
    <span className="tasks-container__item__span">
      <button
        className={`tasks-container__item__accept${
          props.task.done ? '--completed' : ''
        }`}
        onClick={onClickAccept}
      >
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66961 12.6247L1.68979 7.65114L0 9.3388L6.66961 16L21 1.68766L19.3102 0L6.66961 12.6247Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        className={`tasks-container__item__delete${
          props.task.done ? '--completed' : ''
        }`}
        onClick={onClickDelete}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46875 1.46875L15.5312 15.5312"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.46875 15.5312L15.5312 1.46875"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </span>
  );
}
