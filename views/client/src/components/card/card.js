import React, { Component } from 'react';
import './card.css';
import CardModal from './CardModal';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }; // if the modal for current card is open
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  } // to change the open state of modal for current card 
  
  render() {
    return (
      <div className="card" onClick={this.toggleModal}>
        <span>{ this.props.card.title }</span>
        <CardModal show={this.state.isOpen} // shows modal only if the "isOpen" property is true
        onClose={this.toggleModal} card={this.props.card}> 
        </CardModal>
      </div>
      
    );
  }
}

export default Card;
