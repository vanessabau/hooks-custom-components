import React from "react";
import "./button.scss";
import "./../../styles/common.scss";

const Button = ({ children, type, onClick }) => {
  let localClass = "primary";

  if (type === "primary") {
    localClass = "primary";
  }
  if (type === "disabled") {
    localClass = "disabled";
  }

  const cls = `bgYellow fontBlack pad8 width100 radius15 ${localClass}`.trim();

  return (
    <div className="btnClass">
      <button className={cls} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
