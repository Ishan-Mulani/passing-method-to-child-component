import React, { Component } from "react";

class BetterNumberItems extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(evt) {
    console.log("handleRemove");
    const { remove, value } = this.props;
    remove(value);
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItems;
