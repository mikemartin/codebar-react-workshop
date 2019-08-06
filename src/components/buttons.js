import React from "react";
import "./counter.css";

function StartButton(props) {
  return (
    <button className="counter-start" onClick={props.onStart}>
      Start
    </button>
  );
}

function StopButton(props) {
  return (
    <button className="counter-start" onClick={props.onStop}>
      Stop
    </button>
  );
}

export { StartButton, StopButton };
