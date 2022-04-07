import styled from 'styled-components';
import colors from 'styles/colors';
import { Cross } from '@styled-icons/entypo/';
import { Warning } from '@styled-icons/fluentui-system-filled/Warning';
import logo from '../images/admin_logo.png';

interface Props {
  showPropertyForm?: boolean;
  onSubmit?: any;
  showPropertiesOrPages?: string;
}
const AdminContainer = styled.div`
  //position: relative;
  //  height: 100vh;
  width: 100vw;
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(90vw, max-content));
  justify-content: center;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;

  @media screen and (min-width: 850px) {

    grid-template-columns: repeat(auto-fit, minmax(22rem, max-content));
    justify-content: start;
  }
  @media screen and (min-width: 1400px) {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minmax(22rem, max-content));
  }
`;
// todo align content for larger screen to left  for admin items
const AdminMenu = styled.div`
  display: grid;
  text-align: center;
  padding: 0 2rem 0 2rem;
  grid-template-areas: 'logo nav side';
  grid-template-columns: auto auto auto;
  align-items: center;
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
  
    margin-left: 2rem;
    
    }
  
  }
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
    &:hover{
      background-color: red;
    }
  }

  h1 {
    margin-top: 0;

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
    props.showPropertiesOrPages === 'pages' ? 'flex' : 'none'};
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

/*
const EditButton = styled.button`
  width: 30%;
  margin: 1rem;
  border: none;
  border-radius: 10rem;
  color: white;
  text-align: center;
  text-decoration: none;
  height: 1rem;
  background-color: ${colors.tan};

  &:hover {
    background-color: black;
  }
`;
*/









const PropertyFormList = styled.form<Props>`
  z-index: 10;
  display: ${(props) => (props.showPropertyForm ? 'flex' : 'none')};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  align-self: center;
  justify-self: center;
  padding: 1rem;
//  background-color: ${colors.tan};


  background: url(${logo}),
  linear-gradient(to top, ${colors.blue} 100%, white 0%);
  background-blend-mode: overlay;
  background-color: ${colors.blue};
  background-position: 50% 50%;
  background-size: 10%;
  
  
  
  h1 {
    color: ${colors.blue};
    align-self: center;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 80vw;

    label {
      font-weight: 300;
      color: ${colors.blue};
      font-size: 1.2rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      min-width: 120px;
      justify-self: end;
      padding-right: 30px;
    }
    input {
      padding: 5px;
      width: 25rem;
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      height: 2.5rem;
      max-width: 90%;
      justify-self: center;
    }

    input:active,
    input:focus {
      outline: none;
      border: 2px solid ${colors.blue};
      border-radius: 6px;
      background-color: #f3f3f1;
    }
    /*Styles for image upload button*/
    input[type='file']::file-selector-button {
      width: 10rem;
      text-transform: uppercase;
      font-weight: 300;
      color: ${colors.blue};
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
      border-radius: 6px;
      height: 40px;
      border: 1px solid #d0c6b7;
      background: white;
      transition: 0.5s;
    }

    input[type='file']::file-selector-button:hover {
      background: ${colors.blue};
      color: ${colors.white};
    }

    textarea {
      padding: 5px;
      border-radius: 10px;
      flex-grow: 1;
      height: 12rem;
      min-width: 20rem;
      max-width: 90%;
      justify-self: center;
      resize: none;
      font-size: 1rem;
      font-family: 'Lato', sans-serif;
      letter-spacing: 0.1em;
    }

    textarea:focus,
    textarea:active {
      outline: none;
      background-color: #f3f3f1;
      border: 2px solid ${colors.blue};
    }
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
/* close popup icon */
const XIcon = styled(Cross)`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  margin-top: 1rem;
  color: ${colors.blue};
  width: 60px;

  &:hover {
    color: red;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  min-width: 200px;
  padding: 1rem 2rem;
  background: ${colors.white};
  outline: 1px solid ${colors.blue};
  color: ${colors.blue};
  font-weight: 300;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  margin: 5px 0 0 0;
  font-size: 16px;
  border-radius: 6px;
  transition: 0.5s;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: ${colors.blue};
    color: ${colors.white};
  }

  &:disabled {
    background-color: gray;
    color: lightgrey;
  }
`;

const WarningIcon = styled(Warning)`
  height: 1.5rem;
  margin-right: 0.5rem;
  color: indianred;
`;

/* List item in admin, for each property in the DB */

export {
  AdminContainer,
  PageItem,
  PropertyFormList,
  Button,
  XIcon,
  PropertyItem,
  WarningIcon,
  AdminMenu,
  Loader,
  // LoadingIcon,
  // ButtonWithLoadingIcon
};
