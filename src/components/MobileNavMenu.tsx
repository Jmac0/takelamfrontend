import React from 'react';

import useAuth from './auth/useAuth';
import { SlideOutMenu } from '../styles/MobileNav.Styles';
import { Atag, LoginButton, NavElement } from "../styles/Container.styles";
import { LoginKey } from "../styles/Admin.Styles";

interface Props {
  open: boolean;
  setOpen: any;
  propertyPage: boolean;
}
function MobileNavMenu({ open, setOpen, propertyPage }: Props) {
  const auth = useAuth();
  return propertyPage ? (
    <SlideOutMenu open={open}>
      <Atag href="/">HOME</Atag>
      <Atag href="/about">ABOUT</Atag>
      <Atag href="/about/our-vision">OUR VISION</Atag>
      <Atag href="/about/interiors">INTERIOR DESIGN</Atag>
      <Atag href="/about/uk-services">UK SERVICES</Atag>
      <Atag href="/properties">PROPERTIES</Atag>
      <Atag href="/contact">CONTACT</Atag>
    </SlideOutMenu>
  ) : (
    <SlideOutMenu open={open}>

		<NavElement onClick={setOpen} to="about/our-services">
		  OUR SERVICES
	  </NavElement>

      <NavElement onClick={setOpen} to="about/acquisition">
		  PROPERTY ACQUISITION
      </NavElement>
      <NavElement onClick={setOpen} to="about/development">
        PROPERTY DEVELOPMENT
      </NavElement>
      <NavElement onClick={setOpen} to="about/investments">
        PROPERTY INVESTMENTS
      </NavElement>

{/*
      <NavElement onClick={setOpen} to="properties">
        PROPERTIES
      </NavElement>
*/}
      <NavElement onClick={setOpen} to="contact">
        CONTACT
      </NavElement>

      <div style={{position: 'relative', bottom: '-8rem', color: 'white'}}>
        <LoginButton to="admin">
          {auth.isAuthenticated ? 'ADMIN' : <LoginKey />}
        </LoginButton>
      </div>
      {/*

       <NavElement onClick={setOpen} to="admin">
        {auth.isAuthenticated ? 'Admin' : 'Login'}
      </NavElement>
*/}
    </SlideOutMenu>
  );
}

export default MobileNavMenu;
