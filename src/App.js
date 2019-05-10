import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import Title from "./components/Title";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <Title>To do List</Title>
        <ToDoList />
      </Container>
    );
  }
}

export default App;
