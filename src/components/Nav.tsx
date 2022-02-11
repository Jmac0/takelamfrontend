import React from 'react';
import { NavBar, NavElement } from '../styles/Container.styles';
import 'styles/styles.css';

type Props = {
  path: boolean;
  about: boolean;
};

export default function Nav(props: Props) {
  const { path, about } = props;
  // @ts-ignore
  return (
    <NavBar path={path}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavElement to="/">HOME</NavElement>
        <NavElement to="about">
          ABOUT
          {about && '     →'}
        </NavElement>

        <NavElement to="interiors">PROPERTIES</NavElement>
        <NavElement to="contact">CONTACT</NavElement>
      </div>
      {about && (
        <div
          style={{
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            top: '40px',
            left: '20px',
          }}
        >
          <NavElement className="subMenu" to="about">
            OUR VISION
          </NavElement>
          <NavElement className="subMenu" to="about">
            INTERIOR DESIGN
          </NavElement>
          <NavElement className="subMenu" to="about">
            UK SERVICES
          </NavElement>
        </div>
      )}
    </NavBar>
  );
}
