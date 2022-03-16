import React from 'react';
import MainPage from './components/mainPage';
import TaskPage from './components/taskPage';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  state = {
    tasks: [],
  };

  handleOnSubmit = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  handleOnClickAccept = (e, currentTaskId) => {
    e.preventDefault();
    const allTasks = this.state.tasks;

    const currentTaskIndex = allTasks.findIndex(
      (task) => task.id == currentTaskId
    );

    allTasks[currentTaskIndex].done = !allTasks[currentTaskIndex].done;

    this.setState({
      tasks: allTasks,
    });
  };

  handleOnClickDelete = (e, currentTaskId) => {
    e.preventDefault();
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
    return (
      <Switch>
        <Route
          path="/"
          component={() => (
            <MainPage
              onSubmit={this.handleOnSubmit}
              onClickAccept={this.handleOnClickAccept}
              onClickDelete={this.handleOnClickDelete}
              tasks={this.state.tasks}
            />
          )}
          exact
        />
        <Route
          path="/task/:id"
          component={(props) => <TaskPage {...props} />}
        />
      </Switch>
    );
  }
}
