import { AccLayoutProps } from "./AccLayout.props";
import styles from "./AccLayout.module.scss";

import React from "react";
import { AccNavigation } from "../../components";

import cn from "classnames";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useActions } from "../../hooks";

import { ReactComponent as SignOut } from "../../images/SignOut.svg";
import { useNavigate } from "react-router-dom";

export const AccLayout = ({ children }: AccLayoutProps): JSX.Element => {
  const navigate = useNavigate();
  const { logout } = useActions();

  const signOut = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Row>
        <Col sm={3}>
          <Card>
            <Card.Header>
              <Card.Title>ACCOUNT DASHBOARD</Card.Title>
            </Card.Header>
            <Card.Body className={styles.body}>
              <AccNavigation className={styles.navigation} />
              <Button
                variant="outline-main"
                onClick={signOut}
                className={styles.button}
              >
                <SignOut />
                LogOut
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9}>
          <div className={styles.children}>{children}</div>
        </Col>
      </Row>
    </>
  );
};
