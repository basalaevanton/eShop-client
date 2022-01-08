import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useActions } from "../../hooks";
import { withAppLayout } from "../../layout/";

const Favorites = () => {
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

export default withAppLayout(Favorites);
