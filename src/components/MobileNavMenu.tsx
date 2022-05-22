import React from 'react';

import useAuth from './auth/useAuth';
import { SlideOutMenu } from '../styles/MobileNav.Styles';
import { Atag, NavElement } from '../styles/Container.styles';

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
      <NavElement onClick={setOpen} to="about">
        ABOUT
      </NavElement>

      <NavElement onClick={setOpen} to="about/our-vision">
        OUR VISION
      </NavElement>
      <NavElement onClick={setOpen} to="about/interiors">
        INTERIOR DESIGN
      </NavElement>
      <NavElement onClick={setOpen} to="about/uk-services">
        UK SERVICES
      </NavElement>

      <NavElement onClick={setOpen} to="properties">
        PROPERTIES
      </NavElement>
      <NavElement onClick={setOpen} to="contact">
        CONTACT
      </NavElement>

      <NavElement onClick={setOpen} to="admin">
        {auth.isAuthenticated ? 'Admin' : 'Login'}
      </NavElement>
    </SlideOutMenu>
  );
}

export default MobileNavMenu;
