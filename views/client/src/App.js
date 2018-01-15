import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import BoardMenu from './components/BoardMenu/BoardMenu';
import List from './components/List/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
      fetch('/api/list')
      .then(list => {
        return list.json();
      })
      .then(json => {
        this.setState({
          lists: json,
        });
      });
  }

  render() {
    var lists = this.state.lists;
    lists = lists.map((list, index) => {
      return(
        <List listTitle={ list.title } key={ index } cards={ list.cards } />
      )
    });

    return (
      <div className="App">
        <Header />
        <BoardMenu />
        <div className = "board-content">
          {lists}
        </div>
      </div>
    );
  }
}

export default App;
