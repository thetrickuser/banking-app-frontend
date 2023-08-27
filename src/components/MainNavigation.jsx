import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import Button from "./UI/Button";

const MainNavigation = () => {
  return (
    <>
      <ul className={styles["main-nav"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
