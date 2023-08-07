import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import styles from "./RegisterForm.module.css";
import Button from "../UI/Button/Button";

const RegisterForm = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRegistration = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phoneNumber,
      address,
      username,
      password
    }

    const response = await fetch('http://localhost:8090/auth/register', {
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
      <div className={styles["registration-form"]}>
        <h2>Registration Form</h2>
        <form>
          <div className="form-controls">

          <Input type="text" label="Name:" onChange={handleNameChange} value={name}/>
          <Input type="email" label="Email:" onChange={handleEmailChange} value={email}/>
          <Input type="tel" label="Phone Number:" onChange={handlePhoneChange} value={phoneNumber}/>
          <Input type="username" label="Username: " onChange={handleUsernameChange} value={username}/>
          <Input type="password" label="Password: " onChange={handlePasswordChange} value={password}/>
          <Input type="text" label="Address: " onChange={handleAddressChange} value={address}/>
          <Button
            type="submit"
            onClick={handleRegistration}
            label="Create Account"
            styles={styles.button}
          />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
