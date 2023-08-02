import React from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import styles from "./RegisterForm.module.css";
import Button from "../UI/Button/Button";

const RegisterForm = (props) => {
  const handleRegistration = () => {
    console.log("Create account");
  };
  return (
    <Modal onBackdropClick={props.onClose}>
      <div className={styles["registration-form"]}>
        <h2>Registration Form</h2>
        <form>
          <Input type="text" label="Name:" />
          <Input type="email" label="Email:" />
          <Input type="tel" label="Phone Number:" />
          <div className={styles["form-group"]}>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" rows="4" required></textarea>
          </div>
          <Button
            type="submit"
            onClick={handleRegistration}
            label="Create Account"
            styles={styles.button}
          />
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
