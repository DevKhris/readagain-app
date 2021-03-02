import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Auth.css';

export default function Register() {
  return(
    <div className="ml-auto mr-auto wrapper">
        <div className="my-5" bg-white>
          <Form className="px-4">
            <FormGroup>
              <img className="img-fluid" src="../logo.png" alt="ReadAgain Logo"/>
              <p>Please Login:</p>
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="Insert username" required/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Insert email" require/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Insert password" required/>
            </FormGroup>
            <FormGroup>
              <Label for="confirm">Confirm Password</Label>
              <Input type="password" name="confirm" id="confirm" placeholder="Confirm password" required/>
            </FormGroup>
            <FormGroup>
              <Button className="btn-info">Register</Button>
            </FormGroup>
            <a href="login">Already have a account? Login</a>
          </Form>
        </div>
    </div>
  )
}