import React, { Component } from 'react';

class Autocomplete extends Component {
  render() {
    return (
      <button className="auto-complete__link" onClick={this.props.onClick} id={this.props.id} data-id={this.props.id} key={this.props.id}>{this.props.text}</button>
    );
  }
}

export default Autocomplete;
