import React from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const LoginForm = (props) => {
  const handleLogin = () => {
    console.log("Login");
  };
  return (
    <Modal onBackdropClick={props.onClose}>
      <div className={styles["login-form"]}>
        <h2>Login Form</h2>
        <form>
          <Input type="email" label="Email:" />
          <Input type="password" label="Password:" />
          <Button
            styles={styles.button}
            type="button"
            label="Login"
            onClick={handleLogin}
          />
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
