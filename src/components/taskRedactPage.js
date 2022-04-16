import React from 'react';
import { Link } from 'react-router-dom';

export default class TaskRedactPage extends React.Component {
  state = {
    inputRedactTask: {
      id: this.props.location.item.id,
      text: this.props.location.item.text,
      date: this.props.location.item.date,
      done: this.props.location.item.done,
    },
  };

  handleOnTextRedactChange = (e) => {
    this.setState({
      inputRedactTask: {
        ...this.state.inputRedactTask,
        text: e.target.value,
      },
    });
  };

  handleOnDateRedactChange = (e) => {
    this.setState({
      inputRedactTask: {
        ...this.state.inputRedactTask,
        date: e.target.value,
      },
    });
  };

  onTaskRedactSubmitClick = (e) => {
    e.preventDefault();
    if (this.state.inputRedactTask.text.length < 1) return;
    const { item: task } = this.props.location;
    this.props.location.onRedactSubmit({
      id: this.state.inputRedactTask.id,
      text: this.state.inputRedactTask.text,
      date: this.state.inputRedactTask.date,
      done: this.state.inputRedactTask.done,
    });
    this.setState({
      inputRedactTask: {
        id: task.id,
        text: task.text,
        date: task.date,
        done: task.done,
      },
    });
  };

  render() {
    return (
      <div className="task-redact__wrapper">
        <form
          className="tasks-redact__form"
          onSubmit={this.onTaskRedactSubmitClick}
        >
          <input
            className="tasks-redact__textInput"
            type="text"
            placeholder="Редактируйте задачу"
            tabIndex="1"
            value={this.state.inputRedactTask.text}
            onChange={this.handleOnTextRedactChange}
          />
          <div className="tasks-redact__itemsWrapper__textAndDateWrapper">
            <span className="tasks-redact__text"> Указать дедлайн </span>
            <input
              className="tasks-redact__dateInput"
              type="date"
              tabIndex="2"
              value={this.state.inputRedactTask.date}
              onChange={this.handleOnDateRedactChange}
            ></input>
          </div>
          <div className="tasks-redact__itemsWrapper__buttons">
            <button className="tasks-redact__button-save" type="submit">
              Сохранить
            </button>
            <div className="tasks-redact__button-cancel">
              <Link to="/">Отмена</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
