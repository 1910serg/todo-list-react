import React from 'react';
import HoverButtons from './hoverButtons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateToEnd: '',
    };
  }

  componentDidMount() {
    if (this.props.task.date === '') return;
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const dateTaskEnd = Date.parse(this.props.task.date);
    const dateToEnd = dateTaskEnd - Date.now();
    const dateToEndSeconds = Math.round(dateToEnd / 1000);

    console.log(dateToEndSeconds);
    this.setState({ dateToEnd: dateToEndSeconds });
  }

  render() {
    const { handleOnClickAccept, handleOnClickDelete, task } = this.props;

    return (
      <li
        id={task.id}
        className={`tasks-container__item ${
          this.state.dateToEnd <= 86400 &&
          this.state.dateToEnd > 0 &&
          !task.done
            ? 'tasks--one_day_to_complete'
            : ''
        } ${
          this.state.dateToEnd < 0 && !task.done
            ? 'tasks--the_task_is_overdue'
            : ''
        } ${task.done ? 'task--completed' : ''}`}
        secondstoend={this.state.dateToEnd}
      >
        {/* <div className="task_wrapper"> */}
        {/* <div className="task-content"> */}
        <span className={`${task.done ? 'task-text--completed' : ''}`}>
          {task.text}
        </span>
        {/* </div> */}
        {/* <div className="task-labels"> */}
        {task.date && <span className="task-date-label">До {task.date}</span>}
        {task.done && <span className="task-completed-label">Выполнено</span>}
        {this.state.dateToEnd < 0 && !task.done && (
          <span className="task-overdue-label">Дата исполнения прошла</span>
        )}
        {/* </div> */}
        {/* </div> */}
        <HoverButtons
          task={task}
          key={task.id}
          handleOnClickAccept={handleOnClickAccept}
          handleOnClickDelete={handleOnClickDelete}
        />
      </li>
    );
  }
}
