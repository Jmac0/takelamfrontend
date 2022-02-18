import React from 'react';
import { NavBar, NavElement } from '../styles/Container.styles';
import 'styles/styles.css';

type Props = {
  path: boolean;
  about: boolean;
};

export default function Nav(props: Props) {
  const { path, about } = props;
  return (
    <NavBar path={path}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavElement to="/">HOME</NavElement>
        <NavElement to="about">
          ABOUT
          {about && '     →'}
        </NavElement>

        <NavElement to="properties">PROPERTIES</NavElement>
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
            {/* todo change routs to be siblings */}
          <NavElement className="subMenu" to="about/our-vision">
            OUR VISION
          </NavElement>
          <NavElement className="subMenu" to="about/interiors">
            INTERIOR DESIGN
          </NavElement>
          <NavElement className="subMenu" to="about/uk-services">
            UK SERVICES
          </NavElement>
        </div>
      )}
    </NavBar>
  );
}
