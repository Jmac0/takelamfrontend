import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import tearWhite from 'images/tear_white.png';
import tearTan from 'images/tear_tan.png';
import Logo from 'images/logo_blue.png';
import colors from 'styles/colors'

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
  height: auto;
  min-height: -webkit-fill-available;
@media screen and (min-width: 850px){

  grid-template-rows: 18rem min-content 1fr;
  grid-template-columns: 0.7fr .8fr 0fr;
  grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';
}
  
  @media screen and (min-width: 1400px) {

    grid-template-columns: 1fr 1.5fr .3fr;
    grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';

  }

  @media screen and (min-width: 1500px) {

    width: 100%;
    height: 100%;
    grid-template-rows: 15rem min-content 1fr;
    grid-template-columns: 1fr 1.3fr .3fr;
    grid-template-areas:
      'logo main side'
      'nav  main side'
      'footer footer footer';

  }
`;

const PageLogo = styled.div<Props>`
  grid-area: logo;
  background-image: url(${(props) => (props.path ? '' : Logo)});
  height: 15rem;
  width: 15rem;
  z-index: -2;
  align-self: center;
  justify-self: center;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  
  @media screen and (min-width: 850px) {
    align-self: flex-start;
	width: 25rem;
	height: 12rem;
    justify-self: flex-start;
    background-position: 100px;
    margin-top: 5rem;
  }
  
`;
const NavBar = styled.nav<Props>`
  grid-area: main;
  z-index: 0;
  display: ${(props) => !props.path && 'none'};
  width: 100%;
  margin-top: ${(props) => props.path && '10rem'};;
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
  color: ${colors.tan};
  font-size: 1.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  letter-spacing: 0.09em;
  text-decoration: none;
  margin: 0.3rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled(NavElement)`
  color: #d9d6d6;
`;

const Atag = styled.a`

  color: ${colors.tan};
  font-size: 1.2rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  letter-spacing: 0.09em;
  text-decoration: none;
  margin: .3rem;
  &:hover {
    text-decoration: underline;
  }
`

const NavElementDark = styled(NavElement)`
	color: ${colors.blue};
  margin: 0;
`;

const PageTear = styled.div<Props>`
  align-self: end;
  z-index: 0;
  height: 271px;
  width: 100%;
  margin-top: 0;
  contain: content;
  grid-area: footer;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.path ? tearWhite : tearTan)});
  background-position: bottom right;



`;
export {
Atag,  NavBar, NavElement, NavElementDark, Container, PageTear, PageLogo, LoginButton
};
