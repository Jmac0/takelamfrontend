import React from 'react';
import { NavContainer, NavBar, NavElement } from './styles/Container.styles';

type Props = {
  path: boolean;
};

export default function Nav(props: Props) {
  const { path } = props;
  return (
    <NavBar path={path}>
      <NavContainer>
        <NavElement to="/">HOME</NavElement>
        <NavElement to="about">ABOUT</NavElement>
        <NavElement to="interiors">PROPERTIES</NavElement>
        <NavElement to="contact">CONTACT</NavElement>
      </NavContainer>
    </NavBar>
  );
}
