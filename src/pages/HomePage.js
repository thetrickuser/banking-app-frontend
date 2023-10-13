import React from "react";
import styles from "./HomePage.module.css";
import SideNavBar from "../components/SideNavBar";
import Header from "../components/Header";
import Home from "../components/Home";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <SideNavBar />
      <div className={styles["home-content"]}>
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
