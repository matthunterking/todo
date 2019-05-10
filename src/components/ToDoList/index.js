import React, { Fragment } from "react";
import s from "./style.module.css";
import ListItem from "../ListItem";
import ListInformationBar from "../ListInformationBar";
import withListItems from "../../hoc/withListItems";

const ToDoList = ({
  showCompleted,
  setShowCompleted,
  listItems,
  incompletedItems
}) => {
  const itemsToDisplay = showCompleted ? listItems : incompletedItems;
  return (
    <Fragment>
      <ListInformationBar
        numberOfItems={listItems.length}
        numberOfCompletedItems={listItems.length - incompletedItems.length}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      {itemsToDisplay.map(({ userId, id, title, completed }) => (
        <ListItem
          key={id}
          title={title}
          userId={userId}
          id={id}
          completed={completed}
        />
      ))}
    </Fragment>
  );
};

export default withListItems(ToDoList);
