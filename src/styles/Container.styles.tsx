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
  overflow-x: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'nav'
    'logo'
    'main'
    'footer';

  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.8fr;
    grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';
  }
  /*
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
  */
`;

const PageLogo = styled.div<Props>`
  grid-area: logo;
  margin-top: 5rem;
  background-image: url(${(props) => (props.path ? '' : Logo)});
  height: 10rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 680px) {
    margin-top: 2rem;
    height: 80%;
    z-index: 0;
    grid-area: logo;
    max-width: 80%;
    max-height: 80%;
    background-position: center;
    background-size: contain;
  }
`;

/* todo Rename for desk-top  */
const NavBar = styled.nav<Props>`
  grid-area: main;
  z-index: 0;
  display: ${(props) => !props.path && 'none'};
  width: 100%;
  margin-left: 20%;
  @media screen and (min-width: 680px) {
    padding: 140px 0 0 20%;
    width: 100%;
    margin: 0;
    z-index: 1;
    grid-area: nav;
    display: flex;
  }
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
  height: 17rem;
  align-self: stretch;
  max-width: 100%;
  contain: content;
  grid-area: footer;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.path ? tearWhite : tearTan)});

  @media screen and (min-width: 680px) {
    z-index: 0;
    height: 100%;
    max-width: 100%;
    grid-area: footer;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: url(${(props) => (props.path ? tearWhite : tearTan)});
  }
`;
export {
  NavBar, NavElement, Container, PageTear, PageLogo,
};
