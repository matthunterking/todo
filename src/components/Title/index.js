import React from "react";
import s from "./style.module.css";

const Title = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>;
};

export default Title;
