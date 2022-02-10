import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import tear from 'images/tear.png';

type Props = {
  path: boolean;
};

const Container = styled.div<Props>`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.8fr;
  grid-template-areas:
    'logo main side'
    'nav  main side'
    'footer footer footer';
  margin: 0;
  width: 100vw;
  height: 100vh;

  &.fade-enter {
    opacity: 0;
    z-index: 2;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  &.fade-exit {
    z-index: 2;
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;

    transition: opacity 200ms ease-out;
  }
`;

const NavBar = styled.nav<Props>`
  padding: 20% 0 0 20%;
  margin: 0;
  z-index: 1;
  align-self: center;
  grid-area: nav;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavElement = styled(NavLink)`
  color: #e3d8c1;
  font-size: 1.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-decoration: none;
  margin: 0.3rem;
`;

const PageTear = styled.div<Props>`
  z-index: 0;
  height: 100%;
  max-width: 100%;
  /*
  grid-row-start: 3;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-end: 4;
  */
  grid-area: footer;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-image: url(${tear});
`;
export {
  NavContainer, NavBar, NavElement, Container, PageTear,
};
