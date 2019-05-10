import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./style.module.css";
import ListItem from "../ListItem";

const ToDoList = props => {
  const [listItems, setListItems] = useState([]);
  const [completedItems, setCompletedItems] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/todos").then(({ data }) => {
      const sortedData = data.sort((a, b) => b.id - a.id);
      const completed = data.filter(item => item.completed);
      setListItems(sortedData);
      setCompletedItems(completed.length);
    });
  }, []);

  return (
    <div>
      <p>Total number of items {listItems.length}</p>
      <p>Total number completed {completedItems}</p>
      {listItems.map(({ userId, id, title, completed }) => (
        <ListItem
          key={id}
          title={title}
          userId={userId}
          id={id}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default ToDoList;
