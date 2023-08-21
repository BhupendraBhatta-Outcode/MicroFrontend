import React, { useState } from "react";
import Button from "host/Button";
import Todo from "host/Todo";

const Shared = () => {
    // const [tasks1, setTasks1] = useState([]);

    const deleteAllTask = () => {
      // setTasks1([])
      alert('...This button is from Host app and being alert in from remote app')
      };
  return (
    <div>
      <p>Shared</p>
      {/* <Todo setTasks={setTasks1} tasks={tasks1}/> */}
      <Todo />
      <Button label="Show Alert" onClick={deleteAllTask} />
    </div>
  );
};

export default Shared;
