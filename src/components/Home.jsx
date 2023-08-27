import React from "react";
import styles from "./Home.module.css";
import Button from "./UI/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <p className={styles["title-text"]}>Welcome to Gemini Bank</p>
      <p className={styles.desc}>Your one stop for all the banking needs</p>
      <div className={styles.actions}>
        <Button className={styles["action-button"]}>Create Account</Button>
        <Button className={styles["action-button"]}>Apply for Loan</Button>
        <Button className={styles["action-button"]}>
          Apply for Credit Card
        </Button>
      </div>
    </div>
  );
};

export default Home;
