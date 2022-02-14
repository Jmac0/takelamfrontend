import React from 'react';
import { Hamburger } from 'styles/MobileNav.Styles';

interface Props {
  open: boolean;
  setOpen: () => void;
}

function HamburgerIcon(props: Props) {
  const { open, setOpen } = props;
  return (
    <Hamburger open={open} onClick={setOpen}>
      <div />
      <div />
      <div />
    </Hamburger>
  );
}

export default HamburgerIcon;
