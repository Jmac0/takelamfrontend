import React from 'react';
import { MobileNavBarContainer } from '../styles/MobileNav.Styles';
import HamburgerIcon from './HamburgerIcon';
import MobileNavMenu from './MobileNavMenu';

type Path = {
  path: boolean;
  open: boolean;
  setOpen: any;
  propertyPage: boolean;
};
function MobileNavBar(props: Path) {
  const { path, open, setOpen, propertyPage } = props;
  return (
    <MobileNavBarContainer path={path}>
      <HamburgerIcon open={open} setOpen={setOpen} />
      <MobileNavMenu open={open} setOpen={setOpen}  propertyPage={propertyPage}/>
    </MobileNavBarContainer>
  );
}

export default MobileNavBar;
