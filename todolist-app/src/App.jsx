import React, { useState } from "react";
import "./App.css"; // component-specific styles

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  // Toggle completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">✨ To-Do List</h1>

        {/* Input Field */}
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span
                onClick={() => toggleTask(task.id)}
                className={`task-text ${task.completed ? "completed" : ""}`}
              >
                {task.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && <p className="empty">No tasks yet.</p>}
      </div>
    </div>
  );
}
