import React, { Component } from 'react';
import './list.css';
import Card from '../card/card'

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list-top">
            <span>ACT 1</span>
            <a href><i className="fa fa-bars menu-icon" aria-hidden="true"></i></a>
        </div>
        <div className = "cards">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default List;