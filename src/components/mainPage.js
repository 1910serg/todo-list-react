import React from 'react';
import Task from './task';
import TaskForm from './taskForm';

export default class MainPage extends React.Component {
  state = {
    inputTask: {
      id: '',
      text: '',
      date: '',
      done: '',
    },
  };

  handleOnTextChange = (e) => {
    this.setState({
      inputTask: {
        ...this.state.inputTask,
        text: e.target.value,
      },
    });
  };

  handleOnDateChange = (e) => {
    this.setState({
      inputTask: {
        ...this.state.inputTask,
        date: e.target.value,
      },
    });
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    if (this.state.inputTask.text.length < 1) return;
    this.props.onSubmit({
      id: Date.now(),
      text: this.state.inputTask.text,
      date: this.state.inputTask.date,
      done: false,
    });
    this.setState({
      inputTask: {
        id: '',
        text: '',
        date: '',
        done: '',
      },
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <TaskForm
            onTextChange={this.handleOnTextChange}
            onDateChange={this.handleOnDateChange}
            onTaskAdd={this.onSubmitClick}
            text={this.state.inputTask.text}
            date={this.state.inputTask.date}
          />
          <ul className="tasks-container">
            {this.props.tasks.map((task) => (
              <Task
                task={task}
                key={task.id}
                id={task.id}
                handleOnClickAccept={(e) =>
                  this.props.onClickAccept(e, task.id)
                }
                handleOnClickDelete={(e) =>
                  this.props.onClickDelete(e, task.id)
                }
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
