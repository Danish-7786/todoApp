import React, { useState } from "react";
import { useTodo } from "../context";
const TodoItem = ({ todo }) => {
  const { toggleComplete, updateTodo, deleteTodo } = useTodo();
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleClick = (e, id) => {
    setUpdateFlag(!updateFlag);

    if (updateFlag) {
      // so in update todo we were passing whole todo object so we destructure the whole
      // object and made the todo text to new editTodot text
      updateTodo(id, { ...todo, todo: editTodo });
    }
  };
  const [updateFlag, setUpdateFlag] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-sm text-black flex justify-between p-2 w-[80%] ">
      {updateFlag ? (
        <input
          className="bg-white outline-dotted border-none"
          value={editTodo}
          type="text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <p className={todo.completed ? "line-through" : "no-underline"}>
          {todo.todo}
        </p>
      )}
      <div className="flex gap-2">
        <button onClick={(e) => handleClick(e, todo.id)}>
          {updateFlag ? "📑" : "✏️"}
        </button>
        <button onClick={(e) => deleteTodo(todo.id)}>❌</button>
        <input
          checked={todo.completed == true}
          onClick={(e) => toggleComplete(todo.id)}
          type="checkbox"
        
        />
      </div>
    </div>
  );
};

export default TodoItem;
