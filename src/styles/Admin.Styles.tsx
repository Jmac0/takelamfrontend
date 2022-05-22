import styled from 'styled-components';
import colors from 'styles/colors';
import { Warning } from '@styled-icons/fluentui-system-filled/Warning';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { Key, Person, HouseDoor } from "@styled-icons/bootstrap";
import logo from '../images/admin_logo.png';
import tearTan from '../images/tear_tan.png';

interface Props {
  showPropertyForm?: boolean;
  onSubmit?: any;
  isEditing?: boolean;
  onClick?: any;
  showPropertiesOrPages?: string;
  showUserMessage?: boolean;
  isErrorMessage?: boolean;
}

const LoginContainer = styled.div`
  /*
  background: url(${tearTan}) no-repeat;
  background-position-x: 100%;
  background-position-y: 100%;
*/
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
`;

const AdminContainer = styled.div`
  //position: relative;
  height: 100%;
  width: 100vw;
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(90vw, max-content));
  justify-content: center;
  //  min-height: -webkit-fill-available;

  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, max-content));
    justify-content: start;
  }
  @media screen and (min-width: 1400px) {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minmax(22rem, max-content));
  }
`;
const AdminMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: row;
 padding: 0.75rem 0 0.75rem 0;
  border-bottom: 3px solid ${colors.grey};

  background: url(${logo}),
  linear-gradient(to top, ${colors.blue} 100%, white 0%);
  background-blend-mode: overlay;
  background-color: ${colors.blue};
  background-position: 50% 50%;
  background-size: 30%;
  .logo {
    grid-area: logo;
    color: ${colors.tan};
  }

  button {
    max-width: fit-content !important;
color: ${colors.white};
    font-weight: 100;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    border: none;
    margin: 0;
    
    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
    
    }
  
  }
`;

const HouseIcon = styled(HouseDoor)`
  color: ${colors.white};
  width: 1.3rem;
  margin-right: 0.3rem;
`;

const PersonIcon = styled(Person)`
  color: ${colors.white};
  width: 1.3rem;
  margin-right: 0.3rem;
`;
const PagesIcon = styled(Edit)`
  color: ${colors.white};
  width: 1.3rem;
  margin-right: 0.3rem;
`;

/* List in admin, an item component for each page of
 site */

const PropertyItem = styled.div<Props>`
  display: ${(props) =>
    props.showPropertiesOrPages === 'properties' ? 'flex' : 'none'};

  border-radius: 15px;
  background: url(${logo}),
    linear-gradient(to top, ${colors.blue} 100%, white 0%);
  background-blend-mode: overlay;
  background-color: ${colors.blue};
  background-position: 50% 50%;
  background-size: 180%;
  border: 3px solid ${colors.grey};
  height: 15rem;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: ${colors.blue};

  .edit-btn {
    &:hover {
      background-color: ${colors.tan};
    }
  }

  .create-btn {
    &:hover {
      background-color: ${colors.tan};
    }
  }

  .delete-btn {
    background-color: indianred;
    margin-top: 3rem;
    &:hover {
      background-color: red;
    }
  }

  h1 {
    color: ${colors.tan};
    font-family: 'Oranienbaum', serif;
    font-size: 1.6rem;
    line-height: 1.2rem;
    margin: 0;
  }

  a {
    font-size: 1.3rem;
    color: ${colors.blue};
  }

  @media screen and (min-width: 850px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 600px;
  }
`;
const PageItem = styled(PropertyItem)<Props>`
  display: ${(props) =>
    props.showPropertiesOrPages === 'pages' && !props.isEditing
      ? 'flex'
      : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 0;
  background-color: ${colors.blue};
  border: 5px solid ${colors.tan};

  h1 {
    margin-bottom: 2rem;
  }
`;

const Loader = styled.span`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: load 1s infinite linear;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = styled.button<Props>`
  text-transform: uppercase;
  min-width: 200px;
  padding: 1rem 2rem;
  background: ${colors.white};
  color: ${colors.blue};
  font-weight: 300;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  margin: 5px 1rem 0 0;
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid ${colors.blue};
  transition: 0.5s;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: ${colors.grey};
    color: ${colors.white};
  }

  &:disabled {
    background-color: gray;
    color: lightgrey;
  }
`;

const ContactFormButton = styled.button`
  z-index: 100;
  text-transform: uppercase;
  width: fit-content;
  padding: 1rem 2rem;
  background: ${colors.white};
  color: ${colors.blue};
  font-weight: 300;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  margin: 5px 1rem 0 0;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid ${colors.tan};
  transition: 0.5s;

  &:hover {
    background: ${colors.tan};
    color: ${colors.white};
  }
`;




const PrintPageBtn = styled(Button)`
  margin: 5px 0 0 0;
min-width: 0;
  background: transparent;
  border: none;
  padding: 0;

  &:hover {
    background: ${colors.grey};
    color: ${colors.blue};
    text-decoration: underline;
  }
`

const UserMessageContainer = styled.div<Props>`
  width: fit-content;
  height: 1rem;
  margin: 1rem;
  padding: .7rem;
  border-radius: 6px;
  visibility: ${(props) => props.showUserMessage  ? 'visible' : 'hidden'};
  color: ${(props) => props.isErrorMessage  ? 'white' : 'darkgreen'};
  background-color:${(props) => props.isErrorMessage ?  'indianred' : '#91C072CA'}; 
`;

const WarningIcon = styled(Warning)`
  height: 1.5rem;
  width: auto;
  margin-right: 0.5rem;
  color: indianred;
`;

const KeyIcon = styled(Key)`
  height: 1.5rem;
  width: auto;
  margin-right: 0.5rem;
  color: white;
`;
export {
  AdminContainer,
  PageItem,
  Button,
  PrintPageBtn,
  PropertyItem,
  WarningIcon,
  AdminMenu,
  Loader,
  HouseIcon,
  PagesIcon,
  PersonIcon,
  KeyIcon,
  LoginContainer,
  ContactFormButton,
  UserMessageContainer,
};
