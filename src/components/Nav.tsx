import React from 'react';
import { NavBar, NavElement } from '../styles/Container.styles';
import 'styles/styles.css';
import useAuth from './auth/useAuth';

type Props = {
  path: boolean;
  about: boolean;
};

export default function Nav({ path, about }: Props) {
	const auth = useAuth();
  return (
    <NavBar path={path}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavElement to="/">HOME</NavElement>
        <NavElement to="about">
          ABOUT
          {about && '     →'}
        </NavElement>

        <NavElement to="properties">PROPERTIES</NavElement>

        <NavElement to="contact">CONTACT</NavElement>
		  <NavElement  to="admin">
			  { auth.isAuthenticated ? 'Admin' : 'Login'}
		  </NavElement>

	  </div>
      {about && (
        <div
          style={{
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            top: '40px',
            left: '20px',
          }}
        >
			<div style={{display: 'none'}}>
			<NavElement className="subMenu" to="login">
				Admin
			</NavElement>
			</div>
			<NavElement className="subMenu" to="about/our-vision">
				OUR VISION
			</NavElement>
          <NavElement className="subMenu" to="about/interiors">
            INTERIOR DESIGN
          </NavElement>
          <NavElement className="subMenu" to="about/uk-services">
            UK SERVICES
          </NavElement>
        </div>
      )}
    </NavBar>
  );
}
