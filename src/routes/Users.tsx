import React from 'react';
import EmailAndPasswordForm from '../components/EmailAndPasswordForm';
import {
  LoginContainer,
} from '../styles/Admin.Styles';
import AdminNav from "../components/AdminNav";

interface Props {
  setShowPropertiesOrPages: (_arg: string) => void;
}

function Users( {setShowPropertiesOrPages}: Props) {
  const handleSubmit = (evt: any): void => {
    alert('hello');
  };
  return (
    <div style={{ width: '100%' }}>
{/*
      <AdminMenu>
        <Button onClick={() => navigate('/admin')} type="button">
          {' '}
          <span>
            <HouseIcon /> Properties
          </span>
        </Button>
        <Button onClick={() => {navigate('/admin'); setShowPropertiesOrPages('pages')}}>
          <span>
            <PagesIcon /> Pages
          </span>
        </Button>
        <Button onClick={() => navigate('/users')}>Users</Button>
        <Button onClick={auth.signOut}>Logout</Button>
      </AdminMenu>
*/}
<AdminNav setShowPropertiesOrPages={setShowPropertiesOrPages}   />
      <LoginContainer>
        <EmailAndPasswordForm
          heading="Update user"
          buttonLabel="Update"
          emailLabel="New email"
          handleSubmit={handleSubmit}
          passwordLabel="New password"
        />
      </LoginContainer>
    </div>
  );
}

export default Users;
