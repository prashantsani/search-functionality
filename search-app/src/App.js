import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';

class App extends Component {
  render() {
    var temp_obj = {
      title: "The Richest Man in Babylon",
      summary: "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential",
      author:"Grant Cardone"
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="h1 text-center">Search Books</h1>
        </div>
        
        <form id="user-search" className="user-search">
          <input type="text" className="user-search__input" />
          <button className="user-search__search">SUBMIT</button>
          <h4 className="text-center" className="text-center user-search__selected-book">No Books Selected</h4>
        </form>

        <div className="card-wrapper">
          <Card title={temp_obj.title} summary={temp_obj.summary} author={temp_obj.author}/>
          <Card title={temp_obj.title} summary={temp_obj.summary} author={temp_obj.author}/>
          <Card title={temp_obj.title} summary={temp_obj.summary} author={temp_obj.author}/>
        </div>

      </div>
    );
  }
}

export default App;
