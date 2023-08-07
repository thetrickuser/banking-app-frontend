import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const LoginForm = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = {
      username,
      password
    }

    
    const response = await fetch('http://localhost:8090/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  };
  return (
    <Modal onBackdropClick={props.onClose}>
      <div className={styles["login-form"]}>
        <h2>Login Form</h2>
        <form>
          <Input type="text" label="Username:" onChange={handleUsernameChange} value={username}/>
          <Input type="password" label="Password:" onChange={handlePasswordChange} value={password}/>
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
