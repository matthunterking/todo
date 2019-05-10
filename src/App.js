import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import Title from "./components/Title";
import Container from "./components/Container";

const App = props => {
  const [showCompleted, setShowCompleted] = useState(true);
  return (
    <Container>
      <Title>To do List</Title>
      <ToDoList
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
    </Container>
  );
};

export default App;
