import React from "react";
import s from "./style.module.css";

const ListInformationBar = ({
  numberOfItems,
  numberOfCompletedItems,
  showCompleted,
  setShowCompleted
}) => {
  const switchShowCompleted = e => {
    e.preventDefault();
    setShowCompleted(!showCompleted);
  };

  return (
    <div className={s.container}>
      <h2>Total number of tasks : {numberOfItems}</h2>
      <h2>Total number completed tasks: {numberOfCompletedItems}</h2>
      <button className={s.button} onClick={e => switchShowCompleted(e)}>
        {showCompleted ? "Show only incompleted tasks" : "Show all tasks"}
      </button>
    </div>
  );
};

export default ListInformationBar;
