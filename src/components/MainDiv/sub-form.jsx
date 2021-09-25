import React, { useState } from "react";
import { Wrapper, Card, CardWrapper, Form, Button } from "./styles";

function SubForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
    setInput("");
  };
  return (
    <Wrapper>
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
        {/* <label>Add+</label>
          <input type="text" name="add" /> */}
        <input
          type="text"
          placeholder="Add a subject"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <Button className="todo-button">Add+</Button>
      </form>
      {/* </Form> */}
    </Wrapper>
  );
}

export default SubForm;
