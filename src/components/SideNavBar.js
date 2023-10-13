import React from "react";
import styles from "./SideNavBar.module.css";

const SideNavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="navbar-header">Profile</div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
