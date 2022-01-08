import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserInfoModal } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { AccLayout, withAppLayout } from '../../layout/';

const AccountInfo = () => {
  const [userModalVisible, setUserModalVisible] = useState<boolean>(false);

  const { userAccount } = useTypedSelector((state) => state.AccountDash);
  const { user } = useTypedSelector((state) => state.AuthState);
  const { fetchUserInfo } = useActions();

  useEffect(() => {
    if (user?.id) {
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
              Name:{userAccount.firstName} {userAccount.lastName}
            </Card.Title>
            <Card.Text>Email: {userAccount.email} </Card.Text>
            <Card.Text>Gender: {userAccount.gender}</Card.Text>
            <Card.Text>Date of bith: {userAccount.birthday}</Card.Text>
          </Card.Body>
        </Card>
        <div>
          <Button
            variant="outline-main"
            onClick={() => console.log('change password')}
          >
            change password(not work)
          </Button>
          <Button
            variant="outline-main"
            onClick={() => setUserModalVisible(true)}
          >
            Edit user
          </Button>
        </div>
      </AccLayout>

      <UserInfoModal
        show={userModalVisible}
        onHide={() => setUserModalVisible(false)}
      />
    </>
  );
};

export default withAppLayout(AccountInfo);
