import React, { FC, useState } from "react";
import { Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks";

export const SignIn = (): JSX.Element => {
  const { login } = useActions();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [check, setCheck] = useState(true);

  const signIn = () => {
    login(email, password);
  };

  return (
    <>
      <Col>
        <h5>SIGN IN</h5>
        <Form>
          <Form.Group className="mb-3" controlId="formLoginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLoginCheckbox">
            <Form.Check
              type="checkbox"
              checked={check}
              onChange={() => setCheck(true)}
              label="Remember me"
            />
          </Form.Group>
          <Button variant="main" onClick={signIn}>
            SIGN IN
          </Button>
        </Form>
      </Col>
    </>
  );
};
