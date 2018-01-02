import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import BoardMenu from './components/Board/BoardMenu';
import List from './components/list/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardMenu />
        <List />
      </div>
    );
  }
}

export default App;
