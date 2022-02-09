import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './styles/Container.styles';

type Props = {
  path: boolean;
};

export default function Nav(props: Props) {
  const { path } = props;
  return (
    <NavBar path={path}>
      <h4>Nav</h4>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="interiors">Interiors</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </NavBar>
  );
}
