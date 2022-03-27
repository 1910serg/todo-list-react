import React from 'react';
import { Link } from 'react-router-dom';

export default class TaskPage extends React.Component {
  render() {
    const { item: task } = this.props.location;

    const dateTaskEnd = Date.parse(task.date + 'T23:59:59');
    const dateToEndMilliseconds =
      Math.round((dateTaskEnd - Date.now()) * 10) / 10;
    const dateToEndMinuts = Math.round(dateToEndMilliseconds / 60000);
    const dateToEndHours = Math.round(dateToEndMinuts / 60);
    const dateToEndDays = Math.round(dateToEndHours / 24);
    const dateToEndMinutsCorrect = dateToEndHours - 24 * dateToEndDays;
    const dateToEndMinutsCorrectOverdue = -(
      dateToEndHours -
      24 * (dateToEndDays + 1)
    );

    return (
      <div className="task-page__wrapper">
        <div className="task-page__container">
          <button className="task-page__buttom-back">
            <Link to="/">&lt; Назад</Link>
          </button>
          <p className="task-page__text">
            <b>Задача: {`${task.text}`}</b>
          </p>
          <p className="task-page__date">
            Срок выполнения: {`${task.date}` || 'дата не задана'}.
          </p>
          {task.date !== undefined &&
            dateToEndMinuts < 1440 &&
            dateToEndMinuts > 0 && (
              <span className="task-page__label_hours">
                Осталось {dateToEndHours}ч.
              </span>
            )}
          {task.date !== undefined && dateToEndMinuts >= 1440 && (
            <span className="task-page__label_days">
              Осталось {dateToEndDays}дн. {dateToEndMinutsCorrect}
              ч.
            </span>
          )}
          {task.date !== undefined &&
            dateToEndMinuts > -1440 &&
            dateToEndMinuts < 0 && (
              <span className="task-page__label_overdue">
                Просрочена на {-dateToEndHours}ч.
              </span>
            )}
          {task.date !== undefined && dateToEndMinuts <= -1440 && (
            <span className="task-page__label_overdue">
              Просрочена на {-dateToEndDays}дн. {dateToEndMinutsCorrectOverdue}
              ч.
            </span>
          )}

          <div className="task-page__button-redact">
            <Link
              to={{
                pathname: `/taskPage/:id`,
                item: task,
                onRedactSubmit: this.props.location.onRedactSubmit,
              }}
            >
              Редактировать
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
