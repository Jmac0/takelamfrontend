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

@media screen and (min-width: 850px){

  grid-template-rows: 18rem min-content 1fr;
  grid-template-columns: 0.7fr 1fr;
  grid-template-areas:
      'logo main'
      'nav  main'
      'footer footer';
}
  
  @media screen and (min-width: 1400px) {

    grid-template-columns: 1fr 1.5fr .5fr;
    grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';

  }

  @media screen and (min-width: 1500px) {

    width: 100%;
    height: 100%;
    grid-template-rows: 18rem min-content 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';

  }
`;

const PageLogo = styled.div<Props>`
  grid-area: logo;
  margin-top: 5rem;
  background-image: url(${(props) => (props.path ? '' : Logo)});
  height: 10rem;
  align-self: start;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  
  @media screen and (min-width: 850px) {
    background-position: 30%;
    height: 12rem;
  }
  
`;
/* todo Rename for desk-top  */
const NavBar = styled.nav<Props>`
  grid-area: main;
  z-index: 0;
  display: ${(props) => !props.path && 'none'};
  width: 100%;
  margin-left: 20%;
  
  
  
  @media screen and (min-width: 850px) {
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
  align-self: end;
  z-index: 0;
  height: 271px;
  width: 100%;
  margin-top: 5rem;
  contain: content;
  grid-area: footer;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.path ? tearWhite : tearTan)});
  background-position: bottom right;



`;
export {
  NavBar, NavElement, Container, PageTear, PageLogo,
};
