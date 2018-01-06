import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import BoardMenu from './components/BoardMenu/BoardMenu';
import List from './components/list/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardMenu />
        <div className = "board-content">
          <List />
          <List />
          <List />
        </div>
        
      </div>
    );
  }
}

export default App;
