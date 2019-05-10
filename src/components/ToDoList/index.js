import React from "react";
import s from "./style.module.css";
import ListItem from "../ListItem";
import withListItems from "../../hoc/withListItems";

const ToDoList = ({ listItems, completedItems }) => {
  return (
    <div className={s.container}>
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

export default withListItems(ToDoList);
