import React from "react";
import MainNavigation from "./MainNavigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>Gemini Bank</p>
      <MainNavigation />
    </header>
  );
};

export default Header;
