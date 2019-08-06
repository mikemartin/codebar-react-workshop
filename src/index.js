import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./components/counter";

function App() {
  return (
    <div>
      <Counter value={1} color={"cyan"} interval="1000" />
      <Counter value={1} color={"magenta"} interval="100" />
      <Counter value={1} color={"yellow"} interval="10" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
