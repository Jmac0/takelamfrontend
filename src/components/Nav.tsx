import React from 'react';
import { Atag, NavBar, NavElement } from "../styles/Container.styles";
import 'styles/styles.css';
import useAuth from './auth/useAuth';

type Props = {
  path: boolean;
  about: boolean;
  propertyPage: boolean
};

export default function Nav({ path, about, propertyPage }: Props) {
	const auth = useAuth();
  return (
      <NavBar path={path}>


        {propertyPage ?
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Atag href="/">HOME</Atag>
          <Atag href="/about">ABOUT</Atag>
          <Atag href="/properties">PROPERTIES</Atag>
          <Atag href="/contact">CONTACT</Atag>
</div>
          :


          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NavElement to="/">HOME</NavElement>
            <NavElement to="about">
              ABOUT
              {about && '     →'}
            </NavElement>

            <NavElement to="properties">PROPERTIES</NavElement>

            <NavElement to="contact">CONTACT</NavElement>
            <NavElement to="admin">
              {auth.isAuthenticated ? 'Admin' : 'Login'}
            </NavElement>

          </div>
        }
        {/* TODO changed position to fixed, check it works!  */}
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
