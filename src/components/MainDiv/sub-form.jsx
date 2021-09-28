import React, { useState, useEffect, useRef } from "react";
// import { Wrapper, Card, CardWrapper, Form, Button } from "./styles";

function SubForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      {/* <Wrapper> */}
      {/* <CardWrapper>
        <Card>
          Mathematics
        </Card>
        <Card>
          Science
        </Card>
        <Card>
          English
        </Card>
      </CardWrapper> */}
      {/* <Form> */}
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Add a subject"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
            />
            <button className="todo-button">Add+</button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">
              Add todo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default SubForm;
