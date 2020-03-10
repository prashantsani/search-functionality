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
      'search_results': [],
      'selected_result_title': null,
      'selected_result_id': null,
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

    this.setState({
      'selected_result_title': null,
      'selected_result_id': null,
    });

    if(e.target.value.length>4){
      var results = search(e.target.value,3, data);
      if(Array.isArray(results)){
        console.log(results);
        this.setState({
          search_results:results
        });
      }else{
        console.log("Not displayed",results);
      }
    }
  }

  handleAutoCompleteClick(e){
      e.preventDefault();

      this.setState({
        selected_result_title: data.titles[e.currentTarget.dataset.id],
        selected_result_id: e.currentTarget.dataset.id,
        search_results:[],
        has_user_selected_a_book: true
      })

      return false;
  }

  render() {
    const cards = this.state.selected_books.map(book => {
      return <Card key={book.id} title={book.title} summary={book.summary} author={book.author}/>;
    });

    const search_results = this.state.search_results.map(result => {
      return <button className="auto-complete__link" data-id={result.id} key={result.id} onClick={this.handleAutoCompleteClick.bind(this)}>{data.titles[result.id]}</button>
    });


    return (
      <div className="App">
        <div className="App-header">
          <h1 className="h1 text-center">Search Books</h1>
        </div>
        
        <form id="user-search" className="user-search">
          <input type="text" className="user-search__input" onKeyDown={this.handleKeyDown.bind(this)} />
          <button className="user-search__search" placeholder={this.state.selected_result}>SELECT</button>
          <span className="user-search__add-result">{this.state.selected_result_title}</span>
          {/* <h4 className="text-center" className="text-center user-search__selected-book">No Books Selected</h4> */}
          <div className="auto-complete">{search_results}</div>
        </form>

        <div className="card-wrapper">{cards}</div>
      </div>
    );
  }
}

export default App;
