import React, { useState } from "react";
import SubForm from "./sub-form";

function SubList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <div>
      <h1>Add Subjects</h1>
      <SubForm onSubmit={addTodo} />
    </div>
  );
}

export default SubList;
