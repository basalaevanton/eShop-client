import React, { FC, useState } from "react";
import { Col, Form, Button, Card } from "react-bootstrap";
import { RegModal } from "..";
import { useActions } from "../../hooks";
import { CreateUser } from "../../interfaces/user.interface";

export const CreateAccount = (): JSX.Element => {
  const [regModalVisible, setRegModalVisible] = useState<boolean>(false);

  const { registration } = useActions();

  const [user, setUser] = useState<CreateUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const regUser = () => {
    registration(user);
    setRegModalVisible(true);
  };

  return (
    <>
      <Col>
        <h5>CREATE ACCOUNT</h5>
        <Form>
          <Form.Group className="mb-3" controlId="forFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="first name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="forLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="last name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="forEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsLettersCheckbox">
            <Form.Check
              type="checkbox"
              label="I want to receive Safari newsletters with the best deals 
              and offers(пока не работает)"
            />
          </Form.Group>

          <Button variant="main" onClick={regUser}>
            CREATE ACCOUNT
          </Button>
        </Form>
      </Col>
      {/* ModalWindow */}
      <RegModal
        show={regModalVisible}
        onHide={() => setRegModalVisible(false)}
      />
    </>
  );
};
