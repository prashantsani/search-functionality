import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form id="user-search" className="user-search">
        <input type="text" className="user-search__input" onKeyDown={this.props.onInputKeyDown} />
        <button className="user-search__search" onClick={this.props.addSelectedBook}>SELECT</button>
        <span className="user-search__add-result">{this.props.selected_result_title}</span>
        <div className="auto-complete">{this.props.search_results}</div>
      </form>
    );
  }
}

export default Form;
