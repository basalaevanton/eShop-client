import React, { useEffect, useState } from "react";
import { withAppLayout } from "../layout/";

import { useTypedSelector, useActions } from "../hooks";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CreateAccount, SignIn } from "../components";

const AuthPage = () => {
  return (
    <>
      <Container fluid="lg">
        <h1>Hello there!</h1>
        <p> Please sign in or create account to continue </p>

        <Row>
          <SignIn />
          <CreateAccount />
        </Row>
      </Container>
    </>
  );
};

export default withAppLayout(AuthPage);
