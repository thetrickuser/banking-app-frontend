import React, { Fragment, useState } from "react";

import styles from "./Header.module.css";
import Button from "../UI/Button/Button";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";

const Header = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleClose = () => {
    setShowRegisterForm(false);
    setShowLoginForm(false);
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.title}>PsyBank</div>
        <div className={styles.actions}>
          <Button
            styles={styles.login}
            label="Login"
            onClick={handleLoginClick}
          />
          <Button
            styles={styles.register}
            label="Register"
            onClick={handleRegisterClick}
          />
        </div>
      </div>
      {showRegisterForm && <RegisterForm onClose={handleClose} />}
      {showLoginForm && <LoginForm onClose={handleClose} />}
    </Fragment>
  );
};

export default Header;
