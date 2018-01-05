import React, { Component } from 'react';
import './BoardMenu.css';

class BoardMenu extends Component {
  render() {
    return (
      <div className="BoardMenu">
        <span className="name">Team Board</span>
        <a className="team-btn" href="#">Gecko-26</a>
      </div>
    );
  }
}

export default BoardMenu;