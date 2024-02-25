import React, { Component } from "react";
import BetterNumberItems from "./BetterNumberItems";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5],
    };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState((currState) => {
      return { nums: currState.nums.filter((n) => num != n) };
    });
    console.log("nums", this.state.nums);
    console.log({ num });
    console.log(
      "sfsdsf",
      this.state.nums.filter((n) => num != n)
    );
  }
  render() {
    let nums = this.state.nums.map((n) => {
      return <BetterNumberItems value={n} remove={this.remove} />;
    });
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
