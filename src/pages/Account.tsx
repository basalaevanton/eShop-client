import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useActions } from "../hooks";
import { withLayout } from "../layout/Layout";

const Account = () => {
  const { logout } = useActions();

  return (
    <>
      <h2>Account</h2>
      <Button variant="main" onClick={logout}>
        LogOut
      </Button>
    </>
  );
};

export default withLayout(Account);
