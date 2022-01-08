import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useActions } from "../../hooks";
import { AccLayout, withAppLayout } from "../../layout/";

const Orders = () => {
  const { logout } = useActions();

  return (
    <>
      <AccLayout>
        <h2>Account Order</h2>
      </AccLayout>
    </>
  );
};

export default withAppLayout(Orders);
