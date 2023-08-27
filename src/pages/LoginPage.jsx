import React from "react";
import { Form, Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "./LoginPage.module.css";
import Center from "../components/UI/Center";

const LoginPage = () => {
  return (
    <Center className={styles.login}>
      <Card>
        <Form method="post">
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />
          <Button className={styles["btn-login"]} type="submit">
            Login
          </Button>
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
    </Center>
  );
};

export default LoginPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  const res = await fetch("http://localhost:8090/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (!res.ok) return res;

  const responseData = await res.json();

  console.log(responseData);
}
