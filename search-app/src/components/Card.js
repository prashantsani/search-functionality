import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card text-center" itemScope itemType="http://schema.org/Book">
        <h4 className="title" itemProp="name">{this.props.title}</h4>
        <h5 className="summary" itemProp="about">{this.props.summary}</h5>
        <h6 className="author" itemProp="author">{this.props.author}</h6>
      </div>
    );
  }
}

export default Card;
