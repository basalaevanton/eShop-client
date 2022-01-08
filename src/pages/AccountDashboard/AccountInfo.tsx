import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useActions, useTypedSelector } from "../../hooks";
import { AccLayout, withAppLayout } from "../../layout/";

const AccountInfo = () => {
  const { userAccount } = useTypedSelector((state) => state.AccountDash);
  const { user } = useTypedSelector((state) => state.AuthState);
  const { fetchUserInfo } = useActions();

  useEffect(() => {
    if (user.id) {
      fetchUserInfo(user.id);
    }
  }, [user]);

  return (
    <>
      <AccLayout>
        <h2>User Information</h2>

        <Card>
          <Card.Body>
            <Card.Title>
              {userAccount.firstName} {userAccount.lastName}
            </Card.Title>
            <Card.Text>Email: {userAccount.email} </Card.Text>
            <Card.Text>Gender: {userAccount.gender}</Card.Text>
            <Card.Text>Date of bith: {userAccount.birtday}</Card.Text>
          </Card.Body>
          <Button
            variant="outline-main"
            onClick={() => console.log("change password")}
            style={{ color: "black" }}
          >
            change password
          </Button>
        </Card>
      </AccLayout>
    </>
  );
};

export default withAppLayout(AccountInfo);
