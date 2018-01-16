import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import './List.css';
import Card from '../Card/Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards
    };
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    );
  };

  render() {
    const { cards, listTitle } = this.props;
    return (
      <div className="list">
        <div className="list-top">
            <span>{listTitle}</span>
            <a href="#"><i className="fa fa-bars menu-icon" aria-hidden="true"></i></a>
        </div>
        <div className="cards">
          {cards.map((card, i) => (
            <Card
              key={card._id}
              index={i}
              moveCard={this.moveCard}
              card={card}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(List);
