import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
          <div className="card text-center" itemScope itemType="http://schema.org/Book">
            <h4 className="title" itemProp="name">The Richest Man in Babylon</h4>
            <h5 className="summary" itemProp="about">The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential</h5>
            <h6 className="author" itemProp="author">Grant Cardone</h6>
          </div>
          <div className="card text-center" itemScope itemType="http://schema.org/Book">
            <h4 className="title" itemProp="name">The Richest Man in Babylon</h4>
            <h5 className="summary" itemProp="about">The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential</h5>
            <h6 className="author" itemProp="author">Grant Cardone</h6>
          </div>
          <div className="card text-center" itemScope itemType="http://schema.org/Book">
            <h4 className="title" itemProp="name">The Richest Man in Babylon</h4>
            <h5 className="summary" itemProp="about">The Book in Three Sentences: The 10X Rule says that 1) you should set targets for yourself that are 10X greater than what you believe you can achieve and 2) you should take actions that are 10X greater than what you believe are necessary to achieve your goals. The biggest mistake most people make in life is not setting goals high enough. Taking massive action is the only way to fulfill your true potential</h5>
            <h6 className="author" itemProp="author">Grant Cardone</h6>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
