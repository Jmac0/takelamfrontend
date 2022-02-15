import React from 'react';
import { MobileNavBarContainer } from '../styles/MobileNav.Styles';
import HamburgerIcon from './HamburgerIcon';
import MobileNavMenu from './MobileNavMenu';

type Path = {
  path: boolean;
  open: boolean;
  setOpen: any;
};
function MobileNavBar(props: Path) {
  const { path, open, setOpen } = props;
  return (
    <MobileNavBarContainer path={path}>
      <HamburgerIcon open={open} setOpen={setOpen} />
      <MobileNavMenu open={open} setOpen={setOpen} />
    </MobileNavBarContainer>
  );
}

export default MobileNavBar;
