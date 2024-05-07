import React from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div
        className="flex-grow-1"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.text}
      </div>
      <div>
        <button
          className="btn btn-success me-2"
          onClick={() => toggleComplete(todo.id)}
        >
          Done
        </button>
        <button className="btn btn-danger" onClick={() => removeTodo(todo.id)}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Todo;
