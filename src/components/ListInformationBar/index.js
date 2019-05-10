import React from "react";
import s from "./style.module.css";

const ListInformationBar = ({ numberOfItems, numberOfCompletedItems }) => {
  return (
    <div className={s.container}>
      <h2>Total number of items : {numberOfItems}</h2>
      <h2>Total number completed : {numberOfCompletedItems}</h2>
    </div>
  );
};

export default ListInformationBar;
