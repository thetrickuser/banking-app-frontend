import React from "react";
import styles from "./Center.module.css";

const Center = (props) => {
  return (
    <div className={`${styles.center} + ${" "} + ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Center;
