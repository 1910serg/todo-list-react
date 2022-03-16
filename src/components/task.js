import React from 'react';
import HoverButtons from './hoverButtons';
import { Route, Routes, Link } from 'react-router-dom';
import TaskPage from './taskPage';

export default class Task extends React.Component {
  state = {
    dateToEnd: '',
  };

  componentDidMount() {
    if (this.props.task.date === '') return;
    this.tick();
    this.timerID = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.dateToEnd < 0) {
      clearInterval(this.timerID);
      return;
    }
    const dateTaskEnd = Date.parse(this.props.task.date + 'T23:59:59');
    const dateToEndMilliseconds =
      Math.round((dateTaskEnd - Date.now()) * 10) / 10;
    const dateToEndMinuts = Math.round(dateToEndMilliseconds / 60000);

    this.setState({ dateToEnd: dateToEndMinuts });
  }

  render() {
    const { handleOnClickAccept, handleOnClickDelete, task } = this.props;
    const { id } = task.id;
    console.log(task);
    return (
      <li
        id={id}
        className={`tasks-container__item ${
          this.state.dateToEnd <= 1440 && this.state.dateToEnd > 0 && !task.done
            ? 'tasks--one_day_to_complete'
            : ''
        } ${
          this.state.dateToEnd < 0 && !task.done
            ? 'tasks--the_task_is_overdue'
            : ''
        } ${task.done ? 'task--completed' : ''}`}
        minutstoend={this.state.dateToEnd}
      >
        <Link to={{ pathname: `/task/:id`, item: task, id: { id } }}>
          <div className="task_wrapper">
            <div className="task_wrapperText">
              <span
                className={`task-text ${
                  task.done ? 'task-text--completed' : ''
                }`}
              >
                {task.text}
              </span>
              <div className="task-labels">
                {task.date && (
                  <span className="task-date-label">До {task.date}</span>
                )}
                {task.done && (
                  <span className="task-completed-label">Выполнено</span>
                )}
                {this.state.dateToEnd < 0 && !task.done && (
                  <span className="task-overdue-label">
                    Дата исполнения прошла
                  </span>
                )}
              </div>
            </div>
            <div className="task-buttons">
              <HoverButtons
                task={task}
                handleOnClickAccept={handleOnClickAccept}
                handleOnClickDelete={handleOnClickDelete}
              />
            </div>
          </div>
        </Link>
      </li>
    );
  }
}