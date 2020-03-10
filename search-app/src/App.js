import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './data.json';
import search from './search-utility-function.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'selected_but_not_added': null,
      'selected_books':[
        {
          title: "The Richest Man in Babylon",
          summary: "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential",
          author:"Grant Cardone",
          id:"1"
        },
        {
          title: "The Richest Man in Babylon",
          summary: "The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential",
          author:"Grant Cardone",
          id:"2"
        }
      ]
    }
  }
  handleKeyDown(e){
    // Only search if the value is more than 4 letters
    if(e.target.value.length>4){
      var results = search(e.target.value,3, data);
      console.log(results);
    }
  }
  render() {
    const cards = this.state.selected_books.map(function(book){
      return <Card key={book.id} title={book.title} summary={book.summary} author={book.author}/>;
    });


    return (
      <div className="App">
        <div className="App-header">
          <h1 className="h1 text-center">Search Books</h1>
        </div>
        
        <form id="user-search" className="user-search">
          <input type="text" className="user-search__input" onKeyDown={this.handleKeyDown} />
          <button className="user-search__search">SELECT</button>
          <h4 className="text-center" className="text-center user-search__selected-book">No Books Selected</h4>
        </form>

        <div className="card-wrapper">
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
