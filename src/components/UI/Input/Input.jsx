import React, { Fragment } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <div className={styles["form-group"]}>
        <label>{props.label}</label>
        <input
          type={props.type}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </Fragment>
  );
};

export default Input;
