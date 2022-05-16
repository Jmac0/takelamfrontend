import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavElement } from 'styles/Container.styles';
import AdminNav from '../components/AdminNav';

interface Props {
  setShowPropertiesOrPages: (_arg: string) => void;
}

function Users({ setShowPropertiesOrPages }: Props) {
  return (
    <div>
      <div />
      <AdminNav setShowPropertiesOrPages={setShowPropertiesOrPages} />

      <div
        style={{
          backgroundColor: `#003a68`,
          padding: '.3rem 0 .3rem 1.8rem',
          display: 'flex',
        }}
      >
        <div style={{marginRight: '2rem'}}><NavElement to="/users/update-me">Update</NavElement></div>
        <div style={{marginRight: '2rem'}}><NavElement to="/users/create-admin">Create
          Admin</NavElement></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Users;
