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
      cards: [
        {
          id: 1,
          text: 'First Card',
        },
        {
          id: 2,
          text: 'Second Card',
        },
      ]
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
    const { cards } = this.state;
    return (
      <div className="list">
        <div className="list-top">
            <span>ACT 1</span>
            <a href="#"><i className="fa fa-bars menu-icon" aria-hidden="true"></i></a>
        </div>
        <div className="cards">
          {cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={this.moveCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(List);
