import React, { Component } from 'react';
import './card.css';
import CardModal from './CardModal';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="card" onClick={this.toggleModal}>
        <span>{ this.props.card.title }</span>
        <CardModal show={this.state.isOpen}
        onClose={this.toggleModal}>
        `Here's some content for the modal`
        </CardModal>
      </div>
      
    );
  }
}

export default Card;
