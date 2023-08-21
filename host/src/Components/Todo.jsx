import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
  return (
    <div className="p-4 w-90 ">
    <h1 className="text-2xl font-bold mb-4">TODO App</h1>
    <div className="flex space-x-2 mb-4">
      <InputField
        placeholder="Enter task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button label="Add Task" onClick={addTask} />
    </div>
    <ul>
      {tasks?.map((task, index) => (
        <li key={index} className="mb-2">
          <div className="border-2 border-indigo-500 rounded-lg ">
          <p className="p-2 ">{task}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
