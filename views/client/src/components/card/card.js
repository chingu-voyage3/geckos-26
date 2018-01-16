import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <span>{ this.props.card.title }</span>
      </div>
    );
  }
}

export default Card;
