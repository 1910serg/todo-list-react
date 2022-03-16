import React from 'react';
import { Link } from 'react-router-dom';

export default class TaskPage extends React.Component {
  render() {
    const { item: task } = this.props.location;
    return (
      <div className="task-page_wrapper">
        <div className="task-page_container">
          <button className="task-page_buttom-back">
            <Link to="/">&lt; Назад</Link>
          </button>
          <p className="task-page_text">
            <b>Задача: {`${task.text}`}</b>
          </p>
          <p className="task-page_date">
            Срок выполнения: {`${task.date}` || 'дата не задана'}.
          </p>
        </div>
      </div>
    );
  }
}
