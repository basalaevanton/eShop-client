import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegModalprops } from "./RegModal.props";

export const RegModal = ({ show, onHide }: RegModalprops): JSX.Element => {
  const navigate = useNavigate();

  const close = () => {
    onHide();
    navigate("/account");
  };

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Good Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Woohoo, you are registration on Safari webShop!</h5>
          <p>Activate your profile, link in the your Email!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="main" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
