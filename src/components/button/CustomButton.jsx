import React from "react";
import "./custombutton.scss";

export const CustomButton = ({ title, classes, type, onSubmit, ...props }) => {
  return (
    <div className="btn-container">
      <button type={type} className={` ${classes}`} onClick={onSubmit}>
        {title}
      </button>
    </div>
  );
};
