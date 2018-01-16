import React, { Component } from 'react';
import './CreateList.css';

class CreateList extends Component {
  render() {
    return (
      <div id="createList">
        <form id="newList" onSubmit={ this.props.handleSubmit }>
          <input type="text" ref={ this.props.title } id="title" placeholder="Add a list..." />
          <input type="submit" id="save" value="save" />
          <input type="submit" id="cancel" value="&times;" />
        </form>
      </div>
    );
  }
}

export default CreateList;
