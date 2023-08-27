import React from "react";
import styles from "./Input.module.css";
import { useState } from "react";

const Input = (props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = (event) => {
    setIsInputFocused(true);
  };

  const handleBlur = (event) => {
    setIsInputFocused(false);
  };
  return (
    <div className={styles["form-control"]}>
      <label className={isInputFocused ? styles["active-label"] : ""}>
        {props.label}
      </label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.label}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default Input;
