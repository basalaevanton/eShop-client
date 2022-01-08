import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useActions } from "../../hooks";
import { AccLayout, withAppLayout } from "../../layout/";

const AccountInfo = () => {
  return (
    <>
      <AccLayout>
        <h2>Account Info</h2>
      </AccLayout>
    </>
  );
};

export default withAppLayout(AccountInfo);
