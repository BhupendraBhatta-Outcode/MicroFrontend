import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Components/Todo";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-4xl ">
    <div>Host App Welcomes you</div>
    <div className="border-2 border-sky-500">
      <Todo />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
