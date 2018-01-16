import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import ItemTypes from './ItemTypes';
import './Card.css';
import CardModal from './CardModal';


const cardSource = {
  beginDrag(props) {
    return {
      id: props.card._id,
      index: props.index,
    }
  },
}

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  },
}
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
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
      <div className="card" onClick={this.toggleModal}>
        <span>{ this.props.card.title }</span>
        <CardModal show={this.state.isOpen} // shows modal only if the "isOpen" property is true
        onClose={this.toggleModal} card={this.props.card}>
        </CardModal>
      </div>
    ));
  }
}

export default flow([
  DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget(ItemTypes.CARD, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  }))
])(Card);
