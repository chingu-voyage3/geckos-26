import React from 'react';

class CardModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false in the card
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      color : '#000'
    };
    var comments = this.props.card.comments; // Get comments array from the props
    var comments_list = comments.map(function(comment, index){
      return (
        <div className="comments"><h5>{comment.author}</h5>
        <p>{comment.text}</p>
        <p>{comment.created_date}</p>
        </div>
      ); //returns a comment format 
    });
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <h2>{this.props.card.title}</h2>
          <p>{this.props.card.description}</p>
          <h5>Author : {this.props.card.author}</h5>    
          <h4>Comments</h4> 
          {comments_list}
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    ); // the modal format
  }
}

export default CardModal;
