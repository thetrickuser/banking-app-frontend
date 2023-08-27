import React from "react";
import Center from "../components/UI/Center";
import { useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <Center>
      <h1>{title}</h1>
      <p>{message}</p>
    </Center>
  );
};

export default ErrorPage;
