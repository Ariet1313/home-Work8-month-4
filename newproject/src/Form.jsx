import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  handleIncrement = () => {
    if (this.state.num < 15) {
      this.setState({ num: this.state.num + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    }
  };

  handleReset = () => {
    this.setState({ num: 0 });
  };

  handleAddFive = () => {
    if (this.state.num <= 10) {
      this.setState({ num: this.state.num + 5 });
    } else {
      this.setState({ num: 15 });
    }
  };

  handleSubtractFive = () => {
    if (this.state.num >= 5) {
      this.setState({ num: this.state.num - 5 });
    } else {
      this.setState({ num: 0 });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleAddFive}>+5</button>
        <button onClick={this.handleSubtractFive}>-5</button>
      </div>
    );
  }
}

export default Form;
