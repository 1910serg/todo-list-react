import React from 'react';
import HoverButtons from './hoverButtons';

export default class Task extends React.Component {
  state = { relatedLiL: '' };

  handlerMouseEnter(e) {
    this.setState(() => ({
      relatedLi: e.target,
    }));
    e.target.querySelector('.tasks-container__item__span').style.visibility =
      'visible';
  }

  handlerMouseLeave(e) {
    this.state.relatedLi.querySelector(
      '.tasks-container__item__span'
    ).style.visibility = 'hidden';
  }

  render() {
    return (
      <li
        id={this.props.task.id}
        className="tasks-container__item"
        done={this.props.task.done.toString()}
        onMouseEnter={this.handlerMouseEnter.bind(this)}
        onMouseLeave={this.handlerMouseLeave.bind(this)}
      >
        {this.props.task.text}
        <HoverButtons task={this.props.task} />
      </li>
    );
  }
}
