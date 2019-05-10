import React from "react";
import s from "./style.module.css";
import cn from "classnames";

const ListItem = ({ id, title, userId, completed }) => {
  return (
    <div className={cn(s.container, { [s.completed]: completed })}>
      <h2>{title}</h2>
      <div className={s.informationContainer}>
        <p>Item Id : {id}</p>
        <p>User Id: {userId}</p>
      </div>
      <div className={s.statusContainer}>
        {completed ? (
          <p className={cn(s.stats, s.tick)}>&#10003;</p>
        ) : (
          <p className={cn(s.stats, s.cross)}>&#10007;</p>
        )}
      </div>
    </div>
  );
};

export default ListItem;
