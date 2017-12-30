import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a className="Header-boards-btn" href="#">
          <i className="fa fa-trello Header-boards-btn-icon" aria-hidden="true"></i>
          <span className="Header-boards-btn-text">Boards</span>
        </a>
        <img className="Header-trello-logo" src="https://i.imgur.com/D9zXYd2.png" role="presentation" />
        <a className="Header-profile" href="#">
          <img className="Header-profile-avatar" src="https://i.imgur.com/JmQDJ3j.png" alt="candy tsai" />
        </a>
      </div>
    );
  }
}

export default Header;