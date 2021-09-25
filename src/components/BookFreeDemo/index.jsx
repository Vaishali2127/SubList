import React from "react";
import { Wrapper, Card } from "./styles";

const BookFreeDemo = () => {
  return (
    <Wrapper>
      <Card>
        <h1>Join Online Classes For Students – All Subjects</h1>
        <form action="submit">
          <label>Full name:</label>
          <input type=""></input>
          <br />
          <label>E-mail id :</label>
          <input type=""></input>
          <br />
          <input type="submit"></input>
        </form>
      </Card>
    </Wrapper>
  );
};

export default BookFreeDemo;
