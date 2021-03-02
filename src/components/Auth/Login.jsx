import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Auth.css";

async function auth(credentials) {
  return fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handler = async (e) => {
    e.preventDefault();
    const token = await auth({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="ml-auto mr-auto wrapper">
      <div className="">
        <Form onSubmit={handler} className="px-4">
          <FormGroup>
            <img className="img-fluid" src="../logo.png" alt="ReadAgain Logo" />
            <p className="text-center">Log in with your credentials</p>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Insert username"
              isrequired
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Insert password"
              isrequired
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" className="btn-info">
              Login
            </Button>
          </FormGroup>
          <a href="register">Need a account? Register</a>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
