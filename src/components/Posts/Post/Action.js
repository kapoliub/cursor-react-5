import React from "react";

const Action = (props) => {
  return (
    <div className="action">
      <img src={props.img} alt="action_icon" />
      <span>{props.count}</span>
    </div>
  );
};

export default Action;
