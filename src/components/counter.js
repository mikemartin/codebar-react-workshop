import React, { Fragment } from "react";
import "./buttons.css";
import { StartButton, StopButton } from "./buttons";
import { Number } from "./number";

class Counter extends React.Component {
  state = {
    timer: null,
    counter: this.props.value || 0,
    color: this.props.color
  };

  CounterStart = () => {
    const timer = setInterval(this.step, this.props.interval || 100);
    this.setState({ timer });
  };

  CounterStop = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: null, counter: this.props.start || 0 });
  };

  step = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <Number color={this.state.color} value={this.state.counter} />
        <StartButton onStart={this.CounterStart} />
        <StopButton onStop={this.CounterStop} />
      </Fragment>
    );
  }
}

export { Counter };
