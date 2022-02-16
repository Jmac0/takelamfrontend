import styled from 'styled-components';
import { NavElement } from './Container.styles';

interface Props {
  path?: boolean;
  open?: boolean;
  onClick?: any;
}

const MobileNavBarContainer = styled.nav<Props>`
  width: 100%;
  position: fixed;
  height: 3rem;
  background-color: #d0c6b7;
  grid-area: nav;
  display: ${(props) => props.path && 'none'};

  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const Hamburger = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 1;
  display: none;
  
  @media (max-width: 680px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
 
  div {
    //margin: 5px;
    width: 2rem;
    height: 0.20rem;
    background-color: white;
    border-radius: 10px;
    
    // transform 1px from left 
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(0%) scale(0%)' : 'translateX(0)')};
     //filter: blur(2px);
       filter: ${({ open }) => (open ? 'blur(0px)' : 'blur(0px)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
    
  }

`;

const SlideOutMenu = styled.div<Props>`
  display: flex;
  padding-top: 13rem;
  align-items: flex-start;
  flex-flow: column nowrap;
  position: fixed;
  transform: translateX(-100%);
  width: 75%;
  height: 100vh;
  background-color: #1d425d;
  opacity: 0;
  z-index: -1;
${NavElement}{
  margin: .3rem 0 1rem 3rem;
  
}
    

  @media (max-width: 680px) {
    transform: ${({ open }) => open && 'translateX(0) '};
    opacity: ${({ open }) => open && '1'};
  }
  transition: all .5s;
`;

export { MobileNavBarContainer, Hamburger, SlideOutMenu };
