import React from "react";
import s from "./style.module.css";

const ListItem = ({ id, title, userId, completed }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p>User : {userId}</p>
      <p> ID : {id}</p>
      <p>{completed ? "completed" : "not completed"}</p>
    </div>
  );
};

export default ListItem;
