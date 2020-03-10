import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './data.json';
import search from './search-utility-function.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'search_results': [],
      'selected_result_title': null,
      'selected_result_id': null,
      'selected_result_summary': null,
      'selected_result_author': null,
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
      'selected_result_summary': null,
      'selected_result_author': null,
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

  addSelectedBook(e){
    console.log();

    e.preventDefault()

    // Since this.state is not a good option, it makes sense to clone the exisiting array and then push it
    var new_selected_books = this.state.selected_books.slice();
    new_selected_books.push({
      title: this.state.selected_result_title,
      summary: this.state.selected_result_summary,
      author: this.state.selected_result_author,
      id: this.state.selected_result_id
    });
    
    this.setState({
      'selected_books': new_selected_books,
      'selected_result_title': null,
      'selected_result_id': null,
      'selected_result_summary': null,
      'selected_result_author': null
    });

    return false;
  }

  handleAutoCompleteClick(e){
      e.preventDefault();

      var index = e.currentTarget.dataset.id,
          obj = {
            selected_result_title: data.titles[index],
            selected_result_id: index,
            search_results:[],
            selected_result_summary: data.summaries.filter ( summary => {return summary.id == index})[0].summary,
            selected_result_author: data.authors.filter ( author => {return author.book_id == index})[0].author
          };

      this.setState(obj);

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
          <button className="user-search__search" onClick={this.addSelectedBook.bind(this)} placeholder={this.state.selected_result}>SELECT</button>
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
