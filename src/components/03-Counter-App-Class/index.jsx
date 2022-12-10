/* eslint-disable no-unused-expressions */
import React from "react";

class Counter extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
    return (
      <>
        <h1>{this.props.heading}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </>
    );
  }
}

export default Counter;
