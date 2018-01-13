import React, { Component } from 'react';
import './createList.css';

class CreateList extends Component {
  render() {
    return (
      <div id="createList">
        <form id="newList">
          <input type="text" ref="title" id="title" placeholder="Add a list..." />
          <input type="submit" id="save" value="save" />
          <input type="submit" id="cancel" value="&times;" />
        </form>
      </div>
    );
  }
}

export default CreateList;
