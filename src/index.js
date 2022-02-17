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
      done: '',
    },
  };

  handleOnChange = (e) => {
    this.setState({
      inputTask: {
        text: e.target.value,
      },
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputTask.text.length > 0) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: Date.now(),
            text: this.state.inputTask.text,
            done: false,
          },
        ],
        inputTask: {
          id: '',
          text: '',
          done: '',
        },
      });
    }
  };

  handleOnClickAccept = (e) => {
    const allTasks = this.state.tasks;
    const currentTaskId = e.target.closest('LI').getAttribute('id');

    const currentTaskIndex = allTasks.findIndex(
      (task) => task.id == currentTaskId
    );

    allTasks[currentTaskIndex].done = !allTasks[currentTaskIndex].done;

    this.setState({
      tasks: allTasks,
    });
  };

  handleOnClickDelete = (e) => {
    const allTasks = this.state.tasks;
    const currentTaskId = e.target.closest('LI').getAttribute('id');

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
            onTextChange={this.handleOnChange}
            onTaskAdd={this.handleOnSubmit}
            text={this.state.inputTask.text}
          />
          <div className="tasks-container">
            <ul className="tasks-container__list">
              {this.state.tasks.map((task) => (
                <Task
                  task={task}
                  key={task.id}
                  handleOnClickAccept={this.handleOnClickAccept}
                  handleOnClickDelete={this.handleOnClickDelete}
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
