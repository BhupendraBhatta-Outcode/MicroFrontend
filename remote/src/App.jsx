import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Todo from "host/Todo";
import Shared from "./Shared";
import DeleteButton from "./Buttons/DeleteButton";
const App = () => (

  <div className="mt-10 text-3xl mx-auto max-w-4xl">
    <div>Welcome to remote App</div>
    <div className="p-4 border border-solid">
      {/* <Todo/> */}
      <Shared/>
      {/* <DeleteButton /> */}
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
