import React, { Component } from "react";
import ToDoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>To do List</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
