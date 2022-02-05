import React from 'react';

class HoverButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOnAccept = this.handlerOnAccept.bind(this);
    this.handlerOnDelete = this.handlerOnDelete.bind(this);
  }

  handlerOnAccept(e) {
    e.target.closest('LI').classList.toggle('completed-text');
    const buttons = e.target.closest('LI').getElementsByTagName('button');
    for (let button of buttons) {
      button.classList.toggle('completed');
    }
  }

  handlerOnDelete(e) {
    e.target.closest('LI').remove();
    // Надо добавить какую-нибудь функцию, чтобы текст переносился внутри элемента ли (чтобы ли резинился, причём не затрагивая кнопки).
  }

  render() {
    return (
      <span className="tasks-container__item__span">
        <button
          className="tasks-container__item__accept"
          onClick={this.handlerOnAccept}
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
          className="tasks-container__item__delete"
          onClick={this.handlerOnDelete}
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
}

export default HoverButtons;
