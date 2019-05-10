import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = props => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/todos").then(({ data }) => {
      console.log(data);
      setListItems(data);
    });
  });

  return (
    <div>
      {listItems.map(({ userId, id, title, completed }) => (
        <div key={id}>
          <span>{id}</span>
          <span>{title}</span>
          <span>{userId}</span>
          <span>{completed ? "completed" : ""}</span>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
