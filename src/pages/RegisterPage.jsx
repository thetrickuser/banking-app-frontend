import React from "react";
import styles from "./RegisterPage.module.css";
import Card from "../components/UI/Card";
import { Form } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Center from "../components/UI/Center";

const RegisterPage = () => {
  return (
    <Center className={styles.register}>
      <Card>
        <Form method="post">
          <Input type="text" label="Name" />
          <Input type="phone" label="Phone Number" />
          <Input type="email" label="Email" />
          <Input type="text" label="Address" />
          <Input type="text" label="Username" />
          <Input type="text" label="Password" />
          <Input type="text" label="Confirm Password" />
          <Button className={styles["btn-register"]}>Register</Button>
        </Form>
      </Card>
    </Center>
  );
};

export default RegisterPage;
