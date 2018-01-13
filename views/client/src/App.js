import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import BoardMenu from './components/BoardMenu/BoardMenu';
import List from './components/list/list';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
      fetch('/api/list')
      .then(function(list){
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
    lists = lists.map(function(list, index){
      return(
        <List list={ list } key={ index } />
      )
    });

    return (
      <div className="App">
        <Header />
        <BoardMenu />
        <div className = "board-content">
          {lists}
          <button id="submit" onClick= { this.handleSubmit }>Submit</button>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    var init = {
      method: 'POST'
    };

    fetch('api/list', init)
    .then(function(res){
        console.log("made a request");
        return res.json();
      })
    .then(function(json){
      console.log(json);
    })
  }
}

export default App;
