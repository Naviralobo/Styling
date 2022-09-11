import React from "react";

import "./Button.css";

const Button = (props) => {
  let classNames = "button " + props.className;
  return (
    <button type={props.type} className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
