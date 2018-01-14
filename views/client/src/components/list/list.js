import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';import './list.css';
import Card from '../card/card'

class List extends Component {
  render() {
    var cards = this.props.list.cards;
    cards = cards.map(function(card, index){
      return (
        <Card card={ card } key={ index } />
      )
    });

    return (
      <div className="list">
        <div className="list-top">
            <span>{ this.props.list.title }</span>
            <a href="#"><i className="fa fa-bars menu-icon" aria-hidden="true"></i></a>
        </div>
        <div className = "cards">
          { cards }
        </div>
      </div>
    );
  }
}

export default List;
