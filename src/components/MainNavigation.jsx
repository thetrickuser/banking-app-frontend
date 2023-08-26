import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <ul className={styles["main-nav"]}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <button>
            <NavLink>Sign Up / Login</NavLink>
          </button>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
