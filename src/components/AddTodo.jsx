import React, { useCallback, useState } from "react";
import { TodoContext, useTodo } from "../context";
import { set } from "mongoose";
const AddTodo = () => {
  const [todo, setTodo] = useState([]);

  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!todo) return;
    console.log(Date.now());
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("")
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="pt-8 ">

      <h1 className="text-3xl font-bold">Jo karna hai sab likh do yaha </h1>
      <p className="font-medium text-slate-600">Vo baat alag hai ke karoge nahi par likh do</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="shadow-lg w-fit">
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);

            }}
            className="outline-none py-1 px-2 rounded-s-sm text-neutral-800 font-semibold"
            placeholder="Add todo"
          />

          <button
            onClick={handleSubmit}
            className="bg-slate-300 py-1 px-3 rounded-e-sm text-white"
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
