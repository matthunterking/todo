import React from "react";
import s from "./style.module.css";
import ListItem from "../ListItem";
import ListInformationBar from "../ListInformationBar";
import withListItems from "../../hoc/withListItems";

const ToDoList = ({ listItems, completedItems }) => {
  return (
    <div className={s.container}>
      <ListInformationBar
        numberOfItems={listItems.length}
        numberOfCompletedItems={completedItems}
      />
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
