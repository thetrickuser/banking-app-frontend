import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.search}>
        <form className={styles["search-form"]}>
          <input placeholder="Search for movies here" />
        </form>
      </div>

      <div className={styles.movies}>
        <img src="assets/Jawan-new-posters.jpg" alt="Jawan Pic" />
      </div>
    </>
  );
};

export default Home;
