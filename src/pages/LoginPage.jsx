import React from "react";
import { Form, Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <Card>
        <Form method="post">
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />
          <Button className={styles["btn-login"]}>Login</Button>
          <p>
            Don't have an account?{" "}
            <Link to="create-account" className={styles["link"]}>
              Create one
            </Link>
          </p>
          <p>
            Forgot Password?{" "}
            <Link to="reset-password" className={styles["reset-link"]}>
              Click here to reset
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
