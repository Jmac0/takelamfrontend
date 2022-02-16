import React from 'react';
import { Hamburger } from 'styles/MobileNav.Styles';

interface Props {
  open: boolean;
  setOpen: () => void;
}

function HamburgerIcon({ open, setOpen }: Props) {
  return (
    <Hamburger open={open} onClick={setOpen}>
      <div />
      <div />
      <div />
    </Hamburger>
  );
}

export default HamburgerIcon;
