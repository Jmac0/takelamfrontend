import styled from 'styled-components';

type Props = {
  path: boolean;
};

const Container = styled.div<Props>`
  position: absolute;
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr 1fr;
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.path ? 'darkblue' : 'white')};

  &.fade-enter {
    opacity: 0;
    z-index: 2;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`;

// @ts-ignore
const NavBar = styled.nav<Props>`
  background: ${(props) => (props.path ? 'darkblue' : 'white')};
`;

export { NavBar, Container };
