import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useActions, useTypedSelector } from '../../../hooks';
import { AccountUser } from '../../../interfaces/user.interface';
import { UserInfoModalprops } from './UserInfoModal.props';

export const UserInfoModal = ({
  show,
  onHide,
}: UserInfoModalprops): JSX.Element => {
  const { userAccount } = useTypedSelector((state) => state.AccountDash);
  const { editUserInfo } = useActions();
  const [user, setUser] = useState<AccountUser>({
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: 'Male',
    birthday: new Date(),
  });

  useEffect(() => {
    setUser({ ...user, userId: userAccount.userId, email: userAccount.email });
  }, [userAccount]);

  const close = () => {
    editUserInfo(user);
    console.log(user);
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
          <Modal.Title>Edit user info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="forFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="first name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
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

            <Form.Group className="mb-3" controlId="forGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                value={user.gender}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Unknown</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forDateBirth">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                value={user.birthday.toISOString().slice(0, 10)}
                onChange={(e) =>
                  setUser({ ...user, birthday: new Date(e.target.value) })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="main" onClick={close}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
