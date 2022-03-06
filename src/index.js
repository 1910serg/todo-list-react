import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/task';
import TaskInput from './components/taskInput';

class App extends React.Component {
  state = {
    tasks: [],
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputTask.text.length < 1) return;
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: Date.now(),
          text: this.state.inputTask.text,
          date: this.state.inputTask.date,
          done: false,
        },
      ],
      inputTask: {
        id: '',
        text: '',
        date: '',
        done: '',
      },
    });
  };

  handleOnClickAccept = (currentTaskId) => {
    const allTasks = this.state.tasks;

    const currentTaskIndex = allTasks.findIndex(
      (task) => task.id == currentTaskId
    );

    allTasks[currentTaskIndex].done = !allTasks[currentTaskIndex].done;

    this.setState({
      tasks: allTasks,
    });
  };

  handleOnClickDelete = (currentTaskId) => {
    const allTasks = this.state.tasks;

    allTasks.splice(
      allTasks.findIndex((task) => task.id == currentTaskId),
      1
    );

    this.setState({
      tasks: allTasks,
    });
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="wrapper">
        <div className="container">
          <TaskInput
            onTextChange={this.handleOnTextChange}
            onDateChange={this.handleOnDateChange}
            onTaskAdd={this.handleOnSubmit}
            text={this.state.inputTask.text}
            date={this.state.inputTask.date}
          />
          <div className="tasks-container">
            <ul className="tasks-container__list">
              {this.state.tasks.map((task) => (
                <Task
                  task={task}
                  key={task.id}
                  id={task.id}
                  handleOnClickAccept={() => this.handleOnClickAccept(task.id)}
                  handleOnClickDelete={() => this.handleOnClickDelete(task.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);
