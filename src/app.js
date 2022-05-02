import React from 'react';
import MainPage from './components/mainPage';
import TaskPage from './components/taskPage';
import TaskRedactPage from './components/taskRedactPage';
import { Route, Switch } from 'react-router-dom';

export default function App(props) {
  return (
    <Switch>
      <Route path="/" component={() => <MainPage />} exact />
      <Route path="/task/:id" component={(props) => <TaskPage {...props} />} />
      <Route
        path="/taskPage/:id"
        component={(props) => <TaskRedactPage {...props} />}
      />
    </Switch>
  );
}
