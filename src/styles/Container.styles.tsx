import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import tearWhite from 'images/tear_white.png';
import tearTan from 'images/tear_tan.png';
import Logo from 'images/logo_blue.png';

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

const PageLogo = styled.div<Props>`
  margin-top: 2rem;
  z-index: 0;
  grid-area: logo;
  max-width: 80%;
  max-height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /*Hide top left logo on splash page*/
  background-image: url(${(props) => (props.path ? '' : Logo)});
`;

const NavBar = styled.nav<Props>`
  padding: 140px 0 0 20%;
  width: 100%;
  margin: 0;
  z-index: 1;
  grid-area: nav;
  display: flex;
`;

const NavElement = styled(NavLink)`
  color: #ccbd91;
  font-size: 1.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  letter-spacing: 0.15em;
  text-decoration: none;
  margin: 0.3rem;
  &:hover {
    text-decoration: underline;
  }
`;

const PageTear = styled.div<Props>`
  z-index: 0;
  height: 100%;
  max-width: 100%;
  grid-area: footer;
  background-repeat: no-repeat;
  background-position: bottom right;
  /*change tear image from white to tan if no on splash page*/
  background-image: url(${(props) => (props.path ? tearWhite : tearTan)});
`;
export {
  NavBar, NavElement, Container, PageTear, PageLogo,
};
