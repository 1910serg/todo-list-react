import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';

class LiItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
    this.handlerOnChange = this.handlerOnChange.bind(this);
    this.state = {
      tasks: [],
      inputTask: {
        id: '',
        text: '',
        done: '',
      },
    };
  }

  handlerOnChange(e) {
    this.setState({
      inputTask: {
        id: Math.random().toString(),
        text: e.target.value,
        done: false,
      },
    });
  }

  handlerOnSubmit(e) {
    e.preventDefault();
    if (this.state.inputTask.text.length > 0) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            id: this.state.inputTask.id,
            text: this.state.inputTask.text,
            done: this.state.inputTask.done,
          },
        ],
      });

      this.setState({
        inputTask: {
          id: '',
          text: '',
          done: '',
        },
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <form className="tasks-сreator__form" onSubmit={this.handlerOnSubmit}>
            <input
              className="tasks-сreator__input"
              type="text"
              placeholder="Напишите задачу"
              tabIndex="1"
              value={this.state.inputTask.text}
              onChange={this.handlerOnChange}
            />
            <button className="tasks-сreator__button" type="submit">
              Добавить
            </button>
          </form>
          <div className="tasks-container">
            <ul className="tasks-container__list">
              {this.state.tasks.map((task) => (
                <Task task={task} key={task.id} />
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
    <LiItem />
  </React.StrictMode>,
  document.querySelector('#root')
);
