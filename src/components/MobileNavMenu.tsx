import React from 'react';
import { SlideOutMenu } from '../styles/MobileNav.Styles';
import { NavElement } from '../styles/Container.styles';

interface Props {
    open: boolean
}
function MobileNavMenu(props: Props) {
  const { open } = props;
  return (
    <SlideOutMenu open={open}>
      <NavElement to="about">ABOUT</NavElement>
      <NavElement to="properties">PROPERTIES</NavElement>
      <NavElement to="contact">CONTACT</NavElement>
    </SlideOutMenu>
  );
}

export default MobileNavMenu;
