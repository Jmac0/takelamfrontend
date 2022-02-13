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
  grid-area: logo;
  margin-top: 5rem;
  background-image: url(${(props) => (props.path ? '' : Logo)});

  height: 10rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 680px) {
    margin-top: 2rem;
    z-index: 0;
    grid-area: logo;
    max-width: 80%;
    max-height: 80%;
    background-position: center;
    background-size: contain;
  }
`;

const MobileNavBar = styled.nav`
width: 100%;
position: fixed;
height: 3rem;
background-color: #D0C6B7;
grid-area: nav;  

`;

const NavBar = styled.nav<Props>`
  display: ${(props) => !props.path && 'none'};

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
  left: 50%;
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
  }`;
export {
  NavBar, NavElement, Container, PageTear, PageLogo, MobileNavBar,
};

/*
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
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'nav'
    'logo'
    'main'
    'footer';
  width: 100vw;
 height: 100vh;

  ////// desk top //////
  @media screen and (min-width: 680px) {
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
  }

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
  left: 0;
  margin-top: 0;
  height: 14rem;
  width: inherit;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  grid-area: logo;
  background-image: url(${(props) => (props.path ? '' : Logo)});
  @media screen and (min-width: 680px) {
    margin-top: 2rem;
    grid-area: logo;
    z-index: 0;
    max-width: 80%;
    max-height: 80%;
    /!*Hide top left logo on splash page*!/
  }
`;

const NavBar = styled.nav<Props>`
  display: none;
  @media screen and (min-width: 680px) {
    visibility: visible;
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
  height: 100%;
  max-width: 100%;
  grid-area: footer;
  background-repeat: no-repeat;
  background-position: bottom right;
  /!*change tear image from white to tan if no on splash page*!/
  background-image: url(${(props) => (props.path ? tearWhite : tearTan)});
`;
export {
  NavBar, NavElement, Container, PageTear, PageLogo,
};
*/
