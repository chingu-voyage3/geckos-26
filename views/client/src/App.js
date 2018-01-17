import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import BoardMenu from './components/BoardMenu/BoardMenu';
import List from './components/List/List';
import CreateList from './components/List/CreateList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: []
    }
    this.handleSubmit = this.handleSubmit.bind(this); // Bind this otherwise refs do not work
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
          { lists }
          <CreateList handleSubmit={ this.handleSubmit } title={ title => this.title = title } />
          <button id="submit">Submit</button>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent the page from reloading
    
    var data = {
      title: this.title.value,
      author: "Fabien",
    }

    fetch('api/list', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then(function(res){
        console.log("made a request");
        return res.json();
    }).then(function(json){
      console.log(json);
    })
  }
}

export default App;
