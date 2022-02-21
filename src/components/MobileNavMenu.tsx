import React from 'react';
import { SlideOutMenu } from '../styles/MobileNav.Styles';
import { NavElement } from '../styles/Container.styles';

interface Props {
    open: boolean
    setOpen: any;
}
function MobileNavMenu(props: Props) {
  const { open, setOpen } = props;
  return (

    <SlideOutMenu open={open}>
      <NavElement onClick={setOpen} to="about">ABOUT</NavElement>

      <NavElement onClick={setOpen} to="about/our-vision">
        OUR VISION
      </NavElement>
      <NavElement onClick={setOpen} to="about/interiors">
        INTERIOR DESIGN
      </NavElement>
      <NavElement onClick={setOpen} to="about/uk-services">
        UK SERVICES
      </NavElement>

      <NavElement onClick={setOpen} to="properties">PROPERTIES</NavElement>
      <NavElement onClick={setOpen} to="contact">CONTACT</NavElement>
    </SlideOutMenu>
  );
}

export default MobileNavMenu;
