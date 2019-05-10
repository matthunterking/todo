import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./style.module.css";

const ToDoList = props => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/todos").then(({ data }) => {
      const sortedData = data.sort((a, b) => b.id - a.id);
      setListItems(sortedData);
    });
  }, []);

  return (
    <div>
      {listItems.map(({ userId, id, title, completed }) => (
        <div key={id} className={s.listItem}>
          <h2>{title}</h2>
          <p>User : {userId}</p>
          <p> ID : {id}</p>
          <p>{completed ? "completed" : "not completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
